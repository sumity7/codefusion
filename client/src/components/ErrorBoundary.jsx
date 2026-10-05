import { Component } from "react";
import { reportClientError } from "../services/analytics";

/*
 * Keeps one broken page from blanking the whole site: the navbar and footer
 * stay, the page shows a recovery message, and the error is reported to the
 * admin's error log. Reset on navigation via the `resetKey` prop.
 */
export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    reportClientError(error?.message || error, String(info?.componentStack || "").trim().split("\n")[0]?.trim());
  }

  componentDidUpdate(previous) {
    if (this.state.error && previous.resetKey !== this.props.resetKey) this.setState({ error: null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <main className="not-found container" role="alert">
        <span className="eyebrow">SOMETHING BROKE</span>
        <h1>This page hit<br /><span>an unexpected error.</span></h1>
        <p>It's been reported. Try reloading, or head back to the products.</p>
        {import.meta.env.DEV && <pre className="error-detail">{String(this.state.error?.stack || this.state.error)}</pre>}
        <div>
          <button type="button" className="button primary" onClick={() => location.reload()}>Reload</button>
          <a href="/products" className="button ghost">Browse products</a>
        </div>
      </main>
    );
  }
}
