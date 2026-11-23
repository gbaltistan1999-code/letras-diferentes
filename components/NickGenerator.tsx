"use client";

import { Dices, RefreshCw } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import {
  FF_LIMIT,
  generateNicks,
  NICK_CATEGORIES,
  type NickCase,
  type NickCategoryId,
  nickLength,
  type NickSeparator,
  randomIdea,
} from "@/lib/nick";

const SAMPLE = "Lobo";
const field =
  "block w-full rounded-xl border border-line bg-paper px-4 py-3 text-lg outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-soft";
const chip = (active: boolean) =>
  `rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
    active ? "border-accent bg-accent text-on-accent" : "border-line bg-surface hover:border-ink-soft/40"
  }`;

export function NickGenerator({
  categories,
  sample = SAMPLE,
  limit = FF_LIMIT,
  limitName = "do Free Fire",
  defaultSeparator = "invisivel",
}: {
  /** Limit the category chips (the first one is selected). Default: all. */
  categories?: NickCategoryId[];
  /** Name used for the previews while the field is empty. */
  sample?: string;
  /** Length warning threshold and the name shown with it. */
  limit?: number;
  limitName?: string;
  defaultSeparator?: NickSeparator;
} = {}) {
  // Chips follow the order given in `categories`.
  const shownCategories = categories ? categories.map((id) => NICK_CATEGORIES.find((c) => c.id === id)!) : NICK_CATEGORIES;
  const [name, setName] = useState("");
  const [category, setCategory] = useState<NickCategoryId>(categories?.[0] ?? "freefire");
  const [separator, setSeparator] = useState<NickSeparator>(defaultSeparator);
  const [tag, setTag] = useState("");
  const [letterCase, setLetterCase] = useState<NickCase>("original");
  const [seed, setSeed] = useState(1);
  const nameId = useId();
  const tagId = useId();
  const sepId = useId();

  const source = name.trim() || sample;
  const nicks = useMemo(
    () => generateNicks(source, category, seed, { separator, tag, letterCase }),
    [source, category, seed, separator, tag, letterCase],
  );

  return (
    <section aria-label="Gerador de nick" className="w-full">
      <div className="rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-5">
        <label htmlFor={nameId} className="mb-2 block text-sm font-semibold">
          Seu nome ou apelido
        </label>
        <div className="flex gap-2">
          <input
            id={nameId}
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            placeholder={sample}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className={field}
          />
          <button
            type="button"
            onClick={() => setName(randomIdea(category, name.trim()))}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-line bg-paper px-3.5 text-sm font-semibold hover:border-accent"
          >
            <Dices size={18} aria-hidden />
            Ideia
          </button>
        </div>

        <fieldset className="mt-4">
          <legend className="mb-2 text-sm font-semibold">Categoria</legend>
          <div className="flex flex-wrap gap-2">
            {shownCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={category === c.id}
                onClick={() => {
                  setCategory(c.id);
                  setSeed(1);
                }}
                className={chip(category === c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </fieldset>

        <details className="group mt-4 rounded-xl border border-line bg-paper px-4 py-3">
          <summary className="cursor-pointer list-none text-sm font-semibold [&::-webkit-details-marker]:hidden">
            Ajustar detalhes <span className="font-normal text-ink-soft">(separador, tag do clã, maiúsculas)</span>
          </summary>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor={sepId} className="mb-1.5 block text-sm font-medium">
                Separador
              </label>
              <select
                id={sepId}
                value={separator}
                onChange={(e) => setSeparator(e.target.value as NickSeparator)}
                className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm"
              >
                <option value="invisivel">Espaço invisível (Free Fire)</option>
                <option value="nenhum">Sem espaço</option>
                <option value="espaco">Espaço comum</option>
              </select>
            </div>
            <div>
              <label htmlFor={tagId} className="mb-1.5 block text-sm font-medium">
                Tag do clã <span className="font-normal text-ink-soft">(opcional)</span>
              </label>
              <input
                id={tagId}
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                maxLength={5}
                placeholder="Ex.: BR"
                autoComplete="off"
                className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm"
              />
            </div>
            <fieldset>
              <legend className="mb-1.5 text-sm font-medium">Letras</legend>
              <div className="flex gap-1.5">
                {(
                  [
                    ["original", "Aa"],
                    ["maiusculas", "AA"],
                    ["minusculas", "aa"],
                  ] as const
                ).map(([value, text]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={letterCase === value}
                    aria-label={value === "original" ? "Como digitado" : value === "maiusculas" ? "Maiúsculas" : "Minúsculas"}
                    onClick={() => setLetterCase(value)}
                    className={`flex-1 rounded-lg border px-2 py-2 text-sm font-semibold ${
                      letterCase === value ? "border-accent bg-accent-soft text-accent-strong" : "border-line bg-surface"
                    }`}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </details>
      </div>

      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2" aria-label={`${nicks.length} nicks gerados`}>
        {nicks.map((nick) => {
          const len = nickLength(nick);
          return (
            <li key={nick} className="flex items-center gap-3 overflow-hidden rounded-xl border border-line bg-surface px-4 py-3">
              <div className="min-w-0 flex-1">
                <p aria-hidden className="py-1.5 text-xl leading-[2.1] [overflow-wrap:anywhere]">
                  {nick}
                </p>
                <p className={`text-xs ${len > limit ? "font-medium text-amber-700 dark:text-amber-400" : "text-ink-soft"}`}>
                  {len} caracteres{len > limit ? `: pode passar do limite ${limitName}` : ""}
                </p>
              </div>
              <CopyButton text={nick} label={`Copiar nick ${source}, ${len} caracteres`} />
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => setSeed((s) => s + 1)}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ink text-sm font-semibold text-paper transition-opacity hover:opacity-90"
      >
        <RefreshCw size={18} aria-hidden />
        Gerar mais
      </button>
    </section>
  );
}
