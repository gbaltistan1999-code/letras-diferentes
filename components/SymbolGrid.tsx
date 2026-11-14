"use client";

import { useState } from "react";
import { copyText } from "@/lib/clipboard";

/** Grid of one-tap copyable symbols. Uses the shared #copy-status live region. */
export function SymbolGrid({ groups }: { groups: { title: string; symbols: string[] }[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(symbol: string) {
    const ok = await copyText(symbol);
    setCopied(ok ? symbol : null);
    const region = document.getElementById("copy-status");
    if (region) region.textContent = ok ? `Símbolo ${symbol} copiado!` : "Não foi possível copiar.";
    window.setTimeout(() => setCopied((c) => (c === symbol ? null : c)), 1400);
  }

  return (
    <section aria-labelledby="simbolos-lista" className="mt-2">
      <h2 id="simbolos-lista" className="sr-only">
        Lista de símbolos
      </h2>
      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2.5 text-sm font-semibold uppercase tracking-wide text-ink-soft">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.symbols.map((symbol) => {
                const isCopied = copied === symbol;
                return (
                  <li key={symbol}>
                    <button
                      type="button"
                      onClick={() => copy(symbol)}
                      aria-label={`Copiar ${symbol}`}
                      className={`inline-flex h-12 min-w-12 items-center justify-center rounded-lg border px-2.5 font-[family-name:var(--font-symbols)] text-xl transition-colors ${
                        isCopied
                          ? "border-accent bg-accent text-on-accent"
                          : "border-line bg-surface hover:border-accent"
                      }`}
                    >
                      {isCopied ? <span className="text-xs font-semibold font-sans">Copiado!</span> : symbol}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
