"use client";

import { openCookieSettings } from "@/lib/consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-left text-ink-soft underline-offset-4 hover:text-ink hover:underline"
    >
      Configurações de cookies
    </button>
  );
}
