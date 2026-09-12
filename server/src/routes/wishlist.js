import { Router } from "express";
import Product from "../models/Product.js";
import Wishlist from "../models/Wishlist.js";
import { authRequired } from "../middleware/auth.js";
const router=Router();

router.get("/",authRequired,async(req,res,next)=>{
  try{
    const item=await Wishlist.findOne({user:req.user.id}).populate({path:"products",match:{isPublished:true}});
    res.json({products:(item?.products||[]).map(p=>p.slug)});
  }catch(e){next(e)}
});

router.post("/:slug",authRequired,async(req,res,next)=>{
  try{
    const product=await Product.findOne({slug:req.params.slug});
    if(!product)return res.status(404).json({message:"Product not found."});
    let item=await Wishlist.findOne({user:req.user.id});
    if(!item)item=await Wishlist.create({user:req.user.id,products:[]});
    const has=item.products.some(id=>id.toString()===product._id.toString());
    item.products=has?item.products.filter(id=>id.toString()!==product._id.toString()):[...item.products,product._id];
    await item.save();
    res.json({saved:!has,products:(await item.populate("products")).products.map(p=>p.slug)});
  }catch(e){next(e)}
});

export default router;
