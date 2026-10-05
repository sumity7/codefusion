import { getCombinedSourceCode } from "../services/combinedSource";
import { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import {
  Boxes,
  Users,
  CreditCard,
  Zap,
  BarChart3,
  Plus,
  Trash2,
  Copy,
  Edit3,
  FolderKanban,
  Layers,
  Tag,
  Settings as SettingsIcon,
  FileCode2,
  Star,
  Save,
  Eye,
  LogOut,
  LayoutDashboard,
  UserRound,
} from "lucide-react";

import { api } from "../services/api";
import { clearToken } from "../services/session";
import ProductVisual from "../components/ProductVisual";
import Modal from "../components/Modal";

const menu = [
  { label: "Overview", icon: LayoutDashboard, path: "/admin", end: true },
  { label: "Products", icon: Boxes, path: "/admin/products" },
  { label: "Categories", icon: FolderKanban, path: "/admin/categories" },
  { label: "Collections", icon: Layers, path: "/admin/collections" },
  { label: "Creators", icon: UserRound, path: "/admin/creators" },
  { label: "Prompts", icon: FileCode2, path: "/admin/prompts" },
  { label: "Subscribers", icon: CreditCard, path: "/admin/subscribers" },
  { label: "Users", icon: Users, path: "/admin/users" },
  { label: "Reviews", icon: Star, path: "/admin/reviews" },
  { label: "Tokens", icon: Zap, path: "/admin/tokens" },
  { label: "Analytics", icon: BarChart3, path: "/admin/analytics" },
  { label: "Plan", icon: Tag, path: "/admin/plan" },
  { label: "Settings", icon: SettingsIcon, path: "/admin/settings" },
];

// Verified payments only (see server/src/models/Payment.js).
function inr(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

function Head({ eyebrow, title, children }) {
  return (
    <div className="admin-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
      </div>

      {children}
    </div>
  );
}

export default function Admin() {
  function logout() {
    clearToken();
    window.location.href = "/admin/login";
  }

  return (
    <main className="admin-wrap">
      <div className="admin-layout container">
        <aside className="admin-sidebar">
          <span className="eyebrow">CODEFUSION ADMIN</span>
          <b>Control center</b>

          <nav className="admin-sidebar-nav">
            {menu.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.end}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <item.icon size={15} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/products"
            className="admin-store-link"
          >
            Open storefront ↗
          </Link>

          <button
            type="button"
            className="admin-logout"
            onClick={logout}
          >
            <LogOut size={13} />
            Sign out
          </button>
        </aside>

        <section className="admin-main">
          <Routes>
            <Route
              index
              element={<Overview />}
            />

            <Route
              path="products"
              element={<Products />}
            />

            <Route
              path="products/new"
              element={<Editor />}
            />

            <Route
              path="products/:id/edit"
              element={<Editor />}
            />

            <Route
              path="categories"
              element={<Categories />}
            />

            <Route
              path="collections"
              element={<Collections />}
            />

            <Route
              path="creators"
              element={<CreatorsAdmin />}
            />

            <Route
              path="prompts"
              element={<Prompts />}
            />

            <Route
              path="subscribers"
              element={<Subscribers />}
            />

            <Route
              path="users"
              element={<UsersPage />}
            />

            <Route
              path="reviews"
              element={<Reviews />}
            />

            <Route
              path="tokens"
              element={<TokenActivity />}
            />

            <Route
              path="analytics"
              element={<Analytics />}
            />

            <Route
              path="plan"
              element={<PlanSettings />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />
          </Routes>
        </section>
      </div>
    </main>
  );
}

function Overview() {
  const [stats, setStats] = useState({
    products: 0,
    users: 0,
    activeSubscribers: 0,
    tokensRedeemed: 0,
    revenue: 0,
    pendingReviews: 0,
  });

  const [recentSubscribers, setRecentSubscribers] = useState([]);

  useEffect(() => {
    Promise.all([
      api.admin.dashboard(),
      api.admin.summary(),
    ])
      .then(([dashboard, summary]) => {
        setStats((current) => ({
          ...current,
          ...(dashboard.stats || {}),
        }));

        setRecentSubscribers(
          summary.recentSubscribers || []
        );
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Head
        eyebrow="OVERVIEW"
        title="Control your library."
      >
        <Link
          className="button primary"
          to="/admin/products/new"
        >
          <Plus size={13} />
          Add product
        </Link>
      </Head>

      <div className="admin-kpis">
        <K
          icon={<Boxes />}
          label="Products"
          value={stats.products}
        />

        <K
          icon={<Users />}
          label="Users"
          value={stats.users}
        />

        <K
          icon={<CreditCard />}
          label="Active subscribers"
          value={stats.activeSubscribers}
        />

        <K
          icon={<Zap />}
          label="Tokens redeemed"
          value={stats.tokensRedeemed}
        />

        <K
          icon={<BarChart3 />}
          label={`Revenue · ${stats.paidOrders || 0} paid orders`}
          value={inr(stats.revenue)}
        />

        <K
          icon={<BarChart3 />}
          label={`Last 30 days · ${stats.paidOrders30 || 0} orders`}
          value={inr(stats.revenue30)}
        />

        <K
          icon={<Star />}
          label="Pending reviews"
          value={stats.pendingReviews}
        />
      </div>

      <div className="admin-overview-grid">
        <div className="admin-panel">
          <div className="admin-panel-head">
            <b>Recent subscribers</b>
            <Link to="/admin/subscribers">
              View all →
            </Link>
          </div>

          {recentSubscribers.length ? (
            recentSubscribers.map((subscriber) => (
              <div
                className="admin-row"
                key={subscriber._id}
              >
                <strong>
                  {subscriber.name ||
                    "Customer"}
                </strong>

                <small>
                  {subscriber.email || ""}
                </small>

                <em>
                  Until{" "}
                  {new Date(
                    subscriber.subscriptionEndDate
                  ).toLocaleDateString()}
                </em>

                <small>
                  {new Date(
                    subscriber.subscriptionStartDate
                  ).toLocaleDateString()}
                </small>
              </div>
            ))
          ) : (
            <div className="admin-placeholder">
              No subscribers yet.
            </div>
          )}
        </div>

        <div className="admin-panel">
          <div className="admin-panel-head">
            <b>Quick actions</b>
            <span>Manage CodeFusion</span>
          </div>

          <div className="admin-quick-grid">
            <Link to="/admin/products/new">
              <Plus />
              Add product
            </Link>

            <Link to="/admin/categories">
              <FolderKanban />
              Categories
            </Link>

            <Link to="/admin/prompts">
              <FileCode2 />
              Prompts
            </Link>

            <Link to="/admin/plan">
              <Tag />
              Plan
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function K({ icon, label, value }) {
  return (
    <div className="admin-kpi">
      <span>{icon}</span>
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

function Products() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] =
    useState(null);

  function load() {
    setLoading(true);

    return api.products
      .adminAll()
      .then((result) =>
        setData(result.products || [])
      )
      .finally(() =>
        setLoading(false)
      );
  }

  useEffect(() => {
    load().catch(() =>
      setLoading(false)
    );
  }, []);

  const filtered = useMemo(() => {
    const q = query
      .toLowerCase()
      .trim();

    if (!q) {
      return data;
    }

    return data.filter((product) =>
      `${product.name} ${product.category} ${product.slug}`
        .toLowerCase()
        .includes(q)
    );
  }, [data, query]);

  async function confirmDelete() {
    if (!deleteId) {
      return;
    }

    try {
      await api.products.remove(
        deleteId
      );

      setDeleteId(null);

      await load();
    } catch (error) {
      alert(
        error?.message ||
          "Unable to delete product."
      );
    }
  }

  async function duplicate(id) {
    try {
      await api.products.duplicate(id);
      await load();
    } catch (error) {
      alert(
        error?.message ||
          "Unable to duplicate product."
      );
    }
  }

  return (
    <>
      <Head
        eyebrow="PRODUCTS"
        title="Product catalogue."
      >
        <Link
          to="/admin/products/new"
          className="button primary"
        >
          <Plus size={13} />
          Add product
        </Link>
      </Head>

      <div className="admin-toolbar">
        <input
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Search products…"
        />

        <span>
          {filtered.length} products
        </span>
      </div>

      <div className="admin-panel">
        {loading ? (
          <div className="admin-placeholder">
            Loading products…
          </div>
        ) : filtered.length ? (
          filtered.map((product) => (
            <div
              className="admin-product-row"
              key={product._id}
            >
              <div className="admin-thumb">
                <ProductVisual
                  product={{
                    ...product,
                    previewMode:
                      product.previewCode
                        ? "source"
                        : product.previewMode,
                    code:
                      product.code || {
                        html:
                          product.previewCode ||
                          "",
                        css: "",
                        javascript: "",
                      },
                  }}
                  mode="listing"
                />
              </div>

              <div>
                <strong>
                  {product.name}
                </strong>

                <small>
                  {product.category} ·{" "}
                  {product.productType}
                </small>

                <small>
                  {product.isPublished
                    ? "Published"
                    : "Draft"}

                  {product.isFeatured
                    ? " · Featured"
                    : ""}

                  {product.isVerified
                    ? " · Verified"
                    : ""}
                </small>
              </div>

              <em>{product.price}</em>

              <Link
                className="icon-action"
                to={`/products/${product.slug}`}
                target="_blank"
                rel="noreferrer"
                title="Preview"
              >
                <Eye size={14} />
              </Link>

              <Link
                className="icon-action"
                to={`/admin/products/${product._id}/edit`}
                title="Edit"
              >
                <Edit3 size={14} />
              </Link>

              <button
                type="button"
                className="icon-action"
                onClick={() =>
                  duplicate(product._id)
                }
                title="Duplicate"
              >
                <Copy size={14} />
              </button>

              <button
                type="button"
                className="icon-action danger"
                onClick={() =>
                  setDeleteId(product._id)
                }
                title="Delete"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))
        ) : (
          <div className="admin-placeholder">
            No products match your search.
          </div>
        )}
      </div>

      <Modal
        open={Boolean(deleteId)}
        title="Delete product?"
        onClose={() =>
          setDeleteId(null)
        }
        size="small"
      >
        <div className="confirm-modal">
          <h3>
            This cannot be undone.
          </h3>

          <p>
            The product and its
            catalogue record will be
            removed from CodeFusion.
          </p>

          <div className="modal-actions">
            <button
              type="button"
              className="button primary"
              onClick={confirmDelete}
            >
              Delete product
            </button>

            <button
              type="button"
              className="button ghost"
              onClick={() =>
                setDeleteId(null)
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

function Editor() {
  const { id } = useParams();
  const editing = Boolean(id);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "Cards",
    collection: "New",
    collections: [],
    description: "",
    shortDescription: "",
    productType: "FREE",
    price: "Free",
    priceAmount: 0,
    currency: "INR",
    compareAtPrice: "",
    badge: "NEW",
    version: "1.0.0",
    isPublished: false,
    isFeatured: false,
    isVerified: false,
    previewType: "card",
    thumbnail: "",
    thumbnailLight: "",
    discoveryTags: [],
    tags: [],
    features: [],
    specifications: [],
    compatibility: [],
    license:
      "Personal & commercial use",
    prompt: "",
    gallery: [],
    changelog: [],
    seoTitle: "",
    seoDescription: "",
    previewCode: "",
    code: {
      html: "",
      css: "",
      javascript: "",
    },
  });

  const [tab, setTab] =
    useState("basic");

  const [saved, setSaved] =
    useState(false);

  const [categoryOptions, setCategoryOptions] =
    useState([]);

  const [creatorOptions, setCreatorOptions] = useState([]);
  useEffect(() => {
    api.admin.creators().then((r) => setCreatorOptions(r.creators || [])).catch(() => {});
  }, []);

  useEffect(() => {
    api.admin
      .categories()
      .then((result) =>
        setCategoryOptions(
          result.categories || []
        )
      )
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!editing) {
      return;
    }

    // Just this product, with its full source — not the whole catalogue.
    api.products
      .adminOne(id)
      .then((result) => {
        const product =
          result.product;

        if (!product) {
          return;
        }

        setForm((current) => ({
          ...current,
          ...product,
          previewCode:
            product.previewCode || "",
          code: {
            html:
              product.code?.html ||
              "",
            css:
              product.code?.css ||
              "",
            javascript:
              product.code?.javascript ||
              "",
          },
        }));
      })
      .catch(() => {});
  }, [editing, id]);

  function setField(key, value) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    setSaved(false);
  }

  function setList(key, value) {
    setField(
      key,
      value
        .split("\n")
        .map((item) =>
          item.trim()
        )
        .filter(Boolean)
    );
  }

  function setTags(value) {
    setField(
      "tags",
      value
        .split(",")
        .map((item) =>
          item.trim()
        )
        .filter(Boolean)
    );
  }

  function setSpecs(value) {
    setField(
      "specifications",
      value
        .split("\n")
        .map((line) =>
          line
            .split("|")
            .map((part) =>
              part.trim()
            )
            .filter(Boolean)
        )
        .filter(
          (parts) =>
            parts.length >= 2
        )
    );
  }

  function setCode(key, value) {
    setForm((current) => ({
      ...current,
      code: {
        ...current.code,
        [key]: value,
      },
    }));

    setSaved(false);
  }

  function buildPreview() {
    return getCombinedSourceCode({
      ...form,
      previewCode: "",
      code: {
        html:
          form.code?.html || "",
        css:
          form.code?.css || "",
        javascript:
          form.code?.javascript ||
          "",
      },
    });
  }

  async function submit(event) {
    event.preventDefault();
    setSaved(false);

    try {
      const combinedPreviewCode =
        buildPreview();

      const productPayload = {
        ...form,

        previewMode:
          combinedPreviewCode
            ? "source"
            : form.previewMode ||
              undefined,

        previewCode:
          combinedPreviewCode,

        code: {
          html:
            form.code?.html || "",
          css:
            form.code?.css || "",
          javascript:
            form.code?.javascript ||
            "",
        },
      };

      if (editing) {
        await api.products.update(
          id,
          productPayload
        );
      } else {
        await api.products.create(
          productPayload
        );
      }

      setForm((current) => ({
        ...current,
        previewMode:
          combinedPreviewCode
            ? "source"
            : current.previewMode,
        previewCode:
          combinedPreviewCode,
      }));

      setSaved(true);
    } catch (error) {
      alert(
        error?.message ||
          "Unable to save product."
      );
    }
  }

  const previewCode =
    useMemo(
      () => buildPreview(),
      [
        form.code?.html,
        form.code?.css,
        form.code?.javascript,
      ]
    );

  const preview = {
    ...form,
    slug:
      form.slug || "preview",
    previewMode: "source",
    previewCode,
    code: {
      html:
        form.code?.html || "",
      css:
        form.code?.css || "",
      javascript:
        form.code?.javascript ||
        "",
    },
  };

  return (
    <>
      <Head
        eyebrow={
          editing
            ? "EDIT PRODUCT"
            : "NEW PRODUCT"
        }
        title={
          editing
            ? "Refine the product."
            : "Create a product."
        }
      >
        <Link
          className="button ghost"
          to="/admin/products"
        >
          Back
        </Link>
      </Head>

      <div className="editor-layout">
        <form
          className="admin-editor full-editor"
          onSubmit={submit}
        >
          <div className="editor-tabs">
            {[
              ["basic", "Basic"],
              [
                "presentation",
                "Presentation",
              ],
              ["source", "Source"],
              ["prompt", "Prompt"],
              ["seo", "SEO"],
            ].map(
              ([key, label]) => (
                <button
                  type="button"
                  key={key}
                  className={
                    tab === key
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setTab(key)
                  }
                >
                  {label}
                </button>
              )
            )}
          </div>

          {tab === "basic" && (
            <>
              <div className="editor-grid">
                <label>
                  Name

                  <input
                    required
                    value={form.name}
                    onChange={(event) =>
                      setField(
                        "name",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Slug

                  <input
                    required
                    disabled={editing}
                    value={form.slug}
                    onChange={(event) =>
                      setField(
                        "slug",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Category

                  <select
                    required
                    value={
                      form.category
                    }
                    onChange={(event) =>
                      setField(
                        "category",
                        event.target.value
                      )
                    }
                  >
                    {!categoryOptions.some(
                      (cat) =>
                        cat.name ===
                        form.category
                    ) &&
                      form.category && (
                        <option
                          value={
                            form.category
                          }
                        >
                          {form.category}
                        </option>
                      )}

                    {categoryOptions.map(
                      (cat) => (
                        <option
                          key={cat.name}
                          value={cat.name}
                        >
                          {cat.name}
                        </option>
                      )
                    )}
                  </select>
                </label>

                <label>
                  Collection

                  <input
                    value={
                      form.collection ||
                      ""
                    }
                    onChange={(event) =>
                      setField(
                        "collection",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Type

                  <select
                    value={
                      form.productType
                    }
                    onChange={(event) =>
                      setField(
                        "productType",
                        event.target.value
                      )
                    }
                  >
                    <option value="FREE">
                      FREE
                    </option>

                    <option value="PRO">
                      PRO
                    </option>

                    <option value="PREMIUM">
                      PREMIUM
                    </option>
                  </select>
                </label>

                <label>
                  Display price

                  <input
                    value={form.price}
                    onChange={(event) =>
                      setField(
                        "price",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Numeric price

                  <input
                    type="number"
                    min="0"
                    value={
                      form.priceAmount
                    }
                    onChange={(event) =>
                      setField(
                        "priceAmount",
                        Number(
                          event.target.value
                        )
                      )
                    }
                  />
                </label>

                <label>
                  Currency

                  <input
                    value={
                      form.currency ||
                      "INR"
                    }
                    onChange={(event) =>
                      setField(
                        "currency",
                        event.target.value.toUpperCase()
                      )
                    }
                  />
                </label>

                <label>
                  Compare at price

                  <input
                    value={
                      form.compareAtPrice ||
                      ""
                    }
                    onChange={(event) =>
                      setField(
                        "compareAtPrice",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Badge

                  <input
                    value={form.badge}
                    onChange={(event) =>
                      setField(
                        "badge",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Version

                  <input
                    value={form.version}
                    onChange={(event) =>
                      setField(
                        "version",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Preview type

                  <input
                    value={
                      form.previewType
                    }
                    onChange={(event) =>
                      setField(
                        "previewType",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>

              <label>
                Description

                <textarea
                  rows="5"
                  value={
                    form.description
                  }
                  onChange={(event) =>
                    setField(
                      "description",
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                Tags

                <input
                  value={(
                    form.tags || []
                  ).join(", ")}
                  onChange={(event) =>
                    setTags(
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                Creator
                <select
                  value={form.creator || ""}
                  onChange={(event) => setField("creator", event.target.value || null)}
                >
                  <option value="">— None —</option>
                  {creatorOptions.map((c) => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                  ))}
                </select>
              </label>

              <label>
                Discovery tags
                <small>Use cases and styles shown as filters, e.g. SaaS, E-commerce, Animated, Minimal, GSAP, No dependencies</small>
                <input
                  value={(form.discoveryTags || []).join(", ")}
                  onChange={(event) =>
                    setField(
                      "discoveryTags",
                      event.target.value.split(",").map((item) => item.trim()).filter(Boolean)
                    )
                  }
                />
              </label>

              <label>
                Thumbnail image URL
                <small>Listing cards show this image until hovered. Generated automatically by <code>npm run thumbnails</code>; paste a URL to use your own.</small>
                <input
                  value={form.thumbnail || ""}
                  placeholder="https://…/poster.webp"
                  onChange={(event) => setField("thumbnail", event.target.value.trim())}
                />
              </label>

              <label>
                Thumbnail image URL (light theme)
                <input
                  value={form.thumbnailLight || ""}
                  placeholder="Falls back to the image above"
                  onChange={(event) => setField("thumbnailLight", event.target.value.trim())}
                />
              </label>

              <div className="editor-grid">
                <label>
                  Features

                  <textarea
                    rows="7"
                    value={(
                      form.features || []
                    ).join("\n")}
                    onChange={(event) =>
                      setList(
                        "features",
                        event.target.value
                      )
                    }
                  />
                </label>

                <label>
                  Compatibility

                  <textarea
                    rows="7"
                    value={(
                      form.compatibility ||
                      []
                    ).join("\n")}
                    onChange={(event) =>
                      setList(
                        "compatibility",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>

              <label>
                Specifications

                <textarea
                  rows="7"
                  value={(
                    form.specifications ||
                    []
                  )
                    .map((item) =>
                      item.join(" | ")
                    )
                    .join("\n")}
                  onChange={(event) =>
                    setSpecs(
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                License

                <textarea
                  rows="3"
                  value={
                    form.license || ""
                  }
                  onChange={(event) =>
                    setField(
                      "license",
                      event.target.value
                    )
                  }
                />
              </label>
            </>
          )}

          {tab === "presentation" && (
            <div className="editor-grid">
              <label>
                Gallery

                <textarea
                  rows="8"
                  value={(
                    form.gallery || []
                  ).join("\n")}
                  onChange={(event) =>
                    setList(
                      "gallery",
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                Changelog

                <textarea
                  rows="8"
                  value={(
                    form.changelog || []
                  ).join("\n")}
                  onChange={(event) =>
                    setList(
                      "changelog",
                      event.target.value
                    )
                  }
                />
              </label>

              <label className="check-label">
                <input
                  type="checkbox"
                  checked={Boolean(
                    form.isPublished
                  )}
                  onChange={(event) =>
                    setField(
                      "isPublished",
                      event.target.checked
                    )
                  }
                />

                Published
              </label>

              <label className="check-label">
                <input
                  type="checkbox"
                  checked={Boolean(
                    form.isFeatured
                  )}
                  onChange={(event) =>
                    setField(
                      "isFeatured",
                      event.target.checked
                    )
                  }
                />

                Featured
              </label>

              <label className="check-label">
                <input
                  type="checkbox"
                  checked={Boolean(
                    form.isVerified
                  )}
                  onChange={(event) =>
                    setField(
                      "isVerified",
                      event.target.checked
                    )
                  }
                />

                Verified product
              </label>
            </div>
          )}

          {tab === "source" && (
            <>
              <label>
                HTML

                <textarea
                  className="code-input"
                  rows="18"
                  value={
                    form.code?.html ||
                    ""
                  }
                  onChange={(event) =>
                    setCode(
                      "html",
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                CSS

                <textarea
                  className="code-input"
                  rows="18"
                  value={
                    form.code?.css || ""
                  }
                  onChange={(event) =>
                    setCode(
                      "css",
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                JavaScript

                <textarea
                  className="code-input"
                  rows="18"
                  value={
                    form.code
                      ?.javascript || ""
                  }
                  onChange={(event) =>
                    setCode(
                      "javascript",
                      event.target.value
                    )
                  }
                />
              </label>
            </>
          )}

          {tab === "prompt" && (
            <label>
              Exact recreation prompt

              <textarea
                rows="22"
                value={
                  form.prompt || ""
                }
                onChange={(event) =>
                  setField(
                    "prompt",
                    event.target.value
                  )
                }
                placeholder="Write the exact prompt shown with this product."
              />
            </label>
          )}

          {tab === "seo" && (
            <div className="editor-grid">
              <label>
                SEO title

                <input
                  value={
                    form.seoTitle || ""
                  }
                  onChange={(event) =>
                    setField(
                      "seoTitle",
                      event.target.value
                    )
                  }
                />
              </label>

              <label>
                SEO description

                <textarea
                  rows="5"
                  value={
                    form.seoDescription ||
                    ""
                  }
                  onChange={(event) =>
                    setField(
                      "seoDescription",
                      event.target.value
                    )
                  }
                />
              </label>
            </div>
          )}

          <div className="editor-save-row">
            <button
              type="submit"
              className="button primary"
            >
              <Save size={14} />

              {saved
                ? "Saved to MongoDB ✓"
                : "Save product"}
            </button>
          </div>
        </form>

        <aside className="editor-preview">
          <div className="admin-panel-head">
            <b>Live preview</b>

            <span>
              {form.name ||
                "Untitled product"}
            </span>
          </div>

          <div className="admin-live-preview">
            {previewCode ? (
              <ProductVisual
                product={preview}
                mode="detail"
              />
            ) : (
              <div className="admin-placeholder">
                Add HTML, CSS and
                JavaScript in Source
                to preview the product.
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}

function Categories() {
  const [data, setData] =
    useState([]);

  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const load = () =>
    api.admin
      .categories()
      .then((result) =>
        setData(
          result.categories || []
        )
      )
      .catch(() => {});

  useEffect(() => {
    load();
  }, []);

  async function add(event) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    try {
      await api.admin.createCategory({
        name,
        description,
      });

      setName("");
      setDescription("");

      load();
    } catch (error) {
      alert(
        error?.message ||
          "Unable to create category."
      );
    }
  }

  return (
    <>
      <Head
        eyebrow="CATEGORIES"
        title="Manage categories."
      />

      <form
        className="inline-add"
        onSubmit={add}
      >
        <input
          required
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="Category name"
        />

        <input
          value={description}
          onChange={(event) =>
            setDescription(
              event.target.value
            )
          }
          placeholder="Short description"
        />

        <button className="button primary">
          <Plus size={13} />
          Add
        </button>
      </form>

      <div className="admin-category-grid">
        {data.map((item) => (
          <div
            className="admin-category-box"
            key={item._id}
          >
            <b>{item.name}</b>

            <span>
              {item.productCount} products
            </span>

            <button
              type="button"
              onClick={async () => {
                if (
                  !confirm(
                    "Delete category?"
                  )
                ) {
                  return;
                }

                try {
                  await api.admin.removeCategory(
                    item._id
                  );

                  load();
                } catch (error) {
                  alert(
                    error?.message ||
                      "Unable to delete category."
                  );
                }
              }}
              title="Delete"
            >
              <Trash2 size={13} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Collections() {
  const [data, setData] =
    useState([]);

  const [name, setName] =
    useState("");

  const load = () =>
    api.admin
      .collections()
      .then((result) =>
        setData(
          result.collections || []
        )
      )
      .catch(() => {});

  useEffect(() => {
    load();
  }, []);

  async function add(event) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    try {
      await api.admin.createCollection({
        name,
      });

      setName("");

      load();
    } catch (error) {
      alert(
        error?.message ||
          "Unable to create collection."
      );
    }
  }

  return (
    <>
      <Head
        eyebrow="COLLECTIONS"
        title="Manage collections."
      />

      <form
        className="inline-add"
        onSubmit={add}
      >
        <input
          required
          value={name}
          onChange={(event) =>
            setName(
              event.target.value
            )
          }
          placeholder="Collection name"
        />

        <button className="button primary">
          <Plus size={13} />
          Add collection
        </button>
      </form>

      <div className="admin-category-grid">
        {data.map((item) => (
          <div
            className="admin-category-box"
            key={item._id}
          >
            <b>{item.name}</b>

            <span>
              {item.productCount} products
            </span>

            <button
              type="button"
              onClick={async () => {
                if (
                  !confirm(
                    "Delete collection?"
                  )
                ) {
                  return;
                }

                try {
                  await api.admin.removeCollection(
                    item._id
                  );

                  load();
                } catch (error) {
                  alert(
                    error?.message ||
                      "Unable to delete collection."
                  );
                }
              }}
            >
              <Trash2 size={13} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function CreatorsAdmin() {
  const blank = { name: "", tagline: "", bio: "", avatarUrl: "", website: "", github: "", twitter: "", isActive: true };
  const [creators, setCreators] = useState([]);
  const [form, setForm] = useState(blank);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const load = () => api.admin.creators().then((r) => setCreators(r.creators || [])).catch((e) => setError(e.message));
  useEffect(() => {
    load();
  }, []);

  async function submit(event) {
    event.preventDefault();
    setError("");
    try {
      if (editingId) await api.admin.updateCreator(editingId, form);
      else await api.admin.createCreator(form);
      setForm(blank);
      setEditingId(null);
      load();
    } catch (e) {
      setError(e.message);
    }
  }

  async function remove(creator) {
    if (!window.confirm(`Delete ${creator.name}?`)) return;
    try {
      await api.admin.removeCreator(creator._id);
      load();
    } catch (e) {
      setError(e.message);
    }
  }

  const field = (key, label, props = {}) => (
    <label>
      {label}
      {props.textarea ? (
        <textarea rows="4" value={form[key]} onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))} />
      ) : (
        <input value={form[key]} onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))} {...props} />
      )}
    </label>
  );

  return (
    <>
      <Head eyebrow="CREATORS" title="Credit the makers." />
      {error && <div className="form-error">{error}</div>}
      <div className="admin-overview-grid">
        <form className="admin-editor" onSubmit={submit}>
          <b>{editingId ? "Edit creator" : "New creator"}</b>
          {field("name", "Name", { required: true, maxLength: 80 })}
          {field("tagline", "Tagline", { maxLength: 140 })}
          {field("bio", "Bio", { textarea: true })}
          {field("avatarUrl", "Avatar image URL")}
          <div className="editor-grid">
            {field("website", "Website")}
            {field("github", "GitHub username")}
          </div>
          {field("twitter", "X / Twitter handle")}
          <label className="check-label">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm((f) => ({ ...f, isActive: e.target.checked }))} /> Listed on /creators
          </label>
          <div className="modal-actions">
            <button type="submit" className="button primary"><Save size={13} /> {editingId ? "Save" : "Add creator"}</button>
            {editingId && <button type="button" className="button ghost" onClick={() => { setEditingId(null); setForm(blank); }}>Cancel</button>}
          </div>
        </form>
        <div className="admin-panel">
          {creators.map((creator) => (
            <div className="admin-row" key={creator._id}>
              <strong>{creator.name}</strong>
              <small>{creator.productCount} products{creator.isActive ? "" : " · hidden"}</small>
              <em>/{creator.slug}</em>
              <button type="button" aria-label={`Edit ${creator.name}`} onClick={() => { setEditingId(creator._id); setForm({ ...blank, ...Object.fromEntries(Object.keys(blank).map((k) => [k, creator[k] ?? blank[k]])) }); }}><Edit3 size={13} /></button>
              <button type="button" aria-label={`Delete ${creator.name}`} onClick={() => remove(creator)}><Trash2 size={13} /></button>
            </div>
          ))}
          {!creators.length && <div className="admin-placeholder">No creators yet.</div>}
        </div>
      </div>
    </>
  );
}

function Prompts() {
  const [products, setProducts] =
    useState([]);

  useEffect(() => {
    api.products
      .adminAll()
      .then((result) =>
        setProducts(
          result.products || []
        )
      )
      .catch(() => {});
  }, []);

  return (
    <>
      <Head
        eyebrow="PROMPTS"
        title="Manage product prompts."
      />

      <div className="admin-panel">
        {products.map((product) => (
          <div
            className="admin-row"
            key={product._id}
          >
            <strong>
              {product.name}
            </strong>

            <small>
              {product.prompt
                ? "Custom prompt"
                : "Generated fallback prompt"}
            </small>

            <Link
              to={`/admin/products/${product._id}/edit`}
            >
              Edit prompt →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

function Subscribers() {
  const [subscribers, setSubscribers] =
    useState([]);

  useEffect(() => {
    api.subscription
      .adminSubscribers()
      .then((result) =>
        setSubscribers(
          result.subscribers || []
        )
      )
      .catch(() => {});
  }, []);

  return (
    <>
      <Head
        eyebrow="SUBSCRIBERS"
        title="Manage subscriptions."
      />

      <div className="admin-panel">
        {subscribers.length ? (
          subscribers.map((subscriber) => (
            <div
              className="admin-row"
              key={subscriber._id}
            >
              <strong>
                {subscriber.name ||
                  "Customer"}
              </strong>

              <small>
                {subscriber.email ||
                  ""}
              </small>

              <em>
                {subscriber.subscriptionStatus}
              </em>

              <small>
                {subscriber.tokenBalance}/
                {subscriber.monthlyTokenAllocation}{" "}
                tokens
              </small>

              <small>
                Until{" "}
                {subscriber.subscriptionEndDate
                  ? new Date(
                      subscriber.subscriptionEndDate
                    ).toLocaleDateString()
                  : "—"}
              </small>
            </div>
          ))
        ) : (
          <div className="admin-placeholder">
            No subscribers yet.
          </div>
        )}
      </div>
    </>
  );
}

function UsersPage() {
  const [users, setUsers] =
    useState([]);

  useEffect(() => {
    api.admin
      .users()
      .then((result) =>
        setUsers(
          result.users || []
        )
      )
      .catch(() => {});
  }, []);

  return (
    <>
      <Head
        eyebrow="USERS"
        title="Customers and admins."
      />

      <div className="admin-panel">
        {users.map((user) => (
          <div
            className="admin-row"
            key={user._id}
          >
            <strong>
              {user.name}
            </strong>

            <small>
              {user.email}
            </small>

            <em>
              {user.role}
            </em>

            <small>
              {new Date(
                user.createdAt
              ).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </>
  );
}

function Reviews() {
  const [reviews, setReviews] =
    useState([]);

  const load = () =>
    api.reviews
      .admin()
      .then((result) =>
        setReviews(
          result.reviews || []
        )
      )
      .catch(() => {});

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <Head
        eyebrow="REVIEWS"
        title="Moderate feedback."
      />

      <div className="admin-panel">
        {reviews.length ? (
          reviews.map((review) => (
            <div
              className="review-admin-row"
              key={review._id}
            >
              <div>
                <strong>
                  {review.product?.name}
                </strong>

                <small>
                  {review.user?.name} · {review.status}
                  {review.verifiedCopier ? " · verified user" : ""}
                  {review.usedInProduction ? " · used in production" : ""}
                  {review.helpfulCount ? ` · ${review.helpfulCount} helpful` : ""}
                </small>

                {review.title && <b>{review.title}</b>}
                <p>{review.body}</p>
              </div>

              <span>
                {review.rating} ★
              </span>

              <div className="review-actions">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await api.reviews.moderate(
                        review._id,
                        "approved"
                      );

                      load();
                    } catch (error) {
                      alert(
                        error?.message ||
                          "Unable to approve review."
                      );
                    }
                  }}
                >
                  Approve
                </button>

                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await api.reviews.moderate(
                        review._id,
                        "rejected"
                      );

                      load();
                    } catch (error) {
                      alert(
                        error?.message ||
                          "Unable to reject review."
                      );
                    }
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="admin-placeholder">
            No reviews yet.
          </div>
        )}
      </div>
    </>
  );
}

function TokenActivity() {
  const [transactions, setTransactions] =
    useState([]);

  useEffect(() => {
    api.subscription
      .adminTransactions()
      .then((result) =>
        setTransactions(
          result.transactions || []
        )
      )
      .catch(() => {});
  }, []);

  return (
    <>
      <Head
        eyebrow="TOKENS"
        title="Token activity."
      />

      <div className="admin-panel">
        {transactions.length ? (
          transactions.map((transaction) => (
            <div
              className="admin-row"
              key={transaction._id}
            >
              <strong>
                {transaction.userId?.name ||
                  "User"}
              </strong>

              <small>
                {transaction.userId?.email ||
                  ""}
              </small>

              <em>
                {transaction.productName ||
                  transaction.productId?.name ||
                  "CodeFusion"}
              </em>

              <small>
                {transaction.actionType.replace(
                  "_",
                  " "
                )}
              </small>

              <small>
                {new Date(
                  transaction.createdAt
                ).toLocaleString()}
              </small>
            </div>
          ))
        ) : (
          <div className="admin-placeholder">
            No token activity yet.
          </div>
        )}
      </div>
    </>
  );
}

function Funnel({ title, steps }) {
  const top = Math.max(1, steps[0]?.count || 0);
  return (
    <div className="analytics-card">
      <b>{title}</b>
      {steps.map((step) => (
        <div className="funnel-step" key={step.step}>
          <span>{step.step}</span>
          <div className="funnel-bar"><i style={{ width: `${Math.min(100, (step.count / top) * 100)}%` }} /></div>
          <strong>{step.count}</strong>
          <small>{steps[0]?.count ? `${Math.round((step.count / steps[0].count) * 100)}%` : "—"}</small>
        </div>
      ))}
    </div>
  );
}

function Analytics() {
  const [days, setDays] = useState(30);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setError("");
    api.analytics
      .admin(days)
      .then((result) => active && setData(result))
      .catch((err) => active && setError(err.message));
    return () => {
      active = false;
    };
  }, [days]);

  const daily = data?.daily || [];
  const max = Math.max(1, ...daily.map((item) => item.count));

  return (
    <>
      <Head eyebrow="ANALYTICS" title="Library performance.">
        <select className="sort-select" value={days} onChange={(e) => setDays(Number(e.target.value))} aria-label="Time range">
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
          <option value={90}>Last 90 days</option>
        </select>
      </Head>

      {error && <div className="form-error">{error}</div>}
      {!data && !error && <div className="admin-placeholder">Loading analytics…</div>}

      {data && (
        <div className="analytics-grid">
          <Funnel title="Copy funnel" steps={data.funnels.copy} />
          <Funnel title="Checkout funnel" steps={data.funnels.checkout} />

          <div className="analytics-card">
            <b>Top products</b>
            <div className="analytics-line head"><span>Product</span><strong>Views · Saves · Copies</strong></div>
            {data.top.map((item) => (
              <div className="analytics-line" key={item.slug}>
                <span><Link to={`/products/${item.slug}`}>{item.name}</Link></span>
                <strong>{item.views} · {item.saves} · {item.copies}</strong>
              </div>
            ))}
            {!data.top.length && <small>No product activity yet.</small>}
          </div>

          <div className="analytics-card">
            <b>Top searches</b>
            {data.searches.map((item) => (
              <div className="analytics-line" key={item._id || "(empty)"}>
                <span>{item._id || "(empty)"}</span>
                <strong>{item.count} · ~{Math.round(item.avgResults || 0)} results</strong>
              </div>
            ))}
            {!data.searches.length && <small>No searches yet.</small>}
          </div>

          <div className="analytics-card">
            <b>Searches with no results</b>
            {data.zeroSearches.map((item) => (
              <div className="analytics-line" key={item._id || "(empty)"}>
                <span>{item._id || "(empty)"}</span>
                <strong>{item.count}</strong>
              </div>
            ))}
            {!data.zeroSearches.length && <small>None — every search found something.</small>}
          </div>

          <div className="analytics-card">
            <b>All events</b>
            {data.totals.map((item) => (
              <div className="analytics-line" key={item._id}>
                <span>{item._id}</span>
                <strong>{item.count}{item.users ? ` · ${item.users} users` : ""}</strong>
              </div>
            ))}
          </div>

          <div className="analytics-card full">
            <b>Daily activity</b>
            <div className="bars">
              {daily.map((item) => (
                <i key={item._id} title={`${item._id}: ${item.count}`} style={{ height: `${Math.max(8, (item.count / max) * 100)}%` }} />
              ))}
            </div>
          </div>

          <div className="analytics-card full">
            <b>Recent client errors</b>
            {data.errors.map((item) => (
              <div className="analytics-line" key={item._id}>
                <span>{item.meta?.message} <small>{item.meta?.path} {item.meta?.source}</small></span>
                <strong>{new Date(item.createdAt).toLocaleString()}</strong>
              </div>
            ))}
            {!data.errors.length && <small>No browser errors reported.</small>}
          </div>
        </div>
      )}
    </>
  );
}

function PlanSettings() {
  const [plan, setPlan] = useState({
    monthlyPrice: 499,
    monthlyTokens: 100,
    durationDays: 30,
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    api.subscription
      .adminSettings()
      .then((result) => {
        if (result.plan) setPlan(result.plan);
      })
      .catch(() => {});
  }, []);

  function change(key, value) {
    setPlan((current) => ({
      ...current,
      [key]: value,
    }));

    setSaved(false);
  }

  return (
    <>
      <Head
        eyebrow="PLAN"
        title="Subscription plan."
      />

      <div className="admin-editor">
        <div className="settings-list">
          <label>
            Monthly price (₹)
            <input
              type="number"
              value={plan.monthlyPrice}
              onChange={(event) =>
                change(
                  "monthlyPrice",
                  event.target.value
                )
              }
            />
          </label>

          <label>
            Monthly tokens
            <input
              type="number"
              value={plan.monthlyTokens}
              onChange={(event) =>
                change(
                  "monthlyTokens",
                  event.target.value
                )
              }
            />
          </label>

          <label>
            Duration (days)
            <input
              type="number"
              value={plan.durationDays}
              onChange={(event) =>
                change(
                  "durationDays",
                  event.target.value
                )
              }
            />
          </label>
        </div>

        <button
          type="button"
          className="button primary"
          onClick={async () => {
            try {
              await api.subscription.updateAdminSettings(
                plan
              );

              setSaved(true);
            } catch (error) {
              alert(
                error?.message ||
                  "Unable to save plan."
              );
            }
          }}
        >
          <SettingsIcon size={14} />

          {saved
            ? "Plan saved ✓"
            : "Save plan"}
        </button>
      </div>
    </>
  );
}

function Settings() {
  const [settings, setSettings] =
    useState([
      {
        key: "site_name",
        value: "CodeFusion",
      },
      {
        key: "support_email",
        value:
          "hello@codefusion.dev",
      },
    ]);

  const [saved, setSaved] =
    useState(false);

  useEffect(() => {
    api.admin
      .settings()
      .then((result) => {
        if (
          result.settings?.length
        ) {
          setSettings(
            result.settings
          );
        }
      })
      .catch(() => {});
  }, []);

  function change(index, value) {
    setSettings((current) =>
      current.map(
        (item, itemIndex) =>
          itemIndex === index
            ? {
                ...item,
                value,
              }
            : item
      )
    );

    setSaved(false);
  }

  return (
    <>
      <Head
        eyebrow="SETTINGS"
        title="Store settings."
      />

      <div className="admin-editor">
        <div className="settings-list">
          {settings.map(
            (item, index) => (
              <label key={item.key}>
                {item.key}

                <input
                  value={
                    item.value || ""
                  }
                  onChange={(event) =>
                    change(
                      index,
                      event.target.value
                    )
                  }
                />
              </label>
            )
          )}
        </div>

        <button
          type="button"
          className="button primary"
          onClick={async () => {
            try {
              await api.admin.saveSettings(
                settings
              );

              setSaved(true);
            } catch (error) {
              alert(
                error?.message ||
                  "Unable to save settings."
              );
            }
          }}
        >
          <SettingsIcon size={14} />

          {saved
            ? "Settings saved ✓"
            : "Save settings"}
        </button>
      </div>
    </>
  );
}