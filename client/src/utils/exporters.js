import { getCombinedSourceCode } from "../services/combinedSource";
import { createZip } from "./zip";

/*
 * Every export is derived from the same unlocked content ({ html, css,
 * javascript }) the Copy All Code action delivers, so all formats describe one
 * implementation:
 *
 *   single file   the exact combined document (source of truth)
 *   split files   index.html + style.css + script.js
 *   React/Next/Vue  wrappers that mount the original markup, styles and script
 *                 as a component — not hand-ported rewrites
 *   Tailwind      an AI prompt; utility-class conversion can't be done
 *                 mechanically without changing the design
 */

function componentName(product) {
  const name = String(product?.name || product?.slug || "Component")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  return /^[A-Z]/.test(name) ? name : `Cf${name}`;
}

export function combinedDocument(product, content) {
  return getCombinedSourceCode({ ...product, code: content });
}

// Classic inline scripts only: modules, JSON-LD and the like stay where they are.
const INLINE_SCRIPT = /<script\b(?![^>]*\bsrc=)(?![^>]*\btype=["'](?!text\/javascript)[^"']*["'])[^>]*>([\s\S]*?)<\/script>/gi;
const STYLE_BLOCK = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
const EXTERNAL_SCRIPT = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>\s*<\/script>/gi;

/*
 * Pulls styles and classic inline scripts out of the combined document. Each
 * part keeps its original order; the extracted script tag is placed where the
 * last inline script was, so it still runs after any CDN script before it.
 */
export function splitDocument(documentHtml) {
  let css = "";
  let js = "";
  let lastScriptIndex = -1;

  let html = documentHtml.replace(STYLE_BLOCK, (_, body) => {
    css += `${body.trim()}\n\n`;
    return "";
  });

  html = html.replace(INLINE_SCRIPT, (_, body, index) => {
    if (body.trim()) js += `${body.trim()}\n\n`;
    lastScriptIndex = index;
    return "<!--cf-script-->";
  });

  if (css.trim()) {
    html = /<\/head>/i.test(html)
      ? html.replace(/<\/head>/i, `  <link rel="stylesheet" href="style.css">\n</head>`)
      : `<link rel="stylesheet" href="style.css">\n${html}`;
  }

  if (js.trim()) {
    let placed = false;
    const markers = html.split("<!--cf-script-->");
    html = markers
      .map((part, i) => {
        if (i === markers.length - 1) return part;
        if (i === markers.length - 2 && !placed) {
          placed = true;
          return `${part}<script src="script.js"></script>`;
        }
        return part;
      })
      .join("");
  } else {
    html = html.replaceAll("<!--cf-script-->", "");
  }

  return { html: html.replace(/\n{3,}/g, "\n\n"), css: css.trim(), js: js.trim(), hadScripts: lastScriptIndex >= 0 };
}

// Body markup, body attributes and external script URLs, for the component wrappers.
function parts(documentHtml) {
  const { css, js } = splitDocument(documentHtml);
  const bodyMatch = documentHtml.match(/<body\b([^>]*)>([\s\S]*)<\/body>/i);
  let body = bodyMatch ? bodyMatch[2] : documentHtml;
  body = body.replace(STYLE_BLOCK, "").replace(INLINE_SCRIPT, "");
  const externals = [];
  body = body.replace(EXTERNAL_SCRIPT, (_, src) => {
    externals.push(src);
    return "";
  });
  const headExternals = [...(documentHtml.match(/<head\b[\s\S]*?<\/head>/i)?.[0].matchAll(EXTERNAL_SCRIPT) || [])].map((m) => m[1]);
  return { css, js, body: body.trim(), externals: [...new Set([...headExternals, ...externals])], bodyAttrs: bodyMatch?.[1]?.trim() || "" };
}

const NOTES = (product) => `/*
 * ${product.name} — exported from CodeFusion (v${product.version || "1.0.0"}).
 * The original markup, styles and script, mounted as a component.
 * Notes:
 * - Styles are global (the original targets html/body/:root); scope them if
 *   this sits inside a larger page.
 * - The script runs once after mount. If it waits for DOMContentLoaded or
 *   window "load", call its setup directly instead — those events have
 *   already fired by the time a component mounts.
 */`;

export function toReact(product, content, { next = false } = {}) {
  const { css, js, body, externals } = parts(combinedDocument(product, content));
  const name = componentName(product);
  return `${next ? '"use client";\n\n' : ""}${NOTES(product)}
import { useEffect, useRef } from "react";

const CSS = ${JSON.stringify(css)};
const HTML = ${JSON.stringify(body)};
const SCRIPT = ${JSON.stringify(js)};
const EXTERNAL_SCRIPTS = ${JSON.stringify(externals)};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(\`script[src="\${src}"]\`)) return resolve();
    const el = document.createElement("script");
    el.src = src;
    el.onload = resolve;
    el.onerror = reject;
    document.head.appendChild(el);
  });
}

export default function ${name}() {
  const root = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    let inline;
    (async () => {
      for (const src of EXTERNAL_SCRIPTS) await loadScript(src);
      if (cancelled || !SCRIPT) return;
      inline = document.createElement("script");
      inline.textContent = SCRIPT;
      root.current?.appendChild(inline);
    })();

    return () => {
      cancelled = true;
      style.remove();
      inline?.remove();
    };
  }, []);

  return <div ref={root} dangerouslySetInnerHTML={{ __html: HTML }} />;
}
`;
}

