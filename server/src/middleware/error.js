import { reportError } from "../utils/monitor.js";

export function notFound(req, res) {
  res.status(404).json({ message: "API route not found." });
}

export function errorHandler(err, req, res, next) {
  if (err?.code === 11000) return res.status(409).json({ message: "A record with this value already exists." });
  const status = err.status || err.statusCode || 500;
  // CORS rejections and bad JSON are the client's problem, not incidents.
  if (status >= 500) {
    reportError(err, { method: req.method, path: req.originalUrl, user: req.user?.id || null });
  }
  res.status(status).json({ message: status >= 500 && process.env.NODE_ENV === "production" ? "Server error." : err.message || "Server error." });
}
