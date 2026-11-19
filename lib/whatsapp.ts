/**
 * WhatsApp's own text formatting (the codes the app understands, like *texto*).
 * Inline codes only work when the symbol touches the word, and they don't span
 * line breaks, so every non-empty line is wrapped on its own, with the line's
 * leading and trailing spaces kept outside the symbols.
 */

export type WhatsAppFormatId =
  | "negrito"
  | "italico"
  | "tachado"
  | "monoespacado"
  | "codigo"
  | "citacao"
  | "lista"
  | "numerada"
  | "negrito-italico";

export interface WhatsAppFormat {
  id: WhatsAppFormatId;
  name: string;
  /** How to type it, shown in the table and the chips. */
  example: string;
  kind: "wrap" | "prefix";
  /** For "wrap": symbols before and after. For "prefix": the start of each line. */
  open: string;
  close: string;
}

export const WHATSAPP_FORMATS: WhatsAppFormat[] = [
  { id: "negrito", name: "Negrito", example: "*texto*", kind: "wrap", open: "*", close: "*" },
  { id: "italico", name: "Itálico", example: "_texto_", kind: "wrap", open: "_", close: "_" },
  { id: "tachado", name: "Tachado", example: "~texto~", kind: "wrap", open: "~", close: "~" },
  { id: "monoespacado", name: "Monoespaçado", example: "```texto```", kind: "wrap", open: "```", close: "```" },
  { id: "codigo", name: "Código embutido", example: "`texto`", kind: "wrap", open: "`", close: "`" },
  { id: "citacao", name: "Citação", example: "> texto", kind: "prefix", open: "> ", close: "" },
  { id: "lista", name: "Lista com marcadores", example: "- texto", kind: "prefix", open: "- ", close: "" },
  { id: "numerada", name: "Lista numerada", example: "1. texto", kind: "prefix", open: "", close: "" },
  { id: "negrito-italico", name: "Negrito + itálico", example: "*_texto_*", kind: "wrap", open: "*_", close: "_*" },
];

export function getWhatsAppFormat(id: WhatsAppFormatId): WhatsAppFormat {
  const format = WHATSAPP_FORMATS.find((f) => f.id === id);
  if (!format) throw new Error(`Unknown WhatsApp format: ${id}`);
  return format;
}

/** Formats a (possibly multi-line) text with one of WhatsApp's codes. */
export function formatWhatsApp(text: string, id: WhatsAppFormatId): string {
  const format = getWhatsAppFormat(id);
  let n = 0;
  return text
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => {
      const match = line.match(/^(\s*)(.*?)(\s*)$/)!;
      const [, lead, body, trail] = match;
      if (!body) return line;
      if (format.kind === "wrap") return `${lead}${format.open}${body}${format.close}${trail}`;
      n += 1;
      // Lines are already list items or quotes: don't stack another prefix.
      const clean = body.replace(/^(?:>\s*|[-*•]\s+|\d+[.)]\s+)/, "");
      const prefix = format.id === "numerada" ? `${n}. ` : format.open;
      return `${prefix}${clean}${trail}`;
    })
    .join("\n");
}
