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
function ScrollManager(){
  const location=useLocation();
  const navType=useNavigationType();
  const key="cf_scroll_"+location.key;

  useEffect(()=>{
    if("scrollRestoration" in window.history) window.history.scrollRestoration="manual";
  },[]);

  // Record where this entry was left, both on unmount and on a real page hide.
  useEffect(()=>{
    const save=()=>{try{sessionStorage.setItem(key,String(window.scrollY))}catch{}};
    window.addEventListener("pagehide",save);
    return()=>{save();window.removeEventListener("pagehide",save)};
  },[key]);

  useEffect(()=>{
    if(navType==="REPLACE") return;

    if(navType!=="POP"){window.scrollTo(0,0);return}

    let target=0;
    try{target=Number(sessionStorage.getItem(key))||0}catch{}
    if(!target) return;

    // The listing refetches on mount, so for a moment the page is too short to
    // scroll this far. Keep trying until the content is tall enough or we give up.
    let tries=0;
    let timer;
    const restore=()=>{
      window.scrollTo(0,target);
      if(++tries<24&&Math.abs(window.scrollY-target)>2) timer=setTimeout(restore,60);
    };
    restore();
    return()=>clearTimeout(timer);
  },[key,navType]);

  return null;
}

function AdminGuard(){const{user,loading}=useAuth();const location=useLocation();if(loading)return <main className="simple-page container"><p>Checking admin access…</p></main>;if(!user||user.role!=="admin")return <Navigate to={`/admin/login?next=${encodeURIComponent(location.pathname)}`} replace/>;return <Admin/>}
function Shell(){const location=useLocation();const adminArea=location.pathname.startsWith("/admin");return <><ScrollManager/>{!adminArea&&<Navbar/>}<Routes><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/products/boilerplates" element={<Navigate to="/products?category=Boilerplates" replace/>}/><Route path="/products/:slug" element={<ProductDetails/>}/><Route path="/wishlist" element={<Wishlist/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="/forgot-password" element={<ForgotPassword/>}/><Route path="/account" element={<Account/>}/><Route path="/subscription" element={<Subscription/>}/><Route path="/collections/:collection" element={<Collections/>}/><Route path="/resources/*" element={<Resources/>}/><Route path="/about" element={<About/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin/*" element={<AdminGuard/>}/><Route path="*" element={<NotFound/>}/></Routes>{!adminArea&&<Footer/>}</>}
export default function App(){return <Shell/>}
