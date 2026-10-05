
# Source of Truth

For any product marked as source-synchronized:

Product record
→ complete standalone HTML/CSS/JS source
→ iframe preview
→ Copy All Code / Copy Prompt (metered)
→ Export: split files, ZIP, React / Next.js / Vue wrappers, StackBlitz / CodeSandbox

The preview is never a separately invented React mock for those products.

Aurora Commerce Card is source-synchronized from the Aurora implementation included in `reference/aurora-commerce-card.html`.

Premium products can expose a safe `previewCode` to the public storefront while protecting their complete source behind the authenticated purchase endpoint.
