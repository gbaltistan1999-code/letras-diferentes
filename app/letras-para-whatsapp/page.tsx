import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkGrid } from "@/components/ContentBlocks";
import { CopyButton } from "@/components/CopyButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppTools } from "@/components/WhatsAppTools";
import { whatsappPage } from "@/data/style-pages";
import { getStyle } from "@/lib/fonts";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

const path = `/${whatsappPage.slug}`;
const title = "Letras para WhatsApp: Fontes Diferentes para Copiar e Colar";
const description =
  "Letras para WhatsApp grátis: transforme seu texto em negrito, cursiva, gótica, riscada e mais. Copie e cole em mensagens, nome, recado e status.";

export const metadata = buildMetadata({ title, description, path, absoluteTitle: true });

/** Styled text built in code, so editors can't break the Unicode characters. */
const t = (id: string, text: string) => getStyle(id).transform(text, { accents: "plain" });

const SAMPLE = "Bom dia";
const styleRows: { id: string; name: string; use: string }[] = [
  { id: "negrito", name: "Negrito", use: "Avisos, títulos, destaques" },
  { id: "italico", name: "Itálico", use: "Frases e citações" },
  { id: "negrito-italico", name: "Negrito itálico", use: "Recado e status" },
  { id: "cursiva-negrito", name: "Cursiva", use: "Nome, recado, mensagens carinhosas" },
  { id: "gotica-negrito", name: "Gótica", use: "Nome do perfil, grupos" },
  { id: "contorno", name: "Contorno", use: "Nome de grupo, títulos" },
  { id: "negrito-sem-serifa", name: "Sem serifa negrito", use: "Listas e avisos" },
  { id: "monoespacada", name: "Máquina", use: "Visual retrô" },
  { id: "versalete", name: "Letras pequenas", use: "Recado e nome (funciona em quase tudo)" },
  { id: "bolhas", name: "Círculos", use: "Enfeitar palavras curtas" },
  { id: "largura-total", name: "Largas", use: "Visual aesthetic" },
  { id: "riscado", name: "Riscada", use: "Brincadeiras, “corrigir” palavras" },
  { id: "sublinhado", name: "Sublinhada", use: "Destacar uma palavra" },
];

/** WhatsApp's own codes. The "how to type" column is shown as code so the symbols stay visible. */
const formatRows: { name: string; code: string; result: React.ReactNode }[] = [
  { name: "Negrito", code: "*texto*", result: <strong>texto</strong> },
  { name: "Itálico", code: "_texto_", result: <em>texto</em> },
  { name: "Tachado", code: "~texto~", result: <s>texto</s> },
  { name: "Monoespaçado", code: "```texto```", result: <span className="font-mono">texto em fonte de máquina</span> },
  {
    name: "Código embutido",
    code: "`texto`",
    result: <span><code className="rounded bg-warm px-1 font-mono">texto</code> com fundo destacado</span>,
  },
  { name: "Citação", code: "> texto", result: <span className="border-l-4 border-ink-soft/40 pl-2">texto com barra ao lado</span> },
  { name: "Lista com marcadores", code: "- texto", result: "• texto (também vale * texto)" },
  { name: "Lista numerada", code: "1. texto", result: "1. texto" },
  { name: "Negrito + itálico", code: "*_texto_*", result: <strong><em>texto</em></strong> },
];

const phrases: string[] = [
  `${t("cursiva-negrito", "Bom dia, família!")} ☀️`,
  `${t("negrito", "Disponível")} ✅`,
  t("versalete", "Ocupado, só urgências"),
  `✿ ${t("cursiva-negrito", "Gratidão sempre")} ✿`,
  t("gotica-negrito", "Não perturbe"),
  `${t("negrito-italico", "Foco no objetivo")} 🎯`,
  `♡ ${t("versalete", "Vivendo um dia de cada vez")} ♡`,
  `${t("contorno", "Fim de semana")} 🎉`,
  `${t("cursiva-negrito", "Deus no comando")} 🙏`,
  `${t("negrito-sem-serifa", "Em reunião")} ⏳`,
  `☾ ${t("versalete", "Boa noite")} ☽`,
  t("monoespacada", "Volto já"),
];

