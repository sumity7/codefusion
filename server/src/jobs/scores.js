import Product from "../models/Product.js";
import AnalyticsEvent from "../models/AnalyticsEvent.js";

// How much each kind of engagement counts toward trending.
const TRENDING_WEIGHTS = {
  product_view: 1,
  preview_interact: 1,
  compare_view: 1,
  wishlist_add: 3,
  export_action: 2,
  copy_success: 5,
};
const TRENDING_WINDOW_DAYS = 7;
const INTERVAL_MS = 15 * 60 * 1000;

/*
 * Popular: all-time engagement from the counters the routes maintain.
 * Trending: the same signals over the last 7 days, newer events weighted higher
 * (an event from today counts double one from a week ago).
 */
export async function recomputeScores() {
  await Product.updateMany({}, [
    {
      $set: {
        popularityScore: {
          $add: [
            { $multiply: [{ $ifNull: ["$copyCount", 0] }, 5] },
            { $multiply: [{ $ifNull: ["$wishlistCount", 0] }, 3] },
            { $multiply: [{ $ifNull: ["$viewCount", 0] }, 0.2] },
          ],
        },
      },
    },
  ]);

  const windowMs = TRENDING_WINDOW_DAYS * 86400000;
  const since = new Date(Date.now() - windowMs);
  const rows = await AnalyticsEvent.aggregate([
    { $match: { createdAt: { $gte: since }, product: { $ne: null }, type: { $in: Object.keys(TRENDING_WEIGHTS) } } },
    {
      $project: {
        product: 1,
        weight: {
          $multiply: [
            { $switch: { branches: Object.entries(TRENDING_WEIGHTS).map(([type, w]) => ({ case: { $eq: ["$type", type] }, then: w })), default: 0 } },
            // 1.0 for an event just now, 0.5 for one at the edge of the window.
            { $subtract: [1, { $multiply: [0.5, { $divide: [{ $subtract: ["$$NOW", "$createdAt"] }, windowMs] }] }] },
          ],
        },
      },
    },
    { $group: { _id: "$product", score: { $sum: "$weight" } } },
  ]);

  await Product.updateMany({ trendingScore: { $ne: 0 } }, { $set: { trendingScore: 0 } });
  if (rows.length) {
    await Product.bulkWrite(rows.map((row) => ({ updateOne: { filter: { _id: row._id }, update: { $set: { trendingScore: Math.round(row.score * 100) / 100 } } } })));
  }
  return rows.length;
}

export function startScoreJob() {
  const run = () => recomputeScores().catch((error) => console.error(JSON.stringify({ level: "error", msg: "score job failed", error: error?.message })));
  run();
  return setInterval(run, INTERVAL_MS).unref();
}
