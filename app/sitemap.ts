import type { MetadataRoute } from "next";
import { stylePages } from "@/data/style-pages";
import { absoluteUrl } from "@/lib/seo";

/** Only canonical, indexable pages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    ...stylePages.map((p) => ({ path: `/${p.slug}`, priority: 0.8 })),
    { path: "/perguntas-frequentes", priority: 0.6 },
    { path: "/sobre-nos", priority: 0.4 },
    { path: "/contato", priority: 0.3 },
    { path: "/politica-de-privacidade", priority: 0.2 },
    { path: "/termos-de-uso", priority: 0.2 },
    { path: "/politica-de-cookies", priority: 0.2 },
    { path: "/aviso-legal", priority: 0.2 },
  ];
  return entries.map((e) => ({ url: absoluteUrl(e.path), priority: e.priority }));
}
