import { Router } from "express";
import AnalyticsEvent from "../models/AnalyticsEvent.js";
import Product from "../models/Product.js";
import { authOptional, authRequired, adminRequired } from "../middleware/auth.js";
const router=Router();

router.post("/event",authOptional,async(req,res,next)=>{
  try{await AnalyticsEvent.create({type:req.body.type,product:req.body.product||null,user:req.user?.id||null,meta:req.body.meta||{}});res.status(201).json({ok:true})}catch(e){next(e)}
});

router.get("/admin",authRequired,adminRequired,async(req,res,next)=>{
  try{
    const [totals,top]=await Promise.all([
      AnalyticsEvent.aggregate([{$group:{_id:"$type",count:{$sum:1}}}]),
      AnalyticsEvent.aggregate([{$match:{product:{$ne:null}}},{$group:{_id:"$product",views:{$sum:1}}},{$sort:{views:-1}},{$limit:10},{$lookup:{from:"products",localField:"_id",foreignField:"_id",as:"product"}},{$unwind:"$product"},{$project:{name:"$product.name",slug:"$product.slug",views:1}}])
    ]);
    res.json({totals,top});
  }catch(e){next(e)}
});

export default router;
