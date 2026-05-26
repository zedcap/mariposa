// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Mariposa marketing site. Static output — deployed to GitHub Pages.
//
// PRODUCTION: custom domain mariposacigars.com is live (CNAME in public/).
//   `base: '/'` because the apex serves from root, not /mariposa/.
//
// Sitemap auto-generates from all routes off the `site` URL.
// `/refusal/` is already noindex via <meta robots> in the page; the
// sitemap integration does NOT inspect page HTML, so we exclude it
// explicitly via the `filter` option to keep noindex pages out of the map.
//
// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://mariposacigars.com',
  base: '/',
  image: {
    // sharp service — AVIF/WebP responsive output for src/assets imagery
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/refusal'),
    }),
  ],
});
