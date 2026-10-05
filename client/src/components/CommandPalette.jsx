import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Boxes, Clock, CornerDownLeft, FileText, Hash, Layers, Search, Sparkles, TrendingUp, X } from "lucide-react";
import { api } from "../services/api";
import { track } from "../services/analytics";
import { productAccess } from "../utils/product";

const PaletteContext = createContext(null);
const RECENT_KEY = "codefusion_recent_searches";
const IS_MAC = typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || "");
export const PALETTE_SHORTCUT = IS_MAC ? "⌘K" : "Ctrl K";

const PAGES = [
  { label: "All products", to: "/products", keys: "browse catalogue library components" },
  { label: "Curated packs", to: "/packs", keys: "bundles sets kits" },
  { label: "Trending this week", to: "/collections/trending", keys: "popular hot" },
  { label: "New this week", to: "/new", keys: "latest releases updates changelog" },
  { label: "Free products", to: "/collections/free", keys: "free no cost" },
  { label: "Pricing & tokens", to: "/subscription", keys: "pro plan subscribe price tokens buy" },
  { label: "Compare products", to: "/compare", keys: "versus side by side" },
  { label: "My account", to: "/account", keys: "profile settings tokens balance" },
  { label: "My collections", to: "/account/collections", keys: "saved boards lists share" },
  { label: "Wishlist", to: "/wishlist", keys: "saved hearts favourites" },
  { label: "Creators", to: "/creators", keys: "authors studios makers" },
  { label: "Documentation", to: "/resources/docs", keys: "help docs guide how" },
  { label: "License", to: "/resources/license", keys: "terms commercial use" },
];

const FALLBACK_SUGGESTIONS = ["pricing", "navbar", "dashboard", "landing page", "animated button"];

function readRecent() {
  try {
    const value = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    return Array.isArray(value) ? value.filter((q) => typeof q === "string").slice(0, 6) : [];
  } catch {
    return [];
  }
}

function saveRecent(query) {
  const q = query.trim();
  if (!q) return;
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify([q, ...readRecent().filter((item) => item.toLowerCase() !== q.toLowerCase())].slice(0, 6)));
  } catch {}
}

// Every token must match somewhere; earlier and tighter matches rank higher.
function score(tokens, fields) {
  let total = 0;
  for (const token of tokens) {
    let best = 0;
    fields.forEach(([text, weight]) => {
      const t = String(text || "").toLowerCase();
      if (!t) return;
      if (t === token) best = Math.max(best, 120 * weight);
      else if (t.startsWith(token)) best = Math.max(best, 90 * weight);
      else if (t.split(/[\s/&-]+/).some((word) => word.startsWith(token))) best = Math.max(best, 60 * weight);
      else if (t.includes(token)) best = Math.max(best, 30 * weight);
    });
    if (!best) return 0;
    total += best;
  }
  return total;
}

let indexPromise = null;
function loadIndex() {
  if (!indexPromise) {
    indexPromise = Promise.all([
      api.products.searchIndex().then((r) => r.products || []),
      api.products.collections().then((r) => r.collections || []).catch(() => []),
      api.products.categories().then((r) => r.categories || []).catch(() => []),
      api.analytics.popularSearches().then((r) => r.searches || []).catch(() => []),
    ])
      .then(([products, collections, categories, popular]) => ({ products, collections, categories, popular }))
      .catch((error) => {
        indexPromise = null;
        throw error;
      });
  }
  return indexPromise;
}

