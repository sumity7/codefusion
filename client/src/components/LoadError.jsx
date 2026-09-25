import { RefreshCw, WifiOff } from "lucide-react";

// Shown when a request fails, instead of quietly substituting sample data.
export default function LoadError({ title = "We couldn't load this", message = "Check your connection and try again.", onRetry, compact = false }) {
  return (
    <div className={`empty-state load-error${compact ? " compact" : ""}`} role="alert">
      <WifiOff size={22} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{message}</p>
      {onRetry && (
        <button type="button" className="button ghost" onClick={onRetry}>
          <RefreshCw size={14} aria-hidden="true" /> Try again
        </button>
      )}
    </div>
  );
}
