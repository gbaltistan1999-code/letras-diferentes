import { describe, expect, it } from "vitest";
import { hubGroups } from "@/data/hub";
import { navPages } from "@/data/style-pages";
import { getStyle } from "@/lib/fonts";

describe("estilos-de-letras hub", () => {
  const slugs = hubGroups.flatMap((g) => g.items.map((i) => i.slug));

  it("lists every page in the menu exactly once", () => {
    expect([...slugs].sort()).toEqual(navPages.map((p) => p.slug).sort());
  });

  it("uses real style ids for the previews", () => {
    for (const item of hubGroups.flatMap((g) => g.items)) expect(() => getStyle(item.example)).not.toThrow();
  });
});
