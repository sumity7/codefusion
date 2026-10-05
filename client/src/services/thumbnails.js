import { api } from "./api";

// Generated thumbnails are stored as API paths (/products/:slug/thumbnail?...);
// admin-pasted images are absolute URLs.
export function thumbnailFor(product, theme) {
  const url = (theme === "light" && product?.thumbnailLight) || product?.thumbnail || "";
  if (!url) return "";
  return url.startsWith("/") ? `${api.base}${url}` : url;
}
