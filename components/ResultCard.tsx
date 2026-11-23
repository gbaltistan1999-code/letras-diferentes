import { Heart } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";

/**
 * One styled result: category badge and favorite button on top, the styled
 * text large in the middle, the style name and Copiar at the bottom.
 * The visual text is hidden from screen readers (many read Unicode math
 * letters as "mathematical bold capital A" or skip them) and a plain-text
 * description is announced instead.
 */
export function ResultCard({
  name,
  output,
  plain,
  badge,
  tall = false,
  hidden = false,
  favorite = false,
  onToggleFavorite,
}: {
  name: string;
  output: string;
  /** Plain text for screen readers; omitted for the preview sample. */
  plain?: string;
  /** Small label in the top-left corner (the style's category). */
  badge?: string;
  /** Extra vertical room for styles with stacked marks (Zalgo/glitch). */
  tall?: boolean;
  /** In the HTML (for search engines) but not laid out yet: display none until revealed. */
  hidden?: boolean;
  favorite?: boolean;
  /** Shows the ♡ button when set. */
  onToggleFavorite?: () => void;
}) {
  return (
    <li
      className={`${hidden ? "hidden" : "flex"} flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-md`}
    >
      {(badge || onToggleFavorite) && (
      <div className="flex min-h-11 items-center justify-between gap-2 pl-4 pr-1.5 pt-1.5">
        {badge ? <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent-strong">{badge}</span> : <span />}
        {onToggleFavorite && (
          <button
            type="button"
            onClick={onToggleFavorite}
            aria-pressed={favorite}
            aria-label={favorite ? `Remover ${name} dos favoritos` : `Adicionar ${name} aos favoritos`}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-warm ${
              favorite ? "text-accent" : "text-ink-soft"
            }`}
          >
            <Heart size={19} aria-hidden fill={favorite ? "currentColor" : "none"} />
          </button>
        )}
      </div>
      )}
      <div className="flex flex-1 items-center justify-center px-4 py-3 text-center sm:py-5">
        <p
          aria-hidden="true"
          className={`min-w-0 font-[family-name:var(--font-symbols)] text-xl [overflow-wrap:anywhere] sm:text-2xl ${
            tall ? "py-4 leading-[2.6]" : "leading-snug"
          }`}
        >
          {output}
        </p>
        <span className="sr-only">{plain ? `Estilo ${name}: ${plain}` : `Exemplo do estilo ${name}`}</span>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-2.5">
        <p className="min-w-0 truncate text-sm font-medium text-ink-soft" title={name}>
          {name}
        </p>
        <CopyButton text={output} label={`Copiar texto no estilo ${name}`} />
      </div>
    </li>
  );
}
