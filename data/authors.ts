/**
 * Blog authors. Only real people (or the site team) — never invent authors.
 * To add a photo: put a square image in public/autores/ and set `image`.
 * To add profiles (Instagram, LinkedIn…): add full URLs to `links`.
 */
export interface Author {
  slug: string;
  name: string;
  /** Short role shown under the name. */
  role: string;
  /** First-person bio, in Portuguese. */
  bio: string;
  image?: string;
  links: { label: string; href: string }[];
}

export const authors: Author[] = [
  {
    slug: "david",
    name: "David",
    role: "Desenvolvimento web e design",
    bio: "Trabalho com desenvolvimento web e design e crio ferramentas online gratuitas de texto e fontes. Escrevo sobre letras estilosas, nicks e redes sociais porque gosto de ajudar as pessoas a deixarem seus perfis no Instagram, no Free Fire, no TikTok e no Discord com mais destaque.",
    links: [],
  },
];

export const DEFAULT_AUTHOR = "david";

export function getAuthor(slug: string = DEFAULT_AUTHOR): Author {
  const author = authors.find((a) => a.slug === slug);
  if (!author) throw new Error(`Unknown author: ${slug}`);
  return author;
}

export const authorPath = (author: Author) => `/autor/${author.slug}`;
