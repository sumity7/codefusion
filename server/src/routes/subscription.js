import { Router } from "express";
import crypto from "crypto";
import User from "../models/User.js";
import SiteSetting from "../models/SiteSetting.js";
import TokenTransaction from "../models/TokenTransaction.js";
import Payment from "../models/Payment.js";
import { authRequired, adminRequired } from "../middleware/auth.js";
import { recordEvent } from "../utils/events.js";

const router = Router();
async function settings() {
  const rows = await SiteSetting.find({ key: { $in: ["subscription.monthlyPrice", "subscription.monthlyTokens", "subscription.durationDays"] } }).lean();
  const out = { monthlyPrice: 499, monthlyTokens: 100, durationDays: 30 };
  for (const row of rows) out[row.key.split(".")[1]] = Number(row.value) || out[row.key.split(".")[1]];
  return out;
}
function active(user) { return user.subscriptionStatus === "ACTIVE" && user.subscriptionEndDate && user.subscriptionEndDate > new Date(); }

// Constant-time compare so the signature check doesn't leak how many leading
// characters matched.
function signatureMatches(expected, received) {
  if (typeof received !== "string" || received.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(received));
}

router.get("/plans", async (_req, res, next) => { try { res.json({ plan: await settings() }); } catch (e) { next(e); } });
router.get("/", authRequired, async (req, res, next) => { try { const user = await User.findById(req.user.id).select("subscriptionStatus subscriptionStartDate subscriptionEndDate subscriptionPlan tokenBalance monthlyTokenAllocation"); res.json({ subscription: user, active: active(user) }); } catch (e) { next(e); } });
router.get("/balance", authRequired, async (req, res, next) => { try { const user = await User.findById(req.user.id).select("tokenBalance monthlyTokenAllocation subscriptionStatus subscriptionEndDate"); res.json({ balance: user.tokenBalance, allocation: user.monthlyTokenAllocation, active: active(user) }); } catch (e) { next(e); } });
router.get("/history", authRequired, async (req, res, next) => { try { res.json({ transactions: await TokenTransaction.find({ userId: req.user.id }).populate("productId", "name slug").sort({ createdAt: -1 }) }); } catch (e) { next(e); } });

router.post("/checkout", authRequired, async (req, res, next) => {
  try {
    const plan = await settings();
    if (process.env.PAYMENT_PROVIDER !== "razorpay") return res.status(503).json({ message: "Subscription payments are not configured." });
    const amount = Math.round(plan.monthlyPrice * 100);
    const auth = Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString("base64");
    const response = await fetch("https://api.razorpay.com/v1/orders", { method: "POST", headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" }, body: JSON.stringify({ amount, currency: "INR", receipt: `cf_sub_${req.user.id}_${Date.now()}`.slice(0, 40), notes: { userId: req.user.id, type: "SUBSCRIPTION" } }) });
    const data = await response.json(); if (!response.ok) return res.status(502).json({ message: data.error?.description || "Payment provider error." });
    // The order is bound to this user and this price. Verify only ever accepts
    // an order that exists here, belongs to the caller and hasn't been used.
    await Payment.create({ user: req.user.id, orderId: data.id, amount, currency: "INR", plan });
    recordEvent("checkout_start", { user: req.user.id, meta: { amount } });
    res.status(201).json({ razorpayOrderId: data.id, amount, currency: "INR", keyId: process.env.RAZORPAY_KEY_ID });
  } catch (e) { next(e); }
});

router.post("/verify", authRequired, async (req, res, next) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body || {};
    if (typeof razorpayOrderId !== "string" || typeof razorpayPaymentId !== "string" || !razorpayOrderId || !razorpayPaymentId) {
      return res.status(400).json({ message: "Payment verification failed." });
    }
    const expected = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "").update(`${razorpayOrderId}|${razorpayPaymentId}`).digest("hex");
    if (!signatureMatches(expected, razorpaySignature)) return res.status(400).json({ message: "Payment verification failed." });

    // Single conditional update: only an unused order created by this user can
    // become paid. A replayed (order, payment, signature) triple matches nothing
    // the second time, so it can never grant tokens again.
    let payment;
    try {
      payment = await Payment.findOneAndUpdate(
        { orderId: razorpayOrderId, user: req.user.id, status: "created" },
        { $set: { status: "paid", paymentId: razorpayPaymentId, paidAt: new Date() } },
        { new: true }
      );
    } catch (error) {
      // Unique paymentId index: this payment was already applied to another order.
      if (error?.code === 11000) return res.status(409).json({ message: "This payment has already been used." });
      throw error;
    }

    if (!payment) {
      const existing = await Payment.findOne({ orderId: razorpayOrderId, user: req.user.id }).lean();
      if (existing?.status === "paid" && existing.paymentId === razorpayPaymentId) {
        return res.json({ message: "Subscription already activated.", alreadyApplied: true });
      }
      return res.status(400).json({ message: "Payment verification failed." });
    }

    const plan = { ...(await settings()), ...(payment.plan || {}) };
    const now = new Date(); const end = new Date(now.getTime() + plan.durationDays * 86400000);
    const user = await User.findByIdAndUpdate(req.user.id, { $set: { subscriptionStatus: "ACTIVE", subscriptionStartDate: now, subscriptionEndDate: end, tokenBalance: plan.monthlyTokens, monthlyTokenAllocation: plan.monthlyTokens } }, { new: true }).select("-passwordHash -resetOtpHash");
    await TokenTransaction.create({ userId: req.user.id, actionType: "SUBSCRIPTION_GRANT", tokensUsed: plan.monthlyTokens, productName: "CodeFusion Monthly" });
    recordEvent("checkout_success", { user: req.user.id, meta: { amount: payment.amount } });
    res.json({ subscription: user });
  } catch (e) { next(e); }
});

router.put("/admin/settings", authRequired, adminRequired, async (req, res, next) => { try { for (const key of ["monthlyPrice", "monthlyTokens", "durationDays"]) await SiteSetting.findOneAndUpdate({ key: `subscription.${key}` }, { key: `subscription.${key}`, value: Number(req.body[key]) }, { upsert: true, new: true }); res.json({ plan: await settings() }); } catch (e) { next(e); } });
router.get("/admin/settings", authRequired, adminRequired, async (_req, res, next) => { try { res.json({ plan: await settings() }); } catch (e) { next(e); } });
router.get("/admin/subscribers", authRequired, adminRequired, async (_req, res, next) => { try { res.json({ subscribers: await User.find({ subscriptionStatus: { $ne: "NONE" } }).select("name email subscriptionStatus subscriptionStartDate subscriptionEndDate tokenBalance monthlyTokenAllocation").sort({ subscriptionStartDate: -1 }) }); } catch (e) { next(e); } });
router.get("/admin/transactions", authRequired, adminRequired, async (_req, res, next) => { try { res.json({ transactions: await TokenTransaction.find().populate("userId", "name email").populate("productId", "name slug").sort({ createdAt: -1 }).limit(200) }); } catch (e) { next(e); } });
router.get("/admin/payments", authRequired, adminRequired, async (_req, res, next) => { try { res.json({ payments: await Payment.find({ status: "paid" }).populate("user", "name email").sort({ paidAt: -1 }).limit(200) }); } catch (e) { next(e); } });
export default router;
