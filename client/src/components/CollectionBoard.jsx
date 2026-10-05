import { Link } from "react-router-dom";
import { Image, Star, X } from "lucide-react";
import ProductCard from "./ProductCard";
import { useTheme } from "../hooks/useTheme";
import { thumbnailFor } from "../services/thumbnails";
import { productAccess } from "../utils/product";

// Tile shapes cycle so the board reads as a composed mood board rather than a
// uniform grid; grid-auto-flow: dense fills the gaps.
const SHAPES = ["", "tall", "", "wide", "", "", "tall", "wide", ""];

function Tile({ product, cover, theme, editable, onRemove, onCover, index }) {
  const src = thumbnailFor(product, theme);
  const shape = cover ? "cover" : SHAPES[index % SHAPES.length];
  return (
    <article className={`board-tile ${shape}`}>
      <Link to={`/products/${product.slug}`} className="board-tile-link" aria-label={`${product.name} — ${product.category}`}>
        {src ? (
          <img src={src} alt="" loading="lazy" decoding="async" />
        ) : (
          <div className="board-tile-empty" aria-hidden="true"><Image size={22} /></div>
        )}
        <div className="board-tile-caption">
          <b>{product.name}</b>
          <small>{product.category} · {productAccess(product).label}</small>
        </div>
      </Link>
      {editable && (
        <div className="board-tile-tools">
          <button type="button" className="icon-action" onClick={() => onCover(product.slug)} aria-label={cover ? `${product.name} is the cover` : `Make ${product.name} the cover`} aria-pressed={cover} title={cover ? "Cover" : "Make cover"}>
            <Star size={13} fill={cover ? "currentColor" : "none"} />
          </button>
          <button type="button" className="icon-action danger" onClick={() => onRemove(product.slug)} aria-label={`Remove ${product.name} from collection`} title="Remove">
            <X size={13} />
          </button>
        </div>
      )}
    </article>
  );
}

// The cover product first (or the first product when none is set).
export function orderedForBoard(collection) {
  const products = collection.products || [];
  const cover = products.find((p) => p.slug === collection.coverSlug) || products[0];
  return cover ? [cover, ...products.filter((p) => p !== cover)] : [];
}

export default function CollectionBoard({ collection, editable = false, onRemove, onCover }) {
  const { theme } = useTheme() || {};
  const items = orderedForBoard(collection);
  if (!items.length) {
    return <p className="muted board-empty">This collection is empty. Add products with the “Collect” button on any product page.</p>;
  }
  if (collection.layout === "grid") {
    return (
      <div className="product-grid">
        {items.map((product) => (
          <div className="my-collection-item" key={product.slug}>
            <ProductCard product={product} />
            {editable && (
              <button type="button" className="text-link" onClick={() => onRemove(product.slug)}>Remove from collection</button>
            )}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="board">
      {items.map((product, index) => (
        <Tile key={product.slug} product={product} cover={index === 0} index={index} theme={theme} editable={editable} onRemove={onRemove} onCover={onCover} />
      ))}
    </div>
  );
}

// A 2x2 collage of the first four thumbnails, for collection cover cards.
export function CollectionCover({ collection }) {
  const { theme } = useTheme() || {};
  const items = orderedForBoard(collection).slice(0, 4);
  return (
    <div className={`collection-cover count-${Math.max(1, items.length)}`} aria-hidden="true">
      {items.length ? (
        items.map((product) => {
          const src = thumbnailFor(product, theme);
          return src ? <img key={product.slug} src={src} alt="" loading="lazy" decoding="async" /> : <div key={product.slug} className="board-tile-empty"><Image size={18} /></div>;
        })
      ) : (
        <div className="board-tile-empty"><Image size={22} /></div>
      )}
    </div>
  );
}
