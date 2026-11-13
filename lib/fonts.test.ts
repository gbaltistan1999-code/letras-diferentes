import { describe, expect, it } from "vitest";
import { CATEGORIES, getStyle, MAPS, selectStyles, STYLES, toClusters } from "@/lib/fonts";

const t = (id: string, text: string) => getStyle(id).transform(text);

/** Strip combining marks so we can compare base characters. */
const bases = (text: string) => text.normalize("NFD").replace(/[̀-ͯ]/g, "");

const PT_ACCENTS = "ãõâêôáéíóúàüç ÃÕÂÊÔÁÉÍÓÚÀÜÇ";

describe("style list", () => {
  it("has at least 30 styles with unique ids", () => {
    expect(STYLES.length).toBeGreaterThanOrEqual(30);
    expect(new Set(STYLES.map((s) => s.id)).size).toBe(STYLES.length);
  });

  it("every style belongs to a known category and every category has styles", () => {
    const ids = new Set(CATEGORIES.map((c) => c.id));
    for (const style of STYLES) expect(ids.has(style.category)).toBe(true);
    for (const cat of CATEGORIES) {
      expect(STYLES.some((s) => s.category === cat.id)).toBe(true);
    }
  });

  it("selectStyles filters by category and by id", () => {
    expect(selectStyles({ categories: ["goticas"] }).map((s) => s.id)).toEqual([
      "gotica",
      "gotica-negrito",
    ]);
    expect(selectStyles({ styleIds: ["riscado", "negrito"] }).map((s) => s.id)).toEqual([
      "riscado",
      "negrito",
    ]);
    expect(selectStyles()).toBe(STYLES);
    expect(() => getStyle("nao-existe")).toThrow();
  });
});

