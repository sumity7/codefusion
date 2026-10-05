import { Coins, Gift, RefreshCw, ShieldCheck } from "lucide-react";

/*
 * "How tokens work", shown wherever a token gets spent or bought. Kept in one
 * place so the subscription page, product pages and docs can't drift apart.
 */
export default function TokenExplainer({ plan, compact = false }) {
  const tokens = plan?.monthlyTokens ?? 100;
  const days = plan?.durationDays ?? 30;
  const steps = [
    { icon: Gift, title: "Free products cost nothing", body: "Anything marked Free can be copied, downloaded and exported without a plan or tokens. You only need an account." },
    { icon: Coins, title: "1 token unlocks a Pro product", body: "Copying code or a prompt from a Pro or Premium product uses 1 token. Once unlocked on the product page, copy, download the ZIP or export to React, Next.js or Vue as often as you like during that visit." },
    // Matches the server: each paid order sets the balance (no rollover) and
    // nothing renews automatically.
    { icon: RefreshCw, title: `${tokens} tokens for ${days} days`, body: `Each CodeFusion Pro purchase sets your balance to ${tokens} tokens for ${days} days. It doesn't renew automatically, and unused tokens don't carry over when you renew.` },
    { icon: ShieldCheck, title: "You're never charged twice", body: "A retried or double-clicked copy is recognised and doesn't spend a second token. Your balance and every token spent are listed on your Account page." },
  ];
  return (
    <section className={`token-explainer${compact ? " compact" : ""}`} aria-labelledby="token-explainer-title">
      <span className="eyebrow" id="token-explainer-title">HOW TOKENS WORK</span>
      <ol>
        {steps.map(({ icon: Icon, title, body }) => (
          <li key={title}>
            <Icon size={16} aria-hidden="true" />
            <div>
              <b>{title}</b>
              <p>{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
