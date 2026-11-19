import { describe, expect, it } from "vitest";
import {
  AESTHETIC_PRESETS,
  applyAesthetic,
  isValidUsername,
  suggestUsernames,
  tiktokLength,
  usernameWords,
} from "@/lib/tiktok";

describe("tiktokLength", () => {
  it("counts styled astral letters as 2", () => {
    expect(tiktokLength("abc")).toBe(3);
    expect(tiktokLength("𝓜𝓪")).toBe(4);
  });
});

describe("applyAesthetic", () => {
  const nuvem = AESTHETIC_PRESETS.find((p) => p.id === "nuvem")!;
  it("styles and decorates, joining words with the preset separator", () => {
    expect(applyAesthetic("dance make", nuvem)).toBe("˚₊‧꒰ა ᴅᴀɴᴄᴇ · ᴍᴀᴋᴇ ໒꒱ ‧₊˚");
  });
  it("returns empty for blank text", () => {
    for (const p of AESTHETIC_PRESETS) expect(applyAesthetic("   ", p)).toBe("");
  });
  it("every preset produces output", () => {
    for (const p of AESTHETIC_PRESETS) expect(applyAesthetic("Oi", p).length).toBeGreaterThan(0);
  });
});

describe("usernames", () => {
  it("validates TikTok @ rules", () => {
    expect(isValidUsername("mari.ana")).toBe(true);
    expect(isValidUsername("a")).toBe(false);
    expect(isValidUsername("mariana.")).toBe(false);
    expect(isValidUsername("Mariana")).toBe(false);
    expect(isValidUsername("x".repeat(25))).toBe(false);
  });
  it("turns styled letters and accents into plain words", () => {
    expect(usernameWords("𝓜𝓪𝓻𝓲𝓪𝓷𝓪 Conceição ✿")).toEqual(["mariana", "conceicao"]);
  });
  it("suggests valid @s like the examples", () => {
    const s = suggestUsernames("Mariana");
    expect(s).toEqual(expect.arrayContaining(["mariana", "mari.ana", "mariana_", "mariana.oficial"]));
    for (const u of s) expect(isValidUsername(u)).toBe(true);
  });
  it("uses dots and underscores between words", () => {
    expect(suggestUsernames("Ana Paula")).toEqual(expect.arrayContaining(["anapaula", "ana.paula", "ana_paula"]));
  });
  it("long names get short combos, never cut-off suffixes", () => {
    const s = suggestUsernames("Maria Eduarda Conceição Albuquerque");
    for (const u of s) expect(isValidUsername(u)).toBe(true);
    expect(s).toEqual(expect.arrayContaining(["maria.albuquerque", "mariaeduarda", "maria.eduarda"]));
    expect(s.some((u) => /\.(o|of|ofi|ofic|tik)$/.test(u))).toBe(false);
  });
  it("a single very long word is cut to 24", () => {
    expect(suggestUsernames("a".repeat(40))).toEqual(["a".repeat(24)]);
  });
  it("returns nothing when no letters are usable", () => {
    expect(suggestUsernames("✿ ♡ 🎀")).toEqual([]);
  });
});
