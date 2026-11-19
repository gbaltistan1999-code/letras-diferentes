import { describe, expect, it } from "vitest";
import { formatWhatsApp, WHATSAPP_FORMATS } from "@/lib/whatsapp";

describe("formatWhatsApp", () => {
  it("wraps text in the inline codes", () => {
    expect(formatWhatsApp("Bom dia", "negrito")).toBe("*Bom dia*");
    expect(formatWhatsApp("Bom dia", "italico")).toBe("_Bom dia_");
    expect(formatWhatsApp("Bom dia", "tachado")).toBe("~Bom dia~");
    expect(formatWhatsApp("Bom dia", "monoespacado")).toBe("```Bom dia```");
    expect(formatWhatsApp("Bom dia", "codigo")).toBe("`Bom dia`");
    expect(formatWhatsApp("Bom dia", "negrito-italico")).toBe("*_Bom dia_*");
  });

  it("keeps the symbols touching the words (spaces stay outside)", () => {
    expect(formatWhatsApp("  oi  ", "negrito")).toBe("  *oi*  ");
  });

  it("wraps each line on its own and leaves empty lines alone", () => {
    expect(formatWhatsApp("Aviso\n\nReunião às 10h", "negrito")).toBe("*Aviso*\n\n*Reunião às 10h*");
    expect(formatWhatsApp("a\r\nb", "italico")).toBe("_a_\n_b_");
  });

  it("prefixes each line for quotes and lists", () => {
    expect(formatWhatsApp("pão\nleite", "lista")).toBe("- pão\n- leite");
    expect(formatWhatsApp("pão\nleite", "citacao")).toBe("> pão\n> leite");
  });

  it("numbers only non-empty lines", () => {
    expect(formatWhatsApp("pão\n\nleite\novos", "numerada")).toBe("1. pão\n\n2. leite\n3. ovos");
  });

  it("does not stack list prefixes", () => {
    expect(formatWhatsApp("- pão\n1. leite\n• ovos", "numerada")).toBe("1. pão\n2. leite\n3. ovos");
    expect(formatWhatsApp("> citado", "lista")).toBe("- citado");
  });

  it("returns empty text unchanged", () => {
    for (const f of WHATSAPP_FORMATS) expect(formatWhatsApp("", f.id)).toBe("");
  });
});
