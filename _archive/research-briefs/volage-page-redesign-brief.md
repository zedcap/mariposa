# Volage page — research brief and redesign proposal

**Author.** Pax.
**Date.** 2026-05-23.
**Status.** First-pass deliverable for Stephane. Yulia is the intended builder.
**Brief.** The current Volage page (sections 1–5: hero, narrative lede, 12-row spec list, three-column tasting notes, cross-link to Caprice) reads as a spec sheet, not a product page worthy of the brand. Stephane: "does not work at all." This document investigates how the premium cigar category — and the adjacent luxury categories Mariposa actually competes alongside (whisky, watches, fragrance, lifestyle) — present an individual SKU, then proposes a section-by-section rebuild.

---

## Part 1 — Research

Twelve sources examined. URLs cited inline; full list at the foot. Confidence on the structural observations is high (each source was fetched and read); confidence on the *intent* behind a given design move is medium (inferred from the artifact).

### Premium cigar — the established Cuban / Dominican benchmarks

**Cohiba (via Habanos S.A., official).** No dedicated SKU page for Behike or any single vitola. The brand page is a single long-form etymological / chronological narrative (Taíno origin → 1492 → 1982 launch → line expansions) with image strips per *line* rather than per vitola. Strength ratings appear as a flat list at the end. No interactive elements, no tasting notes per SKU, no specifications panel. Heritage is the entire architecture. **What works.** Mythology dominates; the brand is presented as the field's founding name. **What fails.** A buyer cannot get to a Behike 56 spec sheet without leaving the site. Catalogue function is rejected in favour of cultural positioning. Dated by 2026 web standards.

**Davidoff (Oettinger Davidoff, 2024 BigCommerce redesign).** Modular discovery architecture: hierarchical dropdowns (Discover / Gift / Shop), category tiles (White Band, Black Band, Winston Churchill, Limited Editions, Year of the Horse 2026), gift-oriented hero blocks ("Created with Passion. Given with Love. Received with Joy."). The SKU pages themselves are clean but emphasise commerce over story — they sit under `/product/<slug>`. **What works.** Strong information architecture, fast routing across a broad portfolio. Won a design award (BigCommerce 2024). **What fails.** Heritage is compartmentalised at `/discover/heritage-craftsmanship` rather than woven into a SKU page. Storytelling is bolted on, not integral. The page-to-page rhythm is e-commerce, not editorial.

**Padrón (Family Reserve).** Pure catalogue: header → text intro paragraph → seven product cards (numbered 44, 45, 46, 50, 85, 95, 96) showing dimensions + Cigar Aficionado award notations as plain text → footer. Pure straight-on cigar photography, plus open/closed box shots. No lifestyle imagery, no tasting notes per SKU, no narrative, no interaction. **What works.** Awards as social proof, dense and scannable. **What fails.** Reads like a 2010 product database. The brand's intrinsic prestige (heritage, family, ten-year ageing) is asserted in one paragraph and then abandoned.

**Arturo Fuente (Fuente Fuente OpusX).** Hero opens with an atmospheric provenance line ("Nestled in the rich, volcanic soil of the Dominican Republic lies Chateau de la Fuente"), then heritage narrative on Carlos Fuente Sr.'s soil work, then catalogue-style vitola list (length, ring gauge, per-box count). Some partner-brand integrations (coffee, watches, clubs) sit oddly above the product. **What works.** The heritage line lands. Provenance hits first. **What fails.** Specs drop in raw immediately after the story. No tasting notes. No interaction. No lifestyle. Looks visually unchanged for years.

### The modern-cigar template (the inflection point)

**Drew Estate — Liga Privada No. 9.** This is the closest, most studied analogue. Section order:

