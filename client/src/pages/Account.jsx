import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { useWishlist, useWishlistToggle } from "../hooks/useWishlist";
import { clearToken, useSessionToken } from "../services/session";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PasswordField from "../components/PasswordField";
import LoadError from "../components/LoadError";
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
  Loader2,
} from "lucide-react";

const ACTIVITY_META = {
  CODE_COPY: { label: "Copied code", icon: Clipboard },
  PROMPT_COPY: { label: "Copied prompt", icon: FileText },
  SUBSCRIPTION_GRANT: { label: "Subscription renewed", icon: Gift },
  MANUAL_ADJUSTMENT: { label: "Token balance adjusted", icon: SlidersHorizontal },
};

// Derived from the subscription fields. The user model has no separate account
// status (suspended etc.) to report, so none is shown.
function planStatus(subscription) {
  if (subscription?.active) return { label: "Pro member", tone: "active" };
  const sub = subscription?.subscription;
  if (sub?.subscriptionStatus === "EXPIRED" || sub?.subscriptionEndDate) return { label: "Subscription expired", tone: "expired" };
  return { label: "Free plan", tone: "free" };
}

function signOut() {
  clearToken();
  location.href = "/";
}

function PasswordForm({ onDone }) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setError("");
    if (next.length < 8) return setError("Your new password must be at least 8 characters.");
    if (next !== confirm) return setError("The new passwords don't match.");
    setSaving(true);
    try {
      await api.auth.changePassword({ currentPassword: current, newPassword: next });
      onDone(true);
    } catch (err) {
      setError(err?.message || "Unable to change your password.");
    } finally {
      setSaving(false);
    }
  }

  const describedBy = error ? "password-change-error" : undefined;
  return (
    <form className="account-edit-form" onSubmit={submit}>
      <PasswordField label="Current password" value={current} onChange={(e) => setCurrent(e.target.value)} autoComplete="current-password" invalid={Boolean(error)} describedBy={describedBy} />
      <PasswordField label="New password" value={next} onChange={(e) => setNext(e.target.value)} minLength={8} placeholder="Minimum 8 characters" autoComplete="new-password" invalid={Boolean(error)} describedBy={describedBy} />
      <PasswordField label="Confirm new password" value={confirm} onChange={(e) => setConfirm(e.target.value)} minLength={8} autoComplete="new-password" invalid={Boolean(error)} describedBy={describedBy} />
      {error && <div className="form-error" id="password-change-error" role="alert">{error}</div>}
      <div className="modal-actions">
        <button type="submit" className="button primary" disabled={saving} aria-busy={saving}>
          <Check size={13} aria-hidden="true" /> {saving ? "Updating…" : "Update password"}
        </button>
        <button type="button" className="button ghost" onClick={() => onDone(false)} disabled={saving}>Cancel</button>
      </div>
      <Link to="/forgot-password" className="auth-link">Forgot your current password?</Link>
    </form>
  );
}

export default function Account() {
  useDocumentTitle("My Account");
  const token = useSessionToken();
  // "loading" | "ready" | "signed-out" | "error"
  const [status, setStatus] = useState(token ? "loading" : "signed-out");
  const [attempt, setAttempt] = useState(0);
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [history, setHistory] = useState([]);
  const [wishProducts, setWishProducts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const { slugs: wishlist, isPending } = useWishlist();
  const toggleWishlist = useWishlistToggle();
  useEffect(() => {
    if (!token) {
      setStatus("signed-out");
      return;
    }
    let active = true;
    setStatus("loading");
    Promise.all([api.auth.me(), api.subscription.get(), api.subscription.history()])
      .then(([u, s, h]) => {
        if (!active) return;
        setUser(u.user);
        setNameDraft(u.user?.name || "");
        setSubscription(s);
        setHistory(h.transactions || []);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        // An expired or revoked session: drop it rather than showing a broken page.
        if (error?.status === 401) {
          clearToken();
          setStatus("signed-out");
        } else {
          setStatus("error");
        }
      });
    return () => {
      active = false;
    };
  }, [token, attempt]);

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

  if (status === "loading")
    return (
      <main className="simple-page container" aria-busy="true">
        <span className="eyebrow">ACCOUNT</span>
        <p className="account-loading">
          <Loader2 size={16} className="spin" aria-hidden="true" /> Loading your account…
        </p>
      </main>
    );
  if (status === "error")
    return (
      <main className="simple-page container">
        <span className="eyebrow">ACCOUNT</span>
        <LoadError title="We couldn't load your account" onRetry={() => setAttempt((n) => n + 1)} />
      </main>
    );
  if (status === "signed-out" || !user)
    return (
      <main className="simple-page container">
        <span className="eyebrow">ACCOUNT</span>
        <h1>Your workspace starts here.</h1>
        <p>Sign in to access your data.</p>
        <Link to="/login?next=%2Faccount" className="button primary">
          Sign in
        </Link>
      </main>
    );

  const active = subscription?.active;
  const sub = subscription?.subscription;
  const used = active ? Math.max(0, (sub?.monthlyTokenAllocation || 0) - (sub?.tokenBalance || 0)) : 0;
  const copyCount = history.filter((h) => h.actionType === "CODE_COPY" || h.actionType === "PROMPT_COPY").length;
  const initials = (user.name || "?").trim().slice(0, 1).toUpperCase();
  const plan = planStatus(subscription);

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
              <span className={`account-status-pill ${plan.tone}`}>{plan.label}</span>
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
            onClick={signOut}
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
                  <Link to={`/products/${p.slug}`} className="icon-action" aria-label={`View ${p.name}`}><ArrowRight size={13} /></Link>
                  <button type="button" className="icon-action danger" aria-label={`Remove ${p.name} from wishlist`} onClick={() => toggleWishlist(p.slug)} disabled={isPending(p.slug)}><X size={13} /></button>
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
            <p><span>Plan</span><b>{plan.label}</b></p>
            {passwordMessage && !changingPassword && <div className="success-state" role="status">{passwordMessage}</div>}
            {changingPassword ? (
              <PasswordForm
                onDone={(changed) => {
                  setChangingPassword(false);
                  setPasswordMessage(changed ? "Your password has been updated." : "");
                }}
              />
            ) : (
              <button type="button" className="button ghost" onClick={() => { setPasswordMessage(""); setChangingPassword(true); }}>
                <KeyRound size={13} aria-hidden="true" /> Change password
              </button>
            )}
            <button
              className="button ghost"
              onClick={signOut}
            >
              <LogOut size={13} /> Sign out
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
