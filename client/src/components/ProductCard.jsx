import { ArrowUpRight, Heart, Eye, Columns2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useWishlist, useWishlistToggle } from "../hooks/useWishlist";
import { useCompare } from "../hooks/useCompare";
import { productAccess, productRating, reviewCountLabel } from "../utils/product";
import ProductVisual from "./ProductVisual";
import Modal from "./Modal";
import { isPlainClick, navigateWithTransition } from "../utils/viewTransition";

export default function ProductCard({ product }) {
  const { isSaved, isPending } = useWishlist();
  const toggleWishlist = useWishlistToggle();
  const [quickOpen, setQuickOpen] = useState(false);
  const compare = useCompare();
  const comparing = compare.has(product.slug);
  const navigate = useNavigate();
  const mediaRef = useRef(null);
  const href = `/products/${product.slug}`;

  // The card's preview morphs into the product page's preview. The listing data
  // travels along as route state so the product page can render at once.
  function open(event) {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    navigateWithTransition(navigate, href, { state: { preview: product } }, mediaRef.current);
  }
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
        <Link to={href} state={{ preview: product }} className="p-card-link" onClick={open}>
          <div className="p-media" ref={mediaRef}>
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
            <div className="p-meta">
              <span className={access.free ? "free" : "pro"}>{access.label}</span>
              {(product.discoveryTags || []).filter((tag) => !/^(Dark|Light) UI$/.test(tag)).slice(0, 2).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
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
        <button
          type="button"
          className={`card-compare${comparing ? " on" : ""}`}
          aria-pressed={comparing}
          aria-label={comparing ? `Remove ${product.name} from comparison` : `Compare ${product.name}`}
          title={comparing ? "Remove from comparison" : "Compare"}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            compare.toggle(product);
          }}
        >
          <Columns2 size={13} aria-hidden="true" />
        </button>
      </article>
      <Modal open={quickOpen} title={product.name} onClose={() => setQuickOpen(false)} size="medium">
        <div className="quick-modal">
          <div className="quick-preview">
            {/* Static here too: the live preview is on the product page. */}
            <ProductVisual product={product} mode="listing" />
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
            {product.compatibility?.length > 0 && (
              <ul className="compat-badges small" aria-label="Compatibility">
                {product.compatibility.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
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
