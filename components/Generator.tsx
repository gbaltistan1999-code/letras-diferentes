"use client";

import { Heart, Lock, Plus, Shuffle, X } from "lucide-react";
import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import { ResultCard } from "@/components/ResultCard";
import { readFavorites, toggleFavorite, writeFavorites } from "@/lib/favorites";
import { CATEGORIES, selectStyles } from "@/lib/fonts";
import { randomStyles } from "@/lib/random-styles";
import type { CategoryId } from "@/types";

const MAX_LENGTH = 300;

interface GeneratorProps {
  /** Text used for the previews while the input is empty. */
  sampleText: string;
  categories?: CategoryId[];
  styleIds?: string[];
  /** Show category filter chips (only useful when several categories are present). */
  showFilter?: boolean;
  /** Show styles from these categories first (others keep their order after). */
  categoryOrder?: CategoryId[];
  /** Show the "Estilos aleatórios" section with endless random combinations. */
  showRandom?: boolean;
  label?: string;
  /** Wide layout (homepage): results in up to 3 columns, input centered. */
  wide?: boolean;
}

/**
 * Cards laid out on first load. The rest are in the HTML (search engines read
 * them) but display:none until the visitor scrolls near the end: laying out
 * every card on load was the slowest part of the page on phones.
 */
const INITIAL_CARDS = 18;
const RANDOM_BATCH = 10;
const RANDOM_MAX = 200;

