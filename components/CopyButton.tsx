"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { copyText } from "@/lib/clipboard";

/** Announces copy results to screen readers through one shared live region. */
function announce(message: string) {
  const region = document.getElementById("copy-status");
  if (!region) return;
  region.textContent = "";
  // Re-setting after a tick makes repeated identical messages announce again.
  window.setTimeout(() => {
    region.textContent = message;
  }, 50);
}

export function CopyButton({ text, label }: { text: string; label: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleClick() {
    const ok = await copyText(text);
    setState(ok ? "copied" : "error");
    announce(ok ? "Copiado!" : "Não foi possível copiar. Selecione o texto e copie manualmente.");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 1600);
  }

  const copied = state === "copied";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={`inline-flex h-10 min-w-[6.5rem] shrink-0 items-center justify-center gap-1.5 rounded-lg px-3 text-sm font-semibold transition-colors ${
        copied
          ? "bg-accent text-white"
          : state === "error"
            ? "bg-red-50 text-red-800"
            : "bg-accent-soft text-accent-strong hover:bg-accent hover:text-white"
      }`}
    >
      {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
      <span aria-hidden>{copied ? "Copiado!" : state === "error" ? "Erro" : "Copiar"}</span>
    </button>
  );
}

/** Polite live region used by every CopyButton. Render once per page (in the layout). */
export function CopyStatus() {
  return <p id="copy-status" role="status" aria-live="polite" className="sr-only" />;
}
