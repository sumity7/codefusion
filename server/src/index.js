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
import userCollections from "./routes/userCollections.js";
import mongoose from "mongoose";
import { notFound, errorHandler } from "./middleware/error.js";
import { installProcessHandlers } from "./utils/monitor.js";
import { runMigrations } from "./jobs/migrate.js";
import { startScoreJob } from "./jobs/scores.js";

installProcessHandlers();

const app = express();

// Render (and Vercel) sit one proxy in front of the app. Without this every
// request appears to come from the proxy, so per-IP rate limits would throttle
// all users together.
app.set("trust proxy", Number(process.env.TRUST_PROXY ?? 1));

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
      const error = new Error(`Origin ${origin} not allowed by CORS`);
      error.status = 403;
      return callback(error);
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

// Liveness + database check. Returns 503 when MongoDB is unreachable so the
// uptime monitor (.github/workflows/keep-alive.yml) alerts on it.
app.get("/api/health", async (req, res) => {
  const dbUp = mongoose.connection.readyState === 1;
  let dbPing = false;
  if (dbUp) {
    try {
      await mongoose.connection.db.admin().ping();
      dbPing = true;
    } catch {}
  }
  res.status(dbPing ? 200 : 503).json({
    ok: dbPing,
    service: "codefusion-api",
    db: dbPing ? "up" : "down",
    uptime: Math.round(process.uptime()),
  });
});

app.use("/api/auth", auth);
app.use("/api/products", products);
app.use("/api/wishlist", wishlist);
app.use("/api/reviews", reviews);
app.use("/api/subscription", subscription);
app.use("/api/analytics", analytics);
app.use("/api/admin", admin);
app.use("/api/me/collections", userCollections);

app.use(notFound);
app.use(errorHandler);

const port = Number(process.env.PORT || 5000);

// Keep-alive and uptime monitoring live in .github/workflows/keep-alive.yml.
// The server used to ping itself too; one mechanism is enough, and an external
// check also notices when the service is actually down.
connectDB()
  .then(async () => {
    await runMigrations().catch((err) => console.error(JSON.stringify({ level: "error", msg: "migrations failed", error: err?.message })));
    startScoreJob();
    app.listen(port, "0.0.0.0", () => {
      console.log(`CodeFusion API listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
