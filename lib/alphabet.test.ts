import { describe, expect, it } from "vitest";
import { ALPHABET_GROUPS, ALPHABET_STYLES, alphabetRows } from "@/lib/alphabet";
import { getStyle } from "@/lib/fonts";

describe("alphabet page data", () => {
  it("uses real, unique styles", () => {
    const ids = ALPHABET_STYLES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(() => getStyle(id)).not.toThrow();
    expect(ALPHABET_GROUPS.every((g) => g.styles.length > 0)).toBe(true);
  });

  it("gives 26 styled letters per row and 10 digits", () => {
    for (const { id } of ALPHABET_STYLES) {
      for (const row of alphabetRows(id)) {
        expect(row.chars).toHaveLength(row.id === "numeros" ? 10 : 26);
        expect(row.chars.every((c) => c.length > 0 && c.trim() === c)).toBe(true);
      }
    }
  });

  it("splits capitals and lowercase only when they differ", () => {
    expect(alphabetRows("cursiva-negrito").map((r) => r.id)).toEqual(["maiusculas", "minusculas"]);
    expect(alphabetRows("cursiva-negrito")[0].chars[0]).toBe("𝓐");
    expect(alphabetRows("versalete").map((r) => r.id)).toEqual(["letras"]);
    expect(alphabetRows("bolhas").map((r) => r.id)).toEqual(["maiusculas", "minusculas", "numeros"]);
    expect(alphabetRows("bolhas")[2].chars.join("")).toBe("⓪①②③④⑤⑥⑦⑧⑨");
  });
});

describe("alphabet page copy", () => {
  it("states the real style count", async () => {
    const { alphabetPage } = await import("@/data/style-pages");
    expect(alphabetPage.description).toContain(`${ALPHABET_STYLES.length} estilos`);
  });
});
