/* Mariposa motion engine.
   ------------------------------------------------------------------
   One shared client-side module. Every section imports its primitives
   from here so the site has a single, consistent motion vocabulary —
   the same way marigold.global runs all of its scroll choreography
   through one GSAP/ScrollTrigger setup.

   Technique borrowed from the Marigold theme:
   - scrub-tied timelines for elements that should move WITH the scroll
     (parallax depth, drift);
   - one-shot reveal timelines (toggleActions: play none none none)
     for content that enters once and stays;
   - masked slide-ins (translate from outside a clipping box, fade up)
     for headline words and editorial blocks.

   Easing is the design system's analogue spec — relaxed ease-out,
   400ms+, never a bounce. GSAP's `power2/power3.out` is the curve
   equivalent of the token `--ease-paper`.

   prefers-reduced-motion: everything degrades to an instant, fully
   visible final state. No animation, no scroll-tied transforms. */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* The site's analogue easing curves, GSAP-side. */
export const EASE_PAPER = 'power2.out';
export const EASE_DEEP = 'power3.out';
export const EASE_DRIFT = 'power1.inOut';

/* Shared reveal distances / durations — keep the whole site consistent. */
const RISE = 28; // px a revealed block travels up into place
const DUR = 0.9; // s — slow, analogue

/* When reduced motion is on, drop every animated element to its
   resting state immediately and skip all triggers. Sections call this
   and bail. */
export function settleReduced(targets: Element[] | NodeListOf<Element>) {
  gsap.set(targets, { clearProps: 'all', opacity: 1, y: 0, x: 0, scale: 1 });
}

/* ── reveal ─────────────────────────────────────────────────────────
   One-shot entrance. The element starts shifted down + transparent and
   settles into place the first time it scrolls into view. Optional
   stagger when several elements are passed (a list of children that
   should cascade in). This is the workhorse — used everywhere a block
   should "arrive" rather than just exist. */
