import { getCombinedSourceCode } from "../services/combinedSource";

function hasSourceCode(product) {
  return Boolean(
    product?.previewCode ||
      product?.code?.html ||
      product?.code?.css ||
      product?.code?.javascript
  );
}

function buildPreviewSource(
  product,
  mode = "detail"
) {
  const originalSource =
    product?.previewCode ||
    getCombinedSourceCode(product);

  if (!originalSource) {
    return "";
  }

  const previewCSS =
    mode === "listing"
      ? `
        html,
        body {
          width: 100% !important;
          min-width: 0 !important;
          min-height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }

        img,
        video,
        svg,
        canvas {
          max-width: 100% !important;
        }
      `
      : `
        html {
          width: 100% !important;
          min-width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
        }

        body {
          width: 100% !important;
          min-width: 0 !important;
          min-height: 100vh !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        img,
        video,
        svg,
        canvas {
          max-width: 100% !important;
        }
      `;

  let output = originalSource;

  if (/<\/head>/i.test(output)) {
    output = output.replace(
      /<\/head>/i,
      `
<style id="codefusion-preview-overrides">
${previewCSS}
</style>
</head>`
    );
  } else {
    output = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <style id="codefusion-preview-overrides">
${previewCSS}
  </style>
</head>

<body>
${output}
</body>
</html>`;
  }

  return output;
}

export function SourcePreview({
  product,
  mode = "detail",
}) {
  const source =
    buildPreviewSource(
      product,
      mode
    );

  return (
    <div
      className={`source-preview-wrap ${mode}`}
    >
      <iframe
        title={`${
          product?.name ||
          "Product"
        } preview`}
        className={`source-preview-frame ${mode}`}
        srcDoc={source}
        sandbox="allow-scripts allow-forms allow-modals"
      />
    </div>
  );
}

export default function ProductVisual({
  product,
  mode = "listing",
}) {
  const type =
    product?.previewType;

  const sourceAvailable =
    hasSourceCode(product);

  /*
   * Source products always use
   * their stored HTML/CSS/JS preview.
   */
  if (
    product?.previewMode === "source" &&
    sourceAvailable
  ) {
    return (
      <SourcePreview
        product={product}
        mode={mode}
      />
    );
  }

  /*
   * Compatibility fallback:
   * old products may not have
   * previewMode normalized.
   */
  if (
    sourceAvailable &&
    (
      product?.previewCode ||
      product?.code?.html
    )
  ) {
    return (
      <SourcePreview
        product={{
          ...product,
          previewMode:
            "source",
        }}
        mode={mode}
      />
    );
  }

  if (type === "pricing") {
    return (
      <div className="visual pricing-v">
        {[
          "Launch",
          "Scale",
          "Studio",
        ].map(
          (name, index) => (
            <div
              className={`price-tile ${
                index === 1
                  ? "hot"
                  : ""
              }`}
              key={name}
            >
              <small>
                {index === 1
                  ? "MOST POPULAR"
                  : "PLAN"}
              </small>

              <b>{name}</b>

              <strong>
                ${[19, 49, 99][index]}
              </strong>

              <span>
                Flexible plans
              </span>

              <span>
                Team-ready
              </span>

              <button type="button">
                {index === 1
                  ? "Choose Scale →"
                  : "Choose"}
              </button>
            </div>
          )
        )}
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="visual dashboard-v">
        <aside>
          <b>Workspace</b>
          <i />
          <i />
          <i />
          <i />
        </aside>

        <main>
          <header>
            <span>Overview</span>
            <small>Sep 2026</small>
          </header>

          <div className="kpis">
            <div>
              Revenue
              <b>$48.4K</b>
            </div>

            <div>
              Conversion
              <b>8.72%</b>
            </div>

            <div>
              Customers
              <b>12.8K</b>
            </div>
          </div>

          <div className="dash-body">
            <div className="chart">
              {[
                40,
                60,
                48,
                78,
                56,
                89,
                68,
              ].map(
                (
                  height,
                  index
                ) => (
                  <i
                    key={index}
                    style={{
                      height: `${height}%`,
                    }}
                  />
                )
              )}
            </div>

            <div className="activity">
              RECENT ACTIVITY
              <i />
              <i />
              <i />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (type === "hero") {
    return (
      <div className="visual hero-v">
        <div>
          <small>
            FOR AMBITIOUS BRANDS
          </small>

          <h3>
            Less noise.
            <br />
            <span>
              More presence.
            </span>
          </h3>

          <p>
            Campaign-ready hero
            composition.
          </p>

          <b>
            Explore the system →
          </b>
        </div>

        <div className="hero-sculpt">
          A
        </div>
      </div>
    );
  }

  if (type === "testimonial") {
    return (
      <div className="visual testimonial-v">
        <span>“</span>

        <blockquote>
          The interface feels
          intentional everywhere.
          It helped our launch look
          finished on day one.
        </blockquote>

        <div>
          <b>Sarah Chen</b>

          <small>
            Product Designer ·
            Northstar
          </small>

          <em>★★★★★</em>
        </div>
      </div>
    );
  }

  if (type === "navigation") {
    return (
      <div className="visual navigation-v">
        <header>
          <b>MONO.</b>
          <span>Work</span>
          <span>Studio</span>
          <span>Journal</span>

          <button type="button">
            Menu +
          </button>
        </header>

        <section>
          <small>MENU</small>
          <strong>Projects</strong>
          <strong>About</strong>
          <strong>Contact</strong>
        </section>
      </div>
    );
  }

  if (type === "contact") {
    return (
      <div className="visual contact-v">
        <div>
          <small>
            START A PROJECT
          </small>

          <h3>
            Tell us what you're
            <br />
            <span>
              building next.
            </span>
          </h3>

          <p>
            hello@studio.dev
          </p>
        </div>

        <form>
          <label>
            Name
            <input
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              placeholder="you@company.com"
            />
          </label>

          <label>
            Project
            <input
              placeholder="Tell us about it"
            />
          </label>

          <button type="button">
            Send enquiry →
          </button>
        </form>
      </div>
    );
  }

  if (type === "profile") {
    return (
      <div className="visual profile-v">
        <div className="avatar">
          H
        </div>

        <small>
          INDEPENDENT DESIGNER
        </small>

        <h3>Harper Lee</h3>

        <p>
          Product designer &
          creative developer
        </p>

        <div className="profile-stats">
          <b>
            09
            <small>Years</small>
          </b>

          <b>
            42
            <small>Launches</small>
          </b>

          <b>
            18
            <small>Brands</small>
          </b>
        </div>
      </div>
    );
  }

  if (type === "features") {
    return (
      <div className="visual feature-v">
        <article>
          <small>
            01 — SPEED
          </small>

          <h3>
            Fast by default.
          </h3>

          <p>
            Lean interactions that
            feel immediate.
          </p>
        </article>

        <article>
          <b>02</b>
          <span>
            Intentional motion
          </span>
        </article>

        <article>
          <b>03</b>
          <span>
            Built to adapt
          </span>
        </article>
      </div>
    );
  }

  if (type === "countdown") {
    return (
      <div className="visual countdown-v">
        <div className="orb">
          O
        </div>

        <div>
          <small>
            LAUNCHING 27.09.26
          </small>

          <h3>
            Something
            <br />
            <span>
              remarkable.
            </span>
          </h3>

          <strong>
            12 : 08 : 46
          </strong>
        </div>
      </div>
    );
  }

  return (
    <div className="visual card-v">
      <div className="card-art" />

      <small>
        {product?.category}
      </small>

      <h3>
        {product?.name}
      </h3>

      <p>
        {product?.description}
      </p>

      <b>
        {product?.productType ===
        "FREE"
          ? "Free"
          : product?.price}
      </b>
    </div>
  );
}