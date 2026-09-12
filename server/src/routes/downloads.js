import { Router } from "express";
import Download from "../models/Download.js";
import Product from "../models/Product.js";
import { authRequired, adminRequired } from "../middleware/auth.js";
const router=Router();

router.get("/mine",authRequired,async(req,res,next)=>{
  try{res.json({downloads:await Download.find({user:req.user.id}).populate("product","name slug version productType code").sort({createdAt:-1})})}catch(e){next(e)}
});

router.get("/product/:slug",authRequired,async(req,res,next)=>{
  try{
    const product=await Product.findOne({slug:req.params.slug,isPublished:true});
    if(!product)return res.status(404).json({message:"Product not found."});
    const allowed=product.productType==="FREE" || req.user.role==="admin" || await Download.exists({user:req.user.id,product:product._id});
    if(!allowed)return res.status(403).json({message:"Purchase required for this download."});
    res.json({code:product.code,version:product.version});
  }catch(e){next(e)}
});

router.get("/admin/all",authRequired,adminRequired,async(req,res,next)=>{
  try{res.json({downloads:await Download.find().populate("user","name email").populate("product","name slug version").sort({createdAt:-1})})}catch(e){next(e)}
});

export default router;
