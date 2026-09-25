/*
 * What it takes to copy a product. Access is by subscription tokens, not
 * per-product purchase, so the stored per-product `price` isn't something the
 * reader can pay — showing it next to the copy buttons would suggest otherwise.
 */
export function productAccess(product) {
  const type = String(product?.productType || product?.product_type || "FREE").toUpperCase();
  if (type === "FREE") {
    return { free: true, type, label: "Free", detail: "Copy without using tokens" };
  }
  return {
    free: false,
    type,
    label: type === "PREMIUM" ? "Premium" : "Pro",
    detail: "Included with CodeFusion Pro · 1 token per copy",
  };
}

/*
 * A rating is only shown when there are approved reviews behind it. The product
 * model defaults `rating` to 5 before anyone has reviewed it, so the number on
 * its own says nothing.
 */
export function productRating(product) {
  const count = Number(product?.reviewCount) || 0;
  const value = Number(product?.rating);
  if (!count || !Number.isFinite(value) || value <= 0) return null;
  return { value: value.toFixed(1), count };
}

export function reviewCountLabel(count) {
  return `${count} review${count === 1 ? "" : "s"}`;
}