1. Full-bleed hero (band imagery, desktop and mobile crops).
2. Brand story — the "nine blends" origin and how No. 9 won out.
3. Product description — prose on the Stalk-Cut, Stalk-Cured Broadleaf process.
4. Three bolded attribute words — **Bold. Majestic. Robust.**
5. Specifications — *as prose, not a table*. Wrapper/binder/filler/body/taste woven into label-style lines, no `<dl>` grid.
6. Size carousel — seven vitolas, interactive, with visual cigar representations.
7. Packaging carousel — boxes, bundles.
8. Pairing suggestions — beverage cards.
9. Discovery — related Liga Privada lines.
10. Educational callouts — two information blocks on tobacco anatomy and ring-gauge.

**What works.** Story-first, spec-second, with specs *narrativised* rather than tabulated. The three-word attribute callout breaks the wall-of-prose. The size carousel solves the "many vitolas" problem without dumping a table. Pairings extend the SKU into a lifestyle moment. Educational blocks help the new-to-cigars buyer without patronising the connoisseur.
**What fails.** The packaging carousel is over-padded; two slides would do the work of seven. The pairing cards feel generic (whisky, coffee, rum — the predictable three).
**Lesson.** Specs as prose. Size as a moment of interaction. Story before everything else.

**Foundation Cigar Co. — Aksum.** Heritage-first, hard. The tagline ("A Journey Through Legend, Crafted in Every Cigar") leads to a long narrative on the Aksumite Kingdom and Menelik I's Ark of the Covenant legend before any product information appears. Specs and blend details land mid-page. Then product gallery, video, related products, newsletter signup. **What works.** The mythology earns its space because it ties the product name back to a real place and lore. **What fails.** Heavy narrative paid off only because the cigar can sustain a 300-word origin story; thinner SKUs would collapse under that weight. Visual treatment around the narrative is plainer than the writing deserves — it's good copy in a mediocre frame.

**Plasencia — Alma del Campo.** Tobacco-field hero (full-width image, collection logo overlay). Five product cards. *Consolidated* specifications section showing wrapper / binder / filler origins for the entire range in one place — not duplicated per SKU. Flavor + strength profile (five-leaf strength indicator), then customer testimonials mid-page. **What works.** Consolidating the unchanged-across-SKUs specs into one block is honest and saves real estate. The agricultural-origin hero plants the brand in *place*. **What fails.** Testimonials mid-page interrupt the editorial rhythm; they belong in a trade press section, not woven into the product story.

### Adjacent luxury — what the cigar category should be borrowing from

**The Macallan M (Lalique).** The whole page is a *collaboration story*: Fabien Baron's design vision, Lalique's crystal mastery, Macallan's whisky. The decanter (an object with six facets, one per Macallan "pillar") *is* the story. Tasting notes and ABV are nearly invisible. **Lesson.** A signature design element on the product itself — six facets, hand-engraved numbering — becomes the spine of the page. Mariposa has the equivalent: the 24-carat gold leaf. It is *the* signature, and the current page treats it as the second paragraph of body copy. That is a strategic miss.

**Glenfiddich Grande Couronne.** Full-bleed video hero → opulent type headline ("Opulent Patisserie Sweetness") → short prose intro → secondary hero pivot ("But its crowning glory awaits") → image carousel → categorical tasting notes (Color / Nose / Taste / Finish — clinical, reference-style) → related products. Specs ("ABV 40%. 70CL, 20CL") embedded casually into copy, not tabulated. **Lesson.** Two moments of motion: a hero video and a pivot section. Tasting notes go categorical-reference, not narrative — a deliberate inversion of the hero's lyric register. The contrast makes both stronger.

**Hermès H24 / Loewe Solo Esencial.** Dual-image hero (two angles of the bottle), short prose lede with the scent description, "all details" as an expandable reveal *not* a permanent block on the page. Three benefit statements (shipping, returns, packaging) sit in horizontal treatment below. **Lesson.** Premium does not exhaust the buyer with information. The "all details" disclosure pattern is standard at the top of the luxury market. Mariposa's 12-row spec list is, by this standard, retail-shelf overkill on the primary scroll.

**Aesop.** Editorial restraint is the entire identity. White space, typography-led, minimal copy, ingredients and format in a structured but compact block, longer-form storytelling routed to a separate library ("The Fabulist"). **Lesson.** Restraint is communicated through *what is omitted*. Mariposa already understands this aesthetically (the design system reflects it); the Volage page does not yet practice it structurally.

