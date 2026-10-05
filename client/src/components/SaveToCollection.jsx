import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, FolderPlus, Plus } from "lucide-react";
import Modal from "./Modal";
import { useToast } from "./Toast";
import { api } from "../services/api";
import { useSessionToken } from "../services/session";
import { loginPath } from "../utils/redirect";

// "Save to collection" — add or remove this product from any of my collections,
// or start a new one with it.
export default function SaveToCollection({ product, open, onClose }) {
  const signedIn = Boolean(useSessionToken());
  const { notify } = useToast();
  const [collections, setCollections] = useState(null);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [pending, setPending] = useState("");

  useEffect(() => {
    if (!open || !signedIn) return;
    let active = true;
    setError("");
    api.collections
      .mine()
      .then((result) => active && setCollections(result.collections || []))
      .catch((err) => active && setError(err.message));
    return () => {
      active = false;
    };
  }, [open, signedIn]);

  async function toggle(collection) {
    setPending(collection.id);
    try {
      const result = await api.collections.toggle(collection.id, product.slug);
      setCollections((list) => list.map((item) => (item.id === collection.id ? result.collection : item)));
      notify(result.added ? `Added to “${collection.name}”.` : `Removed from “${collection.name}”.`);
    } catch (err) {
      notify({ message: err.message, tone: "error" });
    } finally {
      setPending("");
    }
  }

  async function create(event) {
    event.preventDefault();
    if (!name.trim()) return;
    setPending("new");
    try {
      const result = await api.collections.create({ name: name.trim(), slug: product.slug });
      setCollections((list) => [result.collection, ...(list || [])]);
      setName("");
      notify(`Created “${result.collection.name}” with ${product.name}.`);
    } catch (err) {
      notify({ message: err.message, tone: "error" });
    } finally {
      setPending("");
    }
  }

  const contains = (collection) => collection.products.some((p) => (p.slug || p) === product.slug);

  return (
    <Modal open={open} title="Save to collection" onClose={onClose} size="small">
      {!signedIn ? (
        <div className="save-collection">
          <p>Sign in to group products into collections you can revisit and share.</p>
          <Link to={loginPath(`/products/${product.slug}`)} className="button primary" onClick={onClose}>Sign in</Link>
        </div>
      ) : (
        <div className="save-collection">
          {error && <div className="form-error" role="alert">{error}</div>}
          {collections === null && !error && <p>Loading your collections…</p>}
          {collections?.length === 0 && <p>You don't have any collections yet. Start one below.</p>}
          {collections?.length > 0 && (
            <ul>
              {collections.map((collection) => {
                const added = contains(collection);
                return (
                  <li key={collection.id}>
                    <button type="button" onClick={() => toggle(collection)} aria-pressed={added} disabled={pending === collection.id}>
                      <span className={`save-check${added ? " on" : ""}`} aria-hidden="true">{added && <Check size={12} />}</span>
                      <b>{collection.name}</b>
                      <small>{collection.products.length} {collection.products.length === 1 ? "product" : "products"}{collection.isPublic ? " · shared" : ""}</small>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          <form onSubmit={create} className="save-collection-new">
            <FolderPlus size={15} aria-hidden="true" />
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New collection name" maxLength={80} aria-label="New collection name" />
            <button type="submit" className="button ghost" disabled={!name.trim() || pending === "new"}><Plus size={13} /> Create</button>
          </form>
          <Link to="/account/collections" className="auth-link" onClick={onClose}>Manage collections →</Link>
        </div>
      )}
    </Modal>
  );
}
