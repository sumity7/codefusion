import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import PasswordField from "../components/PasswordField";

export default function Register() {
  const [name, setName] = useState("");
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
      const x = await api.auth.register({ name, email, password });
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
            <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>
          <PasswordField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} placeholder="Minimum 8 characters" autoComplete="new-password" />
          {error && <div className="form-error">{error}</div>}
          <button className="button primary" disabled={loading}>{loading ? "Creating account…" : "Create account"}</button>
        </form>
        <Link to="/login" className="auth-link">Already have an account? Sign in →</Link>
      </div>
    </main>
  );
}
