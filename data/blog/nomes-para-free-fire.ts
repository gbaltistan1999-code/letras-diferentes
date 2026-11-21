import { getStyle } from "@/lib/fonts";
import type { BlogPost } from "@/types";

/** Styled text using the site's own generator (so examples always match it). */
const t = (styleId: string, text: string) => getStyle(styleId).transform(text);

export const nomesParaFreeFire: BlogPost = {
  slug: "nomes-para-free-fire",
  title: "Nomes para Free Fire: 40 ideias de nick com letras diferentes",
  description:
    "40 ideias de nomes para Free Fire prontas para copiar: nicks com letras diferentes e símbolos, femininos, masculinos, curtos e engraçados.",
  datePublished: "2026-11-15",
  cover: {
    src: "/blog/nomes-para-free-fire.png",
    alt: "Capa do artigo Nomes para Free Fire: 40 ideias de nick, com o nick Lobo entre os símbolos ꧁ ꧂",
  },
  relatedTool: { href: "/letras-para-free-fire", label: "Criar meu nick no gerador de Free Fire" },
  body: `
Escolher um bom nome para Free Fire faz diferença: é a primeira coisa que os outros jogadores veem no lobby, no ranking e no kill feed. Reunimos 40 ideias de nick prontas para copiar, já com letras diferentes e símbolos. Use como estão ou como inspiração para criar o seu.

> Antes de confirmar a troca de nome no jogo, cole o nick no campo e confira a prévia. O Free Fire tem limite de caracteres e pode recusar alguns símbolos, e a troca normalmente custa diamantes ou um item de troca de nome.

## Nicks com símbolos

Molduras como ꧁ ꧂, o símbolo 亗 e estrelas ★彡 estão entre os enfeites mais usados em nicks.

+ ${t("moldura-classica", "Lobo")}
+ ${t("moldura-classica", "Fênix")}
+ ${t("simbolo-oriental", "Sniper")}
+ ${t("simbolo-oriental", "Lenda")}
+ ${t("estrelas", "Rainha")}
+ ${t("estrelas", "Brabo")}
+ ${t("japones", "Mito")}
+ ${t("flechas", "Caçador")}

## Nomes masculinos para Free Fire

Estilos de traço forte, como a [letra gótica em negrito](/letras-goticas), passam a ideia de força.

+ ${t("gotica-negrito", "Matador")}
+ ${t("gotica-negrito", "Rei do Gelo")}
+ ${t("gotica", "Sombrio")}
+ ${t("negrito-sem-serifa", "Capitão")}
+ ${t("contorno", "Titan")}
+ ${t("versalete", "Capa Preta")}
+ ${t("estilo-oriental", "Ninja")}
+ ${t("monoespacada", "Hacker")}

Quer mais opções? Veja mais de 100 [nomes para Free Fire masculino](/nomes-para-free-fire-masculino), separados por estilo: brabos, com símbolos, dark e em inglês.

## Nomes femininos para Free Fire

[Cursivas](/letras-cursivas), corações e [letras pequenas](/letras-pequenas) deixam o nick mais delicado, sem perder a personalidade.

+ ${t("coracoes", "Princesa")}
+ ${t("cursiva-negrito", "Diva")}
+ ${t("cursiva", "Estrela")}
+ ${t("brilho-de-fada", "Fada")}
+ ${t("estrelas", "Lunna")}
+ ${t("versalete", "Gatinha")}
+ ${t("bolhas", "Fofa")}
+ ${t("coracoes-entre-letras", "Mel")}

Quer mais opções? Veja mais de 100 [nomes para Free Fire feminino](/nomes-para-free-fire-feminino), separados por estilo: fofos, aesthetic, poderosos e para dupla.

## Nicks curtos

Nomes curtos cabem no limite do jogo com folga e são fáceis de lembrar.

+ ${t("gotica-negrito", "Ace")}
+ ${t("negrito-sem-serifa", "Zed")}
+ ${t("contorno", "Kai")}
+ ${t("bolhas-pretas", "Rox")}
+ ${t("quadrados-pretos", "Max")}
+ ${t("estilo-moedas", "Vex")}
+ ${t("versalete", "Nox")}
+ ${t("cursiva-negrito", "Lia")}

## Nicks engraçados

Para quem joga na zoeira e quer arrancar uma risada do esquadrão.

+ ${t("negrito-sem-serifa", "Bot Assumido")}
+ ${t("versalete", "Morri de Novo")}
+ ${t("de-cabeca-para-baixo", "Caí do Avião")}
+ ${t("estrelas", "Camper Feliz")}
+ ${t("japones", "Só Mira no Pé")}
+ ${t("zalgo", "Lag Eterno")}
+ ${t("coracoes", "Medo de Gás")}
+ ${t("contorno", "Pato Tático")}

## Como criar um nick único

1. Escolha uma palavra que combine com você: um apelido, um animal, um personagem ou o seu estilo de jogo.
2. Digite a palavra no [gerador de letras para Free Fire](/letras-para-free-fire) e compare os estilos.
3. Adicione um símbolo nas pontas, como ꧁ ꧂ ou 亗 — veja mais opções na página de [símbolos para copiar](/simbolos).
4. Cole no jogo, confira a prévia e só então confirme a troca.

## Dicas para o nick não dar problema

- **Nome legível:** se ninguém consegue ler o seu nick, fica difícil te encontrar para adicionar como amigo.
- **Menos é mais:** muitos símbolos podem passar do limite de caracteres do jogo.
- **Teste a exibição:** se aparecer um quadradinho no lugar de alguma letra, o celular não tem aquele caractere. Entenda o motivo em [por que as letras diferentes viram quadradinhos](/blog/letras-diferentes-quadradinhos-unicode).
- **Guarde uma cópia:** salve o nick em um bloco de notas para usar no Discord e nas redes sociais também.

O Letras Diferentes não tem vínculo com a Garena ou com o Free Fire. As regras e os custos de troca de nome são definidos pelo jogo e podem mudar.
`,
};
