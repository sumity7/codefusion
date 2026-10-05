/*
 * Renders listing thumbnails for every published product with preview source,
 * in both themes, using the storefront's own preview builder
 * (client/src/services/previewSource.js), and stores them in MongoDB.
 *
 *   npm run thumbnails                 render only missing or stale images
 *   npm run thumbnails -- --force      re-render everything
 *   npm run thumbnails -- --slug=finora
 *
 * Needs a Chromium for Playwright: `npx playwright-core install chromium-headless-shell`
 * (or set CHROME_PATH to an installed Chrome). Runs in CI via
 * .github/workflows/thumbnails.yml.
 */
import "dotenv/config";
import mongoose from "mongoose";
import { chromium } from "playwright-core";
import { connectDB } from "../src/config/db.js";
import Product from "../src/models/Product.js";
import Thumbnail from "../src/models/Thumbnail.js";
import { sourceHash } from "../src/utils/hash.js";
import { buildPreviewSource, isFullPagePreview, PREVIEW_DESIGN_WIDTH } from "../../client/src/services/previewSource.js";

const FORCE = process.argv.includes("--force");
const ONLY = process.argv.find((a) => a.startsWith("--slug="))?.slice(7);
// Cards are roughly 4:3. Output is 720x540 for every product.
const OUT = { width: 720, height: 540 };
const SETTLE_MS = Number(process.env.THUMB_SETTLE_MS || 900);

function viewportFor(product) {
  if (isFullPagePreview(product)) {
    // Whole pages render at desktop width and are scaled down, like the cards do.
    const scale = OUT.width / PREVIEW_DESIGN_WIDTH;
    return { width: PREVIEW_DESIGN_WIDTH, height: Math.round(OUT.height / scale), deviceScaleFactor: scale };
  }
  // Components render at card size, at 1.5x for crisp text.
  return { width: OUT.width / 1.5, height: OUT.height / 1.5, deviceScaleFactor: 1.5 };
}

async function launch() {
  const executablePath = process.env.CHROME_PATH || undefined;
  return chromium.launch({ headless: true, executablePath });
}

await connectDB();
const filter = { isPublished: true, previewCode: { $nin: ["", null] } };
if (ONLY) filter.slug = ONLY;
const products = await Product.find(filter).select("slug name category previewLayout previewCode thumbnail thumbnailLight").lean();

const browser = await launch();
const contexts = new Map();
async function pageFor(viewport) {
  const key = `${viewport.width}x${viewport.height}@${viewport.deviceScaleFactor}`;
  if (!contexts.has(key)) {
    const context = await browser.newContext({ viewport: { width: Math.round(viewport.width), height: Math.round(viewport.height) }, deviceScaleFactor: viewport.deviceScaleFactor, reducedMotion: "no-preference" });
    contexts.set(key, await context.newPage());
  }
  return contexts.get(key);
}

let rendered = 0;
let skipped = 0;
const failures = [];

for (const product of products) {
  const hash = sourceHash(product.previewCode);
  const update = {};
  for (const theme of ["dark", "light"]) {
    const existing = await Thumbnail.findOne({ slug: product.slug, theme }).select("sourceHash").lean();
    const field = theme === "dark" ? "thumbnail" : "thumbnailLight";
    const url = `/products/${product.slug}/thumbnail?theme=${theme}&v=${hash}`;
    if (!FORCE && existing?.sourceHash === hash) {
      // Image is current; make sure the product points at it (unless an admin set their own).
      if (!product[field] || product[field].startsWith("/products/")) update[field] = url;
      skipped++;
      continue;
    }
    try {
      const viewport = viewportFor(product);
      const page = await pageFor(viewport);
      // "listing" mode: exactly what a card renders (its scroll script stays idle).
      const html = buildPreviewSource(product, "listing", theme);
      await page.setContent(html, { waitUntil: "load", timeout: 20000 });
      await page.waitForTimeout(SETTLE_MS);
      const data = await page.screenshot({ type: "jpeg", quality: 80, fullPage: false });
      await Thumbnail.findOneAndUpdate(
        { slug: product.slug, theme },
        { $set: { product: product._id, slug: product.slug, theme, data, contentType: "image/jpeg", width: OUT.width, height: OUT.height, sourceHash: hash } },
        { upsert: true }
      );
      if (!product[field] || product[field].startsWith("/products/")) update[field] = url;
      rendered++;
    } catch (error) {
      failures.push(`${product.slug} (${theme}): ${error.message.split("\n")[0]}`);
    }
  }
  if (Object.keys(update).length) await Product.updateOne({ _id: product._id }, { $set: update });
}

await browser.close();
console.log(JSON.stringify({ products: products.length, rendered, skipped, failures }, null, 2));
await mongoose.disconnect();
process.exit(failures.length ? 1 : 0);
