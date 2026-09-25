import { useEffect, useState } from "react";
import { Heart, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { useWishlist } from "../hooks/useWishlist";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { loginPath } from "../utils/redirect";
import ProductCard from "../components/ProductCard";
import LoadError from "../components/LoadError";

export default function Wishlist() {
  useDocumentTitle("Wishlist");
  const { slugs, status, reload } = useWishlist();
  const [catalog, setCatalog] = useState(null);
  const [catalogError, setCatalogError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  // The wishlist API returns slugs only, so the cards need the catalogue.
  useEffect(() => {
    if (status !== "ready" || !slugs.length) return;
    let active = true;
    setCatalogError(false);
    api.products
      .list()
      .then((result) => {
        if (active) setCatalog(result.products || []);
      })
      .catch(() => {
        if (active) setCatalogError(true);
      });
    return () => {
      active = false;
    };
    // Refetch only when the list goes from empty to non-empty or on retry —
    // removing a card filters the catalogue already in hand.
  }, [status, slugs.length > 0, attempt]); // eslint-disable-line react-hooks/exhaustive-deps

  const items = (catalog || []).filter((product) => slugs.includes(product.slug));
  const loading = status === "loading" || (status === "ready" && slugs.length > 0 && !catalog && !catalogError);

  let body;
  if (loading) {
    body = (
      <div className="product-grid" aria-busy="true" aria-label="Loading your wishlist">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="card-skeleton" />
        ))}
      </div>
    );
  } else if (status === "signed-out") {
    body = (
      <div className="empty-state">
        <LogIn size={23} aria-hidden="true" />
        <h3>Sign in to see your wishlist</h3>
        <p>Your saved products are kept with your account.</p>
        <Link to={loginPath("/wishlist")} className="button primary">Sign in</Link>
      </div>
    );
  } else if (status === "error") {
    body = <LoadError title="We couldn't load your wishlist" onRetry={reload} />;
  } else if (catalogError) {
    body = <LoadError title="We couldn't load your saved products" onRetry={() => setAttempt((n) => n + 1)} />;
  } else if (!items.length) {
    body = (
      <div className="empty-state">
        <Heart size={23} aria-hidden="true" />
        <h3>Your wishlist is empty</h3>
        <p>Save a product with the heart button to see it here.</p>
        <Link to="/products" className="button primary">Browse products</Link>
      </div>
    );
  } else {
    body = (
      <div className="product-grid">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    );
  }

  return (
    <main className="simple-page container">
      <span className="eyebrow">YOUR COLLECTION</span>
      <h1>Wishlist</h1>
      <p>Save the pieces you want to revisit.</p>
      {body}
    </main>
  );
}
