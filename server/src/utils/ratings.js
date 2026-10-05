import mongoose from "mongoose";
import Product from "../models/Product.js";
import Review from "../models/Review.js";

// Rating and count always come from approved reviews only, recomputed on every
// change — approve, reject, edit or delete — so a rejected or withdrawn review
// can't linger in the average.
export async function recalcProductRating(productId) {
  const id = new mongoose.Types.ObjectId(String(productId));
  const [stats] = await Review.aggregate([
    { $match: { product: id, status: "approved" } },
    { $group: { _id: null, avg: { $avg: "$rating" }, count: { $sum: 1 } } },
  ]);
  await Product.updateOne(
    { _id: id },
    { $set: { rating: stats ? Number(stats.avg.toFixed(1)) : 0, reviewCount: stats?.count || 0 } }
  );
}
