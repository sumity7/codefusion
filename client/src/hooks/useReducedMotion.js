import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function media() {
  return typeof window !== "undefined" && window.matchMedia ? window.matchMedia(QUERY) : null;
}

// For event handlers and effects that only need the current value.
export function prefersReducedMotion() {
  return Boolean(media()?.matches);
}

function subscribe(callback) {
  const mql = media();
  if (!mql) return () => {};
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

// For components that should re-render when the OS setting changes.
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, prefersReducedMotion, () => false);
}
