import { Router } from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";
import Review from "../models/Review.js";
import CopyRecord from "../models/CopyRecord.js";
import { authOptional, authRequired, adminRequired } from "../middleware/auth.js";
import { recalcProductRating } from "../utils/ratings.js";
import { recordEvent } from "../utils/events.js";

const router = Router();

function present(review, userId) {
  const obj = review.toObject ? review.toObject() : review;
  const { helpful = [], ...rest } = obj;
  return { ...rest, votedHelpful: Boolean(userId && helpful.some((id) => String(id) === String(userId))) };
}

router.get("/admin/all", authRequired, adminRequired, async (req, res, next) => {
  try {
    const reviews = await Review.find().populate("user", "name email").populate("product", "name slug").sort({ createdAt: -1 }).lean();
    res.json({ reviews: reviews.map((r) => present(r)) });
  } catch (e) { next(e); }
});

router.put("/admin/:id", authRequired, adminRequired, async (req, res, next) => {
  try {
    if (!["pending", "approved", "rejected"].includes(req.body?.status)) return res.status(400).json({ message: "Invalid status." });
    const review = await Review.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!review) return res.status(404).json({ message: "Review not found." });
    await recalcProductRating(review.product);
    res.json({ review: present(review) });
  } catch (e) { next(e); }
});

router.post("/:id/helpful", authRequired, async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: "Review not found." });
    const userId = new mongoose.Types.ObjectId(req.user.id);
    const review = await Review.findOne({ _id: req.params.id, status: "approved" }).select("user").lean();
    if (!review) return res.status(404).json({ message: "Review not found." });
    if (String(review.user) === String(userId)) return res.status(400).json({ message: "You can't vote on your own review." });

    // Conditional updates keep the count in step with the voter list even
    // under double clicks: each only applies if the vote state is what it expects.
    let updated = await Review.findOneAndUpdate({ _id: req.params.id, helpful: { $ne: userId } }, { $addToSet: { helpful: userId }, $inc: { helpfulCount: 1 } }, { new: true });
    let voted = true;
    if (!updated) {
      updated = await Review.findOneAndUpdate({ _id: req.params.id, helpful: userId }, { $pull: { helpful: userId }, $inc: { helpfulCount: -1 } }, { new: true });
      voted = false;
    }
    res.json({ helpfulCount: updated?.helpfulCount ?? 0, votedHelpful: voted });
  } catch (e) { next(e); }
});

router.get("/:slug", authOptional, async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).select("_id").lean();
    if (!product) return res.status(404).json({ message: "Product not found." });
    const userId = req.user?.id;
    const [reviews, mine, copied, productionCount] = await Promise.all([
      Review.find({ product: product._id, status: "approved" }).populate("user", "name").sort({ helpfulCount: -1, createdAt: -1 }).lean(),
      userId ? Review.findOne({ product: product._id, user: userId }).lean() : null,
      userId ? CopyRecord.exists({ product: product._id, user: userId }) : null,
      Review.countDocuments({ product: product._id, status: "approved", usedInProduction: true }),
    ]);
    res.json({
      reviews: reviews.map((r) => present(r, userId)),
      mine: mine ? present(mine, userId) : null,
      // Only people who actually took the code can review it.
      eligible: Boolean(copied),
      productionCount,
    });
  } catch (e) { next(e); }
});

router.post("/:slug", authRequired, async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).select("_id name").lean();
    if (!product) return res.status(404).json({ message: "Product not found." });

    const copied = await CopyRecord.exists({ product: product._id, user: req.user.id });
    if (!copied) return res.status(403).json({ code: "NOT_ELIGIBLE", message: "Copy this product's code or prompt first — reviews are open to people who've used it." });

    const rating = Number(req.body?.rating);
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) return res.status(400).json({ message: "Choose a rating from 1 to 5 stars." });
    const title = String(req.body?.title || "").trim().slice(0, 120);
    const body = String(req.body?.body || "").trim();
    if (body.length < 10) return res.status(400).json({ message: "Tell other builders a little more (at least 10 characters)." });
    if (body.length > 2000) return res.status(400).json({ message: "Keep your review under 2000 characters." });

    // Upsert on (product, user): writing again edits your review rather than
    // adding a second one. Any edit goes back through moderation.
    const review = await Review.findOneAndUpdate(
      { product: product._id, user: req.user.id },
      { $set: { rating, title, body, usedInProduction: Boolean(req.body?.usedInProduction), verifiedCopier: true, status: "pending" } },
      { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }
    );
    await recalcProductRating(product._id);
    recordEvent("review_submit", { product: product._id, user: req.user.id, meta: { rating } });
    res.status(201).json({ review: present(review, req.user.id) });
  } catch (e) { next(e); }
});

router.delete("/:slug/mine", authRequired, async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).select("_id").lean();
    if (!product) return res.status(404).json({ message: "Product not found." });
    await Review.deleteOne({ product: product._id, user: req.user.id });
    await recalcProductRating(product._id);
    res.json({ message: "Review removed." });
  } catch (e) { next(e); }
});

export default router;
