import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({name:{type:String,required:true,unique:true,trim:true},slug:{type:String,required:true,unique:true,trim:true,lowercase:true},description:{type:String,default:""},isActive:{type:Boolean,default:true}},{timestamps:true});
export default mongoose.model("Category",categorySchema);