describe.each(STYLES.map((s) => [s.id, s] as const))("style %s", (_id, style) => {
  it("changes plain Latin text", () => {
    expect(style.transform("Letras Diferentes")).not.toBe("Letras Diferentes");
  });

  it("returns empty output for empty input", () => {
    expect(style.transform("")).toBe("");
  });

  it.each(["plain", "combine"] as const)("never drops Portuguese accents or ç (%s)", (accents) => {
    const out = style.transform(PT_ACCENTS, { accents }).normalize("NFD");
    for (const mark of ["̃", "̂", "́", "̀", "̈", "̧"]) {
      expect(out, `missing mark U+${mark.codePointAt(0)!.toString(16)}`).toContain(mark);
    }
  });

  it("plain mode (default) keeps accented letters as precomposed characters", () => {
    const out = style.transform("ãéç");
    expect(out).toContain("ã");
    expect(out).toContain("é");
    expect(out).toContain("ç");
  });

  it("keeps emojis intact (no broken surrogate pairs)", () => {
    const out = style.transform("oi 😀 👍🏽");
    expect(out).toContain("😀");
    expect(out).toContain("👍🏽");
    expect(out).not.toMatch(/[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/);
  });

  it("handles long input quickly", () => {
    const long = "Olá, coração! 123 ".repeat(200);
    const start = performance.now();
    const out = style.transform(long);
    expect(out.length).toBeGreaterThan(0);
    expect(performance.now() - start).toBeLessThan(200);
  });
});

describe("clusters", () => {
  it("splits accented letters into base + marks", () => {
    expect(toClusters("ção")).toEqual(["ç", "ã", "o"]);
  });

  it("keeps emoji sequences together", () => {
    expect(toClusters("👍🏽👨‍👩‍👧🇧🇷")).toEqual(["👍🏽", "👨‍👩‍👧", "🇧🇷"]);
  });
});

describe("specific outputs", () => {
  it("bold", () => {
    expect(t("negrito", "Ab9")).toBe("𝐀𝐛𝟗");
  });

  it("accent modes", () => {
    expect(t("negrito", "Olá")).toBe("𝐎𝐥á");
    expect(getStyle("negrito").transform("Olá", { accents: "combine" })).toBe("𝐎𝐥𝐚́");
    expect(getStyle("negrito").transform("ç", { accents: "combine" })).toBe("𝐜̧");
    expect(t("moldura-classica", "pão")).toBe("꧁༺ 𝓹ã𝓸 ༻꧂");
    expect(getStyle("moldura-classica").transform("pão", { accents: "combine" })).toBe("꧁༺ 𝓹𝓪̃𝓸 ༻꧂");
  });

  it("fills reserved code points in script", () => {
    expect(t("cursiva", "BEFHILMR")).toBe("ℬℰℱℋℐℒℳℛ");
    expect(t("cursiva", "ego")).toBe("ℯℊℴ");
    expect(t("cursiva", "a")).toBe("𝒶");
  });

  it("fills reserved code points in fraktur", () => {
    expect(t("gotica", "CHIRZ")).toBe("ℭℌℑℜℨ");
    expect(t("gotica", "A")).toBe("𝔄");
  });

  it("fills reserved code points in double-struck", () => {
    expect(t("contorno", "CHNPQRZ")).toBe("ℂℍℕℙℚℝℤ");
    expect(t("contorno", "A1")).toBe("𝔸𝟙");
  });

  it("fills the reserved italic h", () => {
    expect(t("italico", "h")).toBe("ℎ");
  });

  it("no style maps to a reserved (unassigned) math code point", () => {
    const reserved = [
      0x1d455, 0x1d49d, 0x1d4a0, 0x1d4a1, 0x1d4a3, 0x1d4a4, 0x1d4a7, 0x1d4a8, 0x1d4ad,
      0x1d4ba, 0x1d4bc, 0x1d4c4, 0x1d506, 0x1d50b, 0x1d50c, 0x1d515, 0x1d51d, 0x1d53a,
      0x1d53f, 0x1d545, 0x1d547, 0x1d548, 0x1d549, 0x1d551,
    ].map((n) => String.fromCodePoint(n));
    const all = UPPER_LOWER;
    for (const style of STYLES) {
      const out = style.transform(all);
      for (const r of reserved) expect(out, style.id).not.toContain(r);
    }
  });

  it("leaves numbers, spaces and punctuation alone where a style has no mapping", () => {
    expect(t("cursiva", "a 1, b!")).toBe("𝒶 1, 𝒷!");
    expect(t("gotica-negrito", "x?7")).toBe("𝖝?7");
  });

  it("small caps", () => {
    expect(t("versalete", "Nick")).toBe("ɴɪᴄᴋ");
  });

  it("bubbles and squares", () => {
    expect(t("bolhas", "Ab1")).toBe("Ⓐⓑ①");
    expect(t("quadrados", "ab")).toBe("🄰🄱");
    expect(t("quadrados-pretos", "ab")).toBe("🅰🅱");
  });

  it("strikethrough skips spaces and keeps accents", () => {
    expect(t("riscado", "a b")).toBe("a̶ b̶");
    expect(t("riscado", "ã")).toBe("ã̶");
  });

  it("upside down reverses and keeps accents attached to their letter", () => {
    expect(t("de-cabeca-para-baixo", "abc")).toBe("ɔqɐ");
    expect(t("de-cabeca-para-baixo", "não")).toBe("oãu");
    expect(getStyle("de-cabeca-para-baixo").transform("não", { accents: "combine" })).toBe("oɐ̃u");
    expect(t("de-cabeca-para-baixo", "a👍🏽")).toBe("👍🏽ɐ");
  });

  it("decorative wrappers wrap styled text and skip blank input", () => {
    expect(t("moldura-classica", "ab")).toBe("꧁༺ 𝓪𝓫 ༻꧂");
    expect(t("moldura-classica", "   ")).toBe("   ");
  });

  it("fullwidth", () => {
    expect(t("largura-total", "a b!")).toBe("ａ　ｂ！");
  });

  it("spaced keeps accented letters composed", () => {
    expect(t("espacado", "pão")).toBe("p ã o");
  });

  it("subscript maps only supported letters", () => {
    expect(t("subscrito", "abc2")).toBe("ₐbc₂");
  });

  it("all maps cover every letter they claim", () => {
    expect(Object.keys(MAPS.bold)).toHaveLength(62);
    expect(Object.keys(MAPS.smallCaps)).toHaveLength(52);
  });
});

const UPPER_LOWER = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

describe("helpers", () => {
  it("bases() strips marks (sanity check for test helper)", () => {
    expect(bases("ação")).toBe("acao");
  });
});
