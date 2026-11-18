/**
 * Invisible characters for "nome invisível" (blank nicknames) and a small
 * inspector that names every character in a text.
 */

export type InvisibleTypeId = "hangul" | "braille" | "hangul-meia" | "em-space" | "zero";

export interface InvisibleType {
  id: InvisibleTypeId;
  name: string;
  char: string;
  /** "U+3164" */
  code: string;
  width: "Larga" | "Média" | "Zero";
  bestFor: string;
  /** False for characters that can't make a blank name on their own. */
  blankName: boolean;
}

export const INVISIBLE_TYPES: InvisibleType[] = [
  {
    id: "hangul",
    name: "Hangul Filler",
    char: "ㅤ",
    code: "U+3164",
    width: "Larga",
    bestFor: "Free Fire, WhatsApp, Instagram, TikTok",
    blankName: true,
  },
  {
    id: "braille",
    name: "Braille em branco",
    char: "⠀",
    code: "U+2800",
    width: "Média",
    bestFor: "Bio do Instagram, legendas, TikTok, mensagens",
    blankName: true,
  },
  {
    id: "hangul-meia",
    name: "Hangul meia largura",
    char: "ﾠ",
    code: "U+FFA0",
    width: "Média",
    bestFor: "Alternativa em jogos que recusam o U+3164",
    blankName: true,
  },
  {
    id: "em-space",
    name: "Espaço largo (em space)",
    char: " ",
    code: "U+2003",
    width: "Larga",
    bestFor: "Separar palavras em bios e textos",
    blankName: false,
  },
  {
    id: "zero",
    name: "Espaço de largura zero",
    char: "​",
    code: "U+200B",
    width: "Zero",
    bestFor: "Quebrar links ou hashtags; não serve para nome em branco",
    blankName: false,
  },
];

export const HANGUL_FILLER = "ㅤ";

export function getInvisibleType(id: InvisibleTypeId): InvisibleType {
  const t = INVISIBLE_TYPES.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown invisible type: ${id}`);
  return t;
}

/** `count` copies of the chosen invisible character (clamped to 1–30). */
export function makeInvisible(id: InvisibleTypeId, count: number): string {
  const n = Math.min(30, Math.max(1, Math.round(count)));
  return getInvisibleType(id).char.repeat(n);
}

/**
 * Puts an invisible character into a name: optionally replacing every run of
 * ordinary whitespace with it, and/or adding one before and after.
 */
export function insertInvisible(
  text: string,
  char: string,
  options: { replaceSpaces?: boolean; edges?: boolean } = {},
): string {
  const { replaceSpaces = true, edges = false } = options;
  let out = text.trim();
  if (replaceSpaces) out = out.replace(/[ \t ]+/g, char);
  if (edges) out = char + out + char;
  return out;
}

/** Characters with a known name in the inspector (anything blank or space-like). */
const KNOWN: Record<number, { name: string; kind: "invisible" | "space" }> = {
  0x0020: { name: "Espaço comum", kind: "space" },
  0x00a0: { name: "Espaço não separável", kind: "space" },
  0x0009: { name: "Tabulação", kind: "space" },
  0x000a: { name: "Quebra de linha", kind: "space" },
  0x000d: { name: "Retorno de carro", kind: "space" },
  0x115f: { name: "Hangul Choseong Filler", kind: "invisible" },
  0x1160: { name: "Hangul Jungseong Filler", kind: "invisible" },
  0x180e: { name: "Separador de vogal mongol", kind: "invisible" },
  0x2000: { name: "En quad", kind: "space" },
  0x2001: { name: "Em quad", kind: "space" },
  0x2002: { name: "Espaço médio (en space)", kind: "space" },
  0x2003: { name: "Espaço largo (em space)", kind: "space" },
  0x2004: { name: "Espaço de 1/3", kind: "space" },
  0x2005: { name: "Espaço de 1/4", kind: "space" },
  0x2006: { name: "Espaço de 1/6", kind: "space" },
  0x2007: { name: "Espaço de número", kind: "space" },
  0x2008: { name: "Espaço de pontuação", kind: "space" },
  0x2009: { name: "Espaço fino", kind: "space" },
  0x200a: { name: "Espaço ultrafino", kind: "space" },
  0x200b: { name: "Espaço de largura zero", kind: "invisible" },
  0x200c: { name: "Não-junção de largura zero", kind: "invisible" },
  0x200d: { name: "Junção de largura zero", kind: "invisible" },
  0x2028: { name: "Separador de linha", kind: "space" },
  0x202f: { name: "Espaço estreito não separável", kind: "space" },
  0x205f: { name: "Espaço matemático médio", kind: "space" },
  0x2060: { name: "Word joiner", kind: "invisible" },
  0x2800: { name: "Braille em branco", kind: "invisible" },
  0x3000: { name: "Espaço ideográfico", kind: "space" },
  0x3164: { name: "Hangul Filler", kind: "invisible" },
  0xfeff: { name: "Marca de ordem de bytes (BOM)", kind: "invisible" },
  0xffa0: { name: "Hangul meia largura", kind: "invisible" },
};

export interface InspectedChar {
  char: string;
  /** "U+3164" */
  code: string;
  /** Name for invisible/space characters; undefined for ordinary visible ones. */
  name?: string;
  kind: "invisible" | "space" | "visible";
}

export const codeOf = (cp: number) => `U+${cp.toString(16).toUpperCase().padStart(4, "0")}`;

/** Lists every code point in `text` (up to `limit`), naming the blank ones. */
export function inspectText(text: string, limit = 300): InspectedChar[] {
  const out: InspectedChar[] = [];
  for (const char of text) {
    if (out.length >= limit) break;
    const cp = char.codePointAt(0)!;
    const known = KNOWN[cp];
    out.push({ char, code: codeOf(cp), name: known?.name, kind: known?.kind ?? "visible" });
  }
  return out;
}

/** "4× Hangul Filler, 1× Espaço comum" style summary of the blank characters. */
export function summarizeBlanks(chars: InspectedChar[]): { name: string; code: string; count: number; kind: "invisible" | "space" }[] {
  const map = new Map<string, { name: string; code: string; count: number; kind: "invisible" | "space" }>();
  for (const c of chars) {
    if (c.kind === "visible") continue;
    const entry = map.get(c.code) ?? { name: c.name!, code: c.code, count: 0, kind: c.kind };
    entry.count++;
    map.set(c.code, entry);
  }
  return [...map.values()];
}
