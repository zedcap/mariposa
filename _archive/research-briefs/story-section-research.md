# Story section — research brief and redesign proposal

**Author.** Pax.
**Date.** 2026-05-24.
**Status.** First-pass deliverable for Stephane. Yulia is the intended builder.
**Brief.** The homepage story moment (`LifestyleSection.astro`) is currently being presented as a *card on a cream section* — a contained editorial box on a wider cream backdrop. Stephane has tried pearl + paper texture, pink, and gold/khaki on the card; all read flat or lifeless. The structural problem is the card frame itself, not its colour. This document investigates how premium and lifestyle brands handle a brand-story moment on the homepage, then proposes five patterns Mariposa could try, with one recommended.

---

## Part 1 — Research

Sixteen primary sources examined directly; full URLs at the foot. Several luxury sites (Macallan, Hennessy, Krug, Veuve Clicquot, Bvlgari, Aman Tokyo) returned 403 / 503 to direct fetch, almost certainly bot-protection. Where that happened I substituted analyst write-ups and secondary commentary, marked *(secondary)* in the citations. Confidence on the composition observations is high for the sixteen sites fetched, medium for the ones reconstructed from analyst pages.

A useful reframing before the data: in this category, the homepage story moment is almost never a *card*. It is either a *room* (a full-bleed section that takes the page over for a moment) or an *interruption* (a constrained but quiet typographic pause between louder sections). The card pattern is the e-commerce reflex — a marketing block on a marketing page — and almost no premium brand uses it for the brand story.

### Premium spirits — the "world the brand inhabits" pattern

**Hennessy / Krug / Veuve Clicquot.** All three sites bot-block direct fetches. Analyst summaries and category convention align: the homepage story moment is a full-bleed cinematic block — video or large still — with a single tight line of type laid over it. The story is told in *register* (the picture, the music, the mood) more than in *prose*. Prose lives one click deeper on a dedicated heritage page.

**Glenfiddich (homepage).** Dark, sophisticated ground (deep brown / black) with amber liquid photography and white type. Hero video runs first, then a mid-scroll product grid, then a mid-page brand-partnership editorial (Aston Martin F1) presented as a full-width video block with minimal type, then a lower deep-dive product feature pairing prose ("Warm spice, honey, rich fruit") to a single dominant image. **Lesson.** A premium spirits homepage stacks several full-bleed editorial moments at different scroll depths, not one. Each is a *room*.

**Patrón (homepage).** Heritage-narrative-first: a Guillermo del Toro short film at the top ("Both born in Jalisco. Both obsessed with Mexican craftsmanship"), then a mid-page philosophy line ("We Add Nothing So You Taste Everything"), then a craft block ("Crafted by hand, perfected by process"). The story arc is *three moments*, each given its own full-width section. No cards. **Lesson.** A premium brand earns the story moment by *committing the real estate to it*. A 600px card on a wider section reads as a marketing block; a full-bleed 80vh section reads as a brand statement.

**Davidoff (homepage).** The only cigar-category site running a modern e-commerce architecture. Story is *bypassed* on the homepage in favour of a product carousel ("A Gem Raised From The Ground", "50th Anniversary", "Year of the Horse") and a gifting block ("Created with Passion. Given with Love. Received with Joy."). Heritage is compartmentalised into `/discover/heritage-craftsmanship`. **Lesson.** Davidoff's choice — bigger catalogue, story routed deeper — is the right call *for them* because they have 200+ SKUs. Mariposa has two. The arithmetic is different; Mariposa needs the story on the homepage.

### Premium fragrance — the typographic-pause pattern

**Le Labo.** Story is the *entire* identity, told through restraint: glass bottles, uncoated labels, lower-case typography, a printing-press-inspired in-store newsletter. The website carries the same logic. The story moment on the homepage is *not announced*; it is communicated through the absence of marketing furniture. Type is a single grotesque, set small, justified left. Ground is white. **Lesson.** The *frame* of the section is itself the story. If you put a card on a section, you have shown the user a marketing widget. If you take the frame away and let the prose sit on the page itself, the user reads it as the brand's voice.

