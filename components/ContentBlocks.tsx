import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ResultCard } from "@/components/ResultCard";
import { getStyle } from "@/lib/fonts";
import type { ContentSection } from "@/types";

/** Renders data-driven content sections (paragraphs, bullet lists, numbered steps). */
export function Sections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="prose-content">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-ink">{section.heading}</h2>
          {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
          {section.steps && (
            <ol>
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          )}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

/** Server-rendered, copyable examples (visible to search engines without JS). */
export function Examples({
  examples,
  heading = "Exemplos prontos para copiar",
}: {
  examples: { styleId: string; text: string }[];
  heading?: string;
}) {
  return (
    <section aria-labelledby="exemplos" className="mt-12">
      <h2 id="exemplos" className="text-2xl font-semibold tracking-tight">
        {heading}
      </h2>
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {examples.map(({ styleId, text }) => {
          const style = getStyle(styleId);
          return <ResultCard key={styleId + text} name={style.name} output={style.transform(text)} plain={text} />;
        })}
      </ul>
    </section>
  );
}

export function LinkGrid({
  heading,
  links,
  id = "veja-tambem",
}: {
  heading: string;
  links: { href: string; label: string; description?: string }[];
  id?: string;
}) {
  return (
    <section aria-labelledby={id} className="mt-14">
      <h2 id={id} className="text-2xl font-semibold tracking-tight">
        {heading}
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex h-full items-start justify-between gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent"
            >
              <span>
                <span className="font-semibold">{l.label}</span>
                {l.description && <span className="mt-1 block text-sm text-ink-soft">{l.description}</span>}
              </span>
              <ArrowRight size={18} aria-hidden className="mt-0.5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
