import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts } from "@/data/blog";
import { pageImages } from "@/data/page-images";

describe("page images for the sitemap", () => {
  it("only lists files that exist in /public", () => {
    for (const [page, images] of Object.entries(pageImages)) {
      for (const src of images) expect(existsSync(join(process.cwd(), "public", src)), `${page}: ${src}`).toBe(true);
    }
  });

  it("includes every blog cover and the images inside posts", () => {
    for (const p of blogPosts) expect(pageImages[`/blog/${p.slug}`]).toContain(p.cover.src);
    expect(pageImages["/blog/frases-para-status-do-whatsapp"]).toContain("/blog/frase-motivacional-status.webp");
  });
});
