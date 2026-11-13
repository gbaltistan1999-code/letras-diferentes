/** Category ids used to group text styles in the generator. */
export type CategoryId =
  | "negrito"
  | "cursivas"
  | "goticas"
  | "pequenas"
  | "bolhas"
  | "riscadas"
  | "decorativas"
  | "especiais";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface TextStyle {
  /** Stable id, used in URLs, tests and data files. */
  id: string;
  /** Portuguese label shown to users. */
  name: string;
  category: CategoryId;
  transform: (input: string) => string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  steps?: string[];
}

export interface StylePage {
  slug: string;
  /** <title> without the site name suffix. */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Short label used in navigation, breadcrumbs and link lists. */
  navLabel: string;
  intro: string;
  /** Which styles the page generator shows. */
  generator: { categories?: CategoryId[]; styleIds?: string[]; sampleText: string };
  /** Style ids rendered as static, copyable examples. */
  examples: { styleId: string; text: string }[];
  sections: ContentSection[];
  faqs: FaqItem[];
  related: string[];
  /** Optional copyable symbol collections (used by /simbolos). */
  symbolGroups?: { title: string; symbols: string[] }[];
}
