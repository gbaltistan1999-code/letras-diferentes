import Link from "next/link";
import { Examples, LinkGrid } from "@/components/ContentBlocks";
import { Faq } from "@/components/Faq";
import { Generator } from "@/components/Generator";
import { JsonLd } from "@/components/JsonLd";
import { stylePages } from "@/data/style-pages";
import { homeFaqs } from "@/data/faqs";
import { CATEGORIES, STYLES } from "@/lib/fonts";
import { buildMetadata, webApplicationSchema } from "@/lib/seo";

const title = "Letras Diferentes para Copiar e Colar | Gerador Grátis";
const description = `Digite seu texto e copie em ${STYLES.length} estilos de letras diferentes: cursivas, góticas, negrito, bolhas e mais. Para Instagram, Free Fire, WhatsApp e TikTok.`;

export const metadata = buildMetadata({ title, description, path: "/", absoluteTitle: true });

const linkDescriptions: Record<string, string> = {
  "letras-cursivas": "Estilo manuscrito, cursiva em negrito e itálico.",
  "letras-bonitas": "Combinações com molduras, corações e estrelas.",
  "letras-goticas": "Fraktur clássica e em negrito.",
  "letras-pequenas": "Versalete, sobrescrito e subscrito.",
  "letras-para-instagram": "Bio, nome e legendas — com passo a passo.",
  "letras-para-free-fire": "Nicks com ꧁꧂, 亗 e como trocar no jogo.",
  "letras-riscadas": "Texto riscado, cortado e sublinhado.",
  simbolos: "Estrelas, corações, flechas e enfeites.",
};

