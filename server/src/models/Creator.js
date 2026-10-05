import mongoose from "mongoose";

// The studio or person behind a product. Shown on product pages and /creators.
const creatorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    tagline: { type: String, default: "", maxlength: 140 },
    bio: { type: String, default: "", maxlength: 1200 },
    avatarUrl: { type: String, default: "" },
    website: { type: String, default: "" },
    github: { type: String, default: "" },
    twitter: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Creator", creatorSchema);
