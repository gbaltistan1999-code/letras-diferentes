/**
 * Blog posts. To add a post:
 *   1. Create a file in this folder exporting a `BlogPost` (copy an existing one).
 *   2. Make its cover image:
 *        node scripts/blog-cover.mjs <slug> "Title line 1|Title line 2" "decorative text"
 *      and set `cover: { src: "/blog/<slug>.png", alt: "..." }` in the post.
 *   3. Add the post to the list below.
 * The blog page, post route, sitemap, share image and structured data update automatically.
 */
import type { BlogPost } from "@/types";
import { frasesParaStatus } from "./frases-para-status-do-whatsapp";
import { nomesParaGrupoDeWhatsapp } from "./nomes-para-grupo-de-whatsapp";
import { frasesParaBio } from "./frases-para-bio-do-instagram";
import { quadradinhosUnicode } from "./letras-diferentes-quadradinhos-unicode";
import { nomesParaFreeFire } from "./nomes-para-free-fire";

/** Newest first. */
export const blogPosts: BlogPost[] = [frasesParaStatus, nomesParaGrupoDeWhatsapp, nomesParaFreeFire, frasesParaBio, quadradinhosUnicode].sort((a, b) =>
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
