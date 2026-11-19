import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { CopyButton } from "@/components/CopyButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TikTokTools } from "@/components/TikTokTools";
import { tiktokPage } from "@/data/style-pages";
import { getStyle } from "@/lib/fonts";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${tiktokPage.slug}`;
const title = "Letras para TikTok: Fontes Diferentes para Nome, Bio e Comentários";
const description =
  "Letras para TikTok grátis: transforme seu texto em cursiva, negrito, gótica e aesthetic. Copie e cole no nome, na bio, nos comentários e na legenda.";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

/** Styled text built in code, so editors can't break the Unicode characters. */
const t = (id: string, text: string) => getStyle(id).transform(text, { accents: "plain" });

const fieldRows: { field: string; limit: string; ok: string }[] = [
  { field: "Nome de exibição", limit: "30 caracteres", ok: "Sim, com espaços, símbolos e emojis" },
  { field: "@ nome de usuário", limit: "2 a 24 caracteres", ok: "Não: só letras, números, _ e ." },
  { field: "Bio", limit: "80 caracteres (geralmente)", ok: "Sim" },
  { field: "Comentários", limit: "150 caracteres", ok: "Sim" },
  { field: "Legenda do vídeo", limit: "2.200 caracteres", ok: "Sim, mas deixe as palavras-chave em letras comuns" },
  { field: "Texto no vídeo", limit: "–", ok: "Sim, na maioria dos casos (o editor também tem fontes próprias)" },
];

const SAMPLE = "Mariana";
const styleRows: { id: string; name: string; use: string }[] = [
  { id: "cursiva-negrito", name: "Cursiva", use: "Nome e bio delicados" },
  { id: "cursiva", name: "Cursiva fina", use: "Visual elegante e leve" },
  { id: "negrito", name: "Negrito", use: "Nome forte, títulos de legenda" },
  { id: "italico", name: "Itálico", use: "Frases da bio" },
  { id: "gotica-negrito", name: "Gótica", use: "Perfis dark, games, rock" },
  { id: "contorno", name: "Contorno", use: "Nome marcante" },
  { id: "negrito-sem-serifa", name: "Sem serifa negrito", use: "Visual moderno e limpo" },
  { id: "monoespacada", name: "Máquina", use: "Estética retrô" },
  { id: "versalete", name: "Letras pequenas", use: "Bio aesthetic (funciona em quase tudo)" },
  { id: "largura-total", name: "Largas", use: "Visual vaporwave" },
  { id: "riscado", name: "Riscada", use: "Comentários e piadas" },
];

const ideas: string[] = [
  `˚₊‧꒰ა ${t("versalete", "dance · make · rise")} ໒꒱ ‧₊˚`,
  `${t("cursiva", "vivendo o momento")} ♡`,
  `⋆｡°✩ ${t("cursiva-negrito", "Mariana")} ✩°｡⋆`,
  `✧ ${t("versalete", "conteúdo novo toda semana")} ✧`,
  `☾ ${t("italico", "só vibes boas")} ☽`,
  `${t("gotica-negrito", "Gamer")} ⚔︎ ${t("versalete", "lives às 20h")}`,
  `🎀 ${t("versalete", "moda · beleza · rotina")} 🎀`,
  `${t("negrito", "DICAS DE ESTUDO")} 📚`,
  `꒰ ${t("sobrescrito", "pequena mas brava")} ꒱`,
  `${t("monoespacada", "receitas fáceis")} 🍳`,
  `🦋 ${t("cursiva-negrito", "um dia de cada vez")} 🦋`,
  `ılı ${t("versalete", "músicas que eu amo")} ılı`,
];

const faqs: FaqItem[] = [
  {
    question: "Dá para usar letras diferentes no @ do TikTok?",
    answer:
      "Não. O nome de usuário (@) só aceita letras sem acento, números, sublinhado (_) e ponto (.), com até 24 caracteres. As letras diferentes funcionam no nome de exibição, na bio, nos comentários e na legenda.",
  },
  {
    question: "Quantos caracteres pode ter o nome do TikTok?",
    answer:
      "O nome de exibição aceita até 30 caracteres e pode ter letras diferentes, espaços e emojis. A bio costuma ter limite de 80 caracteres.",
  },
  {
    question: "Letras diferentes atrapalham o alcance no TikTok?",
    answer:
      "Podem atrapalhar se usadas nas palavras-chave. A busca do TikTok pode não reconhecer letras Unicode como palavras normais. Use letras diferentes para enfeitar e deixe palavras-chave e hashtags em letras comuns.",
  },
  {
    question: "Por que as letras aparecem como quadradinhos?",
    answer:
      "O celular de quem vê não tem uma fonte para aquele caractere. Isso é mais comum em aparelhos antigos e em estilos raros. Prefira negrito, itálico ou letras pequenas.",
  },
  {
    question: "Dá para usar essas letras no texto do vídeo?",
    answer:
      "Sim, na maioria dos casos você pode colar letras diferentes no texto do vídeo. O editor do TikTok também tem algumas fontes próprias, que você escolhe na hora de adicionar o texto.",
  },
  {
    question: "O conversor é grátis?",
    answer:
      "Sim. É grátis, sem cadastro e funciona no celular e no computador. O texto é convertido no seu navegador e não é salvo.",
  },
];

const link = "text-accent underline underline-offset-2";

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

function Figure({ src, alt, caption, width, height }: { src: string; alt: string; caption: string; width: number; height: number }) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 768px) 720px, 100vw"
        className="h-auto w-full rounded-2xl border border-line"
      />
      <figcaption className="mt-2 text-center text-sm text-ink-soft">{caption}</figcaption>
    </figure>
  );
}

export default function TikTokLettersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: tiktokPage.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Letras para TikTok: fontes diferentes para nome, bio e comentários</h1>
        <p className="mt-3 text-ink-soft">
          Digite seu texto, escolha onde vai usar e toque no estilo para copiar. O contador avisa se passou do limite do
          campo, e a aba <strong className="text-ink">@ do usuário</strong> transforma seu nome em um @ que o TikTok aceita.
        </p>
      </header>

      <TikTokTools />

      <p className="mt-5 rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed">
        <strong>Resposta rápida:</strong> o TikTok aceita letras diferentes no nome (até 30 caracteres), na bio, nos
        comentários e na legenda. No @ do usuário não: ele só aceita letras comuns, números, sublinhado e ponto, com até 24
        caracteres.
      </p>

      <article className="mt-14 space-y-14">
        <section aria-labelledby="onde-usar">
          <H2 id="onde-usar">Onde dá para usar letras diferentes no TikTok</H2>
          <p className="mt-3 text-ink-soft">O TikTok tem campos com regras diferentes. Antes de colar, veja o que cada um aceita:</p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-warm text-ink">
                <tr>
                  <th scope="col" className="px-4 py-2.5 font-semibold">Campo</th>
                  <th scope="col" className="px-4 py-2.5 font-semibold">Limite</th>
                  <th scope="col" className="px-4 py-2.5 font-semibold">Aceita letras diferentes?</th>
                </tr>
              </thead>
              <tbody>
                {fieldRows.map((r) => (
                  <tr key={r.field} className="border-t border-line bg-surface align-top">
                    <th scope="row" className="px-4 py-2.5 font-medium">{r.field}</th>
                    <td className="px-4 py-2.5 text-ink-soft">{r.limit}</td>
                    <td className="px-4 py-2.5">{r.ok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            Alguns símbolos e letras especiais podem contar como 2 caracteres. Por isso o conversor mostra o contador do campo
            que você escolheu.
          </p>
          <Figure
            src="/images/letras-para-tiktok.webp"
            alt="Letras para TikTok: perfil com nome em letra cursiva e bio aesthetic com letras pequenas"
            caption="Nome em cursiva e bio aesthetic: tudo texto copiado e colado."
            width={1200}
            height={630}
          />
        </section>

        <section aria-labelledby="nome">
          <H2 id="nome">Como colocar letra diferente no nome do TikTok</H2>
          <div className="prose-content mt-4">
            <ol>
              <li>No conversor, deixe <strong>Nome (30)</strong> marcado, digite seu nome e toque no estilo que gostar.</li>
              <li>No TikTok, toque em <strong>Perfil</strong> e depois em <strong>Editar perfil</strong>.</li>
              <li>Toque em <strong>Nome</strong>, apague o atual, cole o novo e salve.</li>
            </ol>
            <p>
              O TikTok pode limitar quantas vezes você troca o nome em pouco tempo, então escolha com calma. Para deixar o nome
              em branco, use o <Link href="/nome-invisivel">nome invisível</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="bio">
          <H2 id="bio">Como colocar letra diferente na bio</H2>
          <Figure
            src="/images/como-usar-letras-tiktok.webp"
            alt="Como usar letras diferentes no TikTok em 4 passos: digitar o texto, escolher a letra, copiar e colar no perfil"
            caption="O mesmo passo a passo serve para o nome, a bio e os comentários."
            width={1200}
            height={700}
          />
          <div className="prose-content">
            <ol>
              <li>Marque <strong>Bio (80)</strong> no conversor e escreva sua frase.</li>
              <li>Escolha um estilo na aba <strong>Letras diferentes</strong> ou <strong>Aesthetic</strong> e toque para copiar.</li>
              <li>No TikTok, vá em <strong>Editar perfil › Bio</strong>, cole e salve.</li>
            </ol>
          </div>
          <p className="mt-4 rounded-xl bg-warm px-4 py-3 text-sm leading-relaxed">
            <strong>Dica:</strong> com só 80 caracteres, use a letra diferente em uma palavra ou em uma linha, não na bio toda.
            Assim sobra espaço e a bio continua fácil de ler.
          </p>
        </section>

        <section aria-labelledby="usuario">
          <H2 id="usuario">Por que não dá para usar letras diferentes no @</H2>
          <div className="prose-content mt-4">
            <p>
              O nome de usuário é o seu endereço no TikTok (tiktok.com/@seunome), por isso ele segue regras rígidas: de 2 a 24
              caracteres, só letras sem acento, números, sublinhado (_) e ponto (.), sem ponto no final e sem espaços. Letras
              diferentes, acentos e emojis são recusados. Além disso, o @ só pode ser trocado a cada 30 dias.
            </p>
            <p>
              A aba <strong>@ do usuário</strong> do conversor resolve isso: ela tira acentos e símbolos e monta sugestões como{" "}
              <code>mari.ana</code>, <code>mariana_</code> e <code>mariana.oficial</code>.
            </p>
          </div>
        </section>

        <section aria-labelledby="estilos">
          <H2 id="estilos">Estilos de letras para TikTok</H2>
          <p className="mt-3 text-ink-soft">
            Estes são alguns dos estilos do conversor. Negrito, itálico e letras pequenas aparecem bem em quase todos os
            celulares.
          </p>
          <ul className="mt-5 grid gap-2.5">
            {styleRows.map((r) => {
              const example = t(r.id, SAMPLE);
              return (
                <li key={r.id} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">{r.name}</p>
                    <p className="mt-0.5 font-[family-name:var(--font-symbols)] text-xl leading-snug" aria-hidden>
                      {example}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-soft">Bom para: {r.use}</p>
                  </div>
                  <CopyButton text={example} label={`Copiar exemplo no estilo ${r.name}`} />
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm text-ink-soft">
            Veja mais de 60 estilos no <Link href="/" className={link}>gerador de letras diferentes</Link>.
          </p>
        </section>

        <section aria-labelledby="ideias">
          <H2 id="ideias">Ideias de nome e bio para TikTok</H2>
          <p className="mt-3 text-ink-soft">Toque em Copiar. Troque as palavras pelas suas no conversor.</p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {ideas.map((p, i) => (
              <li key={p} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <p className="min-w-0 flex-1 font-[family-name:var(--font-symbols)] text-lg leading-snug [overflow-wrap:anywhere]">{p}</p>
                <CopyButton text={p} label={`Copiar ideia ${i + 1}`} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="alcance">
          <H2 id="alcance">Letras diferentes atrapalham o alcance?</H2>
          <div className="prose-content mt-4">
            <p>
              Podem atrapalhar, se usadas no lugar errado. As letras diferentes são caracteres Unicode, e não as letras comuns
              do teclado. Para a busca, {t("cursiva-negrito", "dança")} pode não ser a mesma palavra que dança. Por isso:
            </p>
            <ul>
              <li>Enfeite o nome e a bio, mas mantenha o assunto do seu perfil escrito em letras comuns.</li>
              <li>Na legenda, use a letra diferente só no título ou em uma frase de efeito. Palavras-chave e hashtags sempre em letras normais.</li>
              <li>Nos comentários, use à vontade: lá o objetivo é chamar atenção.</li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="quadradinhos">
          <H2 id="quadradinhos">Por que as letras aparecem como quadradinhos?</H2>
          <div className="prose-content mt-4">
            <p>
              Se o celular de quem vê o seu perfil não tem uma fonte para aquele caractere, ele mostra um quadradinho (□) ou um
              ponto de interrogação. Isso é mais comum em aparelhos antigos e em estilos raros. Para o nome, prefira estilos
              comuns como cursiva, negrito e letras pequenas. Entenda melhor em{" "}
              <Link href="/blog/letras-diferentes-quadradinhos-unicode">por que as letras diferentes viram quadradinhos</Link>.
            </p>
          </div>
        </section>

        <Faq items={faqs} />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/letras-para-instagram", label: "Letras para Instagram", description: "Fontes para bio e legenda." },
            { href: "/letras-para-whatsapp", label: "Letras para WhatsApp", description: "Fontes e formatação para mensagens." },
            { href: "/nome-invisivel", label: "Nome invisível", description: "Nome e bio em branco." },
            { href: "/gerador-de-nick", label: "Gerador de nick", description: "Nicks com letras e símbolos." },
            { href: "/nome-personalizado", label: "Nome personalizado", description: "Seu nome em dezenas de estilos." },
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Conversor de letras para TikTok", description, path })} />
    </div>
  );
}
