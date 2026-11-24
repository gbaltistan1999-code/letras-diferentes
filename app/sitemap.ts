import type { MetadataRoute } from "next";
import { authorPath, authors } from "@/data/authors";
import { blogPosts } from "@/data/blog";
import { pageImages } from "@/data/page-images";
import { navPages } from "@/data/style-pages";
import { absoluteUrl } from "@/lib/seo";

/** Only canonical, indexable pages, with their content images (image sitemap entries). */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { path: string; priority: number; lastModified?: string }[] = [
    { path: "/", priority: 1 },
    { path: "/estilos-de-letras", priority: 0.8 },
    ...navPages.map((p) => ({ path: `/${p.slug}`, priority: 0.8 })),
    { path: "/blog", priority: 0.6, lastModified: blogPosts[0]?.dateModified ?? blogPosts[0]?.datePublished },
    ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, lastModified: p.dateModified ?? p.datePublished })),
    ...authors.map((a) => ({ path: authorPath(a), priority: 0.4 })),
    { path: "/perguntas-frequentes", priority: 0.6 },
    { path: "/sobre-nos", priority: 0.4 },
    { path: "/contato", priority: 0.3 },
    { path: "/politica-de-privacidade", priority: 0.2 },
    { path: "/termos-de-uso", priority: 0.2 },
    { path: "/politica-de-cookies", priority: 0.2 },
    { path: "/aviso-legal", priority: 0.2 },
  ];
  return entries.map((e) => ({
    url: absoluteUrl(e.path),
    priority: e.priority,
    ...(e.lastModified ? { lastModified: e.lastModified } : {}),
    ...(pageImages[e.path]?.length ? { images: pageImages[e.path].map((src) => absoluteUrl(src)) } : {}),
  }));
}
