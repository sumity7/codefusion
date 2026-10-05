import { api } from "./api";

/*
 * Fire-and-forget event tracking. Never throws, never blocks the UI, and
 * survives page unloads (keepalive). Events the server can witness itself
 * (copies, wishlist changes, payments) are recorded server-side instead, so
 * they can't be skipped or forged from here.
 *
 *   track("product_view", { product: slug })
 *   track("search", { meta: { query, results } })
 */
export function track(type, { product, meta } = {}) {
  try {
    const token = localStorage.getItem("codefusion_token");
    fetch(`${api.base}/analytics/event`, {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify({ type, product, meta }),
    }).catch(() => {});
  } catch {}
}

// Once per key per page load — e.g. the first hover on a card's preview.
const sent = new Set();
export function trackOnce(key, type, payload) {
  if (sent.has(key)) return;
  sent.add(key);
  track(type, payload);
}

/*
 * Client error tracking. Uncaught errors and rejected promises are reported as
 * `client_error` events (logged server-side as level=error and shown in the
 * admin Analytics view). Capped per page load so a render loop can't flood it.
 */
let reported = 0;
const seenErrors = new Set();
// One report per distinct message per page load. React re-throws a render
// error several times (and the error boundary reports it too), so without this
// one bug shows up as three or four entries.
export function reportClientError(message, source) {
  const text = String(message || "").replace(/^Uncaught\s+/, "").replace(/^\w*Error:\s*/, "").slice(0, 280);
  if (!text || reported >= 5 || seenErrors.has(text)) return;
  seenErrors.add(text);
  reported += 1;
  track("client_error", { meta: { message: text, source: String(source || "").slice(0, 200), path: location.pathname } });
}

export function installErrorTracking() {
  const report = reportClientError;
  window.addEventListener("error", (event) => {
    // Resource load failures (an <img>) have no message and aren't app bugs.
    if (!event.message) return;
    report(event.message, `${event.filename || ""}:${event.lineno || ""}`);
  });
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    report(reason?.message || reason, reason?.stack?.split("\n")[1]?.trim());
  });
}
