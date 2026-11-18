import { describe, expect, it } from "vitest";
import { HANGUL_FILLER, INVISIBLE_TYPES, insertInvisible, inspectText, makeInvisible, summarizeBlanks } from "./invisible";

describe("INVISIBLE_TYPES", () => {
  it("has the right code point for every character", () => {
    for (const t of INVISIBLE_TYPES) {
      expect(t.char).toHaveLength(1);
      expect(`U+${t.char.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")}`).toBe(t.code);
    }
  });
  it("marks only zero-width and em space as not suitable for a blank name", () => {
    expect(INVISIBLE_TYPES.filter((t) => !t.blankName).map((t) => t.id)).toEqual(["em-space", "zero"]);
  });
});

describe("makeInvisible", () => {
  it("repeats the character", () => {
    expect(makeInvisible("hangul", 5)).toBe(HANGUL_FILLER.repeat(5));
    expect(makeInvisible("braille", 2)).toBe("⠀⠀");
  });
  it("clamps the count", () => {
    expect([...makeInvisible("hangul", 0)]).toHaveLength(1);
    expect([...makeInvisible("hangul", 99)]).toHaveLength(30);
  });
  it("never contains an ordinary space", () => {
    for (const t of INVISIBLE_TYPES) expect(makeInvisible(t.id, 10)).not.toMatch(/ /);
  });
});

describe("insertInvisible", () => {
  it("replaces spaces between words", () => {
    expect(insertInvisible("Lobo BR", HANGUL_FILLER)).toBe(`Lobo${HANGUL_FILLER}BR`);
    expect(insertInvisible("  O   Rei  ", HANGUL_FILLER)).toBe(`O${HANGUL_FILLER}Rei`);
  });
  it("adds the character at both ends", () => {
    expect(insertInvisible("Lobo", HANGUL_FILLER, { edges: true })).toBe(`${HANGUL_FILLER}Lobo${HANGUL_FILLER}`);
  });
  it("can keep ordinary spaces", () => {
    expect(insertInvisible("Lobo BR", HANGUL_FILLER, { replaceSpaces: false, edges: true })).toBe(
      `${HANGUL_FILLER}Lobo BR${HANGUL_FILLER}`,
    );
  });
});

describe("inspectText", () => {
  it("names invisible and space characters", () => {
    const r = inspectText(`A ${HANGUL_FILLER}​𝐁`);
    expect(r.map((c) => c.kind)).toEqual(["visible", "space", "invisible", "invisible", "visible"]);
    expect(r[2]).toMatchObject({ code: "U+3164", name: "Hangul Filler" });
    expect(r[4].code).toBe("U+1D401"); // astral characters stay whole
  });
  it("respects the limit", () => {
    expect(inspectText("abcdef", 3)).toHaveLength(3);
  });
  it("summarizes blanks", () => {
    expect(summarizeBlanks(inspectText(`${HANGUL_FILLER.repeat(4)} x`))).toEqual([
      { name: "Hangul Filler", code: "U+3164", count: 4, kind: "invisible" },
      { name: "Espaço comum", code: "U+0020", count: 1, kind: "space" },
    ]);
  });
});
