"use client";

import { Lock, X } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { CopyButton } from "@/components/CopyButton";
import { getStyle } from "@/lib/fonts";
import {
  AESTHETIC_PRESETS,
  applyAesthetic,
  suggestUsernames,
  TIKTOK_FIELDS,
  tiktokLength,
  type TikTokFieldId,
  USERNAME_MAX,
} from "@/lib/tiktok";

const MAX_LENGTH = 300;
const SAMPLE = "Mariana";

/** Styles that read well on TikTok, the most compatible first. */
const TIKTOK_STYLES: { id: string; name: string }[] = [
  { id: "cursiva-negrito", name: "Cursiva" },
  { id: "cursiva", name: "Cursiva fina" },
  { id: "negrito", name: "Negrito" },
  { id: "italico", name: "Itálico" },
  { id: "negrito-italico", name: "Negrito itálico" },
  { id: "versalete", name: "Letras pequenas" },
  { id: "gotica-negrito", name: "Gótica" },
  { id: "contorno", name: "Contorno" },
  { id: "negrito-sem-serifa", name: "Sem serifa negrito" },
  { id: "monoespacada", name: "Máquina" },
  { id: "largura-total", name: "Largas" },
  { id: "sobrescrito", name: "Sobrescrito" },
  { id: "bolhas", name: "Bolhas" },
  { id: "riscado", name: "Riscada" },
  { id: "coracoes", name: "Corações ♡" },
  { id: "estrelas", name: "Estrelas ★彡" },
];

type Tab = "letras" | "aesthetic" | "usuario";
const TABS: { id: Tab; label: string }[] = [
  { id: "letras", label: "Letras diferentes" },
  { id: "aesthetic", label: "Aesthetic" },
  { id: "usuario", label: "@ do usuário" },
];

function Row({ name, output, limit, plain }: { name: string; output: string; limit: number; plain?: string }) {
  const len = tiktokLength(output);
  const over = len > limit;
  return (
    <li className="flex min-h-[5.25rem] items-center gap-3 overflow-hidden rounded-xl border border-line bg-surface px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">{name}</p>
        <p aria-hidden="true" className="mt-0.5 font-[family-name:var(--font-symbols)] text-lg leading-snug [overflow-wrap:anywhere] sm:text-xl">
          {output}
        </p>
        <span className="sr-only">{plain ? `Estilo ${name}: ${plain}` : `Exemplo do estilo ${name}`}</span>
        <p className={`mt-0.5 text-xs ${over ? "font-medium text-amber-700 dark:text-amber-400" : "text-ink-soft"}`}>
          {len}/{limit}
          {over ? ": passa do limite deste campo" : ""}
        </p>
      </div>
      <CopyButton text={output} label={`Copiar texto no estilo ${name}, ${len} de ${limit} caracteres`} />
    </li>
  );
}

