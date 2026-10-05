import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Rocket, Sparkles } from "lucide-react";
import { api } from "../services/api";
import { thumbnailFor } from "../services/thumbnails";
import { useTheme } from "../hooks/useTheme";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import LoadError from "../components/LoadError";
import { productAccess } from "../utils/product";

const RANGES = [
  { days: 7, label: "This week" },
  { days: 30, label: "This month" },
];

function dayLabel(date) {
  const d = new Date(date);
  const today = new Date();
  const diff = Math.floor((new Date(today.toDateString()) - new Date(d.toDateString())) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return d.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
}

function ReleaseRow({ item, theme }) {
  const src = thumbnailFor(item, theme);
  const isNew = item.release.kind === "new";
  return (
    <Link to={`/products/${item.slug}`} className="release-row">
      <div className="release-thumb">{src ? <img src={src} alt="" loading="lazy" decoding="async" /> : <span>{item.category}</span>}</div>
      <div className="release-body">
        <div className="release-title">
          <span className={`release-kind ${isNew ? "new" : "update"}`}>{isNew ? <><Sparkles size={11} aria-hidden="true" /> New</> : <><Rocket size={11} aria-hidden="true" /> v{item.release.version}</>}</span>
          <b>{item.name}</b>
        </div>
        <small>
          {item.category} · {productAccess(item).label}
          {item.creator?.name ? ` · by ${item.creator.name}` : ""}
        </small>
        {item.release.notes?.length > 0 && (
          <ul>
            {item.release.notes.slice(0, 3).map((note) => <li key={note}>{note}</li>)}
          </ul>
        )}
      </div>
      <ArrowUpRight size={16} aria-hidden="true" className="release-go" />
    </Link>
  );
}

// "New this week": every new product and version update, grouped by day.
export default function NewThisWeek() {
  useDocumentTitle("New this week");
  const { theme } = useTheme() || {};
  const [days, setDays] = useState(7);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setStatus("loading");
    api.products
      .releases(days)
      .then((result) => {
        if (!active) return;
        setData(result);
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, [days, attempt]);

  const groups = useMemo(() => {
    const map = new Map();
    for (const item of data?.releases || []) {
      const key = new Date(item.release.date).toDateString();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    }
    return [...map.entries()];
  }, [data]);

  const counts = useMemo(() => {
    const list = data?.releases || [];
    return { added: list.filter((i) => i.release.kind === "new").length, updated: list.filter((i) => i.release.kind !== "new").length };
  }, [data]);

  return (
    <main className="simple-page container releases-page">
      <span className="eyebrow">RELEASES</span>
      <h1>New on CodeFusion.</h1>
      <p>New products and version updates as they ship. Copied something? You'll be emailed when it gets a new version.</p>
      <div className="releases-toolbar">
        <div className="plan-tabs" role="group" aria-label="Time range">
          {RANGES.map((r) => (
            <button key={r.days} type="button" className={days === r.days ? "active" : ""} aria-pressed={days === r.days} onClick={() => setDays(r.days)}>{r.label}</button>
          ))}
        </div>
        {status === "ready" && <span className="muted">{counts.added} new · {counts.updated} updated</span>}
      </div>

      {status === "error" && <LoadError title="We couldn't load releases" onRetry={() => setAttempt((n) => n + 1)} />}
      {status === "loading" && <div className="release-list" aria-busy="true">{[0, 1, 2].map((i) => <div key={i} className="card-skeleton release-skeleton" />)}</div>}

      {status === "ready" && groups.map(([key, items]) => (
        <section key={key} className="release-day" aria-label={dayLabel(key)}>
          <h2>{dayLabel(key)}</h2>
          <div className="release-list">{items.map((item) => <ReleaseRow key={`${item.slug}-${item.release.version}`} item={item} theme={theme} />)}</div>
        </section>
      ))}

      {status === "ready" && !groups.length && (
        <>
          <div className="empty-state compact-empty">
            <h3>A quiet {days === 7 ? "week" : "month"}</h3>
            <p>Nothing shipped in this window. Here's what came out most recently.</p>
          </div>
          <div className="release-list">{(data.recent || []).map((item) => <ReleaseRow key={`${item.slug}-${item.release.version}`} item={item} theme={theme} />)}</div>
        </>
      )}
    </main>
  );
}
