import { getStyle } from "@/lib/fonts";
import type { BlogPost } from "@/types";

/** Styled phrases built in code, so editors can't break the Unicode letters. */
const t = (id: string, text: string) => getStyle(id).transform(text, { accents: "plain" });

const styled = [
  `✿ ${t("cursiva-negrito", "Gratidão por mais um dia")} ✿`,
  `${t("negrito", "Foco, força e fé")} 💪`,
  `♡ ${t("versalete", "Vivendo um dia de cada vez")} ♡`,
  t("gotica-negrito", "Não é sorte, é constância"),
  `${t("negrito-italico", "O melhor ainda está por vir")} ✨`,
  `${t("contorno", "Sextou")} 🎉`,
  `${t("cursiva-negrito", "Deus no comando")} 🙏`,
  `${t("monoespacada", "modo off: ligado")} 📵`,
];

export const frasesParaStatus: BlogPost = {
  slug: "frases-para-status-do-whatsapp",
  title: "Frases para status do WhatsApp: 70 ideias curtas para copiar",
  metaTitle: "Frases para Status do WhatsApp: 70 Ideias Curtas para Copiar",
  description:
    "70 frases para status do WhatsApp curtas e prontas para copiar: motivação, reflexão, fé, amor, amizade, indiretas, engraçadas e com letras diferentes.",
  excerpt:
    "Mais de 70 frases curtas para o status do WhatsApp: motivação, reflexão, fé, amor, amizade, indiretas leves, engraçadas e com letras diferentes.",
  datePublished: "2026-11-19",
  cover: {
    src: "/blog/frases-para-status-do-whatsapp.png",
    alt: "Capa do artigo Frases para status do WhatsApp, com a palavra Sextou em letra cursiva entre estrelinhas",
  },
  relatedTool: { href: "/letras-para-whatsapp", label: "Escrever minha frase com letras diferentes" },
  body: `
Procurando frases para status do WhatsApp? Aqui você encontra 70 ideias curtas e prontas para copiar, separadas por tema: motivação, reflexão, fé, amor, amizade, indiretas leves, engraçadas e para cada dia da semana. É só tocar, copiar e colar no seu status.

E se quiser que a frase chame mais atenção, no final tem uma seção com frases em letras diferentes. 😉

## Frases curtas para status

Para quem quer dizer muito com pouco:

+ Um dia de cada vez.
+ Hoje eu escolho paz.
+ Menos ruído, mais propósito.
+ Aprendendo a ir devagar.
+ Fase boa, coração leve.
+ Do meu jeito, no meu tempo.
+ Silêncio também é resposta.
+ Vivendo o agora.

## Frases de motivação para status

![Celular com a frase Sonhe, acredite, conquiste em letra cursiva, ao lado de flores de lavanda, caneta e café](/blog/frase-motivacional-status.webp "Frases curtas de motivação ficam ótimas no status de texto.")

+ Não é sorte, é constância.
+ Cansado sim, desistindo nunca.
+ Quem planta esforço colhe resultado.
+ O progresso é lento, mas é progresso.
+ Se ninguém acredita, eu acredito por dois.
+ Hoje é dia de fazer o que ontem eu só pensei.
+ Pequenos passos também chegam longe.
+ O sonho é meu, então o esforço também.

## Frases de reflexão para status

+ Nem todo mundo que está perto está do seu lado.
+ Às vezes perder é o que te salva.
+ O tempo mostra tudo, é só esperar.
+ Maturidade é saber o que não merece resposta.
+ Quem te quer bem faz questão.
+ A gente cresce quando para de explicar demais.
+ Tem fase que é para aprender, não para entender.
+ Valorize quem fica nos dias difíceis.

## Frases de fé para status

+ Deus no comando, eu na fé.
+ O que é meu, ninguém tira.
+ Grato por tudo, até pelo que ainda não veio.
+ Quando Deus abre a porta, ninguém fecha.
+ Fé no processo e confiança no tempo certo.
+ Minha força vem do alto.
+ Abençoado demais para reclamar.
+ Seguindo com fé, mesmo sem ver o caminho todo.

## Frases de amor para status

+ Você é meu lugar favorito.
+ Com você, até o simples fica especial.
+ Meu amor tem nome e sobrenome.
+ Sorte é ter você por perto.
+ Nosso amor é minha melhor escolha.
+ Com você, o tempo passa diferente.
+ Não precisa ser perfeito, precisa ser nosso.
+ Te escolheria em todas as vidas.

## Frases de amizade para status

+ Amigo de verdade é família que a gente escolhe.
+ Poucos, mas verdadeiros.
+ Com os amigos certos, todo rolê vira história.
+ Obrigado por me aguentar até nos dias ruins.
+ Se é para rir, que seja com vocês.
+ Amizade boa não precisa de explicação.
+ Meus amigos são meu ponto fraco.
+ Quem tem amigo assim tem tudo.

## Indiretas leves para status

Indiretas sem briga, só para mandar o recado:

+ Quem quer arruma um jeito, quem não quer arruma desculpa.
+ Visualizou e não respondeu? Tudo bem, eu também sei fazer isso.
+ Tem gente que só lembra de mim quando precisa.
+ Eu não mudei, só parei de aceitar pouco.
+ Sumiu? Tranquilo, a porta é a mesma por onde entrou.
+ Não guardo rancor, guardo lições.

## Frases engraçadas para status

+ Meu corpo pede academia, minha alma pede pizza.
+ Sou fitness: fit no sofá, ness na cama.
+ Dieta começa segunda. Qual segunda? Não sei.
+ Não estou atrasado, estou fazendo uma entrada dramática.
+ Meu saldo e eu: um relacionamento complicado.
+ Se dormir resolvesse, eu era a pessoa mais resolvida do mundo.
+ Hoje eu acordei lindo. Depois passou.
+ Status: carregando paciência… 3%.

## Frases para cada dia da semana

Uma para cada dia, de segunda a domingo:

+ Segunda-feira: respira fundo e vai.
+ Terça é só uma segunda com mais coragem.
+ Quarta: metade da semana, o dobro da vontade de descansar.
+ Quinta-feira: a sexta já está mandando sinais.
+ Sextou com S de sossego.
+ Sábado é para fazer nada e não sentir culpa.
+ Domingo é dia de família, café e preguiça.

No fim de ano, veja também as [frases de Natal e Ano Novo](/blog/frases-de-natal-e-ano-novo) para o status.

## Frases para status com letras diferentes

Quer que seu status se destaque no meio dos outros? Copie uma destas frases em letras diferentes:

${styled.map((s) => `+ ${s}`).join("\n")}

Quer escrever a sua própria frase assim? Use o nosso [conversor de letras para WhatsApp](/letras-para-whatsapp): digite o texto, escolha o estilo e copie. Lá você também encontra os códigos de negrito, itálico e tachado do próprio WhatsApp. Para ver todas as opções, leia o guia de [como mudar a fonte do WhatsApp](/blog/como-mudar-a-fonte-do-whatsapp).

## Como colocar uma frase no status do WhatsApp

![Pessoa sorrindo ao ver no celular um status com a frase Acredite em você, tudo é possível](/blog/frase-no-status-do-whatsapp.webp "Um status de texto com fundo colorido e uma frase curta.")

1. Copie a frase que você escolheu nesta página.
2. Abra o WhatsApp e toque na aba **Atualizações** (ou **Status**).
3. Toque no ícone de lápis para criar um status de texto.
4. Segure na tela, toque em **Colar** e escolha a cor de fundo e a fonte.
5. Toque em **Enviar**. O status fica visível por 24 horas.

> **Dica:** você também pode colar a frase como legenda de uma foto ou vídeo no status.

## Dicas para um status que chama atenção

- **Seja curto:** frases rápidas são lidas até o fim. Textos longos costumam ser pulados.
- **Combine com o momento:** uma frase de motivação na segunda e uma engraçada na sexta funcionam melhor.
- **Use emojis com moderação:** um ou dois dão cor, dez cansam.
- **Indireta, só leve:** status é público para seus contatos. Evite expor brigas ou pessoas.
- **Destaque com letras diferentes:** uma palavra em cursiva ou negrito já faz o status se destacar. Se a outra pessoa vir quadradinhos, entenda [por que as letras diferentes viram quadradinhos](/blog/letras-diferentes-quadradinhos-unicode).

## Perguntas frequentes

### Quanto tempo o status do WhatsApp fica no ar?

O status fica visível por 24 horas para os contatos que você escolheu nas configurações de privacidade.

### Posso usar letras diferentes no status?

Sim. As letras diferentes funcionam no status de texto, na legenda de fotos e também no recado do perfil. Você pode criar as suas no [conversor de letras para WhatsApp](/letras-para-whatsapp).

### Como escolher quem vê meu status?

Na aba **Atualizações**, toque nos três pontinhos, vá em **Privacidade do status** e escolha entre todos os contatos, contatos exceto alguns ou só alguns contatos.

### Posso usar essas frases no recado do perfil?

Sim. As frases curtas desta página também funcionam no recado. Veja também nossas [frases para bio do Instagram](/blog/frases-para-bio-do-instagram), que servem para o recado.
`,
};
