import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, UserRound, Menu, X, Sun, Moon, LogIn } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const loggedIn = Boolean(localStorage.getItem("codefusion_token"));
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();

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
          <span>⌘/⌘</span>
          <div>
            <b>CodeFusion</b>
            <small>Premium digital products</small>
          </div>
        </Link>
        <nav className={open ? "open" : ""}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/collections/trending">Collections</NavLink>
          <NavLink to="/resources/docs">Resources</NavLink>
          <NavLink to="/about">About</NavLink>
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
          <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle light/dark theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/wishlist" className="nav-icon">
            <Heart size={16} />
          </Link>
          {loggedIn ? (
            <>
              <Link to="/account" className="nav-btn">Tokens</Link>
              <Link to="/account" className="nav-icon">
                <UserRound size={16} />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-login">
                <LogIn size={14} />
                Login
              </Link>
              <Link to="/subscription" className="nav-btn">Get Pro</Link>
            </>
          )}
          <button className="mobile-toggle" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
