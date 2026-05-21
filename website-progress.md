# Mariposa website — build progress

Live tracker. To pick this project up in any session, read this file plus `website-scope.md`. Project state lives in files (here), not in conversation memory.

## Status

Build underway. Home page first cut done. Home nav revised to the marigold.global pattern (menu rests below the hero, sticks to the top on scroll).

## Working files (all in this folder)

- `website-scope.md` — scope, structure, decisions. Source of truth.
- `website-copy.md` — Axel's web copy.
- The Astro project — `src/`, `package.json`, etc. Preview: `npm run dev` → `http://localhost:4321`.
- `website-progress.md` — this file.

## Decisions locked

- Astro 6 + TypeScript, `output: static`. No Tailwind — design-system CSS tokens wired as a global stylesheet.
- One-page-scroll home + 2 product pages + About page + 21+ age gate. No contact page.
- Product section: Option B (paired editorial slider).
- Web typography: Spectral + Hanken Grotesk (fallback to Cormorant + Inter only if that fails).
- Contacts: `hello@mariposacigars.com` + Instagram `@mariposacigars` — both contingent on availability.
- No forms, no CMS, no e-commerce, English only.
- Footer: no legal-entity line. Product pages: no trade-enquiry line.
- Framing: credibility artefact — hero front-loads the brand impression hard and fast.
- Nav: marigold.global pattern — menu sits below the hero imagery, sticks to the top on scroll.

## Build phases

- [done] Dispatch 1 — Astro scaffold + home page first cut (age gate, hero slider, product section, lifestyle section, sticky contact, footer).
- [done] Home nav revision — marigold.global menu-below-hero-then-sticks pattern. Header is `position: sticky; top: 0` in document flow after the hero (BaseLayout named `hero` slot). Rests below the hero on load, sticks at the top on scroll; gains 24px blur + faint shadow when stuck. Hero-less pages render the header stuck from the top (dispatch 2 inherits this).
- [pending] Dispatch 2 — product pages (`/volage`, `/caprices`), About page (`/about`).
- [pending] Imagery — Stephane commissions from the shot list in `website-scope.md` §7. Placeholders until then.
- [pending] Deploy — Sergey: domain, hosting (Vercel + Cloudflare DNS), analytics. After build sign-off.

## Open / watch

- Gemini critic MCP not available to Axel as a subagent — manual adversarial read used as fallback. Sergey to check subagent MCP mounting.
- Domain `mariposacigars.com` and IG `@mariposacigars` not yet secured — verify before launch.
- Imagery is placeholder throughout until Stephane's commissioned photography lands.
