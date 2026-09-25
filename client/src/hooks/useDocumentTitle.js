import { useEffect } from "react";

const SITE = "CodeFusion";

// Pass a page name ("Products") for "Products — CodeFusion", or null to leave
// the title alone (e.g. while the page's data is still loading).
export function useDocumentTitle(page, { full = false } = {}) {
  useEffect(() => {
    if (page == null) return;
    document.title = full ? page : `${page} — ${SITE}`;
  }, [page, full]);
}
