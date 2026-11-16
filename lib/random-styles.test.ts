import { describe, expect, it } from "vitest";
import { randomStyle, randomStyles } from "@/lib/random-styles";

const bases = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

describe("random styles", () => {
  it("is deterministic for the same text and seed", () => {
    expect(randomStyle("Letras", 42)).toBe(randomStyle("Letras", 42));
    expect(randomStyles("Letras", 1, 0, 10)).toEqual(randomStyles("Letras", 1, 0, 10));
  });

  it("gives different combinations for different seeds", () => {
    const batch = randomStyles("Letras Diferentes", 1, 0, 30);
    expect(new Set(batch).size).toBeGreaterThan(25);
  });

  it("batches continue without repeating the previous ones", () => {
    const first = randomStyles("Letras", 1, 0, 10);
    const next = randomStyles("Letras", 1, 10, 10);
    expect(first.some((s) => next.includes(s))).toBe(false);
  });

  it("returns empty or blank input unchanged", () => {
    expect(randomStyle("", 1)).toBe("");
    expect(randomStyle("   ", 1)).toBe("   ");
  });

  it("keeps accents and ç, and never breaks surrogate pairs", () => {
    for (const s of randomStyles("Ação Coração ç 😀", 7, 0, 50)) {
      const nfd = s.normalize("NFD");
      expect(nfd).toContain("̧");
      expect(nfd).toContain("̃");
      expect(s).toContain("😀");
      expect(s).not.toMatch(/[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/);
    }
  });

  it("plain accent mode keeps accented letters precomposed", () => {
    for (const s of randomStyles("Olá", 3, 0, 20)) expect(s).toContain("á");
  });

  it("keeps the words separated by the original spaces", () => {
    for (const s of randomStyles("ab cd", 9, 0, 20)) {
      expect(bases(s)).toMatch(/\S \S/);
    }
  });
});
