import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FolderPlus, Globe, Lock } from "lucide-react";
import { api } from "../services/api";
import { useSessionToken } from "../services/session";
import { useToast } from "../components/Toast";
import LoadError from "../components/LoadError";
import { CollectionCover } from "../components/CollectionBoard";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { loginPath } from "../utils/redirect";

// Your collections as cover cards; each opens as a board.
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

  return (
    <main className="simple-page container">
      <span className="eyebrow">YOUR LIBRARY</span>
      <h1>My collections</h1>
      <p>Group products for a project as a board, then keep it private or share a read-only link.</p>
      {status === "signed-out" && (
        <div className="empty-state">
          <h3>Sign in to build collections</h3>
          <Link to={loginPath("/account/collections")} className="button primary">Sign in</Link>
        </div>
      )}
      {status === "error" && <LoadError title="We couldn't load your collections" onRetry={() => setAttempt((n) => n + 1)} />}
      {status === "loading" && (
        <div className="collection-card-grid" aria-busy="true">
          {[0, 1, 2].map((i) => <div key={i} className="card-skeleton" />)}
        </div>
      )}
      {status === "ready" && (
        <>
          <form className="save-collection-new standalone" onSubmit={create}>
            <FolderPlus size={15} aria-hidden="true" />
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New collection name" maxLength={80} aria-label="New collection name" />
            <button type="submit" className="button primary" disabled={!name.trim()}>Create</button>
          </form>
          <div className="collection-card-grid">
            {collections.map((collection) => (
              <Link key={collection.id} to={`/account/collections/${collection.id}`} className="collection-card">
                <CollectionCover collection={collection} />
                <div className="collection-card-body">
                  <b>{collection.name}</b>
                  <small>
                    {collection.products.length} {collection.products.length === 1 ? "product" : "products"} ·{" "}
                    {collection.isPublic ? <><Globe size={11} aria-hidden="true" /> Shared</> : <><Lock size={11} aria-hidden="true" /> Private</>}
                  </small>
                </div>
              </Link>
            ))}
          </div>
          {!collections.length && <p className="muted">No collections yet. Create one above, or use “Collect” on any product page.</p>}
        </>
      )}
    </main>
  );
}
