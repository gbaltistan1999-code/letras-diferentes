"use client";

import { Lock, X } from "lucide-react";
import { useDeferredValue, useId, useMemo, useRef, useState } from "react";
import { ResultCard } from "@/components/ResultCard";
import { getStyle } from "@/lib/fonts";
import type { TattooFont } from "@/lib/tattoo-fonts";

const MAX_LENGTH = 60;
const DEFAULT_TEXT = "Família";

const IDEAS = [
  "Família", "Gratidão", "Fé", "Força e Honra", "Seja Luz", "Viva sem arrependimentos",
  "Deus é fiel", "Liberdade", "Resiliência", "Carpe Diem", "Amor de mãe", "15.08.2020",
];

/** Unicode styles shown in the copy tab, with tattoo-oriented labels. */
const UNICODE_STYLES = [
  { id: "gotica", label: "Gótica (Old English / Fraktur)" },
  { id: "gotica-negrito", label: "Gótica Negrito" },
  { id: "cursiva", label: "Cursiva" },
  { id: "cursiva-negrito", label: "Cursiva Negrito" },
  { id: "negrito-italico", label: "Itálico Clássico" },
  { id: "negrito", label: "Romana Negrito" },
  { id: "sem-serifa", label: "Minimalista" },
  { id: "italico-sem-serifa", label: "Minimalista Itálico" },
  { id: "monoespacada", label: "Máquina de Escrever" },
  { id: "contorno", label: "Contorno" },
] as const;

type Tab = "copiar" | "visualizar";
const TABS: { id: Tab; label: string }[] = [
  { id: "copiar", label: "Copiar e colar" },
  { id: "visualizar", label: "Visualizar como tatuagem" },
];

export function TattooGenerator({ fonts }: { fonts: TattooFont[] }) {
  const id = useId();
  const [text, setText] = useState(DEFAULT_TEXT);
  const [tab, setTab] = useState<Tab>("copiar");
  const [size, setSize] = useState(44);
  // Accented letters styled with combining accents by default (tattoo previews
  // usually need the whole word styled); the checkbox falls back to plain letters.
  const [styleAccents, setStyleAccents] = useState(true);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const deferred = useDeferredValue(text);
  const typed = deferred.trim() !== "";
  const source = typed ? deferred : DEFAULT_TEXT;

  const results = useMemo(() => {
    const options = { accents: styleAccents ? "combine" : "plain" } as const;
    return UNICODE_STYLES.map((s) => ({ ...s, output: getStyle(s.id).transform(source, options) }));
  }, [source, styleAccents]);

  function onTabKey(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length;
    setTab(TABS[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section aria-label="Gerador de letras para tatuagem" className="w-full">
      <div className="rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-5">
        <label htmlFor={`${id}-texto`} className="mb-2 block text-sm font-semibold">
          Digite o nome, data ou frase da tatuagem
        </label>
        <div className="relative">
          <input
            id={`${id}-texto`}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={MAX_LENGTH}
            placeholder="Ex: Família, Gratidão, 15.08.2020"
            autoComplete="off"
            spellCheck={false}
            aria-describedby={`${id}-dica`}
            className="block h-14 w-full rounded-xl border border-line bg-paper px-4 pr-12 text-lg outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-soft"
          />
          {text && (
            <button
              type="button"
              onClick={() => setText("")}
              aria-label="Limpar texto"
              className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-ink-soft hover:bg-warm hover:text-ink"
            >
              <X size={18} aria-hidden />
            </button>
          )}
        </div>
        <div id={`${id}-dica`} className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <Lock size={13} aria-hidden />
            O texto é convertido no seu navegador e não é enviado nem salvo.
          </span>
          <span>
            {text.length}/{MAX_LENGTH}
          </span>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">Ideias</p>
          <ul className="flex flex-wrap gap-2">
            {IDEAS.map((idea) => (
              <li key={idea}>
                <button
                  type="button"
                  onClick={() => setText(idea)}
                  aria-pressed={text === idea}
                  className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    text === idea
                      ? "border-accent bg-accent-soft text-accent-strong"
                      : "border-line bg-surface text-ink-soft hover:border-accent hover:text-ink"
                  }`}
                >
                  {idea}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div role="tablist" aria-label="Modo de visualização" className="mt-5 grid grid-cols-2 gap-1 rounded-xl border border-line bg-warm p-1">
        {TABS.map((t, i) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${t.id}`}
              aria-selected={active}
              aria-controls={`${id}-painel-${t.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setTab(t.id)}
              onKeyDown={(e) => onTabKey(e, i)}
              className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                active ? "bg-surface text-ink shadow-sm" : "text-ink-soft hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Unicode styles to copy */}
      <div
        role="tabpanel"
        id={`${id}-painel-copiar`}
        aria-labelledby={`${id}-tab-copiar`}
        hidden={tab !== "copiar"}
        className="mt-4"
      >
        <label className="mb-3 flex cursor-pointer items-start gap-2.5 text-sm text-ink-soft">
          <input
            type="checkbox"
            checked={!styleAccents}
            onChange={(e) => setStyleAccents(!e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
          />
          <span>
            Acento aparecendo fora do lugar? Marque para deixar as letras acentuadas (á, ã, ç…) na
            forma normal.
          </span>
        </label>
        <ul className="grid gap-2.5" aria-label="Estilos de letras para tatuagem">
          {results.map((r) => (
            <ResultCard key={r.id} name={r.label} output={r.output} plain={typed ? source : undefined} />
          ))}
        </ul>
      </div>

      {/* Tab 2: real fonts on a skin-tone background */}
      <div
        role="tabpanel"
        id={`${id}-painel-visualizar`}
        aria-labelledby={`${id}-tab-visualizar`}
        hidden={tab !== "visualizar"}
        className="mt-4"
      >
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
          <label htmlFor={`${id}-tamanho`} className="shrink-0 text-sm font-medium">
            Tamanho
          </label>
          <input
            id={`${id}-tamanho`}
            type="range"
            min={24}
            max={80}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full accent-[var(--color-accent)]"
          />
          <span className="w-12 shrink-0 text-right text-sm tabular-nums text-ink-soft">{size}px</span>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {fonts.map((f) => (
            <li key={f.id} className="overflow-hidden rounded-xl border border-line">
              <div className="flex min-h-36 items-center justify-center bg-[#e9d3c0] px-4 py-6">
                <p
                  className={`${f.className} text-center leading-tight text-[#1f1d1c] [overflow-wrap:anywhere]`}
                  style={{ fontSize: `${size}px` }}
                >
                  {source}
                </p>
              </div>
              <p className="flex items-center justify-between gap-2 bg-surface px-4 py-2.5 text-sm">
                <span className="font-semibold">{f.label}</span>
                <span className="text-xs text-ink-soft">{f.font}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-xl bg-accent-soft px-4 py-3 text-sm text-accent-strong">
          <strong>Dica:</strong> tire um print da fonte que você gostou e mostre ao seu tatuador. Ele
          pode ajustar o desenho das letras ao tamanho e ao local da tatuagem.
        </p>
      </div>
    </section>
  );
}
