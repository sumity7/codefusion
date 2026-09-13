import {
  ArrowRight,
  Code2,
  Sparkles,
  Layers,
  Package,
  LayoutGrid,
  FileText,
  Clipboard,
  Compass,
  Eye,
  MousePointerClick,
  Rocket,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const OFFERS = [
  { icon: Layers, title: "UI Components", body: "Buttons, cards, navigation, loaders and more — small, focused pieces you can drop into any project." },
  { icon: Package, title: "Boilerplates", body: "Complete, distinct page templates across SaaS, agency, ecommerce, fintech and more starting points." },
  { icon: LayoutGrid, title: "Complete UI Systems", body: "Full sections — heroes, pricing, dashboards, forms — built with consistent spacing and interaction." },
  { icon: Sparkles, title: "Premium Prompts", body: "A recreation prompt for every product, describing exactly how to rebuild it faithfully." },
  { icon: Clipboard, title: "Copy-ready Code", body: "Real HTML, CSS and JavaScript, ready to paste into your own codebase — no wrappers, no dependencies." },
];

const STEPS = [
  { icon: Compass, title: "Explore", body: "Browse by category or search for what you need." },
  { icon: Eye, title: "Preview", body: "See it live in a sandboxed preview before deciding." },
  { icon: MousePointerClick, title: "Choose", body: "Pick the product that fits your project." },
  { icon: Clipboard, title: "Copy", body: "Copy the code or the recreation prompt in one click." },
  { icon: Rocket, title: "Build", body: "Paste it into your project and keep moving." },
];

const WHY = [
  "Original UI, not recycled templates",
  "Practical designs built for real use cases",
  "Responsive interfaces on every product",
  "Ready-to-use, copy-paste code",
  "A premium prompt included with every product",
  "One subscription unlocks the entire library",
];

export default function About() {
  return (
    <main className="about-page">
      <ScrollReveal>
        <section className="about-hero container">
          <span className="eyebrow">ABOUT CODEFUSION</span>
          <h1>A small library with<br /><span>high standards.</span></h1>
          <p>CodeFusion provides original UI products — components, boilerplates and complete UI systems — each with a live preview and copy-ready implementation, so you can move from idea to working interface without losing visual quality along the way.</p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={40}>
        <section className="container about-section-head">
          <span className="eyebrow">WHAT CODEFUSION OFFERS</span>
          <h2>Everything you need to build faster.</h2>
        </section>
      </ScrollReveal>
      <section className="container offer-grid">
        {OFFERS.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 70}>
            <div className="offer-card">
              <span className="offer-icon"><item.icon size={18} /></span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <ScrollReveal>
        <section className="container about-section-head">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>From browsing to building, in five steps.</h2>
        </section>
      </ScrollReveal>
      <section className="container steps-grid">
        {STEPS.map((step, index) => (
          <ScrollReveal key={step.title} delay={index * 70}>
            <div className="step-card">
              <span className="step-number">{index + 1}</span>
              <span className="step-icon"><step.icon size={16} /></span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <ScrollReveal>
        <section className="about-story container">
          <div>
            <span className="eyebrow">WHY CODEFUSION</span>
            <h2>Built for people who ship.</h2>
          </div>
          <div>
            <ul className="why-list">
              {WHY.map((point) => (
                <li key={point}><Check size={14} /> {point}</li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      <section className="about-values container">
        {[
          { icon: <Code2 />, title: "Useful", body: "Each product starts with a real web need." },
          { icon: <Sparkles />, title: "Considered", body: "Spacing, motion and hierarchy are deliberate." },
          { icon: <FileText />, title: "Copy-ready", body: "Source is presented as one usable piece." },
        ].map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 80}>
            <div className="value-card">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <ScrollReveal>
        <section className="final-cta container">
          <div>
            <span className="eyebrow">EXPLORE</span>
            <h2>See what you can build.</h2>
          </div>
          <Link to="/products" className="button primary">Explore products <ArrowRight size={15} /></Link>
        </section>
      </ScrollReveal>
    </main>
  );
}