const platforms = ["Instagram", "TikTok", "WhatsApp", "Facebook", "X (Twitter)", "Free Fire", "Discord", "Telegram"];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export default function HomePage() {
  const categoryCounts = CATEGORIES.map((c) => ({
    ...c,
    count: STYLES.filter((s) => s.category === c.id).length,
  }));

  return (
    <div className="mx-auto max-w-3xl px-4 pt-8 sm:pt-12">
      <header className="mb-6 text-center sm:mb-8">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Grátis · Sem cadastro · Seu texto não sai do navegador
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-[2.6rem] sm:leading-tight">
          Letras diferentes para copiar e colar
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Digite seu texto e veja-o na hora em {STYLES.length} estilos. Toque em “Copiar” e cole no
          Instagram, no WhatsApp, no TikTok ou no nick do seu jogo. Aqui você encontra diferentes
          letras e estilos para deixar seu nome, nick ou bio com outra cara.
        </p>
      </header>

      <Generator sampleText="Letras Diferentes" />

      <article className="mt-16 space-y-14">
        <section aria-labelledby="o-que-e">
          <H2 id="o-que-e">O que este gerador de letras faz?</H2>
          <div className="prose-content mt-4">
            <p>
              O gerador transforma o texto que você digita em versões estilizadas: letras
              cursivas, góticas, em negrito, dentro de bolhas, riscadas, de cabeça para baixo e
              muito mais. Cada resultado já sai pronto para copiar e colar onde as fontes
              normais não podem ser trocadas, como bios, nomes de perfil, legendas e nicks.
            </p>
            <p>
              Não é preciso instalar aplicativo nem criar conta: o gerador de letras diferentes
              funciona direto nesta página, no seu navegador, no celular ou no computador.
            </p>
          </div>
        </section>

        <section aria-labelledby="como-usar">
          <H2 id="como-usar">Como usar, em 4 passos</H2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["Digite", "Escreva seu nome, nick ou frase na caixa do topo."],
              ["Escolha", "Role a lista ou filtre por categoria até achar o estilo ideal."],
              ["Copie", "Toque em “Copiar”. A confirmação “Copiado!” aparece no botão."],
              ["Cole", "No app de destino, pressione o campo de texto e escolha “Colar”."],
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

        <section aria-labelledby="onde-funciona">
          <H2 id="onde-funciona">Onde as letras diferentes funcionam?</H2>
          <div className="prose-content mt-4">
            <p>
              Os estilos podem ser colados na maioria dos apps e sites que aceitam texto,
              incluindo:
            </p>
          </div>
          <ul className="mt-1 flex flex-wrap gap-2">
            {platforms.map((p) => (
              <li key={p} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm">
                {p}
              </li>
            ))}
          </ul>
          <div className="prose-content mt-4">
            <p>
              Há exceções: campos de nome de usuário (como o @ do Instagram e do TikTok)
              geralmente aceitam só letras comuns, números e alguns sinais, e jogos podem
              recusar certos símbolos no nick. Veja os guias de{" "}
              <Link href="/letras-para-instagram">letras para Instagram</Link> e de{" "}
              <Link href="/letras-para-free-fire">nicks para Free Fire</Link> para os detalhes de
              cada plataforma.
            </p>
          </div>
        </section>

        <section aria-labelledby="como-funciona">
          <H2 id="como-funciona">Como as letras diferentes funcionam?</H2>
          <div className="prose-content mt-4">
            <p>
              Quando você muda a fonte em um editor de texto, só a aparência muda; ao copiar
              para outro app, a fonte se perde. As letras deste gerador são diferentes: cada uma
              é um caractere próprio do <strong>Unicode</strong>, o padrão internacional que
              define os caracteres de todos os idiomas e símbolos usados em computadores e
              celulares.
            </p>
            <p>
              Boa parte dos estilos usa o bloco{" "}
              <a href="https://www.unicode.org/charts/PDF/U1D400.pdf" target="_blank" rel="noopener noreferrer">
                Mathematical Alphanumeric Symbols
              </a>
              , criado para fórmulas matemáticas, que tem alfabetos completos em negrito,
              cursiva, gótica e outros. Os estilos em bolhas e quadrados vêm dos blocos de
              caracteres envolvidos (Enclosed Alphanumerics), e os estilos riscados e
              sublinhados usam sinais combináveis, que desenham uma linha sobre a letra anterior.
            </p>
            <p>
              O Unicode não tem versões estilizadas de letras com acento. Por isso, por padrão,
              o gerador deixa “á”, “ã”, “ç” e as demais letras acentuadas na forma normal e
              estiliza o resto da palavra: “coração” continua com a acentuação certa e aparece
              bem em qualquer aparelho. Se preferir tudo estilizado, marque a opção “Estilizar
              também as letras com acento” — o gerador estiliza a letra e encaixa o acento por
              cima, mas em algumas fontes ele pode aparecer ao lado. Mais detalhes no site do{" "}
              <a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer">
                Unicode Consortium
              </a>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="categorias">
          <H2 id="categorias">Categorias de estilos</H2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {categoryCounts.map((c) => {
              const sample = STYLES.find((s) => s.category === c.id)!;
              return (
                <li key={c.id} className="rounded-xl border border-line bg-surface p-4">
                  <p className="font-semibold">
                    {c.label} <span className="text-sm font-normal text-ink-soft">({c.count})</span>
                  </p>
                  <p aria-hidden="true" className="mt-1 font-[family-name:var(--font-symbols)] text-lg">
                    {sample.transform("Exemplo")}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <Examples
          heading="Exemplos para copiar agora"
          examples={[
            { styleId: "cursiva-negrito", text: "Coração" },
            { styleId: "gotica", text: "Lenda" },
            { styleId: "moldura-classica", text: "Nick" },
            { styleId: "versalete", text: "você é incrível" },
          ]}
        />

        <section aria-labelledby="limitacoes">
          <H2 id="limitacoes">Limitações de compatibilidade</H2>
          <div className="prose-content mt-4">
            <ul>
              <li>
                <strong>Quadradinhos ou “?”:</strong> aparecem quando o aparelho não tem desenho
                para aquele caractere. Estilos como negrito, cursiva e versalete são os mais
                compatíveis; símbolos raros podem falhar em sistemas antigos.
              </li>
              <li>
                <strong>Campos restritos:</strong> nomes de usuário, e-mails e alguns campos de
                jogos aceitam só caracteres comuns.
              </li>
              <li>
                <strong>Limite de caracteres:</strong> alguns símbolos podem ocupar mais espaço na
                contagem do que uma letra comum.
              </li>
              <li>
                <strong>Busca:</strong> textos estilizados normalmente não são encontrados pela
                busca das plataformas como palavras normais.
              </li>
              <li>
                <strong>Acentos:</strong> letras acentuadas ficam normais por padrão. Se você
                ativar a opção de estilizá-las, em algumas fontes o acento pode ficar
                levemente deslocado.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="acessibilidade">
          <H2 id="acessibilidade">Acessibilidade: use com moderação</H2>
          <div className="prose-content mt-4">
            <p>
              Pessoas cegas ou com baixa visão usam leitores de tela, que nem sempre entendem
              letras estilizadas. Muitos leem cada caractere pelo nome técnico (“letra matemática
              negrito L…”) ou simplesmente pulam o texto. Para que todos entendam o seu
              conteúdo:
            </p>
            <ul>
              <li>use estilos em palavras curtas, como enfeite;</li>
              <li>deixe informações importantes (contato, preço, datas) em texto comum;</li>
              <li>evite escrever parágrafos inteiros com letras estilizadas.</li>
            </ul>
          </div>
        </section>

        <Faq items={homeFaqs} />

        <LinkGrid
          heading="Estilos e guias por tema"
          id="estilos"
          links={stylePages.map((p) => ({
            href: `/${p.slug}`,
            label: p.navLabel,
            description: linkDescriptions[p.slug],
          }))}
        />

        <section aria-labelledby="conclusao" className="rounded-2xl bg-warm p-6">
          <H2 id="conclusao">Pronto para deixar seu texto com outra cara?</H2>
          <p className="mt-3 text-ink-soft">
            Volte ao <a href="#conteudo" className="text-accent underline underline-offset-2">gerador no topo da página</a>,
            digite seu nome ou frase e teste os estilos no app onde vai usar. Tem dúvidas?
            Veja as <Link href="/perguntas-frequentes" className="text-accent underline underline-offset-2">perguntas frequentes</Link>.
          </p>
        </section>
      </article>

      <JsonLd data={webApplicationSchema({ name: "Gerador de Letras Diferentes", description, path: "/" })} />
    </div>
  );
}
