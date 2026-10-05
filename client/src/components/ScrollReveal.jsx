import { useEffect, useRef, useState } from "react";

/*
 * Fades a block in as it arrives. It triggers slightly *before* the block
 * enters the viewport (positive bottom root margin), so fast scrolling never
 * shows empty space, and the stagger delay is capped so long grids don't
 * trickle in. Reduced motion is handled in CSS (.reveal is simply visible).
 */
export default function ScrollReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 15% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${show ? "visible" : ""} ${className}`} style={{ "--delay": `${Math.min(delay, 180)}ms` }}>
      {children}
    </div>
  );
}