export function Generator({
  sampleText,
  categories,
  styleIds,
  showFilter = true,
  categoryOrder,
  showRandom = false,
  label = "Digite seu texto",
  wide = false,
}: GeneratorProps) {
  const inputId = useId();
  const hintId = useId();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<CategoryId | "todos" | "favoritos">("todos");
  // Read after mount so the server render and the first client render match.
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => setFavorites(readFavorites()), []);
  const onToggleFavorite = (id: string) =>
    setFavorites((prev) => {
      const next = toggleFavorite(prev, id);
      writeFavorites(next);
      return next;
    });
  // Off by default: accented letters stay plain so they display correctly everywhere.
  const [styleAccents, setStyleAccents] = useState(false);

  // Keep typing responsive on slow phones: results render from a deferred value.
  const deferredText = useDeferredValue(text);
  const isSample = deferredText.trim() === "";
  const source = isSample ? sampleText : deferredText;

  const styles = useMemo(() => {
    const selected = selectStyles({ categories, styleIds });
    if (!categoryOrder?.length) return selected;
    const rank = (c: CategoryId) => {
      const i = categoryOrder.indexOf(c);
      return i === -1 ? categoryOrder.length : i;
    };
    // Array.prototype.sort is stable, so styles keep their order within a category.
    return [...selected].sort((a, b) => rank(a.category) - rank(b.category));
  }, [categories, styleIds, categoryOrder]);
  const availableCategories = useMemo(() => {
    const present = CATEGORIES.filter((c) => styles.some((s) => s.category === c.id));
    // Filter chips follow the same order as the results.
    return [...new Map(styles.map((s) => [s.category, present.find((c) => c.id === s.category)!])).values()];
  }, [styles]);
  const favoriteStyles = styles.filter((s) => favorites.includes(s.id));
  // Leaving the favorites view when the last favorite is removed.
  const showingFavorites = filter === "favoritos" && favoriteStyles.length > 0;
  const visible =
    filter === "todos" || (filter === "favoritos" && !showingFavorites)
      ? styles
      : showingFavorites
        ? favoriteStyles
        : styles.filter((s) => s.category === filter);
  const categoryLabel = (id: CategoryId) => CATEGORIES.find((c) => c.id === id)?.label ?? "";

  const results = useMemo(() => {
    const options = { accents: styleAccents ? "combine" : "plain" } as const;
    return visible.map((style) => ({
      id: style.id,
      name: style.name,
      category: style.category,
      tall: style.category === "glitch",
      output: style.transform(source, options),
    }));
  }, [visible, source, styleAccents]);

  // Show the first cards, reveal the rest when the visitor scrolls near the end.
  const [expanded, setExpanded] = useState(false);
  const collapsed = !expanded && results.length > INITIAL_CARDS;
  const sentinelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!collapsed || !el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setExpanded(true);
    }, { rootMargin: "800px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, [collapsed]);

  // Random combinations: deterministic per seed, so the first batch matches the server render.
  const [randomSeed, setRandomSeed] = useState(1);
  const [randomCount, setRandomCount] = useState(RANDOM_BATCH);
  const randomResults = useMemo(
    () =>
      showRandom
        ? randomStyles(source, randomSeed, 0, randomCount, { accents: styleAccents ? "combine" : "plain" })
        : [],
    [showRandom, source, randomSeed, randomCount, styleAccents],
  );

  return (
    <section aria-label="Gerador de letras" className="w-full">
      <div className={`rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-5 ${wide ? "mx-auto max-w-3xl" : ""}`}>
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

      {((showFilter && availableCategories.length > 1) || favoriteStyles.length > 0) && (
        <div
          role="group"
          aria-label="Filtrar estilos por categoria"
          className={`mt-4 flex flex-wrap gap-2 ${wide ? "justify-center" : ""}`}
        >
          {[
            { id: "todos" as const, label: "Todos" },
            ...(favoriteStyles.length > 0 ? [{ id: "favoritos" as const, label: `Favoritos (${favoriteStyles.length})` }] : []),
            ...(showFilter && availableCategories.length > 1 ? availableCategories : []),
          ].map((cat) => {
            const active = cat.id === "favoritos" ? showingFavorites : cat.id === "todos" ? filter === "todos" || (filter === "favoritos" && !showingFavorites) : filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(cat.id)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  active
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line bg-surface text-ink-soft hover:border-accent hover:text-ink"
                }`}
              >
                {cat.id === "favoritos" && <Heart size={13} aria-hidden fill="currentColor" className="-mt-0.5 mr-1 inline" />}
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      <ul
        className={`mt-4 grid gap-3 sm:grid-cols-2 ${wide ? "lg:grid-cols-3" : ""}`}
        aria-label={`${results.length} estilos de letras`}
      >
        {results.map((r, i) => (
          <ResultCard
            key={r.id}
            name={r.name}
            badge={categoryLabel(r.category)}
            output={r.output}
            tall={r.tall}
            favorite={favorites.includes(r.id)}
            onToggleFavorite={() => onToggleFavorite(r.id)}
            plain={isSample ? undefined : source}
            hidden={collapsed && i >= INITIAL_CARDS}
          />
        ))}
      </ul>
      {collapsed && (
        <>
          {/* Reveals the rest shortly before the visitor reaches the end of the list. */}
          <div ref={sentinelRef} aria-hidden="true" />
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface text-sm font-semibold transition-colors hover:border-accent"
          >
            Mostrar todos os {results.length} estilos
          </button>
        </>
      )}

      {showRandom && (
        <div className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Estilos aleatórios</h2>
              <p className="mt-1 text-sm text-ink-soft">
                Combinações únicas com letras misturadas, emojis e símbolos. Gere quantas quiser.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                // New random base seed; only runs after a click, so it never affects hydration.
                setRandomSeed(Math.floor(Math.random() * 1_000_000) + 2);
                setRandomCount(RANDOM_BATCH);
              }}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 text-sm font-semibold hover:border-accent"
            >
              <Shuffle size={16} aria-hidden />
              Embaralhar
            </button>
          </div>
          <ul
            className={`mt-4 grid gap-3 sm:grid-cols-2 ${wide ? "lg:grid-cols-3" : ""}`}
            aria-label={`${randomResults.length} estilos aleatórios`}
          >
            {randomResults.map((output, i) => (
              <ResultCard
                key={`${randomSeed}-${i}`}
                name={`Combinação ${i + 1}`}
                badge="Aleatório"
                output={output}
                plain={isSample ? undefined : source}
              />
            ))}
          </ul>
          {randomCount < RANDOM_MAX && (
            <button
              type="button"
              onClick={() => setRandomCount((n) => Math.min(n + RANDOM_BATCH, RANDOM_MAX))}
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ink text-sm font-semibold text-paper transition-opacity hover:opacity-90"
            >
              <Plus size={18} aria-hidden />
              Gerar mais {RANDOM_BATCH} estilos
            </button>
          )}
        </div>
      )}
    </section>
  );
}
