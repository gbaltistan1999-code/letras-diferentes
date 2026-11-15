import { getStyle } from "@/lib/fonts";
import type { BlogPost } from "@/types";

const t = (styleId: string, text: string) => getStyle(styleId).transform(text);

export const quadradinhosUnicode: BlogPost = {
  slug: "letras-diferentes-quadradinhos-unicode",
  title: "Por que as letras diferentes viram quadradinhos? Entenda o Unicode",
  description:
    "Suas letras diferentes aparecem como quadradinhos ou pontos de interrogação? Entenda o que é o Unicode, por que isso acontece e como resolver em cada caso.",
  datePublished: "2026-11-15",
  cover: {
    src: "/blog/letras-diferentes-quadradinhos-unicode.png",
    alt: "Capa do artigo Por que as letras viram quadradinhos, mostrando um quadradinho virando a letra A em negrito",
  },
  relatedTool: { href: "/", label: "Testar estilos no gerador de letras diferentes" },
  body: `
Você copia um nick estiloso, cola no app e… aparece □□□ ou ??? no lugar das letras. Isso acontece com muita gente e tem uma explicação simples. Neste guia você entende o que são as letras diferentes por dentro, por que às vezes elas viram quadradinhos e o que fazer em cada caso.

## As letras diferentes não são fontes

Quando você muda a fonte em um editor de texto, como Word ou Google Docs, só a aparência muda: a letra “A” continua sendo a letra “A”. Por isso, ao copiar e colar em outro app, a fonte se perde.

As letras diferentes funcionam de outro jeito. Cada letra estilizada é um **caractere próprio**. O ${t("negrito", "A")} em negrito, o ${t("gotica", "A")} gótico e o ${t("bolhas", "A")} em bolha são, para o computador, caracteres diferentes do “A” comum — assim como “ç” é diferente de “c”. É por isso que eles continuam estilizados quando você cola em outro lugar.

## O que é o Unicode

O Unicode é o padrão internacional que dá um número a cada caractere usado em computadores e celulares: letras de todos os idiomas, números, símbolos e emojis. Graças a ele, uma mensagem escrita em um iPhone aparece igual em um Android ou em um computador.

Boa parte das letras diferentes vem de um bloco do Unicode chamado **Mathematical Alphanumeric Symbols**, criado para fórmulas matemáticas e adicionado ao padrão em 2001. Ele tem alfabetos completos em negrito, itálico, cursiva, gótica e contorno. Outros estilos usam blocos de símbolos (como ★ e ♡), letras dentro de círculos e quadrados, ou caracteres de outros idiomas, como o 亗 e o ꧁.

## Por que aparecem quadradinhos?

O Unicode define **qual** é o caractere, mas quem desenha o caractere na tela é a fonte instalada no seu aparelho. Se nenhuma fonte do sistema tem o desenho daquele caractere, o aparelho mostra um quadradinho (□), um ponto de interrogação ou um retângulo com um “X”. Esse quadradinho tem até apelido entre programadores: “tofu”.

Os motivos mais comuns são:

- **Sistema desatualizado:** aparelhos antigos têm menos fontes e não conhecem caracteres adicionados ao Unicode mais recentemente.
- **Caracteres raros:** símbolos de alfabetos pouco usados, como o ꧁ ꧂ (javanês), não estão em todas as fontes.
- **App com fonte própria:** alguns apps e jogos usam a sua própria fonte, que pode não ter todos os caracteres.
- **Campo que filtra caracteres:** alguns campos, como nomes de usuário, simplesmente recusam ou removem caracteres especiais.

## Quais estilos são mais compatíveis

Em geral, os estilos que usam os alfabetos mais antigos e difundidos do Unicode, como estes, aparecem bem na maioria dos celulares atuais:

+ ${t("negrito-sem-serifa", "Negrito sem serifa")}
+ ${t("cursiva-negrito", "Cursiva em negrito")}
+ ${t("versalete", "Versalete")}
+ ${t("italico", "Itálico")}

Já símbolos raros, letras em quadrados pretos (que alguns apps mostram como emoji) e o texto Zalgo têm mais chance de falhar ou de serem cortados.

## Como resolver

1. **Atualize o sistema** do celular ou do computador: atualizações trazem fontes mais completas.
2. **Troque de estilo:** se um estilo vira quadradinho, teste outro no [gerador de letras diferentes](/).
3. **Teste antes de usar:** cole o texto em uma conversa com você mesmo ou na prévia do app antes de publicar ou confirmar uma troca de nick.
4. **Use os símbolos com moderação:** quanto mais caracteres raros, maior a chance de algum não aparecer.
5. **Lembre de quem vai ler:** mesmo que apareça certo no seu celular, alguém com um aparelho antigo pode ver quadradinhos.

## E os acentos?

O Unicode não tem versões estilizadas de letras com acento, como “á”, “ã” ou “ç”. Por isso, no nosso gerador, as letras acentuadas ficam na forma normal por padrão — assim o acento aparece certo em qualquer aparelho. Se você preferir estilizar tudo, existe uma opção para encaixar o acento sobre a letra estilizada, mas algumas fontes, principalmente no Windows, desenham esse acento ao lado da letra.

> Leitores de tela, usados por pessoas cegas ou com baixa visão, podem ler as letras estilizadas pelo nome técnico (“letra matemática negrito A”) ou pular o texto. Mantenha informações importantes em texto comum.

## Resumo

- Letras diferentes são caracteres Unicode, não fontes.
- Quadradinhos aparecem quando o aparelho não tem o desenho daquele caractere.
- Estilos comuns, como negrito e cursiva, são os mais compatíveis.
- Atualizar o sistema e testar antes de usar evita surpresas.

Quer ver na prática? Digite qualquer texto no [gerador](/) e compare os estilos. Se for usar no Instagram ou no Free Fire, veja também os guias de [letras para Instagram](/letras-para-instagram) e [letras para Free Fire](/letras-para-free-fire).
`,
};
