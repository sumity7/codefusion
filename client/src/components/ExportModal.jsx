import { useMemo, useState } from "react";
import { Clipboard, Download, ExternalLink, FileArchive, FileCode2, LockKeyhole, Sparkles } from "lucide-react";
import Modal from "./Modal";
import { useToast } from "./Toast";
import { track } from "../services/analytics";
import {
  componentName,
  downloadText,
  downloadZip,
  exportFiles,
  openInCodeSandbox,
  openInStackBlitz,
  tailwindPrompt,
  toReact,
  toVue,
} from "../utils/exporters";

async function writeClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    if (!ok) throw new Error("Clipboard unavailable");
  }
}

/*
 * Every way to take a product, from one unlocked copy of its source. Opening it
 * on a locked product explains the cost first; nothing is spent until the
 * reader presses Unlock.
 */
export default function ExportModal({ open, onClose, product, content, access, unlocking, onUnlock }) {
  const { notify } = useToast();
  const [busy, setBusy] = useState("");

  const bundle = useMemo(() => (content ? exportFiles(product, content) : null), [product, content]);
  const name = componentName(product);

  function act(action, fn) {
    return async () => {
      setBusy(action);
      try {
        await fn();
        track("export_action", { product: product.slug, meta: { action } });
      } catch (error) {
        notify({ message: error?.message || "That didn't work. Try again.", tone: "error" });
      } finally {
        setBusy("");
      }
    };
  }

  const copy = (action, text, label) =>
    act(action, async () => {
      await writeClipboard(text);
      notify(`${label} copied to clipboard.`);
    });

  const split = bundle?.split;

  return (
    <Modal open={open} title={`Export ${product.name}`} onClose={onClose} size="medium">
      {!content ? (
        <div className="export-locked">
          <LockKeyhole size={22} aria-hidden="true" />
          <h3>Unlock to export</h3>
          <p>
            {access.free
              ? "This product is free. Unlocking costs nothing — you just need to be signed in."
              : "Unlocking uses 1 token. After that, copy, download and export in every format as often as you like during this visit."}
          </p>
          <button type="button" className="button primary" onClick={onUnlock} disabled={unlocking} aria-busy={unlocking}>
            {unlocking ? "Unlocking…" : access.free ? "Unlock (free)" : "Unlock for 1 token"}
          </button>
        </div>
      ) : (
        <div className="export-grid">
          <section>
            <h4><FileCode2 size={14} aria-hidden="true" /> Files</h4>
            <button type="button" onClick={copy("copy_all", bundle.doc, "Complete file")} disabled={Boolean(busy)}><Clipboard size={13} /> Copy all (single file)</button>
            <button type="button" onClick={copy("copy_html", split.html, "HTML")} disabled={Boolean(busy)}><Clipboard size={13} /> Copy HTML</button>
            <button type="button" onClick={copy("copy_css", split.css, "CSS")} disabled={Boolean(busy) || !split.css}><Clipboard size={13} /> Copy CSS{!split.css && " (none)"}</button>
            <button type="button" onClick={copy("copy_js", split.js, "JavaScript")} disabled={Boolean(busy) || !split.js}><Clipboard size={13} /> Copy JS{!split.js && " (none)"}</button>
            <button type="button" onClick={act("download_html", () => downloadText(bundle.doc, `${product.slug}.html`, "text/html"))} disabled={Boolean(busy)}><Download size={13} /> Download .html</button>
            <button type="button" onClick={act("download_zip", () => downloadZip(product, content))} disabled={Boolean(busy)}><FileArchive size={13} /> Download ZIP</button>
            <small>The ZIP has index.html, style.css, script.js and the framework versions below.</small>
          </section>

          <section>
            <h4><Sparkles size={14} aria-hidden="true" /> Frameworks</h4>
            <div className="export-pair">
              <span>React</span>
              <button type="button" onClick={copy("react_copy", toReact(product, content), "React component")} disabled={Boolean(busy)}>Copy</button>
              <button type="button" onClick={act("react_download", () => downloadText(toReact(product, content), `${name}.jsx`))} disabled={Boolean(busy)}>Download</button>
            </div>
            <div className="export-pair">
              <span>Next.js</span>
              <button type="button" onClick={copy("next_copy", toReact(product, content, { next: true }), "Next.js page")} disabled={Boolean(busy)}>Copy</button>
              <button type="button" onClick={act("next_download", () => downloadText(toReact(product, content, { next: true }), "page.jsx"))} disabled={Boolean(busy)}>Download</button>
            </div>
            <div className="export-pair">
              <span>Vue</span>
              <button type="button" onClick={copy("vue_copy", toVue(product, content), "Vue component")} disabled={Boolean(busy)}>Copy</button>
              <button type="button" onClick={act("vue_download", () => downloadText(toVue(product, content), `${name}.vue`))} disabled={Boolean(busy)}>Download</button>
            </div>
            <div className="export-pair">
              <span>Tailwind</span>
              <button type="button" onClick={copy("tailwind_prompt", tailwindPrompt(product, content), "Tailwind conversion prompt")} disabled={Boolean(busy)}>Copy AI prompt</button>
            </div>
            <small>React, Next.js and Vue wrap the original markup, styles and script as a component. Tailwind needs a rewrite of the styles, so it's a prompt for your AI assistant rather than generated code.</small>
          </section>

          <section>
            <h4><ExternalLink size={14} aria-hidden="true" /> Open in a sandbox</h4>
            <button type="button" onClick={act("stackblitz", () => openInStackBlitz(product, content))} disabled={Boolean(busy)}>Open in StackBlitz</button>
            <button type="button" onClick={act("codesandbox", () => openInCodeSandbox(product, content))} disabled={Boolean(busy)} aria-busy={busy === "codesandbox"}>
              {busy === "codesandbox" ? "Creating sandbox…" : "Open in CodeSandbox"}
            </button>
            <small>Opens in a new tab with the split files, ready to edit and fork.</small>
          </section>
        </div>
      )}
    </Modal>
  );
}