const faqs: FaqItem[] = [
  {
    question: "Dá para mudar a fonte do WhatsApp nas configurações?",
    answer:
      "Não. O WhatsApp não tem opção para trocar a fonte. Você pode usar a formatação nativa (negrito, itálico, tachado e monoespaçado) ou copiar letras diferentes Unicode de um site como este e colar no app.",
  },
  {
    question: "Como escrever em negrito no WhatsApp?",
    answer:
      "Coloque um asterisco antes e depois do texto, sem espaço: *texto*. Também dá para selecionar a palavra, tocar nos três pontos e escolher Negrito.",
  },
  {
    question: "As letras diferentes funcionam no nome e no recado?",
    answer:
      "Sim. As letras Unicode funcionam nas mensagens, no nome do perfil, no recado, no status e no nome e na descrição de grupos. A formatação com asterisco e sublinhado só funciona nas mensagens.",
  },
  {
    question: "Por que a letra aparece como quadradinho para a outra pessoa?",
    answer:
      "O celular da outra pessoa não tem uma fonte para aquele caractere. Isso é mais comum em aparelhos antigos. Prefira estilos comuns, como negrito e letras pequenas.",
  },
  {
    question: "Por que os acentos ficam fora da letra?",
    answer:
      "Não existem versões estilizadas das letras com acento. Por padrão, deixamos á, ã e ç normais para aparecerem certas. Se ligar a opção de estilizar acentos, em alguns aparelhos o acento pode aparecer ao lado da letra.",
  },
  {
    question: "Dá para escrever colorido no WhatsApp?",
    answer:
      "Não existe texto colorido no WhatsApp. O que dá para fazer é usar emojis e símbolos coloridos junto com as letras diferentes.",
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

export default function WhatsAppLettersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: whatsappPage.navLabel, path }]} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Letras para WhatsApp: fontes diferentes para copiar e colar</h1>
        <p className="mt-3 text-ink-soft">
          Digite seu texto e escolha entre dois jeitos de mudar a letra do WhatsApp:{" "}
          <strong className="text-ink">fontes diferentes</strong> (cursiva, gótica, contorno…) que funcionam em qualquer lugar
          do app, ou a <strong className="text-ink">formatação do próprio WhatsApp</strong> (negrito, itálico, tachado, listas
          e citação). Toque para copiar e cole na conversa, no nome, no recado ou no status.
        </p>
      </header>

      <WhatsAppTools />

      <p className="mt-5 rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed">
        <strong>Resposta rápida:</strong> o WhatsApp não deixa trocar a fonte nas configurações. Para mudar a letra, copie uma
        fonte Unicode daqui (funciona em mensagens, nome, recado e status) ou use os códigos do app:{" "}
        <code className="font-mono">*negrito*</code>, <code className="font-mono">_itálico_</code>,{" "}
        <code className="font-mono">~tachado~</code> e <code className="font-mono">```monoespaçado```</code>.
      </p>

      <article className="mt-14 space-y-14">
        <section aria-labelledby="como-mudar">
          <H2 id="como-mudar">Como mudar a letra do WhatsApp</H2>
          <div className="prose-content mt-4">
            <p>
              O WhatsApp usa sempre a mesma fonte e não tem uma opção para trocá-la, nem no celular nem no computador. Mesmo
              assim, existem dois jeitos de escrever com letras diferentes:
            </p>
            <ul>
              <li>
                <strong>Letras diferentes (Unicode):</strong> são caracteres especiais com desenho de cursiva, gótica, negrito
                e outros. Você copia de um site como este e cola no WhatsApp. Funcionam em todos os campos: mensagens, nome,
                recado, status, nome e descrição de grupos.
              </li>
              <li>
                <strong>Formatação nativa:</strong> são códigos que o próprio app entende, como{" "}
                <code>*texto*</code> para negrito. Só funcionam dentro das mensagens (e no status de texto e na legenda de
                fotos), não no nome nem no recado.
              </li>
            </ul>
          </div>
          <Figure
            src="/images/letras-para-whatsapp.webp"
            alt="Letras para WhatsApp: conversa de grupo com mensagens em cursiva, negrito, gótica e letras pequenas"
            caption="As letras diferentes aparecem para todo mundo do grupo, como texto normal."
            width={1200}
            height={630}
          />
        </section>

        <section aria-labelledby="formatacao">
          <H2 id="formatacao">Formatação nativa do WhatsApp (códigos)</H2>
          <p className="mt-3 text-ink-soft">
            Coloque os símbolos antes e depois do texto, sem espaço entre o símbolo e a palavra. Listas, citação e código
            embutido entraram no app em 2024 e se juntaram ao negrito, itálico, tachado e monoespaçado.
          </p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-warm text-ink">
                <tr>
                  <th scope="col" className="px-4 py-2.5 font-semibold">Formato</th>
                  <th scope="col" className="px-4 py-2.5 font-semibold">Como digitar</th>
                  <th scope="col" className="hidden px-4 py-2.5 font-semibold sm:table-cell">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {formatRows.map((r) => (
                  <tr key={r.name} className="border-t border-line bg-surface">
                    <th scope="row" className="px-4 py-2.5 align-top font-medium">
                      {r.name}
                      {/* On phones the result goes under the name instead of a third column. */}
                      <span className="mt-1 block font-normal text-ink-soft sm:hidden">{r.result}</span>
                    </th>
                    <td className="px-4 py-2.5 align-top">
                      <code className="whitespace-pre rounded bg-warm px-1.5 py-0.5 font-mono text-[0.95em]">{r.code}</code>
                    </td>
                    <td className="hidden px-4 py-2.5 align-top sm:table-cell">{r.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 rounded-xl bg-warm px-4 py-3 text-sm leading-relaxed">
            <strong>Atalho:</strong> no celular, selecione a palavra, toque nos três pontinhos (Android) ou na seta (iPhone) e
            escolha Negrito, Itálico, Tachado ou Monoespaçado. A aba <strong>Formatação do WhatsApp</strong> do conversor acima
            já monta os códigos para você, inclusive em textos com várias linhas.
          </p>
        </section>

        <section aria-labelledby="estilos">
          <H2 id="estilos">Letras diferentes para WhatsApp</H2>
          <p className="mt-3 text-ink-soft">
            Estes são alguns dos estilos do conversor. Os que aparecem bem em quase todos os celulares são o negrito, o
            itálico e as letras pequenas.
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
            Quer mais de 60 estilos? Veja o <Link href="/" className={link}>gerador de letras diferentes</Link>, as{" "}
            <Link href="/letras-cursivas" className={link}>letras cursivas</Link> e as{" "}
            <Link href="/letras-goticas" className={link}>letras góticas</Link>.
          </p>
        </section>

        <section aria-labelledby="nome-recado">
          <H2 id="nome-recado">Como colocar letra diferente no nome e no recado</H2>
          <Figure
            src="/images/como-usar-letras-whatsapp.webp"
            alt="Como usar letras diferentes no WhatsApp em 4 passos: digitar o texto, escolher a letra, copiar e colar no WhatsApp"
            caption="O mesmo passo a passo serve para mensagens, nome, recado e status."
            width={1200}
            height={700}
          />
          <div className="prose-content">
            <h3>No nome do perfil</h3>
            <ol>
              <li>Digite seu nome no conversor e toque no estilo que gostar.</li>
              <li>No WhatsApp, vá em <strong>Configurações</strong> e toque no seu perfil.</li>
              <li>Toque em <strong>Nome</strong>, apague o atual, cole o novo e salve.</li>
            </ol>
            <h3>No recado (sobre)</h3>
            <ol>
              <li>Escreva a frase no conversor e copie o estilo.</li>
              <li>Em <strong>Configurações › Perfil</strong>, toque em <strong>Recado</strong> (ou “Sobre”).</li>
              <li>Cole a frase e salve.</li>
            </ol>
            <p>
              Para deixar o nome ou o recado totalmente em branco, use o <Link href="/nome-invisivel">nome invisível</Link>.
              Para grupos, o processo é o mesmo: abra os dados do grupo e cole no nome ou na descrição. Precisa de ideias? Veja
              os <Link href="/blog/nomes-para-grupo-de-whatsapp">nomes para grupo de WhatsApp</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="frases">
          <H2 id="frases">Frases prontas para recado e status</H2>
          <p className="mt-3 text-ink-soft">
            Toque em Copiar e cole no recado, no status ou em uma mensagem. Quer mais ideias? Veja as{" "}
            <Link href="/blog/frases-para-status-do-whatsapp" className={link}>70 frases para status do WhatsApp</Link>.
          </p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {phrases.map((p, i) => (
              <li key={p} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <p className="min-w-0 flex-1 font-[family-name:var(--font-symbols)] text-lg leading-snug [overflow-wrap:anywhere]">{p}</p>
                <CopyButton text={p} label={`Copiar frase ${i + 1}`} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="colorido">
          <H2 id="colorido">Dá para escrever colorido no WhatsApp?</H2>
          <div className="prose-content mt-4">
            <p>
              Não. O WhatsApp não tem texto colorido: todas as letras aparecem na cor padrão do app. Apps que prometem
              “letra colorida” geralmente usam letras diferentes e emojis. O jeito mais simples de dar cor é misturar as letras
              daqui com emojis e <Link href="/simbolos">símbolos</Link>, como ✿, ♡ e ★.
            </p>
          </div>
        </section>

        <section aria-labelledby="quadradinho">
          <H2 id="quadradinho">Por que a letra aparece como quadradinho?</H2>
          <div className="prose-content mt-4">
            <p>
              As letras diferentes são caracteres Unicode. Se o celular de quem recebe não tem uma fonte com aquele desenho,
              ele mostra um quadradinho (□) ou um ponto de interrogação. Isso é mais comum em aparelhos antigos e em estilos
              raros. Para mensagens importantes, prefira negrito, itálico ou letras pequenas. Entenda melhor em{" "}
              <Link href="/blog/letras-diferentes-quadradinhos-unicode">por que as letras diferentes viram quadradinhos</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="dicas">
          <H2 id="dicas">Dicas para usar bem</H2>
          <div className="prose-content mt-4">
            <ul>
              <li>
                <strong>Use para destacar, não para tudo:</strong> um título ou uma palavra em letra diferente chama atenção;
                um texto inteiro fica cansativo de ler.
              </li>
              <li>
                <strong>Pense em quem usa leitor de tela:</strong> pessoas cegas ou com baixa visão usam leitores que podem
                soletrar letra por letra ou pular o texto estilizado. Em avisos importantes, use a formatação nativa.
              </li>
              <li>
                <strong>WhatsApp Business:</strong> para mensagens a clientes, prefira o negrito nativo (
                <code>*texto*</code>). Ele é mais legível e não vira quadradinho.
              </li>
            </ul>
          </div>
        </section>

        <Faq items={faqs} />

        <LinkGrid
          heading="Veja também"
          links={[
            { href: "/nome-invisivel", label: "Nome invisível", description: "Nome e mensagem em branco." },
            { href: "/gerador-de-nick", label: "Gerador de nick", description: "Nicks com letras e símbolos." },
            { href: "/letras-para-instagram", label: "Letras para Instagram", description: "Fontes para bio e legenda." },
            { href: "/letras-para-tiktok", label: "Letras para TikTok", description: "Nome, bio e comentários com contador." },
            { href: "/nome-personalizado", label: "Nome personalizado", description: "Seu nome em dezenas de estilos." },
          ]}
        />
      </article>

      <JsonLd data={webApplicationSchema({ name: "Conversor de letras para WhatsApp", description, path })} />
    </div>
  );
}
