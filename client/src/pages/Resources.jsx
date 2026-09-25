import { NavLink, Routes, Route, Link, useLocation } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  Rocket,
  BookOpen,
  ShieldCheck,
  GitBranch,
  LifeBuoy,
  Compass,
  Clipboard,
  Zap,
  CreditCard,
  UserRound,
  ArrowRight,
} from "lucide-react";

const SIDEBAR = [
  { to: "/resources/getting-started", label: "Getting started", icon: Rocket },
  { to: "/resources/docs", label: "Documentation", icon: BookOpen },
  { to: "/resources/license", label: "License", icon: ShieldCheck },
  { to: "/resources/changelog", label: "Changelog", icon: GitBranch },
  { to: "/resources/support", label: "Support", icon: LifeBuoy },
];

const DOC_TOPICS = [
  {
    icon: Compass,
    title: "Getting started",
    body: "Browse the product library from the Products page — filter by category in the sidebar, narrow results with the All / Free / Included in Plan / Verified tabs, or search directly.",
  },
  {
    icon: BookOpen,
    title: "Products",
    body: "Every product has a live, sandboxed preview so you can see exactly how it behaves before committing to it — no guessing from a static screenshot.",
  },
  {
    icon: Clipboard,
    title: "Copy system",
    body: "Each product page has Copy All Code and Copy Prompt actions. Content is only ever sent to your clipboard after the server verifies your subscription and token balance — nothing is exposed until then.",
  },
  {
    icon: Zap,
    title: "Tokens",
    body: "Free products don't cost tokens. Copying code or a prompt from a Pro or Premium product uses exactly 1 token per action, deducted atomically on the server so concurrent requests can't double-spend.",
  },
  {
    icon: CreditCard,
    title: "Subscription",
    body: "CodeFusion Pro is a single monthly subscription that refreshes your token allowance on a 30-day cycle and unlocks every non-free product in the library — no per-product purchases.",
  },
  {
    icon: UserRound,
    title: "Account",
    body: "Your Account page shows your token balance, subscription status, wishlist and recent copy activity in one place, and lets you update your profile name.",
  },
];

function SimpleDoc({ eyebrow, title, text, extra }) {
  return (
    <article className="resource-card">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
      {extra}
    </article>
  );
}

function DocsHub() {
  return (
    <article className="resource-card docs-hub">
      <span className="eyebrow">DOCUMENTATION</span>
      <h1>How CodeFusion works.</h1>
      <p>A quick reference for browsing, subscribing, and copying from the CodeFusion library.</p>
      <div className="docs-topic-grid">
        {DOC_TOPICS.map((topic) => (
          <div className="docs-topic-card" key={topic.title}>
            <span className="docs-topic-icon"><topic.icon size={16} /></span>
            <h3>{topic.title}</h3>
            <p>{topic.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Resources() {
  const { pathname } = useLocation();
  const section = SIDEBAR.find((item) => pathname.startsWith(item.to));
  useDocumentTitle(section ? section.label : "Resources");
  return (
    <main className="resources container">
      <div className="resources-head">
        <span className="eyebrow">RESOURCES</span>
        <h1>Documentation</h1>
        <p>Everything you need to browse, subscribe and copy from CodeFusion.</p>
      </div>
      <div className="resource-layout">
        <aside>
          {SIDEBAR.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
              <item.icon size={14} />
              {item.label}
            </NavLink>
          ))}
        </aside>
        <section>
          <Routes>
            <Route
              path="getting-started"
              element={
                <SimpleDoc
                  eyebrow="GETTING STARTED"
                  title="Find your first product."
                  text="Head to Products and use the category sidebar or the All / Free / Included in Plan / Verified tabs to narrow the library, or search directly by keyword."
                  extra={
                    <Link to="/products" className="button primary">
                      Browse products <ArrowRight size={14} />
                    </Link>
                  }
                />
              }
            />
            <Route path="docs" element={<DocsHub />} />
            <Route
              path="license"
              element={
                <SimpleDoc
                  eyebrow="LICENSE"
                  title="Usage terms."
                  text="Copied code and prompts are for use in your own projects under the terms set for your CodeFusion Pro subscription. Redistribution of the source itself as a standalone product is not permitted."
                />
              }
            />
            <Route
              path="changelog"
              element={
                <SimpleDoc
                  eyebrow="CHANGELOG"
                  title="What's new."
                  text="New products are added to the library on an ongoing basis, tracked per-product by the version shown on its detail page."
                />
              }
            />
            <Route
              path="support"
              element={
                <SimpleDoc
                  eyebrow="SUPPORT"
                  title="Get in touch."
                  text="Questions about your subscription, tokens, or a specific product? Reach us at hello@codefusion.dev."
                />
              }
            />
            <Route
              path="*"
              element={
                <SimpleDoc
                  eyebrow="RESOURCES"
                  title="Guides and documentation."
                  text="Pick a topic from the sidebar to get started."
                />
              }
            />
          </Routes>
        </section>
      </div>
    </main>
  );
}