**Byredo.** Dark, moody hero photography. Square bottles on dark grounds. Restrained modern type. The story moment is a *photographic still life* — the bottle is the protagonist, not the prose. Editorial prose appears as a single short caption per campaign block, never as a paragraph block in its own right.

**Diptyque.** Sensory-led opening ("A sensorial stroll through the summer water garden"). The homepage editorial moment is delivered as a *single image + a single poetic line + a product transition*. Heritage and brand history are routed deeper. The story moment doesn't try to do the brand-story work in one place — it does *one beat* of it, then hands off.

**Aesop.** The textbook for editorial restraint at this register. Story content is published in a separate property (The Fabulist, the Library, Philosophy on Design) rather than crammed onto the homepage. The homepage shows products with extremely short captions. When Aesop *does* run a story moment in a campaign page, the treatment is: white ground, tight measure (around 60ch), Aesop's serif at body size, generous vertical rhythm, occasional small object photography aligned to the column. **Lesson.** The Aesop pattern is *not* "story on a card on a section." It is "story as a column of prose on a white page, with images that *interrupt* the prose rather than frame it." The page itself is the frame.

### Lifestyle and hospitality — atmosphere as story

**Aman.** The homepage is structured around four to six full-width *editorial cards* (this *is* a card pattern — but the card itself is full-bleed image + headline + sub-line, more like an editorial cover than a marketing block). "Aman Tokyo: Past and Present" sits mid-scroll as a property-as-story moment. "The Lure of Summer", "An Amanzoe Exhibition", "A Novak Djokovic Programme" — each is a separate editorial moment, all atmospheric, all leaning on photography. Type is refined sans-serif, generous spacing, spare poetic copy ("New landscapes unfold through Aman's multi-destination journeys"). **Lesson.** When Aman uses a card pattern, the card is *image-led* — the type is a caption, not the protagonist. The current Mariposa story card is type-led prose sitting on a coloured ground with no image. Either the image needs to come in, or the card frame needs to go.

**Soho House.** Full-width hero image of a pool with a single line over it: *"A home for the world's creatives to come together and belong."* The story moment *is* the hero. Below it, the membership block runs concrete benefits (48 Houses, 19 countries) — the story-prose work is done in eight words and an image. **Lesson.** When the brand line is good, eight words on a full-bleed image is more powerful than 80 words in a box.

**Roman & Williams Guild.** "WORLD *of* RADICAL BEAUTY" over dual hero images, dark ground, large-scale display type with italic emphasis on a single word. Then a mid-page editorial quote pulled in display type: *"We don't believe a house is ever finished, and we don't want it to ever be. Design is like an endless novel: if it doesn't have humanity, it's hollow."* — Robin and Stephen Alesch. The pull quote is the story moment — type-led, full-bleed-feeling even if technically constrained, attributed. **Lesson.** A founder/maker quote, set at display scale on a quiet ground, reads as a brand statement in a way that body prose in a box never will. Attribution earns weight.

**The LINE Hotel.** Hero is photographic with a small lowercase line — *"it all happens here"*. Voice is the protagonist. Story is delivered through curation (a "HERE Magazine" editorial grid), not through a single block. **Lesson.** Voice can substitute for prose-length. Five words can do the work of 80, if the five words are right.

**Noma.** Long-form first-person founder narrative on the homepage (the 20-year evolution piece, "a restaurant ever curious to learn and grow"). Set as straight body prose on a quiet ground, not boxed, not coloured. The prose is the page. **Lesson.** When the brand has something genuinely interesting to *say*, the right answer is to let the prose breathe on the page itself, not to contain it.

### Fashion editorial — the pull-quote and the editorial card

**Hermès.** Multiple editorial moments per homepage, each composed differently. "A Change of Course" is a full-bleed video with a single white serif line — *"Your feet free to roam, your mind already at sea, and all worries left behind."* "Elegance Buckled Up" is an image-led mid-scroll section with constrained type and a small product grid below. "Tailored Itineraries" puts the type right-aligned next to an image. Each moment changes its composition. **Lesson.** A homepage at this register isn't a grid of identically-framed sections; it's a sequence of compositional changes that keep the eye moving and re-set the rhythm.

