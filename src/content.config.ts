import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Mariposa content collections (Astro 6 — glob loader API).
   --------------------------------------------------------------
   Copy lives here as typed JSON, not hard-coded in components.
   Source: website-copy.md (Axel). Spec lists and tasting notes
   are DATA — carried verbatim from the print pagers.

   `site`     — singleton data files (home, age gate, footer).
   `products` — one entry per SKU (volage, caprice). */

const products = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    order: z.number(),                 // ordering in nav + product slider
    edition: z.string().optional(),    // e.g. "1st Edition"
    tag: z.string().optional(),        // e.g. "Q4 2026"
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
    /* signature — the gold-leaf differentiator block (section 2 of
       the SKU page). Lede is the italic display line; paragraph is
       the supporting prose under it. */
    signature: z
      .object({
        lede: z.string(),
        paragraph: z.string(),
        placeholderCaption: z.string(),  // brief for the macro shot
      })
      .optional(),
    /* origin — the three-beat provenance arc (section 3). Each beat
       carries a label, a one-line note, and a placeholder caption
       describing the photo the section needs. */
    origin: z
      .array(z.object({
        label: z.string(),
        copy: z.string(),
        placeholderCaption: z.string(),
      }))
      .optional(),
    /* narrative — two short paragraphs read above the spec strip
       (section 4). Was previously the dominant prose block before the
       rebuild; now condensed. */
    narrative: z.array(z.string()).optional(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    /* condensedSpecKeys — labels (exact match) of the six rows the
       page surfaces in the strip; the other six fold behind the
       full-specs disclosure. Optional so a SKU that lists six total
       (or fewer) needs no split. */
    condensedSpecKeys: z.array(z.string()).optional(),
    tasting: z.array(z.object({ stage: z.string(), note: z.string() })).optional(),
    /* packaging — up to three gallery slots for section 6. Each slot
       is either a placeholder caption or, later, an image-slug
       resolved client-side. Image type kept as string so JSON stays
       portable; the page renders placeholders when no image is
       attached. */
    packaging: z
      .array(z.object({
        image: z.string().optional(),
        placeholderCaption: z.string().optional(),
      }))
      .optional(),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/site' }),
  schema: z.object({}).passthrough(),
});

export const collections = { products, site };
