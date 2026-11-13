"use client";

import { Lock, X } from "lucide-react";
import { useDeferredValue, useId, useMemo, useState } from "react";
import { ResultCard } from "@/components/ResultCard";
import { CATEGORIES, selectStyles } from "@/lib/fonts";
import type { CategoryId } from "@/types";

const MAX_LENGTH = 300;

interface GeneratorProps {
  /** Text used for the previews while the input is empty. */
  sampleText: string;
  categories?: CategoryId[];
  styleIds?: string[];
  /** Show category filter chips (only useful when several categories are present). */
  showFilter?: boolean;
  label?: string;
}

export function Generator({
  sampleText,
  categories,
  styleIds,
  showFilter = true,
  label = "Digite seu texto",
}: GeneratorProps) {
  const inputId = useId();
  const hintId = useId();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<CategoryId | "todos">("todos");
  // Off by default: accented letters stay plain so they display correctly everywhere.
  const [styleAccents, setStyleAccents] = useState(false);

  // Keep typing responsive on slow phones: results render from a deferred value.
  const deferredText = useDeferredValue(text);
  const source = deferredText.trim() === "" ? sampleText : deferredText;

  const styles = useMemo(() => selectStyles({ categories, styleIds }), [categories, styleIds]);
  const availableCategories = useMemo(
    () => CATEGORIES.filter((c) => styles.some((s) => s.category === c.id)),
    [styles],
  );
  const visible = filter === "todos" ? styles : styles.filter((s) => s.category === filter);

  const results = useMemo(() => {
    const options = { accents: styleAccents ? "combine" : "plain" } as const;
    return visible.map((style) => ({ id: style.id, name: style.name, output: style.transform(source, options) }));
  }, [visible, source, styleAccents]);

  return (
    <section aria-label="Gerador de letras" className="w-full">
      <div className="rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-5">
        <label htmlFor={inputId} className="mb-2 block text-sm font-semibold">
          {label}
        </label>
        <div className="relative">
          <textarea
            id={inputId}
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={MAX_LENGTH}
            rows={2}
            placeholder={sampleText}
            aria-describedby={hintId}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="block w-full resize-y rounded-xl border border-line bg-paper px-4 py-3 pr-12 text-lg outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-soft"
          />
          {text && (
            <button
              type="button"
              onClick={() => setText("")}
              aria-label="Limpar texto"
              className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-warm hover:text-ink"
            >
              <X size={18} aria-hidden />
            </button>
          )}
        </div>
        <div id={hintId} className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <Lock size={13} aria-hidden />
            Seu texto é convertido no seu navegador e não é enviado nem salvo.
          </span>
          <span>
            {text.length}/{MAX_LENGTH}
          </span>
        </div>
        <label className="mt-3 flex cursor-pointer items-start gap-2.5 border-t border-line pt-3 text-sm">
          <input
            type="checkbox"
            checked={styleAccents}
            onChange={(e) => setStyleAccents(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
          />
          <span>
            <span className="font-medium">Estilizar também as letras com acento (á, ã, ç…)</span>
            <span className="block text-xs text-ink-soft">
              Desligado, as letras acentuadas ficam normais e aparecem certas em qualquer aparelho.
              Ligado, todas as letras são estilizadas, mas em alguns aparelhos (como no Windows) o
              acento pode aparecer ao lado da letra.
            </span>
          </span>
        </label>
      </div>

      {showFilter && availableCategories.length > 1 && (
        <div role="group" aria-label="Filtrar estilos por categoria" className="mt-4 flex flex-wrap gap-2">
          {[{ id: "todos" as const, label: "Todos" }, ...availableCategories].map((cat) => {
            const active = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(cat.id)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  active
                    ? "border-accent bg-accent text-white"
                    : "border-line bg-surface text-ink-soft hover:border-accent hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      <ul className="mt-4 grid gap-2.5" aria-label={`${results.length} estilos de letras`}>
        {results.map((r) => (
          <ResultCard key={r.id} name={r.name} output={r.output} plain={source} />
        ))}
      </ul>
    </section>
  );
}
