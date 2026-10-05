import { Link, useLocation } from "react-router-dom";
import { Columns2, X } from "lucide-react";
import { useCompare } from "../hooks/useCompare";

// Floating bar that appears once something is picked for comparison.
export default function CompareTray() {
  const { items, toggle, clear, href } = useCompare();
  const { pathname } = useLocation();
  if (!items.length || pathname === "/compare") return null;

  return (
    <div className="compare-tray" role="region" aria-label="Compare products">
      <Columns2 size={15} aria-hidden="true" />
      <div className="compare-tray-items">
        {items.map((item) => (
          <span key={item.slug}>
            {item.name}
            <button type="button" onClick={() => toggle(item)} aria-label={`Remove ${item.name} from comparison`}>
              <X size={11} />
            </button>
          </span>
        ))}
        {items.length < 2 && <em>Pick one more to compare</em>}
      </div>
      {href ? (
        <Link to={href} className="button primary">Compare</Link>
      ) : null}
      <button type="button" className="compare-tray-clear" onClick={clear}>Clear</button>
    </div>
  );
}
