import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadError from "../components/LoadError";
import NotFound from "./NotFound";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// Read-only view of a collection someone shared by link.
export default function SharedCollection() {
  const { shareId } = useParams();
  const [collection, setCollection] = useState(null);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  useDocumentTitle(status === "ready" ? collection.name : status === "not-found" ? "Collection not found" : null);

  useEffect(() => {
    let active = true;
    setStatus("loading");
    api.collections
      .shared(shareId)
      .then((result) => {
        if (!active) return;
        setCollection(result.collection);
        setStatus("ready");
      })
      .catch((error) => active && setStatus(error?.status === 404 ? "not-found" : "error"));
    return () => {
      active = false;
    };
  }, [shareId, attempt]);

  if (status === "not-found") {
    return (
      <NotFound
        title="Collection not found"
        heading={<>That collection isn't<br /><span>shared anymore.</span></>}
        message="The link may be mistyped, or its owner made the collection private."
        primary={{ to: "/products", label: "Browse products" }}
        secondary={{ to: "/packs", label: "See curated packs" }}
      />
    );
  }

  return (
    <main className="simple-page container">
      <span className="eyebrow">SHARED COLLECTION</span>
      <h1>{status === "ready" ? collection.name : "Loading…"}</h1>
      {status === "ready" && (
        <p>
          Curated by {collection.owner} · {collection.products.length} {collection.products.length === 1 ? "product" : "products"}
          {collection.description ? ` — ${collection.description}` : ""}
        </p>
      )}
      {status === "error" && <LoadError title="We couldn't load this collection" onRetry={() => setAttempt((n) => n + 1)} />}
      {status === "ready" && (
        <div className="product-grid">
          {collection.products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      )}
    </main>
  );
}
