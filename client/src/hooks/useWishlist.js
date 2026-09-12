import { useEffect,useState } from "react";
import { api } from "../services/api";
export function useWishlist(){
  const [wishlist,setWishlist]=useState([]);
  useEffect(()=>{if(localStorage.getItem("codefusion_token"))api.wishlist.list().then(x=>setWishlist(x.products)).catch(()=>{})},[]);
  async function toggle(slug){
    if(!localStorage.getItem("codefusion_token")) throw new Error("Please sign in to use wishlist.");
    const x=await api.wishlist.toggle(slug);setWishlist(x.products);return x;
  }
  return {wishlist,isSaved:(slug)=>wishlist.includes(slug),toggle};
}
