import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { fallbackProducts } from "../data/fallbackProducts";
import ProductCard from "../components/ProductCard";
import ProductVisual from "../components/ProductVisual";
import ScrollReveal from "../components/ScrollReveal";



export default function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(new URLSearchParams(location.search).get("category") || "All");
  const [cats, setCats] = useState(["All", ...new Set(fallbackProducts.map((product) => product.category))]);
  const [data, setData] = useState(fallbackProducts);
  useEffect(() => { const params = new URLSearchParams(); if (category !== "All") params.set("category", category); if (query) params.set("search", query); api.products.list(`?${params}`).then(result => { setData(result.products); if (result.categories?.length) setCats(["All", ...result.categories]); }).catch(() => { const value = query.toLowerCase(); setData(fallbackProducts.filter(product => (category === "All" || product.category === category) && (!value || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(value)))); }); }, [category, query]);
  const shown = useMemo(() => data, [data]);
  const spotlight = shown[0] || fallbackProducts[0];
  const feature = shown[2] || fallbackProducts[2];

  return <main className="listing premium-listing">
    <section className="collection-hero container"><div className="collection-copy"><span className="eyebrow"><Sparkles size={12}/> CURATED DIGITAL GOODS</span><h1>Build the part<br/>people <span>remember.</span></h1><p>High-fidelity UI systems for ambitious launches, polished products and teams that care about the details.</p><div className="listing-search"><Search size={17}/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by component, style or stack..."/><kbd>⌘ K</kbd></div><div className="collection-proof"><span><b>10+</b> premium systems</span><span><b>4.9/5</b> builder rating</span></div></div><div className="collection-art"><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/><div className="collection-window"><div className="collection-window-bar"><i/><i/><i/><span>curated / interface</span></div><ProductVisual product={spotlight}/></div><span className="floating-label label-one">Design-led. Developer-ready.</span><span className="floating-label label-two">New drops weekly</span></div></section>
    <section className="container collection-feature"><Link to={`/products/${feature.slug}`} className="feature-card"><div><span className="eyebrow">FEATURED RELEASE · {feature.badge}</span><h2>{feature.name}</h2><p>{feature.description}</p><span className="feature-link">Explore system <ArrowUpRight size={17}/></span></div><div className="feature-visual"><ProductVisual product={feature}/></div></Link></section>
    <section className="container"><div className="collection-toolbar"><div><span className="eyebrow">EXPLORE THE LIBRARY</span><h2>Made for the last 10%.</h2></div><span><SlidersHorizontal size={14}/> {shown.length} curated products</span></div><div className="filters">{cats.map(item => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="product-grid listing-grid premium-grid">{shown.map((product, index) => <ScrollReveal key={product.slug} delay={Math.min(index * 45, 220)}><ProductCard product={product}/></ScrollReveal>)}</div>{!shown.length && <div className="empty-state"><Search size={22}/><h3>No matching products</h3><p>Try another search or category.</p></div>}</section>
  </main>;
}
