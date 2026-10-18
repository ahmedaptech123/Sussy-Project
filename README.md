# Vaelen — premium e-commerce starter

A responsive Next.js App Router storefront for Vaelen, with an editorial fashion aesthetic, product catalogue, cart demo, blog, technical SEO routes, and a Prisma/PostgreSQL schema foundation.

## Stage checklist

- [x] Stage 1: architecture, routes, visual direction
- [x] Stage 2: app foundation, layout, navigation, design system
- [x] Stage 3: storefront, collections, product details, search, wishlist demo
- [x] Stage 4: cart demo and checkout UI foundation
- [x] Stage 5: brand, support, and blog pages
- [x] Stage 6: metadata, sitemap, robots, structured data
- [x] Stage 7: test source and configuration included; run locally before launch
- [x] Stage 8: project packaged as ZIP
- [ ] Production integrations: database credentials, auth, real payments, email, admin authorization, analytics, real inventory

## Requirements

- Node.js 20.9+ recommended
- npm
- PostgreSQL only if enabling database features

## Run locally

1. Extract the ZIP and open the `vaelen` folder.
2. Copy `.env.example` to `.env` and set `NEXT_PUBLIC_SITE_URL` to your local or production URL.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

These commands are provided but were not run in the file-generation environment. Run them after installing dependencies and fix any version-specific issues.

## Database

Set `DATABASE_URL`, then run:

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

The Prisma schema and seed script provide a starting point. The visible storefront currently uses local demonstration data; it does not yet read/write the database.

## Important feature status

- Cart and wishlist use browser storage for a local demo only.
- Checkout is a demonstration interface; it does not charge a card or create a production order.
- No real authentication or protected admin system is implemented.
- Payment processing, transactional email, discount verification, tax/shipping rules, inventory reservation, and webhook verification must be integrated before launch.
- Sample products and Unsplash images are demo content. Confirm image licensing and replace with brand-owned product photography before commercial use.
- Policy pages are templates and require business-specific details and legal review.

## SEO setup

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin. `src/app/sitemap.ts` generates sitemap XML and `src/app/robots.ts` generates robots.txt. Review both after deployment. Submit the sitemap in Google Search Console. Valid sitemap/structured data does not guarantee indexing or rich results.

## Deploy

Deploy to a Next.js-compatible host, configure environment variables and PostgreSQL if needed, add a custom domain and HTTPS, then run the checks above. Verify the canonical URLs, payment provider eligibility, email sender domain, privacy/cookie obligations, and production error monitoring.

## Brand direction

Warm ivory, charcoal, soft beige, muted bronze, and olive. The design uses editorial photography and subtle transitions for a premium feel.
