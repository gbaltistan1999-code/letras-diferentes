import Link from "next/link";
import { AlphabetPicker } from "@/components/AlphabetPicker";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { CopyButton } from "@/components/CopyButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { alphabetPage } from "@/data/style-pages";
import { ALPHABET_GROUPS, ALPHABET_STYLES, alphabetRows } from "@/lib/alphabet";
import { getStyle } from "@/lib/fonts";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${alphabetPage.slug}`;
const count = ALPHABET_STYLES.length;
const title = "Alfabeto de Letras Diferentes: A a Z para Copiar e Colar";
const description = `Alfabeto de letras diferentes completo, de A a Z, em ${count} estilos: cursivo, gótico, negrito, bolha e de cabeça para baixo. Toque na letra e copie.`;

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

const t = (id: string, text: string) => getStyle(id).transform(text, { accents: "plain" });

const faqs: FaqItem[] = [
  {
    question: "Como copiar uma letra do alfabeto diferente?",
    answer:
      "No quadro do topo da página, escolha o estilo e toque na letra: ela é copiada na hora. Para copiar o alfabeto inteiro, use o botão Copiar ao lado de cada linha, mais abaixo.",
  },
  {
    question: "Essas letras funcionam no Instagram, WhatsApp e Free Fire?",
    answer:
      "Sim. São caracteres Unicode, então funcionam em qualquer campo de texto que aceite símbolos: bio e nome do Instagram, mensagens e status do WhatsApp, nick de jogos e muito mais. Em celulares antigos, alguns estilos podem aparecer como quadradinhos.",
  },
  {
    question: "Existe alfabeto diferente com acentos e ç?",
    answer:
      "Não. O Unicode não tem versões estilizadas de letras como á, ã, é e ç. Se você digitar um texto com acento no gerador de letras diferentes, ele mantém essas letras na forma normal para o acento não sumir.",
  },
  {
    question: "Por que algumas letras ficam iguais às normais?",
    answer:
      "Em alguns estilos, o Unicode não tem um caractere para todas as letras. No alfabeto de cabeça para baixo, por exemplo, letras simétricas como O, S e X ficam iguais quando viradas.",
  },
  {
    question: "Dá para escrever uma palavra inteira sem montar letra por letra?",
    answer:
      "Sim. No gerador de letras diferentes da página inicial, você digita o texto e ele aparece em todos os estilos de uma vez, pronto para copiar.",
  },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export default function AlphabetPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: alphabetPage.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Alfabeto de letras diferentes para copiar e colar</h1>
        <p className="mt-3 text-ink-soft">
          Aqui está o alfabeto completo, de A a Z, em {count} estilos de letras diferentes: cursivo ({t("cursiva-negrito", "Abc")}),
          gótico ({t("gotica-negrito", "Abc")}), negrito ({t("negrito-sem-serifa", "Abc")}), bolha ({t("bolhas", "Abc")}) e muito
          mais. Toque em uma letra para copiar só ela, ou copie o alfabeto inteiro de uma vez.
        </p>
      </header>

      <AlphabetPicker />

      <nav aria-label="Estilos de alfabeto" className="mt-8 flex flex-wrap gap-2">
        {ALPHABET_GROUPS.map((g) => (
          <a
            key={g.id}
            href={`#${g.id}`}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
          >
            {g.heading.replace(/^Alfabeto (com letras de |de letras |de |em )?/, "").replace(/^./, (c) => c.toUpperCase())}
          </a>
        ))}
      </nav>

      <article className="mt-10 space-y-12">
        {ALPHABET_GROUPS.map((g) => (
          <section key={g.id} aria-labelledby={g.id}>
            <H2 id={g.id}>{g.heading}</H2>
            <p className="mt-2 text-ink-soft">{g.intro}</p>
            <div className="mt-4 space-y-4">
              {g.styles.map((s) => (
                <div key={s.id} className="rounded-2xl border border-line bg-surface p-4">
                  <h3 className="text-base font-semibold">{s.name}</h3>
                  <ul className="mt-2 space-y-2">
                    {alphabetRows(s.id).map((r) => {
                      const text = r.chars.join(" ");
                      return (
                        <li key={r.id} className="flex items-center gap-3 border-t border-line pt-2 first:border-0 first:pt-0">
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">{r.label}</p>
                            <p className="mt-0.5 font-[family-name:var(--font-symbols)] text-lg leading-relaxed text-ink [overflow-wrap:anywhere]">
                              {text}
                            </p>
                          </div>
                          <CopyButton text={text} label={`Copiar ${r.label.toLowerCase()} em ${s.name}`} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section aria-labelledby="como-usar">
          <H2 id="como-usar">Como usar o alfabeto de letras diferentes</H2>
          <div className="prose-content mt-4">
            <ol>
              <li>Escolha o estilo no quadro do topo da página.</li>
              <li>Toque nas letras que quiser. Cada uma é copiada na hora e também aparece na barra logo abaixo.</li>
              <li>Para uma palavra inteira, toque nas letras em ordem e use o botão Copiar da barra.</li>
              <li>Cole no Instagram, no WhatsApp, no jogo ou onde quiser.</li>
            </ol>
            <p>
              Montar letra por letra é ótimo para iniciais, monogramas e nicks curtos. Para frases, é mais rápido usar o{" "}
              <Link href="/">gerador de letras diferentes</Link>: você digita o texto e vê todos os estilos de uma vez.
            </p>
          </div>
        </section>

        <section aria-labelledby="dicas">
          <H2 id="dicas">Dicas para usar letras do alfabeto diferentes</H2>
          <div className="prose-content mt-4">
            <ul>
              <li>
                <strong>Iniciais e monogramas:</strong> duas letras em cursiva ou gótica, como {t("cursiva-negrito", "A")} &{" "}
                {t("cursiva-negrito", "J")}, ficam lindas na bio ou no nome do perfil.
              </li>
              <li>
                <strong>Combine com símbolos:</strong> uma letra entre corações ou estrelas, como ♡ {t("cursiva", "M")} ♡, vira um
                enfeite. Veja mais em <Link href="/simbolos">símbolos para copiar</Link>.
              </li>
              <li>
                <strong>Nomes estilosos:</strong> para escrever seu nome inteiro com molduras e símbolos, use o{" "}
                <Link href="/nome-personalizado">nome personalizado</Link>.
              </li>
              <li>
                <strong>Tatuagem:</strong> estas letras são caracteres de texto. Para ver como uma frase fica tatuada, compare as
                fontes em <Link href="/letras-para-tatuagem">letras para tatuagem</Link>.
              </li>
              <li>
                <strong>Quadradinhos:</strong> se alguma letra aparecer como um quadrado vazio, o aparelho não tem aquele
                caractere. Entenda em{" "}
                <Link href="/blog/letras-diferentes-quadradinhos-unicode">por que as letras diferentes viram quadradinhos</Link>.
              </li>
            </ul>
          </div>
        </section>

        <Faq items={faqs} />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/", label: "Gerador de letras diferentes", description: "Digite um texto e veja todos os estilos." },
            { href: "/letras-cursivas", label: "Letras cursivas", description: "Cursiva, cursiva em negrito e itálico." },
            { href: "/letras-goticas", label: "Letras góticas", description: "Fraktur clássica e em negrito." },
            { href: "/letras-pequenas", label: "Letras pequenas", description: "Versalete, sobrescrito e subscrito." },
            { href: "/simbolos", label: "Símbolos para copiar", description: "Estrelas, corações e enfeites." },
            { href: "/estilos-de-letras", label: "Todos os estilos de letras", description: "Todas as páginas de estilos em um lugar." },
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Alfabeto de letras diferentes", description, path })} />
    </div>
  );
}
