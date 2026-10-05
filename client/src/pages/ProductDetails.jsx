import { useCallback, useEffect, useRef, useState } from "react";
import { SlidersHorizontal, ArrowLeft, ArrowRight, Heart, Share2, Monitor, Tablet, Smartphone, Check, Clipboard, FileText, PackageOpen, FolderPlus, Columns2, ShieldCheck, History, Users, Rocket, RefreshCw } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { PRODUCT_MEDIA } from "../utils/viewTransition";

import { api } from "../services/api";
import { track } from "../services/analytics";
import { getCombinedSourceCode } from "../services/combinedSource";
import { useSessionToken } from "../services/session";
import ProductVisual from "../components/ProductVisual";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";
import Modal from "../components/Modal";
import LoadError from "../components/LoadError";
import ExportModal from "../components/ExportModal";
import SaveToCollection from "../components/SaveToCollection";
import ReviewSection from "../components/ReviewSection";
import Playground from "../components/Playground";
import { DEFAULT_TWEAKS, applyTweaks, isCustomized } from "../utils/playground";
import TokenExplainer from "../components/TokenExplainer";
import NotFound from "./NotFound";
import { useToast } from "../components/Toast";
import { useWishlist, useWishlistToggle } from "../hooks/useWishlist";
import { useCompare } from "../hooks/useCompare";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { productAccess } from "../utils/product";

const DEVICES = [
  { key: "desktop", label: "Desktop", icon: Monitor },
  { key: "tablet", label: "Tablet", icon: Tablet },
  { key: "mobile", label: "Mobile", icon: Smartphone },
];

