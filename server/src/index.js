import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { connectDB } from "./config/db.js";
import auth from "./routes/auth.js";
import products from "./routes/products.js";
import wishlist from "./routes/wishlist.js";
import reviews from "./routes/reviews.js";
import orders from "./routes/orders.js";
import downloads from "./routes/downloads.js";
import coupons from "./routes/coupons.js";
import analytics from "./routes/analytics.js";
import admin from "./routes/admin.js";
import { notFound,errorHandler } from "./middleware/error.js";

const app=express();
app.use(cors({origin:process.env.CLIENT_URL||"http://localhost:5173",credentials:false}));
app.use(express.json({limit:"3mb"}));
app.use(morgan("dev"));
app.use(rateLimit({windowMs:15*60*1000,max:500,standardHeaders:true,legacyHeaders:false}));

app.get("/api/health",(req,res)=>res.json({ok:true,service:"codefusion-api"}));
app.use("/api/auth",auth);
app.use("/api/products",products);
app.use("/api/wishlist",wishlist);
app.use("/api/reviews",reviews);
app.use("/api/orders",orders);
app.use("/api/downloads",downloads);
app.use("/api/coupons",coupons);
app.use("/api/analytics",analytics);
app.use("/api/admin",admin);

app.use(notFound);
app.use(errorHandler);

const port=Number(process.env.PORT||5000);
connectDB().then(()=>app.listen(port,()=>console.log(`CodeFusion API listening on http://localhost:${port}`))).catch(err=>{console.error(err);process.exit(1)});