**A. Lange & Söhne (Datograph).** Could not load the live page in the research window (heavy JS, server timed out), but the category convention from the surrounding documentation is per-reference pages with macro photography of the movement, the dial, and the case, with technical complications presented as a hierarchy (column-wheel chronograph → flyback → jumping minute counter → outsize date). **Lesson.** Macro photography of *craft elements* — the gold leaf being applied, the cap being formed, the band — is the watch industry's bread and butter. Mariposa has none of this yet.

### Scrollytelling — when it earns its keep

Industry data: scroll-driven storytelling can lift dwell time up to ~85% on well-executed pages (DesignRush, 2024). It works when the product itself benefits from sequential reveal (Apple AirPods Pro, Adidas annual report). It fails when imposed on a product that does not have a sequence to tell. Mariposa has *two* sequences worth telling: (a) the journey from Argopuro volcanic soil to Jember rolling-room to gold leaf, and (b) the smoke arc from first third to final third. Both are natural scroll candidates.

---

## Part 2 — Synthesis

### What converts a distributor

A distributor is making a credibility judgment on the brand, not the cigar. They need three things, in this order:

1. **The brand is real and considered.** Editorial design, restrained copy, signature element pulled forward. (Macallan M, Liga Privada No. 9.)
2. **The cigar is technically credible.** Vitola, blend, origin, ageing. Specs do need to be on the page — but they do not need to *lead* the page, and they do not need to be presented as a 12-row dump. (Hermès "all details", Plasencia consolidated spec block.)
3. **The brand can sell through their channel.** Lifestyle imagery, occasion language, a place for the cigar in their customer's life. The current Volage tagline ("doesn't wait for an occasion, creates them") already does this; the page does not yet show it.

### What converts a connoisseur

The connoisseur wants the technical detail, the provenance, and the producer's voice. They want unglossed terms (Canonazo, entubado, escogida) treated as a given, not explained. They want the tasting notes done with restraint — three short notes per third *or* a prose arc, not the worst of both. They want to feel the maker's hand. The current page reads as if it were assembled by a designer; it should read as if it were narrated by a torcedora.

### "Real brand" vs "catalogue listing" — the signals

| Signal | Real brand | Catalogue listing |
|---|---|---|
| Hero | Editorial composition or motion; brand register | Product on white |
| Specs | Selective, woven, or tucked behind a reveal | Full table front-and-centre |
| Story | A clear authorial voice with a point of view | Generic provenance copy |
| Photography | Lifestyle, craft, macro — varied | Straight-on product shot only |
| Tasting | An arc, paired or sequential | Three bullet points |
| Signature | The brand's one unmistakable element pulled forward | Bullet in a spec list |
| Interaction | One or two moments that earn it (size selector, scroll arc) | None or a generic carousel |

The current Volage page sits in the right-hand column on five of seven rows.

---

## Part 3 — Concrete proposal for Volage

**Section count: seven.** Each section has a single job. The order is built so a distributor scanning the page in 30 seconds gets the brand → the signature → the cigar → enough specs to qualify, in that order. A connoisseur reading top to bottom gets a coherent narrative.

The biggest structural shift: **the gold-leaf signature gets its own section, second**, not the second paragraph of the lede. This is the differentiator. Everything else flows from it.

### 1. Product hero — keep, refine

**Purpose.** Identify the SKU and set the editorial register.
**Content.** Existing layout (image left, copy right) is fundamentally correct. Keep edition label, name, vitola, format, tagline. *Cut the format line from the hero* — it duplicates the vitola and adds noise. Move format into the spec moment later.
**Composition.** Existing 1:1 image frame with pink hairline is correct. Type ladder is correct.
**Image.** Existing `cigar-volage-woman.jpg` works for now. *Stronger long-term*: a cropped macro of the cigar with the gold band visible, paired in a diptych with the existing collage image. Diptych = brand register on one side, object on the other.
**Motion.** Existing rise-and-fade on hero media + copy is right. Do not add more here.
**Action for Yulia.** Strip the `.hero__format` line. Optional later: convert the single-image frame into a 1:1 + 1:1 diptych at desktop, collapsing to single image on mobile.

