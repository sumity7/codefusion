/*
 * Transactional email through Resend (RESEND_API_KEY + MAIL_FROM). Without
 * them, messages are logged instead, so development and tests never send.
 */
export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export async function sendEmail({ to, subject, html, headers }) {
  if (process.env.RESEND_API_KEY && process.env.MAIL_FROM) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.MAIL_FROM, to: [to], subject, html, ...(headers ? { headers } : {}) }),
    });
    if (!response.ok) throw new Error(`Email provider failed: ${await response.text()}`);
    return { sent: true };
  }
  console.log(JSON.stringify({ level: "info", msg: "email (not sent: no provider configured)", to, subject }));
  return { sent: false };
}

// Shared frame so every CodeFusion email looks the same.
export function layout({ title, body, footer = "" }) {
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:auto;color:#15131c">
<h2 style="margin:0 0 16px;font-size:20px">${title}</h2>
${body}
<p style="margin-top:32px;color:#6b6775;font-size:12px;line-height:1.6">${footer}</p>
</div>`;
}
