import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TattooGenerator } from "@/components/TattooGenerator";
import { navPages, tattooPage } from "@/data/style-pages";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import { tattooFonts } from "@/lib/tattoo-fonts";
import type { FaqItem } from "@/types";

const path = `/${tattooPage.slug}`;
const title = "Letras para Tatuagem: Gerador de Fontes para Tatuagem Online";
const description =
  "Gerador de letras para tatuagem grátis: digite um nome, data ou frase e veja em fontes góticas, cursivas, caligrafia e minimalistas. Copie ou visualize antes de tatuar.";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

const tattooStyles = [
  {
    name: "Gótica / Old English",
    text: "Traços grossos e angulosos, inspirados na escrita medieval. Muito usada em sobrenomes, datas e palavras curtas e marcantes, como “Família”. Precisa de espaço: em tamanho pequeno, as letras podem ficar difíceis de ler.",
  },
  {
    name: "Cursiva",
    text: "Letras ligadas, que lembram a escrita à mão. Combina com nomes, frases curtas e homenagens. Fica bem em linhas que acompanham o corpo, como na costela ou no antebraço.",
  },
  {
    name: "Caligrafia",
    text: "Cursiva mais elaborada, com floreios e contraste entre traços finos e grossos. Ideal para frases delicadas e nomes de filhos. Floreios exigem um tamanho um pouco maior.",
  },
  {
    name: "Minimalista / Fine Line",
    text: "Letras simples e traço fino, sem enfeites. Discreta e elegante, ótima para palavras únicas no pulso, no dedo ou atrás da orelha. Converse com o tatuador sobre a durabilidade do traço fino.",
  },
  {
    name: "Máquina de Escrever",
    text: "Visual de texto datilografado, com letras do mesmo tamanho. Funciona bem em citações, trechos de livros e datas, com um ar vintage.",
  },
  {
    name: "Romana / Serifada",
    text: "Letras clássicas com serifas, como nas inscrições antigas. Passa seriedade e é muito usada em datas, números romanos e frases em latim, como “Carpe Diem”.",
  },
  {
    name: "Lettering / Chicano",
    text: "Letras desenhadas à mão, com curvas exageradas e muito volume, típicas do estilo chicano. Costuma ser criada sob medida pelo tatuador, então use as fontes daqui só como ponto de partida.",
  },
];

const phraseIdeas = [
  { theme: "Fé", phrases: ["Deus é fiel", "Tudo posso naquele que me fortalece", "Fé em Deus"] },
  { theme: "Família", phrases: ["Família", "Amor de mãe", "Meu porto seguro"] },
  { theme: "Superação", phrases: ["Resiliência", "Força e Honra", "Isso também vai passar"] },
  { theme: "Liberdade", phrases: ["Liberdade", "Viva sem arrependimentos", "Carpe Diem"] },
  { theme: "Gratidão", phrases: ["Gratidão", "Seja Luz", "Grato por tudo"] },
];

