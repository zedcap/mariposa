// @ts-check
import { defineConfig } from 'astro/config';

// Mariposa marketing site. Static output — deployed to GitHub Pages.
//
// PRODUCTION: custom domain mariposacigars.com is live (CNAME in public/).
//   `base: '/'` because the apex serves from root, not /mariposa/.
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
});
