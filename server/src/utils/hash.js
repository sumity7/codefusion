import crypto from "crypto";

// Short content hash used to version generated thumbnails.
export function sourceHash(text) {
  return crypto.createHash("sha1").update(String(text || "")).digest("hex").slice(0, 12);
}
