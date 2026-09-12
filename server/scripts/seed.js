
import "dotenv/config";
import { connectDB } from "../src/config/db.js";
import Product from "../src/models/Product.js";
import Category from "../src/models/Category.js";
import Collection from "../src/models/Collection.js";
import { productSources } from "./productSources.js";

const products = [
  {slug:"aurora-commerce-card",name:"Aurora Commerce Card",category:"Cards",previewType:"card",badge:"EDITOR'S PICK",productType:"FREE",price:"Free",description:"A conversion-focused product card with wishlist, price comparison and a refined purchase state.",tags:["HTML","CSS","JS"]},
  {slug:"noir-pricing-system",name:"Noir Pricing System",category:"Pricing",previewType:"pricing",badge:"BEST SELLER",productType:"PRO",price:"$49",description:"A premium pricing system with a clear hierarchy and focused plan selection.",tags:["HTML","CSS","JS"]},
  {slug:"obsidian-command-dashboard",name:"Obsidian Command Dashboard",category:"Dashboards",previewType:"dashboard",badge:"NEW",productType:"PRO",price:"$79",description:"A practical analytics command center for revenue, conversion and team activity.",tags:["HTML","CSS","JS"]},
  {slug:"velvet-campaign-hero",name:"Velvet Campaign Hero",category:"Hero Sections",previewType:"hero",badge:"EDITORIAL",productType:"FREE",price:"Free",description:"A strong editorial hero for launches, studios and modern brands.",tags:["HTML","CSS","JS"]},
  {slug:"atelier-social-proof",name:"Atelier Social Proof",category:"Testimonials",previewType:"testimonial",badge:"TRUSTED",productType:"PRO",price:"$39",description:"A refined testimonial experience with attribution and interactive quotes.",tags:["HTML","CSS","JS"]},
  {slug:"mono-drawer-navigation",name:"Mono Drawer Navigation",category:"Navigation",previewType:"navigation",badge:"SIGNATURE",productType:"PRO",price:"$45",description:"A minimal navigation system with full-screen drawer behavior.",tags:["HTML","CSS","JS"]},
  {slug:"echo-studio-contact",name:"Echo Studio Contact",category:"Forms",previewType:"contact",badge:"CONVERSION",productType:"FREE",price:"Free",description:"A studio enquiry section with accessible fields and a polished success state.",tags:["HTML","CSS","JS"]},
  {slug:"halo-creative-profile",name:"Halo Creative Profile",category:"Portfolio",previewType:"profile",badge:"FEATURED",productType:"PRO",price:"$35",description:"A distinctive creative profile system with stats and project highlights.",tags:["HTML","CSS","JS"]},
  {slug:"vanta-feature-system",name:"Vanta Feature System",category:"Features",previewType:"features",badge:"FREE",productType:"FREE",price:"Free",description:"An asymmetric feature section designed to tell a product story.",tags:["HTML","CSS","JS"]},
  {slug:"orbit-launch-system",name:"Orbit Launch System",category:"Landing Pages",previewType:"countdown",badge:"LAUNCH KIT",productType:"PRO",price:"$59",description:"A launch-ready coming-soon section with countdown and email capture.",tags:["HTML","CSS","JS"]}
];

await connectDB();
const categoryNames=["Cards","Pricing","Dashboards","Hero Sections","Testimonials","Navigation","Forms","Portfolio","Features","Landing Pages"];
const collectionNames=["New","Trending","Free","Premium"];
for(const name of categoryNames){await Category.findOneAndUpdate({name},{name,slug:name.toLowerCase().replace(/[^a-z0-9]+/g,"-")},{upsert:true,new:true,setDefaultsOnInsert:true})}
for(const name of collectionNames){await Collection.findOneAndUpdate({name},{name,slug:name.toLowerCase()},{upsert:true,new:true,setDefaultsOnInsert:true})}
for(const p of products){
  const complete=productSources[p.slug]||"";
  await Product.findOneAndUpdate(
    {slug:p.slug},
    {
      ...p,
      previewCode: complete,
      code:{html:complete,css:"",javascript:""},
      collection:"New",
      collections:["New","Trending"],
      isFeatured:p.slug==="aurora-commerce-card",
      prompt:p.slug==="aurora-commerce-card"?"Recreate the Aurora Commerce Card exactly as the supplied reference implementation. Preserve the original hierarchy, spacing, typography, black and lavender palette, wishlist behavior, purchase loading/success states, responsive behavior and source fidelity.":"",
      priceAmount:Number(String(p.price).replace(/[^0-9.]/g,""))||0,
      currency:"INR",
      shortDescription:p.description,
      features:["Responsive layout","Accessible interactions","Clean source code","Production-ready structure"],
      specifications:[["Category",p.category],["Framework","HTML / CSS / JS"],["Responsive","Yes"],["Version","1.0.0"]],
      compatibility:["Modern browsers","Responsive websites","React projects"],
      version:"1.0.0",
      lastUpdated:new Date(),
      changelog:["Initial CodeFusion release"],
      gallery:["Overview","Desktop","Mobile"],
      isPublished:true,
      rating:4.9,
      reviewCount:0,
      usageCount:"0",
      downloadCount:"0"
    },
    {upsert:true,new:true,setDefaultsOnInsert:true}
  );
}
console.log("Seeded/updated 10 source-synchronized CodeFusion products.");
process.exit(0);
