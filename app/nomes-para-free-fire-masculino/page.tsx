import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { NickCard as Nick } from "@/components/NickCard";
import { NickGenerator } from "@/components/NickGenerator";
import { mascNickPage } from "@/data/style-pages";
import { getStyle } from "@/lib/fonts";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${mascNickPage.slug}`;
const title = "Nomes para Free Fire Masculino: +100 Nicks Brabos para Copiar";
const description =
  "Nomes para Free Fire masculino para copiar e colar: nicks brabos, com símbolos, dark, curtos, em inglês e para clã. Escolha o seu e domine a partida!";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

/** Styled letters built in code, so editors can't break the Unicode characters. */
const t = (id: string, text: string) => getStyle(id).transform(text, { accents: "plain" });
const negrito = (s: string) => t("negrito", s);
const gotica = (s: string) => t("gotica-negrito", s);
const pequenas = (s: string) => t("versalete", s);

const groups: { id: string; heading: string; intro?: string; nicks: string[] }[] = [
  {
    id: "brabos",
    heading: "Nomes brabos para Free Fire masculino",
    nicks: ["꧁Brabo꧂", "乂Sniper乂", "☠Letal☠", "⚡Raio⚡", "★Lenda★", "Monstro亗", "×͜×Insano", "⚔Guerreiro⚔", "Matador☠", "♛Rei♛", "Fera乂", "Pesadelo"],
  },
  {
    id: "simbolos",
    heading: "Nomes masculinos com símbolos",
    nicks: ["乂Lobo乂", "亗Ninja亗", "☠Ghost☠", "⚡Flash⚡", "★Ace★", "♛King♛", "【Titan】", "✠Templário", "么Ronin", "×͜×Reaper", "⚔Spartan⚔", "『Kaiser』"],
  },
  {
    id: "letras-diferentes",
    heading: "Nomes masculinos com letras diferentes",
    intro: "O mesmo nick fica outro com uma letra diferente. Negrito e gótica são as que mais aparecem no ranking.",
    nicks: [
      negrito("Sniper"), gotica("Reaper"), t("contorno", "Titan"), t("monoespacada", "Hacker"), t("negrito-sem-serifa", "Venom"),
      pequenas("Ghost"), gotica("Lobo"), t("negrito-italico", "Storm"), `乂${pequenas("Shadow")}乂`, `${negrito("Brabo")}亗`,
      t("contorno", "Rei"), gotica("Dark"),
    ],
  },
  {
    id: "dark",
    heading: "Nomes dark e góticos masculinos",
    nicks: ["☾Sombra☽", "☠Caveira☠", gotica("Corvo"), "†Morte†", gotica("Abismo"), "Fantasma☠", "꧁Demônio꧂", t("gotica", "Night")],
  },
  {
    id: "curtos",
    heading: "Nomes masculinos curtos",
    intro: "Nicks curtos são fáceis de lembrar e sobram caracteres para um símbolo ou a tag do clã.",
    nicks: ["Zé", "Kai", "Leo", "Rex", "Max", "Ryu", "Gui", "Theo", "Davi", "Biel", "Enzo", "Caio"],
  },
  {
    id: "ingles",
    heading: "Nomes masculinos em inglês",
    nicks: ["Killer", "Hunter", "Savage", "Beast", "Shadow", "Ghost", "Viper", "Phantom", "Wolf", "Rider", "Toxic", "Joker"],
  },
  {
    id: "japones",
    heading: "Nomes masculinos estilo japonês",
    nicks: ["么Ronin", "Shinobi", "Ryuu", "Kenji", "Akuma", "Kaze乂", "Raijin", "Samurai", "Oni☠", "Yami"],
  },
  {
    id: "engracados",
    heading: "Nomes engraçados para Free Fire masculino",
    intro: "Para quem joga para se divertir. Sem espaços, porque o Free Fire costuma bloquear o espaço comum.",
    nicks: ["NoobPro", "SóCapa", "LagMaster", "MiraDePano", "Rushador", "TôNoLag", "BotRaiz", "VovôSniper"],
  },
];

const pairs: [string, string][] = [
  ["☀Sol", "☾Lua"],
  ["Fogo🔥", "Gelo❄"],
  ["꧁Anjo꧂", "꧁Demônio꧂"],
  ["Mano1", "Mano2"],
  ["乂Caçador乂", "乂Presa乂"],
];

const guilds = ["【Elite】", "乂Brabos乂", "☠Caveiras☠", "♛Reis♛", "⚔Spartans⚔", "亗Ninjas亗"];

const faqs: FaqItem[] = [
  {
    question: "Qual o limite de caracteres do nome no Free Fire?",
    answer:
      "O nick aceita poucos caracteres (cerca de 12), e símbolos especiais podem contar como mais de um. Se o jogo recusar, use um nick mais curto. Os nicks desta página mostram o tamanho e avisam quando podem passar do limite.",
  },
  {
    question: "Como colocar espaço no nick do Free Fire?",
    answer:
      "O jogo costuma bloquear o espaço comum. Use o espaço invisível (Hangul Filler), que o Free Fire aceita como letra. Você encontra ele na página de nome invisível ou no separador do gerador acima.",
  },
  {
    question: "Trocar o nome no Free Fire é grátis?",
    answer: "Não. Normalmente é preciso usar um Cartão de Renomear ou diamantes, por isso teste o nick antes de confirmar.",
  },
  {
    question: "Por que meu nick aparece com quadradinhos?",
    answer: "Alguns símbolos não são reconhecidos pelo jogo ou pelo celular. Troque por outro símbolo ou por uma letra mais comum, como o negrito.",
  },
  {
    question: "Qual o nome masculino mais brabo para Free Fire?",
    answer: `Depende do seu estilo: com símbolos (乂Sniper乂), com letra diferente (${gotica("Reaper")}) ou curto e direto (Rex).`,
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

export default function MascNickPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: mascNickPage.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Nomes para Free Fire Masculino – Nicks Brabos para Copiar</h1>
        <p className="mt-3 text-ink-soft">
          Procurando um nome para Free Fire masculino que seja brabo, diferente e marque presença no ranking? Aqui você
          encontra mais de 100 nicks masculinos prontos para copiar e colar, com símbolos, letras diferentes e estilos dark,
          curtos, em inglês e engraçados. Toque no nick, copie e cole direto no jogo.
        </p>
      </header>

      <h2 className="sr-only">Crie um nick masculino com o seu nome</h2>
      <p className="mb-3 text-sm text-ink-soft">Digite seu nome para ver ele em estilos masculinos, como 乂Nome乂, ☠Nome☠ e 【Nome】:</p>
      <NickGenerator categories={["masculino", "freefire"]} sample="Lobo" />

      <nav aria-label="Categorias de nomes" className="mt-8 flex flex-wrap gap-2">
        {[
          { id: "brabos", label: "Brabos" },
          { id: "simbolos", label: "Com símbolos" },
          { id: "letras-diferentes", label: "Letras diferentes" },
          { id: "dark", label: "Dark" },
          { id: "curtos", label: "Curtos" },
          { id: "ingles", label: "Em inglês" },
          { id: "japones", label: "Japonês" },
          { id: "engracados", label: "Engraçados" },
          { id: "dupla", label: "Dupla" },
          { id: "guilda", label: "Guilda" },
        ].map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
          >
            {c.label}
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
          <H2 id="dupla">Nomes para dupla e amigos</H2>
          <p className="mt-2 text-ink-soft">Um nick para cada um. Toque em Copiar em cada lado.</p>
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
          <H2 id="guilda">Nomes para guilda masculina</H2>
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
              Para separar palavras, use o <Link href="/nome-invisivel">espaço invisível</Link>, porque o espaço comum é
              bloqueado. Para mais símbolos, como 乂, 亗 e ☠, veja os <Link href="/simbolos">símbolos para copiar</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="criar">
          <H2 id="criar">Crie seu próprio nick masculino</H2>
          <div className="prose-content mt-4">
            <p>
              Quer um nome único? Digite seu nome no <Link href="/gerador-de-nick">gerador de nick</Link> e veja ele em dezenas
              de estilos, com símbolos e letras diferentes. O passo a passo completo para trocar o nick está em{" "}
              <Link href="/letras-para-free-fire">letras para Free Fire</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="dicas">
          <H2 id="dicas">Dicas para escolher um bom nome</H2>
          <div className="prose-content mt-4">
            <ul>
              <li>Escolha algo curto e fácil de lembrar, que os outros consigam digitar para te adicionar.</li>
              <li>Um símbolo de cada lado já basta. Muitos símbolos deixam o nick difícil de ler.</li>
              <li>Se o nome que você quer já existe, mude o símbolo ou troque uma letra por uma letra diferente.</li>
              <li>
                Teste antes de confirmar: alguns símbolos podem não aparecer em todos os celulares, e os nicks com aviso de
                tamanho podem passar do limite do jogo.
              </li>
            </ul>
          </div>
        </section>

        <Faq items={faqs} />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/nomes-para-free-fire-feminino", label: "Nomes para Free Fire feminino", description: "Mais de 100 nicks femininos." },
            { href: "/gerador-de-nick", label: "Gerador de nick", description: "Seu nome com símbolos em vários estilos." },
            { href: "/letras-para-free-fire", label: "Letras para Free Fire", description: "Letras diferentes e como trocar o nick." },
            { href: "/nome-invisivel", label: "Nome invisível", description: "Espaço invisível e nick em branco." },
            { href: "/simbolos", label: "Símbolos para copiar", description: "乂 亗 ☠ ⚔ e muito mais." },
            { href: "/blog/nomes-para-free-fire", label: "Nomes para Free Fire", description: "40 ideias de nick para todos os estilos." },
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Gerador de nomes para Free Fire masculino", description, path })} />
    </div>
  );
}