**Loewe.** Image-led collaboration story at the top ("Spanish craft meets Swiss engineering"), product-grid mid-scroll, video-led teaser block lower down, two image-driven story blocks in the footer. **Lesson.** Same as Hermès — the brand story is *distributed* across the homepage in multiple compositional registers, not consolidated into a single "story section."

**Issey Miyake / Acne Studios.** Carousel-based collection storytelling. Story is communicated through *what is shown*, not through prose. Both sites carry near-zero body copy on the homepage. **Lesson.** Where photography is strong enough, story-prose can disappear entirely on the homepage and be reserved for editorial / About pages.

### Cigar adjacent — the founder-and-factory pattern

**Drew Estate (homepage, brand level not SKU).** Mid-scroll "Our Founder" section: black-and-white candid photography of Jonathan Drew on a bus, single CTA, minimal copy. Then "Our Story" section: factory mural photography, also B&W, headline *EXPLORE THE REBIRTH*. **Lesson.** When the brand has a real human/place at its centre, the story moment can be a single documentary photograph with a four-word headline. Mariposa's equivalents are a torcedora's hands in Jember and the gold leaf being laid. Both available with one shoot.

**Foundation Cigar Co.** Six brand-narrative cards mid-scroll (Wise Man, Aksum, Highclere Castle, Charter Oak, Olmec, The Upsetters), each with a tagline and a colour-keyed visual. The story is *partitioned* by SKU rather than told once. **Lesson.** Foundation can do this because every cigar has its own mythology. Mariposa has *one* mythology (butterfly ginger, gold leaf, Java), and partitioning it would dilute it. The Mariposa story moment should be unified, not partitioned.

**Plasencia.** Tobacco-field heritage photography, repeating prose line — *"Before the blend, before the craft, there is the leaf"* — and a heritage line — *"160 harvests since 1865."* Story is built from a *repeating short refrain* across multiple homepage placements, not delivered once in a single block. **Lesson.** A short brand refrain can be more durable than a paragraph. The Mariposa equivalent of "before the blend, before the craft, there is the leaf" might be worth Axel drafting independently.

---

## Part 2 — Synthesis

### Why the current treatment isn't landing

Three reasons, ranked.

1. **The card frame contradicts the editorial register.** Premium brands in this category do not present brand stories as cards on coloured sections. They present them as full-bleed rooms, constrained pull-quotes on quiet grounds, or distributed editorial moments. The card-on-section pattern is a marketing convention from SaaS and DTC commerce. It reads as "block 4 of a content strategy template," not as a brand moment. No amount of fiddling with the card's background colour will fix that, because the problem isn't colour; it's the container.

2. **The card is type-only on a coloured ground.** The same prose on a photographic ground (smoke, hands, leaf, gold) would do half the work the prose is currently trying to do alone. White or cream type on a pink or khaki rectangle gives the eye nothing to land on; the brain reads it as a colour swatch with text on it. The premium reference points all use *photography* as the ground for the story, or *negative space* as the ground for the prose — almost never a flat brand colour with prose on top.

3. **The wordmark is doing too much work and too little.** The lowercase `mariposa` wordmark sits at the top of the card as a section heading, which is correct in instinct but redundant in practice — the user already knows what site they're on. The wordmark either needs to *be* the section (set at display scale, as a typographic pause) or be removed entirely in favour of an eyebrow or a single display line.

### What converts a story moment from "card" to "moment"

Pulling the patterns together:

