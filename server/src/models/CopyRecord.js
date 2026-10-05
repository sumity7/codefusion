import mongoose from "mongoose";

/*
 * What a user has taken from the library, and at which version. Powers review
 * eligibility ("verified copier"), the "updates available" notice when a copied
 * product ships a new version, and the per-product copy count shown as proof.
 */
const copyRecordSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true, index: true },
  version: { type: String, default: "" },
  count: { type: Number, default: 0 },
  // The user dismissed the update notice for this version.
  seenVersion: { type: String, default: "" },
  // The version we last emailed this user about.
  notifiedVersion: { type: String, default: "" },
  firstCopiedAt: { type: Date, default: Date.now },
  lastCopiedAt: { type: Date, default: Date.now }
});

copyRecordSchema.index({ user: 1, product: 1 }, { unique: true });

export default mongoose.model("CopyRecord", copyRecordSchema);
