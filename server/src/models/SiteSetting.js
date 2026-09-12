import mongoose from "mongoose";
const siteSettingSchema=new mongoose.Schema({key:{type:String,unique:true,required:true},value:{type:mongoose.Schema.Types.Mixed,default:""}},{timestamps:true});
export default mongoose.model("SiteSetting",siteSettingSchema);
