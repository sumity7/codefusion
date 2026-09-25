import { useEffect, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

// Categories are fetched by the Products page, which also needs the total.
export default function CategorySidebar({ category, onSelect, categories = [], total = 0 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function select(name) {
    onSelect(name);
    setOpen(false);
  }

  return (
    <>
      <button type="button" className="cat-sidebar-toggle" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="category-sidebar">
        <SlidersHorizontal size={13} aria-hidden="true" />
        Categories
      </button>
      <div className={`cat-sidebar-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside id="category-sidebar" className={`cat-sidebar ${open ? "open" : ""}`} aria-label="Categories">
        <div className="cat-sidebar-head">
          <span>CATEGORIES</span>
          <button type="button" className="cat-sidebar-close" onClick={() => setOpen(false)} aria-label="Close categories">
            <X size={14} aria-hidden="true" />
          </button>
        </div>
        <div className="cat-list">
          <button type="button" className={category === "All" ? "active" : ""} aria-pressed={category === "All"} onClick={() => select("All")}>
            All <span>{total}</span>
          </button>
          {categories.map((cat) => (
            <button key={cat.name} type="button" className={category === cat.name ? "active" : ""} aria-pressed={category === cat.name} onClick={() => select(cat.name)}>
              {cat.name} <span>{cat.count}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
