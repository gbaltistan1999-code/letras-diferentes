import { getStyle } from "@/lib/fonts";
import type { BlogPost } from "@/types";

const t = (styleId: string, text: string) => getStyle(styleId).transform(text);

export const frasesParaBio: BlogPost = {
  slug: "frases-para-bio-do-instagram",
  title: "Frases para bio do Instagram: 40 ideias curtas para copiar",
  description:
    "40 frases para bio do Instagram curtas e prontas para copiar: de fé, amor-próprio, engraçadas, profissionais e com letras diferentes.",
  datePublished: "2026-11-15",
  cover: {
    src: "/blog/frases-para-bio-do-instagram.png",
    alt: "Capa do artigo Frases para bio do Instagram, com a frase Seja luz em letra cursiva",
  },
  relatedTool: { href: "/letras-para-instagram", label: "Deixar minha bio com letras diferentes" },
  body: `
A bio do Instagram tem só 150 caracteres para dizer quem você é. Uma frase curta e marcante ajuda muito. Separamos 40 frases para bio do Instagram, organizadas por tema, todas prontas para copiar — algumas já com letras diferentes para dar destaque.

> Toque em “Copiar” ao lado da frase, abra o Instagram, vá em Editar perfil > Bio e cole. Veja o passo a passo completo em [letras para Instagram](/letras-para-instagram).

## Frases curtas para bio

+ Menos pressa, mais presença.
+ Vivendo um dia de cada vez.
+ Sonhos grandes, passos firmes.
+ Café, fé e foco.
+ Em construção, com orgulho.
+ Leve como deve ser.
+ Aqui é sol, mesmo quando chove.
+ Coleciono momentos, não coisas.

## Frases de fé

+ Deus no comando, sempre.
+ Tudo no tempo de Deus.
+ Fé que move, gratidão que sustenta.
+ Guiada por Ele.
+ Abençoado para abençoar.
+ Ele cuida de cada detalhe.

## Frases de amor-próprio

+ Me escolhi primeiro.
+ Sendo a minha melhor versão.
+ Meu brilho não depende de ninguém.
+ Aprendendo a ser casa.
+ Gosto de quem eu estou me tornando.
+ Paz é o meu luxo.

## Frases engraçadas para bio

Dica: o [texto riscado](/letras-riscadas) rende boas piadas, como “estou de d̶i̶e̶t̶a̶ férias”.

+ Formado em adiar o despertador.
+ Profissional em pedir “só mais cinco minutinhos”.
+ Sigo a dieta: de segunda a segunda-feira.
+ Wi-Fi forte, paciência fraca.
+ Responde rápido: só no Free Fire.
+ Fofo? Às vezes. Com fome? Sempre.

## Frases para perfil profissional

Em perfis de trabalho, a frase deve explicar o que você faz. Prefira texto normal para as palavras que as pessoas pesquisam.

+ Transformando ideias em design.
+ Fotografia que conta histórias.
+ Doces artesanais feitos com carinho.
+ Ajudo você a cuidar da sua saúde.
+ Encomendas pelo link abaixo.
+ Atendimento de segunda a sábado.

## Frases com letras diferentes

Use um estilo só em parte da bio, como o seu nome ou uma palavra-chave, para destacar sem atrapalhar a leitura. Veja mais opções em [letras cursivas](/letras-cursivas) e [letras bonitas](/letras-bonitas).

+ ${t("cursiva-negrito", "Gratidão")} sempre.
+ ${t("versalete", "Menos é mais")}
+ ${t("estrelas", "Brilhe sempre")}
+ ${t("coracoes", "Amor próprio")}
+ ${t("negrito-sem-serifa", "Foco")} · ${t("negrito-sem-serifa", "Força")} · ${t("negrito-sem-serifa", "Fé")}
+ ${t("japones", "Vivendo o agora")}
+ ${t("cursiva", "Seja luz")}
+ ${t("brilho-de-fada", "Sonhadora")}

## Como montar uma bio que funciona

1. **Primeira linha:** quem você é ou o que você faz, em poucas palavras.
2. **Segunda linha:** uma frase da lista acima que combine com a sua personalidade.
3. **Destaque:** use letras diferentes em uma palavra ou no nome, não na bio inteira.
4. **Chamada:** se tiver link, termine com algo como “Veja o link abaixo”.

## Cuidados com letras diferentes na bio

- **Limite de 150 caracteres:** alguns símbolos estilizados podem ocupar mais espaço na contagem.
- **Busca:** o Instagram não encontra palavras escritas com letras estilizadas como palavras normais. Deixe o nome e a profissão em texto comum.
- **Acessibilidade:** leitores de tela podem ler letras estilizadas de forma confusa. Use os estilos como enfeite.
- **Compatibilidade:** se algum estilo virar quadradinho, entenda o porquê em [por que as letras diferentes viram quadradinhos](/blog/letras-diferentes-quadradinhos-unicode).

Quer testar outros estilos? Digite sua frase no [gerador de letras diferentes](/) e escolha entre dezenas de opções. E se a frase for virar tatuagem, compare as fontes em [letras para tatuagem](/letras-para-tatuagem).
`,
};
