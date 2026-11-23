import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { NickCard } from "@/components/NickCard";
import { NickGenerator } from "@/components/NickGenerator";
import { discordPage } from "@/data/style-pages";
import { getStyle } from "@/lib/fonts";
import { DISCORD_LIMIT } from "@/lib/nick";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${discordPage.slug}`;
const title = "Nomes para Discord: +100 Nicks com Letras Diferentes";
const description =
  "Mais de 100 nomes para Discord prontos para copiar: nicks aesthetic, gamer, dark, fofos e engraçados, nomes para servidor e canais, com gerador de nick.";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

/** Styled letters built in code, so editors can't break the Unicode characters. */
const t = (id: string, text: string) => getStyle(id).transform(text, { accents: "plain" });
const pq = (s: string) => t("versalete", s);
const cursiva = (s: string) => t("cursiva", s);
const cursivaN = (s: string) => t("cursiva-negrito", s);
const negr = (s: string) => t("negrito-sem-serifa", s);
const goth = (s: string) => t("gotica-negrito", s);
const mono = (s: string) => t("monoespacada", s);
const largo = (s: string) => t("largura-total", s);

const groups: { id: string; heading: string; intro?: string; nicks: string[] }[] = [
  {
    id: "aesthetic",
    heading: "Nomes aesthetic para Discord",
    nicks: [
      `✦ ${pq("Nova")} ✦`, cursivaN("Lumi"), `꒰ ${pq("Cloud")} ꒱`, `⋆ ${cursiva("Moon")} ⋆`, `☾ ${pq("Nyx")}`, largo("Vibe"),
      `✧ ${cursivaN("Aura")} ✧`, `${pq("Dreamer")} ☁︎`, `𓆩${pq("Kai")}𓆪`, `${cursiva("Stella")} ⋆˙⟡`, `ʚ ${pq("Lua")} ɞ`, largo("Lofi"),
    ],
  },
  {
    id: "gamer",
    heading: "Nomes gamer para Discord",
    nicks: [
      `乂 ${negr("Nexus")} 乂`, goth("Ghost"), `『${negr("Byte")}』`, `⚡ ${negr("Volt")} ⚡`, mono("Glitch"), `×͜× ${negr("Rush")}`,
      `☠ ${goth("Reaper")} ☠`, `${negr("Pixel")} ツ`, `〔${mono("Lag")}〕`, t("contorno", "Combo"), `★彡 ${negr("Clutch")} 彡★`, goth("Raid"),
    ],
  },
  {
    id: "simbolos",
    heading: "Nomes para Discord com símbolos",
    nicks: ["꧁Echo꧂", "★Orbit★", "☾Luar☽", "⚔Lâmina⚔", "♛Kaiser♛", "✦Zen✦", "♱Sombra♱", "〆Tora", "࿐Vento", "➳Flecha", "☁Nuvem☁", "Sorriso ツ"],
  },
  {
    id: "dark",
    heading: "Nomes dark e góticos para Discord",
    nicks: [
      goth("Abyss"), `♱ ${goth("Noir")} ♱`, `☾ ${goth("Eclipse")}`, `† ${goth("Corvo")} †`, goth("Phantom"),
      pq("Midnight"), `⸸ ${goth("Hex")}`, `☠ ${pq("Morte")}`, goth("Obscuro"), `${goth("Nyx")} ☾`,
    ],
  },
  {
    id: "fofos",
    heading: "Nomes fofos para Discord",
    nicks: [
      `ʚ ${pq("Pudim")} ɞ`, `🐼 ${cursivaN("Panda")}`, `꒰ ${pq("Mimi")} ꒱`, `🍓 ${pq("Kiwi")}`, `♡ ${cursiva("Bubu")} ♡`,
      `☁️ ${pq("Nuvem")}`, `🌸 ${cursivaN("Sakura")}`, `ᰔ ${pq("Mochi")} ᰔ`, `🐾 ${pq("Pipoca")}`, `${cursivaN("Docinho")} ♡`,
    ],
  },
  {
    id: "engracados",
    heading: "Nomes engraçados para Discord",
    nicks: [
      "Lag Eterno", "Mutado™", "AFK Profissional", "Wi-Fi do Vizinho", "Sem Ping", "Carregador 1%",
      "Só Mais Uma", mono("404 Not Found"), "Modo Soneca 💤", "Café.exe", "Sem Microfone 🎙️", "Respawn em 5s",
    ],
  },
  {
    id: "curtos",
    heading: "Nomes curtos para Discord",
    intro: "Nomes curtos são fáceis de lembrar e de achar quando alguém digita @ para mencionar você.",
    nicks: ["Kai", "Nyx", "Zen", "Lux", "Neo", "Sol", "Ryu", "Fox", "Jax", "Ash", "Ori", "Yu"],
  },
  {
    id: "ingles",
    heading: "Nomes em inglês para Discord",
    nicks: ["Shadow", "Storm", "Phoenix", "Rogue", "Blaze", "Frost", "Hunter", "Wraith", "Spark", "Drift"],
  },
  {
    id: "anime",
    heading: "Nomes de anime para Discord",
    nicks: [
      pq("Senpai"), "Kitsune 🦊", `『${negr("Shinobi")}』`, cursivaN("Kawaii"), goth("Akuma"), "Neko ฅ^•ﻌ•^ฅ",
      "Otaku ✧", `☯ ${pq("Kami")}`, cursiva("Hikari"), "Yokai 👺", pq("Sensei"), `〆${negr("Ronin")}`,
    ],
  },
];

const servers: { theme: string; names: string[] }[] = [
  { theme: "Amigos", names: ["☕ Café com os Amigos", `✦ ${pq("A Firma")} ✦`, "🏠 Nossa Casa", cursivaN("Os Inseparáveis")] },
  { theme: "Jogos", names: [`⚔ ${negr("Arena")} ⚔`, "🎮 Squad da Madrugada", goth("Clã Lendário"), "Lobby dos Brabos"] },
  { theme: "Estudos", names: ["📚 Estudo em Grupo", `${pq("Foco Total")} ✏️`, "Turma do Café e Revisão", "🧠 Clube do Conhecimento"] },
  { theme: "Anime e música", names: ["🌸 Clube do Anime", `${cursiva("Lofi & Chill")} 🎧`, "🎵 Rádio da Galera", `『${pq("Otaku Zone")}』`] },
  { theme: "Arte e criação", names: ["🎨 Ateliê Digital", `✧ ${cursivaN("Criadores")} ✧`, "📸 Galeria", "Fanart Club"] },
];

const channels = [
  `💬・${negr("chat")}`, `📢・${negr("avisos")}`, `📌・${negr("regras")}`, `👋・${negr("boas-vindas")}`,
  `🎮・${negr("jogos")}`, `🎵・${negr("musica")}`, `🖼️・${negr("memes")}`, `🔊・${negr("call")}`,
];

const fields: { field: string; accepts: string; limit: string }[] = [
  { field: "Nome de usuário (@)", accepts: "Não. Só letras minúsculas (a–z), números, _ e ponto.", limit: "2 a 32" },
  { field: "Nome exibido", accepts: "Sim", limit: "32" },
  { field: "Apelido no servidor", accepts: "Sim", limit: "32" },
  { field: "Sobre mim", accepts: "Sim", limit: "190" },
  { field: "Nome do servidor", accepts: "Sim", limit: "100" },
  { field: "Mensagens", accepts: "Sim", limit: "2.000" },
];

const formats: [string, string][] = [
  ["Negrito", "**texto**"],
  ["Itálico", "*texto*"],
  ["Sublinhado", "__texto__"],
  ["Riscado", "~~texto~~"],
  ["Spoiler (escondido)", "||texto||"],
  ["Código", "`texto`"],
  ["Título", "# texto (no início da linha)"],
  ["Texto pequeno", "-# texto (no início da linha)"],
  ["Citação", "> texto (no início da linha)"],
];

const faqs: FaqItem[] = [
  {
    question: "Posso usar letras diferentes no nome de usuário do Discord?",
    answer:
      "Não. O nome de usuário (o @) só aceita letras minúsculas de a a z, números, sublinhado e ponto. As letras diferentes funcionam no nome exibido, no apelido do servidor, no Sobre mim e no nome do servidor.",
  },
  {
    question: "Qual o limite de caracteres do nome no Discord?",
    answer:
      "O nome exibido e o apelido no servidor aceitam até 32 caracteres. Alguns símbolos e letras estilizadas podem contar como mais de um, então nomes muito enfeitados podem ser recusados.",
  },
  {
    question: "Por que meu apelido voltou ao normal no servidor?",
    answer:
      "Alguns servidores usam bots ou regras que trocam apelidos com símbolos, ou que começam com caracteres como ! para aparecer no topo da lista de membros. Confira as regras do servidor.",
  },
  {
    question: "Dá para usar letras diferentes nos nomes dos canais?",
    answer:
      `Sim. Muitos servidores usam emojis e letras estilizadas nos canais, como 💬・${negr("chat")}. Em canais de texto, os espaços viram hífen.`,
  },
  {
    question: "Os outros veem as letras diferentes no celular e no PC?",
    answer:
      "Sim. São caracteres Unicode, então aparecem no app do celular, no app para computador e no navegador. Em aparelhos muito antigos, alguns símbolos podem virar quadradinhos.",
  },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export default function DiscordPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: discordPage.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Nomes para Discord – Nicks com Letras Diferentes para Copiar</h1>
        <p className="mt-3 text-ink-soft">
          Procurando um nome para Discord que chame atenção na lista de membros? Aqui você encontra mais de 100 nicks prontos
          para copiar, com letras diferentes e símbolos: aesthetic, gamer, dark, fofos, engraçados e de anime. Também tem ideias
          de nomes para servidor e para canais. Toque em Copiar e cole no seu nome exibido ou no apelido do servidor.
        </p>
      </header>

      <h2 className="sr-only">Crie um nick para Discord com o seu nome</h2>
      <p className="mb-3 text-sm text-ink-soft">Digite seu nome para ver ele em estilos para Discord:</p>
      <NickGenerator categories={["discord", "fofo", "cla"]} sample="Nova" limit={DISCORD_LIMIT} limitName="do Discord" defaultSeparator="espaco" />

      <nav aria-label="Categorias de nomes" className="mt-8 flex flex-wrap gap-2">
        {[
          ...groups.map((g) => ({ id: g.id, label: g.heading })),
          { id: "servidor", label: "Servidor" },
          { id: "canais", label: "Canais" },
        ].map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
          >
            {c.label.replace(/^Nomes (para Discord )?/, "").replace(/ para Discord$/, "").replace(/^./, (x) => x.toUpperCase())}
          </a>
        ))}
      </nav>

      <article className="mt-10 space-y-12">
        <section aria-labelledby="onde-funciona">
          <H2 id="onde-funciona">Onde as letras diferentes funcionam no Discord</H2>
          <p className="mt-3 text-ink-soft">
            O Discord tem dois nomes: o <strong>nome de usuário</strong> (o @, único e sem enfeites) e o{" "}
            <strong>nome exibido</strong>, que é o que aparece nas conversas. As letras diferentes vão no nome exibido.
          </p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-warm text-ink">
                <tr>
                  <th scope="col" className="px-3 py-2.5 font-semibold sm:px-4">Campo</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold sm:px-4">Aceita letras diferentes?</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold sm:px-4">Limite</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((f) => (
                  <tr key={f.field} className="border-t border-line">
                    <td className="px-3 py-2.5 font-medium text-ink sm:px-4">{f.field}</td>
                    <td className="px-3 py-2.5 text-ink-soft sm:px-4">{f.accepts}</td>
                    <td className="px-3 py-2.5 text-ink-soft sm:px-4">{f.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {groups.map((g) => (
          <section key={g.id} aria-labelledby={g.id}>
            <H2 id={g.id}>{g.heading}</H2>
            {g.intro && <p className="mt-2 text-ink-soft">{g.intro}</p>}
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {g.nicks.map((n) => (
                <NickCard key={n} nick={n} limit={DISCORD_LIMIT} />
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="servidor">
          <H2 id="servidor">Nomes para servidor de Discord</H2>
          <p className="mt-2 text-ink-soft">O nome do servidor aceita até 100 caracteres, com emojis e letras diferentes.</p>
          <div className="mt-4 space-y-6">
            {servers.map((s) => (
              <div key={s.theme}>
                <h3 className="text-base font-semibold">{s.theme}</h3>
                <ul className="mt-2 grid gap-2.5 sm:grid-cols-2">
                  {s.names.map((n) => (
                    <NickCard key={n} nick={n} limit={100} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="canais">
          <H2 id="canais">Nomes para canais do Discord</H2>
          <p className="mt-2 text-ink-soft">
            Um emoji, um separador (・) e o nome em negrito deixam a lista de canais organizada e bonita.
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {channels.map((n) => (
              <NickCard key={n} nick={n} limit={100} />
            ))}
          </ul>
        </section>

        <section aria-labelledby="como-mudar">
          <H2 id="como-mudar">Como mudar o nome no Discord</H2>
          <div className="prose-content mt-4">
            <h3>Nome exibido (vale em todos os servidores)</h3>
            <ol>
              <li>Copie o nome que você escolheu nesta página.</li>
              <li>No Discord, toque na sua foto de perfil e depois em <strong>Editar perfil</strong>.</li>
              <li>Toque em <strong>Nome exibido</strong>, apague o atual e cole o novo.</li>
              <li>Toque em <strong>Salvar</strong>.</li>
            </ol>
            <h3>Apelido em um servidor</h3>
            <ol>
              <li>Abra o servidor e toque no nome dele, no topo.</li>
              <li>Toque em <strong>Editar perfil do servidor</strong>.</li>
              <li>Cole o novo nome em <strong>Apelido</strong> e salve.</li>
            </ol>
            <p>
              O apelido só aparece naquele servidor. Se a opção não aparecer, o servidor não deixa os membros mudarem o próprio
              apelido.
            </p>
          </div>
        </section>

        <section aria-labelledby="formatacao">
          <H2 id="formatacao">Formatação de texto no Discord</H2>
          <p className="mt-3 text-ink-soft">
            Nas mensagens e no Sobre mim, o Discord também tem formatação própria. Coloque os símbolos antes e depois do texto:
          </p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-warm text-ink">
                <tr>
                  <th scope="col" className="px-3 py-2.5 font-semibold sm:px-4">Formato</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold sm:px-4">Como digitar</th>
                </tr>
              </thead>
              <tbody>
                {formats.map(([name, code]) => (
                  <tr key={name} className="border-t border-line">
                    <td className="px-3 py-2.5 text-ink sm:px-4">{name}</td>
                    <td className="px-3 py-2.5 sm:px-4">
                      <code className="font-mono text-ink-soft">{code}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            A formatação não funciona no nome. Para o nome, use as letras diferentes desta página ou do{" "}
            <Link href="/" className="text-accent underline underline-offset-2">gerador de letras diferentes</Link>.
          </p>
        </section>

        <section aria-labelledby="dicas">
          <H2 id="dicas">Dicas para escolher um bom nome para Discord</H2>
          <div className="prose-content mt-4">
            <ul>
              <li>
                <strong>Deixe o @ simples:</strong> o nome de usuário é o que as pessoas usam para adicionar você. Guarde as
                letras diferentes para o nome exibido.
              </li>
              <li>
                <strong>Pense na menção:</strong> quem digita @ procura seu nome com letras comuns. Um nome todo estilizado fica
                mais difícil de achar.
              </li>
              <li>
                <strong>Respeite as regras do servidor:</strong> muitos servidores não deixam começar o nome com ! ou símbolos
                para ficar no topo da lista de membros.
              </li>
              <li>
                <strong>Menos é mais:</strong> um símbolo de cada lado já destaca o nome sem deixar difícil de ler.
              </li>
              <li>
                <strong>Quadradinhos:</strong> se alguém vir um quadrado no lugar do símbolo, troque por outro. Entenda em{" "}
                <Link href="/blog/letras-diferentes-quadradinhos-unicode">por que as letras diferentes viram quadradinhos</Link>.
              </li>
            </ul>
          </div>
        </section>

        <Faq items={faqs} />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/gerador-de-nick", label: "Gerador de nick", description: "Seu nome com símbolos em vários estilos." },
            { href: "/simbolos", label: "Símbolos para copiar", description: "꧁ ꧂ ♛ ✦ ☾ e muito mais." },
            { href: "/alfabeto-de-letras-diferentes", label: "Alfabeto de letras diferentes", description: "A a Z em 29 estilos." },
            { href: "/letras-goticas", label: "Letras góticas", description: "Fraktur clássica e em negrito." },
            { href: "/nome-invisivel", label: "Nome invisível", description: "Espaço invisível para copiar." },
            { href: "/nomes-para-free-fire-masculino", label: "Nomes para Free Fire", description: "Mais de 100 nicks para o jogo." },
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Gerador de nomes para Discord", description, path })} />
    </div>
  );
}