### 2. The signature — NEW, top of page after the hero

**Purpose.** Tell the gold-leaf story before anything else. This is Mariposa's *only* unmistakable differentiator and the current page buries it.
**Content.** A short editorial block: one display-italic line + one short paragraph. Draft:

> *Each Mariposa wears 24-carat gold, laid by hand.*
>
> The leaf is applied by Wrights of Lymm, the British supplier whose gold has dressed Westminster, Versailles, and St Paul's. On a Mariposa, the same craft is brought to the band of a single cigar. The reasoning is the brand's: the finer things are meant to be enjoyed, not waited for.

**Composition.** Full-bleed cream (`--pearl` per design conventions) or white panel, generous padding (`--space-9` block padding). One landscape-oriented image — a macro of the gold band on the cigar, ideally in the act of being applied — sits to the right or below at desktop, full-width on mobile. Type: display italic for the lede line (clamp 1.6 → 2.2rem), body Hanken for the paragraph. Gold-deep `--gold-deep` for an underline/hairline accent under the lede line.
**Motion.** Lede line types in or rises with longer duration (0.9s) than body. Image fades in with slight scale (1.02 → 1.0) on scroll into view. Optional GSAP touch: a thin gold-leaf SVG element drifts across the panel on scroll, parallax depth 0.3.
**Photography required: YES.** This section will not work without a macro shot of the gold leaf on the cigar (ideally application in progress, or freshly applied). Stephane should commission one or two macro shots. Cost is low and the payoff is the whole page.

### 3. Origin — provenance arc, scroll-driven

**Purpose.** Tell the Argopuro → Jember → cigar journey as a sequential reveal. This is the page's longest scroll moment and the closest to scrollytelling.
**Content.** Three beats, each one short sentence + one image. Existing narrative lede paragraphs (currently section 2) are *cannibalised* for this section. Suggested beats:

- *Argopuro.* "Volcanic soil at the foot of an East Javan range. Havana-seed tobacco, learning what Indonesia tastes like."
- *Jember.* "Hand-rolled by torcedoras in the BIN workshop. Entubado bunching, three-part construction, Cuban triple cap."
- *Time.* "Twenty-four months of fermentation. Twelve months of ageing. Then the leaf goes on."

**Composition.** Three blocks stacked vertically at desktop, each beat full-bleed and tall (60–70vh). Image left or full-background, text positioned over a partial scrim. At mobile, simplified to three stacked image + caption pairs.
**Motion.** Each beat reveals on scroll into view — image scales subtly (1.05 → 1.0), text rises with 0.15s stagger. *No parallax scrub* — it taxes the device and feels noisy at this register. Restraint per the design conventions.
**Photography required: YES — three shots.** Argopuro field (or a tobacco-plant macro), the Jember rolling room (torcedoras at work, hands and leaf), the ageing room (rows of bundled cigars). These probably already exist in BIN's archive or can be commissioned cheaply. If only one shot is feasible, prioritise Jember (hands).

### 4. The cigar — narrative + selective specs

**Purpose.** Tell what the cigar *is* in the producer's voice, then deliver the technical credibility.
**Content.** Two short paragraphs (the rewritten narrative — see below), followed by a *six-line* condensed spec strip, with the remaining six rows tucked behind a "Full specifications" reveal.

The condensed six (the ones a buyer scanning will check first):
- Vitola — Canonazo
- Format — 150 mm · 52 ring gauge
- Wrapper — Criollo 98 Colorado, Seco, 2021
- Origin — Jember, East Java, Indonesia
- Strength — Full body
- Release — Limited

Behind the reveal:
- Binder, filler composition, construction detail, fermentation, ageing, smoke time.

Rewritten narrative draft:

