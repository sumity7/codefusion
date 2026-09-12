import mongoose from "mongoose";
const downloadSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", default: null },
  version: { type: String, required: true }
}, { timestamps: true });
export default mongoose.model("Download", downloadSchema);
