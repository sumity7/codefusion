import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Share2,
  Monitor,
  Tablet,
  Smartphone,
  Check,
  Clipboard,
  FileText,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { api } from "../services/api";
import {
  fallbackProducts,
} from "../data/fallbackProducts";

import ProductVisual from "../components/ProductVisual";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";
import Modal from "../components/Modal";

export default function ProductDetails() {
  const { slug } = useParams();

  const fallback =
    fallbackProducts.find(
      (item) =>
        item.slug === slug
    ) ||
    fallbackProducts[0];

  const [product, setProduct] =
    useState(fallback);


  const [device, setDevice] =
    useState("desktop");

  const [reviews, setReviews] =
    useState([]);

  const [saved, setSaved] =
    useState(false);

  const [copying, setCopying] = useState("");

  const [toast, setToast] = useState("");

  const [accessGate, setAccessGate] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    let mounted = true;

    async function loadProduct() {
      setLoading(true);

      try {
        const response =
          await api.products.one(
            slug
          );

        if (!mounted) {
          return;
        }

        const remote =
          response.product;

        const productType =
          remote?.productType ||
          remote?.product_type ||
          "FREE";

        const hasPreview =
          Boolean(
            remote?.previewCode
          );

        const normalizedProduct =
          {
            ...remote,

            productType,

            previewMode:
              hasPreview
                ? "source"
                : remote?.previewMode,

            previewCode:
              remote?.previewCode ||
              "",

            code: {
              html:
                remote?.code?.html ||
                "",

              css:
                remote?.code?.css ||
                "",

              javascript:
                remote?.code
                  ?.javascript ||
                "",
            },
          };

        setProduct(
          normalizedProduct
        );

        if (remote?.category) {
          api.products
            .list(`?category=${encodeURIComponent(remote.category)}`)
            .then((result) => {
              if (!mounted) return;
              setRelated((result.products || []).filter((item) => item.slug !== slug).slice(0, 3));
            })
            .catch(() => {});
        }
      } catch {
        if (mounted) {
          setProduct(fallback);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    async function loadReviews() {
      try {
        const response =
          await api.reviews.list(
            slug
          );

        if (mounted) {
          setReviews(
            response.reviews || []
          );
        }
      } catch {
        if (mounted) {
          setReviews([]);
        }
      }
    }

    loadProduct();
    loadReviews();

    return () => {
      mounted = false;
    };
  }, [slug]);

  async function copy(kind) {
    try {
      setCopying(kind);
      const response = await (kind === "code" ? api.products.copyCode(slug) : api.products.copyPrompt(slug));
      const text = kind === "code" ? [response.content.html, response.content.css, response.content.javascript].join("\n") : response.content;
      await navigator.clipboard.writeText(text || "");
      const label = kind === "code" ? "Code" : "Prompt";
      setToast(response.remaining === null ? `${label} copied successfully.` : `${label} copied successfully • 1 token used • ${response.remaining} remaining`);
    } catch (error) {
      if (error?.code === "SUBSCRIPTION_REQUIRED" || error?.code === "NO_TOKENS") {
        setAccessGate({ code: error.code, message: error.message });
      } else {
        setToast(error?.message || "Unable to copy.");
      }
    } finally {
      setCopying("");
    }
  }

  async function share() {
    try {
      if (
        navigator.share
      ) {
        await navigator.share({
          title:
            product.name,
          text:
            product.description,
          url:
            window.location.href,
        });

        return;
      }

      await navigator.clipboard.writeText(
        window.location.href
      );

      alert("Link copied");
    } catch {}
  }

  async function save() {
    try {
      const response =
        await api.wishlist.toggle(
          slug
        );

      setSaved(
        Boolean(
          response.saved
        )
      );
    } catch (error) {
      alert(
        error?.message ||
          "Unable to update wishlist."
      );
    }
  }

  const type =
    product?.productType ||
    product?.product_type ||
    "FREE";

  if (loading) {
    return (
      <main className="product-loading">
        <div className="product-loading-shell">
          <div className="loading-line large" />
          <div className="loading-line" />
          <div className="loading-preview" />
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="container details-head">
        <div className="breadcrumbs">
          <Link to="/products">
            <ArrowLeft size={13} />
            Products
          </Link>

          <span>/</span>

          <span>
            {product.category}
          </span>
        </div>

        <div className="details-title">
          <div>
            <div className="chips">
              {product.badge && (
                <span>
                  {product.badge}
                </span>
              )}

              {(product.tags || [])
                .map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
            </div>

            <h1>
              {product.name}
            </h1>

            <p>
              {product.description}
            </p>
          </div>

          <div className="detail-actions">
            <button
              type="button"
              onClick={save}
              className={
                saved
                  ? "saved"
                  : ""
              }
              aria-pressed={saved}
            >
              <Heart
                size={15}
                fill={
                  saved
                    ? "currentColor"
                    : "none"
                }
              />

              {saved
                ? "Saved"
                : "Save"}
            </button>

            <button
              type="button"
              onClick={share}
            >
              <Share2 size={15} />
              Share
            </button>

            <button
              type="button"
              className="button primary"
              onClick={() => copy("code")}
            >
              {copying === "code" ? "Copying..." : "Copy All Code"}
            </button>

            <button
              type="button"
              className="button ghost"
              onClick={() => copy("prompt")}
            >
              <FileText size={15} />
              {copying === "prompt" ? "Copying..." : "Copy Prompt"}
            </button>
          </div>
        </div>
      </section>

      <section className="container product-showcase">
        <div className="preview-frame">
          <div className="preview-toolbar">
            <div className="preview-device-switcher">
              <button
                type="button"
                className={
                  device ===
                  "desktop"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setDevice(
                    "desktop"
                  )
                }
              >
                <Monitor
                  size={13}
                />
                Desktop
              </button>

              <button
                type="button"
                className={
                  device ===
                  "tablet"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setDevice(
                    "tablet"
                  )
                }
              >
                <Tablet
                  size={13}
                />
                Tablet
              </button>

              <button
                type="button"
                className={
                  device ===
                  "mobile"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setDevice(
                    "mobile"
                  )
                }
              >
                <Smartphone
                  size={13}
                />
                Mobile
              </button>
            </div>

            <span>
              Live product preview
            </span>
          </div>

          <div
            className={`preview-canvas ${device}`}
          >
            <ProductVisual
              product={
                product
              }
              mode="detail"
            />
          </div>
        </div>
      </section>

      <section className="container detail-grid">
        <ScrollReveal>
          <div>
            <span className="eyebrow">
              OVERVIEW
            </span>

            <h2>
              A finished interface,
              ready for your
              workflow.
            </h2>

            <p>
              {product.description}
              {" "}
              Built around
              practical responsive
              behavior and a clear
              source structure.
            </p>

            <div className="check-grid">
              {(
                product.features ||
                [
                  "Responsive layout",
                  "Accessible interaction",
                  "Clean source code",
                  "Production-ready structure",
                ]
              ).map(
                (feature) => (
                  <div
                    key={feature}
                  >
                    <Check
                      size={13}
                    />
                    {feature}
                  </div>
                )
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="spec-panel">
            {(
              product.specifications ||
              []
            ).map(
              ([label, value]) => (
                <div
                  key={label}
                >
                  <span>
                    {label}
                  </span>

                  <strong>
                    {value}
                  </strong>
                </div>
              )
            )}
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal className="container">
        <section className="review-area">
          <div className="section-head">
            <div>
              <span className="eyebrow">
                REVIEWS
              </span>

              <h2>
                What builders are
                saying.
              </h2>
            </div>

            <b>
              {product.rating ||
                "5.0"}{" "}
              ★★★★★
            </b>
          </div>

          <div className="review-grid">
            {reviews.length ? (
              reviews.map(
                (review) => (
                  <article
                    key={
                      review._id
                    }
                  >
                    <strong>
                      {review.user
                        ?.name ||
                        "Builder"}
                    </strong>

                    <span>
                      {"★".repeat(
                        review.rating ||
                          5
                      )}
                    </span>

                    <p>
                      {
                        review.body
                      }
                    </p>
                  </article>
                )
              )
            ) : (
              <article>
                <strong>
                  Be the first
                  reviewer.
                </strong>

                <p>
                  Build with it
                  and share your
                  feedback.
                </p>
              </article>
            )}
          </div>
        </section>
      </ScrollReveal>

      <section className="container code-wrap">
        <div className="access-panel">
          <span className="eyebrow">CODEFUSION PRO ACCESS</span>
          <h2>Included with CodeFusion Pro</h2>
          <p>Source code and premium prompts are delivered securely after spending 1 token per copy.</p>
          <div className="modal-actions">
            <button className="button primary copy-code-btn" onClick={() => copy("code")} disabled={Boolean(copying)}><Clipboard size={15} />{copying === "code" ? "Copying..." : "Copy All Code"}</button>
            <button className="button ghost copy-prompt-btn" onClick={() => copy("prompt")} disabled={Boolean(copying)}><FileText size={15} />{copying === "prompt" ? "Copying..." : "Copy Prompt"}</button>
          </div>
        </div>
      </section>

      <section className="container related">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              KEEP EXPLORING
            </span>

            <h2>
              More products.
            </h2>
          </div>

          <Link
            to="/products"
            className="text-link"
          >
            View collection
            <ArrowRight
              size={14}
            />
          </Link>
        </div>

        <div className="product-grid">
          {(related.length
            ? related
            : fallbackProducts.filter((item) => item.slug !== slug).slice(0, 3)
          ).map((item) => (
            <ProductCard
              key={item.slug}
              product={item}
            />
          ))}
        </div>
      </section>

      {toast && <div className="copy-toast">{toast}</div>}

      <Modal
        open={Boolean(accessGate)}
        title={accessGate?.code === "NO_TOKENS" ? "You're out of tokens" : "Subscription required"}
        onClose={() => setAccessGate(null)}
        size="small"
      >
        <p>{accessGate?.message}</p>
        <div className="modal-actions">
          <Link to="/subscription" className="button primary" onClick={() => setAccessGate(null)}>
            {accessGate?.code === "NO_TOKENS" ? "View Subscription" : "Subscribe Now"}
          </Link>
          <button type="button" className="button ghost" onClick={() => setAccessGate(null)}>Close</button>
        </div>
      </Modal>
    </main>
  );
}
