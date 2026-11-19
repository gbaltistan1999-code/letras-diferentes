import { getStyle } from "@/lib/fonts";

/** TikTok text fields and their character limits. */
export const TIKTOK_FIELDS = [
  { id: "nome", label: "Nome", limit: 30 },
  { id: "bio", label: "Bio", limit: 80 },
  { id: "comentario", label: "Comentário", limit: 150 },
  { id: "legenda", label: "Legenda", limit: 2200 },
] as const;
export type TikTokFieldId = (typeof TIKTOK_FIELDS)[number]["id"];

/**
 * Strict count: styled letters outside the basic plane (𝓜, 𝐁…) take two
 * UTF-16 units and some apps count them as 2. If it fits by this count, it fits.
 */
export const tiktokLength = (text: string) => text.length;

/** Aesthetic presets: a letter style plus decorations around the text. */
export interface AestheticPreset {
  id: string;
  name: string;
  style?: string;
  before: string;
  after: string;
  /** Joins the words with this instead of a space (e.g. " · "). */
  wordSep?: string;
}

export const AESTHETIC_PRESETS: AestheticPreset[] = [
  { id: "nuvem", name: "Nuvem fofa ꒰ა ໒꒱", style: "versalete", before: "˚₊‧꒰ა ", after: " ໒꒱ ‧₊˚", wordSep: " · " },
  { id: "estrelas", name: "Estrelinhas ✩", style: "cursiva-negrito", before: "⋆｡°✩ ", after: " ✩°｡⋆" },
  { id: "brilho", name: "Brilho ✧", style: "versalete", before: "✧ ", after: " ✧" },
  { id: "lua", name: "Lua ☾ ☽", style: "italico", before: "☾ ", after: " ☽" },
  { id: "laco", name: "Laço 🎀", style: "versalete", before: "🎀 ", after: " 🎀", wordSep: " · " },
  { id: "borboleta", name: "Borboleta 🦋", style: "cursiva-negrito", before: "🦋 ", after: " 🦋" },
  { id: "musica", name: "Música ılı", style: "versalete", before: "ılı ", after: " ılı" },
  { id: "sussurro", name: "Sussurro ꒰ ꒱", style: "sobrescrito", before: "꒰ ", after: " ꒱" },
  { id: "coracao", name: "Coração ♡", style: "cursiva", before: "", after: " ♡" },
  { id: "vaporwave", name: "Vaporwave", style: "largura-total", before: "【", after: "】" },
  { id: "minimal", name: "Minimal minúsculo", style: "monoespacada", before: "", after: " ⋆" },
  { id: "flores", name: "Flores ✿", style: "versalete", before: "✿ ", after: " ✿" },
];

export function applyAesthetic(text: string, preset: AestheticPreset, accents: "plain" | "combine" = "plain"): string {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  const lower = preset.id === "minimal" ? words.map((w) => w.toLowerCase()) : words;
  const joined = lower.join(preset.wordSep ?? " ");
  const styled = preset.style ? getStyle(preset.style).transform(joined, { accents }) : joined;
  return `${preset.before}${styled}${preset.after}`;
}

/** TikTok @ rules: 2–24 characters, a–z, 0–9, "_" and ".", no dot at the end. */
export const USERNAME_MAX = 24;
export const USERNAME_MIN = 2;

export function isValidUsername(u: string): boolean {
  return u.length >= USERNAME_MIN && u.length <= USERNAME_MAX && /^[a-z0-9._]+$/.test(u) && !u.endsWith(".");
}

/**
 * Words usable in a @: styled letters back to plain (NFKD turns 𝓜 into M),
 * accents removed, anything else dropped.
 */
export function usernameWords(text: string): string[] {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .split(/[\s._\-·]+/)
    .map((w) => w.replace(/[^a-z0-9]/g, ""))
    .filter(Boolean);
}

const fit = (u: string) => u.slice(0, USERNAME_MAX).replace(/\.+$/, "");

/** Suggestions like mari.ana, mariana_, mariana.oficial, all valid @s. */
export function suggestUsernames(text: string): string[] {
  const words = usernameWords(text);
  if (words.length === 0) return [];
  const base = words.join("");
  const out: string[] = [base];
  if (words.length > 1) {
    out.push(words.join("."), words.join("_"));
    if (words.length > 2) {
      // Long names: first + last and the first two words.
      const [first, second] = words;
      const last = words[words.length - 1];
      out.push(`${first}.${last}`, `${first}_${last}`, `${first}${second}`, `${first}.${second}`);
    }
  } else if (base.length >= 6) {
    const mid = Math.ceil(base.length / 2);
    out.push(`${base.slice(0, mid)}.${base.slice(mid)}`);
  }
  const short = base.length <= 16 ? base : words.length > 1 ? `${words[0]}${words[words.length - 1]}` : base;
  out.push(`${short}_`, `_${short}`, `${short}.oficial`, `sou.${short}`, `${short}.tiktok`, `${short}_br`);
  // Only suggestions that fit as they are; a cut-off one (like "nome.ofic") looks broken.
  const fitting = out.filter((u) => u.length <= USERNAME_MAX);
  const list = fitting.length > 0 ? fitting : [fit(base)];
  return [...new Set(list)].filter(isValidUsername);
}
