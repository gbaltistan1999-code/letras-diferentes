/**
 * Tiny Markdown subset for blog posts — no dependencies, no raw HTML (so post
 * text can never inject markup). Blocks are separated by a blank line:
 *
 *   ## Heading 2            ### Heading 3
 *   - bullet item           1. numbered item
 *   + copyable item         (each line gets a "Copiar" button)
 *   > tip / callout
 *   ![alt text](/blog/image.webp "caption")   16:9 image (1200×675), caption optional
 *   anything else           paragraph (lines joined with a space)
 *
 * Inline: **bold** and [link text](/url).
 */

export type Inline =
  | { type: "text"; text: string }
  | { type: "bold"; text: string }
  | { type: "link"; text: string; href: string };

export type Block =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "p"; content: Inline[] }
  | { type: "ul"; items: Inline[][] }
  | { type: "ol"; items: Inline[][] }
  | { type: "copy"; items: string[] }
  | { type: "tip"; content: Inline[] }
  | { type: "img"; src: string; alt: string; caption?: string };

/** URL-safe id from a heading: "Por que o Unicode?" → "por-que-o-unicode". */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index! > last) out.push({ type: "text", text: text.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ type: "bold", text: m[1] });
    else out.push({ type: "link", text: m[2], href: m[3] });
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push({ type: "text", text: text.slice(last) });
  return out;
}

export function parseMarkdown(source: string): Block[] {
  const blocks: Block[] = [];
  const chunks = source
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean);

  for (const chunk of chunks) {
    const lines = chunk.split("\n").map((l) => l.trim());
    const all = (re: RegExp) => lines.every((l) => re.test(l));

    // Only site-relative images (starting with "/"), alone in their block.
    const img = lines.length === 1 ? chunk.match(/^!\[(.+?)\]\((\/[^\s)]+)(?:\s+"(.+?)")?\)$/) : null;

    if (img) {
      blocks.push({ type: "img", alt: img[1], src: img[2], ...(img[3] ? { caption: img[3] } : {}) });
    } else if (chunk.startsWith("## ")) {
      const text = chunk.slice(3).trim();
      blocks.push({ type: "h2", text, id: slugify(text) });
    } else if (chunk.startsWith("### ")) {
      blocks.push({ type: "h3", text: chunk.slice(4).trim() });
    } else if (all(/^- /)) {
      blocks.push({ type: "ul", items: lines.map((l) => parseInline(l.slice(2))) });
    } else if (all(/^\d+\. /)) {
      blocks.push({ type: "ol", items: lines.map((l) => parseInline(l.replace(/^\d+\. /, ""))) });
    } else if (all(/^\+ /)) {
      blocks.push({ type: "copy", items: lines.map((l) => l.slice(2)) });
    } else if (all(/^> ?/)) {
      blocks.push({ type: "tip", content: parseInline(lines.map((l) => l.replace(/^> ?/, "")).join(" ")) });
    } else {
      blocks.push({ type: "p", content: parseInline(lines.join(" ")) });
    }
  }
  return blocks;
}

/** Rough reading time in minutes (200 words per minute, minimum 1). */
export function readingMinutes(source: string): number {
  const words = source.split(/\s+/).filter((w) => /[a-zà-ú]/i.test(w)).length;
  return Math.max(1, Math.round(words / 200));
}
