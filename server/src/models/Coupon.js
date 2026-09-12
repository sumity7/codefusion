import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
  code: { type: String, unique: true, uppercase: true, trim: true },
  discountType: { type: String, enum: ["percentage", "fixed"], required: true },
  discountValue: { type: Number, required: true, min: 0 },
  expiresAt: { type: Date, default: null },
  usageLimit: { type: Number, default: null },
  usedCount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });
export default mongoose.model("Coupon", couponSchema);
