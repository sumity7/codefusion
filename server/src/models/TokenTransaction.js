import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", default: null },
  productName: { type: String, default: "" },
  actionType: { type: String, enum: ["CODE_COPY", "PROMPT_COPY", "SUBSCRIPTION_GRANT", "MANUAL_ADJUSTMENT"], required: true },
  tokensUsed: { type: Number, required: true },
  // Client-supplied key for one copy action. A retried or duplicated request
  // carries the same key and must not be charged twice.
  idempotencyKey: { type: String },
  createdAt: { type: Date, default: Date.now }
});

schema.index(
  { userId: 1, idempotencyKey: 1 },
  { unique: true, partialFilterExpression: { idempotencyKey: { $type: "string" } } }
);

export default mongoose.model("TokenTransaction", schema);
