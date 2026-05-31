# Mariposa website

Static Astro site for `https://mariposacigars.com/`.

**For the full handoff** — state, build, deploy, history, gotchas, custom-domain ops — read [`PROJECT.md`](./PROJECT.md).

**For brand and design conventions** — colour, type, spacing, components, voice, photography — read [`../mariposa-design-conventions.md`](../mariposa-design-conventions.md).

## Quick start

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

## Deploy

Push to `main`. GitHub Actions builds and publishes to the Pages environment automatically (typically 30-60s).

SSH push pattern from Mr. Claude:

```sh
GIT_SSH_COMMAND="ssh -i /Users/mrclaude/Claude/.git-repos/mariposa-deploy-key -o IdentitiesOnly=yes" \
  git push origin main
```

## Layout

```
src/
  pages/        One file per route
  components/   Shared .astro pieces (Header, Footer, AgeGate, HeroSlider, …)
  layouts/      BaseLayout — shared shell
  styles/       tokens.css + base.css
  content/      JSON content collections (Zod schemas in content.config.ts)
  assets/       Bundled imagery (Astro emits AVIF/WebP variants)
  lib/          motion.ts (GSAP engine), path.ts (withBase helper)
public/         Static-pass-through assets (favicon, OG share, CNAME, …)
_archive/       Historical research briefs — no build effect
```

Node ≥22.12.0.
