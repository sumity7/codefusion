import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Copy, FolderPlus, Globe, Lock, Pencil, Trash2, X } from "lucide-react";
import { api } from "../services/api";
import { useSessionToken } from "../services/session";
import { useToast } from "../components/Toast";
import ProductCard from "../components/ProductCard";
import LoadError from "../components/LoadError";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { loginPath } from "../utils/redirect";

function shareUrl(collection) {
  return `${window.location.origin}/c/${collection.shareId}`;
}

function CollectionPanel({ collection, onChange, onDelete }) {
  const { notify } = useToast();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(collection.name);
  const [busy, setBusy] = useState(false);

  async function save(body) {
    setBusy(true);
    try {
      const result = await api.collections.update(collection.id, body);
      onChange(result.collection);
      return result.collection;
    } catch (error) {
      notify({ message: error.message, tone: "error" });
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl(collection));
      notify("Share link copied.");
    } catch {
      notify({ message: shareUrl(collection), tone: "info" });
    }
  }

  async function remove(slug) {
    try {
      const result = await api.collections.toggle(collection.id, slug);
      onChange(result.collection);
    } catch (error) {
      notify({ message: error.message, tone: "error" });
    }
  }

  return (
    <section className="account-panel my-collection">
      <div className="my-collection-head">
        {editing ? (
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              if (await save({ name })) setEditing(false);
            }}
          >
            <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} aria-label="Collection name" autoFocus />
            <button type="submit" className="icon-action" aria-label="Save name" disabled={busy}><Check size={13} /></button>
            <button type="button" className="icon-action" aria-label="Cancel" onClick={() => { setEditing(false); setName(collection.name); }}><X size={13} /></button>
          </form>
        ) : (
          <h2>
            {collection.name}
            <button type="button" className="icon-action" aria-label={`Rename ${collection.name}`} onClick={() => setEditing(true)}><Pencil size={12} /></button>
          </h2>
        )}
        <div className="my-collection-actions">
          <button type="button" className={`share-toggle${collection.isPublic ? " on" : ""}`} onClick={() => save({ isPublic: !collection.isPublic })} disabled={busy} aria-pressed={collection.isPublic}>
            {collection.isPublic ? <Globe size={13} aria-hidden="true" /> : <Lock size={13} aria-hidden="true" />}
            {collection.isPublic ? "Shared by link" : "Private"}
          </button>
          {collection.isPublic && (
            <button type="button" className="button ghost" onClick={copyLink}><Copy size={13} aria-hidden="true" /> Copy link</button>
          )}
          <button type="button" className="icon-action danger" aria-label={`Delete ${collection.name}`} onClick={() => onDelete(collection)}><Trash2 size={13} /></button>
        </div>
      </div>
      {collection.products.length ? (
        <div className="product-grid">
          {collection.products.map((product) => (
            <div className="my-collection-item" key={product.slug}>
              <ProductCard product={product} />
              <button type="button" className="text-link" onClick={() => remove(product.slug)}>Remove from collection</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="muted">Empty. Add products with the “Collect” button on any product page.</p>
      )}
    </section>
  );
}

export default function MyCollections() {
  useDocumentTitle("My collections");
  const signedIn = Boolean(useSessionToken());
  const { notify } = useToast();
  const [collections, setCollections] = useState([]);
  const [status, setStatus] = useState(signedIn ? "loading" : "signed-out");
  const [attempt, setAttempt] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!signedIn) {
      setStatus("signed-out");
      return;
    }
    let active = true;
    setStatus("loading");
    api.collections
      .mine()
      .then((result) => {
        if (!active) return;
        setCollections(result.collections || []);
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, [signedIn, attempt]);

  async function create(event) {
    event.preventDefault();
    try {
      const result = await api.collections.create({ name });
      setCollections((list) => [result.collection, ...list]);
      setName("");
    } catch (error) {
      notify({ message: error.message, tone: "error" });
    }
  }

  async function remove(collection) {
    if (!window.confirm(`Delete “${collection.name}”? This can't be undone.`)) return;
    try {
      await api.collections.remove(collection.id);
      setCollections((list) => list.filter((item) => item.id !== collection.id));
      notify("Collection deleted.");
    } catch (error) {
      notify({ message: error.message, tone: "error" });
    }
  }

  return (
    <main className="simple-page container">
      <span className="eyebrow">YOUR LIBRARY</span>
      <h1>My collections</h1>
      <p>Group products for a project, then keep them private or share a read-only link.</p>
      {status === "signed-out" && (
        <div className="empty-state">
          <h3>Sign in to build collections</h3>
          <Link to={loginPath("/account/collections")} className="button primary">Sign in</Link>
        </div>
      )}
      {status === "error" && <LoadError title="We couldn't load your collections" onRetry={() => setAttempt((n) => n + 1)} />}
      {status === "ready" && (
        <>
          <form className="save-collection-new standalone" onSubmit={create}>
            <FolderPlus size={15} aria-hidden="true" />
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New collection name" maxLength={80} aria-label="New collection name" />
            <button type="submit" className="button primary" disabled={!name.trim()}>Create</button>
          </form>
          {collections.map((collection) => (
            <CollectionPanel
              key={collection.id}
              collection={collection}
              onDelete={remove}
              onChange={(next) => setCollections((list) => list.map((item) => (item.id === next.id ? next : item)))}
            />
          ))}
          {!collections.length && <p className="muted">No collections yet.</p>}
        </>
      )}
    </main>
  );
}
