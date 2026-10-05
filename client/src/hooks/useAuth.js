import { useEffect, useState } from "react";
import { api } from "../services/api";
import { clearToken, useSessionToken } from "../services/session";

/*
 * The signed-in user, re-fetched whenever the session token changes (sign-in,
 * sign-out, another tab). `loading` stays true until the user for the *current*
 * token has arrived, so a guard never acts on the previous session's user.
 * Only a 401 ends the session; a network blip doesn't sign anyone out.
 */
export function useAuth() {
  const token = useSessionToken();
  const [state, setState] = useState({ user: null, token: null });

  useEffect(() => {
    if (!token) return;
    let active = true;
    api.auth
      .me()
      .then((result) => active && setState({ user: result.user, token }))
      .catch((error) => {
        if (!active) return;
        setState({ user: null, token });
        if (error?.status === 401) clearToken();
      });
    return () => {
      active = false;
    };
  }, [token]);

  if (!token) return { user: null, loading: false };
  return { user: state.token === token ? state.user : null, loading: state.token !== token };
}