function normalize(remote) {
  const hasPreview = Boolean(remote?.previewCode);
  return {
    ...remote,
    hasPreview: hasPreview || Boolean(remote?.hasPreview),
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

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function ProductDetails() {
  const { slug } = useParams();
  const location = useLocation();
  const signedIn = Boolean(useSessionToken());

  // A card hands over its listing data as route state, so the page renders
  // immediately (and the preview can morph into place) while the full record —
  // features, specs, changelog, stats — loads.
  const handedOver = location.state?.preview?.slug === slug ? location.state.preview : null;
  const [product, setProduct] = useState(() => (handedOver ? normalize(handedOver) : null));
  // "loading" | "ready" | "not-found" | "error"
  const [status, setStatus] = useState(handedOver ? "ready" : "loading");
  const [complete, setComplete] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [device, setDevice] = useState("desktop");
  const [related, setRelated] = useState([]);
  const [copying, setCopying] = useState("");
  const [accessGate, setAccessGate] = useState(null);
  const [exportOpen, setExportOpen] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);
  const [update, setUpdate] = useState(null);
  const [reviewSummary, setReviewSummary] = useState(null);
  // Playground: live colour/scale tweaks, applied to the preview and to
  // whatever is copied or exported. The preview follows after a short pause so
  // dragging a slider doesn't reload the iframe on every step.
  const [tweaks, setTweaks] = useState(DEFAULT_TWEAKS);
  const [previewTweaks, setPreviewTweaks] = useState(DEFAULT_TWEAKS);
  const [playgroundOpen, setPlaygroundOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setPreviewTweaks(tweaks), 180);
    return () => clearTimeout(timer);
  }, [tweaks]);
  useEffect(() => {
    setTweaks(DEFAULT_TWEAKS);
    setPlaygroundOpen(false);
  }, [slug]);

  // Content already paid for (or free) during this visit: { code, prompt }.
  // Copying or exporting it again doesn't go back to the server.
  const [unlocked, setUnlocked] = useState({});

  const { notify } = useToast();
  const { isSaved, isPending } = useWishlist();
  const toggleWishlist = useWishlistToggle();
  const compare = useCompare();

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
    const partial = location.state?.preview?.slug === slug ? location.state.preview : null;
    if (partial) {
      setProduct(normalize(partial));
      setStatus("ready");
    } else {
      setStatus("loading");
    }
    setComplete(false);
    setRelated([]);
    setUnlocked({});
    setUpdate(null);
    unfinishedKeys.current = {};

    api.products
      .one(slug)
      .then((response) => {
        if (!mounted) return;
        const remote = normalize(response.product);
        setProduct(remote);
        setStatus("ready");
        setComplete(true);
        track("product_view", { product: slug });

        if (remote.category) {
          api.products
            .list(`?category=${encodeURIComponent(remote.category)}&limit=4`)
            .then((result) => {
              if (mounted) setRelated((result.products || []).filter((item) => item.slug !== slug).slice(0, 3));
            })
            .catch(() => {});
        }
      })
      .catch((error) => {
        if (mounted) setStatus(error?.status === 404 ? "not-found" : "error");
        if (mounted) setComplete(true);
      });

    return () => {
      mounted = false;
    };
  }, [slug, attempt]); // eslint-disable-line react-hooks/exhaustive-deps

  // "Updated since you copied it" — only meaningful for signed-in users.
  useEffect(() => {
    if (!signedIn || status !== "ready") return;
    let active = true;
    api.products
      .updates()
      .then((result) => {
        if (active) setUpdate((result.updates || []).find((item) => item.slug === slug) || null);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [signedIn, status, slug]);

  // Fetches (and pays for, if needed) one kind of content. Resolves to the
  // content, or null when access was refused (the gate modal is shown).
  const fetchContent = useCallback(
    async (kind) => {
      if (unlocked[kind] !== undefined) return unlocked[kind];
      const key = unfinishedKeys.current[kind] || requestKey();
      unfinishedKeys.current[kind] = key;
      track("copy_attempt", { product: slug, meta: { kind } });
      try {
        const response = await (kind === "code" ? api.products.copyCode(slug, key) : api.products.copyPrompt(slug, key));
        setUnlocked((current) => ({ ...current, [kind]: response.content }));
        if (response.remaining !== null && response.remaining !== undefined) {
          notify(`1 token used · ${response.remaining} remaining`);
        }
        return response.content;
      } catch (error) {
        if (error?.code === "SUBSCRIPTION_REQUIRED" || error?.code === "NO_TOKENS") {
          delete unfinishedKeys.current[kind];
          setAccessGate({ code: error.code, message: error.message });
        } else if (error?.status === 401) {
          delete unfinishedKeys.current[kind];
          setAccessGate({ code: "SIGN_IN", message: "Sign in to copy source code and prompts. Free products just need a free account." });
        } else {
          notify({ message: error?.message || "Unable to copy.", tone: "error" });
        }
        return null;
      }
    },
    [slug, notify, unlocked]
  );

  const copy = useCallback(
    async (kind) => {
      if (copyLock.current) return;
      copyLock.current = true;
      setCopying(kind);
      try {
        const content = await fetchContent(kind);
        if (content === null) return;
        const text = kind === "code" ? applyTweaks(getCombinedSourceCode({ ...product, code: content }), tweaks) : content;
        try {
          await navigator.clipboard.writeText(text || "");
        } catch {
          notify({ message: "Your browser blocked clipboard access. Try again — you won't be charged twice.", tone: "error" });
          return;
        }
        delete unfinishedKeys.current[kind];
        notify(`${kind === "code" ? (isCustomized(tweaks) ? "Customised code" : "Code") : "Prompt"} copied to clipboard.`);
      } finally {
        copyLock.current = false;
        setCopying("");
      }
    },
    [fetchContent, notify, product, tweaks]
  );

  async function unlockForExport() {
    if (copyLock.current) return;
    copyLock.current = true;
    setCopying("export");
    try {
      const content = await fetchContent("code");
      if (content !== null) delete unfinishedKeys.current.code;
      else setExportOpen(false);
    } finally {
      copyLock.current = false;
      setCopying("");
    }
  }

  function openExport() {
    setExportOpen(true);
    track("export_open", { product: slug });
  }

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

  async function dismissUpdate() {
    setUpdate(null);
    api.products.markUpdateSeen(slug).catch(() => {});
  }

  if (status === "loading") {
    return (
      <main className="product-loading" aria-busy="true">
        <div className="product-loading-shell">
          <div className="loading-line large" />
          <div className="loading-line" />
          <div className="loading-preview" style={{ viewTransitionName: PRODUCT_MEDIA }} />
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
  const saved = isSaved(slug);
  const savePending = isPending(slug);
  const busy = Boolean(copying);
  const features = product.features || [];
  const compatibility = product.compatibility || [];
  const changelog = product.changelog || [];
  // Dated release history (newest first); older records fall back to the changelog.
  const releases = [...(product.releases || [])].reverse();
  const stats = product.stats || {};
  const production = reviewSummary?.productionCount || 0;
  const comparing = compare.has(slug);
  const unlockedCode = unlocked.code !== undefined;
  const previewProduct = isCustomized(previewTweaks) && product.previewCode ? { ...product, previewCode: applyTweaks(product.previewCode, previewTweaks) } : product;
  // Exports carry the customisation as one combined document.
  const exportContent = unlocked.code && isCustomized(tweaks) ? { html: applyTweaks(getCombinedSourceCode({ ...product, code: unlocked.code }), tweaks), css: "", javascript: "" } : unlocked.code;

  const copyLabel = (kind, idle) => (copying === kind ? "Copying…" : idle);

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

        {update && (
          <div className="update-banner" role="status">
            <RefreshCw size={14} aria-hidden="true" />
            <span>
              Updated since you copied it: <b>v{update.copiedVersion}</b> → <b>v{update.currentVersion}</b>. Copy again to get the latest.
            </span>
            <a href="#version-history">What changed</a>
            <button type="button" onClick={dismissUpdate}>Dismiss</button>
          </div>
        )}

        <div className="details-title">
          <div>
            <div className="chips">
              {product.badge && <span>{product.badge}</span>}
              {(product.discoveryTags || []).slice(0, 6).map((tag) => (
                <Link key={tag} to={`/products?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
              ))}
            </div>

            <h1>{product.name}</h1>
            {product.creator?.slug && (
              <Link to={`/creators/${product.creator.slug}`} className="creator-credit">
                by <b>{product.creator.name}</b>
              </Link>
            )}
            <p>{product.description}</p>

            {compatibility.length > 0 && (
              <ul className="compat-badges" aria-label="Compatibility">
                {compatibility.map((item) => (
                  <li key={item}><Check size={11} aria-hidden="true" /> {item}</li>
                ))}
              </ul>
            )}

            <div className="proof-row">
              {stats.copiers > 0 ? (
                <span><Users size={13} aria-hidden="true" /> Copied by {stats.copiers} {stats.copiers === 1 ? "builder" : "builders"}</span>
              ) : (
                <span><Users size={13} aria-hidden="true" /> New — be one of the first to use it</span>
              )}
              {production > 0 && <span><Rocket size={13} aria-hidden="true" /> {production} in production</span>}
              {product.isVerified && <span><ShieldCheck size={13} aria-hidden="true" /> CodeFusion verified</span>}
            </div>
          </div>

          <div className="detail-cta">
            <div className={`access-badge ${access.free ? "free" : "pro"}`}>
              <strong>{access.label}</strong>
              <span>{unlockedCode ? "Unlocked for this visit — copy and export freely" : access.detail}</span>
            </div>

            <div className="detail-actions">
              <button type="button" onClick={() => toggleWishlist(slug)} className={saved ? "saved" : ""} aria-pressed={saved} aria-label={saved ? "Remove from wishlist" : "Save to wishlist"} disabled={savePending}>
                <Heart size={15} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
                {saved ? "Saved" : "Save"}
              </button>

              <button type="button" onClick={() => setSaveOpen(true)}>
                <FolderPlus size={15} aria-hidden="true" />
                Collect
              </button>

              <button type="button" onClick={() => compare.toggle(product)} aria-pressed={comparing}>
                <Columns2 size={15} aria-hidden="true" />
                {comparing ? "Comparing" : "Compare"}
              </button>

              <button type="button" onClick={share}>
                <Share2 size={15} aria-hidden="true" />
                Share
              </button>

              <button type="button" className="button primary" onClick={() => copy("code")} disabled={busy} aria-busy={copying === "code"}>
                <Clipboard size={15} aria-hidden="true" />
                {copyLabel("code", "Copy All Code")}
              </button>

              {product.hasPrompt !== false && (
                <button type="button" className="button ghost" onClick={() => copy("prompt")} disabled={busy} aria-busy={copying === "prompt"}>
                  <FileText size={15} aria-hidden="true" />
                  {copyLabel("prompt", "Copy Prompt")}
                </button>
              )}

              <button type="button" className="button ghost" onClick={openExport} disabled={busy}>
                <PackageOpen size={15} aria-hidden="true" />
                Export…
              </button>
            </div>

            <p className="license-line">
              <ShieldCheck size={12} aria-hidden="true" />
              <span>
                License: <b>{product.license || "Personal & commercial use"}</b> · v{product.version || "1.0.0"}
                {product.lastUpdated ? ` · updated ${formatDate(product.lastUpdated)}` : ""}
              </span>
              <Link to="/resources/license">Terms</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="container product-showcase">
        <div className="preview-frame" style={{ viewTransitionName: PRODUCT_MEDIA }}>
          <div className="preview-toolbar">
            <div className="preview-device-switcher" role="group" aria-label="Preview size">
              {DEVICES.map(({ key, label, icon: Icon }) => (
                <button key={key} type="button" className={device === key ? "active" : ""} aria-pressed={device === key} onClick={() => setDevice(key)}>
                  <Icon size={13} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
            <div className="preview-toolbar-end">
              <span>{isCustomized(tweaks) ? "Customised preview" : "Live product preview"}</span>
              {complete && product.previewCode && (
                <button type="button" className={playgroundOpen ? "active" : ""} aria-pressed={playgroundOpen} onClick={() => setPlaygroundOpen((v) => !v)}>
                  <SlidersHorizontal size={13} aria-hidden="true" /> Customize
                </button>
              )}
            </div>
          </div>

          <div className={`preview-body${playgroundOpen ? " with-playground" : ""}`}>
            <div className={`preview-canvas ${device}`}>
              <ProductVisual product={previewProduct} mode="detail" />
            </div>
            {playgroundOpen && (
              <Playground source={product.previewCode} tweaks={tweaks} onChange={setTweaks} onClose={() => setPlaygroundOpen(false)} />
            )}
          </div>
        </div>
      </section>

      {!complete && (
        <section className="container detail-grid" aria-busy="true">
          <div className="card-skeleton section-skeleton" />
          <div className="card-skeleton section-skeleton" />
        </section>
      )}

      {complete && <>
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
            <div>
              <span>License</span>
              <strong>{product.license || "Personal & commercial use"}</strong>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal className="container">
        <section className="version-history" id="version-history" aria-labelledby="version-title">
          <div className="section-head">
            <div>
              <span className="eyebrow">VERSION HISTORY</span>
              <h2 id="version-title">v{product.version || "1.0.0"}</h2>
            </div>
            {product.lastUpdated && <small><History size={13} aria-hidden="true" /> Last updated {formatDate(product.lastUpdated)}</small>}
          </div>
          {releases.length ? (
            <ol>
              {releases.map((release, index) => (
                <li key={`${release.version}-${index}`} className={index === 0 ? "latest" : ""}>
                  <div className="release-line">
                    <b>v{release.version}</b>
                    {index === 0 && <span className="release-kind update">Latest</span>}
                    <small>{formatDate(release.date)}</small>
                  </div>
                  {release.notes?.length > 0 && (
                    <ul>
                      {release.notes.map((note) => <li key={note}>{note}</li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          ) : changelog.length ? (
            <ol>
              {[...changelog].reverse().map((entry, index) => (
                <li key={`${index}-${entry}`} className={index === 0 ? "latest" : ""}>
                  <span>{entry}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p>No changes recorded yet.</p>
          )}
          <p className="version-note">
            {signedIn
              ? "When a product you've copied gets a new version, it's flagged here and on your Account page, and we email you (you can turn that off in Account settings)."
              : "Sign in and copy a product to be told when it gets a new version."}
          </p>
        </section>
      </ScrollReveal>

      </>}

      <ScrollReveal className="container">
        <ReviewSection product={product} onSummary={setReviewSummary} />
      </ScrollReveal>

      <section className="container code-wrap">
        <div className="access-panel">
          {access.free ? (
            <>
              <span className="eyebrow">FREE PRODUCT</span>
              <h2>Free to copy</h2>
              <p>Copy the complete source and prompt, download a ZIP or export to React, Next.js or Vue — no tokens needed.</p>
            </>
          ) : (
            <>
              <span className="eyebrow">CODEFUSION PRO ACCESS</span>
              <h2>Included with CodeFusion Pro</h2>
              <p>1 token unlocks this product's source for your visit — then copy, download and export in any format.</p>
            </>
          )}
          <div className="modal-actions">
            <button className="button primary copy-code-btn" onClick={() => copy("code")} disabled={busy} aria-busy={copying === "code"}>
              <Clipboard size={15} aria-hidden="true" />
              {copyLabel("code", "Copy All Code")}
            </button>
            {product.hasPrompt !== false && (
              <button className="button ghost copy-prompt-btn" onClick={() => copy("prompt")} disabled={busy} aria-busy={copying === "prompt"}>
                <FileText size={15} aria-hidden="true" />
                {copyLabel("prompt", "Copy Prompt")}
              </button>
            )}
            <button className="button ghost" onClick={openExport} disabled={busy}>
              <PackageOpen size={15} aria-hidden="true" />
              Export…
            </button>
          </div>
          <details className="token-details">
            <summary>How tokens work</summary>
            <TokenExplainer compact />
          </details>
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

      <ExportModal
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        product={product}
        content={exportContent}
        access={access}
        unlocking={copying === "export"}
        onUnlock={unlockForExport}
      />

      <SaveToCollection product={product} open={saveOpen} onClose={() => setSaveOpen(false)} />

      <Modal
        open={Boolean(accessGate)}
        title={accessGate?.code === "NO_TOKENS" ? "You're out of tokens" : accessGate?.code === "SIGN_IN" ? "Sign in to copy" : "Subscription required"}
        onClose={() => setAccessGate(null)}
        size="small"
      >
        <p>{accessGate?.message}</p>
        {accessGate?.code !== "SIGN_IN" && <TokenExplainer compact />}
        <div className="modal-actions">
          {accessGate?.code === "SIGN_IN" ? (
            <Link to={`/login?next=${encodeURIComponent(`/products/${slug}`)}`} className="button primary" onClick={() => setAccessGate(null)}>
              Sign in
            </Link>
          ) : (
            <Link to="/subscription" className="button primary" onClick={() => setAccessGate(null)}>
              {accessGate?.code === "NO_TOKENS" ? "View Subscription" : "See plans"}
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
