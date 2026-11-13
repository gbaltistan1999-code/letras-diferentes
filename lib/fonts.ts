/**
 * Unicode text styles ("letras diferentes").
 *
 * None of these are real fonts: every style swaps ordinary Latin letters for
 * other Unicode characters that happen to look styled (mostly from the
 * "Mathematical Alphanumeric Symbols" block, U+1D400–U+1D7FF, and the
 * "Enclosed Alphanumerics" blocks).
 *
 * Portuguese accents: the input is split into clusters (a base character plus
 * any combining marks). "ã" becomes "a" + U+0303, the base "a" is mapped and
 * the combining tilde is kept, so the accent survives in every style. When a
 * style has no replacement for a base character, the original cluster is kept
 * unchanged (documented fallback — nothing is ever dropped).
 *
 * Iteration is always by code point (Array.from), so emojis and other
 * surrogate pairs are never split.
 */
import type { Category, CategoryId, TextStyle } from "@/types";

type CharMap = Record<string, string>;

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";

const cp = (n: number) => String.fromCodePoint(n);

/** Combining diacritical marks (U+0300–U+036F) and a few other combining ranges. */
const COMBINING = /[̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]/;

const segmenter =
  typeof Intl !== "undefined" && "Segmenter" in Intl
    ? new Intl.Segmenter("pt-BR", { granularity: "grapheme" })
    : null;

/**
 * Split text into user-perceived characters (grapheme clusters) after NFD
 * normalization: "ã" → "a" + U+0303 stays together, and multi-code-point
 * emojis (skin tones, ZWJ families, flags) are never split.
 */
export function toClusters(text: string): string[] {
  const nfd = text.normalize("NFD");
  if (segmenter) return Array.from(segmenter.segment(nfd), (s) => s.segment);

  // Fallback for very old browsers: base code point + following combining marks.
  const clusters: string[] = [];
  for (const ch of Array.from(nfd)) {
    if (COMBINING.test(ch) && clusters.length > 0) {
      clusters[clusters.length - 1] += ch;
    } else {
      clusters.push(ch);
    }
  }
  return clusters;
}

/** Map the base of each cluster, keeping its combining marks. */
function mapClusters(text: string, map: CharMap): string[] {
  return toClusters(text).map((cluster) => {
    const [base, ...marks] = Array.from(cluster);
    const mapped = map[base];
    if (mapped === undefined) return cluster.normalize("NFC");
    return mapped + marks.join("");
  });
}

const applyMap = (map: CharMap) => (text: string) => mapClusters(text, map).join("");

/** Build a map from the first code point of each consecutive Unicode run. */
function rangeMap(opts: {
  upper?: number;
  lower?: number;
  digits?: number;
  /** Map lowercase letters to the uppercase run (for upper-only alphabets). */
  lowerToUpper?: boolean;
  exceptions?: CharMap;
}): CharMap {
  const map: CharMap = {};
  for (let i = 0; i < 26; i++) {
    if (opts.upper !== undefined) map[UPPER[i]] = cp(opts.upper + i);
    if (opts.lower !== undefined) map[LOWER[i]] = cp(opts.lower + i);
    else if (opts.lowerToUpper && opts.upper !== undefined) map[LOWER[i]] = cp(opts.upper + i);
  }
  if (opts.digits !== undefined) {
    for (let i = 0; i < 10; i++) map[DIGITS[i]] = cp(opts.digits + i);
  }
  return Object.assign(map, opts.exceptions);
}

/** Build a map by pairing characters of two equally long strings. */
function pairMap(from: string, to: string): CharMap {
  const f = Array.from(from);
  const t = Array.from(to);
  if (f.length !== t.length) {
    throw new Error(`pairMap length mismatch: ${f.length} vs ${t.length}`);
  }
  const map: CharMap = {};
  f.forEach((ch, i) => {
    map[ch] = t[i];
  });
  return map;
}

/* -------------------------------------------------------------------------- */
/* Character maps                                                             */
/* -------------------------------------------------------------------------- */

// Reserved code points in Mathematical Alphanumeric Symbols are filled by
// characters that already existed in the Letterlike Symbols block.
const SCRIPT_GAPS: CharMap = {
  B: "ℬ", E: "ℰ", F: "ℱ", H: "ℋ", I: "ℐ", L: "ℒ", M: "ℳ", R: "ℛ",
  e: "ℯ", g: "ℊ", o: "ℴ",
};
const FRAKTUR_GAPS: CharMap = { C: "ℭ", H: "ℌ", I: "ℑ", R: "ℜ", Z: "ℨ" };
const DOUBLE_STRUCK_GAPS: CharMap = {
  C: "ℂ", H: "ℍ", N: "ℕ", P: "ℙ", Q: "ℚ", R: "ℝ", Z: "ℤ",
};

