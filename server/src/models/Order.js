import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  nameSnapshot: String,
  amount: Number,
  quantity: { type: Number, default: 1 }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  items: [itemSchema],
  totalAmount: { type: Number, default: 0 },
  currency: { type: String, default: "USD" },
  status: { type: String, enum: ["pending", "paid", "refunded", "cancelled"], default: "pending", index: true },
  provider: { type: String, default: "" },
  providerPaymentId: { type: String, default: "" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
