import { describe, expect, it } from "vitest";
import { getStyle } from "./fonts";
import { HANGUL_FILLER as H } from "./invisible";
import { buildNick, generateNicks, NICK_BATCH, NICK_CATEGORIES, nickLength, randomIdea, tagText } from "./nick";

describe("NICK_CATEGORIES", () => {
  it("only uses styles that exist", () => {
    for (const c of NICK_CATEGORIES) for (const s of c.styles) expect(() => getStyle(s)).not.toThrow();
  });
  it("has enough combinations for several batches", () => {
    for (const c of NICK_CATEGORIES) expect(c.styles.length * c.symbols.length).toBeGreaterThanOrEqual(NICK_BATCH * 4);
  });
});

describe("buildNick", () => {
  it("uses the invisible space between symbols and name by default", () => {
    expect(buildNick("Sniper", "negrito", ["乂", "乂"])).toBe(`乂${H}𝐒𝐧𝐢𝐩𝐞𝐫${H}乂`);
  });
  it("skips the separator on an empty side", () => {
    expect(buildNick("Titan", "contorno", ["", "亗"])).toBe(`𝕋𝕚𝕥𝕒𝕟${H}亗`);
  });
  it("supports no separator and ordinary spaces", () => {
    expect(buildNick("Lobo", "negrito", ["★", "★"], { separator: "nenhum" })).toBe("★𝐋𝐨𝐛𝐨★");
    expect(buildNick("Lobo", "negrito", ["★", "★"], { separator: "espaco" })).toBe("★ 𝐋𝐨𝐛𝐨 ★");
  });
  it("replaces spaces inside the name with the separator", () => {
    expect(buildNick("Lobo 77", "negrito", ["", ""])).toBe(`𝐋𝐨𝐛𝐨${H}𝟕𝟕`);
  });
  it("adds the clan tag in superscript and applies letter case", () => {
    expect(buildNick("lobo", "versalete", ["", ""], { tag: "br" })).toBe("ᴮᴿʟᴏʙᴏ");
    expect(buildNick("Lobo", "negrito", ["", ""], { letterCase: "maiusculas" })).toBe("𝐋𝐎𝐁𝐎");
  });
  it("never produces an ordinary space with the invisible separator", () => {
    for (const c of NICK_CATEGORIES)
      for (const n of generateNicks("Meu Nick", c.id, 1, {}, 60)) expect(n).not.toMatch(/ /);
  });
});

describe("generateNicks", () => {
  it("is deterministic per seed and unique", () => {
    const a = generateNicks("Lobo", "freefire", 42);
    expect(a).toEqual(generateNicks("Lobo", "freefire", 42));
    expect(a).toHaveLength(NICK_BATCH);
    expect(new Set(a).size).toBe(a.length);
    expect(generateNicks("Lobo", "freefire", 43)).not.toEqual(a);
  });
});

describe("helpers", () => {
  it("counts code points", () => {
    expect(nickLength(`乂${H}𝐋𝐨𝐛𝐨${H}乂`)).toBe(8);
  });
  it("gives an idea different from the current one", () => {
    for (let i = 0; i < 20; i++) expect(randomIdea("fofo", "Mel")).not.toBe("Mel");
  });
});

describe("tagText", () => {
  it("uses capital superscripts and falls back for letters without one", () => {
    expect(tagText("top")).toBe("ᵀᴼᴾ");
    expect(tagText("  br ")).toBe("ᴮᴿ");
    expect(tagText("")).toBe("");
    expect([...tagText("ss")]).toHaveLength(2);
  });
});
