import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Search, Heart, UserRound, Menu, X, Sun, Moon, LogIn, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { api } from "../services/api";
import { useSessionToken } from "../services/session";
import { loginPath } from "../utils/redirect";
import Logo from "./Logo";
import LiquidMetalButton from "./LiquidMetalButton";

// Inner face + ambient glow for the 4 primary nav controls (Theme,
// Wishlist, Get Pro, Profile) — the shader ring itself is untouched by
// either of these, they only paint the flat centre and add a colour glow
// around it, matching the navbar's Blue Glass (light) / Dark Glass (dark)
// treatment.
const BLUE_GLASS = {
  surface: "linear-gradient(180deg, rgba(255,255,255,.95) 0%, rgba(219,234,254,.8) 100%)",
  glow: "rgba(56,189,248,.4)",
  icon: "#3b4256",
};
const DARK_GLASS = {
  surface: "linear-gradient(180deg, rgba(40,34,58,.92) 0%, rgba(13,11,20,.95) 100%)",
  glow: "rgba(167,139,250,.45)",
  icon: "#d9d3ec",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [subActive, setSubActive] = useState(false);
  const [tokenBalance, setTokenBalance] = useState(0);
  const loggedIn = Boolean(useSessionToken());
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const here = `${location.pathname}${location.search}`;
  const glass = theme === "light" ? BLUE_GLASS : DARK_GLASS;

  // Any navigation — a menu link, an icon button, Back — closes the mobile menu.
  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!loggedIn) {
      setSubActive(false);
      setTokenBalance(0);
      return;
    }
    api.subscription
      .balance()
      .then((res) => {
        setSubActive(Boolean(res.active));
        setTokenBalance(res.balance || 0);
      })
      .catch(() => {});
  }, [loggedIn]);

  function submitSearch(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    navigate(`/products${params.toString() ? `?${params}` : ""}`);
    setOpen(false);
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <Logo />
        </Link>
        <nav id="primary-nav" className={open ? "open" : ""} aria-label="Primary">
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="/collections/trending" onClick={() => setOpen(false)}>Collections</NavLink>
          <NavLink to="/resources/docs" onClick={() => setOpen(false)}>Resources</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          {/*
            Below 1180px the header drops the Wishlist and Account icons, and
            below 600px the Get Pro button too, so the menu carries them.
          */}
          <div className="nav-menu-account">
            {loggedIn ? (
              <NavLink to="/account" onClick={() => setOpen(false)}>
                <UserRound size={15} aria-hidden="true" /> My account
              </NavLink>
            ) : (
              <NavLink to={loginPath(here)} className="nav-menu-login" onClick={() => setOpen(false)}>
                <LogIn size={15} aria-hidden="true" /> Log in
              </NavLink>
            )}
            <NavLink to="/wishlist" onClick={() => setOpen(false)}>
              <Heart size={15} aria-hidden="true" /> Wishlist
            </NavLink>
            <NavLink to={subActive ? "/account" : "/subscription"} className="nav-menu-pro" end onClick={() => setOpen(false)}>
              <Sparkles size={15} aria-hidden="true" /> {subActive ? `${tokenBalance} tokens` : "Get Pro"}
            </NavLink>
          </div>
        </nav>
        <div className="nav-actions">
          <form className="nav-search" onSubmit={submitSearch}>
            <Search size={14} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              aria-label="Search products"
            />
          </form>
          <LiquidMetalButton
            viewMode="icon"
            icon={theme === "dark" ? <Sun size={16} style={{ color: glass.icon }} /> : <Moon size={16} style={{ color: glass.icon }} />}
            onClick={toggle}
            ariaLabel={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            innerBackground={glass.surface}
            glow={glass.glow}
          />
          <div className="nav-icon-wrap">
            <LiquidMetalButton
              viewMode="icon"
              icon={<Heart size={16} style={{ color: glass.icon }} />}
              onClick={() => navigate("/wishlist")}
              ariaLabel="Wishlist"
              innerBackground={glass.surface}
              glow={glass.glow}
            />
          </div>
          {loggedIn ? (
            <>
              <div className="nav-btn-wrap">
                <LiquidMetalButton
                  viewMode="text"
                  label={subActive ? `${tokenBalance} Tokens` : "Get Pro"}
                  onClick={() => navigate(subActive ? "/account" : "/subscription")}
                  innerBackground={glass.surface}
                  glow={glass.glow}
                  textColor={glass.icon}
                />
              </div>
              <div className="nav-icon-wrap">
                <LiquidMetalButton
                  viewMode="icon"
                  icon={<UserRound size={16} style={{ color: glass.icon }} />}
                  onClick={() => navigate("/account")}
                  ariaLabel="Account"
                  innerBackground={glass.surface}
                  glow={glass.glow}
                />
              </div>
            </>
          ) : (
            <>
              <Link to={loginPath(here)} className="nav-login">
                <LogIn size={14} />
                Login
              </Link>
              <div className="nav-btn-wrap">
                <LiquidMetalButton
                  viewMode="text"
                  label="Get Pro"
                  onClick={() => navigate("/subscription")}
                  innerBackground={glass.surface}
                  glow={glass.glow}
                  textColor={glass.icon}
                />
              </div>
            </>
          )}
          <div className="mobile-toggle-wrap">
            <LiquidMetalButton
              viewMode="icon"
              icon={open ? <X size={18} style={{ color: "#666" }} /> : <Menu size={18} style={{ color: "#666" }} />}
              onClick={() => setOpen((v) => !v)}
              ariaLabel={open ? "Close menu" : "Open menu"}
              ariaExpanded={open}
              ariaControls="primary-nav"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
