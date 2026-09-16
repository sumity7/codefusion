export function LogoMark({ size = 35 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cfLogoA" x1="8" y1="6" x2="52" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d8c9ff" />
          <stop offset="0.45" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id="cfLogoB" x1="10" y1="8" x2="40" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f2ecff" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect x="10" y="8" width="14" height="48" rx="7" fill="url(#cfLogoA)" />
      <rect x="10" y="8" width="34" height="14" rx="7" fill="url(#cfLogoB)" />
      <rect x="10" y="27" width="26" height="13" rx="6.5" fill="url(#cfLogoA)" />
      <path d="M49 41.5 51 46l4.5 2-4.5 2-2 4.5-2-4.5-4.5-2 4.5-2z" fill="#8b5cf6" />
    </svg>
  );
}

export default function Logo({ size = 35, tagline = "Premium digital products", showText = true }) {
  return (
    <>
      <span>
        <LogoMark size={size} />
      </span>
      {showText && (
        <div>
          <b>
            Code<span className="fusion">Fusion</span>
          </b>
          {tagline ? <small>{tagline}</small> : null}
        </div>
      )}
    </>
  );
}
