# Mariposa — website scope

Working document for the build team. Load alongside `Claude Design - Design System/README.md` and `mariposa-design-conventions.md`. Terse by design.

Status: scope draft, 2026-05-21. Author: Pax. Open decisions resolved by Stephane 2026-05-21 — see "Resolved decisions" near the end. Inline recommendations kept for context; the resolved block governs.

---

## 1. Objective & audience

- **Primary audience: distributors.** The site is a credibility instrument that supports trade conversations. A distributor lands here mid-conversation, or is sent the link, and needs to come away convinced Mariposa is a real, well-built brand.
- **Secondary audience: consumers.** Deliberate brand presence, not a sales channel. No e-commerce.
- **Governing principle: the site must look cool.** Stephane's brief, verbatim in spirit: distributors respond to a brand that looks like a design-forward lifestyle brand, not a cigar catalogue. The tension to hold throughout — trade substance underneath, lifestyle surface on top. When a design call is ambiguous, resolve it toward "lifestyle brand," not "product spec sheet."
- **Framing: the site is a credibility artefact.** It exists to make the brand impression land hard and fast. The hero front-loads that impression — wordmark, position line, atmosphere — so a distributor opening the link is convinced within the first viewport, before any scrolling.
- Out of scope: e-commerce, enquiry form, newsletter signup, blog, multi-language. English only.

---

## 2. Sitemap

```
/                 Home — one-page vertical scroll (hero / product / lifestyle)
/volage           Product page — Volage
/caprice          Product page — Caprice
/about            About page — SHIPS (resolved), see §6
[age gate]        21+ interstitial, gates first visit, see §7.1
[404]             Minimal branded fallback
```

- No contact page. Contact lives in a sticky scroll-following element (§7.2) and the footer (§7.3).
- Flat structure, four pages maximum. Nav is minimal: wordmark (home), Volage, Caprice, and About if it ships.

---

## 3. Home page — section by section

One continuous vertical scroll. Three sections in fixed order. Each fills roughly one viewport at desktop and is allowed to breathe. Slow, analogue motion per the design system (400ms ease-out, sub-pixel butterfly drift, no bounce).

### 3.1 Hero — image slider

