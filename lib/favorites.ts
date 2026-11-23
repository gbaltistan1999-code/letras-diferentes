/**
 * Favorite styles (the ♡ on each result card). Kept only in the visitor's own
 * browser (localStorage) — never sent anywhere. Listed in the cookie policy.
 */
export const FAVORITES_STORAGE_KEY = "ld-favoritos";

export function readFavorites(): string[] {
  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function writeFavorites(ids: string[]): void {
  try {
    if (ids.length) window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));
    else window.localStorage.removeItem(FAVORITES_STORAGE_KEY);
  } catch {
    // Private mode or blocked storage: favorites just last until the page closes.
  }
}

/** Adds the id if missing, removes it if present. */
export function toggleFavorite(ids: string[], id: string): string[] {
  return ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
}
