/*
 * Error tracking without a vendor SDK. Every server error is logged as one JSON
 * line (Render's log search and any log drain can filter on level=error). If
 * ERROR_WEBHOOK_URL is set — a Slack/Discord incoming webhook, or any endpoint
 * that accepts JSON — errors are also posted there, at most one per distinct
 * message per 10 minutes so an outage doesn't flood the channel.
 */
const recent = new Map();
const QUIET_MS = 10 * 60 * 1000;

export function reportError(error, context = {}) {
  const entry = {
    level: "error",
    time: new Date().toISOString(),
    msg: error?.message || String(error),
    stack: error?.stack?.split("\n").slice(0, 6).join("\n"),
    ...context,
  };
  console.error(JSON.stringify(entry));

  const url = process.env.ERROR_WEBHOOK_URL;
  if (!url) return;
  const key = `${entry.msg}|${context.path || ""}`;
  const last = recent.get(key) || 0;
  if (Date.now() - last < QUIET_MS) return;
  recent.set(key, Date.now());
  if (recent.size > 500) recent.clear();

  const text = `CodeFusion API error: ${entry.msg}\n${context.method || ""} ${context.path || ""}\n${entry.stack || ""}`.slice(0, 1800);
  // `text` is understood by Slack; `content` by Discord.
  fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, content: text, ...entry }) }).catch(() => {});
}

export function installProcessHandlers() {
  process.on("unhandledRejection", (reason) => reportError(reason instanceof Error ? reason : new Error(String(reason)), { source: "unhandledRejection" }));
  process.on("uncaughtException", (error) => {
    reportError(error, { source: "uncaughtException" });
    // State is unknown after an uncaught exception; let the platform restart us.
    setTimeout(() => process.exit(1), 500);
  });
}
