# Mariposa website — build progress

Live tracker. To pick this project up in any session, read this file plus `website-scope.md`. Project state lives in files (here), not in conversation memory.

## Status

Build underway. Home page first cut done, then revised against Stephane's first review (2026-05-21). Home nav uses the marigold.global pattern (menu rests below the hero, sticks to the top on scroll).

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
- [done] Home revisions — Stephane review 1 (2026-05-21). Eight items:
  1. Hero height — `64svh` contained band (was `100svh`), matched to marigold.global's shorter hero.
  2. Hero text overlay removed — no wordmark/position/sub-line on the slider images.
  3. Scroll cue removed.
  4. Product-section eyebrow + gold divider removed; the slider stands alone.
  5. Nav uppercase (VOLAGE, CAPRICE, ABOUT). SKU corrected to **Caprice** (singular) — name, slug, route `/caprice`, asset, content file all renamed.
  6. Brand position copy ("Cuban Soul. 24 Carat Swiss Gold." + sub-line) moved off the hero into a new `PositionStatement.astro` text block between hero and product slider; treatment mirrors the brand pager masthead.
  7. Lifestyle section uses `mariposa_header_sq.png` (= `src/assets/header-collage.png`), replacing the placeholder.
  8. Colour correction — site-wide. `--nav-bg` was cream `rgba(239,234,226,0.78)`; replaced with white-based `rgba(255,255,255,0.82)`. Header comments de-creamed. Conventions overlay updated: design system's cream nav-bar / `--cream-edge` explicitly overridden, white only. No other cream values found in the site (the `tokens.css` copy had already renamed `--ivory`→`--white`, `--cream-edge`→`--hairline`).
- [pending] Dispatch 2 — product pages (`/volage`, `/caprice`), About page (`/about`).
- [pending] Imagery — Stephane commissions from the shot list in `website-scope.md` §7. Placeholders until then.
- [done] Deploy — GitHub Pages staging **LIVE**: `https://zedcap.github.io/mariposa/`. Repo `zedcap/mariposa` (public); CI workflow `deploy.yml` builds and deploys on every push to `main`. First successful deploy 2026-05-21 (run 26219302974, both build + deploy jobs green). Pages source set to "GitHub Actions" by Stephane. Verified: home page serves HTTP 200 with the age gate + hero; CSS, images and inline client JS all resolve correctly under the `/mariposa/` base.
  - Push credential: fine-grained PAT in `/Users/mrclaude/Claude/.git-repos/mariposa-credentials.json` (chmod 600, outside pCloud, outside repo). Git host-scoped credential helper reads it; token not in `.git/config`. **PAT expires ~2026-08-19 (90 days from 2026-05-21) — renew before then.**

## Open / watch

- Gemini critic MCP not available to Axel as a subagent — manual adversarial read used as fallback. Sergey to check subagent MCP mounting.
- Domain `mariposacigars.com` and IG `@mariposacigars` not yet secured — verify before launch.
- **Hosting migration planned for launch.** Build phase uses GitHub Pages (`zedcap/mariposa`, public repo, auto-deploy) for the frictionless staging URL. At launch, hosting moves off GitHub Pages to wherever makes most sense — Namecheap (one vendor with the domain) is the leading option; decide at launch. Migration is a clean one-time move: drop the Astro `base` config back to root, rebuild, upload the static folder, point the domain. No lock-in. Git store lives outside pCloud at `/Users/mrclaude/Claude/.git-repos/mariposa-website.git/`.
- Imagery is placeholder throughout until Stephane's commissioned photography lands. Exception: the lifestyle section now uses `mariposa_header_sq.png` (the brand composition) per Stephane's review; hero frames 2-4 are still palette-tinted placeholders.
- **SKU naming — `website-scope.md` still says "Caprices" / `/caprices`** (§2 sitemap, §3.2, §4, §9). The site itself is corrected to "Caprice" / `/caprice`. The print pager file `mariposa - Caprices (2026-05-20).html` also still carries the plural. Both predate the singular ruling; flag for Stephane whether the scope doc and pager filename should be reconciled.
