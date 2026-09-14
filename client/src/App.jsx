import { Routes,Route,Navigate,useLocation,useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar"; import Footer from "./components/Footer"; import Home from "./pages/Home"; import Products from "./pages/Products"; import ProductDetails from "./pages/ProductDetails"; import Wishlist from "./pages/Wishlist"; import Login from "./pages/Login"; import Register from "./pages/Register"; import ForgotPassword from "./pages/ForgotPassword"; import Account from "./pages/Account"; import Subscription from "./pages/Subscription"; import Collections from "./pages/Collections"; import Resources from "./pages/Resources"; import About from "./pages/About"; import Admin from "./pages/Admin"; import AdminLogin from "./pages/AdminLogin"; import NotFound from "./pages/NotFound"; import { useAuth } from "./hooks/useAuth";

/*
 * React Router doesn't manage scroll position, so every navigation keeps the old
 * offset. What it needs depends on how you got there:
 *
 *   PUSH    — a new page. Start at the top.
 *   POP     — back/forward. Put the reader back where they were, otherwise
 *             returning from a product dumps them at the top of the listing.
 *   REPLACE — the same page rewriting its own query string (a category or sort
 *             change). Touching scroll here would fight the page's own behaviour.
 *
 * Positions are keyed by location.key so each history entry keeps its own, and
 * the browser's native restoration is switched off so the two don't compete.
 */
// Keyed by location.key, so each history entry remembers its own offset.
const scrollPositions=new Map();

function ScrollManager(){
  const location=useLocation();
  const navType=useNavigationType();
  const key=location.key;

  useEffect(()=>{
    if("scrollRestoration" in window.history) window.history.scrollRestoration="manual";
  },[]);

  /*
   * Tracked live rather than read when the route changes. Effect cleanup runs
   * after the next page's DOM is committed, and a product page is much shorter
   * than the listing — so by then the browser has already clamped scrollY down
   * to fit the new document, and what gets saved is near zero instead of where
   * the reader actually was.
   */
  useEffect(()=>{
    let frame=0;
    const track=()=>{
      if(frame) return;
      frame=requestAnimationFrame(()=>{frame=0;scrollPositions.set(key,window.scrollY)});
    };
    // A reload wipes the Map, and native restoration is off, so mirror the last
    // position into sessionStorage on the way out to cover reload-then-back.
    const persist=()=>{try{sessionStorage.setItem("cf_scroll_"+key,String(scrollPositions.get(key)||0))}catch{}};

    track();
    window.addEventListener("scroll",track,{passive:true});
    window.addEventListener("pagehide",persist);
    return()=>{
      window.removeEventListener("scroll",track);
      window.removeEventListener("pagehide",persist);
      cancelAnimationFrame(frame);
    };
  },[key]);

  /*
   * PUSH    — a new page, start at the top.
   * POP     — back/forward, put the reader back where they were.
   * REPLACE — the page rewriting its own query string (category, sort). Leave
   *           scroll alone or it fights the page's own behaviour.
   */
  useEffect(()=>{
    if(navType==="REPLACE") return;

    if(navType!=="POP"){
      window.scrollTo(0,0);
      // The tracker seeded this entry with the previous page's offset before the
      // reset landed; correct it so a later forward navigation isn't restored to
      // a position that was never this page's.
      scrollPositions.set(key,0);
      return;
    }

    let target=scrollPositions.get(key);
    if(target===undefined){
      try{target=Number(sessionStorage.getItem("cf_scroll_"+key))||0}catch{target=0}
    }
    if(!target) return;

    // The listing refetches on mount, so for a moment the page is still too
    // short to scroll this far. Retry until it's tall enough, then stop.
    let tries=0;
    let timer;
    const restore=()=>{
      window.scrollTo(0,target);
      if(++tries<30&&Math.abs(window.scrollY-target)>2) timer=setTimeout(restore,50);
    };
    restore();
    return()=>clearTimeout(timer);
  },[key,navType]);

  return null;
}

function AdminGuard(){const{user,loading}=useAuth();const location=useLocation();if(loading)return <main className="simple-page container"><p>Checking admin access…</p></main>;if(!user||user.role!=="admin")return <Navigate to={`/admin/login?next=${encodeURIComponent(location.pathname)}`} replace/>;return <Admin/>}
function Shell(){const location=useLocation();const adminArea=location.pathname.startsWith("/admin");return <><ScrollManager/>{!adminArea&&<Navbar/>}<Routes><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/products/boilerplates" element={<Navigate to="/products?category=Boilerplates" replace/>}/><Route path="/products/:slug" element={<ProductDetails/>}/><Route path="/wishlist" element={<Wishlist/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="/forgot-password" element={<ForgotPassword/>}/><Route path="/account" element={<Account/>}/><Route path="/subscription" element={<Subscription/>}/><Route path="/collections/:collection" element={<Collections/>}/><Route path="/resources/*" element={<Resources/>}/><Route path="/about" element={<About/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin/*" element={<AdminGuard/>}/><Route path="*" element={<NotFound/>}/></Routes>{!adminArea&&<Footer/>}</>}
export default function App(){return <Shell/>}
