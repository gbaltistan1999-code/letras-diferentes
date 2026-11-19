"use client";

import { Lock, X } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { CopyButton } from "@/components/CopyButton";
import { ResultCard } from "@/components/ResultCard";
import { getStyle } from "@/lib/fonts";
import { formatWhatsApp, getWhatsAppFormat, WHATSAPP_FORMATS, type WhatsAppFormatId } from "@/lib/whatsapp";

const MAX_LENGTH = 500;
const SAMPLE = "Bom dia, família!";

/** Styles that read well in chats, the most compatible first. */
export const WHATSAPP_STYLE_IDS = [
  "negrito",
  "italico",
  "negrito-italico",
  "versalete",
  "cursiva",
  "cursiva-negrito",
  "gotica",
  "contorno",
  "negrito-sem-serifa",
  "monoespacada",
  "bolhas",
  "largura-total",
  "riscado",
  "sublinhado",
  "coracoes",
  "estrelas",
];

type Tab = "letras" | "formatacao";
const TABS: { id: Tab; label: string }[] = [
  { id: "letras", label: "Letras diferentes" },
  { id: "formatacao", label: "Formatação do WhatsApp" },
];

/** How the message looks in the chat once WhatsApp applies the codes. */
function FormattedPreview({ text, id }: { text: string; id: WhatsAppFormatId }) {
  const format = getWhatsAppFormat(id);
  const lines = text.replace(/\r\n?/g, "\n").split("\n");
  const inline = (body: string): ReactNode => {
    switch (id) {
      case "negrito":
        return <strong>{body}</strong>;
      case "italico":
        return <em>{body}</em>;
      case "tachado":
        return <s>{body}</s>;
      case "monoespacado":
        return <span className="font-mono">{body}</span>;
      case "codigo":
        return <code className="rounded bg-ink/10 px-1 font-mono text-[0.9em]">{body}</code>;
      case "negrito-italico":
        return (
          <strong>
            <em>{body}</em>
          </strong>
        );
      default:
        return body;
    }
  };
  if (format.kind === "wrap") {
    return (
      <>
        {lines.map((line, i) => (
          <span key={i} className="block min-h-[1.5em] whitespace-pre-wrap">
            {line.trim() ? inline(line.trim()) : " "}
          </span>
        ))}
      </>
    );
  }
  const items = lines.map((l) => l.trim().replace(/^(?:>\s*|[-*•]\s+|\d+[.)]\s+)/, "")).filter(Boolean);
  if (id === "citacao") {
    return <span className="block whitespace-pre-wrap border-l-4 border-ink-soft/40 pl-2.5 text-ink-soft">{items.join("\n")}</span>;
  }
  const List = id === "numerada" ? "ol" : "ul";
  return (
    <List className={`${id === "numerada" ? "list-decimal" : "list-disc"} space-y-0.5 pl-5`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </List>
  );
}

export function WhatsAppTools() {
  const baseId = useId();
  const inputId = `${baseId}-input`;
  const [text, setText] = useState("");
  const [tab, setTab] = useState<Tab>("letras");
  const [format, setFormat] = useState<WhatsAppFormatId>("negrito");
  const [styleAccents, setStyleAccents] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const deferred = useDeferredValue(text);
  const isSample = deferred.trim() === "";
  const source = isSample ? SAMPLE : deferred;

  const results = useMemo(() => {
    const options = { accents: styleAccents ? "combine" : "plain" } as const;
    return WHATSAPP_STYLE_IDS.map((id) => {
      const style = getStyle(id);
      return { id, name: style.name, output: style.transform(source, options) };
    });
  }, [source, styleAccents]);

  const formatted = formatWhatsApp(source, format);

  function onTabKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? TABS.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const idx = (next + TABS.length) % TABS.length;
    setTab(TABS[idx].id);
    tabRefs.current[idx]?.focus();
  }

  return (
    <section aria-label="Conversor de letras para WhatsApp" className="w-full">
      <div className="rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-5">
        <label htmlFor={inputId} className="mb-2 block text-sm font-semibold">
          Digite sua mensagem, nome ou recado
        </label>
        <div className="relative">
          <textarea
            id={inputId}
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={MAX_LENGTH}
            rows={3}
            placeholder={SAMPLE}
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
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <Lock size={13} aria-hidden />
            Seu texto é convertido no seu navegador e não é enviado nem salvo.
          </span>
          <span>
            {text.length}/{MAX_LENGTH}
          </span>
        </div>
      </div>

      <div role="tablist" aria-label="Tipo de letra" className="mt-4 grid grid-cols-2 gap-1 rounded-xl border border-line bg-warm p-1">
        {TABS.map((t, i) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`${baseId}-tab-${t.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`${baseId}-panel-${t.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setTab(t.id)}
              onKeyDown={(e) => onTabKey(e, i)}
              className={`min-h-11 rounded-lg px-2 text-sm font-semibold transition-colors ${
                active ? "bg-surface text-ink shadow-sm" : "text-ink-soft hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel-letras`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-letras`}
        hidden={tab !== "letras"}
        className="mt-4"
      >
        <p className="text-sm text-ink-soft">Funcionam em todo lugar: mensagens, nome, recado, status e grupos.</p>
        <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-sm">
          <input
            type="checkbox"
            checked={styleAccents}
            onChange={(e) => setStyleAccents(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
          />
          <span>Estilizar também as letras com acento (á, ã, ç…)</span>
        </label>
        <ul className="mt-4 grid gap-2.5" aria-label={`${results.length} letras para WhatsApp`}>
          {results.map((r) => (
            <ResultCard key={r.id} name={r.name} output={r.output} plain={isSample ? undefined : source} />
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-soft">
          Quer mais opções?{" "}
          <Link href="/" className="font-medium text-accent underline underline-offset-2">
            Veja mais de 60 estilos no gerador de letras diferentes
          </Link>
          .
        </p>
      </div>

      <div
        id={`${baseId}-panel-formatacao`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-formatacao`}
        hidden={tab !== "formatacao"}
        className="mt-4"
      >
        <p className="text-sm text-ink-soft">
          Códigos do próprio app. Funcionam nas mensagens, no status de texto e na legenda de fotos (não no nome nem no
          recado).
        </p>
        <fieldset className="mt-3">
          <legend className="sr-only">Formato</legend>
          <div className="flex flex-wrap gap-2">
            {WHATSAPP_FORMATS.map((f) => (
              <label
                key={f.id}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent-soft ${
                  format === f.id
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line bg-surface text-ink-soft hover:border-accent hover:text-ink"
                }`}
              >
                <input
                  type="radio"
                  name={`${baseId}-format`}
                  checked={format === f.id}
                  onChange={() => setFormat(f.id)}
                  className="sr-only"
                />
                {f.name}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">Copie e cole no WhatsApp</p>
            <pre className="mt-2 whitespace-pre-wrap break-words font-mono text-base">{formatted}</pre>
          </div>
          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">Como aparece na conversa</p>
            <div className="mt-2 rounded-lg rounded-tr-none bg-accent-soft px-3 py-2 text-base">
              <FormattedPreview text={source} id={format} />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <CopyButton
            text={formatted}
            label={`Copiar texto com ${getWhatsAppFormat(format).name.toLowerCase()} do WhatsApp`}
            idleText="Copiar com formatação"
            large
          />
        </div>
      </div>
    </section>
  );
}
