import { Router } from "express";
import rateLimit from "express-rate-limit";
import AnalyticsEvent from "../models/AnalyticsEvent.js";
import Product from "../models/Product.js";
import { authOptional, authRequired, adminRequired } from "../middleware/auth.js";
import { EVENT_TYPES, SERVER_ONLY_EVENTS, recordEvent } from "../utils/events.js";
const router=Router();

// Generous for real browsing, tight enough that a script can't flood the
// collection or pump a product up the Trending sort.
const eventLimiter=rateLimit({windowMs:60*1000,max:120,standardHeaders:true,legacyHeaders:false,message:{message:"Too many events."}});

// Only small, flat metadata is kept: strings are capped, nested objects dropped.
function cleanMeta(meta){
  const out={};
  if(!meta||typeof meta!=="object")return out;
  for(const [key,value] of Object.entries(meta).slice(0,12)){
    if(typeof value==="string")out[key.slice(0,40)]=value.slice(0,300);
    else if(typeof value==="number"&&Number.isFinite(value))out[key.slice(0,40)]=value;
    else if(typeof value==="boolean")out[key.slice(0,40)]=value;
  }
  return out;
}

router.post("/event",eventLimiter,authOptional,async(req,res,next)=>{
  try{
    const type=String(req.body?.type||"");
    if(!EVENT_TYPES.has(type)||SERVER_ONLY_EVENTS.has(type))return res.status(400).json({message:"Unknown event type."});
    let product=null;
    const slug=typeof req.body?.product==="string"?req.body.product:null;
    if(slug){
      const found=await Product.findOne({slug}).select("_id").lean();
      product=found?._id||null;
    }
    const meta=cleanMeta(req.body?.meta);
    if(type==="client_error"){
      console.error(JSON.stringify({level:"error",source:"client",msg:meta.message,where:meta.source,path:meta.path,user:req.user?.id||null}));
    }
    if(type==="product_view"&&product)await Product.updateOne({_id:product},{$inc:{viewCount:1}});
    recordEvent(type,{product,user:req.user?.id||null,meta});
    res.status(201).json({ok:true});
  }catch(e){next(e)}
});

// Public: what people search for and find (last 30 days), for search
// suggestions. Only queries that returned results, searched by 2+ people.
let popularCache={at:0,data:[]};
router.get("/popular-searches",async(req,res,next)=>{
  try{
    if(Date.now()-popularCache.at>10*60*1000){
      const since=new Date(Date.now()-30*86400000);
      const rows=await AnalyticsEvent.aggregate([
        {$match:{type:"search",createdAt:{$gte:since},"meta.results":{$gt:0}}},
        {$group:{_id:{$toLower:{$trim:{input:"$meta.query"}}},count:{$sum:1},people:{$addToSet:{$ifNull:["$user","anon"]}}}},
        {$match:{_id:{$ne:""}}},
        {$project:{count:1,people:{$size:"$people"}}},
        // A query only becomes a public suggestion once 2+ different people searched it.
        {$match:{people:{$gte:2}}},
        {$sort:{count:-1}},{$limit:8}
      ]);
      popularCache={at:Date.now(),data:rows.filter(r=>r._id.length<=40).map(r=>r._id)};
    }
    res.set("Cache-Control","public, max-age=600");
    res.json({searches:popularCache.data});
  }catch(e){next(e)}
});

// Funnels, top searches, top products and daily activity for the admin view.
router.get("/admin",authRequired,adminRequired,async(req,res,next)=>{
  try{
    const days=Math.min(Math.max(Number(req.query.days)||30,1),365);
    const since=new Date(Date.now()-days*86400000);
    const [totals,top,daily,searches,zeroSearches,errors]=await Promise.all([
      AnalyticsEvent.aggregate([{$match:{createdAt:{$gte:since}}},{$group:{_id:"$type",count:{$sum:1},users:{$addToSet:"$user"}}},{$project:{count:1,users:{$size:{$setDifference:["$users",[null]]}}}},{$sort:{count:-1}}]),
      AnalyticsEvent.aggregate([{$match:{createdAt:{$gte:since},product:{$ne:null},type:{$in:["product_view","copy_success","wishlist_add"]}}},{$group:{_id:"$product",views:{$sum:{$cond:[{$eq:["$type","product_view"]},1,0]}},copies:{$sum:{$cond:[{$eq:["$type","copy_success"]},1,0]}},saves:{$sum:{$cond:[{$eq:["$type","wishlist_add"]},1,0]}}}},{$sort:{views:-1,copies:-1}},{$limit:10},{$lookup:{from:"products",localField:"_id",foreignField:"_id",as:"product"}},{$unwind:"$product"},{$project:{name:"$product.name",slug:"$product.slug",views:1,copies:1,saves:1}}]),
      AnalyticsEvent.aggregate([{$match:{createdAt:{$gte:since}}},{$group:{_id:{$dateToString:{format:"%Y-%m-%d",date:"$createdAt"}},count:{$sum:1}}},{$sort:{_id:1}}]),
      AnalyticsEvent.aggregate([{$match:{createdAt:{$gte:since},type:"search"}},{$group:{_id:{$toLower:"$meta.query"},count:{$sum:1},avgResults:{$avg:"$meta.results"}}},{$sort:{count:-1}},{$limit:15}]),
      AnalyticsEvent.aggregate([{$match:{createdAt:{$gte:since},type:"search","meta.results":0}},{$group:{_id:{$toLower:"$meta.query"},count:{$sum:1}}},{$sort:{count:-1}},{$limit:10}]),
      AnalyticsEvent.find({createdAt:{$gte:since},type:"client_error"}).sort({createdAt:-1}).limit(20).lean(),
    ]);
    const n=(type)=>totals.find(t=>t._id===type)?.count||0;
    const funnels={
      copy:[
        {step:"Product views",count:n("product_view")},
        {step:"Copy attempts",count:n("copy_attempt")},
        {step:"Blocked (no plan / tokens)",count:n("copy_blocked")},
        {step:"Successful copies",count:n("copy_success")},
      ],
      checkout:[
        {step:"Viewed pricing",count:n("checkout_view")},
        {step:"Started checkout",count:n("checkout_start")},
        {step:"Closed payment window",count:n("checkout_dismiss")},
        {step:"Payment failed",count:n("checkout_failed")},
        {step:"Paid",count:n("checkout_success")},
      ],
    };
    res.json({days,totals,top,daily,searches,zeroSearches,errors,funnels});
  }catch(e){next(e)}
});

export default router;
