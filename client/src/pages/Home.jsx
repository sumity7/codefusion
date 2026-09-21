import { ArrowRight,ArrowUpRight,Code2,Download,MousePointer2,Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect,useRef,useState } from "react";
import { api } from "../services/api";
import { fallbackProducts } from "../data/fallbackProducts";
import ProductCard from "../components/ProductCard";
import ProductVisual from "../components/ProductVisual";
import ScrollReveal from "../components/ScrollReveal";

// Cursor-tracked parallax for the hero glow + a matching 3D tilt on the
// showcase window — both live inside .home-hero, so one mousemove handler
// drives both refs at once instead of attaching two separate listeners.
function useHeroParallax(){
 const glowRef=useRef(null);
 const showcaseRef=useRef(null);
 function onMove(e){
  const r=e.currentTarget.getBoundingClientRect();
  const px=(e.clientX-r.left)/r.width-.5;
  const py=(e.clientY-r.top)/r.height-.5;
  if(glowRef.current) glowRef.current.style.transform=`translate(${px*44}px, ${py*44}px)`;
  if(showcaseRef.current) showcaseRef.current.style.transform=`rotate(${-4+px*6}deg) rotateX(${-py*9}deg) rotateY(${px*12}deg) translateY(-8px)`;
 }
 function onLeave(){
  if(glowRef.current) glowRef.current.style.transform="";
  if(showcaseRef.current) showcaseRef.current.style.transform="";
 }
 return {glowRef,showcaseRef,onMove,onLeave};
}

// A light magnetic pull toward the cursor for CTA buttons — capped low so it
// reads as a subtle premium touch rather than fighting the liquid-fill hover.
function magnet(e){
 const el=e.currentTarget;
 const r=el.getBoundingClientRect();
 const x=e.clientX-r.left-r.width/2;
 const y=e.clientY-r.top-r.height/2;
 el.style.transform=`translate(${x*.18}px, ${y*.3}px)`;
}
function unmagnet(e){ e.currentTarget.style.transform=""; }

export default function Home(){
 const [products,setProducts]=useState(fallbackProducts);
 const {glowRef,showcaseRef,onMove,onLeave}=useHeroParallax();
 useEffect(()=>{api.products.list().then(x=>setProducts(x.products.map(p=>p.previewCode?{...p,previewMode:"source",code:{html:p.previewCode,css:"",javascript:""}}:p))).catch(()=>{})},[]);
 return <main>
    <section className="home-hero" onMouseMove={onMove} onMouseLeave={onLeave}><div className="hero-glow" ref={glowRef}/><div className="hero-copy"><span className="pill"><i/>Original premium UI products</span><h1>Interfaces<br/><span>with intention.</span></h1><p>Original components, sections and complete UI systems designed for real projects — with beautiful previews and copy-ready code.</p><div className="hero-actions"><Link to="/products" className="button primary" onMouseMove={magnet} onMouseLeave={unmagnet}>Explore collection <ArrowRight size={16}/></Link><Link to="/collections/free" className="button ghost" onMouseMove={magnet} onMouseLeave={unmagnet}>Start with free <ArrowUpRight size={15}/></Link></div><div className="proof"><div><b>10</b><small>Original products</small></div><div><b>100%</b><small>Responsive</small></div><div><b>1-click</b><small>Code copy</small></div></div></div><div className="home-composition"><div className="composition-glow"/><div className="showcase-window" ref={showcaseRef}><div className="windowbar"><i/><i/><i/><b>codefusion / collection</b></div><div className="showcase-inner"><aside><b>CodeFusion</b><i/><i/><i/><i/></aside><div><small>COLLECTED WITH CARE</small><h2>A considered set of<br/><span>useful interfaces.</span></h2><div className="window-grid"><div/><div/><div/></div></div></div></div><span className="float-note one"><Sparkles size={13}/> Original, not recycled</span><span className="float-note two"><Code2 size={13}/> Preview → code → launch</span></div></section>
  <ScrollReveal className="container"><section className="intro-line"><div><span className="eyebrow">THE COLLECTION</span><h2>Useful first. Beautiful always.</h2></div><p>Every CodeFusion product starts from a real website need — not a filler concept.</p></section></ScrollReveal>
  <ScrollReveal className="container"><section className="category-line"><span className="eyebrow">SHOP BY PURPOSE</span><div><Link to="/products?category=Cards">Cards</Link><Link to="/products?category=Pricing">Pricing</Link><Link to="/products?category=Dashboards">Dashboards</Link><Link to="/products?category=Navigation">Navigation</Link><Link to="/products?category=Forms">Forms</Link><Link to="/products?category=Landing%20Pages">Landing pages</Link></div></section></ScrollReveal>
  <section className="container section"><ScrollReveal><header className="section-head"><div><span className="eyebrow">FEATURED</span><h2>Built like products, not placeholders.</h2></div><Link to="/products" className="text-link">View all <ArrowRight size={14}/></Link></header></ScrollReveal><div className="product-grid">{products.slice(0,4).map((p,i)=><ScrollReveal key={p.slug} delay={i*60}><ProductCard product={p}/></ScrollReveal>)}</div></section>
  <ScrollReveal className="container"><section className="editorial"><div><span className="eyebrow">WHY CODEFUSION</span><h2>Start with the visual.<br/><span>Finish with the code.</span></h2><p>Preview every product as a real interface, then take the exact source you need. No file hunting. No code maze.</p><Link to="/products" className="button primary">Browse components <ArrowRight size={15}/></Link></div><div className="editorial-preview"><ProductVisual product={products[1]||fallbackProducts[1]}/><span><Download size={13}/> One-window source code</span></div></section></ScrollReveal>
  <ScrollReveal className="container"><section className="trust-rail"><div><Code2/><b>Made for actual projects</b><small>Real use cases, not filler concepts.</small></div><div><MousePointer2/><b>Thoughtful interactions</b><small>Subtle motion with purpose.</small></div><div><Download/><b>Copy or download</b><small>Own a usable local version.</small></div></section></ScrollReveal>
  <ScrollReveal className="container"><section className="final-cta"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Find the piece that<br/><span>completes your build.</span></h2></div><Link to="/products" className="button primary">Explore CodeFusion <ArrowUpRight size={16}/></Link></section></ScrollReveal>
 </main>
}
