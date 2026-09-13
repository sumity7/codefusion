
import "dotenv/config";
import { connectDB } from "../src/config/db.js";
import Product from "../src/models/Product.js";
import Category from "../src/models/Category.js";
import Collection from "../src/models/Collection.js";
import { productSources as coreSources } from "./productSources.js";
import { boilerplateSources } from "./boilerplateSources.js";

const productSources = { ...coreSources, ...boilerplateSources };

const products = [
  {slug:"glow-gradient-button",name:"Glow Gradient Button",category:"Buttons",previewType:"card",badge:"FREE",productType:"FREE",price:"Free",description:"A soft gradient call-to-action button with a glowing hover lift.",tags:["HTML","CSS"],isVerified:false},
  {slug:"magnetic-cta-button",name:"Magnetic CTA Button",category:"Buttons",previewType:"card",badge:"INTERACTIVE",productType:"PRO",price:"$19",description:"A pointer-tracking magnetic button that pulls toward the cursor.",tags:["HTML","CSS","JS"],isVerified:true},
  {slug:"reveal-on-scroll",name:"Reveal On Scroll",category:"Scroll Animations",previewType:"card",badge:"FREE",productType:"FREE",price:"Free",description:"IntersectionObserver-powered cards that fade and slide in as you scroll.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"parallax-scroll-panels",name:"Parallax Scroll Panels",category:"Scroll Animations",previewType:"card",badge:"SIGNATURE",productType:"PREMIUM",price:"$39",description:"Layered panels that move at independent speeds as the page scrolls.",tags:["HTML","CSS","JS"],isVerified:true},
  {slug:"orbit-loader",name:"Orbit Loader",category:"Loaders & Cursors",previewType:"card",badge:"FREE",productType:"FREE",price:"Free",description:"Three lightweight loading-state variants: ring, dots and orbit.",tags:["HTML","CSS"],isVerified:false},
  {slug:"cursor-trail-effect",name:"Custom Cursor Trail",category:"Loaders & Cursors",previewType:"card",badge:"NEW",productType:"PRO",price:"$15",description:"An eased, trailing custom cursor with a ring and center dot.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"sticky-scroll-stack",name:"Sticky Scroll Stack",category:"Scroll Animations",previewType:"card",badge:"FREE",productType:"FREE",price:"Free",description:"Cards that pin in place as the next one slides over it using position:sticky.",tags:["HTML","CSS"],isVerified:false},
  {slug:"horizontal-scroll-gallery",name:"Horizontal Scroll Gallery",category:"Scroll Animations",previewType:"card",badge:"NEW",productType:"FREE",price:"Free",description:"A snap-scrolling horizontal gallery track for portfolios and showcases.",tags:["HTML","CSS"],isVerified:false},
  {slug:"text-scramble-reveal",name:"Text Scramble Reveal",category:"Scroll Animations",previewType:"card",badge:"INTERACTIVE",productType:"PRO",price:"$19",description:"A decode-style text scramble animation that resolves into the final headline.",tags:["HTML","CSS","JS"],isVerified:true},
  {slug:"scroll-progress-bar",name:"Scroll Progress Bar",category:"Scroll Animations",previewType:"card",badge:"FREE",productType:"FREE",price:"Free",description:"A sticky top bar that fills as the reader scrolls through the page.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"fade-slide-carousel",name:"Fade Slide Carousel",category:"Scroll Animations",previewType:"card",badge:"SIGNATURE",productType:"PRO",price:"$25",description:"An auto-advancing carousel with a soft cross-fade between slides.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"counter-on-scroll",name:"Counter On Scroll",category:"Scroll Animations",previewType:"card",badge:"NEW",productType:"FREE",price:"Free",description:"Animated number counters that count up once scrolled into view.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"sticky-shrink-navbar",name:"Sticky Shrink Navbar",category:"Scroll Animations",previewType:"navigation",badge:"SIGNATURE",productType:"PRO",price:"$22",description:"A navbar that shrinks and gains a background once the page scrolls.",tags:["HTML","CSS","JS"],isVerified:true},
  {slug:"scroll-timeline",name:"Scroll Timeline",category:"Scroll Animations",previewType:"card",badge:"FREE",productType:"FREE",price:"Free",description:"A vertical timeline whose milestones animate in as you scroll past them.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"ripple-click-button",name:"Ripple Click Button",category:"Buttons",previewType:"card",badge:"NEW",productType:"FREE",price:"Free",description:"A material-style ripple effect that expands from the exact click point.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"skeleton-loader-grid",name:"Skeleton Loader Grid",category:"Loaders & Cursors",previewType:"card",badge:"FREE",productType:"FREE",price:"Free",description:"A shimmering skeleton placeholder grid for loading states.",tags:["HTML","CSS"],isVerified:false},
  {slug:"flip-card-3d",name:"3D Flip Card",category:"Cards",previewType:"card",badge:"INTERACTIVE",productType:"PRO",price:"$21",description:"A hover-triggered 3D flip card revealing content on its reverse face.",tags:["HTML","CSS"],isVerified:true},
  {slug:"toggle-pricing-switch",name:"Toggle Pricing Switch",category:"Pricing",previewType:"pricing",badge:"NEW",productType:"PRO",price:"$29",description:"A monthly/yearly billing toggle that updates plan prices live.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"widget-dashboard-grid",name:"Widget Dashboard Grid",category:"Dashboards",previewType:"dashboard",badge:"FREE",productType:"FREE",price:"Free",description:"A compact grid of KPI widgets and a trend chart for lightweight dashboards.",tags:["HTML","CSS"],isVerified:false},
  {slug:"typewriter-hero",name:"Typewriter Hero",category:"Hero Sections",previewType:"hero",badge:"INTERACTIVE",productType:"PRO",price:"$24",description:"A hero headline with a rotating typewriter word effect.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"marquee-testimonials",name:"Marquee Testimonials",category:"Testimonials",previewType:"testimonial",badge:"FREE",productType:"FREE",price:"Free",description:"An infinitely auto-scrolling row of short testimonial cards.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"mega-menu-navbar",name:"Mega Menu Navbar",category:"Navigation",previewType:"navigation",badge:"SIGNATURE",productType:"PRO",price:"$32",description:"A navbar with a hover-triggered mega-menu dropdown panel.",tags:["HTML","CSS"],isVerified:true},
  {slug:"multi-step-form",name:"Multi-Step Form",category:"Forms",previewType:"contact",badge:"NEW",productType:"PRO",price:"$27",description:"A multi-step form wizard with a progress indicator and back/next flow.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"masonry-portfolio-grid",name:"Masonry Portfolio Grid",category:"Portfolio",previewType:"profile",badge:"FREE",productType:"FREE",price:"Free",description:"A masonry image grid with a hover caption overlay for case studies.",tags:["HTML","CSS"],isVerified:false},
  {slug:"tabbed-features",name:"Tabbed Features",category:"Features",previewType:"features",badge:"NEW",productType:"FREE",price:"Free",description:"A tabbed panel switcher for showcasing several product capabilities.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"sticky-cta-banner",name:"Sticky CTA Banner",category:"Landing Pages",previewType:"countdown",badge:"SIGNATURE",productType:"PRO",price:"$18",description:"A bottom CTA banner that slides into view once the reader scrolls past the fold.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"card-hover-tilt",name:"Hover Tilt Card",category:"Cards",previewType:"card",badge:"INTERACTIVE",productType:"PRO",price:"$23",description:"A pointer-tracking card that tilts in 3D with a soft glare on hover.",tags:["HTML","CSS","JS"],isVerified:true},
  {slug:"glass-stat-card",name:"Glass Stat Cards",category:"Cards",previewType:"card",badge:"FREE",productType:"FREE",price:"Free",description:"Frosted glass KPI cards that lift on hover over a gradient backdrop.",tags:["HTML","CSS"],isVerified:false},
  {slug:"live-chart-card",name:"Live Chart Card",category:"Dashboards",previewType:"dashboard",badge:"INTERACTIVE",productType:"PRO",price:"$26",description:"A revenue card whose bars re-animate with live updating values.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"activity-feed-panel",name:"Activity Feed Panel",category:"Dashboards",previewType:"dashboard",badge:"FREE",productType:"FREE",price:"Free",description:"A staggered activity feed with glowing status dots and timestamps.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"icon-feature-grid",name:"Icon Feature Grid",category:"Features",previewType:"features",badge:"FREE",productType:"FREE",price:"Free",description:"A six-up feature grid with lifting cards and rotating icon tiles.",tags:["HTML","CSS"],isVerified:false},
  {slug:"accordion-features",name:"Accordion Features",category:"Features",previewType:"features",badge:"NEW",productType:"PRO",price:"$20",description:"An expandable feature list with smooth height and icon transitions.",tags:["HTML","CSS","JS"],isVerified:true},
  {slug:"floating-label-form",name:"Floating Label Form",category:"Forms",previewType:"contact",badge:"SIGNATURE",productType:"PRO",price:"$24",description:"Inputs whose labels float up and recolor as soon as you start typing.",tags:["HTML","CSS","JS"],isVerified:true},
  {slug:"inline-validation-form",name:"Inline Validation Form",category:"Forms",previewType:"contact",badge:"FREE",productType:"FREE",price:"Free",description:"Live email validation with instant success and error states.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"gradient-mesh-hero",name:"Gradient Mesh Hero",category:"Hero Sections",previewType:"hero",badge:"SIGNATURE",productType:"PREMIUM",price:"$42",description:"An animated mesh-gradient hero that drifts slowly behind the headline.",tags:["HTML","CSS"],isVerified:true},
  {slug:"split-image-hero",name:"Split Image Hero",category:"Hero Sections",previewType:"hero",badge:"FREE",productType:"FREE",price:"Free",description:"A balanced two-column hero with a pulsing orbital visual.",tags:["HTML","CSS"],isVerified:false},
  {slug:"faq-accordion-section",name:"FAQ Accordion Section",category:"Landing Pages",previewType:"features",badge:"FREE",productType:"FREE",price:"Free",description:"A native details/summary FAQ with animated answers and rotating markers.",tags:["HTML","CSS"],isVerified:false},
  {slug:"logo-cloud-marquee",name:"Logo Cloud Marquee",category:"Landing Pages",previewType:"features",badge:"NEW",productType:"PRO",price:"$17",description:"An infinite logo marquee with edge fading and hover highlighting.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"breadcrumb-trail",name:"Breadcrumb Trail",category:"Navigation",previewType:"navigation",badge:"FREE",productType:"FREE",price:"Free",description:"A pill breadcrumb bar with animated underlines on each crumb.",tags:["HTML","CSS"],isVerified:false},
  {slug:"sidebar-nav-collapse",name:"Collapsible Sidebar Nav",category:"Navigation",previewType:"navigation",badge:"INTERACTIVE",productType:"PRO",price:"$28",description:"A sidebar that smoothly collapses to icons and back.",tags:["HTML","CSS","JS"],isVerified:true},
  {slug:"hover-zoom-gallery",name:"Hover Zoom Gallery",category:"Portfolio",previewType:"profile",badge:"FREE",productType:"FREE",price:"Free",description:"A gallery grid where tiles zoom and reveal captions under a gradient scrim.",tags:["HTML","CSS"],isVerified:false},
  {slug:"project-list-hover",name:"Project List Hover",category:"Portfolio",previewType:"profile",badge:"SIGNATURE",productType:"PRO",price:"$22",description:"An editorial project list with sliding titles and a wiping underline.",tags:["HTML","CSS"],isVerified:true},
  {slug:"comparison-table",name:"Plan Comparison Table",category:"Pricing",previewType:"pricing",badge:"FREE",productType:"FREE",price:"Free",description:"A compact free-versus-pro comparison table with row hover states.",tags:["HTML","CSS"],isVerified:false},
  {slug:"single-plan-card",name:"Single Plan Card",category:"Pricing",previewType:"pricing",badge:"SIGNATURE",productType:"PRO",price:"$19",description:"A focused single-plan card with a glow backdrop and lift on hover.",tags:["HTML","CSS"],isVerified:false},
  {slug:"rating-stars-card",name:"Rating Stars Card",category:"Testimonials",previewType:"testimonial",badge:"INTERACTIVE",productType:"PRO",price:"$16",description:"A testimonial card with clickable, animated star ratings.",tags:["HTML","CSS","JS"],isVerified:false},
  {slug:"avatar-stack-proof",name:"Avatar Stack Proof",category:"Testimonials",previewType:"testimonial",badge:"FREE",productType:"FREE",price:"Free",description:"An overlapping avatar stack that fans out on hover for social proof.",tags:["HTML","CSS"],isVerified:false},

  {slug:"nova-saas",name:"Nova SaaS",category:"Boilerplates",previewType:"dashboard",badge:"FEATURED",productType:"PREMIUM",price:"Included",description:"A dark, futuristic SaaS dashboard boilerplate with glass cards, sidebar navigation, live analytics widgets and a three-tier pricing section.",tags:["HTML","CSS","JS","Dashboard","SaaS"],isVerified:true,isFeatured:true},
  {slug:"atlas-agency",name:"Atlas Agency",category:"Boilerplates",previewType:"profile",badge:"EDITORIAL",productType:"PREMIUM",price:"Included",description:"A premium creative-agency boilerplate: editorial typography, an asymmetric portfolio grid, case studies, services and a testimonial close.",tags:["HTML","CSS","Agency","Portfolio"],isVerified:true,isFeatured:true},
  {slug:"commercex",name:"CommerceX",category:"Boilerplates",previewType:"card",badge:"NEW",productType:"PREMIUM",price:"Included",description:"A modern ecommerce storefront boilerplate with category filters, a responsive product grid, wishlist and an interactive cart.",tags:["HTML","CSS","JS","Ecommerce"],isVerified:true},
  {slug:"finora",name:"Finora",category:"Boilerplates",previewType:"dashboard",badge:"NEW",productType:"PREMIUM",price:"Included",description:"A clean fintech/banking dashboard boilerplate with account balances, spending analytics, transfers and a live transaction feed.",tags:["HTML","CSS","JS","Fintech","Dashboard"],isVerified:true},
  {slug:"medora",name:"Medora",category:"Boilerplates",previewType:"contact",badge:"NEW",productType:"PREMIUM",price:"Included",description:"A modern healthcare platform boilerplate with appointment booking, specialties, a doctor directory and an accessible, calm UI.",tags:["HTML","CSS","JS","Healthcare"],isVerified:false},
  {slug:"learnflow",name:"LearnFlow",category:"Boilerplates",previewType:"dashboard",badge:"NEW",productType:"PREMIUM",price:"Included",description:"An online-education boilerplate with course discovery, a learner dashboard, progress tracking and instructor profiles.",tags:["HTML","CSS","JS","Education","LMS"],isVerified:false},
  {slug:"travelora",name:"Travelora",category:"Boilerplates",previewType:"hero",badge:"NEW",productType:"PREMIUM",price:"Included",description:"A premium travel-booking boilerplate with a destination-search hero, trending destination cards and a booking flow.",tags:["HTML","CSS","JS","Travel"],isVerified:false},
  {slug:"devdock",name:"DevDock",category:"Boilerplates",previewType:"navigation",badge:"SIGNATURE",productType:"PREMIUM",price:"Included",description:"A developer-platform documentation boilerplate: dark UI, sidebar docs nav, syntax-highlighted code blocks and a command search bar.",tags:["HTML","CSS","JS","Developer","Docs"],isVerified:true},
  {slug:"socially",name:"Socially",category:"Boilerplates",previewType:"testimonial",badge:"NEW",productType:"PREMIUM",price:"Included",description:"A social/community platform boilerplate with a feed, stories, a composer, notifications and community suggestions.",tags:["HTML","CSS","JS","Social"],isVerified:false},
  {slug:"launchkit",name:"LaunchKit",category:"Boilerplates",previewType:"countdown",badge:"BEST SELLER",productType:"PREMIUM",price:"Included",description:"A polished startup-landing boilerplate with a bold hero, feature grid, pricing tiers, FAQ accordion and a closing CTA.",tags:["HTML","CSS","JS","Startup","Landing"],isVerified:true,isFeatured:true}
];

await connectDB();
const categoryNames=["Cards","Pricing","Dashboards","Hero Sections","Testimonials","Navigation","Forms","Portfolio","Features","Landing Pages","Buttons","Scroll Animations","Loaders & Cursors","Boilerplates"];
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
      isFeatured:p.isFeatured ?? (p.slug==="magnetic-cta-button"),
      prompt: p.category==="Boilerplates"
        ? `Build "${p.name}", a complete, production-ready ${p.description.charAt(0).toLowerCase()}${p.description.slice(1)} Preserve its own distinct color system, typography scale and section composition exactly as designed — do not substitute a generic template. Implement every section shown in the preview (navigation, hero, core layout, and closing sections), keep all interaction states (hover, focus, active) explicit, respect prefers-reduced-motion, and make it fully responsive from 320px through desktop with no horizontal scrolling.`
        : `Build a ${p.name.toLowerCase()} component for the "${p.category}" category. ${p.description} Match the CodeFusion aesthetic: near-black background (#050507), 1px hairline borders (#272632), generous border radius, a lavender accent (#c4b5fd), and Inter/Space Grotesk typography. Use semantic HTML with ${p.tags.join(" + ")}, keep all interaction states (hover, focus, active) explicit, respect prefers-reduced-motion, and make it fully responsive down to 320px.`,
      priceAmount:Number(String(p.price).replace(/[^0-9.]/g,""))||0,
      currency:"INR",
      shortDescription:p.description,
      features: p.category==="Boilerplates"
        ? ["Complete page structure","Fully responsive layout","Production-ready HTML/CSS/JS","Distinct, original design system"]
        : ["Responsive layout","Accessible interactions","Clean source code","Production-ready structure"],
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
console.log(`Seeded/updated ${products.length} source-synchronized CodeFusion products.`);
process.exit(0);
