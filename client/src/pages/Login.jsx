import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import PasswordField from "../components/PasswordField";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const x = await api.auth.login({ email, password });
      localStorage.setItem("codefusion_token", x.token);
      nav("/account");
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
            <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>
          <PasswordField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          {error && <div className="form-error">{error}</div>}
          <button className="button primary" disabled={loading}>{loading ? "Signing in…" : "Sign in"}</button>
        </form>
        <Link to="/forgot-password" className="auth-link">Forgot password?</Link>
        <Link to="/register" className="auth-link">Create an account →</Link>
      </div>
    </main>
  );
}
