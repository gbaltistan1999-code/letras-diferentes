/** Category ids used to group text styles in the generator. */
export type CategoryId =
  | "negrito"
  | "cursivas"
  | "goticas"
  | "pequenas"
  | "bolhas"
  | "riscadas"
  | "decorativas"
  | "glitch"
  | "especiais";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface TransformOptions {
  /**
   * How accented letters (á, ã, ç…) are handled:
   * - "plain" (default): kept as normal accented letters. Always displays
   *   correctly, but the letter isn't styled (𝐎𝐥á).
   * - "combine": the base letter is styled and the accent is attached as a
   *   combining mark (𝐎𝐥𝐚́). Fully styled, but many fonts (notably on
   *   Windows) draw the accent beside the letter instead of above it.
   */
  accents?: "plain" | "combine";
}

export interface TextStyle {
  /** Stable id, used in URLs, tests and data files. */
  id: string;
  /** Portuguese label shown to users. */
  name: string;
  category: CategoryId;
  transform: (input: string, options?: TransformOptions) => string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Meta description and card excerpt. */
  description: string;
  /** ISO date (YYYY-MM-DD). */
  datePublished: string;
  dateModified?: string;
  /** Author slug from data/authors.ts (defaults to DEFAULT_AUTHOR). */
  author?: string;
  /** 1200×630 cover in public/blog (create with scripts/blog-cover.mjs). */
  cover: { src: string; alt: string };
  /** Tool page this post supports; shown as a call to action. */
  relatedTool: { href: string; label: string };
  /** Body in a small Markdown subset — see lib/markdown.ts. */
  body: string;
}

/**
 * A content block on a style page. Text supports **bold** and
 * [links](/path) (see lib/markdown.ts). Rendered in this order:
 * paragraphs → steps → list → copy → outro.
 */
export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  steps?: string[];
  /** Copyable lines, each with a "Copiar" button and an optional label. */
  copy?: { text: string; label?: string }[];
  /** Paragraphs shown after the lists. */
  outro?: string[];
}

export interface StylePage {
  slug: string;
  /** <title> without the site name suffix. */
  metaTitle: string;
  /** Use metaTitle exactly, without appending " | Letras Diferentes". */
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  /** Short label used in navigation, breadcrumbs and link lists. */
  navLabel: string;
  intro: string;
  /** Which styles the page generator shows. */
  generator: {
    categories?: CategoryId[];
    styleIds?: string[];
    sampleText: string;
    /** Show these categories first (all styles still shown). */
    categoryOrder?: CategoryId[];
    /** Show the category filter chips (default: off on style pages). */
    showFilter?: boolean;
  };
  /** Style ids rendered as static, copyable examples. */
  examples: { styleId: string; text: string }[];
  sections: ContentSection[];
  faqs: FaqItem[];
  related: string[];
  /** Blog post slugs shown in a "Leia no blog" box (data/blog). */
  relatedPosts?: string[];
  /** Optional copyable symbol collections (used by /simbolos). */
  symbolGroups?: { title: string; symbols: string[] }[];
}