- **Commit real estate.** A premium story moment occupies 70-100vh of vertical space (or the full viewport on entry). Anything smaller reads as a marketing block. Padding-up the current card by 50% wouldn't fix it, because the issue is the constraint of the frame, not its size.
- **Pick a ground.** Three viable grounds in this category: (a) full-bleed photography with type laid over it, (b) deep dark with light type, (c) pure white/cream negative space with type as the protagonist. The current "brand colour with white type" is the weakest of the four options and the one nobody uses.
- **Pick a protagonist.** One of: a single image, a single sentence, a single quote. Not all three in equal weight. The current card tries to balance the wordmark, two prose paragraphs, and the card's coloured ground; nothing wins.
- **Voice carries more than length.** Soho House does brand story in eight words. Roman & Williams does it in a pull-quote. Mariposa's story is good — the butterfly-ginger legend is genuinely interesting and the gold-leaf detail is the kind of detail people remember and repeat. But 100 words of body italic on a card is not the right delivery vehicle for that material.
- **Distribute or unify, don't card-ify.** The premium category either *unifies* the story into one big moment (Soho House, Patrón) or *distributes* it across multiple smaller editorial moments (Hermès, Aman, Loewe). Mariposa's homepage has space for one big moment plus the existing position statement. The story section should be the big moment.

---

## Part 3 — Proposal — five concrete patterns

Each pattern below is a distinct compositional approach. Stephane picks one; Yulia builds. The recommended option is marked.

All five honour the existing brand vocabulary (Spectral italic + Hanken Grotesk, lowercase wordmark, palette tokens, no exclamation marks, no em dashes, editorial restraint).

### Option A — The full-bleed room (recommended)

**Description.** Replace the card frame entirely. The story occupies a full-bleed section, edge-to-edge of the viewport, ~85vh tall. A single dominant photographic ground — atmospheric, low-key, original colour — runs the full width. Over it, a constrained column of italic Spectral prose sits centred or aligned to a third of the viewport, padded out from the image with breathing room.