> A Canonazo, hand-rolled in Java from Havana-seed Criollo 98 grown in the volcanic soil at the foot of the Argopuro range. Full-bodied, slow-burning, forty-five minutes of evolution.
>
> The first draw is creamy and slow. Wood arrives, then coffee, then a sweetness that holds while the spice walks in. A cigar that does not wait for an occasion.

The current second narrative paragraph (gold leaf) is moved up to Section 2 where it belongs.

**Composition.** Constrained measure (760px max), centred. Display italic for narrative paragraphs (existing treatment). Spec strip below: single horizontal row at desktop, 2-col grid at tablet, stacked at mobile. Eyebrow + value treatment from the current spec design, reused.
**Motion.** Narrative paragraphs cascade (existing pattern). Spec strip fades in as a block. Full-specs reveal: a single underlined "Full specifications +" link that expands an accordion in place — no modal, no overlay.
**Photography required.** No new shots needed for this section.

### 5. The smoke arc — tasting notes reworked as a horizontal scroll or sequence

**Purpose.** Make the three thirds feel like an *arc*, not a forced three-column grid. Pair the structure with what a smoker actually experiences — time passing.
**Content.** Three tasting notes, exact existing copy preserved (good writing, do not rewrite). Plus one new element: a thin gold timeline line running through the section, marked at 0', 15', 30', and 45' — the actual smoke time, segmenting the thirds.

