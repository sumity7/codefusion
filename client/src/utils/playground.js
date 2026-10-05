/*
 * Playground transforms. Pure string functions over a product's HTML document,
 * so the same customisation applies to the live preview (public previewCode)
 * and to the unlocked source that gets copied, downloaded or exported.
 */

const HEX = /#([0-9a-f]{6}|[0-9a-f]{3})\b/gi;

function expand(hex) {
  const h = hex.replace("#", "").toLowerCase();
  return `#${h.length === 3 ? h.split("").map((c) => c + c).join("") : h}`;
}

/*
 * The colours a product actually uses, most-used first, each labelled with the
 * :root custom properties that hold it (e.g. "--bg"), so swatches read as
 * "Background" rather than just a hex value.
 */
export function extractPalette(source, limit = 12) {
  const text = String(source || "");
  const counts = new Map();
  for (const m of text.matchAll(HEX)) {
    const hex = expand(m[0]);
    counts.set(hex, (counts.get(hex) || 0) + 1);
  }
  const names = new Map();
  for (const block of text.matchAll(/:root\s*\{([^}]*)\}/g)) {
    for (const v of block[1].matchAll(/--([\w-]+)\s*:\s*(#[0-9a-f]{3,6})\b/gi)) {
      const hex = expand(v[2]);
      names.set(hex, [...(names.get(hex) || []), v[1]]);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => (names.has(b[0]) - names.has(a[0])) || b[1] - a[1])
    .slice(0, limit)
    .map(([hex, count]) => ({ hex, count, names: names.get(hex) || [] }));
}

const VAR_LABELS = { bg: "Background", background: "Background", ink: "Text", text: "Text", fg: "Text", mut: "Muted text", muted: "Muted text", line: "Lines", border: "Border", accent: "Accent", primary: "Primary", brand: "Brand", surface: "Surface", card: "Card" };
export function labelFor(entry) {
  const name = entry.names[0];
  if (!name) return entry.hex;
  return VAR_LABELS[name.toLowerCase()] || name.replace(/[-_]/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

function scalePx(value, factor) {
  if (factor === 1) return value;
  return value.replace(/(-?\d*\.?\d+)px/g, (_, n) => `${Math.round(parseFloat(n) * factor * 10) / 10}px`);
}

// Scales px values in matching declarations, inside <style> blocks only.
function scaleDeclarations(css, props, factor) {
  if (factor === 1) return css;
  const re = new RegExp(`(^|[;{\\s])(${props})(\\s*:\\s*)([^;}]+)`, "gi");
  return css.replace(re, (_, lead, prop, colon, value) => `${lead}${prop}${colon}${scalePx(value, factor)}`);
}

export const DEFAULT_TWEAKS = { colors: {}, spacing: 1, radius: 1, type: 1 };

export function isCustomized(tweaks) {
  return Boolean(tweaks && (Object.keys(tweaks.colors || {}).length || tweaks.spacing !== 1 || tweaks.radius !== 1 || tweaks.type !== 1));
}

export function applyTweaks(source, tweaks) {
  let text = String(source || "");
  if (!isCustomized(tweaks)) return text;
  const colors = tweaks.colors || {};
  if (Object.keys(colors).length) {
    text = text.replace(HEX, (match) => colors[expand(match)] || match);
  }
  if (tweaks.spacing !== 1 || tweaks.radius !== 1 || tweaks.type !== 1) {
    text = text.replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style>)/gi, (_, open, css, close) => {
      let out = scaleDeclarations(css, "padding(?:-[a-z]+)?|margin(?:-[a-z]+)?|gap|row-gap|column-gap", tweaks.spacing);
      out = scaleDeclarations(out, "border(?:-[a-z]+)*-radius", tweaks.radius);
      out = scaleDeclarations(out, "font-size", tweaks.type);
      return open + out + close;
    });
  }
  return text;
}
