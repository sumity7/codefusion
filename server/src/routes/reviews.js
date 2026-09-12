
import { Router } from "express";
import Product from "../models/Product.js";
import Review from "../models/Review.js";
import { authRequired, adminRequired } from "../middleware/auth.js";

const router=Router();

router.get("/admin/all",authRequired,adminRequired,async(req,res,next)=>{
  try{
    res.json({reviews:await Review.find().populate("user","name email").populate("product","name slug").sort({createdAt:-1})});
  }catch(e){next(e)}
});

router.put("/admin/:id",authRequired,adminRequired,async(req,res,next)=>{
  try{
    const review=await Review.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true});
    if(!review)return res.status(404).json({message:"Review not found."});
    if(review.status==="approved"){
      const product=await Product.findById(review.product);
      if(product){
        const stats=await Review.aggregate([
          {$match:{product:product._id,status:"approved"}},
          {$group:{_id:null,avg:{$avg:"$rating"},count:{$sum:1}}}
        ]);
        product.rating=Number((stats[0]?.avg||5).toFixed(1));
        product.reviewCount=stats[0]?.count||0;
        await product.save();
      }
    }
    res.json({review});
  }catch(e){next(e)}
});

router.get("/:slug",async(req,res,next)=>{
  try{
    const product=await Product.findOne({slug:req.params.slug});
    if(!product)return res.status(404).json({message:"Product not found."});
    const reviews=await Review.find({product:product._id,status:"approved"}).populate("user","name").sort({createdAt:-1});
    res.json({reviews});
  }catch(e){next(e)}
});

router.post("/:slug",authRequired,async(req,res,next)=>{
  try{
    const product=await Product.findOne({slug:req.params.slug});
    if(!product)return res.status(404).json({message:"Product not found."});
    const review=await Review.create({product:product._id,user:req.user.id,rating:req.body.rating,title:req.body.title,body:req.body.body});
    res.status(201).json({review});
  }catch(e){next(e)}
});

export default router;
