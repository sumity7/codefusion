function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hasRealCss(styleContent) {
  const content = String(styleContent || "").trim();

  if (!content) {
    return false;
  }

  return !/\/\*\s*(css goes here|css here|your css here|add css here)\s*\*\//i.test(
    content
  );
}

function hasRealJs(scriptContent) {
  const content = String(scriptContent || "").trim();

  if (!content) {
    return false;
  }

  return !/\/\*\s*(js goes here|javascript goes here|your js here|add js here)\s*\*\//i.test(
    content
  );
}

function injectCss(documentHtml, css) {
  if (!css.trim()) {
    return documentHtml;
  }

  const styleRegex =
    /<style\b[^>]*>([\s\S]*?)<\/style>/gi;

  let replaced = false;

  const output = documentHtml.replace(
    styleRegex,
    (fullMatch, content) => {
      if (!hasRealCss(content)) {
        replaced = true;

        return `<style>
${css}
</style>`;
      }

      return fullMatch;
    }
  );

  if (replaced) {
    return output;
  }

  if (/<\/head>/i.test(output)) {
    return output.replace(
      /<\/head>/i,
      `<style>
${css}
</style>
</head>`
    );
  }

  return output;
}

function injectJavaScript(
  documentHtml,
  javascript
) {
  if (!javascript.trim()) {
    return documentHtml;
  }

  const scriptRegex =
    /<script\b[^>]*>([\s\S]*?)<\/script>/gi;

  let replaced = false;

  const output = documentHtml.replace(
    scriptRegex,
    (fullMatch, content) => {
      if (!hasRealJs(content)) {
        replaced = true;

        return `<script>
${javascript}
</script>`;
      }

      return fullMatch;
    }
  );

  if (replaced) {
    return output;
  }

  if (/<\/body>/i.test(output)) {
    return output.replace(
      /<\/body>/i,
      `<script>
${javascript}
</script>
</body>`
    );
  }

  return `${output}
<script>
${javascript}
</script>`;
}

function normalizeDocument(
  documentHtml,
  product
) {
  let output = documentHtml;

  if (
    !/<meta\s+name=["']viewport["']/i.test(
      output
    )
  ) {
    if (/<\/head>/i.test(output)) {
      output = output.replace(
        /<\/head>/i,
        `<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`
      );
    }
  }

  if (!/<title\b/i.test(output)) {
    if (/<\/head>/i.test(output)) {
      output = output.replace(
        /<\/head>/i,
        `<title>${escapeHtml(
          product?.name ||
            "CodeFusion Preview"
        )}</title>
</head>`
      );
    }
  }

  return output;
}

export function getCombinedSourceCode(
  product
) {
  const html = String(
    product?.code?.html || ""
  );

  const css = String(
    product?.code?.css || ""
  );

  const javascript = String(
    product?.code?.javascript || ""
  );

  if (!html.trim()) {
    return "";
  }

  const isFullDocument =
    /<!doctype\s+html/i.test(html) ||
    /<html\b/i.test(html);

  if (isFullDocument) {
    let output = normalizeDocument(
      html,
      product
    );

    output = injectCss(
      output,
      css
    );

    output = injectJavaScript(
      output,
      javascript
    );

    return output;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>${escapeHtml(
    product?.name ||
      "CodeFusion Preview"
  )}</title>

  <style>
${css}
  </style>
</head>

<body>
${html}

<script>
${javascript}
</script>
</body>
</html>`;
}

export default getCombinedSourceCode;