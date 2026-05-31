# Mariposa website — project handoff

Last updated 2026-05-27. Production at SHA `fa32f1a`.

The single document a future contributor opens first. Everything needed to be productive on this site lives here, in the slim `README.md` next to it, or in the brand conventions doc one level up at `../mariposa-design-conventions.md`.

Brand and visual decisions are not duplicated here — that is the conventions doc's job. This file covers state, build, deploy, file structure, history, assets, gaps, gotchas, print pagers, and custom-domain ops.

---

## 1. Current state — what's live

- **Live URL.** https://mariposacigars.com/
- **Repo.** `git@github.com:zedcap/mariposa.git` (separate git dir at `/Users/mrclaude/Claude/.git-repos/mariposa-website.git/` — the working tree's `.git` file points at it).
- **Latest production SHA.** `fa32f1a` — home hero (mobile): switch to d-series 4-frame carousel (d1→d3→d2→d3).
- **Built with.** Astro 6 (static output), TypeScript, GSAP for scroll choreography. Node ≥22.12.0.

### Live route inventory

Thirteen routes ship in the current build. Six are production pages; one is the legal page; one is the post-decline destination; one is the fallback; five are mocks pages still in the sitemap.

| Route | Purpose |
|---|---|
| `/` | Home. One-page vertical scroll. HeroSlider (4-frame d-series carousel d1→d3→d2→d3), PositionStatement ("Volcanic Soul. 24-Carat Gold."), ProductSlider (Volage + Caprice paired editorial), LifestyleSection (Mariposa story closing card). |
| `/about/` | Origins long-form editorial. Issue masthead, four titled beats with drop caps + inset photo library, bridge quote panel, founder feature + closer. Brand's canonical editorial implementation. |
| `/volage/` | Volage product page. Pearl hero (62/38 type-left / cigar-right), cigar narrative (3 paragraphs), PROFILE + BLEND specs on the brown bleed band, SmokeArc tasting thirds on a sticky timeline. |
| `/caprice/` | Caprice product page. Direct sibling of Volage. Same structure; Caprice content + Maduro spec set + 0/12/24/36-min SmokeArc beats. Q3 2026 release. |
| `/terms/` | 12-section House Rules. Standalone page (and the source for the lazy-fetched TermsModal). |
| `/refusal/` | Destination for the age-gate "No" button. Built outside BaseLayout — no AgeGate re-prompt, no header, no footer, no sticky-contact. `noindex,nofollow`. |
| `/404/` | Minimal branded fallback. |
| `/story-mocks/` | Home-story-section A/B mock board (kept on disk for revert reference). |
| `/product-mocks/` | Three product-card treatments compared side-by-side. |
| `/volage-header-mocks/` | Four Volage hero treatments compared. Option A shipped. |
| `/contact-mocks/` | Sticky contact / footer-contact mock board. |
| `/about-quote-mocks/` | Four closing-quote treatments for the About founder section. Cream panel (modified) shipped. |
| `/about-mocks/` | The earlier four-option About-page mock board. The shipped About took option 4 + edits. |

The five mocks routes are indexable. See §8 if you want them filtered.

---

## 2. Tech stack + build

- **Framework.** Astro `^6.3.6`, `output: 'static'`. TypeScript. No Tailwind. Design tokens as CSS custom properties in `src/styles/tokens.css`.
- **Integrations.** `@astrojs/sitemap ^3.7.2`. The sitemap excludes `/refusal/` via filter.
- **Fonts.** Google Fonts at build time — Spectral (display, 300/400/500/600 + italic) + Hanken Grotesk (body, 300/400/500/600/700 + italic). Imported via `@import` at the top of `tokens.css`.
- **Animation.** GSAP `^3.15.0` + ScrollTrigger. One shared engine in `src/lib/motion.ts` exposing `reveal`, `revealLines`, `slideIn`, `parallax`, `scaleScrub`, `scrubTimeline`, `refreshOnLoad`. Honours `prefers-reduced-motion`. ~47KB gzipped, deferred — page is fully readable without it.
- **Image pipeline.** Sharp service for AVIF/WebP responsive variants on imports from `src/assets/`. Plain `public/` for OG share image, favicon, CNAME, paper-grain.svg, texture.jpg, founder portraits, origins inset photos, specs-bleed backgrounds.
- **Output.** `dist/`. The build emits ~13 HTML files (one per route) plus optimised image variants and a small JS bundle (motion engine + per-page scripts).
- **Node engines.** `>=22.12.0`. The GitHub Actions workflow pins Node 22 LTS.

### Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies. |
| `npm run dev` | Dev server at `http://localhost:4321/`. |
| `npm run build` | Production build → `dist/`. |
| `npm run preview` | Serve the built `dist/` locally. |

### Astro config (key flags)

```
output: 'static'
site:   'https://mariposacigars.com'
base:   '/'
image:  sharp service (AVIF/WebP)
sitemap: filter excludes /refusal
```

`base: '/'` since 2026-05-26 — the custom domain serves from apex, not from a subpath. The earlier `/mariposa` subpath was retired in commit `39f146b`.

---

## 3. Deploy procedure

GitHub Actions runs `withastro/action@v3` + `actions/deploy-pages@v4` on every push to `main`. Builds the site, publishes `dist/` to the Pages environment. Typically completes in 30-60 seconds. Workflow file: `.github/workflows/deploy.yml`.

### SSH push from Mr. Claude

The deploy key on disk is configured for the `zedcap/mariposa` repo. Use it explicitly with `GIT_SSH_COMMAND`:

```
GIT_SSH_COMMAND="ssh -i /Users/mrclaude/Claude/.git-repos/mariposa-deploy-key -o IdentitiesOnly=yes" \
  git push origin main
```

- Deploy key location: `/Users/mrclaude/Claude/.git-repos/mariposa-deploy-key` (private), `…/mariposa-deploy-key.pub` (public, installed in the GitHub repo's Deploy Keys with write access).
- The GitHub PAT (fallback HTTPS auth, rarely used) is in `/Users/mrclaude/Claude/.git-repos/mariposa-credentials.json`.
- The git dir is separate from the working tree — `.git` in this folder is a `gitdir:` pointer to `/Users/mrclaude/Claude/.git-repos/mariposa-website.git/`.

### Commit discipline

Scoped commits — one file (or one logical change) per commit. Stop the run if you find stray files staged. Commit message convention is a short subject line in the form `<surface>: <change>`, lowercase. See `git log` for the cadence.

After pushing, watch the Actions tab on github.com/zedcap/mariposa for the green tick. Verify the live URL after a deploy: `curl -s https://mariposacigars.com/ | head` or open in a browser.

---

## 4. File structure

Top-level (` website/`):

```
.github/workflows/deploy.yml   GitHub Actions Pages workflow
public/                        Static-pass-through assets (CNAME, favicon, OG share, founder + origins photos, specs-bleed bgs)
src/                           Astro source
  assets/                      Bundled imagery (hero d-series, story bgs, logo, deprecated cigar PNGs)
  components/                  Reusable .astro components (see below)
  content/                     Astro content collections
    products/                  volage.json, caprice.json (Zod schema in content.config.ts)
    site/                      home.json, global.json
  content.config.ts            Zod schemas for `site` + `products` collections
  layouts/BaseLayout.astro     Shared shell: <AgeGate> → hero slot → <Header> → main → <Footer> → <StickyContact> → <TermsModal>
  lib/                         motion.ts (GSAP engine), path.ts (withBase helper)
  pages/                       One file per route (see §1)
  styles/                      tokens.css (design tokens + font @import), base.css (resets, utilities, .container, .rule-gold, grain, etc.)
astro.config.mjs               output: static, site, base: '/', sharp image service, sitemap with refusal filter
package.json                   Scripts + deps
tsconfig.json                  TS config (Astro defaults)
PROJECT.md                     This file
README.md                      Slim Astro quick-start
_archive/                      Historical research briefs (no build effect — leading underscore keeps Astro from routing it)
```

### Key files

- **`astro.config.mjs`** — single source of truth for `site`, `base`, image service, sitemap filter.
- **`src/layouts/BaseLayout.astro`** — every route except `/refusal/` and `/404/` mounts through here. Wires age gate, header, sticky-contact, footer, terms modal. Resolves canonical + OG image URLs. Defines the named `hero` slot used by `/`.
- **`src/styles/tokens.css`** — colour, type, spacing, motion tokens. Edit values here, nowhere else. Carries the Google Fonts `@import` at the top.
- **`src/styles/base.css`** — base resets, utility classes (`.container`, `.rule-gold`, paper-grain backgrounds), wordmark styles.
- **`src/components/HeroSlider.astro`** — home page hero. 4-frame d-series carousel desktop + mobile. 7-second dwell, cross-fade, Ken Burns on mobile. Locked to 1200×630 native, never upscales.
- **`src/components/AgeGate.astro`** — first-visit interstitial. 60% white overlay; opaque white card with 1px pink border; circular checkbox; Yes/No buttons; T&C inline trigger. Persistence: localStorage (Remember me) or sessionStorage (per session). No → `/refusal/`.
- **`src/components/TermsModal.astro`** — lazy-fetches `/terms/`'s `[data-terms-content]` block on first open. Modal cached after first fetch (~7KB saved per page versus inlining).
- **`src/components/Header.astro`** — sticky nav. Opaque white at every scroll position (cream-tracking observer was retired 2026-05-24). Resting 84/66px, stuck 66/56px, eases between states.
- **`src/components/Footer.astro`** — pearl ground, gold top border, brand line italic Spectral, pink hairline divider, wordmark + copyright (T&C link inline). Reveals on scroll-in.
- **`src/components/LifestyleSection.astro`** — home closing story card on a full-bleed photographic ground.
- **`src/components/PositionStatement.astro`** — home brand-position line. "Volcanic Soul." pink + "24-Carat Gold." gold-deep, italic Spectral, slide-in motion. Gold-leaf SVG divider then italic sub-line.
- **`src/components/ProductSlider.astro`** — home paired editorial slider for Volage + Caprice.
- **`src/components/SmokeArc.astro`** — product page tasting-thirds component with sticky gold-tick timeline rail (≥1081px) or inline dots (≤1080px).
- **`src/components/StickyContact.astro`** — fixed bottom-right envelope button. Pearl popup with gold border, Email + Instagram channel rows.
- **`src/pages/index.astro`**, **`about.astro`**, **`volage.astro`**, **`caprice.astro`**, **`terms.astro`**, **`refusal.astro`**, **`404.astro`** — production pages.
- **`src/pages/*-mocks.astro`** (five) — historical mock boards still in the build (see §8).

---

## 5. Brand design system

Single source of truth: **`../mariposa-design-conventions.md`** (one level above this folder, in `marketing & comms/`).

That file carries the colour, type, spacing, layout, component, voice, anti-pattern, photography, and off-platform-format conventions for the brand across all surfaces — web, print, social, packaging. Do not duplicate it here.

Where this site's implementation and the conventions doc disagree, the site wins until the doc is updated (per the doc's own self-rule).

---

## 6. History — what was tried, what was rejected

Condensed log organised by topic, not chronologically. Many small revisions are omitted; major decision points only.

### Hero (home)

- Round 1: 6-frame `_c` series carousel (1c-6c).
- Round 2: Single static `1d` image (no carousel). Stephane wanted scale + stillness.
- Round 3 (live): 4-frame d-series carousel `d1 → d3 → d2 → d3` on both desktop and mobile. 7-second dwell. d3 appears at positions 2 and 4 — sequence intentional.
- Hero photography renders in original colour. Explicit exception to the B&W editorial photography rule. Stephane's call 2026-05-22.
- Hero is locked to 1200×630 native and never upscales — body white fills the margins on wider monitors.

### Home story section (LifestyleSection)

Evolved through four background treatments before landing.

- Pearl card on photographic bed — read too light.
- Pink card (`square-pk` source) — flat.
- Gold/khaki card (`caprice-gold` source) — flat.
- Full-bleed photographic ground — adopted. Cards-on-coloured-sections rejected as an editorial moment generally; full-bleed photographic ground is the structural fix.

Source candidates retained on disk for revert: `story-bg-caprice-gold.jpg`, `story-bg-square-pk.jpg`, `story-bg-square-sl.jpg`, `story-bg-volage-gold.jpg`.

### Product card image options

Three options explored on `/product-mocks/`. Option 1 (object-on-void PNG) picked. Live `cigar-volage.png` and `cigar-caprice.png` follow that pattern.

### Volage page header

Four options mocked on `/volage-header-mocks/`. Option A (tagline-led, signature → gold hairline → italic tagline → vitola eyebrow → cased dimensions) picked. Subsequently iterated several rounds on hairline placement, eyebrow weight, and gap rhythm.

### About page

Three distinct iterations.

- Option 4 from the original mock board: asymmetric, varied-per-beat. Rejected — "a treatment per beat reads as in-progress."
- Editorial Issue masthead with numbered beats. Roman numerals tried and dropped — section titles are the only structural anchor.
- Live: numerals removed, drop caps on every beat (not just beat 1), four titled beats (A Singular Pursuit / Volcanic Terroir / A Three-Year Journey / Uncompromising Craftsmanship), unified inset photo library across all four with alternating L/R positions.

### Founder feature (About)

- Display headline removed.
- "Stephane Zermatten" attribution removed (founder section runs without a signature byline).
- "A Havana-seed" pull quote retired.
- Closing quote added, then moved up to act as a bridge between Origins and Founder.
- Separate closer line "For those who don't wait for special occasions, but create them." added at the foot of the founder section, italic Spectral gold-deep, left-aligned, comma break held across surfaces.

### Closing-quote treatments

Four options compared on `/about-quote-mocks/` — baseline / pink frame / cream panel with gold rules / oversized opening mark. Cream panel picked, then modified to pink top hairline + gold-deep bottom hairline, and moved from the foot of the founder section to the bridge position between Origins and Founder.

### T&Cs architecture

- Round 1: Inline modal carrying the full 12-section House Rules in every page's HTML.
- Round 2 (live): Standalone `/terms/` route. TermsModal lazy-fetches the page on first open and injects `[data-terms-content]` into the dialog body. ~7KB per page weight savings.

### Age gate

- Round 1: Four-option mocks page.
- Round 2 (live): Single revised design — 60% white overlay, opaque white card with 1px pink border, circular Remember-me checkbox, T&C inline trigger hovering to gold-deep, `/refusal/` page for No.

### Editorial photography treatment system

Three registers explored across Origins inset photos.

- Full colour — rejected as boring.
- Gold overlay — rejected as sicko.
- Live: B&W base with warm cream highlights; single saturated note preserved (tobacco leaf on close-ups, Argopuro volcano on landscapes); subtle warm pink in cloud highlights only at golden hour; every live photograph framed by a 1px pink hairline in CSS.

Hero on the home page is the only exception — renders in original colour.

### CDN / DNS

- Cloudflare considered as the CNAME target — walkthrough drafted (`../cloudflare-custom-domain-walkthrough.md`). Rejected for a low-traffic brand site (extra layer, no traffic-pattern argument for it). Went direct from Namecheap to GitHub Pages.

---

## 7. Photography & assets

### Live photographs — where each came from

- **Hero d-series.** `src/assets/hero-mp-1d.jpg`, `hero-mp-2d.jpg`, `hero-mp-3d.jpg` (desktop) + matching `-mobile.jpg` companions. Sourced from `  creative assets/headers/` originals, treated via Nano Banana.
- **Origins inset photos.** `public/origins-ageing.jpg`, `origins-craftsmanship.jpg`, `origins-terroir.jpg`, `origins-volcanic.jpg`. Treated source files live in `  creative assets/origin story/web/`. Originals in `  creative assets/origin story/`.
- **Founder portraits.** `public/founder-desktop.jpg`, `public/founder-mobile.jpg`. Treated from `  creative assets/origin story/sz_smoking_portrait.jpg`.
- **Specs-bleed backgrounds.** `public/specs-bg-volage-gold.jpg`, `public/specs-bg-caprice-gold.jpg`. Branded gold-leaf cigar photograph at 15% wash beneath the brown specs band.
- **OG share image.** `public/og-share.jpg`. 1200×630. Currently the first frame of the home hero d-series.

### Nano Banana treatment formula

Verbatim in `../mariposa-design-conventions.md` (§5, "Editorial photography treatment"). Same prompt for every editorial brief — B&W base with warm-cream highlights, single colour signature preserved (tobacco leaf or volcano), pink in cloud highlights only at golden hour, reportage register.

### `public/` vs `src/assets/` rule

- **`public/`.** Anything that needs a stable URL — favicon, CNAME, OG share image, founder portraits referenced via `withBase()` in markup, origins inset photos referenced via `withBase()`, specs-bleed backgrounds referenced from CSS, paper-grain SVG, texture JPG.
- **`src/assets/`.** Anything imported into a component or page so Astro can emit responsive variants (AVIF/WebP) — hero d-series, story backgrounds (square-pk, square-sl, caprice-gold, volcano-gold candidates), brand logos, deprecated cigar PNGs still referenced by mocks pages.

### "Keep previous versions on disk" pattern

Visual revert chains for the story background and hero: superseded source files are retained even when no longer referenced. Story background currently keeps four candidates (`story-bg-caprice-gold`, `story-bg-square-pk`, `story-bg-square-sl`, `story-bg-volage-gold`). Older `_c` series hero sources are similarly retained. Stripped when explicitly told to.

---

## 8. Pending items / known gaps

- **OG share image.** Currently the 1200×630 home hero. Could become a bespoke share card with the wordmark baked in. Separate Yulia round when desired.
- **Mocks pages still indexable.** `/story-mocks/`, `/product-mocks/`, `/volage-header-mocks/`, `/contact-mocks/`, `/about-quote-mocks/`, plus `/about-mocks/`. All currently in the sitemap and crawlable by Google. To filter them out, extend the sitemap integration in `astro.config.mjs`:

  ```
  sitemap({ filter: (page) => !page.includes('/refusal') && !page.includes('-mocks') })
  ```

  Belt-and-braces: add `<meta name="robots" content="noindex,nofollow">` to each mocks page head.
- **Orphaned assets referenced only by mocks pages.** `src/assets/cigar-volage-pink.jpg`, `cigar-caprice-terrasse.jpg`, `sz_smoking_2.jpg`, `mariposa-logo-black.png`. Deletable when the mocks pages are deleted.
- **Old `_c` series hero sources.** Retained for revert. Clean when no longer wanted.
- **Email forwarding.** `hello@mariposacigars.com` not configured. Namecheap offers free email forwarding under Domain List → Manage → Advanced DNS. Forward to whichever inbox Stephane wants surfaced (likely his personal address).

---

## 9. Operational gotchas

- **Folder paths contain leading spaces and double spaces.** ` Projects/`, `  marketing & comms/`, ` website/`, `  creative assets/`. Quote in shell. Globs forgive; tab completion in zsh is fine.
- **`withBase()` for every hand-written public asset src.** Astro rewrites its own asset URLs (imported assets, generated tags) but does NOT rewrite hand-written root-absolute hrefs or CSS `url()` references. `withBase('/founder-desktop.jpg')` is the pattern. Currently a no-op because `base: '/'`, but breaks if anyone re-introduces a subpath.
- **`@import` for fonts in `tokens.css`.** Known anti-pattern — delays font discovery until CSS parse. Works fine; a `<link rel="stylesheet">` in `BaseLayout.astro`'s `<head>` would be marginally faster.
- **macOS case-insensitive FS.** `Origin Story` and `origin story` resolve to the same folder. Same for `Volage.astro` vs `volage.astro`. Don't rely on case for uniqueness. Don't do case-only renames in git — they will silently no-op or collide.
- **Filenames with U+202F (narrow no-break space).** Several screenshots Stephane drops carry U+202F instead of normal space. Glob them rather than typing the name.
- **Separate `.git` dir.** This working tree's `.git` is a pointer file, not a directory. Real git data at `/Users/mrclaude/Claude/.git-repos/mariposa-website.git/`. `git` commands work normally; just don't move the working tree without updating the pointer.
- **Astro cache invalidation.** When a source image in `src/assets/` is overwritten with the same filename, Astro may serve the cached encoded variant. Stop the dev server and clear `.astro/` if a refreshed image is not appearing.
- **GSAP loads deferred.** Page is fully readable without it. Reveals fall through to instant resting state. Verify any new animation degrades gracefully — `prefers-reduced-motion` snaps to endpoints throughout the codebase.
- **`/refusal/` bypasses BaseLayout.** Wires tokens.css + base.css directly. If you add a new global concern (analytics, error tracking, etc.) and want it on refusal too, add it here separately — don't expect BaseLayout to reach this page.

---

## 10. Print pagers

Two A4 magazine HTML pagers live one level up at `  marketing & comms/`:

- `mariposa - about - full (2026-05-27).html` — full About issue.
- `mariposa - about - origins (2026-05-27).html` — Origins-only abridged.
- (Plus three older brand / Volage / Caprice pagers from 2026-05-20, kept for revert reference.)

### Print spec (Cormorant + Inter)

| Spec | Value |
|---|---|
| Page | A4 (210 × 297 mm) |
| Margins | 18 mm all sides |
| Content width | 174 mm |
| Inset photo (beats 2-4) | 105 mm wide |
| Founder portrait | 80 mm wide |
| Column-width photo (beat 1) | 174 mm |
| Drop cap | 52 pt, line-height 0.82, gold-deep, Cormorant italic |
| Body | 10.5 pt Cormorant, line-height 1.6 |
| Wordmark masthead | Cormorant 16 pt, lowercase, letter-spacing 0.18em, gold-deep |
| Section eyebrows | Inter 10 pt, weight 600, uppercase, letter-spacing 0.32em, gold-deep |

### Print workflow

1. Open the HTML in any browser.
2. Cmd+P → Save as PDF.
3. Verify the section breaks (the CSS sets `page-break-inside: avoid` on beats, founder section, and figures).

No headless renderer is installed on Mr. Claude. The "open + Cmd+P" path is the production path.

The pagers use Cormorant + Inter rather than the web pairing of Spectral + Hanken — print convention from `mariposa-design-conventions.md` §3.

---

## 11. Custom domain operations

- **Registrar.** Namecheap. `mariposacigars.com`.
- **DNS path.** Direct registrar → GitHub Pages. No Cloudflare in front.
- **Records (Advanced DNS in Namecheap):**

  | Type | Host | Value |
  |---|---|---|
  | A | @ | 185.199.108.153 |
  | A | @ | 185.199.109.153 |
  | A | @ | 185.199.110.153 |
  | A | @ | 185.199.111.153 |
  | CNAME | www | zedcap.github.io |

- **GitHub repo.** `zedcap/mariposa`. Settings → Pages → Custom domain set to `mariposacigars.com`. "Enforce HTTPS" enabled. A `public/CNAME` file (`mariposacigars.com`) is bundled into `dist/` on every build so GitHub keeps the custom-domain binding stable across deploys.
- **Astro config.** `site: 'https://mariposacigars.com'`, `base: '/'`. Both flipped in commits `6ebc41b` (site URL → mariposacigars.com) and `39f146b` (base `/mariposa` → `/`).
- **Walkthrough archive.** A Cloudflare-route walkthrough exists at `../cloudflare-custom-domain-walkthrough.md`. Kept as a reference but not the path taken — direct registrar shipped.

### If the site goes down

1. Check GitHub Actions on the repo — last deploy red? Re-run.
2. Check `dig mariposacigars.com` resolves to the four GitHub IPs.
3. Check `curl -sI https://zedcap.github.io/` — if that's down, GitHub Pages itself is down (status.github.com).
4. Check GitHub Settings → Pages — "Your site is published" + green tick. If "DNS check failed", re-save the custom domain field to force a recheck.

---

*End of document.*
