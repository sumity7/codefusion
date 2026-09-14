import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../services/api";
import { fallbackProducts } from "../data/fallbackProducts";
import ProductCard from "../components/ProductCard";
import ProductVisual from "../components/ProductVisual";
import ScrollReveal from "../components/ScrollReveal";
import CategorySidebar from "../components/CategorySidebar";

const PLAN_TABS = [
  { key: "all", label: "All" },
  { key: "free", label: "Free" },
  { key: "plan", label: "Included in Plan" },
  { key: "verified", label: "Verified" },
];

export default function Products() {
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search).get("search") || "");
  const [category, setCategory] = useState(new URLSearchParams(location.search).get("category") || "All");
  const [plan, setPlan] = useState("all");
  const [sort, setSort] = useState("newest");
  const [data, setData] = useState(fallbackProducts);

  // Navigating to /products?search=... from elsewhere on the site (e.g. the navbar
  // search) doesn't remount this page if you're already on it, so the URL has to be
  // re-read explicitly whenever it changes rather than only once via useState.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlSearch = params.get("search") || "";
    const urlCategory = params.get("category") || "All";
    setQuery((current) => (current === urlSearch ? current : urlSearch));
    setCategory((current) => (current === urlCategory ? current : urlCategory));
  }, [location.search]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (category !== "All") params.set("category", category);
      if (query) params.set("search", query);
      if (plan !== "all") params.set("plan", plan);
      if (sort !== "newest") params.set("sort", sort);

      api.products
        .list(`?${params}`)
        .then((result) => setData(result.products))
        .catch(() => {
          const value = query.toLowerCase();
          setData(
            fallbackProducts.filter(
              (product) =>
                (category === "All" || product.category === category) &&
                (!value || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(value))
            )
          );
        });
    }, 300);

    return () => clearTimeout(timeout);
  }, [category, query, plan, sort]);

  const shown = useMemo(() => data, [data]);
  const spotlight = shown[0] || fallbackProducts[0];
  const feature = shown[2] || fallbackProducts[2];

  const browseRef = useRef(null);
  function handleCategorySelect(name) {
    setCategory(name);
    requestAnimationFrame(() => {
      browseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <main className="listing premium-listing">
      <section className="collection-hero container">
        <div className="collection-copy">
          <span className="eyebrow">
            <Sparkles size={12} /> CURATED DIGITAL GOODS
          </span>
          <h1>
            Build the part
            <br />
            people <span>remember.</span>
          </h1>
          <p>High-fidelity UI systems for ambitious launches, polished products and teams that care about the details.</p>
          <div className="listing-search">
            <Search size={17} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by component, style or stack..." />
            <kbd>⌘ K</kbd>
          </div>
          <div className="collection-proof">
            <span><b>10+</b> premium systems</span>
            <span><b>4.9/5</b> builder rating</span>
          </div>
        </div>
        <div className="collection-art">
          <div className="collection-window">
            <div className="collection-window-bar">
              <i /><i /><i />
              <span>curated / interface</span>
            </div>
            <ProductVisual product={spotlight} />
          </div>
        </div>
      </section>

      <section className="container collection-feature">
        <Link to={`/products/${feature.slug}`} className="feature-card">
          <div>
            <span className="eyebrow">FEATURED RELEASE · {feature.badge}</span>
            <h2>{feature.name}</h2>
            <p>{feature.description}</p>
            <span className="feature-link">
              Explore system <ArrowUpRight size={17} />
            </span>
          </div>
          <div className="feature-visual">
            <ProductVisual product={feature} />
          </div>
        </Link>
      </section>

      <section className="container">
        <div className="browse-shell">
          <CategorySidebar category={category} onSelect={handleCategorySelect} />

          <div ref={browseRef} style={{ scrollMarginTop: "88px" }}>
            <div className="collection-toolbar">
              <div>
                <span className="eyebrow">EXPLORE THE LIBRARY</span>
                <h2>Made for the last 10%.</h2>
              </div>
              <span>
                <SlidersHorizontal size={14} /> {shown.length} curated products
              </span>
            </div>

            <div className="browse-toolbar">
              <div className="plan-tabs">
                {PLAN_TABS.map((tab) => (
                  <button key={tab.key} type="button" className={plan === tab.key ? "active" : ""} onClick={() => setPlan(tab.key)}>
                    {tab.label}
                  </button>
                ))}
              </div>
              <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="newest">Newest</option>
                <option value="popular">Most popular</option>
                <option value="rating">Top rated</option>
                <option value="price">Price</option>
              </select>
            </div>

            <div className="product-grid listing-grid premium-grid">
              {shown.map((product, index) => (
                <ScrollReveal key={product.slug} delay={Math.min(index * 45, 220)}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            {!shown.length && (
              <div className="empty-state">
                <Search size={22} />
                <h3>No matching products</h3>
                <p>Try another search or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
