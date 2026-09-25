import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const ToastContext = createContext(null);

/*
 * One toast at a time, reusing the .copy-toast look the product page already
 * had. The live region stays mounted so screen readers announce each message
 * as it arrives rather than missing the first one.
 *
 * notify("Copied to clipboard")
 * notify({ message, tone: "error", action: { label: "Sign in", to: "/login" } })
 */
export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const idRef = useRef(0);

  const dismiss = useCallback(() => setToast(null), []);

  const notify = useCallback((input) => {
    const next = typeof input === "string" ? { message: input } : input;
    setToast({ tone: "info", ...next, id: ++idRef.current });
  }, []);

  useEffect(() => {
    if (!toast) return;
    // Messages with an action stay up longer so there's time to reach it.
    const timer = setTimeout(dismiss, toast.action ? 7000 : 3200);
    return () => clearTimeout(timer);
  }, [toast, dismiss]);

  const value = useMemo(() => ({ notify, dismiss }), [notify, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-region" aria-live={toast?.tone === "error" ? "assertive" : "polite"} role="status">
        {toast && (
          <div key={toast.id} className={`copy-toast toast-${toast.tone}`}>
            <span>{toast.message}</span>
            {toast.action && (
              <Link to={toast.action.to} className="toast-action" onClick={dismiss}>
                {toast.action.label}
              </Link>
            )}
            <button type="button" className="toast-close" onClick={dismiss} aria-label="Dismiss notification">
              <X size={13} />
            </button>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