export const MAPS = {
  bold: rangeMap({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce }),
  italic: rangeMap({ upper: 0x1d434, lower: 0x1d44e, exceptions: { h: "ℎ" } }),
  boldItalic: rangeMap({ upper: 0x1d468, lower: 0x1d482 }),
  script: rangeMap({ upper: 0x1d49c, lower: 0x1d4b6, exceptions: SCRIPT_GAPS }),
  boldScript: rangeMap({ upper: 0x1d4d0, lower: 0x1d4ea }),
  fraktur: rangeMap({ upper: 0x1d504, lower: 0x1d51e, exceptions: FRAKTUR_GAPS }),
  doubleStruck: rangeMap({
    upper: 0x1d538, lower: 0x1d552, digits: 0x1d7d8, exceptions: DOUBLE_STRUCK_GAPS,
  }),
  boldFraktur: rangeMap({ upper: 0x1d56c, lower: 0x1d586 }),
  sans: rangeMap({ upper: 0x1d5a0, lower: 0x1d5ba, digits: 0x1d7e2 }),
  sansBold: rangeMap({ upper: 0x1d5d4, lower: 0x1d5ee, digits: 0x1d7ec }),
  sansItalic: rangeMap({ upper: 0x1d608, lower: 0x1d622 }),
  sansBoldItalic: rangeMap({ upper: 0x1d63c, lower: 0x1d656 }),
  monospace: rangeMap({ upper: 0x1d670, lower: 0x1d68a, digits: 0x1d7f6 }),

  circled: rangeMap({
    upper: 0x24b6, lower: 0x24d0,
    exceptions: pairMap(DIGITS, "⓪①②③④⑤⑥⑦⑧⑨"),
  }),
  circledNegative: rangeMap({
    upper: 0x1f150, lowerToUpper: true,
    exceptions: pairMap(DIGITS, "⓿❶❷❸❹❺❻❼❽❾"),
  }),
  squared: rangeMap({ upper: 0x1f130, lowerToUpper: true }),
  squaredNegative: rangeMap({ upper: 0x1f170, lowerToUpper: true }),
  parenthesized: {
    ...rangeMap({ upper: 0x249c, lower: 0x249c }),
    ...pairMap("123456789", "⑴⑵⑶⑷⑸⑹⑺⑻⑼"),
  },
  fullwidth: (() => {
    const map: CharMap = { " ": "　" };
    for (let c = 0x21; c <= 0x7e; c++) map[cp(c)] = cp(c + 0xfee0);
    return map;
  })(),

  smallCaps: pairMap(
    LOWER + UPPER,
    "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ".repeat(2),
  ),
  superscript: pairMap(
    LOWER + UPPER + DIGITS + "+-=()",
    "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᑫʳˢᵗᵘᵛʷˣʸᶻ".repeat(2) + "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾",
  ),
  // Unicode has subscripts for only some letters; the rest stay unchanged.
  subscript: pairMap(
    "aehijklmnoprstuvx" + DIGITS + "+-=()",
    "ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎",
  ),
  upsideDown: pairMap(
    LOWER + UPPER + DIGITS + ".,!?¡¿'\"()[]{}<>_&;",
    "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz" +
      "∀ꓭƆꓷƎℲ⅁HIſꓘ˥WNOԀꝹꓤS⊥∩ΛMX⅄Z" +
      "0ƖᄅƐㄣϛ9ㄥ86" +
      "˙'¡¿!?,„)(][}{><‾⅋؛",
  ),
  greek: pairMap(
    LOWER + UPPER,
    "αв¢∂єƒgнιנкℓмησρqяѕтυνωχуz".repeat(2),
  ),
  asian: pairMap(
    LOWER + UPPER,
    "卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙".repeat(2),
  ),
  currency: pairMap(
    LOWER + UPPER,
    "₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ".repeat(2),
  ),
} satisfies Record<string, CharMap>;

/* -------------------------------------------------------------------------- */
/* Special transforms                                                         */
/* -------------------------------------------------------------------------- */

/** Add a combining mark after every non-space cluster. */
const withMark = (mark: string) => (text: string) =>
  toClusters(text)
    .map((c) => (/\s/.test(c) ? c : c + mark))
    .join("");

/** Wrap a (possibly styled) text in decorative symbols. */
const wrap = (left: string, right: string, inner: (t: string) => string = (t) => t) =>
  (text: string) => (text.trim() === "" ? text : `${left}${inner(text)}${right}`);

const upsideDown = (text: string) =>
  mapClusters(text, MAPS.upsideDown).reverse().join("");

const spaced = (text: string) =>
  toClusters(text)
    .map((c) => c.normalize("NFC"))
    .join(" ");

/* -------------------------------------------------------------------------- */
/* Public style list                                                          */
/* -------------------------------------------------------------------------- */

export const CATEGORIES: Category[] = [
  { id: "negrito", label: "Negrito" },
  { id: "cursivas", label: "Cursivas" },
  { id: "goticas", label: "Góticas" },
  { id: "pequenas", label: "Pequenas" },
  { id: "bolhas", label: "Bolhas e quadrados" },
  { id: "riscadas", label: "Riscadas e sublinhadas" },
  { id: "decorativas", label: "Decorativas" },
  { id: "especiais", label: "Especiais" },
];

const s = (
  id: string,
  name: string,
  category: CategoryId,
  transform: (t: string) => string,
): TextStyle => ({ id, name, category, transform });

