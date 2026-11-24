import { blogPosts } from "@/data/blog";
import { parseMarkdown } from "@/lib/markdown";

/**
 * Content images per page, for the image entries in the sitemap. Blog posts are
 * read automatically (cover + images in the body); add the images of other pages
 * here when you put a new image on them. data/page-images.test.ts checks that
 * every file exists in /public.
 */
const staticPageImages: Record<string, string[]> = {
  "/": ["/images/letras-diferentes-estilos.webp", "/images/onde-usar-letras-diferentes.webp"],
  "/gerador-de-nick": ["/images/como-criar-nick.webp"],
  "/letras-para-tiktok": ["/images/letras-para-tiktok.webp", "/images/como-usar-letras-tiktok.webp"],
  "/letras-para-whatsapp": ["/images/letras-para-whatsapp.webp", "/images/como-usar-letras-whatsapp.webp"],
  "/nome-invisivel": ["/images/nome-invisivel-copiar.webp", "/images/como-colocar-nome-invisivel.webp"],
};

function blogImages(): Record<string, string[]> {
  return Object.fromEntries(
    blogPosts.map((p) => [
      `/blog/${p.slug}`,
      [p.cover.src, ...parseMarkdown(p.body).flatMap((b) => (b.type === "img" ? [b.src] : []))],
    ]),
  );
}

/** Site-relative image paths for a page path ("/", "/letras-para-tiktok", "/blog/…"). */
export const pageImages: Record<string, string[]> = { ...staticPageImages, ...blogImages() };
