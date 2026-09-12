import { Router } from "express";
import Coupon from "../models/Coupon.js";
import { authRequired, adminRequired } from "../middleware/auth.js";
const router=Router();
router.get("/admin",authRequired,adminRequired,async(req,res,next)=>{try{res.json({coupons:await Coupon.find().sort({createdAt:-1})})}catch(e){next(e)}});
router.post("/admin",authRequired,adminRequired,async(req,res,next)=>{try{const coupon=await Coupon.create({...req.body,code:req.body.code?.toUpperCase()});res.status(201).json({coupon})}catch(e){next(e)}});
router.put("/admin/:id",authRequired,adminRequired,async(req,res,next)=>{try{const coupon=await Coupon.findByIdAndUpdate(req.params.id,{...req.body,code:req.body.code?.toUpperCase()},{new:true});res.json({coupon})}catch(e){next(e)}});
router.delete("/admin/:id",authRequired,adminRequired,async(req,res,next)=>{try{await Coupon.findByIdAndDelete(req.params.id);res.json({message:"Coupon deleted."})}catch(e){next(e)}});
export default router;
