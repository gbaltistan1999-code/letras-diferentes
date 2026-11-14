"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { applyTheme, savedTheme, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = () => (document.documentElement.getAttribute("data-theme") as Theme | null) ?? "light";

/** Switches between light and dark. Follows the system until the visitor picks one. */
export function ThemeToggle() {
  // null on the server: the real theme is only known in the browser.
  const theme = useSyncExternalStore(subscribe, getTheme, () => null);

  // Keep following the system setting while no explicit choice is saved.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (!savedTheme()) applyTheme(media.matches ? "dark" : "light", false);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const isDark = theme === "dark";
  const label = isDark ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <button
      type="button"
      onClick={() => applyTheme(isDark ? "light" : "dark", true)}
      aria-label={theme ? label : "Alternar tema"}
      title={theme ? label : undefined}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-warm hover:text-ink"
    >
      {/* Both icons render on the server; CSS shows the right one before hydration. */}
      <Sun size={19} aria-hidden className="hidden dark:block" />
      <Moon size={19} aria-hidden className="block dark:hidden" />
    </button>
  );
}
