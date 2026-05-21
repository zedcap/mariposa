/* Base-path helper.
   --------------------------------------------------------------------
   The site deploys to a GitHub Pages PROJECT site, served from a
   subpath: https://zedcap.github.io/mariposa/ . Astro's `base` config
   is set to `/mariposa`, so every internal link and asset URL must be
   prefixed with that base or it 404s on staging.

   Astro rewrites asset URLs it generates itself (<Image>, imported
   assets, its own <script>/<link> tags). It does NOT rewrite
   hand-written root-absolute hrefs in markup, nor url() references
   inside CSS. Those go through this helper.

   import.meta.env.BASE_URL mirrors the `base` config: `/mariposa` on
   staging, `/` once a custom domain is attached and `base` reverts to
   root. Astro does not guarantee a trailing slash, so withBase()
   normalises both sides itself rather than assuming one. */

// Strip any trailing slash so joining is deterministic. '/mariposa' or ''.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Prefix a root-relative path with the configured base.
 * `withBase('/volage')` -> `/mariposa/volage` on staging, `/volage` in prod.
 * In-page fragment links (`#range`) and external URLs are returned untouched.
 */
export function withBase(path: string): string {
  if (path.startsWith('#') || /^[a-z]+:/i.test(path)) return path;
  const rel = path.startsWith('/') ? path : `/${path}`;
  // BASE has no trailing slash; rel has a leading slash. One clean join.
  return `${BASE}${rel}`;
}
