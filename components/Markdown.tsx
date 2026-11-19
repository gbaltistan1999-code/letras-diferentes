import { Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import type { Block, Inline } from "@/lib/markdown";

export function InlineContent({ content }: { content: Inline[] }) {
  return (
    <>
      {content.map((part, i) => {
        if (part.type === "bold") return <strong key={i}>{part.text}</strong>;
        if (part.type === "link") {
          return part.href.startsWith("/") ? (
            <Link key={i} href={part.href}>
              {part.text}
            </Link>
          ) : (
            <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
              {part.text}
            </a>
          );
        }
        return <span key={i}>{part.text}</span>;
      })}
    </>
  );
}

/** Renders parsed blog blocks (see lib/markdown.ts) with the site's prose styles. */
export function Markdown({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={block.id} className="scroll-mt-24 text-ink">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-ink">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <InlineContent content={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <InlineContent content={item} />
                  </li>
                ))}
              </ol>
            );
          case "copy":
            return (
              <ul key={i} className="my-5 grid gap-2 !list-none !pl-0">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="!mb-0 flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-2.5"
                  >
                    <span className="min-w-0 font-[family-name:var(--font-symbols)] text-lg text-ink [overflow-wrap:anywhere]">
                      {item}
                    </span>
                    <CopyButton text={item} label={`Copiar ${item}`} />
                  </li>
                ))}
              </ul>
            );
          case "tip":
            return (
              <p key={i} className="flex gap-3 rounded-xl bg-accent-soft px-4 py-3 !text-accent-strong">
                <Lightbulb size={18} aria-hidden className="mt-1 shrink-0" />
                <span>
                  <InlineContent content={block.content} />
                </span>
              </p>
            );
          case "img":
            return (
              <figure key={i} className="my-6">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={1200}
                  height={675}
                  sizes="(min-width: 768px) 720px, 100vw"
                  className="h-auto w-full rounded-2xl border border-line"
                />
                {block.caption && <figcaption className="mt-2 text-center text-sm text-ink-soft">{block.caption}</figcaption>}
              </figure>
            );
          default:
            return (
              <p key={i}>
                <InlineContent content={block.content} />
              </p>
            );
        }
      })}
    </div>
  );
}
