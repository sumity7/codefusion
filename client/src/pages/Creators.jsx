import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { thumbnailFor } from "../services/thumbnails";
import { useTheme } from "../hooks/useTheme";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import LoadError from "../components/LoadError";

export function CreatorAvatar({ creator, size = 48 }) {
  const initials = String(creator?.name || "?").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return creator?.avatarUrl ? (
    <img className="creator-avatar" src={creator.avatarUrl} alt="" width={size} height={size} style={{ width: size, height: size }} />
  ) : (
    <span className="creator-avatar" style={{ width: size, height: size, fontSize: Math.round(size * 0.36) }} aria-hidden="true">{initials}</span>
  );
}

export default function Creators() {
  useDocumentTitle("Creators");
  const { theme } = useTheme() || {};
  const [creators, setCreators] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setError(false);
    api.creators
      .list()
      .then((r) => active && setCreators(r.creators || []))
      .catch(() => active && setError(true));
    return () => {
      active = false;
    };
  }, [attempt]);

  return (
    <main className="simple-page container">
      <span className="eyebrow">CREATORS</span>
      <h1>The people behind the library.</h1>
      <p>Every product is credited to the studio or person who designed and built it.</p>
      {error && <LoadError title="We couldn't load creators" onRetry={() => setAttempt((n) => n + 1)} />}
      {!creators && !error && <div className="creator-grid" aria-busy="true">{[0, 1, 2].map((i) => <div key={i} className="card-skeleton" />)}</div>}
      {creators && (
        <div className="creator-grid">
          {creators.map((creator) => (
            <Link key={creator.slug} to={`/creators/${creator.slug}`} className="creator-card">
              <div className="creator-card-covers" aria-hidden="true">
                {creator.covers.map((c) => {
                  const src = thumbnailFor(c, theme);
                  return src ? <img key={c.slug} src={src} alt="" loading="lazy" /> : <span key={c.slug} />;
                })}
              </div>
              <div className="creator-card-body">
                <CreatorAvatar creator={creator} size={44} />
                <div>
                  <b>{creator.name}</b>
                  <small>{creator.productCount} {creator.productCount === 1 ? "product" : "products"}</small>
                </div>
              </div>
              {creator.tagline && <p>{creator.tagline}</p>}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
