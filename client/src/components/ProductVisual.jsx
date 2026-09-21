import { useEffect, useRef, useState } from "react";
import { getCombinedSourceCode } from "../services/combinedSource";
import { useTheme } from "../hooks/useTheme";

/*
 * Light-mode preview canvas.
 *
 * Previews render inside sandboxed iframes, so the site's theme CSS can't reach
 * them. The component demos paint their backdrop from a `--bg` custom property
 * (near-black) with light text on top, which reads as a harsh black slab on a
 * light page.
 *
 * This overrides only the *canvas*: the backdrop variable, body text, and the
 * small caption label. Every component's own colours (cards, buttons, borders,
 * gradients) are left exactly as designed — a dark button stays a dark button.
 *
 * Boilerplates are deliberately excluded: each is a full page with its own
 * bespoke palette (Atlas's cream, LaunchKit's off-white, Nova/DevDock's
 * intentional dark UI). Forcing a canvas colour onto those would break designs
 * that are already correct.
 */
/* :not([data-cf-keep-dark]) matters as much as the script's own opt-out — without
   it a component that declares itself dark-by-design still gets its canvas
   repainted here, and effects that only read against dark wash out. */
const LIGHT_CANVAS_CSS = `
        :root[data-theme="light"] body:not([data-cf-keep-dark]){ --bg: #f4f3fa !important; }
        [data-theme="light"] body:not([data-cf-keep-dark]){
          background: #f4f3fa !important;
          color: #15131c;
        }
        [data-theme="light"] body:not([data-cf-keep-dark]) .kicker{ color: #5b5470 !important; }
`;

/*
 * The canvas override above only touches `body` and `--bg`. Most component demos
 * also paint their own inner cards/panels from hardcoded near-black hex values
 * (not the `--bg` variable), and write their copy in light greys meant to sit on
 * those dark surfaces. Fixing only the canvas leaves black cards, and fixing only
 * the cards leaves near-white text on a near-white page.
 *
 * So this runs two passes over the rendered iframe instead of hand-patching 140
 * product sources:
 *
 *   1. Surfaces — any element whose computed background is a dark, low-saturation
 *      neutral becomes light. Saturated accents (lavender, green, gold, brand
 *      gradients) are never neutral enough to match, so colour design survives.
 *
 *   2. Text — for every element holding actual text, resolve the background it
 *      now sits on and check WCAG contrast. Anything under 4.5:1 gets darkened by
 *      scaling its channels down, which keeps the hue, so a lavender label stays
 *      lavender instead of collapsing to grey. Only if scaling can't reach the
 *      threshold does it fall back to the neutral ink colour.
 */
const LIGHT_CANVAS_SCRIPT = `
<script>
(function(){
  var RGB = /rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([\\d.]+))?\\)/;
  var CANVAS = [244, 243, 250];

  function parse(value){
    var m = String(value).match(RGB);
    if (!m) return null;
    return { r:+m[1], g:+m[2], b:+m[3], a: m[4] !== undefined ? +m[4] : 1 };
  }
  function lin(c){
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  function lum(r, g, b){
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  }
  function contrast(a, b){
    var hi = Math.max(a, b), lo = Math.min(a, b);
    return (hi + 0.05) / (lo + 0.05);
  }

  /* Some components are designed around a dark surface — a glow only reads
     against one — so they opt out with data-cf-keep-dark and both passes skip
     that whole subtree, text included. */
  function keepsDark(el){
    return Boolean(el.closest && el.closest("[data-cf-keep-dark]"));
  }

  /* Pass 1 — lighten dark neutral surfaces. */
  function surfaces(){
    document.querySelectorAll("*").forEach(function(el){
      if (keepsDark(el)) return;
      var c = parse(getComputedStyle(el).backgroundColor);
      if (!c || c.a < 0.4) return;
      var max = Math.max(c.r, c.g, c.b), min = Math.min(c.r, c.g, c.b);
      var perceived = 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
      if (max - min >= 28 || perceived >= 70) return;
      el.style.setProperty("background-color", perceived < 25 ? "#f4f3fa" : "#ffffff", "important");
    });
  }

  /* Nearest ancestor that actually paints a background. */
  function backdropLum(el){
    var node = el;
    while (node && node.nodeType === 1){
      var c = parse(getComputedStyle(node).backgroundColor);
      if (c && c.a >= 0.5) return lum(c.r, c.g, c.b);
      node = node.parentElement;
    }
    return lum(CANVAS[0], CANVAS[1], CANVAS[2]);
  }

  function hasText(el){
    for (var i = 0; i < el.childNodes.length; i++){
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.nodeValue.trim()) return true;
    }
    return false;
  }

  /* Pass 2 — pull low-contrast text down until it is readable.
     The brighter a colour was in the original dark design, the more prominent it
     was meant to be, so it gets a higher contrast target. That keeps headings,
     body copy and muted captions visually separated instead of flattening them
     all onto the same mid-grey. */
  function text(){
    document.querySelectorAll("*").forEach(function(el){
      if (!hasText(el) || keepsDark(el)) return;
      var c = parse(getComputedStyle(el).color);
      if (!c || c.a < 0.3) return;
      var L = lum(c.r, c.g, c.b);
      var target = L > 0.55 ? 9 : L > 0.25 ? 6 : 4.5;
      var bg = backdropLum(el);
      if (contrast(L, bg) >= target) return;
      var f = 1;
      for (var i = 0; i < 20; i++){
        f *= 0.82;
        var r = Math.round(c.r * f), g = Math.round(c.g * f), b = Math.round(c.b * f);
        if (contrast(lum(r, g, b), bg) >= target){
          el.style.setProperty("color", "rgb(" + r + "," + g + "," + b + ")", "important");
          return;
        }
      }
      el.style.setProperty("color", "#15131c", "important");
    });
  }

  function run(){ surfaces(); text(); }

  if (document.readyState === "complete") requestAnimationFrame(run);
  else window.addEventListener("load", function(){ requestAnimationFrame(run); });
})();
</script>
`;

