import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Share2, Monitor, Tablet, Smartphone, Check, Clipboard, FileText, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { api } from "../services/api";
import ProductVisual from "../components/ProductVisual";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";
import Modal from "../components/Modal";
import LoadError from "../components/LoadError";
import NotFound from "./NotFound";
import { useToast } from "../components/Toast";
import { useWishlist, useWishlistToggle } from "../hooks/useWishlist";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { productAccess, productRating, reviewCountLabel } from "../utils/product";

const DEVICES = [
  { key: "desktop", label: "Desktop", icon: Monitor },
  { key: "tablet", label: "Tablet", icon: Tablet },
  { key: "mobile", label: "Mobile", icon: Smartphone },
];

function normalize(remote) {
  const hasPreview = Boolean(remote?.previewCode);
  return {
    ...remote,
    productType: remote?.productType || remote?.product_type || "FREE",
    previewMode: hasPreview ? "source" : remote?.previewMode,
    previewCode: remote?.previewCode || "",
    code: {
      html: remote?.code?.html || "",
      css: remote?.code?.css || "",
      javascript: remote?.code?.javascript || "",
    },
  };
}

function requestKey() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

export default function ProductDetails() {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  // "loading" | "ready" | "not-found" | "error"
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const [device, setDevice] = useState("desktop");
  const [reviews, setReviews] = useState([]);
  const [related, setRelated] = useState([]);
  const [copying, setCopying] = useState("");
  const [accessGate, setAccessGate] = useState(null);

  const { notify } = useToast();
  const { isSaved, isPending } = useWishlist();
  const toggleWishlist = useWishlistToggle();

  /*
   * Each copy spends a token, so a second click while the first request is in
   * flight must not reach the API. The ref closes that window synchronously —
   * `copying` state alone only takes effect after the next render.
   */
  const copyLock = useRef(false);
  // If the clipboard write fails after the server has already charged, the
  // next attempt reuses the same key and the server hands the content back free.
  const unfinishedKeys = useRef({});

  useDocumentTitle(status === "ready" ? product?.name : status === "not-found" ? "Product not found" : null);

  useEffect(() => {
    let mounted = true;
    setStatus("loading");
    setRelated([]);
    unfinishedKeys.current = {};

    api.products
      .one(slug)
      .then((response) => {
        if (!mounted) return;
        const remote = normalize(response.product);
        setProduct(remote);
        setStatus("ready");

        if (remote.category) {
          api.products
            .list(`?category=${encodeURIComponent(remote.category)}`)
            .then((result) => {
              if (mounted) setRelated((result.products || []).filter((item) => item.slug !== slug).slice(0, 3));
            })
            .catch(() => {});
        }
      })
      .catch((error) => {
        if (mounted) setStatus(error?.status === 404 ? "not-found" : "error");
      });

    api.reviews
      .list(slug)
      .then((response) => {
        if (mounted) setReviews(response.reviews || []);
      })
      .catch(() => {
        if (mounted) setReviews([]);
      });

    return () => {
      mounted = false;
    };
  }, [slug, attempt]);

  const copy = useCallback(
    async (kind) => {
      if (copyLock.current) return;
      copyLock.current = true;
      setCopying(kind);

      const key = unfinishedKeys.current[kind] || requestKey();
      unfinishedKeys.current[kind] = key;

      try {
        const response = await (kind === "code" ? api.products.copyCode(slug, key) : api.products.copyPrompt(slug, key));
        const text =
          kind === "code"
            ? [response.content?.html, response.content?.css, response.content?.javascript].filter(Boolean).join("\n")
            : response.content;

        try {
          await navigator.clipboard.writeText(text || "");
        } catch {
          notify({ message: "Your browser blocked clipboard access. Try again — you won't be charged twice.", tone: "error" });
          return;
        }

        delete unfinishedKeys.current[kind];
        const label = kind === "code" ? "Code" : "Prompt";
        notify(
          response.remaining === null || response.remaining === undefined
            ? `${label} copied to clipboard.`
            : `${label} copied to clipboard · 1 token used · ${response.remaining} remaining`
        );
      } catch (error) {
        if (error?.code === "SUBSCRIPTION_REQUIRED" || error?.code === "NO_TOKENS") {
          delete unfinishedKeys.current[kind];
          setAccessGate({ code: error.code, message: error.message });
        } else if (error?.status === 401) {
          delete unfinishedKeys.current[kind];
          setAccessGate({ code: "SIGN_IN", message: "Sign in to copy source code and prompts." });
        } else {
          notify({ message: error?.message || "Unable to copy.", tone: "error" });
        }
      } finally {
        copyLock.current = false;
        setCopying("");
      }
    },
    [slug, notify]
  );

  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: product.name, text: product.description, url: window.location.href });
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      notify("Link copied to clipboard.");
    } catch (error) {
      // Closing the native share sheet rejects with AbortError — not a failure.
      if (error?.name !== "AbortError") notify({ message: "Unable to share this link.", tone: "error" });
    }
  }

  if (status === "loading") {
    return (
      <main className="product-loading" aria-busy="true">
        <div className="product-loading-shell">
          <div className="loading-line large" />
          <div className="loading-line" />
          <div className="loading-preview" />
        </div>
        <span className="visually-hidden">Loading product…</span>
      </main>
    );
  }

  if (status === "not-found") {
    return (
      <NotFound
        title="Product not found"
        heading={<>That product isn't<br /><span>in the collection.</span></>}
        message="It may have been renamed or removed, or the link is mistyped."
        primary={{ to: "/products", label: "Back to Products" }}
        secondary={{ to: "/", label: "Go home" }}
      />
    );
  }

  if (status === "error") {
    return (
      <main className="container simple-page">
        <LoadError title="We couldn't load this product" onRetry={() => setAttempt((n) => n + 1)} />
      </main>
    );
  }

  const access = productAccess(product);
  const rating = productRating(product);
  const saved = isSaved(slug);
  const savePending = isPending(slug);
  const busy = Boolean(copying);
  const features = product.features || [];

  return (
    <main>
      <section className="container details-head">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/products">
            <ArrowLeft size={13} aria-hidden="true" />
            Products
          </Link>
          <span aria-hidden="true">/</span>
          {product.category ? (
            <Link to={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</Link>
          ) : null}
        </nav>

        <div className="details-title">
          <div>
            <div className="chips">
              {product.badge && <span>{product.badge}</span>}
              {(product.tags || []).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>

          <div className="detail-cta">
            <div className={`access-badge ${access.free ? "free" : "pro"}`}>
              <strong>{access.label}</strong>
              <span>{access.detail}</span>
            </div>

            <div className="detail-actions">
              <button
                type="button"
                onClick={() => toggleWishlist(slug)}
                className={saved ? "saved" : ""}
                aria-pressed={saved}
                aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
                disabled={savePending}
              >
                <Heart size={15} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
                {saved ? "Saved" : "Save"}
              </button>

              <button type="button" onClick={share}>
                <Share2 size={15} aria-hidden="true" />
                Share
              </button>

              <button type="button" className="button primary" onClick={() => copy("code")} disabled={busy} aria-busy={copying === "code"}>
                <Clipboard size={15} aria-hidden="true" />
                {copying === "code" ? "Copying…" : "Copy All Code"}
              </button>

              {product.hasPrompt !== false && (
                <button type="button" className="button ghost" onClick={() => copy("prompt")} disabled={busy} aria-busy={copying === "prompt"}>
                  <FileText size={15} aria-hidden="true" />
                  {copying === "prompt" ? "Copying…" : "Copy Prompt"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container product-showcase">
        <div className="preview-frame">
          <div className="preview-toolbar">
            <div className="preview-device-switcher" role="group" aria-label="Preview size">
              {DEVICES.map(({ key, label, icon: Icon }) => (
                <button key={key} type="button" className={device === key ? "active" : ""} aria-pressed={device === key} onClick={() => setDevice(key)}>
                  <Icon size={13} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
            <span>Live product preview</span>
          </div>

          <div className={`preview-canvas ${device}`}>
            <ProductVisual product={product} mode="detail" />
          </div>
        </div>
      </section>

      <section className="container detail-grid">
        <ScrollReveal>
          <div>
            <span className="eyebrow">OVERVIEW</span>
            <h2>A finished interface, ready for your workflow.</h2>
            <p>
              {product.description} Built around practical responsive behavior and a clear source structure.
            </p>
            {features.length > 0 && (
              <div className="check-grid">
                {features.map((feature) => (
                  <div key={feature}>
                    <Check size={13} aria-hidden="true" />
                    {feature}
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="spec-panel">
            {(product.specifications || []).map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal className="container">
        <section className="review-area">
          <div className="section-head">
            <div>
              <span className="eyebrow">REVIEWS</span>
              <h2>What builders are saying.</h2>
            </div>
            {rating ? (
              <b aria-label={`Rated ${rating.value} out of 5 from ${reviewCountLabel(rating.count)}`}>
                {rating.value} <Star size={14} fill="currentColor" aria-hidden="true" /> <small>{reviewCountLabel(rating.count)}</small>
              </b>
            ) : (
              <b className="no-rating">No reviews yet</b>
            )}
          </div>

          <div className="review-grid">
            {reviews.length ? (
              reviews.map((review) => (
                <article key={review._id}>
                  <strong>{review.user?.name || "Builder"}</strong>
                  {review.rating ? <span aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(review.rating)}</span> : null}
                  <p>{review.body}</p>
                </article>
              ))
            ) : (
              <article>
                <strong>Be the first reviewer.</strong>
                <p>Build with it and share your feedback.</p>
              </article>
            )}
          </div>
        </section>
      </ScrollReveal>

      <section className="container code-wrap">
        <div className="access-panel">
          {access.free ? (
            <>
              <span className="eyebrow">FREE PRODUCT</span>
              <h2>Free to copy</h2>
              <p>Copy the complete source and prompt without spending any tokens.</p>
            </>
          ) : (
            <>
              <span className="eyebrow">CODEFUSION PRO ACCESS</span>
              <h2>Included with CodeFusion Pro</h2>
              <p>Source code and premium prompts are delivered securely after spending 1 token per copy.</p>
            </>
          )}
          <div className="modal-actions">
            <button className="button primary copy-code-btn" onClick={() => copy("code")} disabled={busy} aria-busy={copying === "code"}>
              <Clipboard size={15} aria-hidden="true" />
              {copying === "code" ? "Copying…" : "Copy All Code"}
            </button>
            {product.hasPrompt !== false && (
              <button className="button ghost copy-prompt-btn" onClick={() => copy("prompt")} disabled={busy} aria-busy={copying === "prompt"}>
                <FileText size={15} aria-hidden="true" />
                {copying === "prompt" ? "Copying…" : "Copy Prompt"}
              </button>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container related">
          <div className="section-head">
            <div>
              <span className="eyebrow">KEEP EXPLORING</span>
              <h2>More products.</h2>
            </div>
            <Link to="/products" className="text-link">
              View collection
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="product-grid">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      )}

      <Modal
        open={Boolean(accessGate)}
        title={accessGate?.code === "NO_TOKENS" ? "You're out of tokens" : accessGate?.code === "SIGN_IN" ? "Sign in to copy" : "Subscription required"}
        onClose={() => setAccessGate(null)}
        size="small"
      >
        <p>{accessGate?.message}</p>
        <div className="modal-actions">
          {accessGate?.code === "SIGN_IN" ? (
            <Link to={`/login?next=${encodeURIComponent(`/products/${slug}`)}`} className="button primary" onClick={() => setAccessGate(null)}>
              Sign in
            </Link>
          ) : (
            <Link to="/subscription" className="button primary" onClick={() => setAccessGate(null)}>
              {accessGate?.code === "NO_TOKENS" ? "View Subscription" : "Subscribe Now"}
            </Link>
          )}
          <button type="button" className="button ghost" onClick={() => setAccessGate(null)}>
            Close
          </button>
        </div>
      </Modal>
    </main>
  );
}
