import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { CopyButton } from "@/components/CopyButton";
import { Faq } from "@/components/Faq";
import { InvisibleTools } from "@/components/InvisibleTools";
import { JsonLd } from "@/components/JsonLd";
import { invisiblePage } from "@/data/style-pages";
import { HANGUL_FILLER as H, INVISIBLE_TYPES } from "@/lib/invisible";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${invisiblePage.slug}`;
const title = "Nome Invisível para Copiar: Free Fire, WhatsApp e Instagram";
const description =
  "Copie o nome invisível em 1 toque e deixe seu nick em branco no Free Fire, WhatsApp, Instagram e TikTok. Gerador grátis de espaço invisível com testador.";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

/** Example nicks. Built in code so the real U+3164 can't be lost by an editor. */
const nickIdeas: { text: string; note?: string }[] = [
  { text: H.repeat(5), note: "100% invisível" },
  { text: `${H}𝐊𝐈𝐍𝐆${H}` },
  { text: `乂${H}SNIPER${H}乂` },
  { text: `꧁${H}꧂`, note: "moldura vazia" },
  { text: `『${H}』`, note: "colchetes vazios" },
  { text: `𝕾𝖍𝖆𝖉𝖔𝖜${H}` },
  { text: `ᴮᴿ${H}ʟᴏʙᴏ` },
  { text: `★${H}FANTASMA${H}★` },
  { text: `亗${H}RAINHA${H}亗` },
  { text: `${H}𝓛𝓾𝓪${H}` },
  { text: `${H}.${H}`, note: "só um ponto" },
  { text: `${H}𝙽𝙸𝙽𝙶𝚄𝙴𝙼${H}` },
];

const faqs: FaqItem[] = [
  {
    question: "O que é nome invisível?",
    answer:
      "É um nome ou nick formado por caracteres Unicode que não mostram nenhum desenho na tela. O mais usado é o Hangul Filler (U+3164). Para os outros usuários, o nome aparece em branco.",
  },
  {
    question: "Qual é o melhor espaço invisível para o Free Fire?",
    answer:
      "O Hangul Filler (U+3164) é o mais aceito no Free Fire, porque o jogo bloqueia o espaço comum. Use o botão Copiar desta página e confira a prévia antes de confirmar a troca de nome.",
  },
  {
    question: "Trocar o nome no Free Fire é grátis?",
    answer:
      "Normalmente não. A troca de nick costuma custar diamantes ou exigir um cartão de troca de nome, por isso teste o nome invisível antes de confirmar.",
  },
  {
    question: "Como mandar mensagem em branco no WhatsApp?",
    answer:
      "Copie um espaço invisível (U+3164 ou o braille em branco U+2800), cole no campo de mensagem e envie. O WhatsApp aceita porque o caractere não é um espaço comum.",
  },
  {
    question: "Por que o espaço invisível não funciona?",
    answer:
      "Os motivos mais comuns são: o app removeu o caractere, você copiou um espaço de largura zero (U+200B) ou o teclado trocou o caractere ao colar. Tente outro tipo de espaço na ferramenta e use o testador para conferir o que foi copiado.",
  },
  {
    question: "O nome invisível funciona no iPhone?",
    answer:
      "Sim, na maioria dos apps. Se não funcionar, copie direto pelo botão Copiar (sem selecionar o texto com o dedo) e cole no campo segurando e tocando em Colar.",
  },
  {
    question: "Usar nome invisível pode dar banimento?",
    answer:
      "Usar um caractere que o próprio jogo ou app aceita no campo de nome não é trapaça. Mesmo assim, as regras mudam com atualizações; nunca use nome invisível para se passar por outra pessoa ou para enganar alguém.",
  },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        sizes="(min-width: 768px) 720px, 100vw"
        className="h-auto w-full rounded-2xl border border-line"
      />
      <figcaption className="mt-2 text-center text-sm text-ink-soft">{caption}</figcaption>
    </figure>
  );
}

export default function InvisibleNamePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: invisiblePage.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Nome invisível: copie o espaço invisível em 1 toque</h1>
        <p className="mt-3 text-ink-soft">
          Quer um nick que aparece em branco? Toque em <strong className="text-ink">Copiar nome invisível</strong> e cole no
          Free Fire, WhatsApp, Instagram ou TikTok. Você também pode colocar o espaço invisível no meio do seu nome e testar o
          que copiou, tudo aqui embaixo.
        </p>
      </header>

      <InvisibleTools />

      <p className="mt-5 rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed">
        <strong>Resposta rápida:</strong> o nome invisível é feito com o caractere <strong>Hangul Filler (U+3164)</strong>,
        que os apps aceitam como letra, mas que não mostra nada na tela. Copie com o botão acima, cole no campo de nome e
        confira a prévia antes de salvar.
      </p>

      <article className="mt-14 space-y-14">
        <section aria-labelledby="o-que-e">
          <H2 id="o-que-e">O que é nome invisível?</H2>
          <div className="prose-content mt-4">
            <p>
              Nome invisível é um nick formado só por caracteres que não têm desenho. Para quem olha o seu perfil, o nome
              aparece em branco, como se você não tivesse nome nenhum. Por isso ele é tão usado no Free Fire, em grupos de
              WhatsApp e em perfis &quot;misteriosos&quot; no Instagram.
            </p>
            <p>
              O truque funciona porque a maioria dos apps bloqueia o espaço comum (a barra de espaço do teclado) no começo ou
              no fim do nome, ou quando ele está sozinho. Mas existem outros caracteres do padrão Unicode que o sistema trata
              como letra e que também não aparecem. O mais famoso é o <strong>Hangul Filler</strong>, um caractere do
              alfabeto coreano que serve como &quot;preenchimento vazio&quot;.
            </p>
            <p>Você também pode usar o espaço invisível de outras formas, não só para deixar o nome todo em branco:</p>
            <ul>
              <li><strong>Nome todo em branco:</strong> só caracteres invisíveis, sem nenhuma letra.</li>
              <li><strong>Espaço no meio do nick:</strong> &quot;Lobo BR&quot; com um espaço que o jogo aceita.</li>
              <li><strong>Nick centralizado ou separado:</strong> espaços antes e depois do nome para dar um respiro.</li>
              <li><strong>Mensagem ou bio em branco:</strong> enviar um &quot;nada&quot; no WhatsApp ou criar quebras de linha na bio.</li>
            </ul>
          </div>
          <Figure
            src="/images/nome-invisivel-copiar.webp"
            alt="Nome invisível para copiar: campo de nick em branco e botão Copiar com o caractere U+3164"
            caption="O espaço invisível deixa o campo de nome em branco para os outros jogadores."
          />
        </section>

        <section aria-labelledby="tipos">
          <H2 id="tipos">Tipos de espaço invisível para copiar</H2>
          <p className="mt-3 text-ink-soft">
            Nem todo caractere invisível funciona em todo lugar. Se um app recusar um, troque pelo próximo da lista. Toque em
            Copiar para levar só aquele caractere.
          </p>
          <ul className="mt-5 grid gap-2.5">
            {INVISIBLE_TYPES.map((t) => (
              <li key={t.id} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">
                    {t.name} <span className="font-mono text-sm font-normal text-ink-soft">{t.code}</span>
                  </p>
                  <p className="mt-0.5 text-sm text-ink-soft">
                    Largura: {t.width} · Melhor para: {t.bestFor}
                  </p>
                </div>
                <CopyButton text={t.char} label={`Copiar ${t.name} (${t.code})`} />
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl bg-warm px-4 py-3 text-sm leading-relaxed">
            <strong>Dica:</strong> se você colou e &quot;não apareceu nada, nem o espaço&quot;, provavelmente copiou o de
            largura zero (U+200B). Ele existe, mas não ocupa lugar. Para nome em branco, use o Hangul Filler.
          </p>
        </section>

        <section aria-labelledby="free-fire">
          <H2 id="free-fire">Como colocar nome invisível no Free Fire</H2>
          <div className="prose-content mt-4">
            <p>
              No Free Fire, o espaço comum é bloqueado no nick, mas o Hangul Filler costuma ser aceito. É assim que os
              jogadores fazem o famoso &quot;nick em branco&quot; no lobby e no ranking.
            </p>
          </div>
          <Figure
            src="/images/como-colocar-nome-invisivel.webp"
            alt="Como colocar nome invisível no Free Fire em 4 passos: copiar, abrir perfil, colar no nick e confirmar"
            caption="Passo a passo para colocar o nome invisível no nick."
          />
          <div className="prose-content">
            <ol>
              <li>No gerador acima, deixe <strong>Hangul Filler</strong> marcado e toque em <strong>Copiar nome invisível</strong>.</li>
              <li>Abra o Free Fire e toque no seu perfil, no canto superior.</li>
              <li>Toque no ícone de editar ao lado do nick.</li>
              <li>
                Apague o nome atual, segure no campo e toque em Colar. Para um nick com espaço no meio, use a ferramenta{" "}
                <a href="#espaco-no-nome">Coloque espaço invisível no seu nome</a>.
              </li>
              <li>Confira a prévia e confirme.</li>
            </ol>
            <p>
              <strong>Atenção antes de confirmar:</strong> trocar o nick no Free Fire geralmente custa diamantes ou um cartão
              de troca de nome. Cole o nome antes em um bloco de notas ou no nosso <a href="#testador">testador</a> para ter
              certeza de que copiou o caractere certo.
            </p>
            <p>
              Se o jogo disser que o nome é curto demais, aumente a quantidade no controle deslizante e copie de novo. Se
              disser que o nome já existe (comum com nomes invisíveis populares), mude a quantidade ou misture tipos, por
              exemplo 4 Hangul Filler + 1 meia largura. Para mais ideias de nick, veja os{" "}
              <Link href="/blog/nomes-para-free-fire">nomes para Free Fire</Link> e as{" "}
              <Link href="/letras-para-free-fire">letras para Free Fire</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="whatsapp">
          <H2 id="whatsapp">Nome invisível no WhatsApp</H2>
          <div className="prose-content mt-2">
            <h3>Nome de perfil em branco</h3>
            <p>
              Vá em <strong>Configurações › Perfil › Nome</strong>, apague o seu nome, cole o espaço invisível e salve. Seus
              contatos que não têm seu número salvo vão ver o nome em branco.
            </p>
            <h3>Mensagem em branco</h3>
            <p>
              Copie 1 Hangul Filler ou 1 braille em branco, cole na conversa e envie. Chega um balão vazio, ótimo para brincar
              com os amigos. Funciona também para deixar o recado (sobre) e o nome de grupo em branco. Se preferir um nome de
              verdade para o grupo, veja os <Link href="/blog/nomes-para-grupo-de-whatsapp">nomes para grupo de WhatsApp</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="instagram-tiktok">
          <H2 id="instagram-tiktok">Nome invisível no Instagram e no TikTok</H2>
          <div className="prose-content mt-4">
            <p>
              No Instagram, o espaço invisível pode ir no campo <strong>Nome</strong> (não no nome de usuário, que só aceita
              letras, números, ponto e sublinhado). Ele também resolve o problema da bio &quot;grudada&quot;: coloque um
              braille em branco sozinho em uma linha para criar um espaço entre os parágrafos. Veja ideias prontas nas{" "}
              <Link href="/blog/frases-para-bio-do-instagram">frases para bio do Instagram</Link> e combine com{" "}
              <Link href="/letras-para-instagram">letras para Instagram</Link>.
            </p>
            <p>
              No TikTok vale a mesma lógica: use no nome de exibição e na bio. O @ do usuário não aceita esses caracteres.
            </p>
          </div>
        </section>

        <section aria-labelledby="outros-jogos">
          <H2 id="outros-jogos">Funciona em outros jogos e apps?</H2>
          <div className="prose-content mt-4">
            <p>Funciona em muitos, mas cada plataforma tem seu filtro, e ele muda com as atualizações. Em resumo:</p>
            <ul>
              <li>
                <strong>PUBG Mobile, Call of Duty Mobile e outros jogos:</strong> o Hangul Filler costuma passar em nomes de
                clã e de perfil; se não passar, teste o meia largura.
              </li>
              <li>
                <strong>Discord:</strong> nomes de usuário totalmente invisíveis costumam ser bloqueados, mas o apelido de
                servidor e o status às vezes aceitam.
              </li>
              <li><strong>Roblox:</strong> o filtro de nome de exibição recusa a maioria dos caracteres invisíveis.</li>
            </ul>
            <p>
              <strong>Regra de ouro:</strong> sempre teste antes de gastar algo para trocar de nome.
            </p>
          </div>
        </section>

        <section aria-labelledby="ideias">
          <H2 id="ideias">Ideias de nick com espaço invisível</H2>
          <p className="mt-3 text-ink-soft">
            Toque em Copiar. Os nicks já vêm com o espaço invisível certo (Hangul Filler), marcado aqui com caixinhas
            tracejadas só para você ver onde ele está.
          </p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {nickIdeas.map((n) => (
              <li key={n.text} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <div className="min-w-0 flex-1">
                  {/* Tall glyphs like ꧁ ꧂ need the extra line height. */}
                  <p className="py-1 text-xl leading-[2] [overflow-wrap:anywhere]" aria-hidden>
                    {[...n.text].map((c, i) =>
                      c === H ? (
                        <span key={i} className="inline-block rounded-[3px] bg-accent-soft outline-1 -outline-offset-1 outline-dashed outline-accent">
                          {c}
                        </span>
                      ) : (
                        <span key={i}>{c}</span>
                      ),
                    )}
                  </p>
                  {n.note && <p className="mt-0.5 text-xs text-ink-soft">{n.note}</p>}
                </div>
                <CopyButton text={n.text} label={`Copiar nick${n.note ? ` (${n.note})` : ""}`} />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-soft">
            Quer mais enfeites? Junte o espaço invisível com os <Link href="/simbolos" className="text-accent underline underline-offset-2">símbolos para copiar</Link> ou
            com as <Link href="/fontes-de-letras-estilosas" className="text-accent underline underline-offset-2">fontes de letras estilosas</Link>.
          </p>
        </section>

        <section aria-labelledby="nao-funciona">
          <H2 id="nao-funciona">Por que o espaço invisível não funciona?</H2>
          <div className="prose-content mt-4">
            <p>Se o nome não ficou em branco, normalmente é um destes motivos:</p>
            <ul>
              <li>
                <strong>Você copiou o caractere errado.</strong> Selecionar com o dedo pode pegar espaços comuns junto. Use
                sempre o botão Copiar e confira no <a href="#testador">testador</a>.
              </li>
              <li>
                <strong>O app removeu o caractere.</strong> Alguns apps &quot;limpam&quot; o nome ao salvar. Troque o tipo no
                gerador (meia largura ou braille).
              </li>
              <li>
                <strong>Apareceu um quadradinho.</strong> O aparelho não tem fonte para aquele caractere. Entenda melhor em{" "}
                <Link href="/blog/letras-diferentes-quadradinhos-unicode">por que as letras diferentes viram quadradinhos</Link>.
              </li>
              <li>
                <strong>No iPhone:</strong> toque no botão Copiar, depois segure no campo de texto e escolha Colar. Evite o
                teclado com autocorreção de terceiros, que pode trocar o caractere.
              </li>
              <li>
                <strong>Nome já existe:</strong> nomes só com Hangul Filler são muito usados. Mude a quantidade ou misture com
                outro tipo.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="responsabilidade">
          <H2 id="responsabilidade">Use com responsabilidade</H2>
          <div className="prose-content mt-4">
            <p>
              Nome invisível é uma brincadeira de personalização, não um jeito de esconder quem você é para enganar alguém.
              Não use para se passar por outra pessoa nem para fugir de denúncia. Também vale lembrar que leitores de tela
              (usados por pessoas cegas) podem ler o caractere como &quot;preenchimento&quot; ou pular o nome, então em
              perfis profissionais prefira um nome normal.
            </p>
          </div>
        </section>

        <Faq items={faqs} />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/nome-personalizado", label: "Nome personalizado", description: "Seu nome em dezenas de estilos." },
            { href: "/letras-para-free-fire", label: "Letras para Free Fire", description: "Nicks estilosos para o FF." },
            { href: "/simbolos", label: "Símbolos para copiar", description: "꧁ ꧂ 乂 亗 ★ e muito mais." },
            { href: "/", label: "Letras diferentes", description: "Gerador com mais de 60 estilos." },
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Gerador de nome invisível", description, path })} />
    </div>
  );
}
