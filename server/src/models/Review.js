import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true, index: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  title: { type: String, default: "", maxlength: 120 },
  body: { type: String, default: "", maxlength: 2000 },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending", index: true },
  // Self-reported by the reviewer: they shipped it in a live project.
  usedInProduction: { type: Boolean, default: false },
  // Set by the server: the reviewer actually copied this product's code/prompt.
  verifiedCopier: { type: Boolean, default: false },
  helpful: { type: [mongoose.Schema.Types.ObjectId], ref: "User", default: [] },
  helpfulCount: { type: Number, default: 0 }
}, { timestamps: true });

// One review per user per product. Writing again edits the existing review.
reviewSchema.index({ product: 1, user: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema);