Optional addition (Stephane's call): a pairing suggestion per third — a coffee, a rum, a digestif — drawn from the brand register. This would extend the section into lifestyle and give distributors language for their own pitch. If unwanted, omit.

**Composition.** Two equally defensible layouts. Pick one:

- **Option A — horizontal scroll on desktop.** Three full-height (50vh) panels arranged horizontally, scrolled left-to-right by mouse wheel or trackpad. Each panel has the third label, the note, the time marker, and (optionally) the pairing card. Collapses to vertical stack on mobile.
- **Option B — vertical sequence with sticky time marker.** Each third sits as a 70vh vertical section. A sticky gold timeline indicator on the left margin advances as the scroll progresses, ticking from 0' to 45'. Stays vertical on mobile.

**Recommend Option B.** Horizontal scroll is fashionable but breaks browser conventions and tires distributors who scroll quickly. The sticky timeline is restrained and rewards attention without demanding it.

**Motion.** Sticky element behaviour (GSAP ScrollTrigger) for the timeline. Each third's text rises on enter (existing reveal pattern reused).
**Photography required.** Optional — a single atmospheric shot (smoke, ash, half-burnt cigar) would lift the section but not required.

### 6. The signature, reprised — packaging and finish

**Purpose.** Close the loop on craft. Show packaging, the band, the box, the postcard. This is where the distributor sees what they would receive in a case.
**Content.** A short eyebrow + line ("Presented as a single cigar in [packaging spec], with [closing notes].") + a 2- or 3-image gallery of the packaging. No carousel — a static gallery, restrained.
**Composition.** Three images in a row at desktop (or two large and one detail), stacked at mobile. White or cream background; let the packaging photography do the work.
**Motion.** Stagger fade-in only. No interaction.
**Photography required: YES — packaging shots.** These almost certainly exist already in `product/ packaging/` or the BIN archives. If not, photographic priority is much lower than the gold-leaf macro and the Jember rolling-room shot.

### 7. Cross-link to Caprice — keep, repositioned

**Purpose.** Route. Same job, same execution.
**Content.** Existing copy ("Also from Mariposa — Caprice →") is right.
**Composition.** Existing centred, hairline-framed treatment is right. Restrained, doesn't compete with what comes before.
**Motion.** Existing reveal works.
**Decision: keep at the foot.** It belongs there. Putting it earlier (a "sister cigar" sidebar mid-page) would distract from Volage's own arc. The foot is the right exit ramp.

### Sections that are NOT in the proposal (and why)

- **Customer testimonials.** Not yet appropriate — no distributor reviews to quote, and a connoisseur quote pre-launch would read as fabricated. Hold for v2 after first reviews land.
- **Pairing block as its own section.** Folded into Section 5 if Stephane wants it, otherwise omitted. A separate "pairings" section would inflate the page without earning it at this product stage.
- **Educational callouts (Liga Privada's tobacco-anatomy blocks).** Wrong audience. Distributors and connoisseurs do not need them; explaining "what is a ring gauge" would actively damage the brand register.
- **Awards / press strip.** When awards arrive, add as a thin horizontal eyebrow band above the footer. Not now.
- **Newsletter signup.** Belongs in the global footer (already there), not on the SKU page.

---

## Part 4 — Implementation notes for Yulia

**Stack assumptions.** Existing Astro project, GSAP available, reveal helper in `src/lib/motion.ts` already factored. No new dependencies required for the recommended Option B (sticky timeline).

**New motion work.**
- Section 2 (signature): optional gold-leaf SVG parallax drift. GSAP `to()` tied to ScrollTrigger, depth 0.3. Skip if it feels noisy after build.
- Section 3 (origin arc): per-beat reveals on enter. Existing `reveal()` helper is sufficient; no scrubbed parallax.
- Section 5 (smoke arc): sticky timeline. GSAP ScrollTrigger pin or `position: sticky` CSS (preferred — lighter, no JS dependency). Tick markers update either via scroll progress or via ScrollTrigger callbacks on each third's entry.

**Reduced motion.** Honour `prefers-reduced-motion`. Sticky timeline degrades to static. Origin-arc beats become simple fade-in. Existing motion helper handles this — extend the pattern.

**Mobile.**
- Hero diptych (if pursued): single image only.
- Section 2: image stacks below copy, full-width.
- Section 3: three stacked image+caption pairs, no parallax.
- Section 4: spec strip stacks to single column.
- Section 5: timeline ticks become inline indicators above each third's text.
- Section 6: gallery stacks vertically.

**Accessibility.**
- Full-specs reveal (Section 4): native `<details>` element preferred. Buttons that toggle ARIA-expanded are acceptable but more work.
- Sticky timeline: provide a `<nav aria-label="Smoke arc">` wrapper so screen readers announce it.
- All decorative imagery (gold leaf drift, timeline) gets `aria-hidden="true"`.
- Per the design conventions, eyebrow tracking and uppercase treatments stay — but check screen-reader pronunciation on uppercase eyebrow text. Most screen readers handle uppercase CSS correctly because the source text is mixed-case.

**Performance.**
- All new photography served via `astro:assets` `<Image />` with `widths` set, same as the existing hero. Macros of the gold leaf and the Jember rolling-room will be large source files; constrain.
- Sticky timeline is cheap (CSS-only). Parallax drift in Section 2 is the heaviest motion; profile and gate by viewport size if it costs more than 5ms per frame.

**Content dependencies (block on Stephane).**
- Wrights of Lymm copy in Section 2 — confirm the supplier credit is right (the brief mentions "Wrights" already in the finances archive, so this is consistent with the project record).
- New photography commissions — see "Photography required" calls per section. Minimum viable set: gold-leaf macro + Jember rolling-room. Stretch: Argopuro field, ageing room, packaging set.
- Pairing suggestions for Section 5 — only if Stephane wants them. If yes, will need three short pairing descriptions (one per third) drafted by Axel.

**File structure (suggestion).**
- Existing `src/content/products/volage.json` extends with new fields: `signature` (object: lede line + paragraph), `origin` (array of three beat objects: label, note, image-slug), optional `pairings` (array of three).
- `src/pages/volage.astro` refactored into the seven sections; consider splitting some into `src/components/` (e.g. `SignatureBlock.astro`, `OriginArc.astro`, `SmokeArc.astro`) so Caprice can re-use them.
- The Caprice page can reuse the same template once Stephane is happy with Volage. Same seven sections, different content + imagery.

---

## What did I miss?

Three honest gaps:

1. **I did not see the live A. Lange & Söhne SKU page.** The server timed out. The category convention (movement macros, complication hierarchy) is well-documented and the inference is sound, but Stephane should know I am quoting category practice, not a fetched primary source.
2. **No competitive read on the Indonesian / Asia-Pacific cigar market specifically.** Esperitu, El Gaucho, Negresco are mentioned in the project's own competitor file but I did not pull their live web presentations. If any one of them has done a strong website rebuild, the brief should sit alongside that benchmark. **Action**: I can pull this in a follow-up pass if Stephane wants it.
3. **The proposal assumes Stephane will commission new photography.** I have flagged this explicitly per section, but if the answer is "no photography budget for six months," the brief degrades. Sections 2 (signature) and 3 (origin) are the ones that *cannot* be done without new shots. Sections 1, 4, 5, 6, 7 can ship as-is with existing assets. A minimum-viable rebuild without new photography is possible — it would land at roughly 50% of the proposal's impact.

**One question Stephane was not expecting.** The page right now talks to a buyer who already knows what Mariposa is. A first-time distributor landing on `/volage` cold has no idea this is a Bali-investor-led brand sourcing from Jember, or that the gold leaf comes from Wrights of Lymm, or that the founder is the principal himself. The page proposed above still does not say any of that. Question: should the Volage page carry a one-line provenance footer — *"A cigar by Mariposa. Hand-rolled in Jember. Gold by Wrights of Lymm. Bottled (figuratively) in Bali."* — or does that belong only on the About page and never the SKU? I do not have a strong opinion; the case for yes is *distributor lands on the SKU first via search* and the case for no is *editorial restraint, the About page is one click away*. Stephane to decide.

---

## Sources

Cigar industry — direct page fetches:

- [Cohiba brand — Habanos S.A.](https://www.habanos.com/en/the-habanos-brands-academia/cohiba-brand/)
- [Cohiba Behike tag — Habanos S.A.](https://www.habanos.com/en/tag/cohiba-behike-en/)
- [Padrón Family Reserve](https://padron.com/padron-family-reserve/)
- [Fuente Fuente OpusX — Arturo Fuente](https://arturofuente.com/our-cigars/opusx/ff-opusx/)
- [Liga Privada No. 9 — Drew Estate](https://drewestate.com/products/liga-privada/liga-privada-no-9/)
- [Aksum — Foundation Cigar Co.](https://foundationcigarcompany.com/aksum/)
- [Alma del Campo — Plasencia Cigars](https://www.plasenciacigars.com/collection/alma-del-campo/)
- [Davidoff of Geneva USA homepage](https://us.davidoffgeneva.com/)

Adjacent luxury — direct page fetches:

- [Glenfiddich Grande Couronne 26 YO](https://www.glenfiddich.com/en-us/grande-couronne)
- [LOEWE Solo Esencial EDT 50ml](https://www.loewe.com/usa/en/men/fragrances/loewe-solo-esencial-eau-de-toilette-50ml/P000011X54-0000.html)

Context and supporting:

- [Davidoff digital makeover — PYMNTS, 2024](https://www.pymnts.com/news/retail/2024/davidoffs-digital-makeover-aims-to-elevate-the-luxury-cigar-brands-consumer-experience/)
- [Macallan M Collection](https://www.themacallan.com/en/single-malt-scotch-whisky/m-collection)
- [Macallan 72 Years Old in Lalique](https://www.themacallan.com/en/single-malt-scotch-whisky/the-macallan-72-years-old-in-lalique)
- [A. Lange & Söhne — Datograph Up/Down (page would not load; structural inference from category convention)](https://www.alange-soehne.com/us-en/timepieces/saxonia/datograph-updown)
- [Hermès H24 Eau de Parfum (page 403'd from fetch; structural read from search-result extracts and Loewe analogue)](https://www.hermes.com/us/en/product/h24-eau-de-parfum-V108421V0/)
- [Aesop philosophy on design](https://www.aesop.com/philosophy-on-design.html)
- [Aesop marketing strategy — Latterly](https://www.latterly.org/aesop-marketing-strategy/)
- [Scrollytelling examples / dwell-time data — DesignRush](https://www.designrush.com/agency/website-design-development/trends/scrollytelling)
- [Scrollytelling guide — Metabole Studio](https://metabole.studio/en/blog/scrollytelling)