export function toVue(product, content) {
  const { css, js, body, externals } = parts(combinedDocument(product, content));
  return `<!--
${NOTES(product).replace(/^\/\*|\*\/$/g, "").trim()}
-->
<template>
  <div ref="root" v-html="html"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const html = ${JSON.stringify(body)};
const SCRIPT = ${JSON.stringify(js)};
const EXTERNAL_SCRIPTS = ${JSON.stringify(externals)};
const root = ref(null);
let inline;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(\`script[src="\${src}"]\`)) return resolve();
    const el = document.createElement("script");
    el.src = src;
    el.onload = resolve;
    el.onerror = reject;
    document.head.appendChild(el);
  });
}

onMounted(async () => {
  for (const src of EXTERNAL_SCRIPTS) await loadScript(src);
  if (!SCRIPT) return;
  inline = document.createElement("script");
  inline.textContent = SCRIPT;
  root.value?.appendChild(inline);
});

onBeforeUnmount(() => inline?.remove());
</script>

<style>
${css}
</style>
`;
}

export function tailwindPrompt(product, content) {
  return `Convert the following UI component to Tailwind CSS v3 utility classes.

Component: ${product.name} (${product.category || "UI"})

Requirements:
- Keep the exact visual result: spacing, colours, typography, radii, shadows, gradients and every hover/focus/active state.
- Replace the stylesheet with utility classes on the markup. Use arbitrary values (e.g. bg-[#0b0b10]) where the design needs exact values; put @keyframes and anything Tailwind can't express in a small tailwind.config.js extension.
- Keep the JavaScript behaviour unchanged, and keep the class names the script relies on.
- Return: the converted HTML, the tailwind.config.js extension, and the unchanged script.

Source:
\`\`\`html
${combinedDocument(product, content)}
\`\`\``;
}

export function exportFiles(product, content) {
  const doc = combinedDocument(product, content);
  const split = splitDocument(doc);
  const files = [{ name: "index.html", content: split.html }];
  if (split.css) files.push({ name: "style.css", content: `${split.css}\n` });
  if (split.js) files.push({ name: "script.js", content: `${split.js}\n` });
  return { doc, split, files };
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadText(text, filename, type = "text/plain") {
  downloadBlob(new Blob([text], { type: `${type};charset=utf-8` }), filename);
}

export function downloadZip(product, content) {
  const { files } = exportFiles(product, content);
  const name = componentName(product);
  const readme = `# ${product.name}

Exported from CodeFusion — v${product.version || "1.0.0"}.
License: ${product.license || "Personal & commercial use"}.

Open index.html in a browser, or serve this folder with any static server.

Also included: framework wrappers in /frameworks (React, Next.js, Vue).
`;
  const zip = createZip([
    ...files.map((f) => ({ name: `${product.slug}/${f.name}`, content: f.content })),
    { name: `${product.slug}/README.md`, content: readme },
    { name: `${product.slug}/frameworks/react/${name}.jsx`, content: toReact(product, content) },
    { name: `${product.slug}/frameworks/nextjs/app/${product.slug}/page.jsx`, content: toReact(product, content, { next: true }) },
    { name: `${product.slug}/frameworks/vue/${name}.vue`, content: toVue(product, content) },
  ]);
  downloadBlob(zip, `${product.slug}.zip`);
}

/*
 * StackBlitz accepts a POSTed form (no SDK needed) and opens the project in a
 * new tab. The static "html" template serves the files as-is.
 */
export function openInStackBlitz(product, content) {
  const { files } = exportFiles(product, content);
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://stackblitz.com/run?file=index.html";
  form.target = "_blank";
  const field = (name, value) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };
  field("project[title]", `${product.name} — CodeFusion`);
  field("project[description]", product.description || "");
  field("project[template]", "html");
  for (const file of files) field(`project[files][${file.name}]`, file.content);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}

/*
 * CodeSandbox's define API returns a sandbox id. The tab is opened first, inside
 * the click, so the browser doesn't treat it as an unsolicited popup.
 */
export async function openInCodeSandbox(product, content) {
  const tab = window.open("about:blank", "_blank");
  const { files } = exportFiles(product, content);
  const payload = {
    files: {
      ...Object.fromEntries(files.map((f) => [f.name, { content: f.content }])),
      "package.json": { content: { name: product.slug, version: product.version || "1.0.0", main: "index.html", scripts: { start: "serve", build: "echo static" }, devDependencies: { serve: "^14.2.0" } } },
      "sandbox.config.json": { content: { template: "static" } },
    },
  };
  try {
    const response = await fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok || !data.sandbox_id) throw new Error("CodeSandbox didn't create the sandbox.");
    const url = `https://codesandbox.io/s/${data.sandbox_id}?file=/index.html`;
    if (tab) tab.location.href = url;
    else window.open(url, "_blank");
  } catch (error) {
    tab?.close();
    throw error;
  }
}

export { componentName };
