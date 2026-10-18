# Vaelen QA checklist

Run the following locally after `npm install`.

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm test`
- [ ] `npm run build`
- [ ] Verify `/`, `/shop`, collection pages, product details, `/search`, `/wishlist`, `/cart`, `/checkout`
- [ ] Verify all footer and header links
- [ ] Test cart add, update, remove, reload persistence
- [ ] Test mobile navigation at 375px, 768px, 1024px, and desktop
- [ ] Verify product and blog images load
- [ ] Check keyboard focus and reduced-motion preference
- [ ] Verify `/sitemap.xml` and `/robots.txt` use the production domain
- [ ] Validate metadata and JSON-LD
- [ ] Confirm private pages are not publicly exposed before adding authentication
- [ ] Integrate and test database, authentication, payment webhooks, email, shipping, tax, and inventory before accepting live orders

**Generation note:** This project was assembled as source files in the current environment. Package installation, external image URL availability, linting, type checking, tests, and production build must be run in a Node.js environment; no results are claimed here.
