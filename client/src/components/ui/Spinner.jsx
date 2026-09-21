// Adapted from a shadcn/Geist-style spinner.tsx — this project has no
// Tailwind and no styled-jsx (that's a Next.js-only transform), so the
// keyframes live in index.css as `@keyframes ui-spinner-spin` and the
// utility classes became real `.ui-spinner*` rules. Per-bar rotation/delay
// stays inline since those 12 values are each genuinely unique.
const bars = [
  { animationDelay: "-1.2s", transform: "rotate(.0001deg) translate(146%)" },
  { animationDelay: "-1.1s", transform: "rotate(30deg) translate(146%)" },
  { animationDelay: "-1.0s", transform: "rotate(60deg) translate(146%)" },
  { animationDelay: "-0.9s", transform: "rotate(90deg) translate(146%)" },
  { animationDelay: "-0.8s", transform: "rotate(120deg) translate(146%)" },
  { animationDelay: "-0.7s", transform: "rotate(150deg) translate(146%)" },
  { animationDelay: "-0.6s", transform: "rotate(180deg) translate(146%)" },
  { animationDelay: "-0.5s", transform: "rotate(210deg) translate(146%)" },
  { animationDelay: "-0.4s", transform: "rotate(240deg) translate(146%)" },
  { animationDelay: "-0.3s", transform: "rotate(270deg) translate(146%)" },
  { animationDelay: "-0.2s", transform: "rotate(300deg) translate(146%)" },
  { animationDelay: "-0.1s", transform: "rotate(330deg) translate(146%)" },
];

export function Spinner({ size = 20, color = "#8f8f8f" }) {
  return (
    <div style={{ width: size, height: size }}>
      <div className="ui-spinner-inner" style={{ width: size, height: size }}>
        {bars.map((item) => (
          <div key={item.transform} className="ui-spinner-bar" style={{ backgroundColor: color, ...item }} />
        ))}
      </div>
    </div>
  );
}
