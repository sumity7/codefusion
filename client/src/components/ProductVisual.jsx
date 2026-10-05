import { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { api } from "../services/api";
import { trackOnce } from "../services/analytics";
import { thumbnailFor } from "../services/thumbnails";

import {
  PREVIEW_DESIGN_WIDTH,
  buildPreviewSource,
  hasSourceCode,
  isFullPagePreview,
} from "../services/previewSource";

export function SourcePreview({
  product,
  mode = "detail",
}) {
  const { theme } = useTheme() || {};

  const frameRef = useRef(null);
  const wrapRef = useRef(null);
  // Card listing keeps the iframe pointer-events:none by default (see the
  // CSS comment on .p-media .source-preview-frame) so it doesn't swallow
  // the click that should navigate the card. While the card is actively
  // hovered, real pointer events are let through instead — this is what
  // makes each product's own :hover CSS and mousemove-tracked effects
  // (cursor glow, magnetic pull, etc.) actually run inside the preview,
  // rather than only approximating them from outside the sandbox.
  const [hovering, setHovering] = useState(false);

  const source =
    buildPreviewSource(
      product,
      mode,
      theme
    );

  const listing = mode === "listing";

  const scaled = listing && isFullPagePreview(product);

  useEffect(() => {
    if (!scaled) return;

    const wrap = wrapRef.current;
    const frame = frameRef.current;
    if (!wrap || !frame) return;

    function fit() {
      // clientWidth/Height: the frame's own layout box, unaffected by the
      // transform applied below.
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      if (!width || !height) return;

      const scale = width / PREVIEW_DESIGN_WIDTH;

      // Taking the frame out of flow is what makes this safe to run from a
      // ResizeObserver. Left in flow, a wrapper whose own height is content-driven
      // grows to fit the tall frame, which resizes the wrapper, which enlarges the
      // frame again — the page reached the browser's 33.5M px layout ceiling.
      frame.style.position = "absolute";
      frame.style.top = "0";
      frame.style.left = "0";
      frame.style.width = `${PREVIEW_DESIGN_WIDTH}px`;
      frame.style.height = `${Math.round(height / scale)}px`;
      frame.style.minHeight = "0";
      // The shared frame rule caps width at 100%, which would clamp the desktop
      // viewport back to the card and leave the scale shrinking an already-small frame.
      frame.style.maxWidth = "none";
      frame.style.maxHeight = "none";
      frame.style.transform = `scale(${scale})`;
      frame.style.transformOrigin = "top left";
    }

    fit();

    const observer = new ResizeObserver(fit);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [scaled]);

  function drive(action) {
    frameRef.current?.contentWindow?.postMessage(
      { cf: "preview-scroll", action },
      "*"
    );
  }

  return (
    <div
      ref={wrapRef}
      className={`source-preview-wrap ${mode}`}
      onMouseEnter={
        listing
          ? () => {
              drive("start");
              setHovering(true);
            }
          : undefined
      }
      onMouseLeave={
        listing
          ? () => {
              drive("stop");
              setHovering(false);
            }
          : undefined
      }
    >
      <iframe
        ref={frameRef}
        title={`${
          product?.name ||
          "Product"
        } preview`}
        className={`source-preview-frame ${mode}`}
        srcDoc={source}
        sandbox="allow-scripts allow-forms allow-modals"
        style={listing ? { pointerEvents: hovering ? "auto" : "none" } : undefined}
      />
    </div>
  );
}

/*
 * Listings no longer ship preview source. Each card shows a light poster, and
 * only fetches its preview (GET /products/:slug/preview, cached per slug) once
 * it comes within reach of the viewport. Cards that scroll far away drop their
 * iframe again, so a long infinite-scroll list keeps only a screenful or two of
 * live documents. A product with a `thumbnail` image shows it until hovered.
 */
const previewCache = new Map();

function loadPreview(slug) {
  if (!previewCache.has(slug)) {
    previewCache.set(
      slug,
      api.products.preview(slug).then((result) => result.previewCode || "").catch((error) => {
        previewCache.delete(slug);
        throw error;
      })
    );
  }
  return previewCache.get(slug);
}

function PreviewPoster({ product, failed }) {
  return (
    <div className={`preview-poster${failed ? " failed" : ""}`} aria-hidden="true">
      <small>{product?.category}</small>
      <b>{product?.name}</b>
      {failed && <span>Preview unavailable</span>}
    </div>
  );
}

function LazyPreview({ product, mode }) {
  const listing = mode === "listing";
  const { theme } = useTheme() || {};
  const thumb = listing ? thumbnailFor(product, theme) : "";
  const ref = useRef(null);
  const [near, setNear] = useState(false);
  const [code, setCode] = useState(product?.previewCode || "");
  const [loaded, setLoaded] = useState(Boolean(product?.previewCode));
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState(false);

  // A full record arriving with its source replaces the lazily fetched copy
  // (same string in practice, so the iframe isn't reloaded).
  useEffect(() => {
    if (product?.previewCode) {
      setCode(product.previewCode);
      setLoaded(true);
    }
  }, [product?.previewCode]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Listing cards come and go; a detail-size preview, once shown, stays.
        if (listing) setNear(entry.isIntersecting);
        else if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: listing ? "700px 0px" : "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [listing]);

  useEffect(() => {
    // With a thumbnail on screen, the live source is only needed once hovered.
    if (!near || loaded || !product?.slug || (thumb && !hovered)) return;
    let active = true;
    loadPreview(product.slug)
      .then((previewCode) => {
        if (!active) return;
        setCode(previewCode);
        setLoaded(true);
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, [near, loaded, product?.slug, thumb, hovered]);

  // Loaded but the product has no source: use the built-in visual for its type.
  if (loaded && !code) return <StaticVisual product={product} />;

  const live = near && code && (!thumb || hovered || !listing);

  return (
    <div
      ref={ref}
      className={`lazy-preview ${mode}`}
      onMouseEnter={
        listing
          ? () => {
              setHovered(true);
              if (product?.slug) trackOnce(`hover:${product.slug}`, "preview_interact", { product: product.slug });
            }
          : undefined
      }
      onMouseLeave={listing ? () => setHovered(false) : undefined}
    >
      {live ? (
        <SourcePreview product={{ ...product, previewCode: code, previewMode: "source" }} mode={mode} />
      ) : thumb ? (
        <img className="preview-thumbnail" src={thumb} alt="" loading="lazy" decoding="async" width="720" height="540" />
      ) : (
        <PreviewPoster product={product} failed={failed} />
      )}
    </div>
  );
}

export default function ProductVisual({
  product,
  mode = "listing",
}) {
  const sourceAvailable = hasSourceCode(product);
  // Store products (hasPreview) always go through LazyPreview, so a page that
  // starts from listing data and then receives the full record keeps the same
  // iframe instead of reloading it. Sources being edited live (the admin
  // editor) render directly.
  if (product?.hasPreview || product?.thumbnail || (mode === "listing" && sourceAvailable)) {
    return <LazyPreview product={product} mode={mode} />;
  }
  return <StaticVisual product={product} mode={mode} />;
}

function StaticVisual({
  product,
  mode = "listing",
}) {
  const type =
    product?.previewType;

  const sourceAvailable =
    hasSourceCode(product);

  /*
   * Source products always use
   * their stored HTML/CSS/JS preview.
   */
  if (
    product?.previewMode === "source" &&
    sourceAvailable
  ) {
    return (
      <SourcePreview
        product={product}
        mode={mode}
      />
    );
  }

  /*
   * Compatibility fallback:
   * old products may not have
   * previewMode normalized.
   */
  if (
    sourceAvailable &&
    (
      product?.previewCode ||
      product?.code?.html
    )
  ) {
    return (
      <SourcePreview
        product={{
          ...product,
          previewMode:
            "source",
        }}
        mode={mode}
      />
    );
  }

  if (type === "pricing") {
    return (
      <div className="visual pricing-v">
        {[
          "Launch",
          "Scale",
          "Studio",
        ].map(
          (name, index) => (
            <div
              className={`price-tile ${
                index === 1
                  ? "hot"
                  : ""
              }`}
              key={name}
            >
              <small>
                {index === 1
                  ? "MOST POPULAR"
                  : "PLAN"}
              </small>

              <b>{name}</b>

              <strong>
                ${[19, 49, 99][index]}
              </strong>

              <span>
                Flexible plans
              </span>

              <span>
                Team-ready
              </span>

              <button type="button">
                {index === 1
                  ? "Choose Scale →"
                  : "Choose"}
              </button>
            </div>
          )
        )}
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="visual dashboard-v">
        <aside>
          <b>Workspace</b>
          <i />
          <i />
          <i />
          <i />
        </aside>

        <main>
          <header>
            <span>Overview</span>
            <small>Sep 2026</small>
          </header>

          <div className="kpis">
            <div>
              Revenue
              <b>$48.4K</b>
            </div>

            <div>
              Conversion
              <b>8.72%</b>
            </div>

            <div>
              Customers
              <b>12.8K</b>
            </div>
          </div>

          <div className="dash-body">
            <div className="chart">
              {[
                40,
                60,
                48,
                78,
                56,
                89,
                68,
              ].map(
                (
                  height,
                  index
                ) => (
                  <i
                    key={index}
                    style={{
                      height: `${height}%`,
                    }}
                  />
                )
              )}
            </div>

            <div className="activity">
              RECENT ACTIVITY
              <i />
              <i />
              <i />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (type === "hero") {
    return (
      <div className="visual hero-v">
        <div>
          <small>
            FOR AMBITIOUS BRANDS
          </small>

          <h3>
            Less noise.
            <br />
            <span>
              More presence.
            </span>
          </h3>

          <p>
            Campaign-ready hero
            composition.
          </p>

          <b>
            Explore the system →
          </b>
        </div>

        <div className="hero-sculpt">
          A
        </div>
      </div>
    );
  }

  if (type === "testimonial") {
    return (
      <div className="visual testimonial-v">
        <span>“</span>

        <blockquote>
          The interface feels
          intentional everywhere.
          It helped our launch look
          finished on day one.
        </blockquote>

        <div>
          <b>Sarah Chen</b>

          <small>
            Product Designer ·
            Northstar
          </small>

          <em>★★★★★</em>
        </div>
      </div>
    );
  }

  if (type === "navigation") {
    return (
      <div className="visual navigation-v">
        <header>
          <b>MONO.</b>
          <span>Work</span>
          <span>Studio</span>
          <span>Journal</span>

          <button type="button">
            Menu +
          </button>
        </header>

        <section>
          <small>MENU</small>
          <strong>Projects</strong>
          <strong>About</strong>
          <strong>Contact</strong>
        </section>
      </div>
    );
  }

  if (type === "contact") {
    return (
      <div className="visual contact-v">
        <div>
          <small>
            START A PROJECT
          </small>

          <h3>
            Tell us what you're
            <br />
            <span>
              building next.
            </span>
          </h3>

          <p>
            hello@studio.dev
          </p>
        </div>

        <form>
          <label>
            Name
            <input
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              placeholder="you@company.com"
            />
          </label>

          <label>
            Project
            <input
              placeholder="Tell us about it"
            />
          </label>

          <button type="button">
            Send enquiry →
          </button>
        </form>
      </div>
    );
  }

  if (type === "profile") {
    return (
      <div className="visual profile-v">
        <div className="avatar">
          H
        </div>

        <small>
          INDEPENDENT DESIGNER
        </small>

        <h3>Harper Lee</h3>

        <p>
          Product designer &
          creative developer
        </p>

        <div className="profile-stats">
          <b>
            09
            <small>Years</small>
          </b>

          <b>
            42
            <small>Launches</small>
          </b>

          <b>
            18
            <small>Brands</small>
          </b>
        </div>
      </div>
    );
  }

  if (type === "features") {
    return (
      <div className="visual feature-v">
        <article>
          <small>
            01 — SPEED
          </small>

          <h3>
            Fast by default.
          </h3>

          <p>
            Lean interactions that
            feel immediate.
          </p>
        </article>

        <article>
          <b>02</b>
          <span>
            Intentional motion
          </span>
        </article>

        <article>
          <b>03</b>
          <span>
            Built to adapt
          </span>
        </article>
      </div>
    );
  }

  if (type === "countdown") {
    return (
      <div className="visual countdown-v">
        <div className="orb">
          O
        </div>

        <div>
          <small>
            LAUNCHING 27.09.26
          </small>

          <h3>
            Something
            <br />
            <span>
              remarkable.
            </span>
          </h3>

          <strong>
            12 : 08 : 46
          </strong>
        </div>
      </div>
    );
  }

  return (
    <div className="visual card-v">
      <div className="card-art" />

      <small>
        {product?.category}
      </small>

      <h3>
        {product?.name}
      </h3>

      <p>
        {product?.description}
      </p>

      <b>
        {product?.productType ===
        "FREE"
          ? "Free"
          : product?.price}
      </b>
    </div>
  );
}