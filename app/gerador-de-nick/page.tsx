import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { CopyButton } from "@/components/CopyButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { NickGenerator } from "@/components/NickGenerator";
import { nickPage } from "@/data/style-pages";
import { getStyle } from "@/lib/fonts";
import { HANGUL_FILLER as H } from "@/lib/invisible";
import { FF_LIMIT, nickLength } from "@/lib/nick";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${nickPage.slug}`;
const title = "Gerador de Nick: Crie Nicks com Letras Diferentes e Símbolos";
const description =
  "Gerador de nick grátis: digite seu nome e copie nicks com letras diferentes e símbolos para Free Fire, PUBG, Roblox e Instagram. Masculino, feminino e para clã.";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

const t = (styleId: string, text: string) => getStyle(styleId).transform(text);

const styleRows = [
  { name: "Negrito", example: t("negrito", "Lobo 77"), use: "Free Fire, nicks de pro player, clã" },
  { name: "Sem serifa", example: t("negrito-sem-serifa", "Lobo 77"), use: "Visual limpo, competitivo" },
  { name: "Gótica", example: t("gotica-negrito", "Lobo"), use: "Nicks masculinos, estilo medieval" },
  { name: "Contorno", example: t("contorno", "Lobo 77"), use: "Nicks marcantes, clãs" },
  { name: "Cursiva", example: t("cursiva-negrito", "Luna"), use: "Nicks femininos e delicados" },
  { name: "Itálico", example: t("negrito-italico", "Luna"), use: "Visual elegante" },
  { name: "Máquina", example: t("monoespacada", "Lobo 77"), use: "Estilo hacker, clãs" },
  { name: "Letras pequenas", example: t("versalete", "Lobo"), use: "Funciona em quase todos os aparelhos" },
  { name: "Mini", example: t("sobrescrito", "mel"), use: "Nicks fofos, tags curtas" },
];

/** Ready-made nicks. Built in code so the invisible space (U+3164) can't be lost. */
const readyNicks: { heading: string; id: string; nicks: string[] }[] = [
  {
    heading: "Nicks masculinos",
    id: "nicks-masculinos",
    nicks: [`乂${H}𝐒𝐍𝐈𝐏𝐄𝐑${H}乂`, `☠${H}𝕽𝖊𝖆𝖕𝖊𝖗${H}☠`, `×͜×${H}𝗩𝗘𝗡𝗢𝗠`, `𝕋𝕚𝕥𝕒𝕟${H}亗`, `⚡${H}𝐒𝐓𝐎𝐑𝐌${H}⚡`, "ᴮᴿʟᴏʙᴏ", `么${H}𝚁𝚘𝚗𝚒𝚗`, `★${H}𝑲𝒂𝒊𝒔𝒆𝒓${H}★`],
  },
  {
    heading: "Nicks femininos",
    id: "nicks-femininos",
    nicks: [`꧁${H}𝓛𝓾𝓷𝓪${H}꧂`, `♛${H}𝓡𝓪𝓲𝓷𝓱𝓪${H}♛`, `✿${H}ʙᴇʟʟᴀ${H}✿`, `𝓐𝓾𝓻𝓸𝓻𝓪${H}࿐`, `♡${H}𝑱𝒂𝒅𝒆${H}♡`, `『${H}ℚ𝕦𝕖𝕖𝕟${H}』`, `ツ${H}ɴɪɴᴀ`, `★彡${H}𝓓𝓲𝓿𝓪${H}彡★`],
  },
  {
    heading: "Nicks para clã e guilda",
    id: "nicks-cla",
    nicks: [`【${H}𝐄𝐋𝐈𝐓𝐄${H}】`, `『${H}ʟᴇɢɪᴏɴ${H}』`, `𝕴𝖒𝖕𝖊𝖗𝖎𝖔${H}亗`, `〆${H}𝗔𝗟𝗣𝗛𝗔`, `꧁༒${H}𝐎𝐑𝐃𝐄𝐌${H}༒꧂`, `ılı${H}𝚂𝚀𝚄𝙰𝙳${H}ılı`, `乂${H}𝕃𝔼ℕ𝔻𝔸𝕊${H}乂`, `ᵀᴿᴼᴾᴬ${H}ꜰᴜʀɪᴀ`],
  },
  {
    heading: "Nicks fofos",
    id: "nicks-fofos",
    nicks: [`ʚ${H}ᴍᴇʟ${H}ɞ`, `☁️${H}𝓝𝓾𝓿𝓮𝓶`, `♡${H}ᵖᵘᵈⁱᵐ${H}♡`, `🐼${H}ᴘᴀɴᴅᴀ`, `✿${H}𝑴𝒊𝒎𝒊${H}✿`, `꒰${H}ᴋɪᴡɪ${H}꒱`, `⋆${H}𝓓𝓸𝓬𝓲𝓷𝓱𝓸${H}⋆`, `ᰔ${H}ʙᴜʙᴜ${H}ᰔ`],
  },
];

const faqs: FaqItem[] = [
  {
    question: "O gerador de nick é grátis?",
    answer:
      "Sim. O gerador de nick é 100% grátis, não pede cadastro e funciona no celular e no computador. O texto é gerado no seu navegador e não é salvo.",
  },
  {
    question: "Quantos caracteres pode ter o nick do Free Fire?",
    answer:
      "O Free Fire geralmente aceita até 12 caracteres, e alguns símbolos e emojis podem contar como 2. Por isso o gerador mostra um contador em cada nick: confira também a prévia do jogo antes de confirmar.",
  },
  {
    question: "Por que meu nick aparece com quadradinhos?",
    answer:
      "O aparelho ou o jogo não tem uma fonte para aquele caractere Unicode. Troque por outro estilo de letra, como negrito ou letras pequenas, que funcionam em mais lugares.",
  },
  {
    question: "Como colocar espaço no nick do Free Fire?",
    answer:
      "O Free Fire bloqueia o espaço comum. No gerador, deixe o separador em “Espaço invisível” e os nicks já saem com o caractere U+3164, que o jogo costuma aceitar.",
  },
  {
    question: "O nick gerado funciona em outros jogos?",
    answer:
      "Funciona em muitos, como PUBG Mobile, Call of Duty Mobile e no nome de exibição do Instagram e do TikTok. Cada plataforma tem seu filtro, então teste antes de salvar.",
  },
  {
    question: "Posso usar o nick de outra pessoa?",
    answer:
      "Não é recomendado. Copiar o nick de um jogador conhecido para se passar por ele pode levar a denúncia e banimento. Use o gerador para criar um nick só seu.",
  },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

function NickRow({ nick }: { nick: string }) {
  const len = nickLength(nick);
  return (
    <li className="flex items-center gap-3 overflow-hidden rounded-xl border border-line bg-surface px-4 py-3">
      <div className="min-w-0 flex-1">
        <p aria-hidden className="py-1.5 text-xl leading-[2.1] [overflow-wrap:anywhere]">
          {nick}
        </p>
        <p className={`text-xs ${len > FF_LIMIT ? "text-amber-700 dark:text-amber-400" : "text-ink-soft"}`}>{len} caracteres</p>
      </div>
      <CopyButton text={nick} label={`Copiar nick, ${len} caracteres`} />
    </li>
  );
}

export default function NickGeneratorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: nickPage.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Gerador de nick: crie seu nick com letras diferentes e símbolos</h1>
        <p className="mt-3 text-ink-soft">
          Digite seu nome (ou peça uma ideia aleatória), escolha a categoria e copie o nick que mais gostar. São dezenas de
          combinações de fontes e símbolos para Free Fire, PUBG, Roblox, Instagram e TikTok.
        </p>
      </header>

      <NickGenerator />

      <p className="mt-5 rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed">
        <strong>Resposta rápida:</strong> um gerador de nick transforma o seu nome em letras diferentes (negrito, gótica,
        cursiva, letras pequenas…) e junta símbolos como 乂, 亗, ★ e ꧁꧂. Você copia o resultado e cola no campo de nome do
        jogo ou da rede social.
      </p>

      <article className="mt-14 space-y-14">
        <section aria-labelledby="o-que-e">
          <H2 id="o-que-e">O que é um gerador de nick?</H2>
          <div className="prose-content mt-4">
            <p>
              Nick é o apelido que aparece no seu perfil, no lobby e no ranking. Um gerador de nick pega o nome que você
              digitou e cria várias versões estilosas dele na hora, misturando fontes Unicode com símbolos. O resultado é um
              texto comum, que dá para copiar e colar em qualquer app que aceite esses caracteres.
            </p>
            <p>
              Aqui você ainda pode escolher a categoria (Free Fire, masculino, feminino, clã ou fofo), adicionar a tag do seu
              clã e usar o <Link href="/nome-invisivel">espaço invisível</Link> como separador, que é o tipo de espaço que o
              Free Fire costuma aceitar no nick.
            </p>
          </div>
        </section>

        <section aria-labelledby="como-usar">
          <H2 id="como-usar">Como usar o gerador de nick</H2>
          <figure className="my-6">
            <Image
              src="/images/como-criar-nick.webp"
              alt="Como criar um nick em 4 passos: digitar o nome, escolher o estilo, copiar o nick e colar no jogo"
              width={1200}
              height={675}
              sizes="(min-width: 768px) 720px, 100vw"
              className="h-auto w-full rounded-2xl border border-line"
            />
            <figcaption className="mt-2 text-center text-sm text-ink-soft">Do nome ao nick pronto em menos de um minuto.</figcaption>
          </figure>
          <div className="prose-content">
            <ol>
              <li>
                <strong>Digite seu nome</strong> no campo do gerador. Sem ideias? Toque em <strong>Ideia</strong> para
                receber um nome aleatório da categoria escolhida.
              </li>
              <li>
                <strong>Escolha a categoria:</strong> Free Fire, Masculino, Feminino, Clã ou Fofo. Cada uma usa símbolos
                diferentes.
              </li>
              <li>
                <strong>Ajuste os detalhes:</strong> separador, tag do clã e maiúsculas ou minúsculas.
              </li>
              <li>
                <strong>Toque em Copiar</strong> no nick que gostar. Use <strong>Gerar mais</strong> para ver novas
                combinações.
              </li>
              <li>Cole no jogo ou na rede social e confira como ficou antes de salvar.</li>
            </ol>
          </div>
        </section>

        <section aria-labelledby="estilos">
          <H2 id="estilos">Estilos de letras do gerador</H2>
          <p className="mt-3 text-ink-soft">
            Estes são os estilos que o gerador combina com os símbolos. Os que funcionam em mais aparelhos são o negrito, as
            letras pequenas e a sem serifa.
          </p>
          <ul className="mt-5 grid gap-2.5">
            {styleRows.map((s) => (
              <li key={s.name} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                    {s.name} · {s.use}
                  </p>
                  <p aria-hidden className="mt-0.5 text-xl">
                    {s.example}
                  </p>
                </div>
                <CopyButton text={s.example} label={`Copiar exemplo do estilo ${s.name}`} />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-soft">
            Quer ver todos os mais de 60 estilos de uma vez? Use o{" "}
            <Link href="/" className="text-accent underline underline-offset-2">gerador de letras diferentes</Link> ou o{" "}
            <Link href="/nome-personalizado" className="text-accent underline underline-offset-2">gerador de nome personalizado</Link>.
          </p>
        </section>

        <section aria-labelledby="nicks-prontos">
          <H2 id="nicks-prontos">Nicks prontos para copiar</H2>
          <p className="mt-3 text-ink-soft">
            Sem tempo para gerar? Toque em Copiar em um dos nicks abaixo. Os espaços entre os símbolos e o nome já são
            invisíveis.
          </p>
          {readyNicks.map((group) => (
            <div key={group.id} className="mt-6">
              <h3 id={group.id} className="text-lg font-semibold">
                {group.heading}
              </h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2" aria-labelledby={group.id}>
                {group.nicks.map((n) => (
                  <NickRow key={n} nick={n} />
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="free-fire">
          <H2 id="free-fire">Como colocar o nick no Free Fire</H2>
          <div className="prose-content mt-4">
            <ol>
              <li>Gere o nick com o separador em <strong>Espaço invisível</strong> e toque em Copiar.</li>
              <li>Abra o Free Fire e toque no seu perfil.</li>
              <li>Toque no ícone de editar ao lado do nome.</li>
              <li>Apague o nick atual, segure no campo e toque em Colar.</li>
              <li>Confira a prévia e confirme.</li>
            </ol>
            <p>
              <strong>Antes de confirmar:</strong> trocar o nick no Free Fire costuma custar diamantes ou um cartão de troca
              de nome. Confira o contador (geralmente o limite é de 12 caracteres) e veja se nenhum símbolo virou
              quadradinho.
            </p>
            <p>
              Se o jogo disser que o nick já existe, toque em Gerar mais e escolha outra combinação, ou troque só o símbolo.
              Para deixar o nome todo em branco, use o <Link href="/nome-invisivel">nome invisível</Link>. Mais ideias em{" "}
              <Link href="/blog/nomes-para-free-fire">nomes para Free Fire</Link> e{" "}
              <Link href="/letras-para-free-fire">letras para Free Fire</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="dicas">
          <H2 id="dicas">Dicas para criar um nick bom</H2>
          <div className="prose-content mt-4">
            <ul>
              <li><strong>Curto e fácil de lembrar:</strong> uma ou duas palavras. Nicks longos são cortados no ranking e no lobby.</li>
              <li><strong>Legível:</strong> não exagere nos símbolos. Um de cada lado já chama atenção.</li>
              <li><strong>Seu estilo, sempre igual:</strong> use o mesmo nick no jogo, no Instagram e no TikTok para as pessoas te acharem.</li>
              <li><strong>Teste em outro celular:</strong> o que aparece bonito no seu aparelho pode virar quadradinho em outro.</li>
              <li><strong>Nada de ofensa ou cópia:</strong> nicks ofensivos ou iguais aos de jogadores famosos podem ser denunciados e bloqueados.</li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="outros-jogos">
          <H2 id="outros-jogos">Nick para outros jogos e redes sociais</H2>
          <div className="prose-content mt-4">
            <p>O mesmo nick serve em muitos lugares, mas cada plataforma tem regras próprias:</p>
            <ul>
              <li>
                <strong>PUBG Mobile e Call of Duty Mobile:</strong> aceitam a maioria das letras diferentes e símbolos; o
                limite de caracteres é parecido com o do Free Fire.
              </li>
              <li>
                <strong>Roblox:</strong> o nome de usuário só aceita letras, números e sublinhado. As letras estilizadas podem
                funcionar no nome de exibição, mas o filtro recusa muitas delas.
              </li>
              <li>
                <strong>Discord:</strong> o nome de usuário é simples, mas o nome de exibição e o apelido do servidor aceitam
                fontes e símbolos.
              </li>
              <li>
                <strong>Instagram e TikTok:</strong> use no campo Nome, não no @. Combine com as{" "}
                <Link href="/letras-para-instagram">letras para Instagram</Link>.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="quadradinhos">
          <H2 id="quadradinhos">Por que o nick aparece com quadradinhos?</H2>
          <div className="prose-content mt-4">
            <p>
              As letras diferentes são caracteres Unicode. Quando o celular, o computador ou o jogo não tem uma fonte com
              aquele desenho, ele mostra um quadradinho (□) ou um ponto de interrogação. Isso acontece mais com símbolos raros
              e com aparelhos antigos. A solução é trocar o estilo por um mais comum, como negrito ou letras pequenas.
              Entenda melhor em{" "}
              <Link href="/blog/letras-diferentes-quadradinhos-unicode">por que as letras diferentes viram quadradinhos</Link>.
            </p>
          </div>
        </section>

        <Faq items={faqs} />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/nome-invisivel", label: "Nome invisível", description: "Nick em branco e espaço invisível." },
            { href: "/nome-personalizado", label: "Nome personalizado", description: "Seu nome em dezenas de estilos." },
            { href: "/letras-para-free-fire", label: "Letras para Free Fire", description: "Fontes para o nick do FF." },
            { href: "/simbolos", label: "Símbolos para copiar", description: "꧁ ꧂ 乂 亗 ★ e muito mais." },
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Gerador de nick", description, path })} />
    </div>
  );
}
