import mongoose from "mongoose";
import Product from "../models/Product.js";
import Review from "../models/Review.js";
import Creator from "../models/Creator.js";

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

  // 4. Every product gets a release history; existing ones start with their
  //    current version, dated when they were created.
  await products.updateMany({ $or: [{ releases: { $exists: false } }, { releases: { $size: 0 } }] }, [
    { $set: { releases: [{ version: { $ifNull: ["$version", "1.0.0"] }, date: { $ifNull: ["$createdAt", "$$NOW"] }, notes: { $slice: [{ $ifNull: ["$changelog", []] }, -3] }, kind: "new" }] } },
  ]);

  // 5. Products without a creator belong to the house studio.
  if (await Product.exists({ creator: null })) {
    const studio = await Creator.findOneAndUpdate(
      { slug: "codefusion-studio" },
      { $setOnInsert: { name: "CodeFusion Studio", slug: "codefusion-studio", tagline: "The in-house team behind the CodeFusion library.", bio: "We design and build every CodeFusion component, page and boilerplate in-house — original work, tested across screen sizes and themes, written to be copied straight into real projects." } },
      { upsert: true, new: true }
    );
    await Product.updateMany({ creator: null }, { $set: { creator: studio._id } });
  }

  if (mongoose.connection.readyState === 1) {
    console.log(JSON.stringify({ level: "info", msg: "migrations complete", reviewDupesRemoved: dupes.length }));
  }
}
