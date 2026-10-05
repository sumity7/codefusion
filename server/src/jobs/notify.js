import jwt from "jsonwebtoken";
import CopyRecord from "../models/CopyRecord.js";
import { sendEmail, layout, escapeHtml } from "../utils/mailer.js";
import { reportError } from "../utils/monitor.js";

const SITE = () => (process.env.PUBLIC_SITE_URL || (process.env.CLIENT_URL || "http://localhost:5173").split(",")[0]).replace(/\/$/, "");
const API = () => (process.env.PUBLIC_API_URL || process.env.RENDER_EXTERNAL_URL || `http://localhost:${process.env.PORT || 5000}`).replace(/\/$/, "") + "/api";

/*
 * Emails everyone who copied an earlier version of this product, once per
 * version (CopyRecord.notifiedVersion), unless they turned update emails off.
 * Runs after the admin's save has been answered; failures are reported, never thrown.
 */
export async function notifyProductUpdate(product, notes = []) {
  try {
    const records = await CopyRecord.find({
      product: product._id,
      version: { $ne: product.version },
      notifiedVersion: { $ne: product.version },
    }).populate("user", "email name emailUpdates");

    let sent = 0;
    for (const record of records) {
      const user = record.user;
      if (!user?.email || user.emailUpdates === false) continue;
      const unsubscribe = `${API()}/auth/unsubscribe?token=${jwt.sign({ id: String(user._id), purpose: "unsubscribe" }, process.env.JWT_SECRET, { expiresIn: "60d" })}`;
      const link = `${SITE()}/products/${product.slug}`;
      const items = notes.length ? `<ul>${notes.map((n) => `<li>${escapeHtml(n)}</li>`).join("")}</ul>` : "";
      await sendEmail({
        to: user.email,
        subject: `${product.name} v${product.version} is out`,
        headers: { "List-Unsubscribe": `<${unsubscribe}>` },
        html: layout({
          title: `${escapeHtml(product.name)} has a new version`,
          body: `<p>Hi ${escapeHtml(user.name || "there")},</p>
<p>You copied <b>${escapeHtml(product.name)}</b> v${escapeHtml(record.version)}. Version <b>${escapeHtml(product.version)}</b> is now available.</p>
${items}
<p><a href="${link}" style="display:inline-block;padding:10px 18px;border-radius:999px;background:#4f46e5;color:#fff;text-decoration:none">See what changed</a></p>`,
          footer: `You're getting this because you copied this product on CodeFusion. <a href="${unsubscribe}">Stop update emails</a>.`,
        }),
      });
      await CopyRecord.updateOne({ _id: record._id }, { $set: { notifiedVersion: product.version } });
      sent++;
    }
    if (sent) console.log(JSON.stringify({ level: "info", msg: "update emails sent", product: product.slug, version: product.version, sent }));
    return sent;
  } catch (error) {
    reportError(error, { source: "notifyProductUpdate", product: product?.slug });
    return 0;
  }
}
