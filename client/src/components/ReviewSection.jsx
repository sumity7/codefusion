import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Rocket, Star, ThumbsUp } from "lucide-react";
import { api } from "../services/api";
import { useSessionToken } from "../services/session";
import { useToast } from "./Toast";
import { loginPath } from "../utils/redirect";
import { productRating, reviewCountLabel } from "../utils/product";

const STATUS_COPY = {
  pending: "Your review is waiting for moderation. It'll appear here once approved.",
  approved: "Your review is published.",
  rejected: "Your review wasn't published. You can edit it and submit again.",
};

function Stars({ value }) {
  return (
    <span className="review-stars" aria-label={`${value} out of 5 stars`}>
      {"★".repeat(value)}
      <span aria-hidden="true">{"★".repeat(5 - value)}</span>
    </span>
  );
}

function ReviewForm({ slug, existing, onSaved, onCancel }) {
  const [rating, setRating] = useState(existing?.rating || 0);
  const [title, setTitle] = useState(existing?.title || "");
  const [body, setBody] = useState(existing?.body || "");
  const [usedInProduction, setUsed] = useState(Boolean(existing?.usedInProduction));
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setError("");
    if (!rating) return setError("Choose a star rating.");
    setSaving(true);
    try {
      const result = await api.reviews.create(slug, { rating, title, body, usedInProduction });
      onSaved(result.review);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="review-form" onSubmit={submit}>
      <fieldset className="star-input">
        <legend>Your rating</legend>
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className={n <= rating ? "on" : ""}>
            <input type="radio" name="rating" value={n} checked={rating === n} onChange={() => setRating(n)} />
            <Star size={20} fill={n <= rating ? "currentColor" : "none"} aria-hidden="true" />
            <span className="visually-hidden">{n} star{n > 1 ? "s" : ""}</span>
          </label>
        ))}
      </fieldset>
      <label>
        Title <small>(optional)</small>
        <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} placeholder="Sum it up" />
      </label>
      <label>
        Review
        <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={4} maxLength={2000} required minLength={10} placeholder="What did you build with it? How did it hold up?" />
      </label>
      <label className="check-label">
        <input type="checkbox" checked={usedInProduction} onChange={(e) => setUsed(e.target.checked)} />
        I've used this in a live, production project
      </label>
      {error && <div className="form-error" role="alert">{error}</div>}
      <div className="modal-actions">
        <button type="submit" className="button primary" disabled={saving} aria-busy={saving}>{saving ? "Submitting…" : existing ? "Update review" : "Submit review"}</button>
        {onCancel && <button type="button" className="button ghost" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}

/*
 * Reviews are open to people who actually copied the product (checked on the
 * server), one per person — writing again edits your review, and every edit is
 * re-moderated. Approved reviews are sorted by helpful votes.
 */
export default function ReviewSection({ product, onSummary }) {
  const slug = product.slug;
  const signedIn = Boolean(useSessionToken());
  const { notify } = useToast();
  const [data, setData] = useState({ reviews: [], mine: null, eligible: false, productionCount: 0 });
  const [editing, setEditing] = useState(false);
  const [voting, setVoting] = useState("");

  const load = useCallback(() => {
    return api.reviews
      .list(slug)
      .then((result) => {
        setData(result);
        onSummary?.(result);
      })
      .catch(() => {});
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    load();
  }, [load, signedIn]);

  async function vote(review) {
    if (!signedIn) {
      notify({ message: "Sign in to vote on reviews.", action: { label: "Sign in", to: loginPath(`/products/${slug}`) } });
      return;
    }
    setVoting(review._id);
    try {
      const result = await api.reviews.helpful(review._id);
      setData((current) => ({
        ...current,
        reviews: current.reviews.map((r) => (r._id === review._id ? { ...r, helpfulCount: result.helpfulCount, votedHelpful: result.votedHelpful } : r)),
      }));
    } catch (err) {
      notify({ message: err.message, tone: "error" });
    } finally {
      setVoting("");
    }
  }

  async function removeMine() {
    try {
      await api.reviews.removeMine(slug);
      notify("Your review was removed.");
      setEditing(false);
      load();
    } catch (err) {
      notify({ message: err.message, tone: "error" });
    }
  }

  const rating = productRating(product);
  const { reviews, mine, eligible, productionCount } = data;

  let composer = null;
  if (!signedIn) {
    composer = (
      <p className="review-note">
        <Link to={loginPath(`/products/${slug}`)}>Sign in</Link> to review this product after you've used it.
      </p>
    );
  } else if (mine && !editing) {
    composer = (
      <div className="review-note mine">
        <p>{STATUS_COPY[mine.status]}</p>
        <div className="modal-actions">
          <button type="button" className="button ghost" onClick={() => setEditing(true)}>Edit review</button>
          <button type="button" className="button ghost" onClick={removeMine}>Delete</button>
        </div>
      </div>
    );
  } else if (eligible) {
    composer = (
      <ReviewForm
        slug={slug}
        existing={mine}
        onCancel={mine ? () => setEditing(false) : null}
        onSaved={() => {
          setEditing(false);
          notify("Thanks — your review will appear once it's approved.");
          load();
        }}
      />
    );
  } else {
    composer = <p className="review-note">Reviews come from builders who've used the product. Copy its code or prompt, then come back to share how it went.</p>;
  }

  return (
    <section className="review-area" aria-labelledby="reviews-title">
      <div className="section-head">
        <div>
          <span className="eyebrow">REVIEWS</span>
          <h2 id="reviews-title">What builders are saying.</h2>
        </div>
        <div className="review-summary">
          {rating ? (
            <b aria-label={`Rated ${rating.value} out of 5 from ${reviewCountLabel(rating.count)}`}>
              {rating.value} <Star size={14} fill="currentColor" aria-hidden="true" /> <small>{reviewCountLabel(rating.count)}</small>
            </b>
          ) : (
            <b className="no-rating">No reviews yet</b>
          )}
          {productionCount > 0 && (
            <span className="production-pill"><Rocket size={12} aria-hidden="true" /> {productionCount} used in production</span>
          )}
        </div>
      </div>

      {composer}

      <div className="review-grid">
        {reviews.map((review) => (
          <article key={review._id}>
            <div className="review-meta">
              <strong>{review.user?.name || "Builder"}</strong>
              <Stars value={review.rating} />
            </div>
            <div className="review-badges">
              {review.verifiedCopier && <span><BadgeCheck size={12} aria-hidden="true" /> Verified user</span>}
              {review.usedInProduction && <span className="prod"><Rocket size={12} aria-hidden="true" /> Used in production</span>}
            </div>
            {review.title && <h3>{review.title}</h3>}
            <p>{review.body}</p>
            <div className="review-foot">
              <small>{new Date(review.createdAt).toLocaleDateString()}</small>
              <button type="button" className={`helpful${review.votedHelpful ? " on" : ""}`} onClick={() => vote(review)} disabled={voting === review._id} aria-pressed={review.votedHelpful}>
                <ThumbsUp size={12} aria-hidden="true" /> Helpful{review.helpfulCount ? ` · ${review.helpfulCount}` : ""}
              </button>
            </div>
          </article>
        ))}
        {!reviews.length && (
          <article className="review-empty">
            <strong>No reviews yet.</strong>
            <p>Reviews are written by people who've copied and used this product.</p>
          </article>
        )}
      </div>
    </section>
  );
}
