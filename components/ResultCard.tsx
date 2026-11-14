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
}: {
  name: string;
  output: string;
  /** Plain text for screen readers; omitted for the preview sample. */
  plain?: string;
}) {
  return (
    <li className="flex min-h-[5.25rem] items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-ink-soft/40">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">{name}</p>
        <p
          aria-hidden="true"
          className="mt-0.5 font-[family-name:var(--font-symbols)] text-lg leading-snug [overflow-wrap:anywhere] sm:text-xl"
        >
          {output}
        </p>
        <span className="sr-only">{plain ? `Estilo ${name}: ${plain}` : `Exemplo do estilo ${name}`}</span>
      </div>
      <CopyButton text={output} label={`Copiar texto no estilo ${name}`} />
    </li>
  );
}
