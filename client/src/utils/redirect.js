// Pages that make no sense to land on straight after signing in.
const AUTH_PAGES = ["/login", "/register", "/forgot-password"];

/*
 * Turns a ?next= value into a path that is safe to navigate to, or the fallback.
 * Only same-origin paths are accepted: "//evil.com", "/\evil.com" and anything
 * with a scheme resolve to another origin and are rejected, so the parameter
 * can't be used as an open redirect.
 */
export function safeNext(raw, fallback = "/account") {
  if (typeof raw !== "string" || !raw.startsWith("/")) return fallback;
  try {
    const url = new URL(raw, window.location.origin);
    if (url.origin !== window.location.origin) return fallback;
    if (AUTH_PAGES.some((page) => url.pathname === page || url.pathname.startsWith(`${page}/`))) return fallback;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return fallback;
  }
}

// The login URL that brings the reader back to `path` afterwards.
export function loginPath(path) {
  return path && path !== "/" ? `/login?next=${encodeURIComponent(path)}` : "/login";
}