export function TikTokTools() {
  const baseId = useId();
  const inputId = `${baseId}-input`;
  const [text, setText] = useState("");
  const [field, setField] = useState<TikTokFieldId>("nome");
  const [tab, setTab] = useState<Tab>("letras");
  const [styleAccents, setStyleAccents] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const deferred = useDeferredValue(text);
  const isSample = deferred.trim() === "";
  const source = isSample ? SAMPLE : deferred;
  const limit = TIKTOK_FIELDS.find((f) => f.id === field)!.limit;
  const accents = styleAccents ? "combine" : "plain";

  const styled = useMemo(
    () => TIKTOK_STYLES.map((s) => ({ ...s, output: getStyle(s.id).transform(source, { accents }) })),
    [source, accents],
  );
  const aesthetic = useMemo(
    () => AESTHETIC_PRESETS.map((p) => ({ id: p.id, name: p.name, output: applyAesthetic(source, p, accents) })),
    [source, accents],
  );
  const usernames = useMemo(() => suggestUsernames(source), [source]);

  function onTabKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? TABS.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const idx = (next + TABS.length) % TABS.length;
    setTab(TABS[idx].id);
    tabRefs.current[idx]?.focus();
  }

  const panel = (id: Tab) => ({
    id: `${baseId}-panel-${id}`,
    role: "tabpanel" as const,
    "aria-labelledby": `${baseId}-tab-${id}`,
    hidden: tab !== id,
    className: "mt-4",
  });

  return (
    <section aria-label="Conversor de letras para TikTok" className="w-full">
      <div className="rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-5">
        <label htmlFor={inputId} className="mb-2 block text-sm font-semibold">
          Digite seu nome, bio ou comentário
        </label>
        <div className="relative">
          <textarea
            id={inputId}
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={MAX_LENGTH}
            rows={2}
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
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink-soft">
          <Lock size={13} aria-hidden />
          Seu texto é convertido no seu navegador e não é enviado nem salvo.
        </p>

        <fieldset className="mt-3 border-t border-line pt-3">
          <legend className="sr-only">Onde você vai usar</legend>
          <p aria-hidden className="mb-2 text-sm font-semibold">Onde você vai usar?</p>
          <div className="flex flex-wrap gap-2">
            {TIKTOK_FIELDS.map((f) => (
              <label
                key={f.id}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent-soft ${
                  field === f.id
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line bg-surface text-ink-soft hover:border-accent hover:text-ink"
                }`}
              >
                <input type="radio" name={`${baseId}-field`} checked={field === f.id} onChange={() => setField(f.id)} className="sr-only" />
                {f.label} ({f.limit.toLocaleString("pt-BR")})
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink-soft">
            O contador usa a contagem mais rígida: muitas letras diferentes contam como 2 caracteres.
          </p>
        </fieldset>
      </div>

      <div role="tablist" aria-label="Tipo de letra" className="mt-4 grid grid-cols-3 gap-1 rounded-xl border border-line bg-warm p-1">
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
              className={`min-h-11 rounded-lg px-1.5 text-sm font-semibold leading-tight transition-colors ${
                active ? "bg-surface text-ink shadow-sm" : "text-ink-soft hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tab !== "usuario" && (
        <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-sm">
          <input
            type="checkbox"
            checked={styleAccents}
            onChange={(e) => setStyleAccents(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
          />
          <span>Estilizar também as letras com acento (á, ã, ç…)</span>
        </label>
      )}

      <div {...panel("letras")}>
        <ul className="grid gap-2.5" aria-label={`${styled.length} letras para TikTok`}>
          {styled.map((r) => (
            <Row key={r.id} name={r.name} output={r.output} limit={limit} plain={isSample ? undefined : source} />
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

      <div {...panel("aesthetic")}>
        <p className="text-sm text-ink-soft">Letras com enfeites fofos para o nome e a bio.</p>
        <ul className="mt-3 grid gap-2.5" aria-label={`${aesthetic.length} estilos aesthetic`}>
          {aesthetic.map((r) => (
            <Row key={r.id} name={r.name} output={r.output} limit={limit} plain={isSample ? undefined : source} />
          ))}
        </ul>
      </div>

      <div {...panel("usuario")}>
        <p className="text-sm text-ink-soft">
          O @ só aceita letras sem acento, números, sublinhado (_) e ponto (.), com 2 a {USERNAME_MAX} caracteres e sem ponto
          no final. Estas sugestões já seguem as regras.
        </p>
        {usernames.length === 0 ? (
          <p className="mt-3 rounded-xl bg-warm px-4 py-3 text-sm">
            Digite um nome com letras ou números para ver sugestões de @.
          </p>
        ) : (
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2" aria-label={`${usernames.length} sugestões de @`}>
            {usernames.map((u) => (
              <li key={u} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-lg [overflow-wrap:anywhere]">@{u}</p>
                  <p className="text-xs text-ink-soft">
                    {u.length}/{USERNAME_MAX}
                  </p>
                </div>
                <CopyButton text={u} label={`Copiar nome de usuário ${u}`} />
              </li>
            ))}
          </ul>
        )}
        <p className="mt-3 text-xs text-ink-soft">
          O botão copia sem o @, pronto para colar no campo Nome de usuário. O TikTok só deixa trocar o @ a cada 30 dias, e
          ele precisa estar livre.
        </p>
      </div>
    </section>
  );
}
