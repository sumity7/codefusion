/*
 * Discovery enrichment. Safe to re-run.
 *
 *   npm run enrich            fill discovery tags / compatibility badges that are
 *                             empty or still the seed default, and build any
 *                             curated pack that has no products yet
 *   npm run enrich -- --force recompute tags and badges for every product
 *                             (overwrites manual edits) and rebuild every pack
 *
 * Tags come from what each product actually contains (its source and its
 * description), so "GSAP" means the source loads GSAP and "No dependencies"
 * means it loads no external scripts or stylesheets.
 */
import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../src/config/db.js";
import Product from "../src/models/Product.js";
import Collection from "../src/models/Collection.js";
import { runMigrations } from "../src/jobs/migrate.js";

const FORCE = process.argv.includes("--force");

const SEED_DEFAULT_COMPAT = ["Modern browsers", "Responsive websites", "React projects"];

// Use-case tags: matched against name + description + category + tags.
const USE_CASES = [
  ["SaaS", /\bsaas\b|startup|workspace|kanban|productivity|subscription|billing|per-seat|usage-based|enterprise|onboarding|\bteam\b/i, ["Pricing", "Dashboards"]],
  ["E-commerce", /e-?commerce|storefront|\bshop|\bcart\b|checkout|\bdtc\b|payment card|credit card|discount|add-on|bundle|app store|google play/i, []],
  ["Portfolio", /portfolio|case stud|resume|career|client logo|project (list|grid|strip)|gallery|showcase/i, ["Portfolio"]],
  ["Agency", /agency|studio/i, []],
  ["Fintech", /fintech|banking|ledger|wallet|web3|token|revenue|credit card/i, []],
  ["Developer tools", /developer|\bdocs\b|documentation|\bapi\b|command|⌘k|code snippet|crosshair|background-jobs/i, []],
  ["AI", /\bai\b|ai-|machine learning/i, []],
  ["Mobile app", /mobile|bottom tab|phone mockup|app store|google play/i, []],
  ["Healthcare", /health|wellness|doctor|medical/i, []],
  ["Education", /education|course|learner|\blms\b/i, []],
];

const MOTION_CATEGORIES = ["Scroll Animations", "Loaders & Cursors", "Borders", "Backgrounds"];

const STYLE_WORDS = [
  ["Minimal", /minimal|clean|focused|\bslim\b|simple|subtle|calm/i],
  ["Glassmorphism", /glass|frosted/i],
  ["3D", /\b3d\b|tilt|cube|depth|keycap|embossed/i],
  ["Gradient", /gradient|aurora|spectrum|rainbow/i],
];

