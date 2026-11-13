import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Examples, LinkGrid, Sections } from "@/components/ContentBlocks";
import { Faq } from "@/components/Faq";
import { Generator } from "@/components/Generator";
import { JsonLd } from "@/components/JsonLd";
import { SymbolGrid } from "@/components/SymbolGrid";
import { getStylePage, stylePages } from "@/data/style-pages";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";

// Only the slugs in data/style-pages.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return stylePages.map((p) => ({ estilo: p.slug }));
}

type Props = { params: Promise<{ estilo: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getStylePage((await params).estilo);
  if (!page) return {};
  return buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/${page.slug}` });
}

export default async function StylePageRoute({ params }: Props) {
  const page = getStylePage((await params).estilo);
  if (!page) notFound();

  const related = page.related.map((slug) => getStylePage(slug)!).filter(Boolean);
  const path = `/${page.slug}`;

  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: page.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 text-ink-soft">{page.intro}</p>
      </header>

      {page.symbolGroups && (
        <div className="mb-12">
          <SymbolGrid groups={page.symbolGroups} />
        </div>
      )}

      {page.symbolGroups && (
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Combine com letras diferentes</h2>
      )}
      <Generator
        sampleText={page.generator.sampleText}
        categories={page.generator.categories}
        styleIds={page.generator.styleIds}
        showFilter={false}
      />
      <p className="mt-4 text-sm text-ink-soft">
        Quer ver todos os estilos?{" "}
        <Link href="/" className="text-accent underline underline-offset-2">
          Abra o gerador completo de letras diferentes
        </Link>
        .
      </p>

      {page.examples.length > 0 && <Examples examples={page.examples} />}

      <div className="mt-6">
        <Sections sections={page.sections} />
      </div>

      <Faq items={page.faqs} />

      <LinkGrid
        heading="Veja também"
        links={[
          ...related.map((p) => ({ href: `/${p.slug}`, label: p.navLabel, description: p.metaDescription })),
          { href: "/", label: "Gerador completo", description: "Todos os estilos de letras em uma só página." },
        ]}
      />

      <JsonLd
        data={webApplicationSchema({ name: page.h1, description: page.metaDescription, path })}
      />
    </div>
  );
}
