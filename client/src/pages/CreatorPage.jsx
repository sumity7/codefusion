import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExternalLink, Github, Globe, Twitter } from "lucide-react";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadError from "../components/LoadError";
import NotFound from "./NotFound";
import { CreatorAvatar } from "./Creators";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function safeUrl(url, prefix = "") {
  if (!url) return "";
  const full = /^https?:\/\//i.test(url) ? url : `${prefix}${url.replace(/^@/, "")}`;
  try {
    const parsed = new URL(full);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : "";
  } catch {
    return "";
  }
}

export default function CreatorPage() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  useDocumentTitle(data?.creator?.name || (status === "not-found" ? "Creator not found" : null));

  useEffect(() => {
    let active = true;
    setStatus("loading");
    api.creators
      .one(slug)
      .then((r) => {
        if (!active) return;
        setData(r);
        setStatus("ready");
      })
      .catch((e) => active && setStatus(e?.status === 404 ? "not-found" : "error"));
    return () => {
      active = false;
    };
  }, [slug, attempt]);

  if (status === "not-found") {
    return <NotFound title="Creator not found" heading={<>That creator isn't<br /><span>in the library.</span></>} message="The link may be mistyped." primary={{ to: "/creators", label: "All creators" }} secondary={{ to: "/products", label: "Browse products" }} />;
  }

  const c = data?.creator;
  const links = c ? [
    { href: safeUrl(c.website), label: "Website", icon: Globe },
    { href: safeUrl(c.github, "https://github.com/"), label: "GitHub", icon: Github },
    { href: safeUrl(c.twitter, "https://x.com/"), label: "X / Twitter", icon: Twitter },
  ].filter((l) => l.href) : [];

  return (
    <main className="simple-page container">
      {status === "error" && <LoadError title="We couldn't load this creator" onRetry={() => setAttempt((n) => n + 1)} />}
      {status === "loading" && <div className="card-skeleton section-skeleton" aria-busy="true" />}
      {status === "ready" && (
        <>
          <header className="creator-head">
            <CreatorAvatar creator={c} size={72} />
            <div>
              <span className="eyebrow">CREATOR</span>
              <h1>{c.name}</h1>
              {c.tagline && <p className="creator-tagline">{c.tagline}</p>}
              <div className="creator-stats">
                <span><b>{data.stats.products}</b> products</span>
                <span><b>{data.stats.copies}</b> copies</span>
              </div>
              {links.length > 0 && (
                <div className="creator-links">
                  {links.map(({ href, label, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="chip-link"><Icon size={13} aria-hidden="true" /> {label} <ExternalLink size={11} aria-hidden="true" /></a>
                  ))}
                </div>
              )}
            </div>
          </header>
          {c.bio && <p className="creator-bio">{c.bio}</p>}
          <div className="product-grid">
            {data.products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </>
      )}
    </main>
  );
}