const faqs: FaqItem[] = [
  {
    question: "Qual é a melhor letra para tatuagem?",
    answer:
      "Depende do estilo e do tamanho. Letras góticas e romanas passam força e funcionam bem em sobrenomes e datas; cursivas e caligrafias combinam com nomes e frases delicadas; o estilo minimalista é ideal para palavras pequenas e discretas. Em qualquer caso, a melhor letra é a que continua legível no tamanho e no local escolhidos.",
  },
  {
    question: "Como ver meu nome em letras para tatuagem?",
    answer:
      "Digite seu nome na caixa do gerador no topo desta página. Na aba “Copiar e colar” ele aparece em vários estilos de letras; na aba “Visualizar como tatuagem” você vê o nome em fontes reais sobre um fundo em tom de pele e pode ajustar o tamanho.",
  },
  {
    question: "Posso levar a fonte gerada para o tatuador?",
    answer:
      "Sim. Tire um print da fonte que você gostou ou copie o texto e mostre ao tatuador. Ele usa a referência para desenhar a tatuagem e pode ajustar espaçamento, tamanho e traço para que o resultado fique bom na pele.",
  },
  {
    question: "As letras funcionam com acentos e ç?",
    answer:
      "Sim. Na aba “Visualizar como tatuagem” as fontes reais mostram acentos e ç normalmente. Na aba “Copiar e colar”, o acento é encaixado sobre a letra estilizada; se em algum aparelho ele aparecer fora do lugar, marque a opção para deixar as letras acentuadas na forma normal. Revise sempre a acentuação com o tatuador antes de tatuar.",
  },
  {
    question: "Qual o tamanho mínimo para uma tatuagem escrita?",
    answer:
      "Como referência geral, letras com cerca de 3 a 5 mm de altura costumam ser o mínimo para continuarem legíveis. Fontes com muitos detalhes, como a gótica e a caligrafia, precisam de mais espaço. O tamanho ideal depende do local e da técnica, então confirme com o seu tatuador.",
  },
  {
    question: "O gerador de letras para tatuagem é grátis?",
    answer:
      "Sim. O gerador é gratuito, não exige cadastro e funciona direto no navegador. O texto que você digita não é enviado nem salvo.",
  },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export default function TattooPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: "Letras para Tatuagem", path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Letras para Tatuagem</h1>
        <p className="mt-3 text-ink-soft">
          Digite um nome, data ou frase e veja na hora em diferentes fontes para tatuagem: gótica,
          cursiva, caligrafia, old english e minimalista. Depois, copie o texto ou visualize como
          ficaria na pele antes de mostrar ao seu tatuador.
        </p>
      </header>

      <TattooGenerator fonts={tattooFonts} />

      <article className="mt-16 space-y-14">
        <section aria-labelledby="como-usar">
          <H2 id="como-usar">Como usar o gerador de letras para tatuagem</H2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Digite o texto", "Escreva o nome, a data ou a frase da sua tatuagem, ou toque em uma das ideias."],
              ["Compare os estilos", "Veja os tipos de letras para copiar ou a prévia com fontes reais em tom de pele."],
              ["Mostre ao tatuador", "Copie o texto ou tire um print da fonte preferida e leve como referência."],
            ].map(([step, text], i) => (
              <li key={step} className="flex gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft font-semibold text-accent-strong">
                  {i + 1}
                </span>
                <span>
                  <span className="font-semibold">{step}</span>
                  <span className="mt-0.5 block text-sm text-ink-soft">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="tipos">
          <H2 id="tipos">Tipos de letras para tatuagem</H2>
          <p className="mt-3 text-ink-soft">
            Cada fonte de letras para tatuagem transmite uma ideia diferente. Veja quando usar cada
            estilo:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {tattooStyles.map((s) => (
              <li key={s.name} className="rounded-xl border border-line bg-surface p-4">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="masculina">
          <H2 id="masculina">Letras para tatuagem masculina</H2>
          <div className="prose-content mt-4">
            <p>
              Nas letras para tatuagem masculina, costumam se destacar os estilos de traço forte:
              a <strong>gótica negrito</strong> e a <strong>old english</strong> para sobrenomes e
              palavras de impacto, o <strong>lettering chicano</strong> para frases com bastante
              volume e as <strong>fontes romanas</strong> para datas e números romanos.
            </p>
            <ul>
              <li><strong>Antebraço:</strong> bom para frases em uma ou duas linhas, fácil de ver.</li>
              <li><strong>Peito:</strong> comporta letras grandes, como sobrenomes em old english.</li>
              <li><strong>Costas:</strong> espaço para frases longas ou lettering chicano.</li>
              <li><strong>Pescoço:</strong> palavras curtas; é um local muito visível, então pense bem.</li>
            </ul>
            <p>
              Exemplos de frases: <em>Força e Honra</em>, <em>Família</em>, o sobrenome da família
              ou uma data importante em algarismos romanos.
            </p>
          </div>
        </section>

        <section aria-labelledby="feminina">
          <H2 id="feminina">Letras para tatuagem feminina</H2>
          <div className="prose-content mt-4">
            <p>
              Para a tatuagem feminina, são comuns a <strong>cursiva fina</strong>, a{" "}
              <strong>caligrafia com floreios</strong> e o estilo <strong>minimalista fine line</strong>,
              que deixam a tatuagem escrita leve e delicada.
            </p>
            <ul>
              <li><strong>Costela:</strong> frases que acompanham a curva do corpo.</li>
              <li><strong>Clavícula:</strong> palavras ou frases curtas em uma linha.</li>
              <li><strong>Pulso:</strong> uma palavra em letra minimalista ou cursiva.</li>
              <li><strong>Nuca:</strong> nomes e palavras pequenas, discretas no dia a dia.</li>
              <li><strong>Tornozelo:</strong> palavras curtas ou datas.</li>
            </ul>
            <p>
              Exemplos de frases: <em>Gratidão</em>, <em>Seja Luz</em> ou o nome dos filhos em
              caligrafia.
            </p>
          </div>
        </section>

        <section aria-labelledby="frases">
          <H2 id="frases">Ideias de frases para tatuagem escrita</H2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {phraseIdeas.map((group) => (
              <li key={group.theme} className="rounded-xl border border-line bg-surface p-4">
                <h3 className="font-semibold">{group.theme}</h3>
                <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                  {group.phrases.map((p) => (
                    <li key={p}>“{p}”</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-soft">
            Gostou de alguma? Digite a frase no gerador acima para ver em todos os estilos.
          </p>
        </section>

        <section aria-labelledby="dicas">
          <H2 id="dicas">Dicas antes de fazer sua tatuagem escrita</H2>
          <div className="prose-content mt-4">
            <ul>
              <li>
                <strong>Confira a ortografia:</strong> revise letra por letra, inclusive acentos e
                cedilha. Peça para outra pessoa ler também — um erro na pele é difícil de corrigir.
              </li>
              <li>
                <strong>Pense no tamanho:</strong> fontes com muitos detalhes, como a gótica e a
                caligrafia, precisam de mais espaço para não virarem um borrão com o tempo.
              </li>
              <li>
                <strong>Escolha bem o local:</strong> a curvatura e o movimento do corpo mudam a forma
                como as letras ficam. Frases longas pedem áreas maiores.
              </li>
              <li>
                <strong>Legibilidade em primeiro lugar:</strong> uma fonte bonita que ninguém consegue
                ler perde o sentido. Teste o texto em tamanho real antes.
              </li>
              <li>
                <strong>Converse com o tatuador:</strong> leve a referência, mas ouça a opinião
                dele sobre fonte, tamanho e posição. Ele conhece o que funciona na pele.
              </li>
            </ul>
          </div>
        </section>

        <Faq items={faqs} heading="Perguntas frequentes sobre letras para tatuagem" />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/", label: "Gerador de letras diferentes", description: "Todos os estilos de letras para copiar e colar." },
            ...navPages
              .filter((p) => p.slug !== tattooPage.slug)
              .map((p) => ({ href: `/${p.slug}`, label: p.navLabel, description: p.description })),
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Gerador de letras para tatuagem", description, path })} />
    </div>
  );
}
