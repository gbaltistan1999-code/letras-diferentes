import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { HUB_SLUG, hubGroups } from "@/data/hub";
import { getNavPage } from "@/data/style-pages";
import { getStyle, STYLES } from "@/lib/fonts";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${HUB_SLUG}`;
const title = "Estilos de Letras: Todos os Geradores para Copiar e Colar";
const description =
  "Todos os estilos de letras do Letras Diferentes em um só lugar: cursivas, góticas, pequenas, riscadas, para Instagram, WhatsApp, TikTok, Free Fire e nick.";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

const total = hubGroups.reduce((n, g) => n + g.items.length, 0);

const groups = hubGroups.map((g) => ({
  ...g,
  items: g.items.map((item) => {
    const page = getNavPage(item.slug)!;
    return {
      ...item,
      label: page.navLabel,
      description: page.description,
      preview: getStyle(item.example).transform(item.sample, { accents: "plain" }),
    };
  }),
}));

const faqs: FaqItem[] = [
  {
    question: "Qual é a diferença entre esta página e o gerador da página inicial?",
    answer: `O gerador da página inicial mostra todos os ${STYLES.length} estilos de uma vez. Aqui você encontra páginas separadas por tipo de letra e por app, cada uma com só os estilos certos, exemplos e o passo a passo daquele lugar.`,
  },
  {
    question: "Qual estilo de letra aparece em mais celulares?",
    answer:
      "Negrito, itálico e letras pequenas (versalete) aparecem bem em quase todos os aparelhos. Estilos raros, como alguns símbolos e letras de cabeça para baixo, podem virar quadradinhos em celulares antigos.",
  },
  {
    question: "Os estilos de letras são grátis?",
    answer: "Sim. Todas as páginas são grátis, sem cadastro e funcionam no celular e no computador. O texto é convertido no seu navegador e não é enviado.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Estilos de letras",
  numberOfItems: total,
  itemListElement: groups
    .flatMap((g) => g.items)
    .map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.label, url: absoluteUrl(`/${item.slug}`) })),
};

export default function StylesHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: "Estilos de letras", path }]} />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Estilos de letras: todos os geradores em um só lugar</h1>
        <p className="mt-3 text-ink-soft">
          Escolha o estilo de letra ou o app onde você vai usar. São {total} páginas, cada uma com um gerador próprio,
          exemplos prontos para copiar e dicas de onde as letras funcionam. Quer ver tudo de uma vez? O{" "}
          <Link href="/" className="text-accent underline underline-offset-2">
            gerador de letras diferentes
          </Link>{" "}
          mostra os {STYLES.length} estilos juntos.
        </p>
        <nav aria-label="Grupos de estilos" className="mt-5 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
            >
              {g.heading}
            </a>
          ))}
        </nav>
      </header>

      <div className="space-y-14">
        {groups.map((g) => (
          <section key={g.id} aria-labelledby={g.id} className="scroll-mt-24">
            <h2 id={g.id} className="text-2xl font-semibold tracking-tight">
              {g.heading}
            </h2>
            <p className="mt-2 text-ink-soft">{g.intro}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {g.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-accent"
                  >
                    <span aria-hidden className="font-[family-name:var(--font-symbols)] text-xl leading-snug text-accent-strong [overflow-wrap:anywhere]">
                      {item.preview}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1.5 font-semibold">
                      {item.label}
                      <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1 text-sm leading-relaxed text-ink-soft">{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="como-escolher">
          <h2 id="como-escolher" className="text-2xl font-semibold tracking-tight">
            Como escolher o estilo de letra
          </h2>
          <div className="prose-content mt-4">
            <ul>
              <li>
                <strong>Para o nome do perfil:</strong> cursivas, góticas ou um{" "}
                <Link href="/nome-personalizado">nome personalizado</Link> com símbolos chamam atenção sem ficar difíceis de ler.
              </li>
              <li>
                <strong>Para a bio e o recado:</strong> letras pequenas e itálico deixam a frase delicada e aparecem em quase
                todos os celulares.
              </li>
              <li>
                <strong>Para jogos:</strong> o nick tem limite de caracteres, então use o{" "}
                <Link href="/gerador-de-nick">gerador de nick</Link>, que mostra o tamanho de cada opção.
              </li>
              <li>
                <strong>Para mensagens importantes:</strong> prefira negrito. Estilos raros podem virar quadradinhos; entenda{" "}
                <Link href="/blog/letras-diferentes-quadradinhos-unicode">por que isso acontece</Link>.
              </li>
            </ul>
          </div>
        </section>

        <Faq items={faqs} />
      </div>

      <JsonLd data={itemListSchema} />
    </div>
  );
}
