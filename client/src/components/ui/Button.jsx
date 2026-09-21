import { Spinner } from "./Spinner";

// Adapted from a shadcn/Geist-style button.tsx. That original encodes every
// size/type/shape combination as Tailwind utility strings with `dark:`
// overrides; this project has no Tailwind, so each combination became a
// real CSS class in index.css (`.ui-btn*`) instead of a class-string
// lookup table. It also has no `dark:` variant — themes are toggled via
// `[data-theme="light"]` on <html>, with dark being the default — so
// every color pair below is flipped from the original (its `dark:` value
// is this project's default, its base value is the `[data-theme="light"]`
// override).
const SIZE_CLASS = { tiny: "size-tiny", small: "size-small", medium: "size-medium", large: "size-large" };
const TYPE_CLASS = { primary: "type-primary", secondary: "type-secondary", tertiary: "type-tertiary", error: "type-error", warning: "type-warning" };
const SHAPE_CLASS = { square: "shape-square", circle: "shape-circle", rounded: "shape-rounded" };

export function Button({
  size = "medium",
  type = "primary",
  shape = "square",
  svgOnly = false,
  children,
  prefix,
  suffix,
  shadow = false,
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  className = "",
  ...rest
}) {
  const isInert = disabled || loading;
  const classes = [
    "ui-btn",
    SIZE_CLASS[size],
    SHAPE_CLASS[shape],
    svgOnly ? "svg-only" : "",
    isInert ? "is-disabled" : TYPE_CLASS[type],
    shadow ? "has-shadow" : "",
    fullWidth ? "full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="submit" disabled={disabled} onClick={onClick} tabIndex={0} className={classes} {...rest}>
      {loading ? <Spinner size={size === "large" ? 24 : 16} /> : prefix}
      <span className={`ui-btn-label${size === "tiny" ? "" : " has-padding"}`}>{children}</span>
      {!loading && suffix}
    </button>
  );
}
