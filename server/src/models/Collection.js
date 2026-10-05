import mongoose from "mongoose";
// kind "pack" is a curated bundle (e.g. "SaaS Launch Kit") — same membership
// mechanism as a collection (Product.collections), listed separately on /packs.
const collectionSchema=new mongoose.Schema({name:{type:String,required:true,unique:true,trim:true},slug:{type:String,required:true,unique:true,trim:true,lowercase:true},description:{type:String,default:""},kind:{type:String,enum:["collection","pack"],default:"collection",index:true},isActive:{type:Boolean,default:true}},{timestamps:true});
export default mongoose.model("Collection",collectionSchema);