export function reveal(
  targets: Element | Element[] | NodeListOf<Element>,
  opts: { y?: number; stagger?: number; duration?: number; delay?: number; start?: string } = {},
) {
  const els = toArray(targets);
  if (!els.length) return;
  if (REDUCED) {
    gsap.set(els, { opacity: 1, y: 0 });
    return;
  }
  gsap.set(els, { opacity: 0, y: opts.y ?? RISE });
  gsap.to(els, {
    opacity: 1,
    y: 0,
    duration: opts.duration ?? DUR,
    ease: EASE_DEEP,
    delay: opts.delay ?? 0,
    stagger: opts.stagger ?? 0,
    scrollTrigger: {
      trigger: els[0],
      start: opts.start ?? 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/* ── revealLines ────────────────────────────────────────────────────
   Marigold's masked-headline move. Each child sits inside a clipping
   box (the caller wraps lines in .motion-mask spans); the inner text
   slides up from below the mask and is revealed as it clears the top
   edge. Used for display headlines that should unveil line by line. */
export function revealLines(
  masks: Element[] | NodeListOf<Element>,
  opts: { start?: string; stagger?: number } = {},
) {
  const wraps = toArray(masks);
  if (!wraps.length) return;
  const inners = wraps
    .map((w) => w.querySelector<HTMLElement>('.motion-line'))
    .filter((x): x is HTMLElement => !!x);
  if (!inners.length) return;
  if (REDUCED) {
    gsap.set(inners, { yPercent: 0, opacity: 1 });
    return;
  }
  gsap.set(inners, { yPercent: 115, opacity: 1 });
  gsap.to(inners, {
    yPercent: 0,
    duration: 1.05,
    ease: EASE_DEEP,
    stagger: opts.stagger ?? 0.12,
    scrollTrigger: {
      trigger: wraps[0],
      start: opts.start ?? 'top 82%',
      toggleActions: 'play none none none',
    },
  });
}

/* ── slideIn ────────────────────────────────────────────────────────
   The text-animation move from Marigold: a word/phrase set inside a
   horizontal clipping mask slides in from the left or the right while
   fading up. data-direction on the element picks the side. */
export function slideIn(
  targets: Element[] | NodeListOf<Element>,
  opts: { start?: string; stagger?: number } = {},
) {
  const els = toArray(targets);
  if (!els.length) return;
  if (REDUCED) {
    gsap.set(els, { xPercent: 0, opacity: 1 });
    return;
  }
  els.forEach((el, i) => {
    const dir = (el as HTMLElement).dataset.direction === 'left' ? -1 : 1;
    gsap.set(el, { xPercent: 110 * dir, opacity: 0 });
    gsap.to(el, {
      xPercent: 0,
      opacity: 1,
      duration: 1,
      ease: EASE_DEEP,
      delay: (opts.stagger ?? 0) * i,
      scrollTrigger: {
        trigger: el,
        start: opts.start ?? 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

/* ── parallax ───────────────────────────────────────────────────────
   Scrub-tied vertical drift. The element moves slowly against the
   scroll while its section is in view — the Marigold title-break /
   hero-image depth move. `depth` is the travel in px across the whole
   pass; positive = element drifts down relative to the page (reads as
   "further back"). Subtle by default: the design system wants a wind,
   not a flap. */
export function parallax(
  target: Element | null,
  opts: { depth?: number; scope?: Element | null } = {},
) {
  if (!target || REDUCED) return;
  const depth = opts.depth ?? 60;
  gsap.fromTo(
    target,
    { y: -depth / 2 },
    {
      y: depth / 2,
      ease: 'none',
      scrollTrigger: {
        trigger: opts.scope ?? target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    },
  );
}

/* ── scaleScrub ─────────────────────────────────────────────────────
   Scrub-tied scale. A full-bleed image eases from slightly enlarged to
   true size as its section passes — the slow Marigold hero "settle".
   Gives a section a sense of being alive without any motion the eye
   can catch as a discrete event. */
export function scaleScrub(
  target: Element | null,
  opts: { from?: number; to?: number; scope?: Element | null } = {},
) {
  if (!target || REDUCED) return;
  gsap.fromTo(
    target,
    { scale: opts.from ?? 1.12 },
    {
      scale: opts.to ?? 1,
      ease: 'none',
      scrollTrigger: {
        trigger: opts.scope ?? target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    },
  );
}

/* ── pinReveal ──────────────────────────────────────────────────────
   A short scrub timeline tied to a trigger. The caller passes a build
   function that receives a paused timeline and the ScrollTrigger
   config is wired for them. Used for the bespoke product-section
   choreography where several things move together on one scrubbed
   pass. */
export function scrubTimeline(
  trigger: Element | null,
  build: (tl: gsap.core.Timeline) => void,
  opts: { start?: string; end?: string; scrub?: number | boolean } = {},
) {
  if (!trigger) return null;
  if (REDUCED) {
    // Build the timeline then jump it to the end so the final state shows.
    const tl = gsap.timeline({ paused: true });
    build(tl);
    tl.progress(1);
    return tl;
  }
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: opts.start ?? 'top bottom',
      end: opts.end ?? 'bottom top',
      scrub: opts.scrub ?? true,
    },
  });
  build(tl);
  return tl;
}

/* Recompute trigger positions once fonts and images have settled —
   late-loading webfonts shift layout and stale start/end points read
   wrong otherwise. */
export function refreshOnLoad() {
  window.addEventListener('load', () => ScrollTrigger.refresh());
  if ('fonts' in document) {
    (document as Document & { fonts: FontFaceSet }).fonts.ready.then(() =>
      ScrollTrigger.refresh(),
    );
  }
}

function toArray(x: Element | Element[] | NodeListOf<Element>): Element[] {
  if (x instanceof Element) return [x];
  return Array.from(x);
}

export { gsap, ScrollTrigger };