function analyze(product, source) {
  const text = `${product.name} ${product.description} ${product.category} ${(product.tags || []).join(" ")}`;
  const tags = new Set();

  for (const [tag, re, categories] of USE_CASES) {
    if (re.test(text) || categories.includes(product.category)) tags.add(tag);
  }
  for (const [tag, re] of STYLE_WORDS) {
    if (re.test(text)) tags.add(tag);
  }

  const facts = {
    hasSource: Boolean(source),
    externalScripts: /<script[^>]+\bsrc=/i.test(source),
    externalStyles: /<link[^>]+stylesheet|@import\s+url\(/i.test(source),
    gsap: /gsap/i.test(source),
    hasJs: /<script\b[^>]*>(?!\s*<\/script>)[\s\S]{20,}?<\/script>/i.test(source),
    responsive: /@media|clamp\(/i.test(source),
    mobileFirst: /@media[^{]*min-width/i.test(source) && !/@media[^{]*max-width/i.test(source),
    reducedMotion: /prefers-reduced-motion/i.test(source),
    transitions: /transition\s*:/i.test(source),
    animated: /@keyframes|requestAnimationFrame|\.animate\(|animation\s*:/i.test(source),
    interactive: /addEventListener\(\s*["'](pointer|mouse|click|touch|drag|input|keydown|scroll)/i.test(source),
    glass: /backdrop-filter/i.test(source),
    threeD: /preserve-3d|perspective\s*[:(]/i.test(source),
    canvas: /<canvas/i.test(source),
    light: /(body|:root|html)\s*\{[^}]*background(-color)?\s*:\s*#(f|e[0-9a-f])/i.test(source),
  };

  // These categories are motion by definition, with or without source to inspect.
  if (MOTION_CATEGORIES.includes(product.category)) tags.add("Animated");

  if (facts.hasSource) {
    // Transitions driven by script (hover pulls, scroll reveals) are motion too.
    if (facts.animated || (facts.transitions && facts.interactive)) tags.add("Animated");
    if (facts.interactive) tags.add("Interactive");
    if (facts.glass) tags.add("Glassmorphism");
    if (facts.threeD) tags.add("3D");
    if (facts.canvas) tags.add("Canvas");
    if (facts.gsap) tags.add("GSAP");
    if (!facts.externalScripts && !facts.externalStyles) tags.add("No dependencies");
    if (!facts.hasJs) tags.add("CSS only");
    if (facts.responsive) tags.add("Responsive");
    if (facts.mobileFirst) tags.add("Mobile-first");
    if (facts.reducedMotion) tags.add("Reduced-motion aware");
    tags.add(facts.light ? "Light UI" : "Dark UI");
  }

  const compatibility = [];
  if (facts.hasSource) {
    compatibility.push(facts.hasJs ? "Vanilla HTML · CSS · JS" : "HTML + CSS only");
    if (facts.gsap) compatibility.push("Loads GSAP from CDN");
    else if (!facts.externalScripts && !facts.externalStyles) compatibility.push("No dependencies");
    if (facts.responsive) compatibility.push("Responsive");
    if (facts.reducedMotion) compatibility.push("Respects reduced motion");
    compatibility.push("Modern browsers");
    compatibility.push("Exports to React · Next.js · Vue");
  }

  return { tags: [...tags], compatibility };
}

function isDefaultCompat(list) {
  return !list?.length || (list.length === SEED_DEFAULT_COMPAT.length && list.every((v, i) => v === SEED_DEFAULT_COMPAT[i]));
}

// Better candidates first: verified, featured, then most engaged.
function rank(a, b) {
  return (b.isVerified - a.isVerified) || (b.isFeatured - a.isFeatured) || ((b.popularityScore || 0) - (a.popularityScore || 0)) || a.name.localeCompare(b.name);
}

const PACKS = [
  {
    name: "SaaS Launch Kit",
    description: "Navigation, hero, features, pricing, social proof and sign-up — everything a SaaS launch page needs.",
    pick: (all) => ["Navigation", "Hero Sections", "Features", "Pricing", "Testimonials", "Forms", "Landing Pages"].flatMap((category) => {
      const inCat = all.filter((p) => p.category === category).sort(rank);
      const saas = inCat.filter((p) => p.discoveryTags.includes("SaaS"));
      return [...saas, ...inCat.filter((p) => !saas.includes(p))].slice(0, 2);
    }),
  },
  {
    name: "Dashboard Starter Set",
    description: "Widgets, charts, side navigation and metric cards for building an app dashboard.",
    pick: (all) => [
      ...all.filter((p) => p.category === "Dashboards").sort(rank).slice(0, 7),
      ...all.filter((p) => p.category === "Navigation" && /sidebar|rail|command|tabs/i.test(p.name)).sort(rank).slice(0, 3),
      ...all.filter((p) => p.category === "Cards" && /metric|stat|kpi/i.test(p.name)).sort(rank).slice(0, 2),
      ...all.filter((p) => p.category === "Boilerplates" && p.previewType === "dashboard").sort(rank).slice(0, 2),
    ],
  },
  {
    name: "Portfolio Starter",
    description: "Project grids, case-study reveals, custom cursors and scroll motion for a personal or studio site.",
    pick: (all) => [
      ...all.filter((p) => p.category === "Portfolio").sort(rank).slice(0, 5),
      ...all.filter((p) => p.category === "Loaders & Cursors" && /cursor/i.test(p.name)).sort(rank).slice(0, 2),
      ...all.filter((p) => p.category === "Hero Sections" && /parallax|typewriter|scroll/i.test(p.name)).sort(rank).slice(0, 2),
      ...all.filter((p) => p.category === "Landing Pages" && /studio|agency|portfolio/i.test(`${p.name} ${p.description}`)).sort(rank).slice(0, 2),
    ],
  },
  {
    name: "E-commerce Essentials",
    description: "Storefront, pricing, payment and checkout pieces for selling online.",
    pick: (all) => all.filter((p) => p.discoveryTags.includes("E-commerce")).sort(rank).slice(0, 12),
  },
  {
    name: "Motion & Micro-interactions",
    description: "Buttons, borders, loaders and scroll effects that make an interface feel alive.",
    pick: (all) => ["Buttons", "Borders", "Loaders & Cursors", "Scroll Animations"].flatMap((category) =>
      all.filter((p) => p.category === category && p.discoveryTags.includes("Animated")).sort(rank).slice(0, 3)
    ),
  },
];

function slugify(name) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function enrich({ force = FORCE } = {}) {
  await runMigrations();

  const products = await Product.find().select("name description category tags previewCode code discoveryTags compatibility collections isVerified isFeatured popularityScore previewType isPublished").lean();
  let tagged = 0;
  let badged = 0;
  const ops = [];
  for (const product of products) {
    const source = product.previewCode || product.code?.html || "";
    const { tags, compatibility } = analyze(product, source);
    const set = {};
    if (force || !product.discoveryTags?.length) {
      set.discoveryTags = tags;
      product.discoveryTags = tags;
      tagged++;
    }
    if (compatibility.length && (force || isDefaultCompat(product.compatibility))) {
      set.compatibility = compatibility;
      badged++;
    }
    if (Object.keys(set).length) ops.push({ updateOne: { filter: { _id: product._id }, update: { $set: set } } });
  }
  if (ops.length) await Product.bulkWrite(ops);

  const published = products.filter((p) => p.isPublished);
  const packNames = [];
  for (const pack of PACKS) {
    const slug = slugify(pack.name);
    // Slug is fixed by us (not derived by the generic collection slugger) so
    // links like /collections/saas-launch-kit stay stable.
    await Collection.findOneAndUpdate(
      { name: pack.name },
      { $set: { name: pack.name, slug, description: pack.description, kind: "pack", isActive: true } },
      { upsert: true, setDefaultsOnInsert: true }
    );
    const members = await Product.countDocuments({ collections: pack.name });
    if (members && !force) continue;
    const picked = [...new Map(pack.pick(published).map((p) => [String(p._id), p])).values()];
    await Product.updateMany({ collections: pack.name }, { $pull: { collections: pack.name } });
    await Product.updateMany({ _id: { $in: picked.map((p) => p._id) } }, { $addToSet: { collections: pack.name } });
    packNames.push(`${pack.name} (${picked.length})`);
  }

  // Trending is computed from engagement now; describe it as such.
  await Collection.updateOne({ slug: "trending" }, { $set: { description: "What builders are viewing, saving and copying most this week." } });

  return { products: products.length, tagged, badged, packsBuilt: packNames };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await connectDB();
  const result = await enrich();
  console.log(JSON.stringify(result, null, 2));
  await mongoose.disconnect();
}
