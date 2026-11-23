/**
 * Nick generator: combines a styled name (Unicode fonts) with symbol pairs per
 * category. Deterministic for a given seed, so the first batch renders the
 * same on the server and in the browser.
 */
import { getStyle } from "@/lib/fonts";
import { HANGUL_FILLER } from "@/lib/invisible";
import { prng } from "@/lib/random-styles";

export type NickCategoryId = "freefire" | "masculino" | "feminino" | "cla" | "fofo" | "discord";

export interface NickCategory {
  id: NickCategoryId;
  label: string;
  /** Style ids from lib/fonts.ts. */
  styles: string[];
  /** [before, after]; either side may be empty. */
  symbols: [string, string][];
  /** Names for the "Ideia" button. */
  ideas: string[];
}

export const NICK_CATEGORIES: NickCategory[] = [
  {
    id: "freefire",
    label: "Free Fire",
    styles: ["negrito", "negrito-sem-serifa", "gotica-negrito", "contorno", "monoespacada", "versalete"],
    symbols: [["乂", "乂"], ["", "亗"], ["×͜×", ""], ["么", ""], ["★彡", "彡★"], ["꧁", "꧂"], ["☠", "☠"], ["〆", ""], ["⚡", "⚡"], ["『", "』"]],
    ideas: ["Brabo", "Mito", "Lenda", "Rush", "Capa", "Monstro", "Sniper", "Headshot", "Brutal", "Insano"],
  },
  {
    id: "masculino",
    label: "Masculino",
    styles: ["negrito", "negrito-sem-serifa", "gotica-negrito", "contorno", "monoespacada", "negrito-italico"],
    symbols: [["乂", "乂"], ["☠", "☠"], ["×͜×", ""], ["", "亗"], ["⚡", "⚡"], ["么", ""], ["★", "★"], ["⚔", "⚔"], ["【", "】"], ["✠", "✠"]],
    ideas: ["Sniper", "Reaper", "Venom", "Titan", "Storm", "Lobo", "Ronin", "Kaiser", "Ghost", "Dragon"],
  },
  {
    id: "feminino",
    label: "Feminino",
    styles: ["cursiva-negrito", "cursiva", "negrito-italico", "versalete", "contorno"],
    symbols: [["꧁", "꧂"], ["♛", "♛"], ["✿", "✿"], ["", "࿐"], ["♡", "♡"], ["『", "』"], ["ツ", ""], ["★彡", "彡★"], ["❀", "❀"], ["⋆˙⟡", "⟡˙⋆"]],
    ideas: ["Luna", "Rainha", "Bella", "Aurora", "Jade", "Queen", "Nina", "Diva", "Lua", "Estrela"],
  },
  {
    id: "cla",
    label: "Clã",
    styles: ["negrito", "gotica-negrito", "contorno", "monoespacada", "versalete", "negrito-sem-serifa"],
    symbols: [["【", "】"], ["『", "』"], ["", "亗"], ["〆", ""], ["꧁༒", "༒꧂"], ["ılı", "ılı"], ["乂", "乂"], ["⚔", "⚔"], ["♔", "♔"], ["★", "★"]],
    ideas: ["Elite", "Legion", "Imperio", "Alpha", "Ordem", "Squad", "Lendas", "Furia", "Tropa", "Dinastia"],
  },
  {
    id: "fofo",
    label: "Fofo",
    styles: ["versalete", "sobrescrito", "cursiva-negrito", "negrito-italico", "cursiva"],
    symbols: [["ʚ", "ɞ"], ["☁️", ""], ["♡", "♡"], ["🐼", ""], ["✿", "✿"], ["꒰", "꒱"], ["⋆", "⋆"], ["ᰔ", "ᰔ"], ["🌸", ""], ["🍓", ""]],
    ideas: ["Mel", "Nuvem", "Pudim", "Panda", "Mimi", "Kiwi", "Docinho", "Bubu", "Fofa", "Moranguinho"],
  },
  {
    id: "discord",
    label: "Discord",
    styles: ["versalete", "cursiva-negrito", "negrito-sem-serifa", "gotica-negrito", "largura-total", "monoespacada"],
    symbols: [["✦", "✦"], ["꒰", "꒱"], ["⋆", "⋆"], ["☾", ""], ["", "ツ"], ["『", "』"], ["✧", "✧"], ["♱", ""], ["〔", "〕"], ["⚡", "⚡"]],
    ideas: ["Nova", "Pixel", "Nyx", "Echo", "Byte", "Lumi", "Zen", "Kai", "Orbit", "Vibe"],
  },
];

