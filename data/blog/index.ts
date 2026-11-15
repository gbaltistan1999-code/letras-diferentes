/**
 * Blog posts. To add a post: create a file in this folder exporting a
 * `BlogPost` (see an existing one), then add it to the list below. The blog
 * page, post route, sitemap and structured data update automatically.
 */
import type { BlogPost } from "@/types";
import { frasesParaBio } from "./frases-para-bio-do-instagram";
import { quadradinhosUnicode } from "./letras-diferentes-quadradinhos-unicode";
import { nomesParaFreeFire } from "./nomes-para-free-fire";

export const BLOG_AUTHOR = "Equipe Letras Diferentes";

/** Newest first. */
export const blogPosts: BlogPost[] = [nomesParaFreeFire, frasesParaBio, quadradinhosUnicode].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** "15 de novembro de 2026" */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
