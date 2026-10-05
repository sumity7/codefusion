import mongoose from "mongoose";

/*
 * One row per Razorpay order. The checkout endpoint creates it as "created";
 * verify flips it to "paid" with a single conditional update, so a payment can
 * grant a subscription exactly once — replaying the same signed payload finds
 * nothing left in the "created" state. The unique paymentId index backs that up
 * at the database level.
 *
 * Revenue is the sum of paid rows, not an estimate from subscriber counts.
 */
const paymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    provider: { type: String, default: "razorpay" },
    orderId: { type: String, required: true, unique: true },
    paymentId: { type: String },
    // Minor units (paise), exactly as charged.
    amount: { type: Number, required: true, min: 0 },
    currency: { type: String, default: "INR" },
    status: { type: String, enum: ["created", "paid", "failed"], default: "created", index: true },
    plan: {
      monthlyPrice: Number,
      monthlyTokens: Number,
      durationDays: Number,
    },
    paidAt: { type: Date, default: null, index: true },
  },
  { timestamps: true }
);

paymentSchema.index(
  { paymentId: 1 },
  { unique: true, partialFilterExpression: { paymentId: { $type: "string" } } }
);

export default mongoose.model("Payment", paymentSchema);
