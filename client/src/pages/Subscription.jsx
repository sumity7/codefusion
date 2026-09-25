import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { api } from "../services/api";
import { getToken } from "../services/session";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import LoadError from "../components/LoadError";

// Reference "was" price shown struck through next to the real (discounted) price.
// Purely a marketing display value — the amount actually charged always comes
// from plan.monthlyPrice, fetched live from the server.
const COMPARE_AT_PRICE = 499;

function loadRazorpay() {
  if (window.Razorpay) return Promise.resolve(true);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function Subscription() {
  useDocumentTitle("Subscription");
  // Starts empty: showing placeholder numbers until the real plan arrives (or
  // forever, if the request failed) would quote a price that may be wrong.
  const [plan, setPlan] = useState(null);
  const [planStatus, setPlanStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    setPlanStatus("loading");
    api.subscription
      .plans()
      .then((x) => {
        if (!active) return;
        setPlan(x.plan);
        setPlanStatus("ready");
      })
      .catch(() => {
        if (active) setPlanStatus("error");
      });
    return () => {
      active = false;
    };
  }, [attempt]);

  async function subscribe() {
    if (!getToken()) return navigate("/login?next=%2Fsubscription");
    setMsg("");
    setLoading(true);
    try {
      const order = await api.subscription.checkout();
      await loadRazorpay();
      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.razorpayOrderId,
        name: "CodeFusion",
        description: "CodeFusion Monthly subscription",
        theme: { color: "#c4b5fd" },
        handler: async (response) => {
          try {
            await api.subscription.verify({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });
            navigate("/account");
          } catch (err) {
            setMsg(err.message);
          } finally {
            setLoading(false);
          }
        },
        modal: { ondismiss: () => setLoading(false) },
      };
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        setMsg(response.error?.description || "Payment failed.");
        setLoading(false);
      });
      rzp.open();
    } catch (e) {
      setMsg(e.message);
      setLoading(false);
    }
  }

  return (
    <main className="simple-page container subscription-page">
      <span className="eyebrow">CODEFUSION PRO</span>
      <h1>Everything you need. One subscription.</h1>
      <p>Unlock every product's source code and premium prompts.</p>
      {planStatus === "error" && <LoadError title="We couldn't load plan details" onRetry={() => setAttempt((n) => n + 1)} />}
      {planStatus === "loading" && <section className="account-panel subscription-card" aria-busy="true"><p>Loading plan details…</p></section>}
      {plan && planStatus === "ready" && (
      <section className="account-panel subscription-card">
        <h2>CodeFusion Monthly</h2>
        <div className="subscription-price">
          {plan.monthlyPrice < COMPARE_AT_PRICE && <span className="subscription-was">₹{COMPARE_AT_PRICE}</span>}
          ₹{plan.monthlyPrice}
          <small> / month</small>
        </div>
        {plan.monthlyPrice < COMPARE_AT_PRICE && (
          <span className="subscription-discount">
            {Math.round((1 - plan.monthlyPrice / COMPARE_AT_PRICE) * 100)}% off
          </span>
        )}
        <strong>
          {plan.monthlyTokens} tokens every {plan.durationDays} days
        </strong>
        {["Access to all products", "Copy complete source code", "Copy premium prompts", "New products added regularly", "Cancel anytime"].map((x) => (
          <p key={x}>
            <Check size={15} /> {x}
          </p>
        ))}
        <button className="button primary" onClick={subscribe} disabled={loading} aria-busy={loading}>
          {loading ? "Opening payment…" : "Subscribe Now"}
        </button>
        {msg && <p className="form-error" role="alert">{msg}</p>}
      </section>
      )}
      <Link to="/products" className="text-link">
        Continue exploring products →
      </Link>
    </main>
  );
}
