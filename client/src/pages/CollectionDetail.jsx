import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Check, Copy, Globe, LayoutGrid, LayoutDashboard, Lock, Pencil, Trash2, X } from "lucide-react";
import { api } from "../services/api";
import { useToast } from "../components/Toast";
import CollectionBoard from "../components/CollectionBoard";
import LoadError from "../components/LoadError";
import NotFound from "./NotFound";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// The owner's view of one collection: the board plus its controls.
export default function CollectionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notify } = useToast();
  const [collection, setCollection] = useState(null);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  useDocumentTitle(collection?.name || (status === "not-found" ? "Collection not found" : null));

  useEffect(() => {
    let active = true;
    setStatus("loading");
    api.collections
      .one(id)
      .then((result) => {
        if (!active) return;
        setCollection(result.collection);
        setName(result.collection.name);
        setStatus("ready");
      })
      .catch((error) => active && setStatus(error?.status === 404 ? "not-found" : error?.status === 401 ? "signed-out" : "error"));
    return () => {
      active = false;
    };
  }, [id, attempt]);

  async function save(body) {
    setBusy(true);
    try {
      const result = await api.collections.update(id, body);
      setCollection(result.collection);
      return true;
    } catch (error) {
      notify({ message: error.message, tone: "error" });
      return false;
    } finally {
      setBusy(false);
    }
  }

  async function remove(slug) {
    try {
      const result = await api.collections.toggle(id, slug);
      setCollection(result.collection);
    } catch (error) {
      notify({ message: error.message, tone: "error" });
    }
  }

  async function destroy() {
    if (!window.confirm(`Delete “${collection.name}”? This can't be undone.`)) return;
    try {
      await api.collections.remove(id);
      notify("Collection deleted.");
      navigate("/account/collections");
    } catch (error) {
      notify({ message: error.message, tone: "error" });
    }
  }

  async function copyLink() {
    const url = `${window.location.origin}/c/${collection.shareId}`;
    try {
      await navigator.clipboard.writeText(url);
      notify("Share link copied.");
    } catch {
      notify(url);
    }
  }

  if (status === "not-found" || status === "signed-out") {
    return (
      <NotFound
        title="Collection not found"
        heading={<>That collection isn't<br /><span>in your library.</span></>}
        message={status === "signed-out" ? "Sign in to see your collections." : "It may have been deleted."}
        primary={{ to: "/account/collections", label: "My collections" }}
        secondary={{ to: "/products", label: "Browse products" }}
      />
    );
  }

  return (
    <main className="simple-page container board-page">
      <Link to="/account/collections" className="text-link back-link"><ArrowLeft size={13} aria-hidden="true" /> My collections</Link>
      {status === "error" && <LoadError title="We couldn't load this collection" onRetry={() => setAttempt((n) => n + 1)} />}
      {status === "loading" && <div className="card-skeleton section-skeleton" aria-busy="true" />}
      {status === "ready" && (
        <>
          <header className="board-head">
            <div>
              <span className="eyebrow">COLLECTION</span>
              {editing ? (
                <form
                  className="board-rename"
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
                <h1>
                  {collection.name}
                  <button type="button" className="icon-action" aria-label="Rename collection" onClick={() => setEditing(true)}><Pencil size={13} /></button>
                </h1>
              )}
              <p>{collection.products.length} {collection.products.length === 1 ? "product" : "products"} · star a tile to make it the cover</p>
            </div>
            <div className="board-tools">
              <div className="plan-tabs" role="group" aria-label="Layout">
                <button type="button" className={collection.layout === "board" ? "active" : ""} aria-pressed={collection.layout === "board"} onClick={() => save({ layout: "board" })}>
                  <LayoutDashboard size={13} aria-hidden="true" /> Board
                </button>
                <button type="button" className={collection.layout === "grid" ? "active" : ""} aria-pressed={collection.layout === "grid"} onClick={() => save({ layout: "grid" })}>
                  <LayoutGrid size={13} aria-hidden="true" /> Grid
                </button>
              </div>
              <button type="button" className={`share-toggle${collection.isPublic ? " on" : ""}`} onClick={() => save({ isPublic: !collection.isPublic })} disabled={busy} aria-pressed={collection.isPublic}>
                {collection.isPublic ? <Globe size={13} aria-hidden="true" /> : <Lock size={13} aria-hidden="true" />}
                {collection.isPublic ? "Shared by link" : "Private"}
              </button>
              {collection.isPublic && (
                <button type="button" className="button ghost" onClick={copyLink}><Copy size={13} aria-hidden="true" /> Copy link</button>
              )}
              <button type="button" className="icon-action danger" aria-label="Delete collection" onClick={destroy}><Trash2 size={13} /></button>
            </div>
          </header>
          <CollectionBoard collection={collection} editable onRemove={remove} onCover={(slug) => save({ coverSlug: slug })} />
        </>
      )}
    </main>
  );
}
