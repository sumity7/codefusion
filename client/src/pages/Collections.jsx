import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search } from "lucide-react";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";

const COLLECTIONS = [
  { slug: "new", label: "New" },
  { slug: "trending", label: "Trending" },
  { slug: "free", label: "Free" },
  { slug: "premium", label: "Premium" },
];

export default function Collections() {
  const { collection } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
   * The collection has to reach the API for every slug. Previously only free and
   * premium were forwarded, so /collections/new and /collections/trending sent no
   * filter at all and rendered the entire catalogue, while free and premium
   * matched nothing because the stored values are title case.
   */
  useEffect(() => {
    let active = true;
    setLoading(true);

    api.products
      .list(`?collection=${encodeURIComponent(collection)}`)
      .then((result) => {
        if (active) setData(result.products || []);
      })
      .catch(() => {
        if (active) setData([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [collection]);

  const current = COLLECTIONS.find((c) => c.slug === collection);

  return (
    <main className="simple-page container">
      <span className="eyebrow">COLLECTION</span>
      <h1>{current ? current.label : collection.replace("-", " ")}</h1>
      <p>{loading ? "Loading products…" : `${data.length} products in this collection.`}</p>

      <div className="product-grid">
        {data.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {!loading && !data.length && (
        <div className="empty-state">
          <Search size={22} />
          <h3>Nothing here yet</h3>
          <p>This collection has no products at the moment.</p>
        </div>
      )}

      <div className="collection-links">
        {COLLECTIONS.map((c) => (
          <Link key={c.slug} to={`/collections/${c.slug}`}>
            {c.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
