import { ArrowRight,ArrowUpRight,Code2,Download,Layers,MousePointer2,Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect,useRef,useState } from "react";
import { api } from "../services/api";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import LoadError from "../components/LoadError";
import ProductCard from "../components/ProductCard";
import ProductVisual from "../components/ProductVisual";
import HeroFlight from "../components/HeroFlight";
import ScrollReveal from "../components/ScrollReveal";

/*
 * The products shown on Home: the hero's showcase window (first slug) and the
 * Featured row below it. Kept in this order deliberately.
 *
 * Fetched by exact slug (`?slugs=...`) rather than the plain product list —
 * the plain list embeds every product's full HTML/CSS/JS preview source, which
 * for the whole catalogue is 1MB+ of JSON. Home only ever shows 4 of them, so
 * asking for those 4 by name keeps the page's first paint fast.
 */
const FEATURED_SLUGS=[
 "creative-agency-landing-page",
 "enterprise-delivery-landing-page",
 "ai-music-app-landing-page",
 "editorial-saas-landing-page",
];

function normalizeSource(p){
 return p.previewCode?{...p,previewMode:"source",code:{html:p.previewCode,css:"",javascript:""}}:p;
}

export default function Home(){
 useDocumentTitle("CodeFusion — Premium UI Products",{full:true});
 const [products,setProducts]=useState([]);
 // "loading" | "ready" | "error" — a failed request shows an error with retry
 // rather than sample products dressed up as the live catalogue.
 const [status,setStatus]=useState("loading");
 const [attempt,setAttempt]=useState(0);
 // The real catalogue size, fetched separately (and cheaply — no preview
 // source in this payload) so the stat doesn't lie by counting only the 4
 // products actually loaded for this page.
 const [total,setTotal]=useState(null);
 const [packs,setPacks]=useState([]);
 // The hero flight: featured first, then the most popular, de-duplicated.
 const [flight,setFlight]=useState([]);

 useEffect(()=>{
  let active=true;
  setStatus("loading");
  // Cards show generated thumbnails, so the list needs no preview source.
  api.products.list(`?slugs=${FEATURED_SLUGS.join(",")}`)
   .then(x=>{if(!active)return;setProducts((x.products||[]).map(normalizeSource));setStatus("ready")})
   .catch(()=>{if(active)setStatus("error")});
  return()=>{active=false};
 },[attempt]);

 useEffect(()=>{
  let active=true;
  api.products.categories().then(x=>{if(active)setTotal(x.total??null)}).catch(()=>{});
  api.products.collections().then(x=>{if(active)setPacks((x.collections||[]).filter(c=>c.kind==="pack"&&c.count>0))}).catch(()=>{});
  api.products.list("?sort=popular&limit=12").then(x=>{if(active)setFlight(x.products||[])}).catch(()=>{});
  return()=>{active=false};
 },[]);

 const retry=()=>setAttempt(n=>n+1);
 const flightProducts=[...products,...flight.filter(p=>!products.some(f=>f.slug===p.slug))].filter(p=>p.thumbnail).slice(0,7);
 const editorialProduct=products[1]||products[0];

 return <main>
    <HeroFlight products={flightProducts} total={total}/>
  <ScrollReveal className="container"><section className="intro-line"><div><span className="eyebrow">THE COLLECTION</span><h2>Useful first. Beautiful always.</h2></div><p>Every CodeFusion product starts from a real website need — not a filler concept.</p></section></ScrollReveal>
  <ScrollReveal className="container"><section className="category-line"><span className="eyebrow">SHOP BY PURPOSE</span><div><Link to="/products?category=Cards">Cards</Link><Link to="/products?category=Pricing">Pricing</Link><Link to="/products?category=Dashboards">Dashboards</Link><Link to="/products?category=Navigation">Navigation</Link><Link to="/products?category=Forms">Forms</Link><Link to="/products?category=Landing%20Pages">Landing pages</Link></div></section></ScrollReveal>
  <section className="container section"><ScrollReveal><header className="section-head"><div><span className="eyebrow">FEATURED</span><h2>Built like products, not placeholders.</h2></div><Link to="/products" className="text-link">View all <ArrowRight size={14}/></Link></header></ScrollReveal>{status==="error"?<LoadError title="We couldn't load the collection" onRetry={retry}/>:status==="loading"?<div className="product-grid" aria-busy="true" aria-label="Loading products">{[0,1,2,3].map(i=><div key={i} className="card-skeleton"/>)}</div>:products.length?<div className="product-grid">{products.map((p,i)=><ScrollReveal key={p.slug} delay={i*60}><ProductCard product={p}/></ScrollReveal>)}</div>:<div className="empty-state"><h3>New products are on the way</h3><p>Nothing has been published yet.</p></div>}</section>
  {packs.length>0&&<ScrollReveal className="container"><section className="packs-strip home-packs"><header className="section-head"><div><span className="eyebrow">CURATED PACKS</span><h2>Start from a set.</h2></div><Link to="/packs" className="text-link">All packs <ArrowRight size={14}/></Link></header><div className="packs-row">{packs.map(pack=><Link key={pack.slug} to={`/collections/${pack.slug}`} className="pack-chip"><Layers size={15} aria-hidden="true"/><b>{pack.name}</b><small>{pack.count} products</small></Link>)}</div></section></ScrollReveal>}
  <ScrollReveal className="container"><section className="editorial"><div><span className="eyebrow">WHY CODEFUSION</span><h2>Start with the visual.<br/><span>Finish with the code.</span></h2><p>Preview every product as a real interface, then take the exact source you need. No file hunting. No code maze.</p><Link to="/products" className="button primary">Browse components <ArrowRight size={15}/></Link></div><div className="editorial-preview">{editorialProduct?<ProductVisual product={editorialProduct}/>:<div className="card-skeleton editorial-skeleton" aria-hidden="true"/>}<span><Download size={13}/> One-window source code</span></div></section></ScrollReveal>
  <ScrollReveal className="container"><section className="trust-rail"><div><Code2/><b>Made for actual projects</b><small>Real use cases, not filler concepts.</small></div><div><MousePointer2/><b>Thoughtful interactions</b><small>Subtle motion with purpose.</small></div><div><Download/><b>Copy or download</b><small>Own a usable local version.</small></div></section></ScrollReveal>
  <ScrollReveal className="container"><section className="final-cta"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Find the piece that<br/><span>completes your build.</span></h2></div><Link to="/products" className="button primary">Explore CodeFusion <ArrowUpRight size={16}/></Link></section></ScrollReveal>
 </main>
}
