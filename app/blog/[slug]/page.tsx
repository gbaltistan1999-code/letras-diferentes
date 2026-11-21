import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { JsonLd } from "@/components/JsonLd";
import { Markdown } from "@/components/Markdown";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { AuthorBox } from "@/components/AuthorBox";
import { authorPath, getAuthor } from "@/data/authors";
import { blogPosts, formatDate, getBlogPost } from "@/data/blog";
import { faqFromBlocks, parseMarkdown, readingMinutes } from "@/lib/markdown";
import { blogPostingSchema, buildMetadata, faqSchema } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle ?? post.title,
    // Long headlines would be cut off in Google with the " | Letras Diferentes" suffix.
    absoluteTitle: (post.metaTitle ?? post.title).length > 42,
    description: post.description,
    path: `/blog/${post.slug}`,
    article: { publishedTime: post.datePublished, modifiedTime: post.dateModified, author: getAuthor(post.author).name },
    image: post.cover,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const author = getAuthor(post.author);
  const blocks = parseMarkdown(post.body);
  const faqs = faqFromBlocks(blocks);
  const toc = blocks.flatMap((b) => (b.type === "h2" ? [b] : []));
  const others = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
      />

      <article>
        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-ink-soft">
            <AuthorAvatar author={author} size={40} />
            <p>
              Por{" "}
              <Link href={authorPath(author)} rel="author" className="font-semibold text-ink hover:text-accent hover:underline">
                {author.name}
              </Link>
              <br />
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              {post.dateModified && post.dateModified !== post.datePublished && (
                <>
                  {" "}
                  · Atualizado em <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
                </>
              )}{" "}
              · {readingMinutes(post.body)} min de leitura
            </p>
          </div>
        </header>

        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          width={1200}
          height={630}
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="mb-8 h-auto w-full rounded-2xl border border-line"
        />

        {toc.length > 2 && (
          <nav aria-label="Neste artigo" className="mb-8 rounded-2xl border border-line bg-surface p-5">
            <p className="text-sm font-semibold">Neste artigo</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-ink-soft">
              {toc.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="hover:text-accent hover:underline">
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Markdown blocks={blocks} />

        <Link
          href={post.relatedTool.href}
          className="mt-10 flex items-center justify-between gap-3 rounded-2xl bg-ink px-5 py-4 font-semibold text-paper transition-opacity hover:opacity-90"
        >
          {post.relatedTool.label}
          <ArrowRight size={18} aria-hidden />
        </Link>

        <AuthorBox author={author} />
      </article>

      {others.length > 0 && (
        <LinkGrid
          heading="Leia também"
          id="leia-tambem"
          links={others.map((p) => ({ href: `/blog/${p.slug}`, label: p.title, description: p.excerpt ?? p.description }))}
        />
      )}

      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.description,
          path,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          author: {
            name: author.name,
            path: authorPath(author),
            jobTitle: author.role,
            sameAs: author.links.map((l) => l.href),
          },
          image: post.cover.src,
        })}
      />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
    </div>
  );
}
