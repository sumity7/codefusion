import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers } from "lucide-react";
import { api } from "../services/api";
import LoadError from "../components/LoadError";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// Curated packs: hand-picked sets of products for a kind of build.
export default function Packs() {
  useDocumentTitle("Curated packs");
  const [packs, setPacks] = useState([]);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setStatus("loading");
    api.products
      .collections()
      .then((result) => {
        if (!active) return;
        setPacks((result.collections || []).filter((c) => c.kind === "pack" && c.count > 0));
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, [attempt]);

  return (
    <main className="simple-page container">
      <span className="eyebrow">CURATED PACKS</span>
      <h1>Start from a set.</h1>
      <p>Hand-picked groups of products that fit together for a particular kind of build.</p>
      {status === "error" && <LoadError title="We couldn't load packs" onRetry={() => setAttempt((n) => n + 1)} />}
      {status === "loading" && (
        <div className="pack-grid" aria-busy="true">
          {[0, 1, 2].map((i) => <div key={i} className="card-skeleton" />)}
        </div>
      )}
      {status === "ready" && (
        <div className="pack-grid">
          {packs.map((pack) => (
            <Link key={pack.slug} to={`/collections/${pack.slug}`} className="pack-card">
              <Layers size={20} aria-hidden="true" />
              <h2>{pack.name}</h2>
              <p>{pack.description}</p>
              <span>{pack.count} products <ArrowUpRight size={13} aria-hidden="true" /></span>
            </Link>
          ))}
          {!packs.length && <p>No packs yet.</p>}
        </div>
      )}
    </main>
  );
}
