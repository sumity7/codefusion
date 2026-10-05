import { Router } from "express";

import Product from "../models/Product.js";
import User from "../models/User.js";
import TokenTransaction from "../models/TokenTransaction.js";
import Category from "../models/Category.js";
import Collection from "../models/Collection.js";
import CopyRecord from "../models/CopyRecord.js";
import { recordEvent } from "../utils/events.js";
import Thumbnail from "../models/Thumbnail.js";
import Creator from "../models/Creator.js";
import { notifyProductUpdate } from "../jobs/notify.js";

import {
  authOptional,
  authRequired,
  adminRequired,
} from "../middleware/auth.js";

const router = Router();

// Shown first, in this order, in the default ("newest") listing — which is what
// the Home featured row and the top of /products use. An explicit sort (price,
// rating, popular) keeps its own order. Products that don't match the current
// filter simply aren't there to pin.
const PINNED_SLUGS = [
  "creative-agency-landing-page",
  "enterprise-delivery-landing-page",
  "ai-music-app-landing-page",
  "editorial-saas-landing-page",
];

function buildPreviewCode(data) {
  const html = String(
    data?.code?.html || ""
  );

  const css = String(
    data?.code?.css || ""
  );

  const javascript = String(
    data?.code?.javascript || ""
  );

  if (!html.trim()) {
    return "";
  }

  const isFullDocument =
    /<!doctype\s+html/i.test(
      html
    ) ||
    /<html\b/i.test(html);

  if (isFullDocument) {
    let output = html;

    const styleRegex =
      /<style\b[^>]*>([\s\S]*?)<\/style>/i;

    const scriptRegex =
      /<script\b[^>]*>([\s\S]*?)<\/script>/i;

    if (css.trim()) {
      if (
        styleRegex.test(output)
      ) {
        output = output.replace(
          styleRegex,
          `<style>
${css}
</style>`
        );
      } else if (
        /<\/head>/i.test(output)
      ) {
        output = output.replace(
          /<\/head>/i,
          `<style>
${css}
</style>
</head>`
        );
      }
    }

    if (javascript.trim()) {
      if (
        scriptRegex.test(
          output
        )
      ) {
        output = output.replace(
          scriptRegex,
          `<script>
${javascript}
</script>`
        );
      } else if (
        /<\/body>/i.test(output)
      ) {
        output = output.replace(
          /<\/body>/i,
          `<script>
${javascript}
</script>
</body>`
        );
      }
    }

    return output;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>CodeFusion Product Preview</title>

  <style>
${css}
  </style>
</head>

<body>
${html}

<script>
${javascript}
</script>
</body>
</html>`;
}

function publicProduct(product) {
  const obj =
    product?.toObject
      ? product.toObject()
      : product;

  // Premium payloads never leave the server unauthorized. `code` and `prompt` are
  // only ever returned by the token-gated copy endpoints. `previewCode` stays so the
  // sandboxed iframe can render a preview for guests.
  const {
    code,
    prompt,
    ...safe
  } = obj;

  return {
    ...safe,

    // A list query may have computed the flag before dropping the prompt.
    hasPrompt: obj.hasPrompt ?? Boolean(prompt),

    previewCode:
      obj.previewCode || "",
  };
}

// Listing payload: no source at all (the list query already dropped it; this
// is the last guard). `hasPreview` tells the card it can lazily fetch
// /:slug/preview once it's on screen.
function listingProduct(product) {
  const { previewCode, code, prompt, ...safe } = product;
  return safe;
}

// Fields the server owns. The admin editor posts back the whole record it
// loaded, so without this a save would overwrite live counters and ratings
// with whatever they were when the editor was opened.
const SERVER_MANAGED = ["_id", "__v", "createdAt", "updatedAt", "copyCount", "viewCount", "wishlistCount", "usageCount", "downloadCount", "popularityScore", "trendingScore", "rating", "reviewCount", "stats", "releases"];
function editableFields(body) {
  const out = { ...(body || {}) };
  for (const key of SERVER_MANAGED) delete out[key];
  return out;
}

/*
 * ADMIN — ALL PRODUCTS
 */
router.get(
  "/admin/all",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const products =
        await Product.find()
          // Source and prompts stay out of the list; the editor loads one
          // product in full via /admin/:id. previewCode stays for the
          // thumbnails — drafts aren't reachable through the public preview route.
          .select("-code")
          .lean()
          .sort({
            createdAt: -1,
          });

      res.json({
        products,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — ONE PRODUCT (full source, for the editor)
 */
router.get(
  "/admin/:id",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id).lean().catch(() => null);
      if (!product) return res.status(404).json({ message: "Product not found." });
      res.json({ product });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — CREATE PRODUCT
 */
router.post(
  "/admin",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const previewCode =
        buildPreviewCode(
          req.body
        );

      const data = {
        ...editableFields(req.body),

        previewMode:
          previewCode
            ? "source"
            : req.body
                ?.previewMode,

        previewCode,

        code: {
          html:
            req.body?.code
              ?.html || "",

          css:
            req.body?.code
              ?.css || "",

          javascript:
            req.body?.code
              ?.javascript || "",
        },

        lastUpdated:
          new Date(),
      };

      data.releases = [{ version: data.version || "1.0.0", date: new Date(), notes: (data.changelog || []).slice(-3), kind: "new" }];
      const product =
        await Product.create(
          data
        );

      res.status(201).json({
        product,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — UPDATE PRODUCT
 */
router.put(
  "/admin/:id",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const previewCode =
        buildPreviewCode(
          req.body
        );

      const data = {
        ...editableFields(req.body),

        previewMode:
          previewCode
            ? "source"
            : req.body
                ?.previewMode,

        previewCode,

        code: {
          html:
            req.body?.code
              ?.html || "",

          css:
            req.body?.code
              ?.css || "",

          javascript:
            req.body?.code
              ?.javascript || "",
        },

        lastUpdated:
          new Date(),
      };

      // A generated thumbnail of the old source would now be wrong. Drop the
      // generated URLs (not admin-pasted ones) so cards fall back to the live
      // preview until the next `npm run thumbnails`.
      const before = await Product.findById(req.params.id).select("previewCode thumbnail thumbnailLight slug version changelog").lean();
      // A changed version is a release: record it (with the changelog lines
      // added in this save) and tell the people who copied an older version.
      let releaseNotes = null;
      if (before && data.version && data.version !== before.version) {
        const previous = new Set(before.changelog || []);
        releaseNotes = (data.changelog || []).filter((line) => !previous.has(line)).slice(-5);
        data.$push = { releases: { version: data.version, date: new Date(), notes: releaseNotes, kind: "update" } };
      }
      if (before && before.previewCode !== previewCode) {
        const generated = (url) => typeof url === "string" && url.startsWith("/products/");
        if (generated(before.thumbnail) && (data.thumbnail === undefined || data.thumbnail === before.thumbnail)) data.thumbnail = "";
        if (generated(before.thumbnailLight) && (data.thumbnailLight === undefined || data.thumbnailLight === before.thumbnailLight)) data.thumbnailLight = "";
      }

      const product =
        await Product.findByIdAndUpdate(
          req.params.id,
          data,
          {
            new: true,
            runValidators: true,
          }
        );

      if (!product) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      res.json({
        product,
      });
      if (releaseNotes && product.isPublished) notifyProductUpdate(product, releaseNotes);
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — DUPLICATE PRODUCT
 */
router.post(
  "/admin/:id/duplicate",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const source =
        await Product.findById(
          req.params.id
        ).lean();

      if (!source) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      delete source._id;
      delete source.createdAt;
      delete source.updatedAt;

      const base =
        `${source.slug}-copy`;

      let slug = base;
      let counter = 2;

      while (
        await Product.exists({
          slug,
        })
      ) {
        slug =
          `${base}-${counter++}`;
      }

      const product =
        await Product.create({
          ...source,

          slug,

          name:
            `${source.name} Copy`,

          isPublished: false,

          previewCode:
            buildPreviewCode(
              source
            ),

          lastUpdated:
            new Date(),
        });

      res.status(201).json({
        product,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — DELETE PRODUCT
 */
router.delete(
  "/admin/:id",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const deleted =
        await Product.findByIdAndDelete(
          req.params.id
        );

      if (!deleted) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      res.json({
        message:
          "Product deleted.",
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PUBLIC — CATEGORIES WITH COUNTS
 */
router.get(
  "/categories",
  async (_req, res, next) => {
    try {
      const [categories, counts] = await Promise.all([
        Category.find({ isActive: true }).sort({ name: 1 }).lean(),
        Product.aggregate([
          { $match: { isPublished: true } },
          { $group: { _id: "$category", count: { $sum: 1 } } },
        ]),
      ]);

      const countMap = Object.fromEntries(counts.map((row) => [row._id, row.count]));
      const known = new Set(categories.map((cat) => cat.name));

      const result = categories.map((cat) => ({ name: cat.name, slug: cat.slug, count: countMap[cat.name] || 0 }));

      for (const row of counts) {
        if (row._id && !known.has(row._id)) {
          result.push({ name: row._id, slug: row._id.toLowerCase().replace(/[^a-z0-9]+/g, "-"), count: row.count });
        }
      }

      const total = counts.reduce((sum, row) => sum + row.count, 0);

      // Library-wide rating, weighted by each product's approved review count.
      const [rated] = await Product.aggregate([
        { $match: { isPublished: true, reviewCount: { $gt: 0 } } },
        { $group: { _id: null, weighted: { $sum: { $multiply: ["$rating", "$reviewCount"] } }, count: { $sum: "$reviewCount" } } },
      ]);
      const rating = rated?.count ? { value: (rated.weighted / rated.count).toFixed(1), count: rated.count } : null;

      res.json({ categories: result, total, rating });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PUBLIC — ACTIVE COLLECTIONS AND PACKS
 * Lets the storefront tell an unknown collection slug (404) apart from a real
 * collection that happens to have no products yet. `kind` separates curated
 * packs from ordinary collections.
 */
router.get(
  "/collections",
  async (_req, res, next) => {
    try {
      const [collections, counts] = await Promise.all([
        Collection.find({ isActive: true }).sort({ name: 1 }).select("name slug description kind").lean(),
        Product.aggregate([
          { $match: { isPublished: true } },
          { $unwind: "$collections" },
          { $group: { _id: { $toLower: "$collections" }, count: { $sum: 1 } } },
        ]),
      ]);
      const countMap = Object.fromEntries(counts.map((row) => [row._id, row.count]));
      res.json({
        collections: collections.map(({ name, slug, description, kind }) => ({
          name,
          slug,
          description,
          kind: kind || "collection",
          count: slug === "trending" ? null : countMap[name.toLowerCase()] || 0,
        })),
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PUBLIC — SEARCH INDEX FOR THE COMMAND PALETTE
 * Just enough per product to match and label results (~80 bytes each), so the
 * palette can search the whole catalogue on the client without the list payload.
 */
router.get("/search-index", async (_req, res, next) => {
  try {
    const rows = await Product.find({ isPublished: true })
      .select("slug name category productType discoveryTags tags -_id")
      .sort({ popularityScore: -1, createdAt: -1 })
      .lean();
    res.set("Cache-Control", "public, max-age=300");
    res.json({
      products: rows.map((p) => ({ s: p.slug, n: p.name, c: p.category, t: p.productType, k: [...(p.discoveryTags || []), ...(p.tags || [])] })),
    });
  } catch (error) {
    next(error);
  }
});

/*
 * PUBLIC — DISCOVERY TAGS WITH COUNTS
 */
router.get("/tags", async (_req, res, next) => {
  try {
    const rows = await Product.aggregate([
      { $match: { isPublished: true } },
      { $unwind: "$discoveryTags" },
      { $group: { _id: "$discoveryTags", count: { $sum: 1 } } },
      { $sort: { count: -1, _id: 1 } },
    ]);
    res.json({ tags: rows.map((row) => ({ name: row._id, count: row.count })) });
  } catch (error) {
    next(error);
  }
});

// Everything a listing card needs. The heavy fields (previewCode is often
// 5–60KB per product) are fetched per card, only once it's on screen; detail-page
// fields (features, specs, changelog) come with the product page.
const LISTING_DROP = ["previewCode", "code", "prompt", "seoTitle", "seoDescription", "changelog", "gallery", "features", "specifications", "shortDescription"];
const hasText = (field) => ({ $gt: [{ $strLenCP: { $ifNull: [field, ""] } }, 0] });

// "trending" is computed from real engagement, so the collection of that name
// is a sort over the whole catalogue rather than a hand-maintained tag.
const TRENDING_LIMIT = 24;

const SORTS = {
  popular: { popularityScore: -1, createdAt: -1 },
  trending: { trendingScore: -1, popularityScore: -1, createdAt: -1 },
  rating: null, // handled in memory, see below
  "price-asc": { priceAmount: 1, createdAt: -1 },
  "price-desc": { priceAmount: -1, createdAt: -1 },
  newest: { createdAt: -1 },
};

/*
 * PUBLIC — PRODUCT LIST
 *
 * ?page=N&limit=M pages the result (response carries total + hasMore). Without
 * `page` the whole filtered list comes back, still without preview source.
 * ?include=preview embeds previewCode — only honoured with ?slugs=, where the
 * caller asked for a handful of known products (the Home hero).
 */
router.get(
  "/",
  async (req, res, next) => {
    try {
      const {
        category,
        search,
        collection,
        featured,
        plan,
        slugs,
        tag,
        include,
      } = req.query;

      let sort = String(req.query.sort || "newest");
      if (sort === "price") sort = "price-asc";
      if (!(sort in SORTS)) sort = "newest";

      const filter = {
        isPublished: true,
      };

      // A caller that only needs a specific handful of products (e.g. the Home
      // hero + featured row) can ask for exactly those.
      const requestedSlugs = typeof slugs === "string"
        ? slugs.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean).slice(0, 100)
        : null;
      if (requestedSlugs?.length) {
        filter.slug = { $in: requestedSlugs };
      }

      if (
        category &&
        category !== "All"
      ) {
        filter.category =
          String(category);
      }

      let trendingCollection = false;
      if (
        collection &&
        collection !== "all"
      ) {
        if (String(collection).toLowerCase() === "trending") {
          trendingCollection = true;
          sort = "trending";
        } else {
          // URLs carry the collection's slug (/collections/saas-launch-kit)
          // while products store its display name ("SaaS Launch Kit"), so
          // resolve the slug to the name first. Matching is case-insensitive.
          const known = await Collection.findOne({ slug: String(collection).toLowerCase() }).select("name").lean();
          const escaped = String(known?.name || collection).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const name = new RegExp(`^${escaped}$`, "i");

          filter.$or = [
            { collection: name },
            { collections: name },
          ];
        }
      }

      const tags = (Array.isArray(tag) ? tag : typeof tag === "string" ? tag.split(",") : []).map((t) => String(t).trim()).filter(Boolean);
      if (tags.length) {
        filter.discoveryTags = { $all: tags };
      }

      if (
        featured === "true"
      ) {
        filter.isFeatured = true;
      }

      if (plan === "free") {
        filter.productType = "FREE";
      } else if (plan === "plan") {
        filter.productType = { $in: ["PRO", "PREMIUM"] };
      } else if (plan === "verified") {
        filter.isVerified = true;
      }

      if (search) {
        filter.$text = { $search: String(search).slice(0, 100) };
      }

      const withPreview = include === "preview" && requestedSlugs?.length;
      // Aggregation rather than find(): the flags have to be computed from
      // fields that are then dropped from the payload.
      let products = await Product.aggregate([
        { $match: filter },
        { $addFields: { hasPreview: hasText("$previewCode"), hasPrompt: hasText("$prompt") } },
        { $project: Object.fromEntries((withPreview ? ["code", "prompt"] : LISTING_DROP).map((field) => [field, 0])) },
        ...(SORTS[sort] ? [{ $sort: SORTS[sort] }] : []),
      ]);

      // `rating` is 0 / meaningless before a product has approved reviews, so a
      // plain sort would rank unreviewed products oddly.
      if (sort === "rating") {
        const score = (p) => (Number(p.reviewCount) > 0 ? Number(p.rating) || 0 : -1);
        products.sort((a, b) => score(b) - score(a) || (Number(b.reviewCount) || 0) - (Number(a.reviewCount) || 0));
      }

      if (requestedSlugs?.length) {
        // Honor the order the caller asked for rather than DB/insertion order.
        const rank = new Map(requestedSlugs.map((slug, i) => [slug, i]));
        products.sort((a, b) => (rank.get(a.slug) ?? requestedSlugs.length) - (rank.get(b.slug) ?? requestedSlugs.length));
      } else if (sort === "newest" && !search && !tags.length) {
        const rank = (p) => {
          const i = PINNED_SLUGS.indexOf(p.slug);
          return i === -1 ? PINNED_SLUGS.length : i;
        };
        // Array#sort is stable, so everything unpinned keeps its newest-first order.
        products.sort((a, b) => rank(a) - rank(b));
      }

      if (trendingCollection) {
        // Only products with real recent engagement; fall back to all-time
        // popularity while the site is new and the 7-day window is thin.
        const hot = products.filter((p) => p.trendingScore > 0);
        products = (hot.length >= 8 ? hot : [...products].sort((a, b) => (b.popularityScore || 0) - (a.popularityScore || 0))).slice(0, TRENDING_LIMIT);
      }

      const total = products.length;
      const rawLimit = Number.parseInt(req.query.limit, 10);
      const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
      const paged = req.query.page !== undefined;
      const limit = Number.isFinite(rawLimit) && rawLimit > 0 ? Math.min(rawLimit, 100) : paged ? 24 : null;
      const start = paged && limit ? (page - 1) * limit : 0;
      const slice = limit ? products.slice(start, start + limit) : products;

      res.json({
        products:
          slice.map(
            withPreview ? publicProduct : listingProduct
          ),
        total,
        page: paged ? page : 1,
        limit,
        hasMore: Boolean(limit) && start + slice.length < total,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * SIGNED IN — UPDATES FOR PRODUCTS I'VE COPIED
 * Products whose current version differs from the version the user copied
 * (and hasn't dismissed).
 */
router.get("/me/updates", authRequired, async (req, res, next) => {
  try {
    const records = await CopyRecord.find({ user: req.user.id }).populate("product", "name slug version lastUpdated changelog isPublished category").lean();
    const updates = records
      .filter((r) => r.product?.isPublished && r.product.version && r.version && r.product.version !== r.version && r.seenVersion !== r.product.version)
      .map((r) => ({
        slug: r.product.slug,
        name: r.product.name,
        category: r.product.category,
        copiedVersion: r.version,
        currentVersion: r.product.version,
        lastUpdated: r.product.lastUpdated,
        changelog: (r.product.changelog || []).slice(-3),
      }));
    res.json({ updates, copiedCount: records.length });
  } catch (error) {
    next(error);
  }
});

router.post("/me/updates/:slug/seen", authRequired, async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).select("_id version").lean();
    if (!product) return res.status(404).json({ message: "Product not found." });
    await CopyRecord.updateOne({ user: req.user.id, product: product._id }, { $set: { seenVersion: product.version } });
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

/*
 * PUBLIC — GENERATED THUMBNAIL IMAGE
 * Immutable per version: the URL stored on the product carries ?v=<sourceHash>,
 * so it can be cached for a year and a new render gets a new URL.
 */
router.get("/:slug/thumbnail", async (req, res, next) => {
  try {
    const theme = req.query.theme === "light" ? "light" : "dark";
    const thumb = await Thumbnail.findOne({ slug: req.params.slug, theme }).select("data contentType sourceHash").lean();
    if (!thumb) return res.status(404).json({ message: "No thumbnail." });
    res.set("Content-Type", thumb.contentType || "image/jpeg");
    res.set("Cache-Control", req.query.v ? "public, max-age=31536000, immutable" : "public, max-age=3600");
    res.set("ETag", `"${thumb.sourceHash}-${theme}"`);
    // The storefront and API are on different origins.
    res.set("Cross-Origin-Resource-Policy", "cross-origin");
    res.send(Buffer.from(thumb.data.buffer || thumb.data));
  } catch (error) {
    next(error);
  }
});

/*
 * PUBLIC — PREVIEW SOURCE ONLY
 * What a listing card loads once it scrolls into view. Cacheable: the preview is
 * public and only changes when an admin saves the product.
 */
router.get("/:slug/preview", async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug, isPublished: true }).select("previewCode updatedAt").lean();
    if (!product) return res.status(404).json({ message: "Product not found." });
    res.set("Cache-Control", "public, max-age=300, stale-while-revalidate=3600");
    res.json({ previewCode: product.previewCode || "", updatedAt: product.updatedAt });
  } catch (error) {
    next(error);
  }
});

/*
 * PUBLIC — PRODUCT DETAIL
 */
router.get(
  "/:slug",
  async (req, res, next) => {
    try {
      const product =
        await Product.findOne({
          slug: req.params.slug,
          isPublished: true,
        }).lean();

      if (!product) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      // Real usage, shown as proof on the product page. Never estimated.
      const copiers = await CopyRecord.countDocuments({ product: product._id });

      res.json({
        product: {
          ...publicProduct(product),
          stats: {
            copyCount: product.copyCount || 0,
            copiers,
            wishlistCount: product.wishlistCount || 0,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PROTECTED — SOURCE CODE
 */
router.get("/:slug/source", (_req, res) => res.status(410).json({ message: "Source access has moved to metered copy actions." }));

// Bookkeeping after content is delivered: who copied which version, and the
// product's copy counter. Not awaited by the response path's success.
async function noteCopy(userId, product, actionType) {
  try {
  await Promise.all([
    CopyRecord.updateOne(
      { user: userId, product: product._id },
      { $set: { version: product.version || "", lastCopiedAt: new Date() }, $inc: { count: 1 }, $setOnInsert: { firstCopiedAt: new Date() } },
      { upsert: true }
    ),
    Product.updateOne({ _id: product._id }, { $inc: { copyCount: 1, usageCount: 1 } }),
  ]);
  } catch (error) {
    // The user has their content (and may have paid a token); failing the
    // response over bookkeeping would only make them retry.
    console.error(JSON.stringify({ level: "error", msg: "copy bookkeeping failed", product: product.slug, error: error?.message }));
  }
  recordEvent("copy_success", { product: product._id, user: userId, meta: { action: actionType, productType: product.productType } });
}

async function copyContent(req, res, next, actionType) {
    try {
      const product =
        await Product.findOne({
          slug: req.params.slug,
          isPublished: true,
        });

      if (!product) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      const content = actionType === "PROMPT_COPY" ? product.prompt : { html: product.code?.html || "", css: product.code?.css || "", javascript: product.code?.javascript || "" };

      if (product.productType === "FREE") {
        await noteCopy(req.user.id, product, actionType);
        return res.json({ content, remaining: null, version: product.version });
      }

      const rawKey = req.get("Idempotency-Key");
      const idempotencyKey = typeof rawKey === "string" && /^[A-Za-z0-9_-]{8,100}$/.test(rawKey) ? rawKey : null;

      // A repeat of a request that was already charged gets the content again
      // without spending another token.
      const replay = async () => {
        const previous = await TokenTransaction.findOne({ userId: req.user.id, idempotencyKey }).lean();
        if (!previous) return false;
        if (String(previous.productId) !== String(product._id) || previous.actionType !== actionType) {
          res.status(409).json({ message: "This request key was already used for a different action." });
          return true;
        }
        const current = await User.findById(req.user.id).select("tokenBalance").lean();
        res.json({ content, remaining: current?.tokenBalance ?? 0, version: product.version });
        return true;
      };

      if (idempotencyKey && (await replay())) return;

      const now = new Date();

      // Single conditional update = atomic. Two concurrent copies can never spend
      // the same token: whichever request loses the race fails the tokenBalance
      // guard and gets rejected below.
      const user = await User.findOneAndUpdate(
        { _id: req.user.id, subscriptionStatus: "ACTIVE", subscriptionEndDate: { $gt: now }, tokenBalance: { $gte: 1 } },
        { $inc: { tokenBalance: -1 } },
        { new: true }
      );

      if (!user) {
        // Re-read only to classify *why* it failed — this can never grant access.
        const current = await User.findById(req.user.id).select("subscriptionStatus subscriptionEndDate tokenBalance").lean();
        const subscribed = current?.subscriptionStatus === "ACTIVE" && current?.subscriptionEndDate > now;

        recordEvent("copy_blocked", { product: product._id, user: req.user.id, meta: { reason: subscribed ? "NO_TOKENS" : "SUBSCRIPTION_REQUIRED" } });

        if (!subscribed) {
          return res.status(403).json({
            code: "SUBSCRIPTION_REQUIRED",
            message: "Subscribe to access premium boilerplates, source code and prompts.",
          });
        }

        return res.status(409).json({
          code: "NO_TOKENS",
          message: "Your monthly token balance has been used. Renew your subscription or wait for your next token cycle.",
          remaining: 0,
        });
      }

      try {
        await TokenTransaction.create({ userId: user._id, productId: product._id, productName: product.name, actionType, tokensUsed: 1, ...(idempotencyKey ? { idempotencyKey } : {}) });
      } catch (error) {
        // Two copies of the same request raced past the replay check and both
        // took a token; the unique key index let only one record through. Give
        // this one's token back and answer as a replay.
        if (error?.code === 11000 && idempotencyKey) {
          await User.updateOne({ _id: user._id }, { $inc: { tokenBalance: 1 } });
          if (await replay()) return;
        }
        throw error;
      }
      await noteCopy(user._id, product, actionType);
      res.json({ content, remaining: user.tokenBalance, version: product.version });
    } catch (error) {
      next(error);
    }
  }
router.post("/:slug/copy-code", authRequired, (req, res, next) => copyContent(req, res, next, "CODE_COPY"));
router.post("/:slug/copy-prompt", authRequired, (req, res, next) => copyContent(req, res, next, "PROMPT_COPY"));

export default router;