/*
 * Card previews walk through the whole page while the pointer is over the card.
 *
 * The scrolling has to happen inside the frame: the sandbox deliberately withholds
 * allow-same-origin, so the parent cannot reach contentDocument. It posts a message
 * instead and this listener does the work, which keeps the sandbox intact.
 *
 * Products shorter than their card have nothing to travel through, so they ignore
 * the message entirely rather than twitching in place.
 */
const LISTING_SCROLL_SCRIPT = `
<script>
(function(){
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var raf = null, dir = 1, hold = 0, last = 0;

  function el(){ return document.scrollingElement || document.documentElement; }
  function distance(){ var e = el(); return e.scrollHeight - e.clientHeight; }
  function stop(){ if (raf) cancelAnimationFrame(raf); raf = null; }
  function reset(){ stop(); el().scrollTop = 0; }

  function start(){
    if (reduced || raf) return;
    var travel = distance();
    if (travel < 40) return;

    // Speed is derived from the travel so every product takes about the same time to
    // read, rather than a fixed px/sec that crawls through tall pages. The floor stops
    // near-static products from creeping.
    var speed = Math.max(45, travel / 7);
    dir = 1;
    hold = 380;
    last = performance.now();

    function step(now){
      var dt = (now - last) / 1000;
      last = now;
      if (hold > 0) { hold -= dt * 1000; raf = requestAnimationFrame(step); return; }

      var e = el();
      var limit = distance();
      var y = e.scrollTop + dir * speed * dt;

      if (y >= limit) { y = limit; dir = -1; hold = 900; }
      else if (y <= 0) { y = 0; dir = 1; hold = 700; }

      e.scrollTop = y;
      raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
  }

  window.addEventListener("message", function(event){
    var data = event.data;
    if (!data || data.cf !== "preview-scroll") return;
    if (data.action === "start") start();
    else reset();
  });
})();
</script>
`;

/*
 * Complete pages are laid out for a desktop viewport, so rendering one at the card's
 * own width gives the page's mobile layout — an oversized nav and a hero cropped to
 * its first band. Those render at a desktop width and are scaled down instead, which
 * shows the whole composition. Components are designed to sit at the card's width
 * already and would only shrink into illegibility, so they are left alone.
 */
const PREVIEW_DESIGN_WIDTH = 1440;

function isFullPagePreview(product) {
  return (
    product?.previewLayout === "page" ||
    product?.category === "Boilerplates"
  );
}

function usesLightCanvas(product) {
  return product?.category !== "Boilerplates";
}

function applyPreviewTheme(html, theme) {
  if (theme !== "light") return html;
  // Tag the preview document so the rules above apply inside the iframe.
  if (/<html\b[^>]*\bdata-theme=/i.test(html)) return html;
  if (/<html\b/i.test(html)) {
    return html.replace(/<html\b/i, '<html data-theme="light"');
  }
  return html;
}

function hasSourceCode(product) {
  return Boolean(
    product?.previewCode ||
      product?.code?.html ||
      product?.code?.css ||
      product?.code?.javascript
  );
}

function buildPreviewSource(
  product,
  mode = "detail",
  theme = "dark"
) {
  const originalSource =
    product?.previewCode ||
    getCombinedSourceCode(product);

  if (!originalSource) {
    return "";
  }

  const previewCSS =
    mode === "listing"
      ? `
        /* The card preview scrolls itself on hover, so the document has to stay
           scrollable. The scrollbar is hidden instead of the overflow, and the frame
           takes no pointer events, so the wheel still belongs to the page behind it. */
        html {
          width: 100% !important;
          min-width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
          scrollbar-width: none !important;
        }

        html::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
          display: none !important;
        }

        body {
          width: 100% !important;
          min-width: 0 !important;
          min-height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden !important;
        }

        img,
        video,
        svg,
        canvas {
          max-width: 100% !important;
        }
      `
      : `
        html {
          width: 100% !important;
          min-width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
        }

        body {
          width: 100% !important;
          min-width: 0 !important;
          min-height: 100vh !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        img,
        video,
        svg,
        canvas {
          max-width: 100% !important;
        }
      `;

  const lightCanvas = theme === "light" && usesLightCanvas(product);

  let output = applyPreviewTheme(originalSource, lightCanvas ? "light" : theme);

  const themedCSS = lightCanvas ? previewCSS + LIGHT_CANVAS_CSS : previewCSS;

  const themedScript =
    (lightCanvas ? LIGHT_CANVAS_SCRIPT : "") +
    (mode === "listing" ? LISTING_SCROLL_SCRIPT : "");

  if (/<\/head>/i.test(output)) {
    output = output.replace(
      /<\/head>/i,
      `
<style id="codefusion-preview-overrides">
${themedCSS}
</style>
</head>`
    );

    if (themedScript) {
      output = /<\/body>/i.test(output)
        ? output.replace(/<\/body>/i, `${themedScript}\n</body>`)
        : output + themedScript;
    }
  } else {
    output = `
<!DOCTYPE html>
<html lang="en"${lightCanvas ? ' data-theme="light"' : ""}>
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <style id="codefusion-preview-overrides">
${themedCSS}
  </style>
</head>

<body>
${output}
${themedScript}
</body>
</html>`;
  }

  return output;
}

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
      // clientWidth/Height, not getBoundingClientRect: the app renders at a 125% UI
      // scale, and the rect reports scaled pixels while the frame is laid out in
      // unscaled ones. Mixing the two makes the preview overflow its card.
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

export default function ProductVisual({
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