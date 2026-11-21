import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { NickCard as Nick } from "@/components/NickCard";
import { NickGenerator } from "@/components/NickGenerator";
import { femNickPage } from "@/data/style-pages";
import { getStyle } from "@/lib/fonts";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${femNickPage.slug}`;
const title = "Nomes para Free Fire Feminino: +100 Nicks Bonitos para Copiar";
const description =
  "Nomes para Free Fire feminino para copiar e colar: nicks fofos, com símbolos, aesthetic, curtos e poderosos. Escolha o seu e brilhe no jogo!";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

/** Styled letters built in code, so editors can't break the Unicode characters. */
const t = (id: string, text: string) => getStyle(id).transform(text, { accents: "plain" });
const cursiva = (s: string) => t("cursiva", s);
const cursivaN = (s: string) => t("cursiva-negrito", s);
const pequenas = (s: string) => t("versalete", s);
const gotica = (s: string) => t("gotica-negrito", s);

const groups: { id: string; heading: string; intro?: string; nicks: string[] }[] = [
  {
    id: "fofos",
    heading: "Nomes fofos para Free Fire feminino",
    nicks: ["♡Docinho♡", "꧁Moranguinho꧂", "Fofinha☆", "ʚLunaɞ", "Ursinha♡", "˚ʚMelɞ˚", "☆Estrelinha☆", "Pipoquinha", "♡Florzinha♡", "Bebelzinha", "Nuvenzinha☁", "Gatinha♡"],
  },
  {
    id: "simbolos",
    heading: "Nomes femininos com símbolos",
    nicks: ["꧁Rainha꧂", "★Diva★", "ღBellaღ", "✿Flor✿", "♛Queen♛", "☾Lua☽", "❀Rosa❀", "⚡Raio⚡", "♕Princesa♕", "✧Gabi✧", "✦Jade✦", "ღMariღ"],
  },
  {
    id: "aesthetic",
    heading: "Nomes aesthetic para Free Fire feminino",
    nicks: [
      pequenas("Lua"), cursivaN("Angel"), `˚✧${pequenas("Blue")}✧˚`, cursiva("Sofia"), pequenas("Anjo"),
      cursivaN("Moon"), pequenas("Star"), cursiva("Cherry"), `˚${pequenas("Dream")}˚`, cursivaN("Sunny"),
    ],
  },
  {
    id: "poderosos",
    heading: "Nomes femininos poderosos e brabas",
    nicks: [
      "꧁Braba꧂", "乂Sniper乂", "♛Imperatriz", "☠Letal☠", pequenas("Deusa"), gotica("Loba"),
      "⚔Guerreira⚔", gotica("Dark"), "★Lenda★", pequenas("Turbo"), "Pantera", t("negrito-sem-serifa", "Braba"),
    ],
  },
  {
    id: "goticos",
    heading: "Nomes góticos e dark femininos",
    nicks: [gotica("Lilith"), "☾Sombra☽", gotica("Raven"), "☠Morte☠", gotica("Black"), "†Bruxa†", t("gotica", "Night"), "☾Noturna"],
  },
  {
    id: "curtos",
    heading: "Nomes femininos curtos",
    intro: "Nicks curtos são fáceis de lembrar e cabem no limite de caracteres do jogo.",
    nicks: ["Bia", "Lua", "Mel", "☆Ju☆", "Kah", "Lis", "♡Ana♡", "Nina", "Yas", "Duda"],
  },
  {
    id: "ingles",
    heading: "Nomes femininos em inglês",
    nicks: ["Angel", "Queen", "Baby", "Lady", "Sweet", "Killer", "Pinky", "Shadow", "Honey", "Wild", "Lovely", "Cute"],
  },
  {
    id: "coreano-japones",
    heading: "Nomes femininos estilo coreano e japonês",
    nicks: ["ʚSakuraɞ", cursivaN("Mina"), "Yuki☆", cursiva("Kawaii"), "♡Hana♡", "Aiko", "Nari", "✿Mochi✿", "♡Suki♡", "Mei☆"],
  },
];

const pairs: [string, string][] = [
  ["♡Bff1♡", "♡Bff2♡"],
  ["☾Lua", "☀Sol"],
  ["Doce♡", "Amarga♡"],
  ["꧁Anjo꧂", "꧁Demônio꧂"],
  ["Rainha1", "Rainha2"],
];

const guilds = ["♛Rainhas♛", "꧁Divas꧂", "✿Flores✿", "乂Brabas乂", "☾Lunáticas☽", "★Elite★"];


const faqs: FaqItem[] = [
  {
    question: "Qual o limite de caracteres do nome no Free Fire?",
    answer:
      "O nick aceita poucos caracteres (cerca de 12), e símbolos especiais podem contar como mais de um. Se o jogo recusar, use um nick mais curto.",
  },
  {
    question: "Por que meu nick aparece com quadradinhos?",
    answer: "Alguns símbolos não são reconhecidos pelo jogo ou pelo celular. Troque por outro símbolo.",
  },
  {
    question: "Trocar o nome no Free Fire é grátis?",
    answer: "Não. Normalmente é preciso usar um Cartão de Renomear ou diamantes.",
  },
  {
    question: "Posso usar letras diferentes no nome do Free Fire?",
    answer: "Sim. Muitas letras estilizadas funcionam, mas teste antes, porque nem todas são aceitas.",
  },
  {
    question: "Qual o nome feminino mais bonito para Free Fire?",
    answer: `Depende do seu estilo: fofos (♡Docinho♡), poderosos (꧁Braba꧂) ou aesthetic (${pequenas("Lua")}).`,
  },
];

const link = "text-accent underline underline-offset-2";

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export default function FemNickPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: femNickPage.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Nomes para Free Fire Feminino – Nicks Bonitos para Copiar</h1>
        <p className="mt-3 text-ink-soft">
          Procurando um nome para Free Fire feminino que seja bonito, diferente e chame atenção na partida? Aqui você encontra
          mais de 100 nicks femininos prontos para copiar e colar, com símbolos, letras diferentes e estilos fofos, aesthetic e
          poderosos. Toque no nick, copie e cole direto no jogo.
        </p>
      </header>

      <h2 className="sr-only">Crie um nick feminino com o seu nome</h2>
      <p className="mb-3 text-sm text-ink-soft">
        Digite seu nome para ver ele em estilos femininos, como ♡Nome♡, ✿Nome✿ e ʚNomeɞ:
      </p>
      <NickGenerator categories={["feminino", "fofo"]} sample="Luna" />

      <nav aria-label="Categorias de nomes" className="mt-8 flex flex-wrap gap-2">
        {[...groups.map((g) => ({ id: g.id, label: g.heading })), { id: "dupla", label: "Dupla e amigas" }, { id: "guilda", label: "Guilda feminina" }].map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
          >
            {c.label.replace(/ para Free Fire feminino| femininos?/g, "").replace(/^Nomes /, "")}
          </a>
        ))}
      </nav>

      <article className="mt-10 space-y-12">
        {groups.map((g) => (
          <section key={g.id} aria-labelledby={g.id}>
            <H2 id={g.id}>{g.heading}</H2>
            {g.intro && <p className="mt-2 text-ink-soft">{g.intro}</p>}
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {g.nicks.map((n) => (
                <Nick key={n} nick={n} />
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="dupla">
          <H2 id="dupla">Nomes para dupla e amigas</H2>
          <p className="mt-2 text-ink-soft">Um nick para cada uma. Toque em Copiar em cada lado.</p>
          <ul className="mt-4 grid gap-2.5">
            {pairs.map(([a, b]) => (
              <li key={a + b} className="grid gap-2.5 sm:grid-cols-2">
                <ul className="contents">
                  <Nick nick={a} />
                  <Nick nick={b} />
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="guilda">
          <H2 id="guilda">Nomes para guilda feminina</H2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {guilds.map((n) => (
              <Nick key={n} nick={n} />
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink-soft">
            Mais ideias para o time no <Link href="/gerador-de-nick" className={link}>gerador de nick</Link>, na categoria Clã.
          </p>
        </section>

        <section aria-labelledby="como-colocar">
          <H2 id="como-colocar">Como colocar símbolos no nome do Free Fire?</H2>
          <div className="prose-content mt-4">
            <ol>
              <li>Copie o nick que você escolheu nesta página.</li>
              <li>Abra o Free Fire e toque no seu perfil.</li>
              <li>Toque no ícone de editar ao lado do seu nome.</li>
              <li>Apague o nome atual e cole o novo.</li>
              <li>Confirme a troca (pode precisar de um Cartão de Renomear ou diamantes).</li>
            </ol>
            <p>
              Quer um espaço que o jogo aceita entre as palavras, ou um nick todo em branco? Use o{" "}
              <Link href="/nome-invisivel">nome invisível</Link>. Para mais símbolos, como ꧁꧂, ♛ e ღ, veja os{" "}
              <Link href="/simbolos">símbolos para copiar</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="criar">
          <H2 id="criar">Crie seu próprio nick feminino</H2>
          <div className="prose-content mt-4">
            <p>
              Quer um nome único? Digite seu nome no nosso <Link href="/gerador-de-nick">gerador de nick</Link> e veja ele em
              dezenas de estilos diferentes, com símbolos e letras bonitas. Depois é só copiar e colar. O passo a passo completo
              para trocar o nick está em <Link href="/letras-para-free-fire">letras para Free Fire</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="dicas">
          <H2 id="dicas">Dicas para escolher um bom nome</H2>
          <div className="prose-content mt-4">
            <ul>
              <li>Escolha algo curto e fácil de lembrar.</li>
              <li>Misture um símbolo com seu nome ou apelido.</li>
              <li>Evite usar muitos símbolos, porque o nick fica difícil de ler.</li>
              <li>
                Teste antes: alguns símbolos podem não aparecer em todos os celulares. Os nicks com aviso de tamanho nesta página
                podem passar do limite do jogo.
              </li>
            </ul>
          </div>
        </section>

        <Faq items={faqs} />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/nomes-para-free-fire-masculino", label: "Nomes para Free Fire masculino", description: "Mais de 100 nicks masculinos." },
            { href: "/gerador-de-nick", label: "Gerador de nick", description: "Seu nome com símbolos em vários estilos." },
            { href: "/letras-para-free-fire", label: "Letras para Free Fire", description: "Letras diferentes e como trocar o nick." },
            { href: "/nome-invisivel", label: "Nome invisível", description: "Espaço invisível e nick em branco." },
            { href: "/simbolos", label: "Símbolos para copiar", description: "꧁ ꧂ ♛ ღ ✿ e muito mais." },
            { href: "/blog/nomes-para-free-fire", label: "Nomes para Free Fire", description: "40 ideias de nick para todos os estilos." },
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Gerador de nomes para Free Fire feminino", description, path })} />
    </div>
  );
}
