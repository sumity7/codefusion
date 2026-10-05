import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useTheme } from "../hooks/useTheme";
import { thumbnailFor } from "../services/thumbnails";
import { productAccess } from "../utils/product";

/*
 * Scroll-driven home hero: the headline sits over a corridor of real product
 * thumbnails, and scrolling flies the camera through it, one product at a time,
 * ending on the call to action. Everything moves with transform/opacity from a
 * single rAF-throttled scroll handler, so it stays on the compositor.
 *
 * The section is tall (one viewport per product plus intro and outro); its
 * stage is sticky, and progress is how far the section has scrolled past the
 * top of the viewport. With reduced motion it renders as a static hero + grid.
 */
const GAP = 900; // world-units between panels along z
const PERSPECTIVE = 1000;
const FOCUS_Z = -GAP * 0.38; // where a panel reads best (about 72% scale)
const PASS = 300; // how far past focus a panel takes to disappear

// Panels alternate sides so the camera weaves rather than ploughing straight on.
function placement(i) {
  const side = i % 2 === 0 ? -1 : 1;
  return { x: side * (i === 0 ? 0 : 26), y: (i % 3) - 1, rot: side * -10 };
}

export default function HeroFlight({ products, total }) {
  const reduced = useReducedMotion();
  const { theme } = useTheme() || {};
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const panelRefs = useRef([]);
  const copyRef = useRef(null);
  const outroRef = useRef(null);
  const hintRef = useRef(null);
  const [current, setCurrent] = useState(-1);
  const items = useMemo(() => products.slice(0, 7), [products]);
  const count = items.length;

  // The flight is made of thumbnails; with fewer than three it would look empty,
  // so the plain hero is used until they've been generated.
  const flying = !reduced && count >= 3;

  useEffect(() => {
    if (!flying) return;
    const section = sectionRef.current;
    let frame = 0;

    function render() {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(1, scrollable)));
      // 0–0.12: intro (headline leaves); 0.12–0.9: flight; 0.9–1: outro.
      const flight = Math.min(1, Math.max(0, (p - 0.12) / 0.78));
      const cameraZ = flight * (count - 0.4) * GAP;
      const narrow = window.innerWidth < 760;

      if (copyRef.current) {
        const t = Math.min(1, p / 0.12);
        copyRef.current.style.opacity = String(1 - t);
        copyRef.current.style.transform = `translateY(${-t * 60}px) scale(${1 - t * 0.06})`;
        copyRef.current.style.pointerEvents = t > 0.6 ? "none" : "";
      }

      let nearest = -1;
      let nearestDist = Infinity;
      panelRefs.current.forEach((el, i) => {
        if (!el) return;
        const { x, y, rot } = placement(i);
        const z = -i * GAP - GAP * 0.6 + cameraZ; // panel position relative to camera
        const dist = Math.abs(z - FOCUS_Z);
        // Only a panel still on screen (not already fading past) can be captioned.
        if (z <= FOCUS_Z + (narrow ? PASS * 0.45 : PASS) * 0.5 && dist < nearestDist) {
          nearestDist = dist;
          nearest = i;
        }
        // Fade in from the distance; sharp at the focus point; gone shortly
        // after passing it, so the panel on screen is the one being captioned.
        const fadeIn = Math.min(1, Math.max(0, (z + GAP * 3) / (GAP * 1.6)));
        // Phones fade passing panels faster: at near full width they'd cover the next one.
        const pass = narrow ? PASS * 0.45 : PASS;
        const fadeOut = Math.min(1, Math.max(0, (FOCUS_Z + pass - z) / pass));
        // The corridor stays dim behind the headline until the flight starts.
        const intro = 0.18 + 0.82 * Math.min(1, p / 0.12);
        const opacity = Math.min(fadeIn, fadeOut) * intro;
        const spread = narrow ? 0.55 : 1;
        el.style.transform = `translate3d(calc(-50% + ${x * spread}vw), calc(-50% + ${y * 6}vh), ${z}px) rotateY(${rot * (1 - Math.min(1, Math.abs(z) / GAP) * 0.6)}deg)`;
        el.style.opacity = String(opacity);
        el.style.visibility = opacity < 0.02 ? "hidden" : "";
        el.style.pointerEvents = opacity > 0.6 ? "" : "none";
      });
      if (stageRef.current) stageRef.current.style.setProperty("--flight", String(flight));
      if (outroRef.current) {
        const t = Math.min(1, Math.max(0, (p - 0.9) / 0.05));
        outroRef.current.style.opacity = String(t);
        outroRef.current.style.transform = `translateY(${(1 - t) * 24}px)`;
        outroRef.current.style.pointerEvents = t > 0.5 ? "" : "none";
      }
      if (hintRef.current) hintRef.current.style.opacity = String(Math.max(0, 1 - p / 0.06));
      setCurrent(p < 0.1 || p > 0.92 ? -1 : nearest);
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [flying, count]);

  const copy = (
    <>
      <span className="pill"><i />Original premium UI products</span>
      <h1>Interfaces<br /><span>with intention.</span></h1>
      <p>Original components, sections and complete UI systems designed for real projects — with live previews and copy-ready code.</p>
      <div className="hero-actions">
        <Link to="/products" className="button primary">Explore collection <ArrowRight size={16} aria-hidden="true" /></Link>
        <Link to="/collections/free" className="button ghost">Start with free <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
      <div className="proof">
        {total !== null && <div><b>{total}</b><small>{total === 1 ? "Original product" : "Original products"}</small></div>}
        <div><b>100%</b><small>Live previews</small></div>
        <div><b>1-click</b><small>Code copy</small></div>
      </div>
    </>
  );

  if (!flying) {
    return (
      <section className="flight-static container">
        <div className="hero-copy">{copy}</div>
        {count >= 3 && (
          <div className="flight-static-grid">
            {items.slice(0, 3).map((product) => {
              const src = thumbnailFor(product, theme);
              return (
                <Link key={product.slug} to={`/products/${product.slug}`} className="flight-panel static">
                  {src ? <img src={src} alt="" /> : <span className="flight-panel-empty">{product.category}</span>}
                  <b>{product.name}</b>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    );
  }

  const active = items[current];
  return (
    <section ref={sectionRef} className="flight" style={{ height: `${(count + 2) * 70}vh` }} aria-label="Featured products">
      <div className="flight-sticky">
        <div className="flight-glow" aria-hidden="true" />
        <div ref={stageRef} className="flight-stage" style={{ perspective: `${PERSPECTIVE}px` }}>
          {items.map((product, i) => {
            const src = thumbnailFor(product, theme);
            return (
              <Link
                key={product.slug}
                ref={(el) => (panelRefs.current[i] = el)}
                to={`/products/${product.slug}`}
                className="flight-panel"
                aria-label={`${product.name} — ${product.category}`}
                tabIndex={i === current ? 0 : -1}
              >
                <span className="flight-panel-bar" aria-hidden="true"><i /><i /><i /><em>{product.slug}</em></span>
                {src ? <img src={src} alt="" decoding="async" /> : <span className="flight-panel-empty">{product.category}</span>}
              </Link>
            );
          })}
        </div>

        <div ref={copyRef} className="flight-copy hero-copy">{copy}</div>

        <div className={`flight-caption${active ? " show" : ""}`} aria-live="polite">
          {active && (
            <>
              <small>{active.category} · {productAccess(active).label}</small>
              <b>{active.name}</b>
              <Link to={`/products/${active.slug}`} className="text-link">View product <ArrowUpRight size={13} aria-hidden="true" /></Link>
            </>
          )}
        </div>

        <ol className="flight-dots" aria-hidden="true">
          {items.map((product, i) => <li key={product.slug} className={i === current ? "on" : ""} />)}
        </ol>

        <div ref={outroRef} className="flight-outro">
          <span className="eyebrow">AND {Math.max(0, (total ?? count) - count)} MORE</span>
          <h2>Find the piece that completes your build.</h2>
          <Link to="/products" className="button primary">Browse every product <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>

        <div ref={hintRef} className="flight-hint" aria-hidden="true">
          <ChevronDown size={16} /> Scroll to fly through
        </div>
      </div>
    </section>
  );
}