- Full-bleed image slider, 3–5 frames. Auto-advances slowly (6–8s per frame) with manual controls; pause on hover.
- Frames cross-fade through a sliver of gold (the design system's page-transition treatment), not a hard cut or horizontal push.
- Persistent overlay, does not change between frames: lowercase `mariposa` wordmark and the position line **Volcanic Soul · 24-Carat Gold**. The slider imagery changes beneath a fixed verbal anchor.
- Sub-line, italic serif: *For those who don't wait for special occasions, but create them.*
- Minimal slide indicator (thin gold ticks or dots, bottom-aligned). No heavy arrows.
- A quiet downward scroll cue. No CTA button in the hero — there is nothing to buy and no form to fill; the cue is "keep scrolling."
- Sticky nav behaviour: transparent over the hero, resolves to the 24px-blur cream bar (`rgba(239,234,226,0.78)`) once the user scrolls past the hero.

### 3.2 Product section — the two SKUs

**Resolved: Option B, the paired editorial slider.** The three options below are kept for context.

- **Option A — two static panels, side by side.** Volage left, Caprice right, each a full-height half-width panel with cigar image, name, one-line tagline, and a "discover" link to the product page. Pros: both SKUs visible at once, no interaction needed, reads instantly, robust on mobile (stacks cleanly). Cons: less "designed," more catalogue-adjacent.
- **Option B — paired editorial feature with a horizontal slider. RECOMMENDED.** A single product section that presents the two SKUs as a deliberate pair (the range is two cigars, that is the story), with a horizontal slider/scroll to move between Volage and Caprice as full-bleed editorial frames. Each frame: large cigar shot, name set in display serif, the one-line tagline, a short lede, and the link through to the product page. Pros: feels like a lifestyle brand presenting a tight, considered range; the slider is the "cool" surface; mirrors the hero's slider language so the page has one consistent motion vocabulary. Cons: only one SKU visible at a time — mitigated by a clear two-dot indicator and a peek of the next frame at the edge.
- **Option C — full-screen scroll-snap, one SKU per panel.** Each SKU gets its own scroll-snapped viewport within the section. Pros: maximum drama per cigar. Cons: adds two more "screens" to the scroll, can feel slow, and the snap fights the otherwise free scroll of the page.

Rationale for B: it satisfies "looks cool" without losing the both-products-at-a-glance benefit (the edge-peek and indicator keep the second SKU present), and it reuses the hero's slider pattern so the site reads as one coherent object. Volage is the live SKU and leads; Caprice is the Q4 2026 SKU and can carry a discreet "Q4 2026" tag.

Each SKU frame pulls from the distributor pager: name, tagline (Volage — *A cigar that doesn't wait for an occasion*; Caprice — *A small indulgence, taken short*), one short lede, link to the product page. No spec tables in this section — spec lives on the product page.

### 3.3 Lifestyle section — the Mariposa story

- The brand's emotional close. Echoes the "Mariposa" section of the brand pager: the white butterfly-ginger legend, and the governing line that the finer things shouldn't be saved for a special occasion — they are meant to be enjoyed today.
- Treatment: editorial, image-led, collage-leaning per the design system's master move (B&W or duotone photography, a botanical cut-out, generous negative space). This is the section that most needs to read as "lifestyle brand."
- Copy is short. A condensed take on the butterfly-ginger legend and the gold-leaf-as-secret-message idea, landing on *they are meant to be enjoyed today*. Not the full Origins prose — that is product/About territory.
- If the About page does NOT ship (see §6), this section absorbs a light origins/founder beat. If About ships, this section stays purely atmospheric and points to About.
- Closes the page above the footer.

---

## 4. Product page template

One shared template, two instances (Volage, Caprice). Content adapted from the distributor pagers (`mariposa - Volage`, `mariposa - Caprice`) for a web/consumer-distributor read — same substance, less print-grid rigidity, more room to breathe.

Section order, top to bottom:

1. **Product hero.** Large cigar image (the existing tight-cropped PNGs work as placeholders), SKU name in display serif, vitola, one-line tagline. Edition label where relevant (Volage · 1st Edition).
2. **The cigar — narrative lede.** The two italic lede paragraphs from the pager: the tasting-arc opener and the gold-leaf-signature paragraph. This is the prose that makes the page feel like a brand, not a datasheet.
3. **Specifications.** The full spec list from the pager as a clean two-column definition list: vitola, format, wrapper, binder, filler, construction, origin, fermentation, ageing, smoke time, strength, release. Keep the terms of art (escogida, entubado, long-filler) unglossed per voice rules.
4. **Tasting notes.** First / second / third thirds, three columns at desktop, stacked on mobile. Verbatim from the pager.
5. **Cross-link.** A quiet link to the other SKU at the foot ("Also from Mariposa — [other SKU]"), keeping the two-product range coherent.
6. Footer (shared, §7.3).

Notes:
- No price, no buy button, no add-to-cart. **Resolved: no "Trade enquiries" line on the product pages.** Contact lives in the sticky element and the footer only.
- Caprice is pre-launch (release Q4 2026). The template carries a discreet "Q4 2026" tag rather than hiding the SKU.
- Template must hold a third SKU later without redesign.

---

## 5. The About page — RESOLVED: ships

**Resolved.** A dedicated `/about` page ships, carrying the Origins story (Jember, Pak Abdul Kahar Muzakir, Havana-seed terroir, the escogida and torcedoras craft detail) and the founder Story (Stephane's journey, the private-reserve-to-brand arc). The home's lifestyle section stays purely atmospheric and points to About. The trade-off discussion below is kept for context only.

**Trade-off:**

- **For a dedicated About page.** The distributor is the primary audience, and Origins is the trade-credibility payload — twenty years of acclimatised Havana seed, 24-month fermentation, hand-rolling, draw-testing. That substance is what converts a trade conversation, and it is too heavy to sit on the one-page home without making the home read like a brochure. A separate page lets the home stay lean and lifestyle-forward (its job) while About carries the proof (its job). The founder story also adds a human, non-corporate texture that supports the "cool brand" goal.
- **Against / the cost.** A fourth page to design, populate, and keep coherent. The home's lifestyle section already gestures at the story; a thin About page would feel redundant. If About ships under-built, it is worse than no About at all.
- **The cheaper middle path if Stephane says no.** Fold a compressed Origins beat into the home's lifestyle section (§3.3) and drop the founder story to two or three sentences there. The home absorbs everything; no fourth page. This keeps the build to three pages but asks the lifestyle section to do double duty, which dilutes its atmospheric job.

**Net:** the distributor-primary brief argues for About. The credibility content needs a home, and the one-page scroll is not it. Recommend building it. If Stephane wants to defer, build the home's lifestyle section so it can absorb the origins beat later without rework.

---

## 6. Functional spec

### 6.1 Age gate — 21+

- Full-screen interstitial on first visit, before any site content renders.
- Question: "Are you 21 years of age or older?" with **Yes / No**. 21 is the threshold, confirmed.
- Yes → enters the site, sets a cookie/localStorage flag so the gate does not reappear within a session (and ideally for ~30 days).
- No → a polite holding screen, no onward link into the site.
- Treatment: on-brand, not a generic browser-style modal. White page, wordmark, the position line, the two choices as the design system's pill buttons. Quiet. It is the first impression — it should already feel like the brand.
- Reference handling: spirits sites (Jack Daniel's, single-malt brands) use a simple, elegant full-screen age form rather than a dismissible popup — follow that, full-screen and unskippable, not a corner dialog.
- No date-of-birth dropdowns. A binary yes/no is the lighter, more on-brand pattern and is standard for this category.

### 6.2 Sticky scroll-following contact element

- Pattern lifted from `marigold.global` — examined directly. Marigold uses a `position: fixed` element anchored to a screen edge that stays visible through the whole scroll: a bottom-right contact button, plus a vertical socials rail pinned mid-height on the left edge. (Marigold is referenced ONLY for this UI pattern. Nothing else from Marigold applies to Mariposa.)
- **For Mariposa:** a single small `position: fixed` contact affordance, bottom-right, visible across the whole site and every page. On click/tap it expands to reveal contact channels. It does not open a form — it surfaces direct contact details.
- **Resolved channels:** email `hello@mariposacigars.com` and Instagram `@mariposacigars` (links to `instagram.com/mariposacigars`). No phone, no WhatsApp, no location line.
- Styling: on-brand, restrained. A pill or small leaf-edged card per the design system. Gold/ink, not a loud accent. Lifts 2px on hover, no colour change. It should read as a discreet concierge, not a chat-widget bubble.
- Mobile: same bottom-right anchor, sized for thumb reach, clear of the age gate and footer.

### 6.3 Footer

- Shared across all pages. Carries the contact details in full: email `hello@mariposacigars.com` and Instagram `@mariposacigars`. No phone, no WhatsApp, no location line.
- Also: lowercase `mariposa` wordmark at footer scale, the brand line *Don't wait for special occasions. Create them.*, a 21+ / responsible-enjoyment line, and a copyright line.
- **Resolved: no legal-entity line in the footer.** Matches the pagers, which carry none.

### 6.4 Explicitly no forms

No enquiry form, no newsletter signup, no contact form anywhere. Contact is always a direct channel (mailto, WhatsApp link), never a form post. Confirmed.

---

## 7. Image needs / shot list — FIRST PASS

Stephane commissions all imagery. This is a concrete starting list so the brief to the photographer is specific. **It will be refined by Axel (narrative beats) and Yulia (composition, crop, treatment) at build time.** Until real shots exist, the build uses placeholders: the existing tight-cropped cigar PNGs (`mariposa-volage.png`, `mariposa-caprices.png`), the hero collage (`mariposa_header_sq.png`), and grey/duotone blocks for everything else.

Treatment note for every slot: per the design system, full-bleed photography is B&W or warm duotone (grey + sepia); only botanical cut-outs (butterflies, mariposa flower) and the gold-leaf signature appear in full colour. Mid-century feel, faint grain, never glossy.

### Hero slider (3–5 frames)

1. **The cigar in the hand.** A lit Mariposa held mid-conversation, the 24-carat gold leaf catching light. Beat: the product, the signature, the quiet luxury. The anchor frame.
2. **The Tuesday moment.** Someone unhurried — a cigar on a balcony or by a pool in soft late light, no occasion, no event. Beat: "don't wait for special occasions." This is the lifestyle thesis in one frame.
3. **The craft.** A torcedora's hands rolling, or the workshop in Jember. Beat: hand-rolled, real, twenty years of terroir. The trade-credibility frame inside the hero.
4. **The setting.** Bali / Java atmosphere — volcanic landscape, tobacco field at the foot of the Argopuro range, or a warm Bali interior. Beat: place, terroir, the three-country soul.
5. *(Optional)* **The botanical.** The white butterfly-ginger flower or a butterfly, close and full-colour against negative space. Beat: the brand's namesake and emblem.

### Product section (home §3.2)

6. **Volage — editorial product frame.** The Volage cigar (Canonazo, long, elegant) styled as a hero object, room to breathe, gold leaf visible. Beat: the flagship, the live SKU.
7. **Caprice — editorial product frame.** The Caprice cigar (Gordito, short and thick, darker Maduro wrapper) styled to match frame 6. Beat: the second SKU, the short indulgence. Can carry a "Q4 2026" tag.

### Product pages (one set per SKU, §4)

8. **Volage product hero shot.** Clean, large, full cigar — the existing PNG is a usable placeholder; a finished commissioned shot replaces it.
9. **Volage detail shot.** Close on the cap and the gold leaf, or the foot, showing construction quality. Beat: the triple cap, the craft, draw-tested.
10. **Caprice product hero shot.** As frame 8, for Caprice (Maduro wrapper, Gordito format).
11. **Caprice detail shot.** As frame 9, for Caprice — the deeper, roasted Maduro wrapper texture.
12. *(Optional)* **A supporting tasting-mood image per SKU** — coffee, wood, caramel, toasted nuts as a still life echoing the tasting notes. Refine with Axel.

### Lifestyle section (home §3.3)

13. **The story image — collage-led.** The butterfly-ginger legend made visual: the white flower, a butterfly, the gold leaf, possibly a B&W portrait — assembled as a collage in the design system's master treatment. Beat: heritage, the secret message, the namesake.
14. **A community / shared moment.** Two or three people, cigars, unhurried, Bali warmth — the "share a good conversation, whatever the hour" line. Beat: the brand as a social object, not a solitary luxury.

### Functional / supporting

15. **Age gate background (optional).** Either pure white per the design system, or one quiet, very subdued atmospheric image. Recommend pure white — cleaner, faster, more on-brand.
16. **Footer texture (optional).** A gold-band or paper-grain field, not a photograph. Build-time, no commission needed.

Total commissioned shots, first pass: roughly **11–14** (frames 1–14; 15–16 are build-time, no photography). Axel and Yulia will consolidate where one shot can serve two slots.

---

## 8. Tech approach — RESOLVED

- **Astro + TypeScript.** Astro is the build framework. The page count (four pages), the 21+ age gate, and the two sliders (hero, product) earn a framework over hand-built HTML: shared layout, components, content collections, and `<Image>` optimisation. Output is a fully static site (`output: 'static'`) — no server, no runtime. Astro ships zero JavaScript by default; only the age gate, the sliders, and the sticky contact element carry a small island of client-side script.
- **No Tailwind.** The design system already ships a complete CSS-custom-property token set (`colors_and_type.css`): colour, type scale, spacing, radii, shadows, motion, layout. Re-expressing that as a Tailwind config is overhead with no payoff at four pages. Decision: the token CSS is wired in as a global stylesheet (`src/styles/tokens.css`, a copy of the design-system file with the Google Fonts import retained), and component styles use Astro's scoped `<style>` blocks plus a small global `base.css`. Plain CSS, design tokens, scoped styles. No utility framework.
- **Content in Astro content collections.** Copy lives in markdown / data files under `src/content/` (`site`, `products`), typed with a Zod schema in `src/content/config.ts`. Axel's `website-copy.md` drops into those collection files; the build reads copy from content, not hard-coded strings.
- **Imagery via Astro `<Image>`.** Responsive AVIF/WebP with width descriptors, lazy-loaded below the fold. Source assets live in `src/assets/`; placeholders until Stephane's photography lands.
- No CMS. No e-commerce. No cart, no payment, no forms, no newsletter. English only, no i18n scaffolding. No analytics in this build (Sergey's later phase if wanted).
- Built locally in `/Users/mrclaude/Claude/James/ Projects/mariposa/  marketing & comms/ website/`. The `website` folder has one leading space; npm and node handle it when paths are quoted. No domain registered yet.
- Hosting, deploy, DNS, HTTPS are Sergey's later phase. The app is built to be deployable as a static bundle (`npm run build` → `dist/`); nothing in the build assumes a particular host.
- Responsive: 12-column grid at desktop collapsing to single column under 720px, per the design system. Sliders and the product layout degrade cleanly to stacked on mobile.
- Performance: compress all imagery, lazy-load below the fold, keep pages light. The slow analogue motion stays smooth on mobile; `prefers-reduced-motion` is respected.
- Accessibility: real focus states (2px gold outline), slider controls keyboard-operable, age gate keyboard-operable, alt text on all imagery.
- Placeholder strategy: build complete with placeholders so the site is fully reviewable before Stephane's photography lands; image slots swap in cleanly later.

---

## 9. Build sequencing / who does what

| Phase | Owner | Work |
|---|---|---|
| 0 | Stephane | Settle the open decisions below. Unblocks the build. |
| 1 | Axel | Web copy: hero lines, product-section ledes, lifestyle-section story copy, product-page narrative, age-gate copy, footer lines. Adapts the pager copy for web; does not re-research the brand. Refines the §7 shot list into narrative beats. |
| 2 | Yulia | Front-end build: age gate, one-page home (hero slider, product section, lifestyle section), shared product-page template, sticky contact element, footer, 404. Placeholders for all imagery. Loads the design system + design conventions; web overlay rules apply. Refines the §7 shot list into composition/crop guidance. |
| 3 | Stephane | Review build with placeholders. Commission photography from the refined shot list. |
| 4 | Yulia | Swap commissioned imagery in for placeholders. Final polish. |
| 5 | Sergey | Domain registration and hosting when Stephane gives the word. Static hosting (Netlify / Cloudflare Pages / similar). DNS, HTTPS, deploy. |

Axel and Yulia can run phases 1 and 2 largely in parallel once decisions are settled; Yulia builds with lorem/placeholder copy and Axel's copy drops in.

---

## Resolved decisions (Stephane, 2026-05-21)

All open decisions are now settled. This block governs where it contradicts the inline recommendations above.

1. **About page — ships.** A dedicated `/about` carries Origins and the founder Story. The home's lifestyle section stays atmospheric and points to About. (§5)
2. **Product-section layout — Option B**, the paired editorial slider. (§3.2)
3. **Web typography — Spectral + Hanken Grotesk**, the web pairing. The design conventions overlay reserves Cormorant + Inter for print surfaces, so there is no conflict. Fallback to Cormorant + Inter only if Spectral/Hanken genuinely fail in build. (§8)
4. **Contact channels — email `hello@mariposacigars.com` and Instagram `@mariposacigars`** (links to `instagram.com/mariposacigars`). No phone, no WhatsApp, no location line. Applies to the sticky element and the footer. (§6.2, §6.3)
5. **Product pages — no "Trade enquiries" line.** Contact lives in the sticky element and footer only. **Footer — no legal-entity line**, matching the pagers. (§4, §6.3)
6. **Tech stack — Astro + TypeScript, static output, no Tailwind.** See the rewritten §8.
7. **Framing — the site is a credibility artefact.** The hero front-loads the brand impression hard and fast. (§1)
