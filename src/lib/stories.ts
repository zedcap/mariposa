/* Mariposa Stories — content data.
   ------------------------------------------------------------------
   The four Stories posts as typed data, consumed by the /stories/
   index and the /stories/[slug] post pages. Copy is carried verbatim
   from the approved review files (Yulia, 2026-06). Images are imported
   so Astro's sharp pipeline emits responsive AVIF/WebP from the PNG
   masters in src/assets/.

   Order below is the default (no-JS) INDEX order: the first entry is the
   lead feature, the remaining three are the secondary row. The index
   shuffles this client-side on load. `pillar` drives the per-post kicker;
   `department` drives the index dept label. */

import type { ImageMetadata } from 'astro';

import besukiLeafBw from '../assets/besuki-leaf-bw.png';
import wrapperFieldGreen from '../assets/wrapper-field-green.png';
import gardenRoomGloriaBanyan from '../assets/garden-room-gloria-banyan.jpg';
import hourBeforeTheRain from '../assets/hour-before-the-rain.jpg';

export interface Story {
  slug: string;
  /** Kicker pillar on the post masthead, e.g. "The Category". */
  pillar: string;
  /** Department label on the index card, e.g. "Terroir". */
  department: string;
  headline: string;
  standfirst: string;
  hero: ImageMetadata;
  heroAlt: string;
  heroCaption: string;
  /** Body paragraphs; the first renders with the gold drop cap. */
  body: string[];
}

export const stories: Story[] = [
  {
    slug: 'half-of-indonesias-wrapper',
    pillar: 'The Category',
    department: 'Terroir',
    headline: 'Half of Indonesia’s Wrapper',
    standfirst:
      'One grade, one corner of East Java, behind most of what a major wrapper origin sends into the world.',
    hero: wrapperFieldGreen,
    heroAlt:
      'Shade cloth stretched over a tobacco field, raking light through the weave, a single sunlit leaf beneath held in green-amber against a black-and-white field.',
    heroCaption: 'Tobacco grown under shade cloth, Tembakau Bawah Naungan, East Java.',
    body: [
      'Indonesia is one of the handful of places the world turns to for cigar wrapper, named in the same breath as Ecuador, Connecticut, Cameroon, and Brazil. Within that, one grade does most of the work.',
      'Besuki TBN, short for Tembakau Bawah Naungan, tobacco grown under shade, is a wrapper leaf developed in East Java across the 1970s and 1980s. Stretching cloth over the field softens the sun, and the leaf grows thinner, finer, and more elastic, the qualities a wrapper is judged on.',
      'Besuki TBN now accounts for more than half of Indonesia’s wrapper-leaf production. One grade, one corner of East Java, behind most of what a major wrapper origin sends out into the world.',
    ],
  },
  {
    slug: 'the-garden-room',
    pillar: 'Rooms',
    department: 'The Rooms',
    headline: 'The Garden Room',
    standfirst:
      'A terrace bar above a heritage garden the city has almost finished building over.',
    hero: gardenRoomGloriaBanyan,
    heroAlt:
      'Gloria seen from behind, a monochrome figure with a cigar, looking out over a colour banyan heritage garden.',
    heroCaption: 'A Mariposa would sit easily on the terrace as the afternoon cools, Central Jakarta.',
    body: [
      'On the lobby floor of the Hotel Borobudur in Central Jakarta, past the marble, a wine and cigar room keeps older hours than the city around it. The Churchill has billiards, chess, and a terrace that opens onto the hotel’s tropical garden, and for years it has been a quiet haunt of diplomats.',
      'But the garden is the rarer thing. The hotel opened in March 1974, only the second of its kind in Indonesia, laid across seven hectares. A 2.3-hectare garden survives. Central Jakarta has mostly been towered over since, its open ground sold by the square metre, and a heritage garden of that size is now a hard thing to find a seat beside.',
      'So take the terrace, not a table inside. A slow cigar belongs to a room with this kind of patience, and a Mariposa would sit easily there as the afternoon cools. Come late, when the garden does the work and the bar is at its quietest.',
    ],
  },
  {
    slug: 'the-volcanic-origin',
    pillar: 'Terroir',
    department: 'Terroir',
    headline: 'The Volcanic Origin Behind Indonesia’s Wrapper Leaf',
    standfirst:
      'More than half of Indonesia’s wrapper leaf grows in one regency, in the shadow of a volcano.',
    hero: besukiLeafBw,
    heroAlt:
      'A single Besuki tobacco leaf held up to the light and backlit, its green-amber the only colour against a neutral black-and-white surround.',
    heroCaption: 'Besuki TBN, the tobacco-under-shade leaf, at the foot of the Argopuro massif, East Java.',
    body: [
      'Most of the world’s cigars are judged by their wrapper, and the wrapper is judged by the soil it grew in. A great deal of that soil sits in one regency in East Java: Jember, on ground laid down by the Argopuro massif.',
      'For decades that leaf travelled quietly into European cabinets. The houses that built reputations on it, Agio, Swedish Match, the former Seita, the Burger Group, sourced from these fields long before most smokers could place them on a map.',
      'What the volcanic ground gives is a wrapper of unusual elasticity and an even, mild combustion, the two qualities a maker prizes most in the leaf that holds a cigar together.',
      'Mariposa is grown in this soil, at the foot of Argopuro, from Havana-seed stock.',
      'What makes the leaf was always in the ground here.',
    ],
  },
  {
    slug: 'before-the-rain',
    pillar: 'The Hour',
    department: 'The Hour',
    headline: 'Before the Rain',
    standfirst: 'An hour with the Volage in a Jember field as the rain comes in.',
    hero: hourBeforeTheRain,
    heroAlt:
      'A lit cigar held in a hand over a monochrome tobacco field at dusk, the cigar in colour with its red ember and a crumpled gold-leaf mark.',
    heroCaption: 'A Volage burning down at dusk, a Jember field behind, the gold leaf the one warm thing on it.',
    body: [
      'The cigar takes a moment to catch, the way the slow ones do. She turns it in the flame rather than draws on it, and the foot comes round to an even line before the first proper pull. Earthen, that pull, and unhurried, a sweetness under it that is not quite cocoa and will not sit still long enough to be named.',
      'This is the volcanic Jember leaf, Havana seed in old black soil. The first third is all dark minerality, the ground itself, then a turn toward something warmer as the burn climbs.',
      'A thread of gold runs the length of the wrapper where a paper band would be. None here. A single leaf of 24-carat, laid on by hand that morning, the one warm gleam on a cigar otherwise the colour of the earth that made it.',
      'The middle deepens and rounds. Two years of fermentation, sorted leaf by leaf the old way, then a year of rest, and it tells now in the smoke, the edges gone off it, a long even burn that asks nothing of her. The ash holds. A clean inch, pale grey, then another, the sign of a leaf grown slow and cured right.',
      'Behind her the rain starts, a drop, then the whole field at once. She does not move. The last third comes in close and dark, the volcano in the soil right at the end of it, and she lets it burn down while the rain comes on the place it came from.',
    ],
  },
];

/** Look up a single story by slug. */
export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

/** The lead-card teaser for any story — its first body paragraph only. */
export function teaserOf(story: Story): string {
  return story.body[0];
}
