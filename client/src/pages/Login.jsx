import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../services/api";
import { setToken } from "../services/session";
import { safeNext } from "../utils/redirect";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PasswordField from "../components/PasswordField";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useDocumentTitle("Login");
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
      const x = await api.auth.login({ email, password });
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
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Sign in to CodeFusion.</h1>
        <p>Access your wishlist, subscription and token balance.</p>
        <form onSubmit={submit}>
          <label>
            Email
            <input type="email" required autoComplete="email" aria-invalid={Boolean(error)} aria-describedby={error ? "auth-error" : undefined} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>
          <PasswordField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" invalid={Boolean(error)} describedBy={error ? "auth-error" : undefined} />
          {error && <div className="form-error" id="auth-error" role="alert">{error}</div>}
          <button className="button primary" disabled={loading} aria-busy={loading}>{loading ? "Signing in…" : "Sign in"}</button>
        </form>
        <Link to="/forgot-password" className="auth-link">Forgot password?</Link>
        <Link to={`/register${nextQuery}`} className="auth-link">Create an account →</Link>
      </div>
    </main>
  );
}
