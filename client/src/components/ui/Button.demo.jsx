// Adapted from the source registry's demo.tsx. The original hand-rolls
// three arrow SVGs inline; this project already depends on lucide-react
// (used throughout Navbar.jsx, ProductCard.jsx, etc.), so those became
// ArrowUp/ArrowLeft/ArrowRight from lucide-react instead, per the
// integration guidelines' "use lucide-react for icons" instruction.
import { ArrowUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Default() {
  return (
    <div className="ui-demo-grid">
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="tertiary">Tertiary</Button>
      <Button type="error">Error</Button>
      <Button type="warning">Warning</Button>
      <Button shape="rounded">Rounded</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button prefix={<ArrowLeft size={16} />}>With Icon</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="ui-demo-row">
      <Button size="small" type="primary">Upload</Button>
      <Button type="primary">Upload</Button>
      <Button size="large" type="primary">Upload</Button>
    </div>
  );
}

export function Types() {
  return (
    <div className="ui-demo-row">
      <Button type="secondary">Upload</Button>
      <Button type="tertiary">Upload</Button>
      <Button type="error">Upload</Button>
      <Button type="warning">Upload</Button>
    </div>
  );
}

export function Shapes() {
  return (
    <div className="ui-demo-row">
      {["tiny", "small", "medium", "large"].map((size) => (
        <Button key={`sq-${size}`} aria-label="Upload" shape="square" size={size} svgOnly type="primary">
          <ArrowUp size={size === "large" ? 20 : 16} />
        </Button>
      ))}
      {["tiny", "small", "medium", "large"].map((size) => (
        <Button key={`ci-${size}`} aria-label="Upload" shape="circle" size={size} svgOnly type="primary">
          <ArrowUp size={size === "large" ? 20 : 16} />
        </Button>
      ))}
    </div>
  );
}

export function PrefixSuffix() {
  return (
    <div className="ui-demo-row">
      <Button prefix={<ArrowLeft size={16} />} type="primary">Upload</Button>
      <Button suffix={<ArrowRight size={16} />} type="primary">Upload</Button>
      <Button prefix={<ArrowLeft size={16} />} suffix={<ArrowRight size={16} />} type="primary">
        Upload
      </Button>
    </div>
  );
}

export function Rounded() {
  return (
    <div className="ui-demo-row">
      <Button shadow shape="rounded" size="small" type="secondary">Upload</Button>
      <Button shadow shape="rounded" type="secondary">Upload</Button>
      <Button shadow shape="rounded" size="large" type="secondary">Upload</Button>
    </div>
  );
}

export function Loading() {
  return (
    <div className="ui-demo-row">
      <Button loading size="small" type="primary">Upload</Button>
      <Button loading type="primary">Upload</Button>
      <Button loading size="large" type="primary">Upload</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="ui-demo-row">
      <Button disabled size="small" type="primary">Upload</Button>
      <Button disabled type="primary">Upload</Button>
      <Button disabled size="large" type="primary">Upload</Button>
    </div>
  );
}