function Palette({ onClose }) {
  const navigate = useNavigate();
  const listId = useId();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(null);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(0);
  const [recent, setRecent] = useState(readRecent);

  useEffect(() => {
    let alive = true;
    loadIndex()
      .then((data) => alive && setIndex(data))
      .catch(() => alive && setFailed(true));
    requestAnimationFrame(() => inputRef.current?.focus());
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      alive = false;
      document.body.style.overflow = previous;
    };
  }, []);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = [];
    if (!q) {
      if (recent.length) out.push({ title: "Recent searches", items: recent.map((r) => ({ id: `r:${r}`, kind: "query", label: r, icon: Clock, query: r })) });
      const suggestions = (index?.popular?.length ? index.popular : FALLBACK_SUGGESTIONS).filter((s) => !recent.includes(s)).slice(0, 5);
      out.push({ title: index?.popular?.length ? "Popular searches" : "Try searching", items: suggestions.map((s) => ({ id: `s:${s}`, kind: "query", label: s, icon: TrendingUp, query: s })) });
      out.push({ title: "Go to", items: PAGES.slice(0, 6).map((p) => ({ id: `p:${p.to}`, kind: "page", label: p.label, to: p.to, icon: FileText })) });
      return out;
    }
    const tokens = q.split(/\s+/).filter(Boolean);
    if (index) {
      const products = index.products
        .map((p) => ({ p, s: score(tokens, [[p.n, 3], [p.c, 1.5], ...p.k.map((k) => [k, 1])]) }))
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, 6)
        .map(({ p }) => ({ id: `x:${p.s}`, kind: "product", label: p.n, meta: `${p.c} · ${productAccess({ productType: p.t }).label}`, to: `/products/${p.s}`, icon: Boxes }));
      if (products.length) out.push({ title: "Products", items: products });

      const sets = index.collections
        .filter((c) => score(tokens, [[c.name, 2], [c.description, 0.5]]) > 0)
        .slice(0, 4)
        .map((c) => ({ id: `c:${c.slug}`, kind: "page", label: c.name, meta: c.kind === "pack" ? "Curated pack" : "Collection", to: `/collections/${c.slug}`, icon: Layers }));
      const cats = index.categories
        .filter((c) => score(tokens, [[c.name, 2]]) > 0)
        .slice(0, 3)
        .map((c) => ({ id: `k:${c.name}`, kind: "page", label: c.name, meta: `Category · ${c.count}`, to: `/products?category=${encodeURIComponent(c.name)}`, icon: Hash }));
      const tagSet = new Map();
      index.products.forEach((p) => p.k.forEach((k) => tagSet.set(k, (tagSet.get(k) || 0) + 1)));
      const tags = [...tagSet.entries()]
        .filter(([name]) => !/^(HTML|CSS|JS)$/.test(name) && score(tokens, [[name, 2]]) > 0)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([name, count]) => ({ id: `t:${name}`, kind: "page", label: name, meta: `Tag · ${count}`, to: `/products?tag=${encodeURIComponent(name)}`, icon: Sparkles }));
      if (sets.length || cats.length || tags.length) out.push({ title: "Browse", items: [...sets, ...cats, ...tags] });
    }
    const pages = PAGES.filter((p) => score(tokens, [[p.label, 2], [p.keys, 1]]) > 0).slice(0, 4).map((p) => ({ id: `p:${p.to}`, kind: "page", label: p.label, to: p.to, icon: FileText }));
    if (pages.length) out.push({ title: "Pages", items: pages });
    out.push({ title: "", items: [{ id: "all", kind: "search", label: `Search all products for “${query.trim()}”`, query: query.trim(), icon: Search }] });
    return out;
  }, [query, index, recent]);

  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const resultCount = flat.filter((i) => i.kind === "product").length;

  function choose(item) {
    if (!item) return;
    if (item.kind === "query") {
      setQuery(item.query);
      inputRef.current?.focus();
      return;
    }
    const q = query.trim();
    if (q) {
      saveRecent(q);
      track("search", { meta: { query: q.slice(0, 100), results: resultCount, source: "palette" } });
    }
    if (item.kind === "search") {
      navigate(`/products?search=${encodeURIComponent(item.query)}`);
    } else {
      navigate(item.to);
    }
    onClose();
  }

  function onKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (flat.length ? (i + 1) % flat.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => (flat.length ? (i - 1 + flat.length) % flat.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      choose(flat[active]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  }

  let n = -1;
  return (
    <div className="palette-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Search CodeFusion">
        <div className="palette-input">
          <Search size={18} aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search products, packs, pages…"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={flat[active] ? `${listId}-${active}` : undefined}
            aria-autocomplete="list"
            spellCheck={false}
          />
          {query ? (
            <button type="button" className="palette-clear" onClick={() => { setQuery(""); inputRef.current?.focus(); }} aria-label="Clear search">
              <X size={14} />
            </button>
          ) : (
            <kbd>Esc</kbd>
          )}
        </div>
        <div className="palette-results" ref={listRef} id={listId} role="listbox" aria-label="Results">
          {failed && <p className="palette-note">Search is unavailable right now. Press Enter to search the catalogue.</p>}
          {!index && !failed && query && <p className="palette-note">Loading the catalogue…</p>}
          {groups.map((group, gi) =>
            group.items.length ? (
              <div className="palette-group" key={group.title || gi} role="group" aria-label={group.title || "Search"}>
                {group.title && <div className="palette-group-title">{group.title}</div>}
                {group.items.map((item) => {
                  n += 1;
                  const i = n;
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      id={`${listId}-${i}`}
                      data-index={i}
                      role="option"
                      aria-selected={i === active}
                      className={`palette-item${i === active ? " active" : ""}`}
                      onMouseMove={() => setActive(i)}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => choose(item)}
                    >
                      <Icon size={16} aria-hidden="true" />
                      <span className="palette-label">{item.label}</span>
                      {item.meta && <span className="palette-meta">{item.meta}</span>}
                      {i === active && (item.kind === "query" ? <ArrowRight size={14} aria-hidden="true" /> : <CornerDownLeft size={14} aria-hidden="true" />)}
                    </div>
                  );
                })}
              </div>
            ) : null
          )}
        </div>
        <div className="palette-foot" aria-hidden="true">
          <span><kbd>↑</kbd><kbd>↓</kbd> to move</span>
          <span><kbd>↵</kbd> to open</span>
          <span><kbd>{PALETTE_SHORTCUT}</kbd> to toggle</span>
        </div>
      </div>
    </div>
  );
}

/*
 * ⌘K / Ctrl+K opens the palette anywhere on the storefront; "/" does too when
 * the reader isn't typing in a field. Focus returns to whatever opened it.
 */
export function CommandPaletteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const opener = useRef(null);
  const { pathname } = useLocation();

  const show = useCallback(() => {
    opener.current = document.activeElement;
    setOpen(true);
    loadIndex().catch(() => {});
  }, []);
  const hide = useCallback(() => {
    setOpen(false);
    const el = opener.current;
    if (el && typeof el.focus === "function" && document.contains(el)) requestAnimationFrame(() => el.focus({ preventScroll: true }));
  }, []);

  useEffect(() => {
    function onKey(event) {
      if (pathname.startsWith("/admin")) return;
      const key = event.key?.toLowerCase();
      const target = event.target;
      const typing = target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
      if (key === "k" && (IS_MAC ? event.metaKey : event.ctrlKey) && !event.altKey && !event.shiftKey) {
        event.preventDefault();
        open ? hide() : show();
      } else if (event.key === "/" && !typing && !open) {
        event.preventDefault();
        show();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, show, hide, pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const value = useMemo(() => ({ open: show, close: hide }), [show, hide]);
  return (
    <PaletteContext.Provider value={value}>
      {children}
      {open && <Palette onClose={hide} />}
    </PaletteContext.Provider>
  );
}

export function useCommandPalette() {
  return useContext(PaletteContext);
}
