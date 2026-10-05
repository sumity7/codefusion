import { flushSync } from "react-dom";
import { prefersReducedMotion } from "../hooks/useReducedMotion";

export const PRODUCT_MEDIA = "product-media";

/*
 * Navigates inside a View Transition, so an element named on the old page
 * (the clicked card's preview) morphs into the element with the same name on
 * the new page (the product page's preview frame).
 *
 * The browser captures the old page when startViewTransition is called and the
 * new one when the callback returns, so the route change is flushed
 * synchronously and the page is scrolled to the top inside the callback.
 * Without support, or with reduced motion, it's a plain navigation.
 */
export function navigateWithTransition(navigate, to, options = {}, sourceEl = null) {
  if (typeof document === "undefined" || !document.startViewTransition || prefersReducedMotion()) {
    navigate(to, options);
    return;
  }
  if (sourceEl) sourceEl.style.viewTransitionName = PRODUCT_MEDIA;
  document.startViewTransition(() => {
    if (sourceEl) sourceEl.style.viewTransitionName = "";
    flushSync(() => navigate(to, options));
    window.scrollTo(0, 0);
  });
}

// Only plain left clicks are taken over; new-tab and modified clicks keep the link's default.
export function isPlainClick(event) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.defaultPrevented;
}
