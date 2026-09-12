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

The starter checkout remains demo-only until a real payment provider is configured. Do not accept live payments against the demo endpoint.
