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
import UnifiedCode from "../components/UnifiedCode";
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

  const [source, setSource] =
    useState(null);

  const [device, setDevice] =
    useState("desktop");

  const [reviews, setReviews] =
    useState([]);

  const [saved, setSaved] =
    useState(false);

  const [buyOpen, setBuyOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

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

  async function getSource() {
    try {
      const response =
        await api.products.source(
          slug
        );

      if (response?.code) {
        setSource(
          response.code
        );
      }
    } catch (error) {
      alert(
        error?.message ||
          "Unable to load source code."
      );
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

  const productCode = {
    html:
      product?.code?.html ||
      "",

    css:
      product?.code?.css ||
      "",

    javascript:
      product?.code?.javascript ||
      "",
  };

  const codeForViewer =
    source || productCode;

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
              onClick={() =>
                setBuyOpen(true)
              }
            >
              {type === "FREE"
                ? "Get this product"
                : `Buy ${product.price}`}
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

      <ScrollReveal className="container">
        <section className="code-wrap">
          <UnifiedCode
            product={{
              ...product,
              code:
                codeForViewer,
            }}
            onLoadSource={
              getSource
            }
          />
        </section>
      </ScrollReveal>

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
          {fallbackProducts
            .filter(
              (item) =>
                item.slug !==
                slug
            )
            .slice(0, 3)
            .map((item) => (
              <ProductCard
                key={item.slug}
                product={item}
              />
            ))}
        </div>
      </section>

      <Modal
        open={buyOpen}
        title={
          type === "FREE"
            ? "Add this product"
            : "Complete your purchase"
        }
        onClose={() =>
          setBuyOpen(false)
        }
        size="small"
      >
        <div className="confirm-modal">
          <span className="eyebrow">
            {product.badge}
          </span>

          <h3>
            {product.name}
          </h3>

          <p>
            {type === "FREE"
              ? "This product is free. Open the product page or get its ready-to-use source."
              : `You're continuing to checkout for ${product.price}.`}
          </p>

          <div className="modal-actions">
            <Link
              className="button primary"
              to={
                type === "FREE"
                  ? `/products/${slug}`
                  : `/checkout/${slug}`
              }
              onClick={() =>
                setBuyOpen(
                  false
                )
              }
            >
              {type === "FREE"
                ? "Open product"
                : "Continue to checkout"}

              <ArrowRight
                size={14}
              />
            </Link>

            <button
              type="button"
              className="button ghost"
              onClick={() =>
                setBuyOpen(
                  false
                )
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
}