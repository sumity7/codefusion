import { Router } from "express";
import Creator from "../models/Creator.js";
import Product from "../models/Product.js";

const router = Router();
const CARD = "slug name category productType badge previewType previewLayout thumbnail thumbnailLight version rating reviewCount compatibility discoveryTags description";

// Active creators with their published product counts and a few covers.
router.get("/", async (_req, res, next) => {
  try {
    const creators = await Creator.find({ isActive: true }).sort({ name: 1 }).lean();
    const stats = await Product.aggregate([
      { $match: { isPublished: true, creator: { $ne: null } } },
      { $sort: { popularityScore: -1, createdAt: -1 } },
      { $group: { _id: "$creator", count: { $sum: 1 }, covers: { $push: { slug: "$slug", thumbnail: "$thumbnail", thumbnailLight: "$thumbnailLight" } } } },
    ]);
    const byId = new Map(stats.map((row) => [String(row._id), row]));
    res.set("Cache-Control", "public, max-age=300");
    res.json({
      creators: creators.map(({ _id, name, slug, tagline, avatarUrl }) => {
        const row = byId.get(String(_id));
        return { name, slug, tagline, avatarUrl, productCount: row?.count || 0, covers: (row?.covers || []).slice(0, 3) };
      }),
    });
  } catch (e) { next(e); }
});

router.get("/:slug", async (req, res, next) => {
  try {
    const creator = await Creator.findOne({ slug: String(req.params.slug).toLowerCase(), isActive: true }).lean();
    if (!creator) return res.status(404).json({ message: "Creator not found." });
    const products = await Product.aggregate([
      { $match: { isPublished: true, creator: creator._id } },
      { $sort: { popularityScore: -1, createdAt: -1 } },
      { $addFields: { hasPreview: { $gt: [{ $strLenCP: { $ifNull: ["$previewCode", ""] } }, 0] } } },
      { $project: Object.fromEntries([...CARD.split(" "), "hasPreview", "copyCount", "lastUpdated"].map((f) => [f, 1])) },
    ]);
    const { _id, __v, ...publicCreator } = creator;
    res.json({
      creator: publicCreator,
      products,
      stats: { products: products.length, copies: products.reduce((sum, p) => sum + (p.copyCount || 0), 0) },
    });
  } catch (e) { next(e); }
});

export default router;
