import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Layers, Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";
import ProductVisual from "../components/ProductVisual";
import ScrollReveal from "../components/ScrollReveal";
import CategorySidebar from "../components/CategorySidebar";
import LoadError from "../components/LoadError";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { prefersReducedMotion } from "../hooks/useReducedMotion";
import { track } from "../services/analytics";

const PLAN_TABS = [
  { key: "all", label: "All" },
  { key: "free", label: "Free" },
  { key: "plan", label: "Included in Plan" },
  { key: "verified", label: "CodeFusion Verified", title: "Products the CodeFusion team has marked as verified" },
];

const SORTS = [
  { value: "newest", label: "Newest" },
  { value: "trending", label: "Trending this week" },
  { value: "popular", label: "Most popular" },
  { value: "rating", label: "Top rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const PAGE_SIZE = 24;
// Use-case and style tags offered as quick filters, in this order, when the
// catalogue has products for them. Other tags still work from links (?tag=).
const FEATURED_TAGS = ["SaaS", "E-commerce", "Portfolio", "Fintech", "Developer tools", "Animated", "Interactive", "Minimal", "Glassmorphism", "3D", "GSAP", "No dependencies", "CSS only", "Responsive", "Mobile-first"];

/*
 * Results already loaded for a given filter set, kept for the session's SPA
 * navigation. Coming Back from a product restores every page that was loaded,
 * so the scroll position the ScrollManager restores still exists.
 */
const resultCache = new Map();
const CACHE_MS = 5 * 60 * 1000;


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
  const tagParam = searchParams.get("tag") || "";
  const activeTags = tagParam ? tagParam.split(",").filter(Boolean) : [];

  // The text input stays local so typing feels immediate; the URL catches up on
  // the same debounce as the fetch.
  const [query, setQuery] = useState(urlSearch);
  const [data, setData] = useState([]);
  // "loading" | "ready" | "error" — for the first page of the current filters.
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  // "idle" | "loading" | "error" — for pages after the first.
  const [moreStatus, setMoreStatus] = useState("idle");
  const [categories, setCategories] = useState({ list: [], total: null, rating: null });
  const [tags, setTags] = useState([]);
  const [packs, setPacks] = useState([]);
  const searchRef = useRef(null);
  const sentinelRef = useRef(null);
  const lastSearchTracked = useRef("");

  useEffect(() => {
    setQuery((current) => (current === urlSearch ? current : urlSearch));
  }, [urlSearch]);

  // Fetched here rather than inside the sidebar so the page's product count
  // comes from the same request instead of a second one.
  useEffect(() => {
    api.products
      .categories()
      .then((result) => setCategories({ list: result.categories || [], total: result.total ?? null, rating: result.rating || null }))
      .catch(() => {});
    api.products
      .tags()
      .then((result) => {
        const counts = new Map((result.tags || []).map((tag) => [tag.name, tag.count]));
        setTags(FEATURED_TAGS.filter((name) => counts.get(name)).map((name) => ({ name, count: counts.get(name) })));
      })
      .catch(() => {});
    api.products
      .collections()
      .then((result) => setPacks((result.collections || []).filter((item) => item.kind === "pack" && item.count > 0)))
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

  function queryFor(pageNumber) {
    const params = new URLSearchParams();
    if (category !== "All") params.set("category", category);
    if (query) params.set("search", query);
    if (plan !== "all") params.set("plan", plan);
    if (sort !== "newest") params.set("sort", sort);
    if (tagParam) params.set("tag", tagParam);
    params.set("page", String(pageNumber));
    params.set("limit", String(PAGE_SIZE));
    return params;
  }
  const filterKey = (() => {
    const params = queryFor(1);
    params.delete("page");
    return params.toString();
  })();

  // First page whenever the filters change (debounced for typing). A fresh
  // cache entry for the same filters — e.g. coming Back from a product —
  // restores every page that had been loaded instead.
  useEffect(() => {
    let active = true;
    const cached = resultCache.get(filterKey);
    if (cached && Date.now() - cached.at < CACHE_MS && attempt === 0) {
      setData(cached.products);
      setPage(cached.page);
      setTotal(cached.total);
      setHasMore(cached.hasMore);
      setStatus("ready");
      setMoreStatus("idle");
      return () => {};
    }

    const timeout = setTimeout(() => {
      setStatus("loading");
      setMoreStatus("idle");
      api.products
        .list(`?${queryFor(1)}`)
        .then((result) => {
          if (!active) return;
          const products = result.products || [];
          setData(products);
          setPage(1);
          setTotal(result.total ?? products.length);
          setHasMore(Boolean(result.hasMore));
          setStatus("ready");
          resultCache.set(filterKey, { products, page: 1, total: result.total ?? products.length, hasMore: Boolean(result.hasMore), at: Date.now() });
          // Searches feed the admin's "top searches" and "no results" lists.
          if (query && lastSearchTracked.current !== `${query}|${filterKey}`) {
            lastSearchTracked.current = `${query}|${filterKey}`;
            track("search", { meta: { query: query.slice(0, 100), results: result.total ?? products.length, category, plan, tag: tagParam } });
          }
        })
        .catch(() => {
          if (active) setStatus("error");
        });
    }, 300);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [filterKey, attempt]); // eslint-disable-line react-hooks/exhaustive-deps

  function loadMore() {
    if (moreStatus === "loading" || !hasMore || status !== "ready") return;
    const next = page + 1;
    const key = filterKey;
    setMoreStatus("loading");
    api.products
      .list(`?${queryFor(next)}`)
      .then((result) => {
        if (key !== filterKey) return;
        setData((current) => {
          const seen = new Set(current.map((p) => p.slug));
          const merged = [...current, ...(result.products || []).filter((p) => !seen.has(p.slug))];
          resultCache.set(key, { products: merged, page: next, total: result.total ?? merged.length, hasMore: Boolean(result.hasMore), at: Date.now() });
          return merged;
        });
        setPage(next);
        setTotal(result.total ?? total);
        setHasMore(Boolean(result.hasMore));
        setMoreStatus("idle");
      })
      .catch(() => setMoreStatus("error"));
  }

  // Infinite scroll: the next page loads as the end of the grid approaches.
  // The "Load more" button below stays as the keyboard / no-observer fallback.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && loadMore(), { rootMargin: "900px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }); // re-bound each render so loadMore sees current state

  function toggleTag(name) {
    const next = activeTags.includes(name) ? activeTags.filter((t) => t !== name) : [...activeTags, name];
    setParam("tag", next.join(","), "");
  }

  // Mirror the debounced search term into the URL so it survives Back as well.
  useEffect(() => {
    if (query === urlSearch) return;
    const timeout = setTimeout(() => setParam("search", query, ""), 300);
    return () => clearTimeout(timeout);
  }, [query, urlSearch]); // eslint-disable-line react-hooks/exhaustive-deps


  const shown = data;
  const rating = categories.rating;
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
            />
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

      {packs.length > 0 && (
        <section className="container packs-strip" aria-labelledby="packs-title">
          <div className="section-head">
            <div>
              <span className="eyebrow">CURATED PACKS</span>
              <h2 id="packs-title">Start from a set.</h2>
            </div>
            <Link to="/packs" className="text-link">All packs <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="packs-row">
            {packs.map((pack) => (
              <Link key={pack.slug} to={`/collections/${pack.slug}`} className="pack-chip">
                <Layers size={15} aria-hidden="true" />
                <b>{pack.name}</b>
                <small>{pack.count} products</small>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container">
        <div className="browse-shell">
          <CategorySidebar category={category} onSelect={handleCategorySelect} categories={categories.list} total={categories.total ?? 0} />

          <div ref={browseRef} style={{ scrollMarginTop: "5.5rem" }}>
            <ScrollReveal>
              <div className="collection-toolbar">
                <div>
                  <span className="eyebrow">EXPLORE THE LIBRARY</span>
                  <h2>Made for the last 10%.</h2>
                </div>
                <span aria-live="polite">
                  <SlidersHorizontal size={14} aria-hidden="true" />{" "}
                  {status === "ready" ? `${total} ${total === 1 ? "product" : "products"}` : status === "loading" ? "Loading…" : ""}
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

            {tags.length > 0 && (
              <div className="tag-filter" role="group" aria-label="Filter by use case and style">
                {tags.map((tag) => {
                  const on = activeTags.includes(tag.name);
                  return (
                    <button key={tag.name} type="button" className={on ? "active" : ""} aria-pressed={on} onClick={() => toggleTag(tag.name)}>
                      {tag.name}
                      {on ? <X size={11} aria-hidden="true" /> : <small>{tag.count}</small>}
                    </button>
                  );
                })}
                {activeTags.length > 0 && (
                  <button type="button" className="tag-clear" onClick={() => setParam("tag", "", "")}>Clear tags</button>
                )}
              </div>
            )}

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

                {status === "ready" && hasMore && (
                  <div className="load-more" ref={sentinelRef}>
                    {moreStatus === "error" ? (
                      <LoadError compact title="We couldn't load more products" onRetry={loadMore} />
                    ) : (
                      <button type="button" className="button ghost" onClick={loadMore} disabled={moreStatus === "loading"} aria-busy={moreStatus === "loading"}>
                        {moreStatus === "loading" ? "Loading…" : `Load more · showing ${shown.length} of ${total}`}
                      </button>
                    )}
                  </div>
                )}

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
