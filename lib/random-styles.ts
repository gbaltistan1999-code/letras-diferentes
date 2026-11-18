/**
 * Endless "random" fancy text: each combination mixes alphabets letter by
 * letter and adds emoji or symbol decorations. It's deterministic: the same
 * text + seed always gives the same result, so the first batch renders
 * identically on the server and in the browser (no hydration flicker).
 */
import { MAPS, mapCluster, toClusters } from "@/lib/fonts";
import type { TransformOptions } from "@/types";

/** Alphabets mixed per letter. `null` keeps the letter as typed. */
const ALPHABETS: (Record<string, string> | null)[] = [
  MAPS.bold, MAPS.italic, MAPS.boldItalic, MAPS.script, MAPS.boldScript, MAPS.fraktur,
  MAPS.boldFraktur, MAPS.doubleStruck, MAPS.sansBold, MAPS.sansBoldItalic, MAPS.monospace,
  MAPS.smallCaps, MAPS.circled, MAPS.superscript, MAPS.faux, MAPS.currency, MAPS.greek, null,
];

/** Friendly, widely supported emojis (no flags, no skin-tone or ZWJ sequences). */
const EMOJIS = Array.from(
  "😎👑💎🔥⭐🌙🌸🌷🍀🦋🐉🦊🐺🐼🐯🦁🐸🐙🦄🐬🍓🍒🍩🍦🎮🎧🎵🎀🎁🎈🍕🍔🌈⚡💫✨💜💙💚🖤💛❤️🤍🥀🌹🌻🍁☘️🎯🏆🚀🛸👻💀👽🤖😈😇🥷🧸🪐",
).filter((ch) => ch !== "️");

const SYMBOL_PAIRS: [string, string][] = [
  ["꧁", "꧂"], ["★", "★"], ["♡", "♡"], ["✿", "✿"], ["☾", "☽"], ["♛", "♛"], ["✦", "✦"],
  ["〖", "〗"], ["『", "』"], ["【", "】"], ["♪", "♫"], ["⚡", "⚡"], ["☠", "☠"], ["✧", "✧"],
];

const FRAMES: [string, string][] = [
  ["¸,ø¤º°`°º¤ø,¸ ", " ¸,ø¤º°`°º¤ø,¸"],
  ["•·.·´¯`·.·• ", " •·.·´¯`·.·•"],
  ["·.¸¸.·♩♪♫ ", " ♫♪♩·.¸¸.·"],
  ["✿.｡.:* ", " *:.｡.✿"],
  ["▀▄▀▄ ", " ▄▀▄▀"],
  ["-·=»‡«=·- ", " -·=»‡«=·-"],
  ["(っ◔◡◔)っ ♥ ", " ♥"],
  [".•°¤*(¯`★´¯)*¤° ", " °¤*(¯´★`¯)*¤°•."],
];

/** Small fast PRNG (mulberry32). */
export function prng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** One random combination for `text`. */
export function randomStyle(text: string, seed: number, options: TransformOptions = {}): string {
  if (text.trim() === "") return text;
  const rand = prng(seed);
  const pick = <T,>(list: T[]) => list[Math.floor(rand() * list.length)];
  const combine = options.accents === "combine";

  // Use 2–4 alphabets for this combination so it looks varied but not chaotic.
  const palette = Array.from({ length: 2 + Math.floor(rand() * 3) }, () => pick(ALPHABETS));
  const body = toClusters(text)
    .map((c) => {
      if (/\s/.test(c)) return c;
      const map = pick(palette);
      return map ? mapCluster(c, map, combine) : c.normalize("NFC");
    })
    .join("");

  const kind = rand();
  if (kind < 0.55) {
    // Two emojis on each side.
    return `${pick(EMOJIS)}${pick(EMOJIS)} ${body} ${pick(EMOJIS)}${pick(EMOJIS)}`;
  }
  if (kind < 0.8) {
    const [l, r] = pick(SYMBOL_PAIRS);
    return `${l} ${body} ${r}`;
  }
  const [l, r] = pick(FRAMES);
  return `${l}${body}${r}`;
}

/** `count` combinations starting at `start` for a given base seed. */
export function randomStyles(
  text: string,
  baseSeed: number,
  start: number,
  count: number,
  options: TransformOptions = {},
): string[] {
  return Array.from({ length: count }, (_, i) => randomStyle(text, baseSeed * 100_003 + start + i, options));
}
