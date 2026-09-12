import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true, index: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  title: { type: String, default: "" },
  body: { type: String, default: "" },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending", index: true }
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
