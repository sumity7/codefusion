import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Columns2 } from "lucide-react";
import { api } from "../services/api";
import { track } from "../services/analytics";
import ProductVisual from "../components/ProductVisual";
import LoadError from "../components/LoadError";
import { useCompare } from "../hooks/useCompare";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { productAccess, productRating, reviewCountLabel } from "../utils/product";

function Row({ label, a, b }) {
  return (
    <tr>
      <th scope="row">{label}</th>
      <td>{a}</td>
      <td>{b}</td>
    </tr>
  );
}

const list = (items) => (items?.length ? <ul className="compare-list">{items.map((x) => <li key={x}>{x}</li>)}</ul> : <span className="muted">—</span>);

// Two products side by side: live previews on top, then every attribute that
// helps choose between them.
export default function Compare() {
  const [params] = useSearchParams();
  const slugs = [params.get("a"), params.get("b")].filter(Boolean);
  const { clear } = useCompare();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  useDocumentTitle(products.length === 2 ? `${products[0].name} vs ${products[1].name}` : "Compare");

  useEffect(() => {
    if (slugs.length !== 2) {
      setStatus("empty");
      return;
    }
    let active = true;
    setStatus("loading");
    Promise.all(slugs.map((slug) => api.products.one(slug).then((r) => r.product)))
      .then((result) => {
        if (!active) return;
        setProducts(result);
        setStatus("ready");
        track("compare_view", { meta: { a: slugs[0], b: slugs[1] } });
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, [slugs.join(","), attempt]); // eslint-disable-line react-hooks/exhaustive-deps

  if (status === "empty") {
    return (
      <main className="simple-page container">
        <span className="eyebrow">COMPARE</span>
        <h1>Compare two products.</h1>
        <p>Use the <Columns2 size={13} aria-hidden="true" /> button on any product card or product page to pick two, then open the comparison from the bar at the bottom of the screen.</p>
        <Link to="/products" className="button primary">Browse products</Link>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="simple-page container">
        <LoadError title="We couldn't load these products" onRetry={() => setAttempt((n) => n + 1)} />
      </main>
    );
  }

  if (status === "loading") {
    return (
      <main className="simple-page container" aria-busy="true">
        <span className="eyebrow">COMPARE</span>
        <h1>Loading comparison…</h1>
        <div className="compare-previews">
          <div className="card-skeleton" />
          <div className="card-skeleton" />
        </div>
      </main>
    );
  }

  const [a, b] = products;
  const access = (p) => productAccess(p).label;
  const rating = (p) => {
    const r = productRating(p);
    return r ? `${r.value} ★ · ${reviewCountLabel(r.count)}` : "No reviews yet";
  };

  return (
    <main className="simple-page container compare-page">
      <span className="eyebrow">COMPARE</span>
      <h1>
        {a.name} <span>vs</span> {b.name}
      </h1>
      <div className="compare-previews">
        {[a, b].map((p) => (
          <article key={p.slug}>
            <div className="compare-preview">
              <ProductVisual product={p} mode="detail" />
            </div>
            <Link to={`/products/${p.slug}`} className="text-link">
              Open {p.name} <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col"><span className="visually-hidden">Attribute</span></th>
              <th scope="col">{a.name}</th>
              <th scope="col">{b.name}</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Category" a={a.category} b={b.category} />
            <Row label="Access" a={access(a)} b={access(b)} />
            <Row label="Rating" a={rating(a)} b={rating(b)} />
            <Row label="Used by" a={`${a.stats?.copiers || 0} builders`} b={`${b.stats?.copiers || 0} builders`} />
            <Row label="Version" a={`v${a.version || "1.0.0"}`} b={`v${b.version || "1.0.0"}`} />
            <Row label="Compatibility" a={list(a.compatibility)} b={list(b.compatibility)} />
            <Row label="Tags" a={list(a.discoveryTags)} b={list(b.discoveryTags)} />
            <Row label="Features" a={list(a.features)} b={list(b.features)} />
            <Row label="License" a={a.license} b={b.license} />
          </tbody>
        </table>
      </div>
      <button type="button" className="button ghost" onClick={clear}>Clear comparison</button>
    </main>
  );
}
