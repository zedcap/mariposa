import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Mariposa content collections (Astro 6 — glob loader API).
   --------------------------------------------------------------
   Copy lives here as typed JSON, not hard-coded in components.
   Source: website-copy.md (Axel). Spec lists and tasting notes
   are DATA — carried verbatim from the print pagers.

   `site`     — singleton data files (home, age gate, footer).
   `products` — one entry per SKU (volage, caprices). */

const products = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    order: z.number(),                 // ordering in nav + product slider
    edition: z.string().optional(),    // e.g. "1st Edition"
    tag: z.string().optional(),        // e.g. "Q4 2026"
    vitola: z.string(),
    format: z.string(),                // e.g. "150 mm · 52 ring gauge"
    tagline: z.string(),
    homeLede: z.string(),              // home product-section frame
    narrative: z.array(z.string()),    // product page narrative paragraphs
    specs: z.array(z.object({ label: z.string(), value: z.string() })),
    tasting: z.array(z.object({ stage: z.string(), note: z.string() })),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/site' }),
  schema: z.object({}).passthrough(),
});

export const collections = { products, site };