export type NickSeparator = "invisivel" | "nenhum" | "espaco";
export type NickCase = "original" | "maiusculas" | "minusculas";

export interface NickOptions {
  separator?: NickSeparator;
  /** Clan tag, shown small before the name (e.g. "BR" → ᴮᴿ). */
  tag?: string;
  letterCase?: NickCase;
}

export const NICK_BATCH = 12;
/** Free Fire's usual nickname limit. */
export const FF_LIMIT = 12;
/** Discord display name and server nickname limit. */
export const DISCORD_LIMIT = 32;

export function getNickCategory(id: NickCategoryId): NickCategory {
  const c = NICK_CATEGORIES.find((x) => x.id === id);
  if (!c) throw new Error(`Unknown nick category: ${id}`);
  return c;
}

const SEPARATORS: Record<NickSeparator, string> = { invisivel: HANGUL_FILLER, nenhum: "", espaco: " " };

/** Capital modifier letters (ᴮᴿ). C, F, Q, S, X, Y, Z have none and fall back to the superscript style. */
const CAPITAL_SUPERSCRIPT: Record<string, string> = {
  A: "ᴬ", B: "ᴮ", D: "ᴰ", E: "ᴱ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ",
  N: "ᴺ", O: "ᴼ", P: "ᴾ", R: "ᴿ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ",
};

/** Clan tag in small capitals: "br" → "ᴮᴿ". */
export function tagText(tag: string): string {
  const superscript = getStyle("sobrescrito");
  return [...tag.trim().replace(/\s+/g, "").slice(0, 5).toUpperCase()]
    .map((c) => CAPITAL_SUPERSCRIPT[c] ?? superscript.transform(c))
    .join("");
}

/** One nick from a name, style and symbol pair. */
export function buildNick(name: string, styleId: string, symbols: [string, string], options: NickOptions = {}): string {
  const { separator = "invisivel", tag = "", letterCase = "original" } = options;
  const sep = SEPARATORS[separator];
  let base = name.trim();
  if (letterCase === "maiusculas") base = base.toUpperCase();
  if (letterCase === "minusculas") base = base.toLowerCase();
  // Spaces inside the name follow the separator (Free Fire rejects ordinary spaces).
  const styled = getStyle(styleId)
    .transform(base)
    .replace(/[  ]+/g, sep);
  const tagged = tagText(tag) + styled;
  const [before, after] = symbols;
  return `${before ? before + sep : ""}${tagged}${after ? sep + after : ""}`;
}

/** Every style × symbol combination for a category, shuffled by `seed`. */
export function generateNicks(
  name: string,
  categoryId: NickCategoryId,
  seed: number,
  options: NickOptions = {},
  count = NICK_BATCH,
): string[] {
  const cat = getNickCategory(categoryId);
  const combos: [string, [string, string]][] = [];
  for (const style of cat.styles) for (const sym of cat.symbols) combos.push([style, sym]);
  const rand = prng(seed);
  for (let i = combos.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [combos[i], combos[j]] = [combos[j], combos[i]];
  }
  const out: string[] = [];
  const seen = new Set<string>();
  for (const [style, sym] of combos) {
    const nick = buildNick(name, style, sym, options);
    if (!seen.has(nick)) {
      seen.add(nick);
      out.push(nick);
    }
    if (out.length >= count) break;
  }
  return out;
}

/** Character count as players see it (one per code point; the invisible space counts as 1). */
export const nickLength = (nick: string) => [...nick].length;

/** A random idea from the category, avoiding `current`. */
export function randomIdea(categoryId: NickCategoryId, current = "", rand = Math.random): string {
  const ideas = getNickCategory(categoryId).ideas.filter((i) => i !== current);
  return ideas[Math.floor(rand() * ideas.length)];
}
