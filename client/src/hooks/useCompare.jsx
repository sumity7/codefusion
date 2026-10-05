import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CompareContext = createContext(null);
const KEY = "codefusion_compare";
const MAX = 2;

function read() {
  try {
    const value = JSON.parse(sessionStorage.getItem(KEY) || "[]");
    return Array.isArray(value) ? value.filter((item) => item?.slug).slice(0, MAX) : [];
  } catch {
    return [];
  }
}

/*
 * Up to two products picked for side-by-side comparison, from any card or
 * product page. Kept for the browser session so picking one product, browsing
 * on and picking a second works across pages.
 */
export function CompareProvider({ children }) {
  const [items, setItems] = useState(read);

  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const toggle = useCallback((product) => {
    setItems((current) => {
      if (current.some((item) => item.slug === product.slug)) return current.filter((item) => item.slug !== product.slug);
      const next = [...current, { slug: product.slug, name: product.name, category: product.category }];
      // Picking a third replaces the oldest pick.
      return next.slice(-MAX);
    });
  }, []);

  const value = useMemo(
    () => ({
      items,
      toggle,
      clear: () => setItems([]),
      has: (slug) => items.some((item) => item.slug === slug),
      href: items.length === 2 ? `/compare?a=${encodeURIComponent(items[0].slug)}&b=${encodeURIComponent(items[1].slug)}` : null,
    }),
    [items, toggle]
  );

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompare() {
  return useContext(CompareContext);
}
