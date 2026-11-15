import { describe, expect, it } from "vitest";
import { parseInline, parseMarkdown, readingMinutes, slugify } from "@/lib/markdown";

describe("markdown subset", () => {
  it("parses headings with ids", () => {
    expect(parseMarkdown("## Por que o Unicode?")).toEqual([
      { type: "h2", text: "Por que o Unicode?", id: "por-que-o-unicode" },
    ]);
    expect(slugify("Ação & Coração!")).toBe("acao-coracao");
  });

  it("parses lists, copy lists, tips and paragraphs", () => {
    const blocks = parseMarkdown("- a\n- b\n\n1. um\n2. dois\n\n+ 𝔏𝔬𝔟𝔬\n+ ★ Rei ★\n\n> dica **boa**\n\nlinha 1\nlinha 2");
    expect(blocks.map((b) => b.type)).toEqual(["ul", "ol", "copy", "tip", "p"]);
    expect(blocks[2]).toEqual({ type: "copy", items: ["𝔏𝔬𝔟𝔬", "★ Rei ★"] });
    expect(blocks[4]).toEqual({ type: "p", content: [{ type: "text", text: "linha 1 linha 2" }] });
  });

  it("parses bold and links inline, and never produces raw HTML", () => {
    expect(parseInline("veja **isto** e [o gerador](/) <b>x</b>")).toEqual([
      { type: "text", text: "veja " },
      { type: "bold", text: "isto" },
      { type: "text", text: " e " },
      { type: "link", text: "o gerador", href: "/" },
      { type: "text", text: " <b>x</b>" },
    ]);
  });

  it("estimates reading time", () => {
    expect(readingMinutes("palavra ".repeat(400))).toBe(2);
    expect(readingMinutes("oi")).toBe(1);
  });
});
