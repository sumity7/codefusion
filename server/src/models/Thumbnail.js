import mongoose from "mongoose";

/*
 * Rendered listing images, one per product per theme. Kept out of the Product
 * document so product queries never carry image bytes. `sourceHash` is the hash
 * of the previewCode the image was rendered from; a mismatch means it's stale.
 */
const thumbnailSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    slug: { type: String, required: true },
    theme: { type: String, enum: ["dark", "light"], required: true },
    contentType: { type: String, default: "image/jpeg" },
    data: { type: Buffer, required: true },
    width: Number,
    height: Number,
    sourceHash: { type: String, required: true },
  },
  { timestamps: true }
);

thumbnailSchema.index({ slug: 1, theme: 1 }, { unique: true });
thumbnailSchema.index({ product: 1 });

export default mongoose.model("Thumbnail", thumbnailSchema);
