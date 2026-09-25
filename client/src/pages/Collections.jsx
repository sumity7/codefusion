import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search } from "lucide-react";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadError from "../components/LoadError";
import NotFound from "./NotFound";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// "web-development-tools" → "Web Development Tools"
function titleFromSlug(slug) {
  return String(slug || "")
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Collections() {
  const { collection } = useParams();
  const slug = String(collection || "").toLowerCase();
  const [collections, setCollections] = useState(null);
  const [data, setData] = useState([]);
  // "loading" | "ready" | "not-found" | "error"
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  /*
   * The collection has to reach the API for every slug. Previously only free and
   * premium were forwarded, so /collections/new and /collections/trending sent no
   * filter at all and rendered the entire catalogue, while free and premium
   * matched nothing because the stored values are title case.
   *
   * The slug is checked against the active collections first, so a mistyped
   * URL is a 404 rather than an empty-looking real collection.
   */
  useEffect(() => {
    let active = true;
    setStatus("loading");

    const known = collections ? Promise.resolve(collections) : api.products.collections().then((result) => result.collections || []);

    known
      .then(async (list) => {
        if (!active) return;
        setCollections(list);
        if (!list.some((item) => item.slug === slug)) {
          setStatus("not-found");
          return;
        }
        const result = await api.products.list(`?collection=${encodeURIComponent(slug)}`);
        if (!active) return;
        setData(result.products || []);
        setStatus("ready");
      })
      .catch(() => {
        if (active) setStatus("error");
      });

    return () => {
      active = false;
    };
  }, [slug, attempt]); // eslint-disable-line react-hooks/exhaustive-deps

  const current = collections?.find((item) => item.slug === slug);
  const label = current?.name || titleFromSlug(slug);
  useDocumentTitle(status === "not-found" ? "Collection not found" : status === "ready" ? `${label} collection` : null);

  if (status === "not-found") {
    return (
      <NotFound
        title="Collection not found"
        heading={<>That collection isn't<br /><span>on the shelf.</span></>}
        message={`There's no collection called “${titleFromSlug(slug)}”.`}
        primary={{ to: "/products", label: "Back to Products" }}
        secondary={{ to: "/collections/trending", label: "See trending" }}
      />
    );
  }

  return (
    <main className="simple-page container">
      <span className="eyebrow">COLLECTION</span>
      <h1>{label}</h1>
      <p aria-live="polite">
        {status === "loading" ? "Loading products…" : status === "ready" ? `${data.length} ${data.length === 1 ? "product" : "products"} in this collection.` : ""}
      </p>

      {status === "error" && <LoadError title="We couldn't load this collection" onRetry={() => setAttempt((n) => n + 1)} />}

      {status === "loading" && (
        <div className="product-grid" aria-busy="true" aria-label="Loading products">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="card-skeleton" />
          ))}
        </div>
      )}

      {status === "ready" && (
        <div className="product-grid">
          {data.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}

      {status === "ready" && !data.length && (
        <div className="empty-state">
          <Search size={22} aria-hidden="true" />
          <h3>Nothing here yet</h3>
          <p>This collection has no products at the moment.</p>
        </div>
      )}

      {collections?.length > 0 && (
        <nav className="collection-links" aria-label="Collections">
          {collections.map((item) => (
            <Link key={item.slug} to={`/collections/${item.slug}`} aria-current={item.slug === slug ? "page" : undefined}>
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </main>
  );
}
