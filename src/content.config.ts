import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Mariposa content collections (Astro 6 — glob loader API).
   --------------------------------------------------------------
   Copy lives here as typed JSON, not hard-coded in components.
   Source: website-copy.md (Axel). Spec lists and tasting notes
   are DATA — carried verbatim from the print pagers.

   `site`     — singleton data files (home, age gate, footer).
   `products` — one entry per SKU (volage, caprice).

   Schema pruned 2026-05-25 — `edition`, `tag`, `signature`, `origin`,
   `condensedSpecKeys`, `packaging` removed alongside the matching
   JSON fields. Those blocks were carried from earlier page designs
   (SignatureBlock, OriginArc, the Presentation packaging gallery,
   the condensed/expanded spec split) that the rebuild dropped.
   Nothing in src/ reads them today; restore from git if a future
   page brings any of them back. */

const products = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    order: z.number(),                 // ordering in nav + product slider
    vitola: z.string(),
    format: z.string().optional(),     // e.g. "150 mm · 52 ring gauge" — required only for SKUs with a product page
    tagline: z.string(),
    homeLede: z.array(z.string()),     // home product-section frame; one entry per paragraph
    /* quickSpecs — optional inline two-column dl rendered under the
       home-slider lede. A presentation device for slider frames that
       want to surface a compact spec block alongside the copy (e.g.
       Volage 2). Each row is label/value; uppercase eyebrow label,
       Hanken regular value. Distinct from `specs` (the full
       product-page strip). */
    quickSpecs: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    /* narrative — two short paragraphs read above the spec strip
       (section 4). Was previously the dominant prose block before the
       rebuild; now condensed. */
    narrative: z.array(z.string()).optional(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    tasting: z.array(z.object({ stage: z.string(), note: z.string() })).optional(),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/site' }),
  schema: z.object({}).passthrough(),
});

export const collections = { products, site };
