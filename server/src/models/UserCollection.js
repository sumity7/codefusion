import mongoose from "mongoose";

// A user's own named set of products, optionally shared by link.
const userCollectionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  name: { type: String, required: true, trim: true, maxlength: 80 },
  description: { type: String, default: "", maxlength: 400 },
  shareId: { type: String, required: true, unique: true },
  isPublic: { type: Boolean, default: false },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
}, { timestamps: true });

export default mongoose.model("UserCollection", userCollectionSchema);
