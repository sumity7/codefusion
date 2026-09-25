import { useSyncExternalStore } from "react";

/*
 * The auth token lives in localStorage. Components used to read it once during
 * render, so nothing re-rendered when it changed — the navbar and wishlist had
 * no way to learn that someone had just signed in or out. Writes go through
 * here so subscribers are told; the snapshot is still read straight from
 * storage, so a write from elsewhere (the admin area, another tab) is picked up
 * on the next render too.
 */
const KEY = "codefusion_token";
const EVENT = "codefusion:session";

function read() {
  try {
    return localStorage.getItem(KEY) || "";
  } catch {
    return "";
  }
}

export function getToken() {
  return read();
}

export function setToken(token) {
  try {
    localStorage.setItem(KEY, token);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export function clearToken() {
  try {
    localStorage.removeItem(KEY);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback) {
  const onStorage = (event) => {
    if (event.key === KEY || event.key === null) callback();
  };
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

export function useSessionToken() {
  return useSyncExternalStore(subscribe, read, () => "");
}
