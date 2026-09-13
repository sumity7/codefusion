import { useEffect, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { api } from "../services/api";

export default function CategorySidebar({ category, onSelect }) {
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api.products
      .categories()
      .then((result) => {
        setCategories(result.categories || []);
        setTotal(result.total || 0);
      })
      .catch(() => {});
  }, []);

  function select(name) {
    onSelect(name);
    setOpen(false);
  }

  return (
    <>
      <button type="button" className="cat-sidebar-toggle" onClick={() => setOpen(true)}>
        <SlidersHorizontal size={13} />
        Categories
      </button>
      <div className={`cat-sidebar-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`cat-sidebar ${open ? "open" : ""}`}>
        <div className="cat-sidebar-head">
          <span>CATEGORIES</span>
          <button type="button" className="cat-sidebar-close" onClick={() => setOpen(false)} aria-label="Close categories">
            <X size={14} />
          </button>
        </div>
        <div className="cat-list">
          <button type="button" className={category === "All" ? "active" : ""} onClick={() => select("All")}>
            All <span>{total}</span>
          </button>
          {categories.map((cat) => (
            <button key={cat.name} type="button" className={category === cat.name ? "active" : ""} onClick={() => select(cat.name)}>
              {cat.name} <span>{cat.count}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
