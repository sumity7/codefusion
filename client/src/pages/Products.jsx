import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";
import ProductVisual from "../components/ProductVisual";
import ScrollReveal from "../components/ScrollReveal";
import CategorySidebar from "../components/CategorySidebar";
import LoadError from "../components/LoadError";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { prefersReducedMotion } from "../hooks/useReducedMotion";

const PLAN_TABS = [
  { key: "all", label: "All" },
  { key: "free", label: "Free" },
  { key: "plan", label: "Included in Plan" },
  { key: "verified", label: "CodeFusion Verified", title: "Products the CodeFusion team has marked as verified" },
];

const SORTS = [
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most popular" },
  { value: "rating", label: "Top rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const IS_MAC = typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || "");

// Weighted by each product's approved review count. Null when nobody has
// reviewed anything yet — the model defaults `rating` to 5 before that.
function catalogRating(products) {
  let total = 0;
  let count = 0;
  for (const product of products) {
    const n = Number(product.reviewCount) || 0;
    const r = Number(product.rating);
    if (n > 0 && Number.isFinite(r) && r > 0) {
      total += r * n;
      count += n;
    }
  }
  return count ? { value: (total / count).toFixed(1), count } : null;
}

export default function Products() {
  useDocumentTitle("Products");
  /*
   * Every filter lives in the query string rather than component state. Keeping
   * them in state meant leaving for a product and pressing Back returned you to a
   * bare /products with the category reset to All — the filters simply weren't
   * part of the history entry. The URL is also what makes a filtered view
   * shareable, and what the navbar search already navigates to.
   */
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const plan = searchParams.get("plan") || "all";
  // "price" was the old ascending-only value; old links keep working.
  const rawSort = searchParams.get("sort") || "newest";
  const sort = rawSort === "price" ? "price-asc" : rawSort;
  const urlSearch = searchParams.get("search") || "";

  // The text input stays local so typing feels immediate; the URL catches up on
  // the same debounce as the fetch.
  const [query, setQuery] = useState(urlSearch);
  const [data, setData] = useState([]);
  // "loading" | "ready" | "error"
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const [categories, setCategories] = useState({ list: [], total: null });
  const [rating, setRating] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    setQuery((current) => (current === urlSearch ? current : urlSearch));
  }, [urlSearch]);

  // Fetched here rather than inside the sidebar so the page's product count
  // comes from the same request instead of a second one.
  useEffect(() => {
    api.products
      .categories()
      .then((result) => setCategories({ list: result.categories || [], total: result.total ?? null }))
      .catch(() => {});
  }, []);

  // replace, not push: a category or sort change shouldn't add a history entry
  // the reader has to press Back through. It also tells ScrollManager this is an
  // in-page update and scroll should be left alone.
  function setParam(key, value, fallback) {
    const next = new URLSearchParams(searchParams);
    if (!value || value === fallback) next.delete(key);
    else next.set(key, value);
    setSearchParams(next, { replace: true });
  }

  useEffect(() => {
    let active = true;
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (category !== "All") params.set("category", category);
      if (query) params.set("search", query);
      if (plan !== "all") params.set("plan", plan);
      if (sort !== "newest") params.set("sort", sort);

      setStatus("loading");
      api.products
        .list(`?${params}`)
        .then((result) => {
          if (!active) return;
          const products = result.products || [];
          setData(products);
          setStatus("ready");
          // Only the unfiltered catalogue speaks for the whole library.
          if (category === "All" && !query && plan === "all") setRating(catalogRating(products));
        })
        .catch(() => {
          if (active) setStatus("error");
        });
    }, 300);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [category, query, plan, sort, attempt]);

  // Mirror the debounced search term into the URL so it survives Back as well.
  useEffect(() => {
    if (query === urlSearch) return;
    const timeout = setTimeout(() => setParam("search", query, ""), 300);
    return () => clearTimeout(timeout);
  }, [query, urlSearch]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cmd+K (macOS) / Ctrl+K (elsewhere) jumps to search. Left alone while the
  // reader is typing in some other field, where the combo may mean something.
  useEffect(() => {
    function onKey(event) {
      if (event.key?.toLowerCase() !== "k" || event.altKey || event.shiftKey) return;
      if (!(IS_MAC ? event.metaKey : event.ctrlKey)) return;
      const target = event.target;
      const editing = target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
      if (editing && target !== searchRef.current) return;
      event.preventDefault();
      searchRef.current?.focus();
      searchRef.current?.select();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const shown = data;
  const spotlight = shown[0];
  const feature = shown[2];

  const browseRef = useRef(null);
  function handleCategorySelect(name) {
    setParam("category", name, "All");
    requestAnimationFrame(() => {
      browseRef.current?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    });
  }

  return (
    <main className="listing premium-listing">
      <section className="collection-hero container">
        <div className="collection-copy">
          <span className="eyebrow">
            <Sparkles size={12} aria-hidden="true" /> CURATED DIGITAL GOODS
          </span>
          <h1>
            Build the part
            <br />
            people <span>remember.</span>
          </h1>
          <p>High-fidelity UI systems for ambitious launches, polished products and teams that care about the details.</p>
          <div className="listing-search">
            <Search size={17} aria-hidden="true" />
            <input
              ref={searchRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by component, style or stack..."
              aria-label="Search products"
              aria-keyshortcuts={IS_MAC ? "Meta+K" : "Control+K"}
            />
            <kbd aria-hidden="true">{IS_MAC ? "⌘ K" : "Ctrl K"}</kbd>
          </div>
          {(categories.total !== null || rating) && (
            <div className="collection-proof">
              {categories.total !== null && (
                <span>
                  <b>{categories.total}</b> {categories.total === 1 ? "product" : "products"}
                </span>
              )}
              {rating && (
                <span>
                  <b>{rating.value}/5</b> from {rating.count} {rating.count === 1 ? "review" : "reviews"}
                </span>
              )}
            </div>
          )}
        </div>
        <div className="collection-art">
          <div className="collection-window">
            <div className="collection-window-bar">
              <i /><i /><i />
              <span>curated / interface</span>
            </div>
            {spotlight ? <ProductVisual product={spotlight} /> : <div className="card-skeleton window-skeleton" aria-hidden="true" />}
          </div>
        </div>
      </section>

      {feature && (
        <section className="container collection-feature">
          <ScrollReveal>
            <Link to={`/products/${feature.slug}`} className="feature-card">
              <div>
                <span className="eyebrow">FEATURED RELEASE{feature.badge ? ` · ${feature.badge}` : ""}</span>
                <h2>{feature.name}</h2>
                <p>{feature.description}</p>
                <span className="feature-link">
                  Explore system <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </div>
              <div className="feature-visual">
                <ProductVisual product={feature} />
              </div>
            </Link>
          </ScrollReveal>
        </section>
      )}

      <section className="container">
        <div className="browse-shell">
          <CategorySidebar category={category} onSelect={handleCategorySelect} categories={categories.list} total={categories.total ?? 0} />

          <div ref={browseRef} style={{ scrollMarginTop: "88px" }}>
            <ScrollReveal>
              <div className="collection-toolbar">
                <div>
                  <span className="eyebrow">EXPLORE THE LIBRARY</span>
                  <h2>Made for the last 10%.</h2>
                </div>
                <span aria-live="polite">
                  <SlidersHorizontal size={14} aria-hidden="true" />{" "}
                  {status === "ready" ? `${shown.length} ${shown.length === 1 ? "product" : "products"}` : status === "loading" ? "Loading…" : ""}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <div className="browse-toolbar">
                <div className="plan-tabs" role="group" aria-label="Filter by access">
                  {PLAN_TABS.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      className={plan === tab.key ? "active" : ""}
                      aria-pressed={plan === tab.key}
                      title={tab.title}
                      onClick={() => setParam("plan", tab.key, "all")}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <select className="sort-select" aria-label="Sort products" value={sort} onChange={(event) => setParam("sort", event.target.value, "newest")}>
                  {SORTS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </ScrollReveal>

            {status === "error" ? (
              <LoadError title="We couldn't load products" onRetry={() => setAttempt((n) => n + 1)} />
            ) : status === "loading" && !shown.length ? (
              <div className="product-grid listing-grid premium-grid" aria-busy="true" aria-label="Loading products">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="card-skeleton" />
                ))}
              </div>
            ) : (
              <>
                <div className={`product-grid listing-grid premium-grid${status === "loading" ? " is-refreshing" : ""}`} aria-busy={status === "loading"}>
                  {shown.map((product, index) => (
                    <ScrollReveal key={product.slug} delay={Math.min(index * 45, 220)}>
                      <ProductCard product={product} />
                    </ScrollReveal>
                  ))}
                </div>

                {status === "ready" && !shown.length && (
                  <div className="empty-state">
                    <Search size={22} aria-hidden="true" />
                    <h3>No matching products</h3>
                    <p>Try another search or category.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
