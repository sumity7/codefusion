import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", default: null },
  productName: { type: String, default: "" },
  actionType: { type: String, enum: ["CODE_COPY", "PROMPT_COPY", "SUBSCRIPTION_GRANT", "MANUAL_ADJUSTMENT"], required: true },
  tokensUsed: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("TokenTransaction", schema);
