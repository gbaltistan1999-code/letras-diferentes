import { afterEach, describe, expect, it } from "vitest";
import { FAVORITES_STORAGE_KEY, readFavorites, toggleFavorite, writeFavorites } from "@/lib/favorites";

const store = new Map<string, string>();
Object.defineProperty(globalThis, "window", {
  value: {
    localStorage: {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    },
  },
  configurable: true,
});

afterEach(() => store.clear());

describe("favorites", () => {
  it("toggles ids", () => {
    expect(toggleFavorite([], "negrito")).toEqual(["negrito"]);
    expect(toggleFavorite(["negrito", "cursiva"], "negrito")).toEqual(["cursiva"]);
  });
  it("saves, reads back and clears", () => {
    writeFavorites(["cursiva", "gotica"]);
    expect(readFavorites()).toEqual(["cursiva", "gotica"]);
    writeFavorites([]);
    expect(store.has(FAVORITES_STORAGE_KEY)).toBe(false);
  });
  it("ignores broken or foreign data", () => {
    store.set(FAVORITES_STORAGE_KEY, "{not json");
    expect(readFavorites()).toEqual([]);
    store.set(FAVORITES_STORAGE_KEY, JSON.stringify(["ok", 3, null]));
    expect(readFavorites()).toEqual(["ok"]);
  });
});
