import mongoose from "mongoose";
import Product from "../models/Product.js";
import Review from "../models/Review.js";

/*
 * Idempotent, cheap startup migrations for schema changes that Mongoose can't
 * apply on its own. Each step checks before it writes.
 */
export async function runMigrations() {
  const products = Product.collection;

  // 1. Counters were stored as strings ("0"), which sorted alphabetically.
  for (const field of ["usageCount", "downloadCount"]) {
    await products.updateMany({ [field]: { $type: "string" } }, [
      { $set: { [field]: { $convert: { input: `$${field}`, to: "int", onError: 0, onNull: 0 } } } },
    ]);
  }

  // 2. The text index gained discoveryTags. MongoDB allows one text index per
  //    collection, so the old one has to go before the new one can be built.
  const indexes = await products.indexes().catch(() => []);
  const text = indexes.find((index) => index.key?._fts === "text");
  if (text && !text.weights?.discoveryTags) {
    await products.dropIndex(text.name);
  }
  await Product.createIndexes();

  // 3. One review per user per product. Keep each pair's newest review before
  //    the unique index is built.
  const dupes = await Review.aggregate([
    { $sort: { updatedAt: -1 } },
    { $group: { _id: { product: "$product", user: "$user" }, ids: { $push: "$_id" }, n: { $sum: 1 } } },
    { $match: { n: { $gt: 1 } } },
  ]);
  for (const group of dupes) {
    await Review.deleteMany({ _id: { $in: group.ids.slice(1) } });
  }
  await Review.createIndexes();

  if (mongoose.connection.readyState === 1) {
    console.log(JSON.stringify({ level: "info", msg: "migrations complete", reviewDupesRemoved: dupes.length }));
  }
}
