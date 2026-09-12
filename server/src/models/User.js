import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user", index: true },
  avatarUrl: { type: String, default: "" },
  resetOtpHash: { type: String, default: "" },
  resetOtpExpires: { type: Date, default: null },
  resetOtpAttempts: { type: Number, default: 0 },
  resetOtpSentAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
