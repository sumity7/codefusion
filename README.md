# CodeFusion — Premium UI Product Marketplace

A React + Express + MongoDB marketplace for selling original UI/code products.

## Structure

- `client` — React/Vite storefront and admin UI
- `server` — Express REST API + MongoDB/Mongoose
- `PROMPTS` — build and product prompts
- `reference` — exact product reference implementations

## Run

1. Copy `server/.env.example` to `server/.env`.
2. Set `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL`.
3. Run `npm run install:all`.
4. Seed products with `npm run seed --prefix server`.
5. Start both apps with `npm run dev`.

## Admin

Open `/admin/login`. Register a normal user first, then promote it with:

`npm run make:admin --prefix server -- your@email.com`

## Password reset

Forgot password uses Email → OTP → Verify → New Password. For local development, `DEV_OTP=true` displays the OTP in the API response and server log. For production, configure Resend with `RESEND_API_KEY` and `MAIL_FROM`.

## Source of truth

A source-based product renders its preview from its own HTML/CSS/JS source. The same combined source powers the Copy All Code and Download actions.

## Payment

Checkout uses Razorpay when `PAYMENT_PROVIDER=razorpay` (otherwise it returns 503). Every order is stored in the `payments` collection; `/subscription/verify` accepts an order only once and only for the user who created it, so a replayed payment can't grant tokens again. Admin revenue is the sum of verified paid orders.

## Discovery and analytics

- `npm run enrich --prefix server` derives discovery tags ("SaaS", "Animated", "No dependencies"…), compatibility badges and curated packs. It runs automatically after `seed`; `-- --force` recomputes everything.
- Trending and Popular sorts are computed from recorded events (views, saves, copies) every 15 minutes.
- Admin → Analytics shows copy and checkout funnels, top searches, searches with no results and recent browser errors.

## Thumbnails

`npm run thumbnails --prefix server` renders a light and dark listing image for every product (using the storefront's own preview builder in `client/src/services/previewSource.js`) and stores them in MongoDB; cards show the image and only start the live preview on hover. Re-runs skip images whose source hasn't changed (`-- --force` re-renders all). Needs a Chromium: `npx playwright-core install chromium-headless-shell` (or set `CHROME_PATH`). `.github/workflows/thumbnails.yml` runs it every 6 hours with the `MONGODB_URI` secret. Saving a product with changed source clears its generated thumbnail until the next run.

## Releases, creators and update emails

- Every product has a creator (`/creators`, `/creators/:slug`; managed in Admin → Creators). Existing products are assigned to "CodeFusion Studio" on startup.
- Saving a product with a new version records a release (version, date, the changelog lines added in that save). `/new` lists releases from the last 7 or 30 days.
- People who copied an earlier version get one email per version via Resend (set `PUBLIC_SITE_URL` and `PUBLIC_API_URL` so links work). Each email has a one-click unsubscribe; users can also toggle it on their Account page.

## Operations

- Startup runs idempotent migrations (string counters → numbers, text index, one-review-per-user index).
- Sign-in, OTP and registration have their own rate limits (per IP + email).
- `ERROR_WEBHOOK_URL` (optional) posts server errors to Slack/Discord; all errors are logged as JSON lines.
- `.github/workflows/keep-alive.yml` keeps the Render API awake and doubles as an uptime monitor (`/api/health` checks MongoDB). Optional secret: `ALERT_WEBHOOK_URL`.
- `.github/workflows/backup.yml` exports every collection weekly as a 30-day artifact. Requires the `MONGODB_URI` repository secret (use a read-only user). Run locally with `npm run backup --prefix server`.
