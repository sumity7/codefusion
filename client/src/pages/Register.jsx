import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../services/api";
import { setToken } from "../services/session";
import { safeNext } from "../utils/redirect";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PasswordField from "../components/PasswordField";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useDocumentTitle("Create account");
  const nav = useNavigate();
  const [params] = useSearchParams();
  // Where to go afterwards — /subscription, a product, the wishlist. Anything
  // that isn't a same-origin path falls back to /account.
  const next = safeNext(params.get("next"));
  const nextQuery = params.get("next") ? `?next=${encodeURIComponent(next)}` : "";

  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const x = await api.auth.register({ name, email, password });
      setToken(x.token);
      nav(next, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <span className="eyebrow">JOIN CODEFUSION</span>
        <h1>Create your account.</h1>
        <p>Keep your wishlist and subscription in one place.</p>
        <form onSubmit={submit}>
          <label>
            Name
            <input required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" required autoComplete="email" aria-invalid={Boolean(error)} aria-describedby={error ? "auth-error" : undefined} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>
          <PasswordField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} placeholder="Minimum 8 characters" autoComplete="new-password" invalid={Boolean(error)} describedBy={error ? "auth-error" : undefined} />
          {error && <div className="form-error" id="auth-error" role="alert">{error}</div>}
          <button className="button primary" disabled={loading} aria-busy={loading}>{loading ? "Creating account…" : "Create account"}</button>
        </form>
        <Link to={`/login${nextQuery}`} className="auth-link">Already have an account? Sign in →</Link>
      </div>
    </main>
  );
}
