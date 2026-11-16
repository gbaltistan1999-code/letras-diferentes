import { CopyButton } from "@/components/CopyButton";

/**
 * One styled result. The visual text is hidden from screen readers (many read
 * Unicode math letters as "mathematical bold capital A" or skip them) and a
 * plain-text description is announced instead.
 */
export function ResultCard({
  name,
  output,
  plain,
  tall = false,
}: {
  name: string;
  output: string;
  /** Plain text for screen readers; omitted for the preview sample. */
  plain?: string;
  /** Extra vertical room for styles with stacked marks (Zalgo/glitch). */
  tall?: boolean;
}) {
  // content-visibility skips layout of off-screen cards: laying out dozens of
  // exotic Unicode glyphs (font fallback lookups) was most of the load time.
  return (
    <li
      className={`[content-visibility:auto] ${
        tall ? "[contain-intrinsic-size:auto_9rem]" : "[contain-intrinsic-size:auto_5.25rem]"
      } flex min-h-[5.25rem] items-center gap-3 overflow-hidden rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-ink-soft/40`}
    >
      <div className="min-w-0 flex-1">
        <p className="relative z-10 text-xs font-medium uppercase tracking-wide text-ink-soft">{name}</p>
        <p
          aria-hidden="true"
          className={`font-[family-name:var(--font-symbols)] text-lg [overflow-wrap:anywhere] sm:text-xl ${
            tall ? "mt-3 py-4 leading-[2.6]" : "mt-0.5 leading-snug"
          }`}
        >
          {output}
        </p>
        <span className="sr-only">{plain ? `Estilo ${name}: ${plain}` : `Exemplo do estilo ${name}`}</span>
      </div>
      <CopyButton text={output} label={`Copiar texto no estilo ${name}`} />
    </li>
  );
}
