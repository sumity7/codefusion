import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../services/api";
import { useSessionToken } from "../services/session";
import { useToast } from "../components/Toast";
import { loginPath } from "../utils/redirect";

const WishlistContext = createContext(null);

/*
 * One copy of the wishlist for the whole app. Previously every ProductCard
 * called its own hook, so a listing fired one GET per card and saving on one
 * card left every other card (and the Wishlist page) showing stale state.
 *
 * status: "signed-out" | "loading" | "ready" | "error"
 */
export function WishlistProvider({ children }) {
  const token = useSessionToken();
  const [slugs, setSlugs] = useState([]);
  const [status, setStatus] = useState(token ? "loading" : "signed-out");
  const [pending, setPending] = useState([]);
  const pendingRef = useRef(new Set());
  // Toggles run one after another. The server's toggle is read-modify-write, so
  // two in flight at once could each save a list missing the other's change.
  const queueRef = useRef(Promise.resolve());

  const load = useCallback(() => {
    if (!token) {
      setSlugs([]);
      setStatus("signed-out");
      return Promise.resolve();
    }
    setStatus("loading");
    return api.wishlist
      .list()
      .then((result) => {
        setSlugs(result.products || []);
        setStatus("ready");
      })
      .catch((error) => {
        setStatus(error?.status === 401 ? "signed-out" : "error");
      });
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  const toggle = useCallback(
    (slug) => {
      if (!token) {
        const error = new Error("Sign in to save products to your wishlist.");
        error.code = "AUTH_REQUIRED";
        return Promise.reject(error);
      }
      // A second click while the first is still saving is ignored, not queued —
      // queuing it would undo the first.
      if (pendingRef.current.has(slug)) return Promise.resolve(null);
      pendingRef.current.add(slug);
      setPending([...pendingRef.current]);

      const run = queueRef.current.then(() => api.wishlist.toggle(slug));
      queueRef.current = run.catch(() => {});

      return run
        .then((result) => {
          setSlugs(result.products || []);
          setStatus("ready");
          return result;
        })
        .catch((error) => {
          if (error?.status === 401) {
            error.code = "AUTH_REQUIRED";
            error.message = "Your session has expired. Sign in again to use your wishlist.";
          }
          throw error;
        })
        .finally(() => {
          pendingRef.current.delete(slug);
          setPending([...pendingRef.current]);
        });
    },
    [token]
  );

  const value = useMemo(
    () => ({
      slugs,
      status,
      reload: load,
      toggle,
      isSaved: (slug) => slugs.includes(slug),
      isPending: (slug) => pending.includes(slug),
    }),
    [slugs, status, load, toggle, pending]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  return useContext(WishlistContext);
}

// Toggle plus the user-facing feedback every save button needs.
export function useWishlistToggle() {
  const wishlist = useWishlist();
  const { notify } = useToast();
  const location = useLocation();

  return useCallback(
    async (slug) => {
      try {
        const result = await wishlist.toggle(slug);
        if (result) notify(result.saved ? "Saved to your wishlist." : "Removed from your wishlist.");
      } catch (error) {
        if (error?.code === "AUTH_REQUIRED") {
          notify({
            message: error.message,
            action: { label: "Sign in", to: loginPath(`${location.pathname}${location.search}`) },
          });
        } else {
          notify({ message: error?.message || "Unable to update your wishlist.", tone: "error" });
        }
      }
    },
    [wishlist, notify, location.pathname, location.search]
  );
}