export const STYLES: TextStyle[] = [
  // Negrito
  s("negrito", "Negrito serifado", "negrito", applyMap(MAPS.bold)),
  s("negrito-sem-serifa", "Negrito sem serifa", "negrito", applyMap(MAPS.sansBold)),
  s("negrito-italico", "Negrito itálico", "negrito", applyMap(MAPS.boldItalic)),
  s("negrito-italico-sem-serifa", "Negrito itálico sem serifa", "negrito", applyMap(MAPS.sansBoldItalic)),

  // Cursivas
  s("cursiva", "Cursiva", "cursivas", applyMap(MAPS.script)),
  s("cursiva-negrito", "Cursiva em negrito", "cursivas", applyMap(MAPS.boldScript)),
  s("italico", "Itálico serifado", "cursivas", applyMap(MAPS.italic)),
  s("italico-sem-serifa", "Itálico sem serifa", "cursivas", applyMap(MAPS.sansItalic)),

  // Góticas
  s("gotica", "Gótica", "goticas", applyMap(MAPS.fraktur)),
  s("gotica-negrito", "Gótica em negrito", "goticas", applyMap(MAPS.boldFraktur)),

  // Pequenas
  s("versalete", "Versalete (caixa-alta pequena)", "pequenas", applyMap(MAPS.smallCaps)),
  s("sobrescrito", "Sobrescrito", "pequenas", applyMap(MAPS.superscript)),
  s("subscrito", "Subscrito (parcial)", "pequenas", applyMap(MAPS.subscript)),

  // Bolhas e quadrados
  s("bolhas", "Bolhas", "bolhas", applyMap(MAPS.circled)),
  s("bolhas-pretas", "Bolhas pretas", "bolhas", applyMap(MAPS.circledNegative)),
  s("quadrados", "Quadrados", "bolhas", applyMap(MAPS.squared)),
  s("quadrados-pretos", "Quadrados pretos", "bolhas", applyMap(MAPS.squaredNegative)),
  s("parenteses", "Entre parênteses", "bolhas", applyMap(MAPS.parenthesized)),

  // Riscadas e sublinhadas
  s("riscado", "Riscado", "riscadas", withMark("̶")),
  s("riscado-barra", "Cortado com barra", "riscadas", withMark("̸")),
  s("sublinhado", "Sublinhado", "riscadas", withMark("̲")),
  s("sublinhado-duplo", "Sublinhado duplo", "riscadas", withMark("̳")),
  s("sobrelinhado", "Linha em cima", "riscadas", withMark("̅")),
  s("ondulado", "Ondulado embaixo", "riscadas", withMark("̰")),

  // Decorativas
  s("moldura-classica", "Moldura clássica ꧁ ꧂", "decorativas", wrap("꧁༺ ", " ༻꧂", applyMap(MAPS.boldScript))),
  s("estrelas", "Estrelas ★彡", "decorativas", wrap("★彡 ", " 彡★", applyMap(MAPS.smallCaps))),
  s("japones", "Colchetes japoneses 『 』", "decorativas", wrap("『", "』", applyMap(MAPS.sansBold))),
  s("simbolo-oriental", "Símbolo 亗", "decorativas", wrap("亗 ", " 亗", applyMap(MAPS.fraktur))),
  s("coracoes", "Corações ♡", "decorativas", wrap("♡ ", " ♡", applyMap(MAPS.script))),
  s("flechas", "Flechas ➳", "decorativas", wrap("➳ ", " ➳", applyMap(MAPS.italic))),
  s("estilo-grego", "Estilo grego", "decorativas", applyMap(MAPS.greek)),
  s("estilo-oriental", "Estilo oriental", "decorativas", applyMap(MAPS.asian)),
  s("estilo-moedas", "Estilo moedas", "decorativas", applyMap(MAPS.currency)),

  // Especiais
  s("contorno", "Contorno (duplo traço)", "especiais", applyMap(MAPS.doubleStruck)),
  s("sem-serifa", "Sem serifa", "especiais", applyMap(MAPS.sans)),
  s("monoespacada", "Monoespaçada (máquina de escrever)", "especiais", applyMap(MAPS.monospace)),
  s("largura-total", "Largura total", "especiais", applyMap(MAPS.fullwidth)),
  s("de-cabeca-para-baixo", "De cabeça para baixo", "especiais", upsideDown),
  s("espacado", "Espaçado", "especiais", spaced),
];

const STYLE_BY_ID = new Map(STYLES.map((style) => [style.id, style]));

export function getStyle(id: string): TextStyle {
  const style = STYLE_BY_ID.get(id);
  if (!style) throw new Error(`Unknown text style: ${id}`);
  return style;
}

/** Pick styles by category and/or explicit ids, preserving list order. */
export function selectStyles(opts: { categories?: CategoryId[]; styleIds?: string[] } = {}): TextStyle[] {
  if (opts.styleIds?.length) return opts.styleIds.map(getStyle);
  if (opts.categories?.length) {
    return STYLES.filter((style) => opts.categories!.includes(style.category));
  }
  return STYLES;
}
