import { getStyle } from "@/lib/fonts";

/**
 * Styles shown on /alfabeto-de-letras-diferentes. Only styles where each letter
 * turns into its own character (no frames or symbols around the word), so the
 * A–Z rows make sense one letter at a time.
 */
export const ALPHABET_GROUPS: { id: string; heading: string; intro: string; styles: { id: string; name: string }[] }[] = [
  {
    id: "alfabeto-cursivo",
    heading: "Alfabeto cursivo",
    intro: "Letras que lembram a escrita à mão. A cursiva em negrito aparece melhor em telas pequenas.",
    styles: [
      { id: "cursiva", name: "Cursiva" },
      { id: "cursiva-negrito", name: "Cursiva em negrito" },
      { id: "italico", name: "Itálico serifado" },
      { id: "italico-sem-serifa", name: "Itálico sem serifa" },
    ],
  },
  {
    id: "alfabeto-negrito",
    heading: "Alfabeto em negrito",
    intro: "Letras grossas para destacar uma palavra. O negrito sem serifa também tem números.",
    styles: [
      { id: "negrito-sem-serifa", name: "Negrito sem serifa" },
      { id: "negrito", name: "Negrito serifado" },
      { id: "negrito-italico", name: "Negrito itálico" },
      { id: "negrito-italico-sem-serifa", name: "Negrito itálico sem serifa" },
    ],
  },
  {
    id: "alfabeto-gotico",
    heading: "Alfabeto gótico",
    intro: "O estilo medieval (fraktur), muito usado em nicks e tatuagens.",
    styles: [
      { id: "gotica", name: "Gótica" },
      { id: "gotica-negrito", name: "Gótica em negrito" },
    ],
  },
  {
    id: "alfabeto-bolha",
    heading: "Alfabeto bolha e quadrado",
    intro: "Letras dentro de círculos, quadrados e parênteses.",
    styles: [
      { id: "bolhas", name: "Bolhas" },
      { id: "bolhas-pretas", name: "Bolhas pretas" },
      { id: "quadrados", name: "Quadrados" },
      { id: "quadrados-pretos", name: "Quadrados pretos" },
      { id: "parenteses", name: "Entre parênteses" },
    ],
  },
  {
    id: "alfabeto-pequeno",
    heading: "Alfabeto de letras pequenas",
    intro: "Versalete (maiúsculas pequenas) e letras sobrescritas, para um visual minimalista.",
    styles: [
      { id: "versalete", name: "Versalete" },
      { id: "sobrescrito", name: "Sobrescrito" },
    ],
  },
  {
    id: "alfabeto-especial",
    heading: "Alfabeto contorno, monoespaçado e aesthetic",
    intro: "Estilos modernos: traço duplo, máquina de escrever e letras largas aesthetic.",
    styles: [
      { id: "contorno", name: "Contorno (duplo traço)" },
      { id: "monoespacada", name: "Monoespaçada" },
      { id: "largura-total", name: "Largura total (aesthetic)" },
      { id: "sem-serifa", name: "Sem serifa" },
    ],
  },
  {
    id: "alfabeto-de-cabeca-para-baixo",
    heading: "Alfabeto de cabeça para baixo",
    intro: "Cada letra virada de ponta-cabeça. Algumas letras, como O, S e X, ficam iguais porque são simétricas.",
    styles: [{ id: "de-cabeca-para-baixo", name: "De cabeça para baixo" }],
  },
  {
    id: "alfabeto-decorativo",
    heading: "Alfabeto com letras de outros idiomas",
    intro: "Letras parecidas com as nossas, emprestadas de outros alfabetos e símbolos.",
    styles: [
      { id: "estilo-oriental", name: "Estilo oriental" },
      { id: "estilo-grego", name: "Estilo grego" },
      { id: "estilo-moedas", name: "Estilo moedas" },
      { id: "estilo-faux", name: "Estilo faux" },
      { id: "letras-emoji", name: "Letras em emoji" },
    ],
  },
  {
    id: "alfabeto-riscado",
    heading: "Alfabeto riscado e sublinhado",
    intro: "Letras com uma linha por cima ou por baixo.",
    styles: [
      { id: "riscado", name: "Riscado" },
      { id: "sublinhado", name: "Sublinhado" },
    ],
  },
];

export const ALPHABET_STYLES = ALPHABET_GROUPS.flatMap((g) => g.styles);

const UPPER = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const LOWER = [..."abcdefghijklmnopqrstuvwxyz"];
const DIGITS = [..."0123456789"];

export interface AlphabetRow {
  id: "maiusculas" | "minusculas" | "letras" | "numeros";
  label: string;
  chars: string[];
}

/**
 * The A–Z (and 0–9) rows for a style. When capitals and lowercase come out the
 * same (like versalete), they are shown once as "Letras". Numbers only appear
 * when the style changes most of them.
 */
export function alphabetRows(styleId: string): AlphabetRow[] {
  const style = getStyle(styleId);
  const map = (chars: string[]) => chars.map((c) => style.transform(c, { accents: "plain" }));
  const upper = map(UPPER);
  const lower = map(LOWER);
  const digits = map(DIGITS);
  const rows: AlphabetRow[] =
    upper.join("") === lower.join("")
      ? [{ id: "letras", label: "Letras", chars: upper }]
      : [
          { id: "maiusculas", label: "Maiúsculas", chars: upper },
          { id: "minusculas", label: "Minúsculas", chars: lower },
        ];
  if (digits.filter((d, i) => d !== DIGITS[i]).length >= 8) rows.push({ id: "numeros", label: "Números", chars: digits });
  return rows;
}