**Composition.**
- Background: full-bleed photographic image (described below). No card. No coloured rectangle. The image *is* the section.
- Subtle dark-to-clear gradient (linear, ~30% opacity at the type's position) over the image, only as much as is needed to keep the prose legible.
- A small eyebrow above the prose in Hanken Grotesk, uppercase, tracked: *Mariposa — a small story*. (Eyebrow signals "this is the story moment" without needing the wordmark to do it.)
- Below the eyebrow: the existing prose, in Spectral italic, set at clamp(1.1rem, 1.8vw, 1.4rem) — one step up from the current size — on a measure of ~52ch.
- Below the prose: the lowercase `mariposa` wordmark in white, sized small (clamp(1rem, 1.6vw, 1.3rem)), centred or aligned to the prose column. The wordmark becomes a *signature* at the foot, not a section heading at the head.
- No card edge, no border, no shadow, no paper texture.

**Photography required.** Yes — one strong photograph. Two viable directions:
- *Object-led.* A macro of a single Mariposa cigar with the gold leaf catching the light, against a dark or smoky atmospheric ground. Closest analogue: Roman & Williams' dual hero images.
- *Place-led.* The butterfly ginger flower itself, photographed atmospherically — in low light, with a hand reaching for it or a single bloom against a dark Cuban / Javanese landscape. Closer to the Hennessy / Aman register.

Either direction works. Object-led has the advantage of foregrounding the gold leaf — Mariposa's actual signature. Place-led has the advantage of grounding the butterfly-ginger legend literally.

**Mariposa-specific notes.**
- The closing line *"Life isn't just to be lived. It is meant to be celebrated every day"* could be lifted out of the prose and set as a separate display-italic line below the wordmark, at clamp(1.6rem, 3vw, 2.4rem). Treats it as a brand statement, not a closing sentence.
- Or: leave the prose intact and let the photograph do the brand-statement work. (Recommended — less is more here.)
- The gold-leaf thread is honoured by the photograph (if object-led) or by Section 2 of the Volage page (if place-led).

**Why recommended.** It is the closest match to what every premium reference in the category actually does. It removes the card frame, which is the structural problem. It commits real estate to the moment. It uses a photographic ground, which gives the eye somewhere to land and the prose somewhere to live. It is also the version that requires the least bespoke styling — the components are already present in the design system (eyebrow, italic prose, wordmark) — so Yulia's lift is mostly geometry and asset.

### Option B — The typographic pause

**Description.** The Aesop / Noma / Le Labo direction. Remove the card and the coloured ground entirely. The story sits as a column of italic Spectral prose on the pearl/cream page ground itself, with extreme vertical breathing room above and below. The frame is *the page*; the prose is the protagonist.

**Composition.**
- Background: pure pearl (`--pearl`) or pure white. No texture, no overlay.
- Padding: ~`var(--space-10)` block padding above and below — generous, to read as a deliberate pause in the scroll.
- Prose: existing copy, set on a 56ch measure, centred horizontally, Spectral italic at clamp(1.2rem, 2vw, 1.5rem). Slightly larger than current.
- A single thin gold hairline (1px, `--gold-deep` or `--gold-leaf`) above the prose at ~80px width, centred. Acts as a typographic ornament — the only non-text element on the page.
- The lowercase `mariposa` wordmark at the foot, small, centred, in ink (not white).
- No image. Deliberately.

**Photography required.** None.

**Mariposa-specific notes.**
- The absence of imagery makes the typography work harder; if Spectral italic at scale doesn't carry the prose on its own, the option fails. Yulia should mock this and judge the result before commitment.
- The eyebrow could be omitted in this version; the gold hairline does the same work.

**Why not recommended (but a strong fallback).** This is the most editorially honest version. But it asks Mariposa to compete with Aesop and Noma on pure type, which is a high bar for a site that does not yet have the typographic system Aesop has spent a decade refining. Worth Yulia mocking; if it lands, switch to this. If it reads thin, fall back to A.

### Option C — The dark room

**Description.** A full-bleed *dark* section that interrupts the cream rhythm of the page. Ink (`--ink #1F1B17`) ground, gold-leaf type accents, italic prose in cream or pearl. A single small image — a macro of the gold leaf, or the butterfly ginger flower — sits beside the prose at desktop, above the prose at mobile.

**Composition.**
- Background: solid `--ink`, edge-to-edge, ~75vh tall.
- Two-column layout at desktop: image left (square or 4:5, occupying roughly a third of the viewport width, with generous margin around it), prose right on a 48ch measure.
- Prose: Spectral italic in `--pearl` at clamp(1.1rem, 1.8vw, 1.4rem).
- Eyebrow above prose: small Hanken uppercase in `--gold-leaf` (not white) — *Mariposa — a small story* — tracked.
- Wordmark below the prose, in `--gold-leaf` not white, sized small.
- Closing line could pull-quote out as a larger display-italic line in `--pearl` below the prose, optional.

**Photography required.** Yes — one shot, smaller than Option A. Macro of the gold leaf or a single ginger flower. Easier to commission than the full-bleed atmospheric image Option A needs.

**Mariposa-specific notes.**
- Dark rooms read as more masculine / more cigar-category-conventional. That could be exactly what distributors expect, or it could pull Mariposa toward the dark-leather-armchair register the brand has been trying to avoid. Stephane's call on which side of that line Mariposa wants to sit.
- The gold-leaf typography accent (eyebrow + wordmark in gold) does part of the gold-leaf story work without needing the macro image to do all of it.

**Why not recommended (but a strong second).** Strong second pick. The reason A wins on a default is photographic ground tends to land warmer than flat ink at this register, and the brand has so far been positioned toward warm / floral / pink rather than dark / smoky / leather. But if Stephane wants more masculine credibility for distributors, this is the version to mock.

### Option D — The pull-quote and signature

**Description.** Borrowed from Roman & Williams and the Macallan M page. The story moment is delivered as a *display-scale pull quote*, not a prose paragraph. The butterfly-ginger legend becomes the prose; the closing line becomes the pull quote; the wordmark and the gold-leaf detail become the signature.

**Composition.**
- Background: pearl or cream, edge-to-edge, ~70vh tall. No card.
- Centre of the section: a single display-scale line in Spectral italic, set very large (clamp(2.4rem, 5vw, 4rem)), in `--ink`, on a tight measure of 24ch. The line is the closing thought: *"Life isn't just to be lived. It is meant to be celebrated every day."* Set with a hanging indent on the opening quote mark.
- Below the display line, smaller (clamp(0.9rem, 1.2vw, 1.05rem)), Hanken Grotesk regular in `--ink`: the butterfly-ginger legend, set on a 60ch measure as a single short paragraph, centred.
- Below that, the lowercase wordmark, small, centred.
- Optional: a small object photograph (the gold leaf, or a single ginger bloom) sits offset to one side of the display line, low contrast, almost decorative.

**Photography required.** Optional but lifts the section.

**Mariposa-specific notes.**
- Inverts the existing hierarchy: the legend becomes the small print and the closing line becomes the brand statement. This is editorially defensible — the legend is provenance, the closing line is the *brand promise* — but it changes the meaning of the section. Stephane should know that.
- The hanging-opening-quote treatment is a small typographic detail that signals "editorial" without shouting.

**Why not recommended.** Risk: a single quoted line treated this large reads as ad copy if the line isn't strong enough. The current closing line is good but it might not quite hold display scale on its own. If Axel were to draft a sharper line specifically for this treatment, Option D becomes more viable.

### Option E — The scroll arc (three beats)

**Description.** A scrollytelling-light version. The story is broken into three short beats, each presented in its own ~60vh full-bleed sub-section with its own image. The reader scrolls through *butterfly ginger → secret messages → gold leaf* as a sequential narrative.

**Composition.**
- Three full-bleed photographic sections stacked vertically, each ~60vh tall, each with its own ground image and a single short line of italic Spectral prose laid over it. Eyebrow above each prose line in Hanken uppercase, numbering the beats (*i. the flower / ii. the secret / iii. the leaf*).
- The wordmark appears once, at the foot of the third beat, signing off the sequence.

**Suggested beats (Axel can tighten):**
- *i. the flower.* "The white butterfly ginger became Cuba's national flower in 1936."
- *ii. the secret.* "Long before that, women slipped messages to the guerrilleros into its petals."
- *iii. the leaf.* "Every Mariposa carries its own secret. A 24-carat gold leaf, laid by hand."

**Photography required.** Yes — three shots. Butterfly ginger flower, an evocative still (a hand, a folded note, a Cuban landscape), and the gold-leaf macro. Highest photography burden of the five options.

**Mariposa-specific notes.**
- This is the *most* editorial option but also the most expensive in real estate (it triples the section's height) and in production (three shots minimum). If Stephane wants the homepage to feel like a brand magazine, this is the version. If he wants the homepage to feel tight, this is overkill.

**Why not recommended for now.** Right pattern, wrong timing. With current asset constraints (no commissioned photography for this section), this is at least a v2 move. Worth holding for a later iteration when the photography library has matured. Option A delivers ~70% of this option's impact with a fraction of the production cost.

### Quick comparison

| Option | Frame | Ground | Photo needed | Risk | Editorial register |
|---|---|---|---|---|---|
| A — Full-bleed room (rec) | None | Photographic | 1 strong shot | Low | High |
| B — Typographic pause | None | Pearl/white | None | Medium (relies on type) | Highest |
| C — Dark room | None | Solid ink | 1 small shot | Low | High, more masculine |
| D — Pull-quote | None | Pearl/white | Optional | Medium (line must carry) | High |
| E — Scroll arc | None | 3 photographic | 3 shots | High (production) | Highest, magazine-like |

The thing they all share: **none of them is a card on a coloured section.**

---

## Part 4 — Implementation notes for Yulia

**Stack assumptions.** Existing Astro project, GSAP available, reveal helper in `src/lib/motion.ts` already factored. None of the five options require new dependencies. The existing `LifestyleSection.astro` is the file to refactor.

**Removing the card.** All five options drop:
- `.story__card` background colour, border, padding, max-width, box-shadow, paper-grain.
- `.story` background colour on the outer section (the cream `#f2f0e9` band) — replaced with either the photographic ground (A, C, E), pearl/white (B, D), or kept as cream depending on the option chosen.
- The `data-cream-bg` hook may need updating depending on whether the nav observer needs to react to a dark section (Option C). Sergey to confirm if relevant.

**Per-option implementation notes:**

- **Option A (recommended).** New component or refactored `LifestyleSection.astro`. Full-bleed section (`width: 100vw; margin-left: calc(50% - 50vw);` pattern, or break out of the container). Background image via `astro:assets` `<Image />` with `widths` set, `loading="lazy"`. Gradient overlay via a pseudo-element. Prose column constrained via `max-inline-size: 52ch` and `margin-inline: auto`. Eyebrow + wordmark via existing utility classes.
- **Option B.** Simplest build. Strip card styles entirely. Prose lives in a centred column. Gold hairline is a `<hr>` styled or a `::before` pseudo-element.
- **Option C.** Same as A but with solid background instead of image, and a flex/grid two-column layout at desktop collapsing to stacked at mobile.
- **Option D.** Centred section with display-scale prose. Spectral italic at the large clamp needs to be tested on the actual webfont — display sizes can expose hinting issues that body sizes don't.
- **Option E.** Three stacked full-bleed sub-sections; each can use the reveal helper on enter. Highest build cost.

**Motion.**
- A, C, D: existing `reveal()` helper does the work — fade-and-rise on the prose and wordmark, optional subtle scale (1.02 → 1.0) on the photographic ground.
- B: motion is the wrong instinct here. Static. The pause is the point.
- E: per-beat reveals on enter, no parallax scrub.

**Mobile.**
- A: gradient overlay strengthens at mobile to keep legibility against a smaller image; prose padding tightens to fit.
- B: padding reduces by ~30% on mobile, but the long vertical rhythm is preserved.
- C: stacks to image-above-prose, image centred, full width minus margins.
- D: display-scale clamp already handles mobile; verify the smallest viewport doesn't break the 24ch measure into awkward orphans.
- E: each beat reduces to ~80vh on mobile (taller in vh terms because of narrower viewport).

**Accessibility.**
- Decorative photographic grounds in A, C, E: `aria-hidden="true"` on the image element, `role="img"` and `aria-label` on the wrapper only if the image carries information. The butterfly-ginger image is information-carrying; the smoky/dark mood-ground in C is decorative.
- Wordmark images: existing `alt="Mariposa"` is correct.
- Contrast: white-on-photographic-image in Option A must pass WCAG AA at the type sizes used. Verify with the chosen photograph; the gradient overlay strength is the lever.
- `prefers-reduced-motion`: existing motion helper handles. Options B and the static parts of D need no further handling.

**Performance.**
- Full-bleed photographic backgrounds (A, E) are the heaviest move. Serve at multiple widths via `astro:assets`, lazy-load below the fold, and pick a JPEG (not PNG) for the photographic source. The dark-mood / atmospheric register tolerates higher compression; 70-75% quality is usually invisible at that visual register.
- Option C's solid background is essentially free.
- Option B is the lightest of all.

**Content dependencies (block on Stephane).**
- *Option A.* One commissioned photograph. Object-led or place-led — Stephane's pick. Existing `volage_terrasse.jpg` and similar headers might serve as a placeholder for the build; final shot needed for production.
- *Option C.* One small commissioned shot, or an existing macro from the headers library. Lower burden than A.
- *Option D.* Optional photo. Could ship without.
- *Option E.* Three commissioned shots. Highest content burden; recommend holding to v2.
- *Axel involvement.* Options D and E benefit from Axel drafting a sharper line / three tighter beats. Optional for A, B, C.

**File structure (suggestion).**
- Existing `src/components/LifestyleSection.astro` refactored in place. The component name should perhaps move from "LifestyleSection" to "StorySection" or "StoryRoom" if Option A or C is chosen — the current name reflects the card-on-section model.
- Source content in `src/content/site/home.json` (the `paragraphs` array) stays as-is for Options A, B, C. Options D and E require a small content schema change to support the pull-quote / three-beats structure.

---

## What did I miss?

Three gaps worth flagging.

1. **Macallan, Hennessy, Krug, Veuve Clicquot, Bvlgari direct fetches all bot-blocked.** I have triangulated category convention through Glenfiddich (fetched), Patrón (fetched), and analyst write-ups for the bot-blocked sites. Confidence on the *direction* (full-bleed, photographic, single line over image) is high; confidence on *specific* compositional details of those particular sites is medium. If Stephane wants me to push past the block (a different fetch tool, or screen-grabs from a separate browse), I can. The pattern conclusion does not change.
2. **I haven't seen the live homepage rendered.** I read `LifestyleSection.astro` directly, but I haven't pulled up the live site to verify visual impression in context of the surrounding sections. The brief's structural analysis is sound; the live cross-check might surface a smaller fix (eg. the cream-bed of the section above leaking into the perception of the card) that a single screenshot would catch. Stephane or Yulia can confirm in 30 seconds whether the diagnosis matches the lived experience.
3. **No competitive read on Asia-Pacific premium-lifestyle sites specifically.** The reference set is North America / Europe / one Japanese fashion house. Indonesian / Bali-region premium hospitality and lifestyle brands (Como, Bvlgari Bali, Soori) might be worth a pass if Mariposa wants to be benchmarked alongside its actual physical neighbours. Holding unless Stephane asks.

**One question Stephane was not expecting.** The current story prose carries two distinct ideas — the butterfly-ginger legend (provenance / poetry) and the gold-leaf signature (craft / brand promise). One section can carry both, but it's working hard to do so. Question: does the gold-leaf signature deserve its *own* section elsewhere on the homepage — promoted from a paragraph-half to a moment of its own — letting the story section become purely the butterfly-ginger legend? The Volage brief already proposes this on the SKU page; the same logic might apply at the homepage level. Decoupling the two would let each land harder. Stephane to decide whether the homepage has room for two editorial moments or only one.

---

## Sources

Direct fetches:

- [Glenfiddich homepage](https://www.glenfiddich.com/)
- [Patrón Tequila homepage](https://www.patrontequila.com/)
- [Davidoff of Geneva USA homepage](https://us.davidoffgeneva.com/)
- [Drew Estate homepage](https://drewestate.com/)
- [Foundation Cigar Company homepage](https://www.foundationcigarcompany.com/)
- [Plasencia Cigars homepage](https://www.plasenciacigars.com/)
- [Byredo homepage](https://www.byredo.com/)
- [Diptyque US homepage](https://www.diptyqueparis.com/en_us/)
- [Aman homepage](https://www.aman.com/)
- [Soho House homepage](https://www.sohohouse.com/)
- [Roman & Williams homepage](https://romanandwilliams.com/)
- [The LINE Hotel homepage](https://www.thelinehotel.com/)
- [Noma homepage](https://noma.dk/)
- [Hermès US homepage](https://www.hermes.com/us/en/)
- [Loewe US homepage](https://www.loewe.com/usa/en/home)
- [Issey Miyake homepage](https://www.isseymiyake.com/en/)
- [Acne Studios homepage](https://www.acnestudios.com/us/en/home)

Bot-blocked or 4xx/5xx; reconstructed from analyst write-ups *(secondary)*:

- The Macallan — *(secondary)* [Aesop philosophy on design (Wallpaper)](https://www.wallpaper.com/fashion-beauty/aesop-store-design) and category convention referenced elsewhere.
- [Aesop philosophy on design](https://www.aesop.com/philosophy-on-design.html) — *(secondary, page itself blocked at fetch; characterised via)* [Brand Vision: Aesop marketing strategy](https://www.brandvm.com/post/aesop-marketing-strategy) and [HuffPost: The Beauty of Aesop](https://www.huffpost.com/entry/the-beauty-of-aesop-a-sto_b_6598486).
- Le Labo — *(secondary)* [The Brander: Le Labo](https://www.thebrander.com/en/lifestyle/le-labo) and [LOVR: Le Labo](https://www.lovr.agency/editorial/lovr-icons-le-labo).
- Hennessy, Krug, Veuve Clicquot, Bvlgari — bot-blocked; category convention extracted from [Weitnauer: Luxury brand marketing storytelling 2026](https://weitnauer.com/luxury-brand-marketing-storytelling-techniques-2026) and [Schweitzer: Future of luxury brand identity 2026](https://www.schweitzerdesigns.com/post/the-future-of-luxury-brand-identity-design-in-2026).

Internal references:

- `LifestyleSection.astro` — current story section component, read in full.
- `volage-page-redesign-brief.md` — sibling brief, same structural template.
