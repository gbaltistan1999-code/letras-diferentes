import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { authorPath, authors, DEFAULT_AUTHOR } from "@/data/authors";
import { blogPosts, formatDate } from "@/data/blog";
import { absoluteUrl, buildMetadata, personSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const findAuthor = (slug: string) => authors.find((a) => a.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = findAuthor((await params).slug);
  if (!author) return {};
  return buildMetadata({
    title: `${author.name}: artigos e perfil`,
    description: `${author.name} trabalha com ${author.role.toLowerCase()} e escreve sobre letras diferentes, nicks e redes sociais no ${siteConfig.name}.`,
    path: authorPath(author),
  });
}

export default async function AuthorPage({ params }: Props) {
  const author = findAuthor((await params).slug);
  if (!author) notFound();

  const posts = blogPosts.filter((p) => (p.author ?? DEFAULT_AUTHOR) === author.slug);
  const path = authorPath(author);

  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: author.name, path },
        ]}
      />

      <header className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center">
        <AuthorAvatar author={author} size={88} />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{author.name}</h1>
          <p className="mt-1 font-medium text-accent">{author.role}</p>
          <p className="mt-3 leading-relaxed text-ink-soft">{author.bio}</p>
          {author.links.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-3 text-sm">
              {author.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer me" className="text-accent underline underline-offset-2">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <section aria-labelledby="artigos" className="mt-12">
        <h2 id="artigos" className="text-2xl font-semibold tracking-tight">
          Artigos de {author.name}
        </h2>
        {posts.length === 0 ? (
          <p className="mt-4 text-ink-soft">Nenhum artigo publicado ainda.</p>
        ) : (
          <ul className="mt-5 grid gap-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent"
                >
                  <span className="text-xs text-ink-soft">{formatDate(p.datePublished)}</span>
                  <span className="mt-1 block font-semibold">{p.title}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: absoluteUrl(path),
          inLanguage: siteConfig.language,
          mainEntity: personSchema({
            name: author.name,
            path,
            jobTitle: author.role,
            description: author.bio,
            sameAs: author.links.map((l) => l.href),
          }),
        }}
      />
    </div>
  );
}
