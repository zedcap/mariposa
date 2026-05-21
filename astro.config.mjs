// @ts-check
import { defineConfig } from 'astro/config';

// Mariposa marketing site. Static output — deployed to GitHub Pages.
//
// STAGING (now): GitHub Pages project site at https://zedcap.github.io/mariposa/
//   `site` + `base` below must both be set so asset URLs, internal links and
//   <Image> outputs resolve under the /mariposa/ subpath.
//
// PRODUCTION (later): when mariposacigars.com is registered and attached as a
//   custom domain, revert to:
//       site: 'https://mariposacigars.com'
//       base: '/'   (or delete the `base` line entirely — '/' is the default)
//   A custom domain serves from root, so the subpath base must go.
//
// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://zedcap.github.io',
  base: '/mariposa',
  image: {
    // sharp service — AVIF/WebP responsive output for src/assets imagery
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
