import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, formatDate } from "@/data/blog";
import { readingMinutes } from "@/lib/markdown";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const title = "Blog: dicas de letras diferentes, nicks e bio";
const description =
  "Dicas e ideias para usar letras diferentes: nomes para Free Fire, frases para bio do Instagram e guias para entender como as letras estilizadas funcionam.";

export const metadata = buildMetadata({ title, description, path: "/blog" });

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 text-ink-soft">
          Ideias, listas prontas para copiar e guias para aproveitar melhor as letras diferentes no
          Instagram, no Free Fire, no WhatsApp e onde mais você quiser.
        </p>
      </header>

      {blogPosts.length === 0 ? (
        <p className="rounded-xl border border-dashed border-line p-6 text-center text-ink-soft">
          Os primeiros artigos estão chegando. Enquanto isso, experimente o{" "}
          <Link href="/" className="text-accent underline underline-offset-2">
            gerador de letras diferentes
          </Link>
          .
        </p>
      ) : (
        <ul className="grid gap-4">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="group relative grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent sm:grid-cols-[15rem_1fr]">
                {/* Decorative thumbnail: the title right next to it already names the post. */}
                <div className="p-4 pb-0 sm:self-center sm:pb-4 sm:pr-0">
                  <Image
                    src={post.cover.src}
                    alt=""
                    width={1200}
                    height={630}
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="h-auto w-full rounded-xl border border-line"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink-soft">
                    <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time> ·{" "}
                    {readingMinutes(post.body)} min de leitura
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{post.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent" aria-hidden="true">
                    Ler artigo
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `Blog ${siteConfig.name}`,
          description,
          url: absoluteUrl("/blog"),
          inLanguage: siteConfig.language,
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(`/blog/${p.slug}`),
            datePublished: p.datePublished,
            image: absoluteUrl(p.cover.src),
          })),
        }}
      />
    </div>
  );
}
