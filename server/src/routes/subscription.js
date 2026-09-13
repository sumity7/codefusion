import { Router } from "express";
import crypto from "crypto";
import User from "../models/User.js";
import SiteSetting from "../models/SiteSetting.js";
import TokenTransaction from "../models/TokenTransaction.js";
import { authRequired, adminRequired } from "../middleware/auth.js";

const router = Router();
async function settings() {
  const rows = await SiteSetting.find({ key: { $in: ["subscription.monthlyPrice", "subscription.monthlyTokens", "subscription.durationDays"] } }).lean();
  const out = { monthlyPrice: 499, monthlyTokens: 100, durationDays: 30 };
  for (const row of rows) out[row.key.split(".")[1]] = Number(row.value) || out[row.key.split(".")[1]];
  return out;
}
function active(user) { return user.subscriptionStatus === "ACTIVE" && user.subscriptionEndDate && user.subscriptionEndDate > new Date(); }

router.get("/plans", async (_req, res, next) => { try { res.json({ plan: await settings() }); } catch (e) { next(e); } });
router.get("/", authRequired, async (req, res, next) => { try { const user = await User.findById(req.user.id).select("subscriptionStatus subscriptionStartDate subscriptionEndDate subscriptionPlan tokenBalance monthlyTokenAllocation"); res.json({ subscription: user, active: active(user) }); } catch (e) { next(e); } });
router.get("/balance", authRequired, async (req, res, next) => { try { const user = await User.findById(req.user.id).select("tokenBalance monthlyTokenAllocation subscriptionStatus subscriptionEndDate"); res.json({ balance: user.tokenBalance, allocation: user.monthlyTokenAllocation, active: active(user) }); } catch (e) { next(e); } });
router.get("/history", authRequired, async (req, res, next) => { try { res.json({ transactions: await TokenTransaction.find({ userId: req.user.id }).populate("productId", "name slug").sort({ createdAt: -1 }) }); } catch (e) { next(e); } });

router.post("/checkout", authRequired, async (req, res, next) => {
  try {
    const plan = await settings();
    if (process.env.PAYMENT_PROVIDER !== "razorpay") return res.status(503).json({ message: "Subscription payments are not configured." });
    const auth = Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString("base64");
    const response = await fetch("https://api.razorpay.com/v1/orders", { method: "POST", headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" }, body: JSON.stringify({ amount: Math.round(plan.monthlyPrice * 100), currency: "INR", receipt: `cf_sub_${req.user.id}_${Date.now()}`, notes: { userId: req.user.id, type: "SUBSCRIPTION" } }) });
    const data = await response.json(); if (!response.ok) return res.status(502).json({ message: data.error?.description || "Payment provider error." });
    res.status(201).json({ razorpayOrderId: data.id, amount: Math.round(plan.monthlyPrice * 100), currency: "INR", keyId: process.env.RAZORPAY_KEY_ID });
  } catch (e) { next(e); }
});

router.post("/verify", authRequired, async (req, res, next) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;
    const expected = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(`${razorpayOrderId}|${razorpayPaymentId}`).digest("hex");
    if (!razorpayOrderId || expected !== razorpaySignature) return res.status(400).json({ message: "Payment verification failed." });
    const plan = await settings(); const now = new Date(); const end = new Date(now.getTime() + plan.durationDays * 86400000);
    const user = await User.findOneAndUpdate({ _id: req.user.id, lastSubscriptionPaymentId: { $ne: razorpayPaymentId } }, { $set: { subscriptionStatus: "ACTIVE", subscriptionStartDate: now, subscriptionEndDate: end, tokenBalance: plan.monthlyTokens, monthlyTokenAllocation: plan.monthlyTokens, lastSubscriptionPaymentId: razorpayPaymentId } }, { new: true });
    if (!user) return res.json({ message: "Subscription already activated." });
    await TokenTransaction.create({ userId: user._id, actionType: "SUBSCRIPTION_GRANT", tokensUsed: plan.monthlyTokens, productName: "CodeFusion Monthly" });
    res.json({ subscription: user });
  } catch (e) { next(e); }
});

router.put("/admin/settings", authRequired, adminRequired, async (req, res, next) => { try { for (const key of ["monthlyPrice", "monthlyTokens", "durationDays"]) await SiteSetting.findOneAndUpdate({ key: `subscription.${key}` }, { key: `subscription.${key}`, value: Number(req.body[key]) }, { upsert: true, new: true }); res.json({ plan: await settings() }); } catch (e) { next(e); } });
router.get("/admin/settings", authRequired, adminRequired, async (_req, res, next) => { try { res.json({ plan: await settings() }); } catch (e) { next(e); } });
router.get("/admin/subscribers", authRequired, adminRequired, async (_req, res, next) => { try { res.json({ subscribers: await User.find({ subscriptionStatus: { $ne: "NONE" } }).select("name email subscriptionStatus subscriptionStartDate subscriptionEndDate tokenBalance monthlyTokenAllocation").sort({ subscriptionStartDate: -1 }) }); } catch (e) { next(e); } });
router.get("/admin/transactions", authRequired, adminRequired, async (_req, res, next) => { try { res.json({ transactions: await TokenTransaction.find().populate("userId", "name email").populate("productId", "name slug").sort({ createdAt: -1 }).limit(200) }); } catch (e) { next(e); } });
export default router;
