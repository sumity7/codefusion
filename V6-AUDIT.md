# CodeFusion V6 audit

## Included

- React/Vite storefront with product-first presentation
- Express/MongoDB backend
- Separate `/admin/login` and protected `/admin/*`
- Admin CRUD for products, categories, collections, prompts, orders, reviews, downloads, coupons and settings
- Live product editor preview using the same source object used for copy/download
- One-click Copy All Code and Copy Prompt
- OTP password recovery: email → OTP → verify → new password
- Optional Resend delivery for OTP
- Optional Razorpay checkout; local default is explicit demo mode
- Responsive desktop/laptop/tablet/mobile preview layouts
- CodeFusion branding in active application sources
- Original prompt files preserved; CodeFusion prompt variants added

## Verification performed

- Parsed all 58 JS/JSX source files with Babel parser: PASS
- Node syntax checks on server JavaScript: PASS
- 10/10 product records in seed: PASS
- 10/10 product source implementations present: PASS
- Admin section presence check: PASS
- OTP endpoint presence check: PASS
- Payment API methods present: PASS
- No bundled `server/.env` secret file: PASS
- Client/server package self-dependencies removed: PASS

## Environment note

The uploaded `node_modules` originated from Windows, so Linux cannot execute the native Rollup/esbuild binaries from that copied dependency tree. The final package excludes `node_modules`; run a fresh `npm run install:all` on the target machine before `npm run dev` or `npm run build`.

Live MongoDB, Resend and Razorpay behavior still requires the deployer's own credentials/configuration.
