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
import subscription from "./routes/subscription.js";
import analytics from "./routes/analytics.js";
import admin from "./routes/admin.js";
import { notFound, errorHandler } from "./middleware/error.js";

const app = express();

// CLIENT_URL may hold one origin or a comma-separated list (custom domain +
// any Vercel deployment URL). Any *.vercel.app origin is allowed automatically
// since those URLs are assigned by Vercel and aren't known ahead of time.
const configuredOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

const vercelPreviewPattern = /^https:\/\/[a-z0-9-]+\.vercel\.app$/i;

app.use(
  cors({
    origin(origin, callback) {
      // no Origin header: same-origin requests, curl, server-to-server, health checks
      if (!origin) return callback(null, true);
      if (configuredOrigins.includes(origin) || vercelPreviewPattern.test(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: false,
  })
);

app.use(express.json({ limit: "3mb" }));

app.use(morgan("dev"));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3000,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "codefusion-api",
  });
});

app.use("/api/auth", auth);
app.use("/api/products", products);
app.use("/api/wishlist", wishlist);
app.use("/api/reviews", reviews);
app.use("/api/subscription", subscription);
app.use("/api/analytics", analytics);
app.use("/api/admin", admin);

app.use(notFound);
app.use(errorHandler);

const port = Number(process.env.PORT || 5000);

// Render's free tier spins the service down after 15 minutes without an
// incoming request. Pinging our own public health endpoint every 11 minutes
// keeps it under that threshold. Only runs in production — a local dev
// server has no reason to ping itself.
function startSelfPing() {
  const selfUrl = process.env.RENDER_EXTERNAL_URL || "https://codefusion-f2yd.onrender.com";
  setInterval(() => {
    fetch(`${selfUrl}/api/health`).catch(() => {});
  }, 11 * 60 * 1000);
}

connectDB()
  .then(() => {
    app.listen(port, "0.0.0.0", () => {
      console.log(`CodeFusion API listening on port ${port}`);
      if (process.env.NODE_ENV === "production") startSelfPing();
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });