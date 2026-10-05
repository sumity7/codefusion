import { Router } from "express";
import Product from "../models/Product.js";
import Wishlist from "../models/Wishlist.js";
import { authRequired } from "../middleware/auth.js";
import { recordEvent } from "../utils/events.js";
const router=Router();

router.get("/",authRequired,async(req,res,next)=>{
  try{
    const item=await Wishlist.findOne({user:req.user.id}).populate({path:"products",match:{isPublished:true},select:"slug"});
    res.json({products:(item?.products||[]).filter(Boolean).map(p=>p.slug)});
  }catch(e){next(e)}
});

router.post("/:slug",authRequired,async(req,res,next)=>{
  try{
    const product=await Product.findOne({slug:req.params.slug}).select("_id");
    if(!product)return res.status(404).json({message:"Product not found."});
    let item=await Wishlist.findOne({user:req.user.id});
    if(!item)item=await Wishlist.create({user:req.user.id,products:[]});
    const has=item.products.some(id=>id.toString()===product._id.toString());
    item.products=has?item.products.filter(id=>id.toString()!==product._id.toString()):[...item.products,product._id];
    await item.save();
    // Counter feeds the Popular sort; never below zero.
    if(has) await Product.updateOne({_id:product._id,wishlistCount:{$gt:0}},{$inc:{wishlistCount:-1}});
    else await Product.updateOne({_id:product._id},{$inc:{wishlistCount:1}});
    recordEvent(has?"wishlist_remove":"wishlist_add",{product:product._id,user:req.user.id});
    res.json({saved:!has,products:(await item.populate({path:"products",select:"slug"})).products.filter(Boolean).map(p=>p.slug)});
  }catch(e){next(e)}
});

export default router;
