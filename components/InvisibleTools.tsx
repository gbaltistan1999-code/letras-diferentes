"use client";

import { useId, useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import {
  getInvisibleType,
  INVISIBLE_TYPES,
  type InvisibleTypeId,
  insertInvisible,
  inspectText,
  makeInvisible,
  summarizeBlanks,
} from "@/lib/invisible";

const card = "rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-5";
const toolHeading = "text-lg font-semibold tracking-tight";
const field =
  "block w-full rounded-xl border border-line bg-paper px-4 py-3 text-lg outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-soft";

/**
 * Shows a text with its blank characters made visible: each invisible or
 * space character gets a tinted, dashed box so you can see where it is and
 * how wide it is. The real text is still what gets copied.
 */
function Marked({ text, placeholder }: { text: string; placeholder?: string }) {
  const chars = inspectText(text, 400);
  if (chars.length === 0) return <span className="text-ink-soft">{placeholder}</span>;
  return (
    <>
      {chars.map((c, i) =>
        c.kind === "visible" ? (
          <span key={i}>{c.char}</span>
        ) : c.code === "U+200B" || c.code === "U+200C" || c.code === "U+200D" || c.code === "U+2060" || c.code === "U+FEFF" ? (
          <span key={i} title={`${c.name} (${c.code})`} className="mx-px inline-block h-[1.1em] w-[3px] translate-y-[0.15em] rounded-sm bg-red-500/70">
            {c.char}
          </span>
        ) : (
          <span
            key={i}
            title={`${c.name} (${c.code})`}
            className={`inline-block rounded-[3px] outline-1 -outline-offset-1 outline-dashed ${
              c.kind === "invisible" ? "bg-accent-soft outline-accent" : "bg-warm outline-ink-soft/50"
            }`}
          >
            {c.char === "\n" ? "↵" : c.char === "\t" ? " " : c.char}
          </span>
        ),
      )}
    </>
  );
}

function TypePicker({ value, onChange, name }: { value: InvisibleTypeId; onChange: (v: InvisibleTypeId) => void; name: string }) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold">Tipo de espaço invisível</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {INVISIBLE_TYPES.map((t) => (
          <label
            key={t.id}
            className={`flex cursor-pointer items-start gap-2.5 rounded-xl border px-3 py-2.5 text-sm transition-colors ${
              value === t.id ? "border-accent bg-accent-soft/60" : "border-line hover:border-ink-soft/40"
            }`}
          >
            <input
              type="radio"
              name={name}
              checked={value === t.id}
              onChange={() => onChange(t.id)}
              className="mt-0.5 h-4 w-4 accent-[var(--color-accent)]"
            />
            <span>
              <span className="font-medium">{t.name}</span>{" "}
              <span className="text-ink-soft">({t.code})</span>
              {t.id === "hangul" && (
                <span className="ml-1.5 rounded-full bg-accent px-1.5 py-0.5 text-[0.7rem] font-semibold text-on-accent">
                  Recomendado
                </span>
              )}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/** TOOL 1: blank name of N invisible characters. */
function BlankNameTool() {
  const [type, setType] = useState<InvisibleTypeId>("hangul");
  const [count, setCount] = useState(5);
  const sliderId = useId();
  const value = makeInvisible(type, count);
  const t = getInvisibleType(type);

  return (
    <section aria-labelledby="gerador-nome-invisivel" className={card}>
      <h2 id="gerador-nome-invisivel" className={toolHeading}>
        Gerador de nome invisível
      </h2>
      <div className="mt-4">
        <TypePicker value={type} onChange={setType} name="tipo-nome-invisivel" />
      </div>
      <div className="mt-4">
        <label htmlFor={sliderId} className="flex items-center justify-between text-sm font-semibold">
          Quantidade de caracteres
          <span className="rounded-lg bg-accent-soft px-2 py-0.5 text-accent-strong">{count}</span>
        </label>
        <input
          id={sliderId}
          type="range"
          min={1}
          max={20}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="mt-2 w-full accent-[var(--color-accent)]"
        />
      </div>
      <div className="mt-4 rounded-xl border border-dashed border-line bg-paper px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">Prévia (cada caixinha é um caractere invisível)</p>
        <p className="mt-1.5 min-h-[2rem] text-2xl [overflow-wrap:anywhere]" aria-hidden>
          <Marked text={value} />
        </p>
        <p className="sr-only">
          {count} caracteres {t.name}
        </p>
      </div>
      {!t.blankName && (
        <p className="mt-3 rounded-lg bg-warm px-3 py-2 text-sm">
          Atenção: o {t.name} não serve para deixar o nome em branco ({t.bestFor.toLowerCase()}). Para nick em branco, use o Hangul Filler.
        </p>
      )}
      <div className="mt-4">
        <CopyButton large text={value} idleText="Copiar nome invisível" label={`Copiar nome invisível: ${count} caracteres ${t.name}`} />
      </div>
    </section>
  );
}

/** TOOL 2: invisible space inside a name. */
function NameSpaceTool() {
  const [text, setText] = useState("Lobo BR");
  const [type, setType] = useState<InvisibleTypeId>("hangul");
  const [replaceSpaces, setReplaceSpaces] = useState(true);
  const [edges, setEdges] = useState(false);
  const inputId = useId();
  const char = getInvisibleType(type).char;
  const result = useMemo(() => insertInvisible(text, char, { replaceSpaces, edges }), [text, char, replaceSpaces, edges]);

  return (
    <section aria-labelledby="espaco-no-nome" className={card}>
      <h2 id="espaco-no-nome" className={toolHeading}>
        Coloque espaço invisível no seu nome
      </h2>
      <label htmlFor={inputId} className="mb-2 mt-4 block text-sm font-semibold">
        Seu nome ou nick
      </label>
      <input
        id={inputId}
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={60}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        placeholder="Ex.: Lobo BR"
        className={field}
      />
      <div className="mt-4">
        <TypePicker value={type} onChange={setType} name="tipo-espaco-nome" />
      </div>
      <div className="mt-3 space-y-2 text-sm">
        <label className="flex cursor-pointer items-center gap-2.5">
          <input type="checkbox" checked={replaceSpaces} onChange={(e) => setReplaceSpaces(e.target.checked)} className="h-4 w-4 accent-[var(--color-accent)]" />
          Trocar os espaços comuns por espaço invisível
        </label>
        <label className="flex cursor-pointer items-center gap-2.5">
          <input type="checkbox" checked={edges} onChange={(e) => setEdges(e.target.checked)} className="h-4 w-4 accent-[var(--color-accent)]" />
          Adicionar espaço invisível antes e depois do nome
        </label>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3">
        <p className="min-w-0 flex-1 text-xl [overflow-wrap:anywhere]">
          <Marked text={result} placeholder="Digite um nome acima" />
        </p>
        <CopyButton text={result} label={`Copiar nome com espaço invisível: ${text}`} />
      </div>
    </section>
  );
}

/** TOOL 3: what's in my text? */
function TesterTool() {
  const [text, setText] = useState("");
  const inputId = useId();
  const chars = useMemo(() => inspectText(text, 300), [text]);
  const blanks = summarizeBlanks(chars);
  const visible = chars.filter((c) => c.kind === "visible").length;

  return (
    <section aria-labelledby="testador" className={card}>
      <h2 id="testador" className={toolHeading}>
        Testador: o que tem no meu texto?
      </h2>
      <label htmlFor={inputId} className="mb-2 mt-4 block text-sm font-semibold">
        Cole aqui o nome que você copiou
      </label>
      <textarea
        id={inputId}
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={2}
        maxLength={300}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        placeholder="Cole o texto e veja cada caractere, inclusive os invisíveis"
        className={`${field} resize-y`}
      />
      <div aria-live="polite" className="mt-3 text-sm">
        {chars.length === 0 ? (
          <p className="text-ink-soft">Nenhum texto ainda.</p>
        ) : (
          <>
            <p>
              <strong>{chars.length}</strong> caractere{chars.length > 1 ? "s" : ""}: {visible} visíve{visible === 1 ? "l" : "is"}
              {blanks.map((b) => (
                <span key={b.code}>
                  , {b.count}× {b.name} ({b.code})
                </span>
              ))}
              .
            </p>
            {visible === 0 && blanks.every((b) => b.kind === "invisible" && b.code !== "U+200B") && (
              <p className="mt-1 font-medium text-accent-strong">Tudo certo: esse nome é 100% invisível.</p>
            )}
            {blanks.some((b) => b.code === "U+200B") && (
              <p className="mt-1">Tem espaço de largura zero (U+200B): ele não ocupa lugar e não deixa o nome em branco.</p>
            )}
            {blanks.some((b) => b.code === "U+0020") && (
              <p className="mt-1">Tem espaço comum (U+0020): muitos jogos e apps recusam ou apagam esse espaço no nome.</p>
            )}
          </>
        )}
      </div>
      {chars.length > 0 && (
        <ol className="mt-3 flex flex-wrap gap-1.5" aria-label="Caracteres do texto">
          {chars.map((c, i) => (
            <li
              key={i}
              className={`flex min-w-[3.25rem] flex-col items-center rounded-lg border px-1.5 py-1 text-center ${
                c.kind === "invisible" ? "border-accent bg-accent-soft/60" : c.kind === "space" ? "border-ink-soft/40 bg-warm" : "border-line"
              }`}
            >
              <span className="flex h-7 items-center text-lg" aria-hidden>
                {c.kind === "visible" ? c.char : <span className="text-xs text-ink-soft">vazio</span>}
              </span>
              <span className="font-mono text-[0.65rem] text-ink-soft">{c.code}</span>
              {c.name && <span className="max-w-[6rem] text-[0.65rem] leading-tight">{c.name}</span>}
              <span className="sr-only">{c.kind === "visible" ? c.char : ""}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export function InvisibleTools() {
  return (
    <div className="space-y-5">
      <BlankNameTool />
      <NameSpaceTool />
      <TesterTool />
    </div>
  );
}
