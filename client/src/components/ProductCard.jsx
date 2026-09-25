import { ArrowUpRight, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useWishlist, useWishlistToggle } from "../hooks/useWishlist";
import { productAccess, productRating, reviewCountLabel } from "../utils/product";
import ProductVisual from "./ProductVisual";
import Modal from "./Modal";

export default function ProductCard({ product }) {
  const { isSaved, isPending } = useWishlist();
  const toggleWishlist = useWishlistToggle();
  const [quickOpen, setQuickOpen] = useState(false);
  const saved = isSaved(product.slug);
  const access = productAccess(product);
  const rating = productRating(product);

  function wish(event) {
    event.preventDefault();
    event.stopPropagation();
    toggleWishlist(product.slug);
  }

  return (
    <>
      <article className="p-card">
        <Link to={`/products/${product.slug}`} className="p-card-link">
          <div className="p-media">
            <ProductVisual product={product} mode="listing" />
            <span className="p-hover" aria-hidden="true">
              View product <ArrowUpRight size={14} />
            </span>
          </div>
          <div className="p-body">
            <div>
              <h3>{product.name}</h3>
              <ArrowUpRight size={15} aria-hidden="true" />
            </div>
          </div>
        </Link>
        <button
          type="button"
          className={`wish ${saved ? "saved" : ""}`}
          onClick={wish}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={saved}
          disabled={isPending(product.slug)}
        >
          <Heart size={14} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="quick-view"
          aria-label={`Quick view: ${product.name}`}
          aria-haspopup="dialog"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setQuickOpen(true);
          }}
        >
          <Eye size={13} aria-hidden="true" /> Quick view
        </button>
      </article>
      <Modal open={quickOpen} title={product.name} onClose={() => setQuickOpen(false)} size="medium">
        <div className="quick-modal">
          <div className="quick-preview">
            <ProductVisual product={product} mode="detail" />
          </div>
          <div className="quick-copy">
            <span className="eyebrow">{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="quick-meta">
              <span>{access.label}</span>
              <span>{rating ? `${rating.value} ★ · ${reviewCountLabel(rating.count)}` : "No reviews yet"}</span>
              {product.version && <span>v{product.version}</span>}
            </div>
            <div className="quick-actions">
              <Link className="button primary" to={`/products/${product.slug}`} onClick={() => setQuickOpen(false)}>
                Open product <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <button type="button" className="button ghost" onClick={() => setQuickOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
