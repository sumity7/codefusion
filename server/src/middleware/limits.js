import rateLimit from "express-rate-limit";

/*
 * Per-route limits for the endpoints worth attacking. Each is keyed on the
 * client IP *and* the email being tried, so one attacker can't lock a victim
 * out from everywhere, and a shared office IP doesn't throttle everyone at once.
 * A second, IP-only limiter caps how many accounts one address can probe.
 */
function emailOf(req) {
  return String(req.body?.email || "").trim().toLowerCase().slice(0, 200);
}

function limiter({ windowMs, max, message, byEmail = true }) {
  return rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: false,
    keyGenerator: byEmail ? (req) => `${req.ip}|${emailOf(req)}` : (req) => req.ip,
    message: { message },
  });
}

const FIFTEEN_MIN = 15 * 60 * 1000;
const HOUR = 60 * 60 * 1000;

// Sign-in: 8 tries per account per 15 min, 40 per IP.
export const loginLimit = [
  limiter({ windowMs: FIFTEEN_MIN, max: 8, message: "Too many sign-in attempts. Wait 15 minutes and try again." }),
  limiter({ windowMs: FIFTEEN_MIN, max: 40, byEmail: false, message: "Too many sign-in attempts from this network. Try again later." }),
];

// OTP send/resend: 5 per account per hour, 20 per IP. Each one sends an email.
export const otpSendLimit = [
  limiter({ windowMs: HOUR, max: 5, message: "Too many codes requested. Wait an hour and try again." }),
  limiter({ windowMs: HOUR, max: 20, byEmail: false, message: "Too many codes requested from this network. Try again later." }),
];

// OTP verify: the per-user attempt counter already caps guesses per code; this
// stops cycling through fresh codes.
export const otpVerifyLimit = [
  limiter({ windowMs: FIFTEEN_MIN, max: 10, message: "Too many verification attempts. Wait 15 minutes and try again." }),
];

export const registerLimit = [
  limiter({ windowMs: HOUR, max: 10, byEmail: false, message: "Too many accounts created from this network. Try again later." }),
];

export const passwordChangeLimit = [
  limiter({ windowMs: FIFTEEN_MIN, max: 8, byEmail: false, message: "Too many password attempts. Wait 15 minutes and try again." }),
];
