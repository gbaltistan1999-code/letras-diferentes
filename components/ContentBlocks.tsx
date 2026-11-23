import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import { InlineContent } from "@/components/Markdown";
import { ResultCard } from "@/components/ResultCard";
import { CATEGORIES, getStyle } from "@/lib/fonts";
import { parseInline } from "@/lib/markdown";
import type { ContentSection } from "@/types";

const Text = ({ text }: { text: string }) => <InlineContent content={parseInline(text)} />;

/**
 * Renders data-driven content sections. Text supports **bold** and
 * [links](/path); `copy` lines get a "Copiar" button.
 */
export function Sections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="prose-content">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-ink">{section.heading}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p}>
              <Text text={p} />
            </p>
          ))}
          {section.steps && (
            <ol>
              {section.steps.map((step) => (
                <li key={step}>
                  <Text text={step} />
                </li>
              ))}
            </ol>
          )}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>
                  <Text text={item} />
                </li>
              ))}
            </ul>
          )}
          {section.copy && (
            <ul className="my-5 grid gap-2 !list-none !pl-0">
              {section.copy.map((item) => (
                <li
                  key={item.text}
                  className="!mb-0 flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-2.5"
                >
                  <span className="min-w-0">
                    {item.label && <span className="block text-xs font-medium text-ink-soft">{item.label}</span>}
                    <span className="block font-[family-name:var(--font-symbols)] text-lg text-ink [overflow-wrap:anywhere]">
                      {item.text}
                    </span>
                  </span>
                  <CopyButton text={item.text} label={`Copiar ${item.label ?? item.text}`} />
                </li>
              ))}
            </ul>
          )}
          {section.outro?.map((p) => (
            <p key={p}>
              <Text text={p} />
            </p>
          ))}
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
          return (
            <ResultCard
              key={styleId + text}
              name={style.name}
              badge={CATEGORIES.find((c) => c.id === style.category)?.label}
              output={style.transform(text)}
              plain={text}
            />
          );
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
          // Only the label is the link (clean anchor text for SEO); the
          // stretched ::after makes the whole card clickable.
          <li
            key={l.href}
            className="group relative flex h-full items-start justify-between gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent"
          >
            <span>
              <Link href={l.href} className="font-semibold after:absolute after:inset-0 after:rounded-xl">
                {l.label}
              </Link>
              {l.description && <span className="mt-1 block text-sm text-ink-soft">{l.description}</span>}
            </span>
            <ArrowRight size={18} aria-hidden className="mt-0.5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
          </li>
        ))}
      </ul>
    </section>
  );
}
