import { useMemo } from "react";
import { RotateCcw, SlidersHorizontal, X } from "lucide-react";
import { DEFAULT_TWEAKS, extractPalette, isCustomized, labelFor } from "../utils/playground";

const SLIDERS = [
  { key: "spacing", label: "Spacing", min: 0.5, max: 1.75 },
  { key: "radius", label: "Corner radius", min: 0, max: 2.5 },
  { key: "type", label: "Text size", min: 0.75, max: 1.4 },
];

/*
 * The customisation panel beside the product preview. It only edits a tweaks
 * object; the product page applies it to the preview and to whatever is copied
 * or exported.
 */
export default function Playground({ source, tweaks, onChange, onClose }) {
  const palette = useMemo(() => extractPalette(source), [source]);
  const customized = isCustomized(tweaks);

  function setColor(hex, value) {
    const colors = { ...tweaks.colors };
    if (value.toLowerCase() === hex) delete colors[hex];
    else colors[hex] = value.toLowerCase();
    onChange({ ...tweaks, colors });
  }

  return (
    <aside className="playground" aria-label="Customize this product">
      <header>
        <b><SlidersHorizontal size={14} aria-hidden="true" /> Customize</b>
        <button type="button" className="icon-action" onClick={onClose} aria-label="Close customizer"><X size={13} /></button>
      </header>

      <section>
        <h4>Colours</h4>
        {palette.length ? (
          <div className="swatch-list">
            {palette.map((entry, index) => {
              const current = tweaks.colors[entry.hex] || entry.hex;
              const label = entry.names.length ? labelFor(entry) : `Colour ${index + 1}`;
              return (
                <label key={entry.hex} className={`swatch${tweaks.colors[entry.hex] ? " changed" : ""}`} title={`${label} · used ${entry.count}×`}>
                  <input type="color" value={current} onChange={(e) => setColor(entry.hex, e.target.value)} aria-label={`${label} colour`} />
                  <span className="swatch-chip" style={{ background: current }} aria-hidden="true" />
                  <span className="swatch-text">
                    <b>{label}</b>
                    <small>{current}</small>
                  </span>
                </label>
              );
            })}
          </div>
        ) : (
          <p className="muted">This product doesn't use fixed colours to adjust.</p>
        )}
      </section>

      <section>
        <h4>Scale</h4>
        {SLIDERS.map(({ key, label, min, max }) => (
          <label key={key} className="slider-row">
            <span>{label}<output>{Math.round(tweaks[key] * 100)}%</output></span>
            <input type="range" min={min} max={max} step="0.05" value={tweaks[key]} onChange={(e) => onChange({ ...tweaks, [key]: Number(e.target.value) })} />
          </label>
        ))}
      </section>

      <footer>
        <button type="button" className="button ghost" onClick={() => onChange(DEFAULT_TWEAKS)} disabled={!customized}>
          <RotateCcw size={13} aria-hidden="true" /> Reset
        </button>
        <p>{customized ? "Copy All Code, Export and downloads now use your customised version." : "Changes preview live and carry into Copy All Code and Export."}</p>
      </footer>
    </aside>
  );
}
