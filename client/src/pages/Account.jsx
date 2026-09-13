import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { useWishlist } from "../hooks/useWishlist";
import {
  Heart,
  LogOut,
  Zap,
  CreditCard,
  Pencil,
  Check,
  X,
  KeyRound,
  Clipboard,
  FileText,
  Gift,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";

const ACTIVITY_META = {
  CODE_COPY: { label: "Copied code", icon: Clipboard },
  PROMPT_COPY: { label: "Copied prompt", icon: FileText },
  SUBSCRIPTION_GRANT: { label: "Subscription renewed", icon: Gift },
  MANUAL_ADJUSTMENT: { label: "Token balance adjusted", icon: SlidersHorizontal },
};

export default function Account() {
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [history, setHistory] = useState([]);
  const [wishProducts, setWishProducts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const { wishlist, toggle } = useWishlist();

  useEffect(() => {
    Promise.all([api.auth.me(), api.subscription.get(), api.subscription.history()])
      .then(([u, s, h]) => {
        setUser(u.user);
        setNameDraft(u.user?.name || "");
        setSubscription(s);
        setHistory(h.transactions || []);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!wishlist.length) {
      setWishProducts([]);
      return;
    }
    api.products
      .list("")
      .then((result) => setWishProducts((result.products || []).filter((p) => wishlist.includes(p.slug))))
      .catch(() => {});
  }, [wishlist]);

  async function saveProfile() {
    if (!nameDraft.trim() || nameDraft === user.name) {
      setEditing(false);
      return;
    }
    setSaving(true);
    setSaveError("");
    try {
      const result = await api.auth.update({ name: nameDraft.trim() });
      setUser(result.user);
      setEditing(false);
    } catch (error) {
      setSaveError(error?.message || "Unable to save changes.");
    } finally {
      setSaving(false);
    }
  }

  if (!user)
    return (
      <main className="simple-page container">
        <span className="eyebrow">ACCOUNT</span>
        <h1>Your workspace starts here.</h1>
        <p>Sign in to access your data.</p>
        <Link to="/login" className="button primary">
          Sign in
        </Link>
      </main>
    );

  const active = subscription?.active;
  const sub = subscription?.subscription;
  const used = active ? Math.max(0, (sub?.monthlyTokenAllocation || 0) - (sub?.tokenBalance || 0)) : 0;
  const copyCount = history.filter((h) => h.actionType === "CODE_COPY" || h.actionType === "PROMPT_COPY").length;
  const initials = (user.name || "?").trim().slice(0, 1).toUpperCase();

  return (
    <main className="account-page container">
      {/* Profile header */}
      <div className="account-head">
        <div className="account-identity">
          <div className="account-avatar">{initials}</div>
          <div>
            <span className="eyebrow">ACCOUNT</span>
            <h1>Hello, {user.name}.</h1>
            <p>{user.email}</p>
            <div className="account-meta-row">
              <span className="account-status-pill">Active</span>
              {user.createdAt && <small>Member since {new Date(user.createdAt).toLocaleDateString(undefined, { month: "long", year: "numeric" })}</small>}
            </div>
          </div>
        </div>
        <div className="account-head-actions">
          <button className="button ghost" onClick={() => setEditing(true)}>
            <Pencil size={14} /> Edit Profile
          </button>
          <button
            className="button ghost"
            onClick={() => {
              localStorage.removeItem("codefusion_token");
              location.href = "/";
            }}
          >
            <LogOut size={14} /> Sign out
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="account-stats-grid">
        <div className="account-stat">
          <Zap size={16} />
          <b>{sub?.tokenBalance ?? 0}</b>
          <span>Tokens available</span>
        </div>
        <div className="account-stat">
          <CreditCard size={16} />
          <b>{active ? "Active" : "Inactive"}</b>
          <span>Subscription</span>
        </div>
        <div className="account-stat">
          <Heart size={16} />
          <b>{wishlist.length}</b>
          <span>Saved products</span>
        </div>
        <div className="account-stat">
          <Clipboard size={16} />
          <b>{copyCount}</b>
          <span>Copies made</span>
        </div>
      </div>

      {/* Subscription + token overview */}
      <div className="account-two-col">
        <section className="account-panel subscription-card">
          <span className="eyebrow">CODEFUSION PRO</span>
          {active ? (
            <>
              <h2>{sub.subscriptionPlan}</h2>
              <p>Renews on {new Date(sub.subscriptionEndDate).toLocaleDateString()}</p>
              <strong>{sub.tokenBalance} of {sub.monthlyTokenAllocation} tokens remaining</strong>
              <Link to="/subscription" className="button ghost account-panel-cta">
                Manage subscription <ArrowRight size={13} />
              </Link>
            </>
          ) : (
            <>
              <h2>No active subscription.</h2>
              <p>Subscribe to unlock source code and premium prompts across every product.</p>
              <Link to="/subscription" className="button primary account-panel-cta">
                Subscribe to CodeFusion Pro
              </Link>
            </>
          )}
        </section>

        <section className="account-panel">
          <span className="eyebrow">TOKEN OVERVIEW</span>
          <div className="token-overview-rows">
            <div><span>Current balance</span><b>{sub?.tokenBalance ?? 0}</b></div>
            <div><span>Used this cycle</span><b>{used}</b></div>
            <div><span>Monthly allowance</span><b>{sub?.monthlyTokenAllocation ?? 0}</b></div>
            {active && <div><span>Renews</span><b>{new Date(sub.subscriptionEndDate).toLocaleDateString()}</b></div>}
          </div>
          <Link to="/subscription" className="button ghost account-panel-cta">
            Get more tokens <ArrowRight size={13} />
          </Link>
        </section>
      </div>

      {/* Wishlist */}
      <section className="account-panel">
        <div className="account-panel-head-row">
          <span className="eyebrow">WISHLIST</span>
          {wishProducts.length > 0 && <Link to="/wishlist" className="text-link">View all →</Link>}
        </div>
        {wishProducts.length ? (
          <div className="account-wishlist-grid">
            {wishProducts.slice(0, 4).map((p) => (
              <div className="account-wishlist-item" key={p.slug}>
                <div className="account-wishlist-thumb" aria-hidden="true">{p.name?.slice(0, 1)}</div>
                <div className="account-wishlist-info">
                  <strong>{p.name}</strong>
                  <small>{p.category}</small>
                </div>
                <div className="account-wishlist-actions">
                  <Link to={`/products/${p.slug}`} className="icon-action" aria-label="View product"><ArrowRight size={13} /></Link>
                  <button type="button" className="icon-action danger" aria-label="Remove from wishlist" onClick={() => toggle(p.slug).catch(() => {})}><X size={13} /></button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="account-empty-state">
            <Heart size={22} />
            <strong>Your wishlist is empty.</strong>
            <p>Save products you want to explore later.</p>
            <Link to="/products" className="button primary">Explore products</Link>
          </div>
        )}
      </section>

      {/* Recent activity */}
      <section className="account-panel">
        <span className="eyebrow">RECENT ACTIVITY</span>
        {history.length ? (
          <div className="account-activity-list">
            {history.slice(0, 8).map((item) => {
              const meta = ACTIVITY_META[item.actionType] || { label: item.actionType, icon: Clipboard };
              const Icon = meta.icon;
              return (
                <div className="account-activity-row" key={item._id}>
                  <span className="account-activity-icon"><Icon size={13} /></span>
                  <div>
                    <strong>{meta.label}</strong>
                    <small>{item.productName || item.productId?.name || "CodeFusion"}</small>
                  </div>
                  <small className="account-activity-date">{new Date(item.createdAt).toLocaleDateString()}</small>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No activity yet. <Link to="/products">Explore products →</Link></p>
        )}
      </section>

      {/* Account settings */}
      <section className="account-panel">
        <span className="eyebrow">ACCOUNT SETTINGS</span>
        <div className="account-settings-grid">
          <div className="account-settings-block">
            <h3>Profile information</h3>
            {editing ? (
              <div className="account-edit-form">
                <label>
                  Name
                  <input value={nameDraft} onChange={(e) => setNameDraft(e.target.value)} maxLength={60} />
                </label>
                <label>
                  Email
                  <input value={user.email} disabled title="Email cannot be changed" />
                </label>
                {saveError && <div className="form-error">{saveError}</div>}
                <div className="modal-actions">
                  <button className="button primary" onClick={saveProfile} disabled={saving}>
                    <Check size={13} /> {saving ? "Saving..." : "Save changes"}
                  </button>
                  <button className="button ghost" onClick={() => { setEditing(false); setNameDraft(user.name); setSaveError(""); }}>Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <p><span>Name</span><b>{user.name}</b></p>
                <p><span>Email</span><b>{user.email}</b></p>
                <button className="button ghost" onClick={() => setEditing(true)}><Pencil size={13} /> Edit profile</button>
              </>
            )}
          </div>
          <div className="account-settings-block">
            <h3>Security</h3>
            <p><span>Account status</span><b>Active</b></p>
            <Link to="/forgot-password" className="button ghost"><KeyRound size={13} /> Change password</Link>
            <button
              className="button ghost"
              onClick={() => {
                localStorage.removeItem("codefusion_token");
                location.href = "/";
              }}
            >
              <LogOut size={13} /> Sign out
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
