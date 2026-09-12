import mongoose from "mongoose";
const analyticsSchema = new mongoose.Schema({
  type: { type: String, required: true, index: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", default: null },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  meta: { type: Object, default: {} }
}, { timestamps: true });
export default mongoose.model("AnalyticsEvent", analyticsSchema);
