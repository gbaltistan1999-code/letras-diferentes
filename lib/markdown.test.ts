import { describe, expect, it } from "vitest";
import { faqFromBlocks, parseInline, parseMarkdown, readingMinutes, slugify } from "@/lib/markdown";

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

  it("parses tables with a header row", () => {
    const [table] = parseMarkdown("| Estilo | Como digitar |\n|---|---|\n| Negrito | *texto* |\n| Itálico | **_x_** |");
    expect(table).toEqual({
      type: "table",
      head: [[{ type: "text", text: "Estilo" }], [{ type: "text", text: "Como digitar" }]],
      rows: [
        [[{ type: "text", text: "Negrito" }], [{ type: "text", text: "*texto*" }]],
        [[{ type: "text", text: "Itálico" }], [{ type: "bold", text: "_x_" }]],
      ],
    });
    expect(parseMarkdown("| só uma linha |")[0].type).toBe("p");
  });

  it("extracts FAQ pairs from the Perguntas frequentes section only", () => {
    const blocks = parseMarkdown(
      "### Fora\n\nnão\n\n## Perguntas frequentes\n\n### Funciona?\n\nSim, veja o [gerador](/).\n\nMais texto.\n\n### Sem resposta?\n\n## Conclusão\n\nfim",
    );
    expect(faqFromBlocks(blocks)).toEqual([{ question: "Funciona?", answer: "Sim, veja o gerador. Mais texto." }]);
    expect(faqFromBlocks(parseMarkdown("## Outra\n\n### A\n\nb"))).toEqual([]);
  });

  it("estimates reading time", () => {
    expect(readingMinutes("palavra ".repeat(400))).toBe(2);
    expect(readingMinutes("oi")).toBe(1);
  });

  it("parses images with an optional caption", () => {
    expect(parseMarkdown('![Foto de um celular](/blog/a.webp "Legenda aqui")')).toEqual([
      { type: "img", alt: "Foto de um celular", src: "/blog/a.webp", caption: "Legenda aqui" },
    ]);
    expect(parseMarkdown("![Só alt](/blog/b.webp)")).toEqual([{ type: "img", alt: "Só alt", src: "/blog/b.webp" }]);
  });

  it("does not treat external or inline images as image blocks", () => {
    expect(parseMarkdown("![x](https://evil.example/a.png)")[0].type).toBe("p");
    expect(parseMarkdown("texto ![x](/a.webp)")[0].type).toBe("p");
  });
});
