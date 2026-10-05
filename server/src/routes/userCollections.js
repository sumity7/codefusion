import { Router } from "express";
import crypto from "crypto";
import mongoose from "mongoose";
import Product from "../models/Product.js";
import UserCollection from "../models/UserCollection.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();
const MAX_COLLECTIONS = 50;
const MAX_ITEMS = 200;
const CARD_FIELDS = "slug name category productType badge previewType previewLayout thumbnail version rating reviewCount compatibility discoveryTags isPublished";

function shareId() {
  return crypto.randomBytes(9).toString("base64url");
}

function present(collection) {
  const obj = collection.toObject ? collection.toObject() : collection;
  return {
    id: String(obj._id),
    name: obj.name,
    description: obj.description,
    isPublic: obj.isPublic,
    shareId: obj.shareId,
    updatedAt: obj.updatedAt,
    products: (obj.products || [])
      .filter((p) => p && (p.isPublished ?? true))
      .map((p) => (typeof p === "object" && p.slug ? { ...p, hasPreview: true } : p)),
  };
}

async function own(req, res) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(404).json({ message: "Collection not found." });
    return null;
  }
  const collection = await UserCollection.findOne({ _id: req.params.id, user: req.user.id });
  if (!collection) res.status(404).json({ message: "Collection not found." });
  return collection;
}

// Public, read-only view of a shared collection. Private ones look like 404s.
router.get("/shared/:shareId", async (req, res, next) => {
  try {
    const collection = await UserCollection.findOne({ shareId: req.params.shareId, isPublic: true })
      .populate("products", CARD_FIELDS)
      .populate("user", "name")
      .lean();
    if (!collection) return res.status(404).json({ message: "Collection not found." });
    res.json({ collection: { ...present(collection), owner: collection.user?.name || "A builder" } });
  } catch (e) { next(e); }
});

router.use(authRequired);

router.get("/", async (req, res, next) => {
  try {
    const collections = await UserCollection.find({ user: req.user.id }).sort({ updatedAt: -1 }).populate("products", CARD_FIELDS).lean();
    res.json({ collections: collections.map(present) });
  } catch (e) { next(e); }
});

router.post("/", async (req, res, next) => {
  try {
    const name = String(req.body?.name || "").trim().slice(0, 80);
    if (!name) return res.status(400).json({ message: "Give your collection a name." });
    if ((await UserCollection.countDocuments({ user: req.user.id })) >= MAX_COLLECTIONS) {
      return res.status(400).json({ message: `You can have up to ${MAX_COLLECTIONS} collections.` });
    }
    let products = [];
    if (typeof req.body?.slug === "string") {
      const product = await Product.findOne({ slug: req.body.slug, isPublished: true }).select("_id").lean();
      if (product) products = [product._id];
    }
    const collection = await UserCollection.create({
      user: req.user.id,
      name,
      description: String(req.body?.description || "").slice(0, 400),
      isPublic: Boolean(req.body?.isPublic),
      shareId: shareId(),
      products,
    });
    await collection.populate("products", CARD_FIELDS);
    res.status(201).json({ collection: present(collection) });
  } catch (e) { next(e); }
});

router.put("/:id", async (req, res, next) => {
  try {
    const collection = await own(req, res);
    if (!collection) return;
    if (typeof req.body?.name === "string") {
      const name = req.body.name.trim().slice(0, 80);
      if (!name) return res.status(400).json({ message: "Give your collection a name." });
      collection.name = name;
    }
    if (typeof req.body?.description === "string") collection.description = req.body.description.slice(0, 400);
    if (typeof req.body?.isPublic === "boolean") collection.isPublic = req.body.isPublic;
    await collection.save();
    await collection.populate("products", CARD_FIELDS);
    res.json({ collection: present(collection) });
  } catch (e) { next(e); }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const collection = await own(req, res);
    if (!collection) return;
    await collection.deleteOne();
    res.json({ message: "Collection deleted." });
  } catch (e) { next(e); }
});

// Toggle a product in or out of one of my collections.
router.post("/:id/items/:slug", async (req, res, next) => {
  try {
    const collection = await own(req, res);
    if (!collection) return;
    const product = await Product.findOne({ slug: req.params.slug, isPublished: true }).select("_id").lean();
    if (!product) return res.status(404).json({ message: "Product not found." });
    const has = collection.products.some((id) => String(id) === String(product._id));
    if (!has && collection.products.length >= MAX_ITEMS) return res.status(400).json({ message: `A collection holds up to ${MAX_ITEMS} products.` });
    collection.products = has ? collection.products.filter((id) => String(id) !== String(product._id)) : [...collection.products, product._id];
    await collection.save();
    await collection.populate("products", CARD_FIELDS);
    res.json({ added: !has, collection: present(collection) });
  } catch (e) { next(e); }
});

export default router;
