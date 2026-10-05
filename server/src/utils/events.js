import AnalyticsEvent from "../models/AnalyticsEvent.js";

/*
 * Event types the platform records. Server-side events (marked S) are written by
 * the routes that perform the action, so they can't be faked or skipped by a
 * client; the rest arrive through POST /api/analytics/event.
 */
export const EVENT_TYPES = new Set([
  "product_view",
  "search",
  "preview_interact",
  "wishlist_add", // S
  "wishlist_remove", // S
  "copy_attempt",
  "copy_success", // S
  "copy_blocked", // S — no subscription / no tokens
  "export_open",
  "export_action",
  "compare_view",
  "checkout_view",
  "checkout_start", // S
  "checkout_dismiss",
  "checkout_failed",
  "checkout_success", // S
  "review_submit", // S
  "client_error",
]);

export const SERVER_ONLY_EVENTS = new Set([
  "wishlist_add",
  "wishlist_remove",
  "copy_success",
  "copy_blocked",
  "checkout_start",
  "checkout_success",
  "review_submit",
]);

// Fire-and-forget. Analytics must never fail the request it describes.
export function recordEvent(type, { product = null, user = null, meta = {} } = {}) {
  AnalyticsEvent.create({ type, product, user, meta }).catch((error) => {
    console.error(JSON.stringify({ level: "warn", msg: "analytics write failed", type, error: error?.message }));
  });
}
