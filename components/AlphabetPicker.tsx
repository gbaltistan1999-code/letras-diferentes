"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { ALPHABET_GROUPS, alphabetRows, type AlphabetRow } from "@/lib/alphabet";
import { copyText } from "@/lib/clipboard";

function announce(message: string) {
  const region = document.getElementById("copy-status");
  if (!region) return;
  region.textContent = "";
  window.setTimeout(() => {
    region.textContent = message;
  }, 50);
}

/**
 * Pick a style, tap a letter to copy it. Tapped letters also collect in a bar,
 * so a word can be built one letter at a time and copied at once.
 */
export function AlphabetPicker() {
  const [styleId, setStyleId] = useState("cursiva-negrito");
  const rows = useMemo(() => alphabetRows(styleId), [styleId]);
  const [rowId, setRowId] = useState<AlphabetRow["id"]>("maiusculas");
  const row = rows.find((r) => r.id === rowId) ?? rows[0];
  const [word, setWord] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function pick(char: string, index: number) {
    const ok = await copyText(char);
    announce(ok ? `${char} copiada` : "Não foi possível copiar.");
    setWord((w) => [...w, char]);
    setCopied(index);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(null), 1000);
  }

  const text = word.join("");

  return (
    <section aria-label="Copiar letra por letra" className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex-1 text-sm font-medium">
          Estilo
          <select
            value={styleId}
            onChange={(e) => setStyleId(e.target.value)}
            className="mt-1 block h-11 w-full rounded-lg border border-line bg-paper px-3 text-base text-ink"
          >
            {ALPHABET_GROUPS.map((g) => (
              <optgroup key={g.id} label={g.heading}>
                {g.styles.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <div role="group" aria-label="Tipo de caractere" className="flex gap-1.5">
          {rows.map((r) => (
            <button
              key={r.id}
              type="button"
              aria-pressed={r.id === row.id}
              onClick={() => setRowId(r.id)}
              className={`h-11 rounded-lg px-3 text-sm font-medium transition-colors ${
                r.id === row.id ? "bg-ink text-paper" : "border border-line text-ink-soft hover:text-ink"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-soft">Toque em uma letra para copiar:</p>
      <ul className="mt-2 grid grid-cols-6 gap-1.5 sm:grid-cols-9" aria-label={`${row.label} no estilo escolhido`}>
        {row.chars.map((char, i) => (
          <li key={`${styleId}-${row.id}-${i}`}>
            <button
              type="button"
              onClick={() => pick(char, i)}
              aria-label={`Copiar ${char}`}
              className={`flex h-12 w-full items-center justify-center rounded-lg border font-[family-name:var(--font-symbols)] text-xl transition-colors ${
                copied === i ? "border-accent bg-accent text-on-accent" : "border-line bg-paper text-ink hover:border-accent"
              }`}
            >
              {char}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-dashed border-line px-3 py-2">
        <p className="min-w-0 flex-1 font-[family-name:var(--font-symbols)] text-lg text-ink [overflow-wrap:anywhere]" aria-live="polite">
          {text || <span className="font-sans text-sm text-ink-soft">As letras que você tocar aparecem aqui.</span>}
        </p>
        {word.length > 0 && (
          <>
            <button
              type="button"
              onClick={() => setWord((w) => w.slice(0, -1))}
              aria-label="Apagar última letra"
              className="h-10 rounded-lg px-2 text-sm text-ink-soft hover:text-ink"
            >
              ⌫
            </button>
            <button
              type="button"
              onClick={() => setWord((w) => [...w, " "])}
              className="h-10 rounded-lg px-2 text-sm text-ink-soft hover:text-ink"
            >
              Espaço
            </button>
            <CopyButton text={text} label="Copiar todas as letras" idleText="Copiar" />
          </>
        )}
      </div>
    </section>
  );
}
