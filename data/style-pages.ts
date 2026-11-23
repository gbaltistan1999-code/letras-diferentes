import { getStyle, STYLES } from "@/lib/fonts";
import type { StylePage } from "@/types";

/** Styled example text from the site's own generator (always matches the tool). */
const t = (styleId: string, text: string) => getStyle(styleId).transform(text);

/**
 * Content for the dedicated style / use-case pages. Each page targets its own
 * search intent (see docs/keyword-map.md) — avoid copying text between pages.
 *
 * Note: "nick para Free Fire" stays on /letras-para-free-fire; /gerador-de-nick
 * targets the generic "gerador de nick" (all games, categories) and links to it.
 */
export const stylePages: StylePage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "letras-cursivas",
    navLabel: "Letras cursivas",
    metaTitle: "Letras Cursivas para Copiar e Colar: Gerador de Letra Cursiva",
    absoluteTitle: true,
    metaDescription:
      "Gerador de letras cursivas para copiar e colar: cursiva fina, em negrito, itálico e com corações. Para nome, bio do Instagram, WhatsApp e Free Fire. Grátis.",
    h1: "Letras cursivas para copiar e colar",
    intro:
      "Digite seu texto e veja na hora em letra cursiva: fina e elegante, em negrito, itálica ou com enfeites como corações e molduras. As letras cursivas lembram a escrita à mão e deixam nomes, bios e mensagens mais delicados. Toque em Copiar e cole no Instagram, no WhatsApp, no TikTok ou no seu jogo.",
    generator: {
      styleIds: [
        "cursiva",
        "cursiva-negrito",
        "italico",
        "italico-sem-serifa",
        "negrito-italico",
        "negrito-italico-sem-serifa",
        "coracoes",
        "moldura-classica",
        "brilho-de-fada",
        "moldura-floral",
        "moldura-musical",
        "moldura-ondas",
        "flechas",
      ],
      sampleText: "Letras cursivas",
    },
    examples: [
      { styleId: "cursiva", text: "Bom dia, amor" },
      { styleId: "cursiva-negrito", text: "Ana Clara" },
      { styleId: "italico", text: "Gratidão sempre" },
      { styleId: "coracoes", text: "Feliz aniversário" },
    ],
    sections: [
      {
        heading: "O que são letras cursivas no gerador?",
        paragraphs: [
          "Aqui, “letra cursiva” é um conjunto de caracteres Unicode chamado Mathematical Script (escrita matemática cursiva). Ele foi criado para fórmulas, mas como cada letra tem um traço inclinado e arredondado, ficou popular para dar um ar manuscrito a nomes e frases.",
          "Diferente de uma fonte instalada no computador, esses caracteres viajam junto com o texto. Por isso, quando você cola em outro app, a aparência cursiva continua, desde que o aparelho de quem lê tenha símbolos para exibi-los.",
        ],
      },
      {
        heading: "Os tipos de letra cursiva",
        paragraphs: ["Cada estilo cursivo combina com um lugar diferente:"],
        list: [
          `**Cursiva fina** (${t("cursiva", "Cursiva")}): traço delicado e elegante. Fica linda em nomes e frases curtas.`,
          `**Cursiva em negrito** (${t("cursiva-negrito", "Cursiva")}): a mais legível em telas pequenas e em fundos escuros, como nos Stories. É a cursiva mais usada em bios.`,
          `**Itálico serifado** (${t("italico", "Cursiva")}): inclinado e clássico, discreto o bastante para destacar uma palavra no meio do texto.`,
          `**Itálico sem serifa** (${t("italico-sem-serifa", "Cursiva")}): inclinado e moderno, bom para legendas.`,
          `**Negrito itálico** (${t("negrito-italico", "Cursiva")}): inclinado e forte, para chamar atenção.`,
          `**Cursiva com enfeites** (${t("coracoes", "Cursiva")}): a cursiva com corações, molduras ou brilhos, para nomes e mensagens carinhosas.`,
        ],
        outro: [
          "Quer o alfabeto inteiro para copiar letra por letra? Veja o [alfabeto cursivo de A a Z](/alfabeto-de-letras-diferentes#alfabeto-cursivo).",
        ],
      },
      {
        heading: "Nomes em letra cursiva para copiar",
        paragraphs: ["Ideias de nomes em cursiva com um enfeite discreto, prontos para o perfil:"],
        copy: [
          `${t("cursiva-negrito", "Ana Clara")} ♡`,
          `✧ ${t("cursiva", "Helena")} ✧`,
          t("cursiva-negrito", "Gabriel"),
          `${t("cursiva-negrito", "Sofia")} 🌸`,
          `${t("cursiva", "Miguel")} ✦`,
          t("cursiva-negrito", "Valentina"),
          `☾ ${t("cursiva", "Luna")}`,
          `${t("cursiva-negrito", "Arthur")} ⚡`,
          `${t("cursiva", "Alice")} ❀`,
          t("cursiva-negrito", "Davi"),
          `${t("cursiva", "Laura")} ♡`,
          `${t("cursiva-negrito", "Theo")} ☁︎`,
        ].map((text) => ({ text })),
        outro: [
          "Para escrever o seu próprio nome, digite no gerador do topo da página. Mais ideias com símbolos estão no [nome personalizado](/nome-personalizado).",
        ],
      },
      {
        heading: "Frases em letra cursiva",
        paragraphs: ["Frases curtas que ficam ainda mais bonitas em cursiva, para bio, recado ou status:"],
        copy: [
          { text: `${t("cursiva-negrito", "Gratidão")} por tudo ✨`, label: "Bio" },
          { text: `${t("cursiva", "Bom dia, amor")} ☀️`, label: "Mensagem" },
          { text: `${t("cursiva-negrito", "Seja luz")} 💫`, label: "Bio" },
          { text: `${t("cursiva", "Um dia de cada vez")}`, label: "Recado" },
          { text: `🌷 ${t("cursiva-negrito", "Amor próprio sempre")}`, label: "Bio" },
          { text: `${t("italico", "Menos pressa, mais presença")}`, label: "Status" },
          { text: `${t("cursiva-negrito", "Feliz aniversário")} 🎂`, label: "Mensagem" },
          { text: `♡ ${t("cursiva", "Para sempre nós")} ♡`, label: "Casal" },
          { text: `${t("cursiva-negrito", "Deus no comando")} 🙏`, label: "Status" },
          { text: `${t("cursiva", "Vivendo o agora")} 🌿`, label: "Bio" },
        ],
        outro: [
          "Mais ideias nas [frases para bio do Instagram](/blog/frases-para-bio-do-instagram) e nas [frases para status do WhatsApp](/blog/frases-para-status-do-whatsapp).",
        ],
      },
      {
        heading: "Onde usar letras cursivas",
        list: [
          "**Instagram:** no nome do perfil, na bio, nas legendas e nos Stories. Só o @ não aceita. Veja o passo a passo em [letras para Instagram](/letras-para-instagram).",
          "**WhatsApp:** no nome, no recado, no status e nas mensagens. Veja as [letras para WhatsApp](/letras-para-whatsapp).",
          "**TikTok:** no nome, na bio e nas legendas. Veja as [letras para TikTok](/letras-para-tiktok).",
          "**Free Fire e jogos:** prefira a cursiva em negrito, que fica legível no tamanho pequeno do nick. Veja os [nomes para Free Fire feminino](/nomes-para-free-fire-feminino).",
          "**Discord:** no nome exibido e no apelido do servidor. Veja os [nomes para Discord](/nomes-para-discord).",
          "**Tatuagem:** use o gerador para ter uma ideia, mas compare fontes cursivas de verdade em [letras para tatuagem](/letras-para-tatuagem).",
        ],
      },
      {
        heading: "Letra cursiva ou itálico: qual a diferença?",
        paragraphs: [
          "A letra cursiva imita a escrita à mão: tem curvas, laços e traços arredondados. O itálico é a letra de forma comum, só que inclinada para a direita. No gerador, os dois aparecem lado a lado para você comparar.",
          "Um detalhe importante: na caligrafia de verdade, as letras cursivas se ligam umas às outras. No Unicode, cada letra é um caractere separado, então elas ficam bem próximas, mas não se tocam. Para uma escrita realmente ligada, como em convites impressos ou tatuagens, é preciso uma fonte cursiva instalada no programa de design.",
        ],
      },
      {
        heading: "Acentos e ç nas letras cursivas",
        paragraphs: [
          "O Unicode não tem versões cursivas de “ã”, “é” ou “ç”. Por padrão, o gerador deixa essas letras na forma normal e escreve o resto da palavra em cursiva, assim a acentuação aparece certa em qualquer aparelho. Se preferir a palavra inteira em cursiva, marque “Estilizar também as letras com acento”: o gerador usa a letra cursiva e encaixa o acento por cima, mas em algumas fontes (como as do Windows) ele pode aparecer ao lado da letra.",
        ],
      },
      {
        heading: "Dicas para a letra cursiva ficar bonita e legível",
        list: [
          "**Use em pouco texto:** a cursiva brilha em um nome ou numa frase curta. Um parágrafo inteiro em cursiva cansa a leitura.",
          "**Em tela pequena, prefira o negrito:** a cursiva fina pode sumir no celular. A cursiva em negrito é mais fácil de ler.",
          `**Comece com maiúscula:** as maiúsculas cursivas têm os desenhos mais bonitos, como ${t("cursiva-negrito", "A")}, ${t("cursiva-negrito", "B")} e ${t("cursiva-negrito", "M")}.`,
          "**Combine com texto normal:** o contraste entre a cursiva e as letras comuns deixa o destaque mais elegante.",
          "**Teste no modo escuro:** confira se o traço continua visível no tema escuro do app.",
        ],
      },
      {
        heading: "Onde a cursiva pode não funcionar?",
        paragraphs: [
          "Campos de usuário (o @ do Instagram, do TikTok ou do Discord, por exemplo) aceitam apenas letras comuns, números e alguns sinais, então as cursivas não são aceitas ali. Alguns jogos também recusam certos caracteres no nick, e aparelhos muito antigos podem mostrar quadradinhos no lugar de algumas letras. Entenda em [por que as letras diferentes viram quadradinhos](/blog/letras-diferentes-quadradinhos-unicode).",
        ],
      },
    ],
    faqs: [
      {
        question: "Como fazer letra cursiva no celular?",
        answer:
          "Abra esta página no navegador do celular, digite o texto, escolha o estilo cursivo e toque em Copiar. Depois é só colar no app que quiser. Não precisa instalar nenhum aplicativo ou teclado.",
      },
      {
        question: "Qual a letra cursiva mais bonita para nome?",
        answer:
          "Para nomes, a cursiva em negrito costuma ser a favorita, porque é bonita e fácil de ler no celular. A cursiva fina fica mais delicada, e a cursiva com corações ou molduras é ótima para perfis românticos.",
      },
      {
        question: "As letras cursivas funcionam no Instagram?",
        answer:
          "Sim. Funcionam no nome do perfil, na bio, nas legendas, nos comentários e nos Stories. Só o nome de usuário (o @) não aceita letras cursivas.",
      },
      {
        question: "As letras cursivas funcionam no WhatsApp?",
        answer:
          "Sim, na maioria dos celulares atuais. Você pode colar no nome, no recado, no status e nas mensagens. Se a outra pessoa usar um aparelho muito antigo, ela pode ver quadradinhos no lugar de algumas letras.",
      },
      {
        question: "Por que algumas letras cursivas parecem diferentes das outras?",
        answer:
          "Algumas letras (como B, E, H, e, g e o) vêm de um bloco Unicode diferente, criado antes do resto do alfabeto. O gerador já usa os caracteres corretos, mas certas fontes de sistema os desenham com um traço levemente diferente.",
      },
      {
        question: "Posso usar letra cursiva em trabalhos ou documentos?",
        answer:
          "Para documentos de texto, como Word ou Google Docs, é melhor usar uma fonte cursiva de verdade no próprio editor. Os caracteres deste gerador são símbolos e podem atrapalhar a busca, a correção ortográfica e a leitura por leitores de tela.",
      },
    ],
    related: ["nome-personalizado", "letras-bonitas", "letras-em-negrito", "alfabeto-de-letras-diferentes", "letras-para-instagram", "letras-goticas", "letras-para-tatuagem"],
    relatedPosts: ["frases-para-bio-do-instagram", "nomes-para-grupo-de-whatsapp"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-bonitas",
    navLabel: "Letras bonitas",
    metaTitle: "Letras Bonitas para Copiar e Colar: Molduras e Corações",
    absoluteTitle: true,
    metaDescription:
      "Letras bonitas para copiar e colar com corações, estrelas, molduras e coroas. Mais de 20 estilos para nome, bio do Instagram, WhatsApp e mensagens. Grátis.",
    h1: "Letras bonitas para copiar e colar",
    intro:
      "Aqui ficam as letras mais enfeitadas do site: com corações, estrelas, molduras ꧁ ꧂, coroas, flores e brilhos. Digite seu texto, escolha a combinação mais bonita e toque em Copiar para usar no nome, na bio, nas legendas e nas mensagens especiais.",
    generator: {
      styleIds: [
        "moldura-classica", "coracoes", "estrelas", "coroa", "brilho-de-fada", "moldura-floral",
        "japones", "flechas", "moldura-estrelas", "moldura-ondas", "moldura-musical", "moldura-pontos",
        "kaomoji-abraco", "coracoes-entre-letras", "estrelinhas-entre-letras", "colchetes-japoneses-letras",
        "largura-total-colchetes", "cursiva-negrito", "versalete", "bolhas", "estilo-grego",
      ],
      sampleText: "Letras bonitas",
    },
    examples: [
      { styleId: "coracoes", text: "Te amo" },
      { styleId: "estrelas", text: "Brilhe sempre" },
      { styleId: "japones", text: "Bom dia" },
      { styleId: "moldura-classica", text: "Meu mundo" },
      { styleId: "estilo-grego", text: "Good vibes" },
      { styleId: "bolhas", text: "Fofura" },
    ],
    sections: [
      {
        heading: "O que deixa uma letra “bonita” aqui?",
        paragraphs: [
          "Nesta página reunimos combinações que unem um alfabeto estilizado a pequenos enfeites, como ♡, ★, ꧁ ꧂ ou 『 』. O efeito é mais decorativo do que no gerador principal, que mostra todos os estilos sem enfeites.",
          "Como tudo é feito com caracteres Unicode, o texto continua sendo texto: dá para colar em praticamente qualquer campo que aceite símbolos.",
        ],
      },
      {
        heading: "Tipos de letras bonitas",
        list: [
          `**Com corações** (${t("coracoes", "Amor")}): para mensagens carinhosas, casais e perfis românticos.`,
          `**Com estrelas** (${t("estrelas", "Brilho")}): alegres e chamativas, ótimas para nomes e nicks.`,
          `**Com molduras** (${t("moldura-classica", "Lenda")}): o clássico ꧁ ꧂ deixa qualquer nome com cara de destaque.`,
          `**Com coroa** (${t("coroa", "Rei")}): para quem quer um nome imponente.`,
          `**Delicadas** (${t("brilho-de-fada", "Sonho")}): brilhos e flores para um visual aesthetic.`,
          `**Fofas** (${t("bolhas", "Fofura")}): letras em bolhas e carinhas para perfis divertidos.`,
        ],
      },
      {
        heading: "Letras bonitas para nome",
        paragraphs: ["Nomes já enfeitados, prontos para o perfil, o WhatsApp ou o jogo:"],
        copy: [
          t("moldura-classica", "Julia"),
          t("coracoes", "Pedro"),
          t("estrelas", "Bia"),
          t("coroa", "Lucas"),
          t("brilho-de-fada", "Manu"),
          t("moldura-floral", "Clara"),
          t("japones", "Rafa"),
          `✿ ${t("cursiva-negrito", "Helena")} ✿`,
          `⋆˙⟡ ${t("versalete", "Gabi")} ⟡˙⋆`,
          t("estrelinhas-entre-letras", "Leo"),
        ].map((text) => ({ text })),
        outro: ["Quer o seu nome assim? Digite no gerador do topo da página ou veja mais ideias no [nome personalizado](/nome-personalizado)."],
      },
      {
        heading: "Frases bonitas para copiar",
        copy: [
          { text: t("coracoes", "Te amo"), label: "Amor" },
          { text: `☀️ ${t("cursiva-negrito", "Bom dia")} ☀️`, label: "Bom dia" },
          { text: t("estrelas", "Brilhe sempre"), label: "Bio" },
          { text: `${t("moldura-floral", "Gratidão")}`, label: "Status" },
          { text: `♡ ${t("versalete", "Você é especial")} ♡`, label: "Mensagem" },
          { text: t("brilho-de-fada", "Seja luz"), label: "Bio" },
          { text: `🌙 ${t("cursiva", "Boa noite")} ✨`, label: "Boa noite" },
          { text: t("moldura-musical", "Good vibes"), label: "Legenda" },
          { text: `${t("coracoes-entre-letras", "Amor")}`, label: "Casal" },
          { text: t("kaomoji-abraco", "Abraço"), label: "Mensagem" },
        ],
      },
      {
        heading: "Letras bonitas para datas especiais",
        paragraphs: ["Para aniversários, datas comemorativas e mensagens que pedem um capricho a mais:"],
        copy: [
          { text: `🎂 ${t("cursiva-negrito", "Feliz aniversário")} 🎉`, label: "Aniversário" },
          { text: t("coracoes", "Feliz Dia dos Namorados"), label: "Namorados" },
          { text: `💐 ${t("cursiva", "Feliz Dia das Mães")} 💐`, label: "Dia das Mães" },
          { text: `👔 ${t("negrito-sem-serifa", "Feliz Dia dos Pais")} 💙`, label: "Dia dos Pais" },
          { text: `🎄 ${t("cursiva-negrito", "Feliz Natal")} 🎄`, label: "Natal" },
          { text: `🎆 ${t("moldura-estrelas", "Feliz Ano Novo")}`, label: "Ano Novo" },
        ],
        outro: ["Para o fim de ano, veja também as [frases de Natal e Ano Novo](/blog/frases-de-natal-e-ano-novo)."],
      },
      {
        heading: "Onde usar letras bonitas",
        list: [
          "**Bio do Instagram:** na primeira linha, com o seu nome ou uma frase curta. Veja as [letras para Instagram](/letras-para-instagram).",
          "**Títulos dos destaques:** nomes curtos como 『Viagens』 ou ♡ Família ♡ deixam o perfil organizado e bonito.",
          "**WhatsApp:** no nome, no recado, no status e no nome do grupo. Veja as [letras para WhatsApp](/letras-para-whatsapp) e os [nomes para grupo de WhatsApp](/blog/nomes-para-grupo-de-whatsapp).",
          "**Mensagens especiais:** aniversário, bom dia, Dia dos Namorados e outras datas.",
          "**Legendas e posts:** um título enfeitado no começo da legenda chama atenção no feed.",
          "**Nicks e servidores:** em jogos e no Discord, as molduras e estrelas são as preferidas. Veja os [nomes para Discord](/nomes-para-discord).",
        ],
      },
      {
        heading: "Monte a sua própria combinação",
        steps: [
          "Escolha um estilo de letra no gerador, como a cursiva em negrito ou o versalete.",
          "Copie um par de símbolos da lista abaixo.",
          "Cole um símbolo antes e o outro depois do texto.",
        ],
        copy: [
          { text: "♡ ♡", label: "Corações" },
          { text: "✧ ✧", label: "Brilhos" },
          { text: "꧁ ꧂", label: "Moldura clássica" },
          { text: "『 』", label: "Colchetes japoneses" },
          { text: "⋆˙⟡ ⟡˙⋆", label: "Aesthetic" },
          { text: "✿ ✿", label: "Flores" },
          { text: "☾ ☽", label: "Luas" },
          { text: "★彡 彡★", label: "Estrelas" },
        ],
        outro: ["Encontre centenas de outros na página de [símbolos para copiar](/simbolos)."],
      },
      {
        heading: "Como deixar o resultado mais legível?",
        steps: [
          "Use o estilo decorado em poucas palavras: o nome ou uma frase curta.",
          "Mantenha o resto do texto em letras normais para facilitar a leitura.",
          "Prefira as versões em negrito em fundos escuros ou imagens.",
          "Confira como ficou no celular de outra pessoa antes de usar em algo importante.",
        ],
      },
      {
        heading: "Cuidados com acessibilidade",
        paragraphs: [
          "Leitores de tela, usados por pessoas cegas ou com baixa visão, podem ler letras estilizadas como “letra matemática A” ou simplesmente pular os caracteres. Se a mensagem for importante, coloque a informação principal também em texto comum.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quais são as letras mais bonitas para o Instagram?",
        answer:
          "As mais usadas são a cursiva em negrito, as letras com corações e as molduras como ꧁ ꧂ e 『 』. Elas ficam bonitas e continuam fáceis de ler no celular. Use na primeira linha da bio ou no nome do perfil.",
      },
      {
        question: "Como colocar letras bonitas no nome do WhatsApp?",
        answer:
          "Copie o estilo nesta página, abra o WhatsApp, vá em Configurações, toque no seu nome e cole. As letras bonitas também funcionam no recado, no status e no nome dos grupos.",
      },
      {
        question: "As letras bonitas funcionam no Free Fire?",
        answer:
          "Muitas sim, mas o nick tem limite de caracteres e os enfeites contam no total. Molduras grandes podem não caber. Para nicks, prefira um símbolo de cada lado e um nome curto.",
      },
      {
        question: "Qual a diferença entre esta página e o gerador da página inicial?",
        answer:
          "A página inicial mostra todos os estilos disponíveis. Aqui ficam só as combinações decorativas, com molduras, corações e estrelas, para quem quer um resultado mais enfeitado sem procurar entre dezenas de opções.",
      },
      {
        question: "Os enfeites como ꧁ ꧂ aparecem em todos os celulares?",
        answer:
          "Na maioria dos aparelhos atuais, sim. Alguns símbolos menos comuns, como ꧁ ꧂, vêm do alfabeto javanês e podem não aparecer em sistemas antigos, que mostram um quadradinho no lugar.",
      },
      {
        question: "Posso tirar os enfeites e ficar só com as letras?",
        answer:
          "Sim. Depois de colar, apague os símbolos que não quiser. Ou volte à página inicial e escolha um estilo sem enfeites, como a cursiva ou o negrito.",
      },
    ],
    related: ["nome-personalizado", "simbolos", "letras-cursivas", "letras-para-instagram", "letras-para-whatsapp", "fontes-de-letras-estilosas", "letras-em-negrito"],
    relatedPosts: ["frases-de-natal-e-ano-novo", "nomes-para-grupo-de-whatsapp"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "nome-personalizado",
    navLabel: "Nome personalizado",
    metaTitle: "Nome Personalizado: Crie o Seu com Letras Diferentes",
    absoluteTitle: true,
    metaDescription:
      "Crie seu nome personalizado com letras diferentes e símbolos em segundos. Veja +60 ideias prontas para copiar no Instagram, WhatsApp e Free Fire.",
    h1: "Nome personalizado: crie o seu com letras diferentes",
    intro:
      "Um nome personalizado é a forma mais rápida de deixar seu perfil com a sua cara. Digite seu nome abaixo e veja na hora em dezenas de estilos, como cursiva, gótica, contorno e com símbolos. Toque em Copiar e cole no Instagram, WhatsApp, TikTok ou Free Fire. Mais abaixo você encontra mais de 60 ideias prontas.",
    generator: {
      sampleText: "Seu Nome",
      categoryOrder: ["decorativas", "cursivas", "goticas", "negrito"],
      showFilter: true,
      showRandom: true,
    },
    examples: [],
    sections: [
      {
        heading: "O que é um nome personalizado?",
        paragraphs: [
          `Nome personalizado é o seu nome (ou apelido) escrito com letras diferentes, símbolos e emojis, para ficar único. Em vez de escrever "Ana" com letras comuns, você pode usar ${t("cursiva-negrito", "Ana")}, ${t("gotica-negrito", "Ana")} ou ✧ ${t("contorno", "Ana")} ✧. É o mesmo nome, mas chama muito mais atenção. Ele é muito usado em:`,
        ],
        list: [
          "nome de exibição do Instagram e do TikTok;",
          "nome e recado do WhatsApp;",
          "nick de jogos como Free Fire, Roblox e Minecraft;",
          "legendas, bios e convites.",
        ],
        outro: [
          "Essas letras não são imagens: são caracteres especiais do Unicode. Por isso dá para copiar e colar em praticamente qualquer aplicativo, sem baixar nada.",
        ],
      },
      {
        heading: "Como criar seu nome personalizado em 3 passos",
        steps: [
          "Digite seu nome no gerador no topo desta página.",
          "Escolha o estilo que combina com você: cursiva, gótica, negrito, contorno e outros. Em **Estilos aleatórios** aparecem combinações prontas com símbolos e emojis.",
          "Toque em Copiar e cole no aplicativo. Se quiser, adicione símbolos antes e depois do nome (veja a lista abaixo).",
        ],
        outro: [
          "Dica: teste o nome no seu celular antes de salvar. Se aparecerem quadradinhos, troque de estilo. Entenda o motivo em [Por que as letras diferentes viram quadradinhos?](/blog/letras-diferentes-quadradinhos-unicode)",
        ],
      },
      {
        heading: "O mesmo nome em vários estilos",
        paragraphs: ["Veja como um nome simples muda de personalidade só trocando o estilo:"],
        copy: [
          { text: t("cursiva", "Ana"), label: "Cursiva: perfis delicados e românticos" },
          { text: t("cursiva-negrito", "Ana"), label: "Cursiva negrito: Instagram e TikTok" },
          { text: t("gotica-negrito", "Ana"), label: "Gótica: estilo dark, rock e jogos" },
          { text: t("contorno", "Ana"), label: "Contorno: visual moderno e limpo" },
          { text: t("negrito", "Ana"), label: "Negrito: destaque forte" },
          { text: t("negrito-sem-serifa", "Ana"), label: "Sans negrito: perfis profissionais" },
          { text: t("versalete", "Ana"), label: "Versalete: nicks minimalistas" },
        ],
        outro: [
          "Quer ver mais estilos? Confira as [fontes de letras estilosas](/fontes-de-letras-estilosas), as [letras cursivas](/letras-cursivas) e as [letras góticas](/letras-goticas).",
        ],
      },
      {
        heading: "Ideias de nome personalizado feminino",
        copy: [
          "✧ 𝓐𝓷𝓪 ✧",
          "♡ ℬ𝒾𝒶 ♡",
          "𝓙𝓾𝓵𝓲𝓪 🌸",
          "☁︎ 𝕃𝕒𝕣𝕒 ☁︎",
          "𝑴𝒂𝒓𝒊𝒂 ❀",
          "⋆˙⟡ 𝒮ℴ𝒻𝒾𝒶 ⟡˙⋆",
          "𝗗𝘂𝗱𝗮 ✦",
          "🦋 𝓙𝓾𝓵𝓲𝓪𝓷𝓪",
          "꧁ 𝒜𝓃𝒶 ꧂",
          "❁ ᴀɴᴀ ❁",
          t("brilho-de-fada", "Luiza"),
          t("coracoes", "Bela"),
          t("moldura-floral", "Alice"),
          `✿ ${t("cursiva-negrito", "Helena")}`,
          t("estrelinhas-entre-letras", "Clara"),
        ].map((text) => ({ text })),
      },
      {
        heading: "Ideias de nome personalizado masculino",
        copy: [
          "『𝕷𝖚𝖈𝖆𝖘』",
          "𝐏𝐞𝐝𝐫𝐨 ⚡",
          "⚔ 𝔾𝕒𝕓𝕣𝕚𝕖𝕝 ⚔",
          "☠ 𝕽𝖆𝖋𝖆 ☠",
          "𝗗𝗮𝘃𝗶 ★",
          "✠ 𝔗𝔥𝔢𝔬 ✠",
          "𝐄𝐧𝐳𝐨 ™",
          "✦ ʟᴜᴄᴀs ✦",
          "【𝔾𝕒𝕓𝕣𝕚𝕖𝕝】",
          "♔ 𝕽𝖆𝖋𝖆 ♔",
          t("coroa", "Arthur"),
          `${t("gotica-negrito", "Miguel")} ⚔`,
          `${t("negrito-italico", "Bernardo")} ★`,
          `${t("contorno", "Heitor")} ⚡`,
          t("estilo-faux", "Lorenzo"),
        ].map((text) => ({ text })),
      },
      {
        heading: "Nome personalizado para Free Fire e jogos",
        paragraphs: [
          'Nos jogos, o nome personalizado ajuda a ser reconhecido no squad. Os estilos mais usados são gótica, versalete e símbolos de "clã":',
        ],
        copy: [
          "彡𝕷𝖚𝖈𝖆𝖘彡",
          "☠︎ 𝕽𝖆𝖋𝖆 ☠︎",
          "꧁𝔗𝔥𝔢𝔬꧂",
          "★彡ᴀɴᴀ彡★",
          "乄𝐏𝐞𝐝𝐫𝐨乄",
          t("moldura-classica", "Kaiser"),
          t("simbolo-oriental", "Vandal"),
          t("estrelas", "Ghost"),
          t("japones", "Nox"),
          t("estilo-oriental", "Ryu"),
        ].map((text) => ({ text })),
        outro: [
          "Atenção: o Free Fire tem limite de caracteres, e algumas letras especiais contam como mais de um. Se o nome não couber, use um apelido curto. Para mais ideias, veja as [letras para Free Fire](/letras-para-free-fire) e os [40 nomes para Free Fire](/blog/nomes-para-free-fire).",
        ],
      },
      {
        heading: "Nomes curtos e apelidos",
        paragraphs: ["Apelidos curtos funcionam bem em qualquer lugar e quase nunca passam do limite de caracteres:"],
        copy: [
          t("bolhas", "Lu"),
          t("quadrados", "Gabi"),
          t("sobrescrito", "Nina"),
          `${t("cursiva", "Duda")} ♡`,
          `${t("negrito", "Léo")} ✦`,
          t("contorno", "Malu"),
          t("monoespacada", "Kai"),
          t("largura-total", "Rafa"),
          `${t("versalete", "Bia")} ☾`,
          `${t("negrito-italico-sem-serifa", "Gui")} ⚡`,
        ].map((text) => ({ text })),
      },
      {
        heading: "Nome personalizado para WhatsApp",
        paragraphs: [
          "No WhatsApp, o nome aparece para quem não salvou seu contato e nos grupos. Molduras e símbolos delicados ficam ótimos:",
        ],
        copy: [
          t("moldura-ondas", "Fernanda"),
          t("moldura-musical", "Isa"),
          t("moldura-estrelas", "Mari"),
          t("moldura-pontos", "Carla"),
          t("moldura-flechas", "Paulo"),
          t("moldura-blocos", "Rick"),
          t("kaomoji-abraco", "Vivi"),
          t("coracoes-entre-letras", "Lia"),
          t("coroa", "Rainha"),
          t("brilho-de-fada", "Vitória"),
        ].map((text) => ({ text })),
        outro: [
          "Para o nome do grupo, veja os [nomes para grupo de WhatsApp](/blog/nomes-para-grupo-de-whatsapp).",
        ],
      },
      {
        heading: "Símbolos para deixar seu nome mais bonito",
        paragraphs: ["Copie e coloque antes e depois do seu nome:"],
        copy: [
          { text: "★ ☆ ✦ ✧ ⋆ ✮ ✩", label: "Estrelas" },
          { text: "♡ ♥ ❤ ❣ ❥ ღ", label: "Corações" },
          { text: "❀ ✿ ❁ ⚘ 🌸", label: "Flores" },
          { text: "『 』 【 】 「 」 ꧁ ꧂", label: "Molduras" },
          { text: "彡 乄 ☠ ⚔ ♔ ⚡ ✠", label: "Gamer" },
          { text: "☁︎ ☾ ˚ • ∙ ⋆˙⟡", label: "Delicados" },
        ],
        outro: ["Quer mais? Veja a lista completa de [símbolos para copiar e colar](/simbolos)."],
      },
      {
        heading: "Dicas para o seu nome personalizado",
        steps: [
          "**Menos é mais.** Um estilo + um ou dois símbolos costuma ficar mais bonito do que misturar tudo.",
          "**Cuidado com os acentos.** Por padrão, letras como é, ã e ç ficam normais no meio do nome. No gerador dá para marcar a opção de estilizar também os acentos, mas em alguns aparelhos o acento aparece ao lado da letra. Se quiser um visual uniforme, escreva sem acento.",
          "**Mantenha o @ simples.** No Instagram e no TikTok, use o nome personalizado no nome de exibição e deixe o @usuário com letras comuns, para as pessoas conseguirem te encontrar na busca.",
          "**Combine com a bio.** Use o mesmo estilo na bio para o perfil ficar harmonioso. Veja as [letras para Instagram](/letras-para-instagram) e as [frases para bio do Instagram](/blog/frases-para-bio-do-instagram).",
        ],
      },
    ],
    faqs: [
      {
        question: "Como fazer um nome personalizado de graça?",
        answer:
          "Digite seu nome no gerador desta página, escolha um estilo e toque em Copiar. É gratuito e não precisa instalar aplicativo.",
      },
      {
        question: "Nome personalizado funciona no WhatsApp?",
        answer: "Sim. Você pode usar no seu nome, no recado e nas mensagens.",
      },
      {
        question: "Posso usar nome personalizado no Instagram?",
        answer:
          "Sim, no nome de exibição e na bio. O @usuário só aceita letras, números, ponto e underline.",
      },
      {
        question: "Por que meu nome personalizado aparece com quadradinhos?",
        answer:
          "O celular de quem vê não tem aquele caractere. Use estilos mais comuns, como cursiva negrito ou negrito, que funcionam em quase todos os aparelhos.",
      },
    ],
    related: ["gerador-de-nick", "nome-invisivel", "letras-cursivas", "letras-bonitas", "fontes-de-letras-estilosas", "letras-para-instagram", "letras-para-free-fire", "simbolos"],
    relatedPosts: ["nomes-para-grupo-de-whatsapp", "nomes-para-free-fire"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "fontes-de-letras-estilosas",
    navLabel: "Fontes estilosas",
    metaTitle: "Fontes de Letras Estilosas para Copiar e Colar (Grátis)",
    absoluteTitle: true,
    metaDescription:
      "Fontes de letras estilosas para Instagram, WhatsApp, Free Fire e TikTok. Digite seu texto, escolha o estilo e copie grátis, sem cadastro.",
    h1: "Fontes de Letras Estilosas – Copie e Cole",
    intro:
      "Quer deixar seu perfil com mais personalidade? Aqui você encontra fontes de letras estilosas para usar no Instagram, WhatsApp, TikTok e Free Fire. Digite seu texto, veja dezenas de estilos na hora e toque em Copiar. Funciona no celular e no computador, é grátis e não precisa baixar nada.",
    generator: {
      sampleText: "Fontes Estilosas",
      categoryOrder: ["cursivas", "goticas", "decorativas", "glitch"],
      showFilter: true,
      showRandom: true,
    },
    examples: [],
    sections: [
      {
        heading: "O que são fontes de letras estilosas?",
        paragraphs: [
          "Fontes de letras estilosas são versões decoradas das letras comuns: cursivas, góticas, em negrito, com bolhas, riscadas e muito mais. Elas não são fontes instaladas no aparelho. São caracteres especiais do padrão Unicode, que já existem em quase todos os celulares e computadores. Por isso, você copia de um lugar e cola em outro, e o estilo continua lá.",
          `Com elas, um simples “Estilosa” vira ${t("cursiva-negrito", "Estilosa")}, ${t("gotica", "Estilosa")} ou ${t("bolhas", "Estilosa")}.`,
        ],
      },
      {
        heading: "Fontes estilosas mais usadas",
        paragraphs: ["Veja os estilos favoritos com a palavra “Estilosa” como exemplo:"],
        copy: [
          { label: "Cursiva — elegante, ótima para bio e nome", text: t("cursiva-negrito", "Estilosa") },
          { label: "Gótica — forte e marcante", text: t("gotica", "Estilosa") },
          { label: "Gótica negrito — ainda mais impacto", text: t("gotica-negrito", "Estilosa") },
          { label: "Negrito — destaque sem exagero", text: t("negrito", "Estilosa") },
          { label: "Itálico — leve e moderno", text: t("italico-sem-serifa", "Estilosa") },
          { label: "Contorno — visual de letreiro", text: t("contorno", "Estilosa") },
          { label: "Letras pequenas — minimalista", text: t("versalete", "Estilosa") },
          { label: "Bolhas — divertido", text: t("bolhas", "Estilosa") },
          { label: "Quadrados — chama atenção", text: t("quadrados-pretos", "Estilosa") },
          { label: "Sobrescrito — discreto, ótimo para detalhes", text: t("sobrescrito", "Estilosa") },
          { label: "Riscada — efeito criativo", text: t("riscado", "Estilosa") },
        ],
        outro: [
          "Quer ver mais? Explore as [Letras cursivas](/letras-cursivas) e as [Letras góticas](/letras-goticas).",
        ],
      },
      {
        heading: "Letras estilosas para Instagram",
        paragraphs: [
          "No Instagram, as letras estilosas ficam ótimas no campo Nome, na bio, nas legendas e nos títulos dos destaques. Uma dica: use o estilo em uma ou duas palavras e deixe o resto em letra normal. Assim o perfil fica bonito e continua fácil de ler.",
        ],
        copy: [{ label: "Exemplo de bio", text: `${t("cursiva-negrito", "Ana Carolina")} ✿ | Fotografia | SP` }],
        outro: [
          "Lembre-se: o nome de usuário (@) só aceita letras comuns, números, ponto e sublinhado. Mais ideias em [Letras para Instagram](/letras-para-instagram).",
        ],
      },
      {
        heading: "Letras estilosas para WhatsApp",
        paragraphs: [
          "No WhatsApp, você pode colar letras estilosas no nome do perfil, no recado, no nome dos grupos e nas mensagens. Fica ótimo para destacar avisos no grupo ou deixar o nome do grupo da família mais divertido.",
        ],
        copy: [{ label: "Exemplo de nome de grupo", text: `☀ ${t("negrito", "Família Silva")} ☀` }],
      },
      {
        heading: "Letras estilosas para Free Fire",
        paragraphs: [
          `No Free Fire, uma fonte estilosa deixa seu nick e o nome da guilda com cara de profissional. Estilos que costumam funcionar bem: letras pequenas (${t("versalete", "pro")}), quadrados (${t("quadrados-pretos", "pro")}) e cursivas com símbolos (꧁${t("cursiva-negrito", "Rei")}꧂).`,
          "O nick tem limite de caracteres e nem todo símbolo aparece no jogo, então teste antes de trocar. Veja mais em [Letras para Free Fire](/letras-para-free-fire) e nas nossas [ideias de nomes para Free Fire](/blog/nomes-para-free-fire).",
        ],
      },
      {
        heading: "Como colocar letras estilosas na bio?",
        steps: [
          "Digite seu nome ou a frase da bio no gerador acima.",
          "Escolha a fonte estilosa que mais combina com você.",
          "Toque em Copiar.",
          "Abra o app, vá em Editar perfil e cole no campo de nome ou bio.",
          "Salve e confira como ficou.",
        ],
      },
      {
        heading: "Frases estilosas prontas para copiar",
        copy: [
          { text: `✨ ${t("cursiva-negrito", "Bem-vindos")} ✨` },
          { text: `꧁ ${t("cursiva-negrito", "Amor")} ꧂` },
          { text: `☾ ${t("gotica", "Boa noite")} ☽` },
          { text: `★ ${t("negrito", "Siga-me")} ★` },
          { text: `♡ ${t("italico-sem-serifa", "Feliz")} ♡` },
          { text: t("versalete", "Vida louca") },
          { text: t("quadrados-pretos", "Gamer") },
          { text: `✦ ${t("contorno", "Estilosa")} ✦` },
        ],
        outro: ["Para enfeitar ainda mais, combine com os [Símbolos para copiar](/simbolos)."],
      },
      {
        heading: "Antes de usar: limites das letras estilosas",
        list: [
          "**Acentos:** o Unicode não tem versões estilizadas de letras com acento (á, ã, ç). Por isso, no gerador, as letras acentuadas ficam na forma normal por padrão e aparecem certas em qualquer aparelho. Se preferir, ative a opção para estilizá-las também.",
          "**Quadrados (□):** se aparecer um quadrado, o aparelho de quem está vendo não tem aquele caractere. Prefira estilos populares como negrito, cursiva e letras pequenas. Entenda [por que isso acontece](/blog/letras-diferentes-quadradinhos-unicode).",
          "**Acessibilidade:** leitores de tela podem ler letras estilosas de forma estranha. Use com moderação, principalmente em informações importantes.",
        ],
      },
      {
        heading: "Deixe seu texto mais estiloso agora",
        paragraphs: [
          `Volte ao gerador no topo da página, digite o que quiser e escolha sua fonte estilosa favorita. Quer ver todos os ${STYLES.length} estilos organizados de outro jeito? Acesse nosso gerador completo de [fontes de letras](/).`,
        ],
      },
    ],
    faqs: [
      {
        question: "As fontes de letras estilosas são grátis?",
        answer: "Sim. Você pode gerar e copiar quantas quiser, sem cadastro e sem baixar aplicativo.",
      },
      {
        question: "As letras estilosas funcionam no Instagram e no WhatsApp?",
        answer:
          "Sim. Funcionam no nome, na bio, nas legendas, nos recados e nas mensagens. Só não funcionam no nome de usuário (@).",
      },
      {
        question: "Por que algumas letras aparecem como quadrados?",
        answer:
          "Isso acontece quando o celular ou o app não tem aquele caractere. Escolha outro estilo, de preferência um mais comum.",
      },
      {
        question: "Posso baixar essas fontes para usar no Word ou no Canva?",
        answer:
          "Não é preciso baixar. Estas não são arquivos de fonte para instalar, e sim letras Unicode para copiar e colar. Você pode colar o texto direto no Word ou no Canva, mas, para designs mais elaborados, o ideal é usar as fontes próprias desses programas.",
      },
      {
        question: "Vocês salvam o texto que eu digito?",
        answer: "Não. A conversão acontece no seu navegador, e o texto não é enviado nem guardado.",
      },
    ],
    related: ["nome-personalizado", "letras-cursivas", "letras-goticas", "letras-para-instagram", "letras-para-free-fire", "simbolos"],
    relatedPosts: ["frases-para-bio-do-instagram", "nomes-para-free-fire"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-em-negrito",
    navLabel: "Letras em negrito",
    metaTitle: "Letras em Negrito para Copiar e Colar: Gerador de Negrito",
    absoluteTitle: true,
    metaDescription:
      "Gerador de letras em negrito para copiar e colar: negrito com e sem serifa, itálico, cursivo e gótico. Funciona no Instagram, WhatsApp, TikTok e Free Fire.",
    h1: "Letras em negrito para copiar e colar",
    intro:
      "Digite seu texto e copie em letras em negrito para usar onde o app não tem botão de negrito: bio e legendas do Instagram, TikTok, nick de jogo, comentários e posts. São 6 tipos de negrito, do mais discreto ao mais marcante, e todos funcionam com copiar e colar.",
    generator: {
      styleIds: [
        "negrito-sem-serifa",
        "negrito",
        "negrito-italico-sem-serifa",
        "negrito-italico",
        "cursiva-negrito",
        "gotica-negrito",
        "japones",
        "moldura-estrelas",
        "moldura-blocos",
        "bolhas-pretas",
        "quadrados-pretos",
      ],
      sampleText: "Letras em negrito",
    },
    examples: [
      { styleId: "negrito-sem-serifa", text: "Novidade na loja" },
      { styleId: "negrito", text: "Bom dia" },
      { styleId: "negrito-italico-sem-serifa", text: "Leia antes de comprar" },
      { styleId: "cursiva-negrito", text: "Gratidão" },
      { styleId: "gotica-negrito", text: "Lenda" },
    ],
    sections: [
      {
        heading: "Os 6 tipos de letras em negrito",
        paragraphs: [
          "Todo negrito deixa a letra mais grossa, mas cada tipo passa uma impressão diferente. Escolha pelo lugar onde o texto vai aparecer:",
        ],
        list: [
          `**Negrito sem serifa** (${t("negrito-sem-serifa", "Destaque")}): o mais limpo e legível. É o negrito mais usado em bios, legendas e posts profissionais.`,
          `**Negrito com serifa** (${t("negrito", "Destaque")}): lembra jornal e livro. Fica elegante em títulos e frases curtas.`,
          `**Negrito itálico sem serifa** (${t("negrito-italico-sem-serifa", "Destaque")}): inclinado e moderno, bom para chamar atenção para uma palavra.`,
          `**Negrito itálico com serifa** (${t("negrito-italico", "Destaque")}): inclinado e clássico, ótimo para citações.`,
          `**Cursiva em negrito** (${t("cursiva-negrito", "Destaque")}): parece escrita à mão, mas com traço forte. A cursiva mais fácil de ler em telas pequenas.`,
          `**Gótica em negrito** (${t("gotica-negrito", "Destaque")}): estilo medieval pesado, muito usado em nicks de jogos.`,
        ],
        outro: [
          `Só o negrito com e sem serifa têm números em negrito (${t("negrito-sem-serifa", "2026")}). Nos outros estilos, os números ficam normais.`,
        ],
      },
      {
        heading: "Como escrever em negrito para copiar e colar",
        steps: [
          "Digite seu texto na caixa do topo da página.",
          "Veja o resultado em todos os tipos de negrito, atualizado na hora.",
          "Toque em **Copiar** no estilo que preferir.",
          "Cole no Instagram, no WhatsApp, no jogo ou onde quiser.",
        ],
        outro: [
          "Dica: use o negrito só nas palavras que importam, como o título de um post, o nome de um produto ou uma chamada. Um parágrafo inteiro em negrito fica cansativo e ninguém sabe o que é mais importante.",
        ],
      },
      {
        heading: "Onde as letras em negrito funcionam",
        list: [
          "**Instagram:** bio, nome do perfil, legendas, comentários e Stories. Só o nome de usuário (o @) não aceita. Veja mais em [letras para Instagram](/letras-para-instagram).",
          "**WhatsApp:** em mensagens, nome, recado e status. Nas mensagens, o app também tem o negrito próprio, com *asteriscos*. Veja o guia de [como mudar a fonte do WhatsApp](/blog/como-mudar-a-fonte-do-whatsapp).",
          "**TikTok:** nome, bio, legendas e comentários. Veja as [letras para TikTok](/letras-para-tiktok).",
          "**Facebook e LinkedIn:** em posts e comentários, onde não existe botão de negrito. É um jeito comum de destacar títulos em posts profissionais.",
          "**X (Twitter), Threads e Telegram:** em posts, bio e nome.",
          "**Free Fire e outros jogos:** muitos jogos aceitam negrito no nick, mas cada letra pode contar como mais de um caractere. Veja os [nomes para Free Fire masculino](/nomes-para-free-fire-masculino) e [feminino](/nomes-para-free-fire-feminino).",
          "**Discord:** no nome exibido e no apelido do servidor. Nas mensagens, o Discord tem o negrito próprio, com dois asteriscos de cada lado. Veja os [nomes para Discord](/nomes-para-discord).",
        ],
      },
      {
        heading: "Negrito do gerador ou negrito do próprio app?",
        paragraphs: [
          "Alguns apps têm o seu próprio negrito: no WhatsApp você escreve *texto* e, no Discord, coloca dois asteriscos de cada lado. Esse negrito só funciona dentro daquele app. Se você copiar a mensagem e colar no Instagram, os asteriscos aparecem e o negrito some.",
          "As letras em negrito deste gerador são diferentes: cada letra já é um caractere Unicode em negrito. Por isso o negrito vai junto quando você copia e cola, em qualquer app, e funciona até em campos que não têm formatação, como a bio e o nome do perfil.",
        ],
      },
      {
        heading: "Frases em negrito para copiar",
        paragraphs: ["Prontas para usar em bios, posts e mensagens:"],
        copy: [
          { text: `✨ ${t("negrito-sem-serifa", "Bom dia")} ✨`, label: "Mensagem" },
          { text: `${t("negrito-sem-serifa", "NOVIDADE")} na loja 🛍️ Confira no link!`, label: "Loja" },
          { text: `📢 ${t("negrito-sem-serifa", "Aviso")}: reunião às 15h`, label: "Grupo" },
          { text: `${t("negrito", "Foco")} · ${t("negrito", "Força")} · ${t("negrito", "Fé")}`, label: "Bio" },
          { text: `${t("negrito-sem-serifa", "Estou contratando!")} 🚀`, label: "LinkedIn" },
          { text: `${t("negrito-italico-sem-serifa", "Leia até o final")} 👇`, label: "Legenda" },
          { text: `${t("cursiva-negrito", "Gratidão")} por mais um dia 🙏`, label: "Status" },
          { text: `🔥 ${t("negrito-sem-serifa", "PROMOÇÃO")} só hoje`, label: "Loja" },
          { text: `${t("gotica-negrito", "Modo lenda")} ⚔️`, label: "Nick" },
          { text: `📍 ${t("negrito-sem-serifa", "Rio de Janeiro")} | ${t("negrito-sem-serifa", "Brasil")}`, label: "Bio" },
        ],
      },
      {
        heading: "Cuidados ao usar letras em negrito",
        list: [
          "**Acentos:** o Unicode não tem letras acentuadas em negrito, então “ã”, “é” e “ç” ficam na forma normal no meio da palavra. Para um visual uniforme, prefira palavras sem acento ou marque a opção de estilizar os acentos.",
          `**Busca:** o Instagram e o Google não leem ${t("negrito-sem-serifa", "Novidade")} como “Novidade”. Deixe seu nome e as palavras pelas quais quer ser encontrado em texto normal.`,
          "**Acessibilidade:** leitores de tela podem ler as letras em negrito uma por uma, ou nem ler. Use o negrito como destaque, não no texto inteiro.",
          "**Quadradinhos:** em celulares muito antigos, algumas letras podem aparecer como quadrados. Entenda em [por que as letras diferentes viram quadradinhos](/blog/letras-diferentes-quadradinhos-unicode).",
        ],
      },
    ],
    faqs: [
      {
        question: "Como escrever em negrito no Instagram?",
        answer:
          "O Instagram não tem botão de negrito. Digite seu texto nesta página, copie o estilo em negrito e cole na bio, no nome, na legenda ou no comentário. Só o nome de usuário (o @) não aceita letras em negrito.",
      },
      {
        question: "Como colocar negrito no WhatsApp?",
        answer:
          "Nas mensagens, coloque um asterisco antes e depois da palavra, assim: *texto*. Para o nome, o recado e o status, onde os asteriscos não funcionam, copie as letras em negrito deste gerador.",
      },
      {
        question: "Por que as letras com acento não ficam em negrito?",
        answer:
          "Porque o Unicode não tem versões em negrito de letras como á, ã, é e ç. Por padrão, elas ficam na forma normal para o acento nunca sumir. Se quiser, marque “Estilizar também as letras com acento”: a letra fica em negrito e o acento é encaixado sobre ela, mas em alguns aparelhos ele pode sair do lugar.",
      },
      {
        question: "Letras em negrito funcionam no Free Fire?",
        answer:
          "Na maioria das vezes, sim. Mas o nick tem limite de caracteres e cada letra em negrito pode contar como mais de uma. Se o jogo recusar, use um nome mais curto.",
      },
      {
        question: "Qual a diferença entre negrito com e sem serifa?",
        answer:
          "Serifa são os pequenos traços nas pontas das letras, como em jornais e livros. O negrito com serifa é mais clássico e elegante; o sem serifa é mais moderno e mais fácil de ler em telas pequenas.",
      },
    ],
    related: ["letras-para-instagram", "letras-para-whatsapp", "letras-cursivas", "letras-goticas", "letras-para-tiktok", "alfabeto-de-letras-diferentes"],
    relatedPosts: ["como-mudar-a-fonte-do-whatsapp", "frases-para-bio-do-instagram"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-goticas",
    navLabel: "Letras góticas",
    metaTitle: "Letras Góticas para Copiar e Colar (Fraktur e Old English)",
    absoluteTitle: true,
    metaDescription:
      "Gerador de letras góticas para copiar e colar: fraktur normal e em negrito, com 亗 e coroa. Para nick de Free Fire, Instagram, Discord e ideias de tatuagem.",
    h1: "Letras góticas para copiar e colar",
    intro:
      "Transforme seu texto em letra gótica, também chamada de fraktur, letra medieval ou old english, e copie com um toque. Tem a versão tradicional, a versão em negrito (mais marcante) e combinações com 亗 e ♛, muito usadas em nicks de jogos.",
    generator: {
      styleIds: ["gotica", "gotica-negrito", "simbolo-oriental", "coroa", "contorno", "negrito", "versalete"],
      sampleText: "Letras Góticas",
    },
    examples: [
      { styleId: "gotica", text: "Sombrio" },
      { styleId: "gotica-negrito", text: "Rei do Crime" },
      { styleId: "simbolo-oriental", text: "Lenda" },
      { styleId: "gotica", text: "Família" },
    ],
    sections: [
      {
        heading: "De onde vem a letra gótica?",
        paragraphs: [
          "A escrita gótica (blackletter) foi usada em manuscritos e nos primeiros livros impressos na Europa. O estilo fraktur, uma de suas variações, é o que o Unicode inclui no bloco Mathematical Alphanumeric Symbols, por isso conseguimos reproduzi-lo como texto.",
          "Hoje ela é comum em logos, capas de álbum, camisetas e nicks de jogos que querem passar uma ideia de força ou de algo antigo.",
        ],
      },
      {
        heading: "Tipos de letra gótica",
        list: [
          `**Gótica tradicional** (${t("gotica", "Gótica")}): traço mais fino, parece mais clássica e fica bem em frases curtas.`,
          `**Gótica em negrito** (${t("gotica-negrito", "Gótica")}): mais pesada e legível em tamanhos pequenos, a preferida para nicks e títulos.`,
          `**Gótica com 亗** (${t("simbolo-oriental", "Lenda")}): o visual mais usado em nicks de Free Fire.`,
          `**Gótica com coroa** (${t("coroa", "Rei")}): para nomes imponentes, de “rei” ou “rainha” do jogo.`,
        ],
        outro: [
          "Quer o alfabeto completo? Veja o [alfabeto gótico de A a Z](/alfabeto-de-letras-diferentes#alfabeto-gotico) e copie letra por letra.",
        ],
      },
      {
        heading: "Nomes e nicks em letra gótica",
        paragraphs: ["Prontos para o jogo, o Discord ou o perfil:"],
        copy: [
          t("gotica-negrito", "Lobo"),
          `☠ ${t("gotica-negrito", "Reaper")} ☠`,
          `亗 ${t("gotica", "Dark")} 亗`,
          t("coroa", "Kaiser"),
          `⚔ ${t("gotica-negrito", "Fúria")} ⚔`,
          t("gotica", "Sombra"),
          `乂 ${t("gotica-negrito", "Venom")} 乂`,
          `☾ ${t("gotica", "Lilith")}`,
          t("gotica-negrito", "Phantom"),
          `♱ ${t("gotica-negrito", "Noir")} ♱`,
          t("simbolo-oriental", "Titan"),
          `${t("gotica", "Corvo")} †`,
        ].map((text) => ({ text })),
        outro: [
          "Mais ideias nos [nomes para Free Fire masculino](/nomes-para-free-fire-masculino), com uma seção só de nicks dark e góticos, e nos [nomes para Discord](/nomes-para-discord).",
        ],
      },
      {
        heading: "Frases em letra gótica",
        copy: [
          { text: t("gotica-negrito", "Lenda viva"), label: "Bio" },
          { text: `🖤 ${t("gotica", "Dark side")}`, label: "Bio" },
          { text: t("gotica-negrito", "Sem medo"), label: "Status" },
          { text: `${t("gotica", "Família")} acima de tudo`, label: "Bio" },
          { text: `⚔ ${t("gotica-negrito", "Nunca desista")} ⚔`, label: "Status" },
          { text: t("gotica", "Rock and roll"), label: "Legenda" },
          { text: `${t("gotica-negrito", "Fé")} ✝`, label: "Bio" },
          { text: `☠ ${t("gotica", "Modo sombrio")} ☠`, label: "Nick" },
        ],
      },
      {
        heading: "Onde usar letras góticas",
        list: [
          "**Free Fire e outros jogos:** a gótica em negrito é a mais legível no nick. Cada letra pode contar como mais de um caractere, então prefira nomes curtos. Veja as [letras para Free Fire](/letras-para-free-fire).",
          "**Discord:** no nome exibido e no apelido do servidor, perfeita para perfis dark.",
          "**Instagram e TikTok:** no nome e na bio de perfis com estética dark, rock ou metal. Veja as [letras para Instagram](/letras-para-instagram).",
          "**Títulos e capas:** em posts, capas de destaques e nomes de playlists.",
          "**Ideias de tatuagem:** para visualizar uma frase, compare com fontes góticas de verdade em [letras para tatuagem](/letras-para-tatuagem).",
        ],
      },
      {
        heading: "Letras que costumam confundir",
        paragraphs: [
          `Na fraktur, algumas maiúsculas são bem diferentes das letras atuais. Veja as que mais confundem: ${t("gotica", "A")} (A), ${t("gotica", "I")} (I), ${t("gotica", "J")} (J), ${t("gotica", "R")} (R), ${t("gotica", "C")} (C), ${t("gotica", "H")} (H) e ${t("gotica", "Z")} (Z). O ℭ, o ℌ, o ℜ e o ℨ vêm de um bloco Unicode mais antigo, por isso às vezes aparecem com um desenho levemente diferente.`,
          "Se a legibilidade for importante, use a gótica só em letras minúsculas ou em palavras curtas e conhecidas. A versão em negrito também ajuda.",
        ],
      },
      {
        heading: "Letra gótica, fraktur ou old english?",
        paragraphs: [
          "São nomes diferentes para a mesma família de letras. “Gótica” e “blackletter” são os nomes gerais. “Fraktur” é a variação alemã, que é a do Unicode. “Old English” é o nome de uma fonte famosa desse estilo, muito pedida em tatuagens e camisetas.",
          "As letras deste gerador são fraktur, que é bem parecida com a Old English. Para uma tatuagem com a fonte Old English exata, peça a arte ao tatuador.",
        ],
      },
      {
        heading: "Usando letras góticas como referência de tatuagem",
        paragraphs: [
          "O gerador serve para visualizar ideias, mas a aparência muda conforme a fonte do aparelho. Para uma tatuagem, leve a referência ao tatuador e peça a arte em uma fonte gótica de verdade, revisando com calma a ortografia e os acentos.",
        ],
      },
    ],
    faqs: [
      {
        question: "Como escrever em letra gótica no celular?",
        answer:
          "Digite seu texto nesta página, escolha a letra gótica que preferir e toque em Copiar. Depois cole no app, no jogo ou na rede social. Não precisa instalar nada.",
      },
      {
        question: "Letra gótica é a mesma coisa que letra medieval?",
        answer:
          "No uso popular, sim. “Gótica”, “medieval”, “fraktur”, “blackletter” e “old english” costumam se referir ao mesmo estilo de escrita com traços quebrados e angulosos.",
      },
      {
        question: "Posso usar letras góticas no nick do jogo?",
        answer:
          "Depende do jogo. Muitos aceitam símbolos Unicode no nome, mas alguns recusam certos caracteres ou contam cada símbolo como mais de um caractere. Teste no campo do jogo antes de confirmar uma troca paga.",
      },
      {
        question: "As letras góticas funcionam no Instagram?",
        answer:
          "Sim. Funcionam no nome do perfil, na bio, nas legendas e nos comentários. Só o nome de usuário (o @) não aceita letras góticas.",
      },
      {
        question: "Por que as letras com acento não ficam góticas?",
        answer:
          "Não existem letras góticas acentuadas no Unicode. Por isso, por padrão, letras como “ã” e “é” ficam na forma normal, para aparecerem certas em qualquer aparelho. Se quiser, marque “Estilizar também as letras com acento”: a letra vira gótica e o acento é encaixado sobre ela, mas algumas fontes o posicionam fora do lugar.",
      },
      {
        question: "Qual a diferença entre a gótica normal e a em negrito?",
        answer:
          "A gótica normal tem traço fino e visual mais clássico. A em negrito é mais grossa e mais fácil de ler em tamanhos pequenos, como no nick de um jogo ou no nome do perfil.",
      },
    ],
    related: ["letras-para-tatuagem", "letras-para-free-fire", "nomes-para-free-fire-masculino", "letras-em-negrito", "simbolos", "alfabeto-de-letras-diferentes", "letras-cursivas"],
    relatedPosts: ["nomes-para-free-fire"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-pequenas",
    navLabel: "Letras pequenas",
    metaTitle: "Letras Pequenas para Copiar e Colar (ᴠᴇʀsᴀʟᴇᴛᴇ e ˢᵒᵇʳᵉˢᶜʳⁱᵗᵒ)",
    absoluteTitle: true,
    metaDescription:
      "Gere letras pequenas para copiar e colar: versalete (ᴀʙᴄ), sobrescrito (ᵃᵇᶜ), subscrito e números pequenos (²). Para bio, nick e tags de clã. Grátis.",
    h1: "Letras pequenas para copiar e colar",
    intro:
      "Escreva com letras pequenas em três formatos: versalete (maiúsculas em tamanho reduzido), sobrescrito (letrinhas no alto da linha) e subscrito (letrinhas na parte de baixo). Também tem números pequenos, como o ² de “ao quadrado”, e tags de clã para nicks.",
    generator: {
      styleIds: ["versalete", "sobrescrito", "subscrito", "estrelas", "moldura-gamer"],
      sampleText: "Letras pequenas",
    },
    examples: [
      { styleId: "versalete", text: "Menos é mais" },
      { styleId: "sobrescrito", text: "oi, sumiu?" },
      { styleId: "estrelas", text: "Sonhar alto" },
      { styleId: "versalete", text: "São Paulo, Brasil" },
    ],
    sections: [
      {
        heading: "Os três tipos de letras pequenas",
        list: [
          `**Versalete** (${t("versalete", "abc")}): letras com formato de maiúscula e altura de minúscula. É o estilo pequeno mais legível e o mais usado em bios.`,
          `**Sobrescrito** (${t("sobrescrito", "abc")}): letrinhas elevadas, como as usadas em notas e expoentes. Bom para comentários curtos e “sussurros” no texto.`,
          `**Subscrito** (${t("subscrito", "aeo")}): letrinhas abaixo da linha. O Unicode só tem algumas letras nesse formato, por isso as demais continuam normais.`,
        ],
      },
      {
        heading: "Nomes e nicks em letras pequenas",
        paragraphs: ["O versalete deixa o nome com cara minimalista, ótimo para perfis e nicks discretos:"],
        copy: [
          t("versalete", "Luna"),
          `☾ ${t("versalete", "Kai")}`,
          `✦ ${t("versalete", "Nina")} ✦`,
          t("versalete", "Gabriel"),
          `${t("versalete", "Duda")} ♡`,
          `⋆ ${t("versalete", "Theo")} ⋆`,
          t("estrelas", "Mel"),
          t("moldura-gamer", "Rex"),
          `${t("versalete", "Alice")} ☁︎`,
          `乂 ${t("versalete", "Ghost")} 乂`,
        ].map((text) => ({ text })),
      },
      {
        heading: "Tags de clã em letras pequenas",
        paragraphs: [
          "Em jogos como Free Fire, as letrinhas no alto da linha viram tags de clã e títulos antes do nome:",
        ],
        copy: [
          { text: "ᴮᴿ", label: "Brasil" },
          { text: "ᴳᴼᴰ", label: "God" },
          { text: "ᴾᴿᴼ", label: "Pro" },
          { text: "ᴷᴵᴺᴳ", label: "King" },
          { text: "ⱽᴵᴾ", label: "VIP" },
          { text: `ᴮᴿ ${t("versalete", "Lobo")}`, label: "Exemplo com nome" },
        ],
        outro: [
          "No [gerador de nick](/gerador-de-nick) você digita a tag do seu clã e ela já aparece pequena antes do nome.",
        ],
      },
      {
        heading: "Números pequenos para copiar",
        paragraphs: ["Úteis para escrever “ao quadrado”, notas de rodapé e fórmulas, como m² e H₂O:"],
        copy: [
          { text: "⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹", label: "Números sobrescritos" },
          { text: "₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉", label: "Números subscritos" },
          { text: "m²", label: "Metro quadrado" },
          { text: "m³", label: "Metro cúbico" },
          { text: "H₂O", label: "Água" },
          { text: "CO₂", label: "Gás carbônico" },
        ],
      },
      {
        heading: "Frases em letras pequenas",
        copy: [
          { text: t("versalete", "Menos é mais"), label: "Bio" },
          { text: `${t("versalete", "Um dia de cada vez")} 🌿`, label: "Bio" },
          { text: `📍 ${t("versalete", "Rio de Janeiro")}`, label: "Localização" },
          { text: `${t("sobrescrito", "só passando")} 👀`, label: "Comentário" },
          { text: `${t("versalete", "Fotografia")} · ${t("versalete", "Viagens")}`, label: "Bio" },
          { text: `☁︎ ${t("versalete", "Vivendo o agora")}`, label: "Status" },
        ],
      },
      {
        heading: "Onde usar letras pequenas",
        list: [
          "**Instagram:** na bio, para a localização, a profissão ou uma frase discreta. Veja as [letras para Instagram](/letras-para-instagram).",
          "**TikTok:** no nome e na bio, para um visual minimalista. Veja as [letras para TikTok](/letras-para-tiktok).",
          "**Free Fire e jogos:** o versalete é legível no nick, e as tags pequenas indicam o clã. Veja os [nomes para Free Fire masculino](/nomes-para-free-fire-masculino).",
          "**Discord:** no nome exibido, combinando com símbolos aesthetic. Veja os [nomes para Discord](/nomes-para-discord).",
          "**Estudos e trabalhos:** os números pequenos ajudam a escrever unidades e fórmulas em mensagens.",
        ],
      },
      {
        heading: "Limitações que você deve conhecer",
        paragraphs: [
          "O versalete e o sobrescrito usam caracteres de alfabetos fonéticos e modificadores, e não um alfabeto completo pensado para isso. Por isso, algumas letras saem com tamanho ou desenho um pouco diferente. O sobrescrito, por exemplo, não tem um “q” próprio, e usamos um caractere parecido.",
          "No subscrito, letras como b, c, d, f e g não existem no Unicode e aparecem em tamanho normal. Por isso esse estilo está marcado como “parcial”.",
        ],
      },
      {
        heading: "Como usar letras pequenas sem perder a leitura?",
        steps: [
          "Use letras pequenas em frases curtas, como um apelido ou uma localização.",
          "Combine com o texto normal: o contraste deixa a parte pequena mais charmosa.",
          "Evite letras pequenas em informações importantes, como contato ou preço.",
        ],
      },
    ],
    faqs: [
      {
        question: "Como fazer letra pequena no celular?",
        answer:
          "Digite seu texto nesta página, escolha versalete, sobrescrito ou subscrito e toque em Copiar. Depois cole no app que quiser. Não precisa instalar teclado nem aplicativo.",
      },
      {
        question: "Como escrever o ² de “ao quadrado”?",
        answer:
          "Copie o ² da lista de números pequenos desta página. No Windows, também dá para segurar Alt e digitar 0178 no teclado numérico.",
      },
      {
        question: "Letras pequenas funcionam no Free Fire?",
        answer:
          "O versalete e as tags pequenas costumam funcionar no nick. Cada caractere conta no limite do jogo, então use nomes curtos e teste antes de confirmar a troca.",
      },
      {
        question: "Por que algumas letras pequenas ficam maiores que as outras?",
        answer:
          "Os caracteres pequenos vêm de blocos Unicode diferentes (alfabeto fonético e modificadores), e cada fonte de sistema os desenha de um jeito. Por isso pode haver pequenas diferenças de tamanho entre as letras.",
      },
      {
        question: "Dá para usar letras pequenas no nome do Instagram?",
        answer:
          "No campo “Nome”, geralmente sim. No nome de usuário (o @), não: ele aceita apenas letras comuns, números, ponto e sublinhado.",
      },
      {
        question: "As letras pequenas aceitam acentos?",
        answer:
          "Sim, os acentos nunca somem. Por padrão, letras como “ã” e “ç” ficam na forma normal, porque o Unicode não tem versões pequenas delas. Marcando “Estilizar também as letras com acento”, a letra fica pequena e o acento é encaixado sobre ela, o que pode sair do lugar em algumas fontes.",
      },
    ],
    related: ["letras-para-instagram", "gerador-de-nick", "letras-para-tiktok", "letras-bonitas", "simbolos", "alfabeto-de-letras-diferentes"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-para-instagram",
    navLabel: "Letras para Instagram",
    metaTitle: "Letras para Instagram: +70 Fontes para Copiar e Colar (Bio e Nome)",
    absoluteTitle: true,
    metaDescription:
      "Letras para Instagram para copiar e colar na bio, no nome e nas legendas. Mais de 70 fontes diferentes, grátis e sem baixar nada.",
    h1: "Letras para Instagram – Fontes para Bio, Nome e Legendas",
    intro:
      "Gere letras diferentes para deixar sua bio, seu nome de perfil e suas legendas com mais personalidade. Os 12 estilos que ficam mais bonitos no Instagram aparecem primeiro, e logo abaixo estão todos os outros. Mais para baixo, você encontra ideias de bio, o passo a passo para colar e o que o app aceita ou não.",
    generator: {
      // The 12 that look best on Instagram first, then every other style.
      styleIds: (() => {
        const featured = [
          "cursiva-negrito", "negrito-sem-serifa", "cursiva", "versalete", "italico-sem-serifa", "gotica-negrito",
          "contorno", "largura-total", "bolhas", "coracoes", "estrelas", "japones",
        ];
        return [...featured, ...STYLES.map((s) => s.id).filter((id) => !featured.includes(id))];
      })(),
      sampleText: "Minha bio no Instagram",
      showFilter: true,
    },
    examples: [
      { styleId: "negrito-sem-serifa", text: "Fotógrafa | Rio de Janeiro" },
      { styleId: "cursiva-negrito", text: "Juliana Souza" },
      { styleId: "versalete", text: "Link na bio" },
      { styleId: "estrelas", text: "Novidades toda semana" },
    ],
    sections: [
      {
        heading: "Letras para bio do Instagram",
        paragraphs: [
          "A bio é o primeiro lugar que as pessoas veem quando entram no seu perfil. Usar letras diferentes ajuda a destacar seu nome, sua profissão ou uma frase curta. O ideal é estilizar só uma parte da bio, como o título ou uma palavra-chave, e deixar o resto em letra normal para facilitar a leitura. Lembre-se de que a bio aceita até 150 caracteres, e algumas letras especiais contam como mais de um caractere.",
        ],
      },
      {
        heading: "Letras para nome do Instagram",
        paragraphs: [
          "O campo “Nome” aparece em negrito no topo do perfil e também nas buscas. Você pode usar letras diferentes nele sem problema. O @ (nome de usuário), porém, só aceita letras normais, números, ponto e underline. Uma dica: mantenha seu nome real legível, porque é por ele que as pessoas pesquisam você.",
        ],
      },
      {
        heading: "Letras para legendas e comentários",
        paragraphs: [
          "As letras diferentes também funcionam em legendas, comentários e Stories. Use em títulos de posts, listas ou para destacar uma frase importante. Evite escrever a legenda inteira estilizada, porque fica difícil de ler, principalmente para quem usa leitor de tela.",
        ],
      },
      {
        heading: "Melhores fontes para Instagram",
        paragraphs: ["Estas são as fontes que mais aparecem em perfis bonitos:"],
        copy: [
          { text: t("cursiva-negrito", "Letras"), label: "Cursiva: elegante, ótima para perfis de moda e beleza" },
          { text: t("negrito-sem-serifa", "Letras"), label: "Negrito: boa para destacar títulos na bio" },
          { text: t("versalete", "Letras"), label: "Versalete: minimalista e discreta" },
          { text: t("gotica-negrito", "Letras"), label: "Gótica: estilo dark e tatuagem" },
          { text: t("largura-total", "Letras"), label: "Aesthetic: visual vaporwave" },
          { text: t("bolhas", "Letras"), label: "Bolhas: divertida e fofa" },
        ],
      },
      {
        heading: "Ideias de bio com letras diferentes",
        paragraphs: ["Toque em Copiar e cole na sua bio. Para trocar as palavras, escreva a sua frase no gerador acima."],
        copy: [
          { text: `✨ ${t("cursiva-negrito", "Criando momentos")} ✨` },
          { text: `${t("negrito-sem-serifa", "Fotografia | SP")} 📍` },
          { text: `${t("versalete", "Boas-vindas ao meu mundo")} ♡` },
          { text: `☾ ${t("gotica-negrito", "Dark soul")} ☽` },
          { text: `⋆˚✿ ${t("versalete", "Felicidade em pequenas coisas")} ✿˚⋆` },
          { text: `${t("cursiva", "Seja luz")} 💫` },
        ],
        outro: ["Quer mais ideias? Veja as [70 frases para bio do Instagram](/blog/frases-para-bio-do-instagram), com bios por nicho: moda, fitness, viagens, negócios e comida."],
      },
      {
        heading: "Como colocar letras diferentes na bio do Instagram?",
        steps: [
          "Digite seu texto no gerador acima e toque em “Copiar” no estilo que preferir.",
          "Abra o Instagram e vá até o seu perfil.",
          "Toque em “Editar perfil” e depois em “Bio”.",
          "Mantenha o dedo pressionado no campo e escolha “Colar”.",
          "Confira a prévia e salve. Se algum caractere aparecer como quadradinho, troque por outro estilo.",
        ],
        paragraphs: [
          "Os nomes dos menus podem mudar conforme a versão do aplicativo, mas o caminho costuma ser parecido.",
        ],
      },
      {
        heading: "Limite de caracteres e outros cuidados",
        paragraphs: [
          "Alguns símbolos estilizados ocupam mais espaço do que uma letra comum na contagem, então uma frase que cabia em texto normal pode passar dos 150 caracteres da bio depois de estilizada.",
          "Letras estilizadas não são reconhecidas pela busca como palavras normais. Se você quer ser encontrado pelo nome ou pela profissão, mantenha essas palavras também em texto comum.",
          "Leitores de tela podem ler letras estilizadas de forma confusa. Use os estilos como enfeite, não para a informação principal.",
        ],
      },
      {
        heading: "Funciona no Android e no iPhone?",
        paragraphs: [
          "Sim. As letras diferentes são caracteres Unicode, e não fontes instaladas, então aparecem tanto no Android quanto no iPhone. Em celulares muito antigos, alguns estilos podem aparecer como quadradinhos. Se isso acontecer, escolha um estilo mais simples, como negrito ou cursiva. Entenda melhor em [por que as letras diferentes viram quadradinhos](/blog/letras-diferentes-quadradinhos-unicode).",
        ],
      },
    ],
    faqs: [
      {
        question: "Como colocar letras diferentes no Instagram?",
        answer:
          "Digite seu texto no gerador acima, toque em “Copiar” no estilo que quiser e cole na bio, no nome ou na legenda.",
      },
      {
        question: "Por que não consigo colocar letras diferentes no meu @?",
        answer:
          "O nome de usuário do Instagram aceita apenas letras comuns, números, ponto e sublinhado. As letras estilizadas são outros caracteres Unicode, por isso são recusadas nesse campo. Use-as no nome exibido e na bio.",
      },
      {
        question: "Qual a melhor fonte para bio do Instagram?",
        answer: "Cursiva e negrito são as mais usadas, porque ficam bonitas e continuam fáceis de ler.",
      },
      {
        question: "Letras diferentes funcionam no Instagram pelo computador?",
        answer: "Sim. Copie e cole normalmente no Instagram pelo navegador.",
      },
      {
        question: "Posso usar letras diferentes nos Stories?",
        answer: "Sim. Cole o texto na ferramenta de texto dos Stories.",
      },
      {
        question: "Preciso baixar algum aplicativo?",
        answer: "Não. Tudo funciona no navegador, de graça.",
      },
      {
        question: "As letras diferentes atrapalham a busca do meu perfil?",
        answer:
          "O Instagram pode não reconhecer letras estilizadas na busca. Por isso, deixe seu nome principal em letra normal.",
      },
      {
        question: "As letras diferentes podem prejudicar meu perfil?",
        answer:
          "Não conhecemos regras do Instagram que proíbam letras estilizadas na bio. O ponto de atenção é outro: elas não são encontradas pela busca como palavras normais e podem dificultar a leitura por leitores de tela.",
      },
      {
        question: "Apareceram quadradinhos depois de colar. O que fazer?",
        answer:
          "Isso acontece quando o aparelho não tem desenho para aquele caractere. Escolha outro estilo, como o negrito sem serifa ou o versalete, que costumam ser mais compatíveis.",
      },
    ],
    related: ["letras-para-tiktok", "letras-para-whatsapp", "nome-personalizado", "letras-bonitas", "letras-pequenas", "letras-cursivas", "letras-riscadas"],
    relatedPosts: ["frases-para-bio-do-instagram"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-para-free-fire",
    navLabel: "Letras para Free Fire",
    metaTitle: "Letras para Free Fire: Nick com Letras Diferentes",
    absoluteTitle: true,
    metaDescription:
      "Crie seu nick para Free Fire com letras diferentes e símbolos (꧁꧂, 亗, ★). Veja como trocar o nick no jogo e o que testar antes de confirmar.",
    h1: "Letras para Free Fire: crie seu nick com letras diferentes",
    intro:
      "Monte um nick para Free Fire com letras diferentes e símbolos populares como ꧁ ꧂, 亗 e ★彡. Digite seu nome, copie o estilo e cole na tela de troca de nome do jogo.",
    generator: {
      styleIds: [
        "moldura-classica", "simbolo-oriental", "estrelas", "japones", "flechas",
        "gotica-negrito", "negrito-sem-serifa", "versalete", "estilo-oriental", "estilo-moedas",
        "bolhas-pretas", "quadrados-pretos", "contorno", "monoespacada",
      ],
      sampleText: "SeuNick",
    },
    examples: [
      { styleId: "moldura-classica", text: "Lobo" },
      { styleId: "simbolo-oriental", text: "Sniper" },
      { styleId: "estrelas", text: "Rainha" },
      { styleId: "estilo-oriental", text: "Ninja" },
      { styleId: "gotica-negrito", text: "Matador" },
      { styleId: "versalete", text: "Capa Preta" },
    ],
    sections: [
      {
        heading: "Como trocar o nick no Free Fire?",
        steps: [
          "Crie o nick aqui no gerador e toque em “Copiar”.",
          "Abra o Free Fire e toque na sua foto de perfil, no canto da tela inicial.",
          "Toque no ícone de editar (lápis) ao lado do seu nome.",
          "Apague o nome atual, pressione o campo e escolha “Colar”.",
          "Confira como o nick ficou e confirme.",
        ],
        paragraphs: [
          "Atenção: a troca de nome no Free Fire normalmente não é gratuita — o jogo pode pedir diamantes ou um item de troca de nome. Confira o custo mostrado na tela antes de confirmar. O caminho dos menus também pode mudar em atualizações do jogo.",
        ],
      },
      {
        heading: "O que testar antes de confirmar?",
        list: [
          "Tamanho: o campo de nick tem limite de caracteres, e símbolos estilizados podem ocupar mais espaço. Se o jogo cortar o nome, use um nome mais curto ou menos enfeites.",
          "Caracteres recusados: o jogo pode não aceitar certos símbolos. Se aparecer um aviso de nome inválido, tente outro estilo.",
          "Quadradinhos: se a prévia mostrar □ no lugar de letras, o celular não tem aquele símbolo — e outros jogadores também podem não vê-lo.",
          "Nick já em uso: nomes populares podem já estar ocupados. Um símbolo diferente ou uma letra a mais costuma resolver.",
        ],
      },
      {
        heading: "Símbolos mais usados em nicks",
        paragraphs: [
          "꧁ ꧂ (molduras), 亗 e 乂 (símbolos orientais), 彡 e ★ (estrelas), ツ, ♛ e ☠ estão entre os enfeites mais comuns. Você encontra todos eles para copiar na página de símbolos, e pode combiná-los com qualquer estilo do gerador.",
        ],
      },
      {
        heading: "Dicas para um nick que todo mundo consegue ler",
        list: [
          "Use o enfeite nas pontas e mantenha o nome no meio legível.",
          "Prefira estilos em negrito ou versalete, que aparecem bem em telas pequenas.",
          "Evite estilos de cabeça para baixo ou muito carregados: outros jogadores podem não conseguir te encontrar ou te adicionar.",
          "Guarde uma cópia do nick em um bloco de notas para usar em outros jogos ou nas redes sociais.",
        ],
      },
    ],
    faqs: [
      {
        question: "Trocar o nick do Free Fire é de graça?",
        answer:
          "Normalmente não. O jogo costuma cobrar diamantes ou exigir um item específico de troca de nome. O valor pode mudar, por isso confira sempre a informação exibida dentro do jogo antes de confirmar.",
      },
      {
        question: "Por que o Free Fire diz que meu nick é inválido?",
        answer:
          "O jogo pode recusar alguns caracteres especiais ou nomes muito longos. Tente um estilo diferente, diminua o nome ou remova algum símbolo até ser aceito.",
      },
      {
        question: "Os outros jogadores vão ver meu nick do mesmo jeito?",
        answer:
          "Na maioria dos casos, sim. Mas a aparência depende das fontes de cada aparelho: em celulares antigos, alguns símbolos podem aparecer como quadradinhos.",
      },
      {
        question: "Este site é ligado ao Free Fire ou à Garena?",
        answer:
          "Não. O Letras Diferentes é um site independente, sem qualquer vínculo com a Garena ou com o Free Fire. Nós apenas geramos os caracteres Unicode que você copia.",
      },
    ],
    related: ["gerador-de-nick", "nome-invisivel", "nome-personalizado", "simbolos", "letras-goticas", "letras-pequenas"],
    relatedPosts: ["nomes-para-free-fire", "letras-diferentes-quadradinhos-unicode"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-riscadas",
    navLabel: "Letras riscadas",
    metaTitle: "Letras Riscadas para Copiar: Texto Riscado e Sublinhado",
    absoluteTitle: true,
    metaDescription:
      "Gere texto riscado (tachado), cortado, sublinhado e com linha em cima: 10 estilos para copiar e colar no Instagram, WhatsApp, TikTok e Discord. Grátis.",
    h1: "Letras riscadas e sublinhadas para copiar",
    intro:
      "Escreva um texto riscado, cortado, sublinhado ou com linha em cima e cole onde quiser, inclusive em apps que não têm botão de formatação, como a bio do Instagram e o TikTok. São 10 estilos, do risco clássico ao pontilhado e ao ondulado.",
    generator: { categories: ["riscadas"], sampleText: "Texto riscado" },
    examples: [
      { styleId: "riscado", text: "segunda-feira" },
      { styleId: "sublinhado", text: "importante" },
      { styleId: "riscado-barra", text: "dieta" },
      { styleId: "sublinhado-duplo", text: "Promoção" },
    ],
    sections: [
      {
        heading: "Os tipos de letras riscadas e sublinhadas",
        list: [
          `**Riscado (tachado)** (${t("riscado", "riscado")}): a linha no meio da palavra, o mais usado.`,
          `**Cortado com barra** (${t("riscado-barra", "cortado")}): cada letra cortada por uma barra inclinada.`,
          `**Riscado com X** (${t("riscado-x", "riscado")}): um pequeno x sobre cada letra.`,
          `**Sublinhado** (${t("sublinhado", "sublinhado")}): uma linha embaixo, para destacar.`,
          `**Sublinhado duplo** (${t("sublinhado-duplo", "duplo")}): duas linhas embaixo, ainda mais forte.`,
          `**Linha em cima** (${t("sobrelinhado", "linha")}): a linha passa por cima das letras.`,
          `**Ondulado e pontilhado** (${t("ondulado", "ondulado")}, ${t("pontos-embaixo", "pontos")}): enfeites discretos embaixo das letras.`,
        ],
      },
      {
        heading: "Frases engraçadas com texto riscado",
        paragraphs: ["O truque clássico: riscar uma palavra e escrever a verdade ao lado. Copie e use na bio, no status ou na legenda:"],
        copy: [
          { text: `Estou de ${t("riscado", "dieta")} férias` },
          { text: `${t("riscado", "Segunda-feira")} Sextou! 🎉` },
          { text: `Meu plano para hoje: ${t("riscado", "academia")} sofá` },
          { text: `Hoje eu ${t("riscado", "estudo")} durmo 😴` },
          { text: `${t("riscado", "Acordar cedo")} Só mais 5 minutos` },
          { text: `${t("riscado", "Vou responder")} Visualizei` },
          { text: `Fim de semana: ${t("riscado", "descansar")} faxina 🧹` },
          { text: `Saldo: ${t("riscado", "cheio")} vazio 💸` },
          { text: `${t("riscado", "Sem tempo")} Com preguiça` },
          { text: `Modo ${t("riscado", "fitness")} lanche ativado 🍔` },
        ],
      },
      {
        heading: "Riscado para listas, preços e tarefas",
        copy: [
          { text: `✓ ${t("riscado", "Comprar pão")}`, label: "Tarefa feita" },
          { text: `✓ ${t("riscado", "Pagar contas")}`, label: "Tarefa feita" },
          { text: `De ${t("riscado", "R$ 120")} por R$ 89`, label: "Promoção" },
          { text: `${t("riscado", "R$ 59,90")} R$ 39,90 🔥`, label: "Promoção" },
          { text: `${t("sublinhado", "Importante")}: reunião às 15h`, label: "Aviso" },
          { text: `${t("sublinhado-duplo", "Última chance")}`, label: "Aviso" },
        ],
        outro: [
          "Em lojas e posts de venda, o preço antigo riscado ao lado do novo é um jeito simples de mostrar o desconto.",
        ],
      },
      {
        heading: "Onde usar texto riscado",
        list: [
          "**Instagram e TikTok:** na bio, nas legendas e nos comentários, onde não existe botão de formatação. Veja as [letras para Instagram](/letras-para-instagram).",
          "**WhatsApp:** nas mensagens você pode usar o código do próprio app (veja abaixo) ou o texto deste gerador, que também funciona no nome, no recado e no status.",
          "**Discord:** no nome exibido e nas mensagens. Nas mensagens, o Discord também risca o texto com dois tis de cada lado.",
          "**X (Twitter), Facebook e LinkedIn:** em posts, para humor ou para mostrar um preço antigo.",
        ],
      },
      {
        heading: "Alternativa nativa no WhatsApp e no Discord",
        paragraphs: [
          "No WhatsApp você também pode riscar texto sem o gerador: escreva a palavra entre tis, assim: ~texto~. No Discord, use dois tis de cada lado. A diferença é que essa formatação só funciona dentro daquele app, enquanto o texto deste gerador mantém o risco quando é colado em outros apps.",
          "Veja todos os códigos em [letras para WhatsApp](/letras-para-whatsapp) e no guia de [como mudar a fonte do WhatsApp](/blog/como-mudar-a-fonte-do-whatsapp).",
        ],
      },
      {
        heading: "Como o texto riscado funciona?",
        paragraphs: [
          "Estes estilos não trocam as letras. Eles adicionam, depois de cada letra, um sinal combinável do Unicode: uma linha no meio (U+0336), uma barra (U+0338), uma linha embaixo (U+0332) ou em cima (U+0305). O aparelho desenha esse sinal sobre a letra anterior.",
          "Por isso o texto continua legível e os acentos são mantidos. A desvantagem é que a linha pode ficar com pequenas falhas entre as letras, dependendo da fonte.",
        ],
      },
    ],
    faqs: [
      {
        question: "Como riscar uma palavra no WhatsApp?",
        answer:
          "Nas mensagens, escreva a palavra entre tis, assim: ~texto~. Para riscar no nome, no recado ou no status, onde o código não funciona, copie o texto riscado deste gerador.",
      },
      {
        question: "Como fazer texto riscado no Instagram?",
        answer:
          "O Instagram não tem opção de riscar. Digite o texto nesta página, copie o estilo riscado e cole na bio, na legenda ou no comentário.",
      },
      {
        question: "Riscado e tachado são a mesma coisa?",
        answer:
          "Sim. “Tachado” é o nome usado em editores de texto, como o Word, para o texto com uma linha no meio. “Riscado” é o nome mais comum no dia a dia.",
      },
      {
        question: "Por que a linha do texto riscado aparece falhada?",
        answer:
          "Cada letra recebe a sua própria linha, e a fonte do aparelho decide a largura de cada uma. Em algumas fontes as linhas não se encostam totalmente, o que deixa pequenos espaços.",
      },
      {
        question: "O texto riscado funciona no Instagram e no TikTok?",
        answer:
          "Em geral, sim: os sinais combináveis são suportados pela maioria dos sistemas atuais. Teste na prévia antes de publicar.",
      },
      {
        question: "Espaços também ficam riscados?",
        answer:
          "Não. O gerador pula os espaços de propósito, para que as palavras continuem separadas e a linha não fique solta entre elas.",
      },
    ],
    related: ["letras-para-whatsapp", "letras-em-negrito", "letras-pequenas", "letras-para-instagram", "letras-bonitas", "simbolos"],
    relatedPosts: ["como-mudar-a-fonte-do-whatsapp"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "simbolos",
    navLabel: "Símbolos para copiar",
    metaTitle: "Símbolos para Copiar e Colar: ★ ♡ ꧁꧂ 亗 e mais",
    metaDescription:
      "Mais de 260 símbolos para copiar e colar: estrelas, corações, ꧁꧂, 亗, flechas, números, kaomoji e aesthetic. Para nick, bio e mensagens.",
    h1: "Símbolos para copiar e colar",
    intro:
      "Toque em qualquer símbolo para copiá-lo. São mais de 260 símbolos separados por tipo: estrelas, corações, molduras, símbolos para nick, aesthetic, flechas, números, kaomoji e muito mais. Use em nicks de jogos, bios e mensagens, sozinhos ou junto com as letras diferentes do gerador logo abaixo.",
    generator: { categories: ["decorativas"], sampleText: "Seu nome" },
    examples: [],
    symbolGroups: [
      { title: "Estrelas e brilhos", symbols: ["★", "☆", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⋆", "✶", "✷", "✸", "✹", "✺", "✵", "❂", "⭑", "⭒", "彡"] },
      { title: "Corações", symbols: ["♡", "♥", "❤", "❥", "❣", "ღ", "❦", "❧", "ʚ", "ɞ", "💗", "💖", "💞", "💕", "🤍", "🖤"] },
      { title: "Molduras e colchetes", symbols: ["꧁", "꧂", "༺", "༻", "『", "』", "「", "」", "【", "】", "《", "》", "〖", "〗", "⟦", "⟧", "꒰", "꒱", "〔", "〕"] },
      { title: "Para nicks e jogos", symbols: ["亗", "乂", "ツ", "么", "〆", "×͜×", "♛", "♚", "♔", "☠", "⚔", "✞", "✠", "⚡", "☯", "⛧", "࿐", "ᴳᴼᴰ", "ᴮᴼˢˢ", "ᴾᴿᴼ"] },
      { title: "Aesthetic", symbols: ["⋆｡˚", "˚｡⋆", "✧˖°", "⊹₊", "‧₊˚", "✩₊˚.⋆", "⋆˙⟡", "˚ʚ♡ɞ˚", "·˚ ༘", "⟡", "↷", "⤿", "୨୧", "☁︎", "𓆩♡𓆪"] },
      { title: "Flechas", symbols: ["➳", "➵", "➸", "➼", "➽", "➤", "➜", "➔", "⇢", "⇝", "↠", "↬", "⟶", "←", "→", "↑", "↓", "↔", "↕", "⤷", "⤴", "↻"] },
      { title: "Check e X", symbols: ["✓", "✔", "☑", "✗", "✘", "☒", "✅", "❌", "⨯"] },
      { title: "Números", symbols: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "❿"] },
      { title: "Flores e natureza", symbols: ["✿", "❀", "❁", "✾", "❃", "❋", "⚘", "☘", "🌸", "🌷", "🌿", "🍃"] },
      { title: "Céu e clima", symbols: ["☀", "☼", "☁", "☂", "☔", "❄", "☃", "⚡", "☾", "☽", "🌙", "✩"] },
      { title: "Natal e fim de ano", symbols: ["❅", "❆", "⛄", "🎄", "🎅", "🎁", "🔔", "⭐", "🎆", "🥂"] },
      { title: "Música", symbols: ["♩", "♪", "♫", "♬", "♭", "♯", "🎧", "🎵"] },
      { title: "Cartas e xadrez", symbols: ["♠", "♣", "♥", "♦", "♤", "♧", "♢", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"] },
      { title: "Signos do zodíaco", symbols: ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"] },
      { title: "Matemática e moedas", symbols: ["±", "×", "÷", "≠", "≈", "∞", "√", "π", "°", "%", "‰", "€", "£", "¥", "¢", "₿", "™", "©", "®"] },
      { title: "Para canais do Discord", symbols: ["・", "┊", "┃", "│", "╭", "╰", "╮", "╯", "⌇", "︰", "┆"] },
      { title: "Divisores e pontos", symbols: ["•", "◦", "°", "·", "∘", "⊹", "⋅", "‧", "─", "━", "┈", "⸻", "︵", "︶", "〰", "≈"] },
      { title: "Kaomoji (carinhas)", symbols: ["(◕‿◕)", "ʕ•ᴥ•ʔ", "(｡♥‿♥｡)", "(づ｡◕‿‿◕｡)づ", "¯\\_(ツ)_/¯", "(╯°□°)╯︵ ┻━┻", "ʘ‿ʘ", "(◕‿◕✿)", "ᕙ(⇀‸↼‶)ᕗ", "( ˘ ³˘)♥", "(ᵔᴥᵔ)", "ฅ^•ﻌ•^ฅ"] },
    ],
    sections: [
      {
        heading: "De onde vêm esses símbolos?",
        paragraphs: [
          "Todos os símbolos desta página são caracteres do padrão Unicode, o mesmo que permite escrever em qualquer idioma no celular. Alguns vêm de blocos de símbolos gráficos (como ★ e ♡), outros de escritas de outros idiomas: o 亗 e o 乂 são caracteres chineses e o ꧁ ꧂ vem do alfabeto javanês.",
        ],
      },
      {
        heading: "Combinações prontas com símbolos",
        paragraphs: ["Copie a combinação inteira e troque “Nome” pelo seu nome ou apelido:"],
        copy: [
          { text: "꧁༺ Nome ༻꧂", label: "Clássica" },
          { text: "★彡 Nome 彡★", label: "Estrelas" },
          { text: "⋆˙⟡ Nome ⟡˙⋆", label: "Aesthetic" },
          { text: "˚ʚ Nome ɞ˚", label: "Fofa" },
          { text: "亗 Nome 亗", label: "Nick" },
          { text: "乂 Nome 乂", label: "Nick" },
          { text: "『 Nome 』", label: "Japonesa" },
          { text: "♛ Nome ♛", label: "Coroa" },
          { text: "☾ Nome ☽", label: "Lua" },
          { text: "✧･ﾟ: Nome :･ﾟ✧", label: "Brilhos" },
        ],
        outro: ["Quer o nome com letras diferentes também? Use o gerador mais abaixo ou veja o [nome personalizado](/nome-personalizado)."],
      },
      {
        heading: "Quais símbolos usar em cada lugar",
        list: [
          "**Nick de Free Fire e jogos:** 亗, 乂, ×͜×, 么, 〆 e ꧁ ꧂ são os favoritos. Lembre que cada símbolo conta no limite de caracteres. Veja os [nomes para Free Fire masculino](/nomes-para-free-fire-masculino) e [feminino](/nomes-para-free-fire-feminino).",
          "**Bio do Instagram:** os símbolos aesthetic (⋆｡˚, ✧˖°, ୨୧) e os divisores (•, ─) organizam a bio em linhas. Veja as [letras para Instagram](/letras-para-instagram).",
          "**WhatsApp:** corações, estrelas e flores no nome, no recado e no status. Veja as [letras para WhatsApp](/letras-para-whatsapp).",
          "**Discord:** ・, ┊ e ╰ deixam a lista de canais organizada, como em 💬・chat. Veja os [nomes para Discord](/nomes-para-discord).",
          "**Listas e tarefas:** ✓, ✗, ①, ② e ➤ ajudam a organizar mensagens e posts.",
          "**Fim de ano:** ❄, ☃ e 🎄 combinam com as [frases de Natal e Ano Novo](/blog/frases-de-natal-e-ano-novo).",
        ],
      },
      {
        heading: "Como combinar símbolos com letras diferentes?",
        steps: [
          "Escolha um estilo de letra no gerador e copie.",
          "Cole no app de destino.",
          "Volte aqui, toque no símbolo desejado e cole antes ou depois do texto.",
          "Para um visual equilibrado, use o mesmo símbolo dos dois lados (ex.: ꧁ nome ꧂).",
        ],
      },
      {
        heading: "Como digitar símbolos sem copiar",
        list: [
          "**Windows:** pressione a tecla Windows + ponto (.) para abrir o painel de emojis e símbolos. Na aba Ω estão os símbolos.",
          "**Mac:** pressione Control + Command + Espaço para abrir o visualizador de caracteres.",
          "**Android:** no teclado, toque em ?123 e depois em =\\< para ver mais símbolos. Segurar algumas teclas mostra variações.",
          "**iPhone:** toque em 123 e depois em #+=. Segurar teclas como o hífen ou o ponto mostra outras opções.",
        ],
        outro: ["Os teclados têm só os símbolos mais comuns. Os mais diferentes, como ꧁ ꧂ e 亗, é mais fácil copiar desta página."],
      },
      {
        heading: "Compatibilidade",
        paragraphs: [
          "Símbolos comuns como ★, ♡ e • aparecem em praticamente todos os aparelhos. Caracteres mais raros, como ꧁ ꧂ ou ⛧, podem virar quadradinhos em sistemas antigos. Alguns símbolos, como ❤, ☁ e os signos, podem aparecer coloridos como emoji, dependendo do app. Entenda em [por que as letras diferentes viram quadradinhos](/blog/letras-diferentes-quadradinhos-unicode).",
        ],
      },
    ],
    faqs: [
      {
        question: "Como copio um símbolo no celular?",
        answer:
          "Basta tocar no símbolo: ele é copiado automaticamente e aparece a confirmação “Copiado!”. Depois, pressione o campo de texto no app desejado e escolha “Colar”.",
      },
      {
        question: "Quais símbolos usar no nick do Free Fire?",
        answer:
          "Os mais usados são 亗, 乂, ×͜×, 么, 〆, ★ e as molduras ꧁ ꧂. Use um símbolo de cada lado e um nome curto, porque o nick tem limite de caracteres e cada símbolo conta.",
      },
      {
        question: "Os símbolos funcionam no Instagram?",
        answer:
          "Sim. Funcionam no nome do perfil, na bio, nas legendas e nos comentários. Só o nome de usuário (o @) não aceita símbolos.",
      },
      {
        question: "Como fazer o símbolo de coração no teclado?",
        answer:
          "No celular, o mais fácil é copiar o ♡ desta página. No Windows, segurar Alt e digitar 3 no teclado numérico também gera um ♥.",
      },
      {
        question: "Por que um símbolo virou emoji colorido?",
        answer:
          "Alguns caracteres, como ❤ e ☁, têm uma versão em emoji. O app pode escolher mostrar essa versão colorida em vez do símbolo simples.",
      },
      {
        question: "Posso usar 亗 e 乂 no nick?",
        answer:
          "Na maioria dos jogos e redes sociais, sim, porque são caracteres Unicode comuns. Ainda assim, cada plataforma tem suas regras, então teste antes de confirmar uma troca de nome.",
      },
    ],
    related: ["nome-invisivel", "letras-bonitas", "nome-personalizado", "letras-para-free-fire", "nomes-para-discord", "letras-goticas"],
    relatedPosts: ["frases-de-natal-e-ano-novo", "nomes-para-grupo-de-whatsapp"],
  },
];

export function getStylePage(slug: string): StylePage | undefined {
  return stylePages.find((p) => p.slug === slug);
}

/** A page linked from the menu, footer, homepage, 404 and sitemap. */
export interface NavPage {
  slug: string;
  navLabel: string;
  description: string;
}

/** Pages with their own route (not generated from `stylePages`). */
export const tattooPage: NavPage = {
  slug: "letras-para-tatuagem",
  navLabel: "Letras para tatuagem",
  description: "Fontes para tatuagem com prévia em tom de pele: gótica, cursiva, caligrafia e mais.",
};

export const invisiblePage: NavPage = {
  slug: "nome-invisivel",
  navLabel: "Nome invisível",
  description: "Copie o espaço invisível (Hangul Filler) e deixe seu nick em branco no Free Fire, WhatsApp e Instagram.",
};

export const nickPage: NavPage = {
  slug: "gerador-de-nick",
  navLabel: "Gerador de nick",
  description: "Nicks com letras diferentes e símbolos para Free Fire, PUBG, Roblox e Instagram: masculino, feminino, clã e fofo.",
};

export const femNickPage: NavPage = {
  slug: "nomes-para-free-fire-feminino",
  navLabel: "Nomes para Free Fire feminino",
  description: "Mais de 100 nicks femininos para Free Fire: fofos, com símbolos, aesthetic, curtos e poderosos, com gerador.",
};

export const mascNickPage: NavPage = {
  slug: "nomes-para-free-fire-masculino",
  navLabel: "Nomes para Free Fire masculino",
  description: "Mais de 100 nicks masculinos para Free Fire: brabos, com símbolos, dark, curtos e em inglês, com gerador.",
};

export const whatsappPage: NavPage = {
  slug: "letras-para-whatsapp",
  navLabel: "Letras para WhatsApp",
  description: "Fontes diferentes e formatação do WhatsApp (negrito, itálico, tachado) para mensagens, nome, recado e status.",
};

export const tiktokPage: NavPage = {
  slug: "letras-para-tiktok",
  navLabel: "Letras para TikTok",
  description: "Fontes diferentes e aesthetic para nome, bio e comentários do TikTok, com contador de caracteres e sugestões de @.",
};

export const discordPage: NavPage = {
  slug: "nomes-para-discord",
  navLabel: "Nomes para Discord",
  description: "Mais de 100 nomes para Discord com letras diferentes: aesthetic, gamer, dark e fofos, nomes para servidor e canais, com gerador.",
};

export const alphabetPage: NavPage = {
  slug: "alfabeto-de-letras-diferentes",
  navLabel: "Alfabeto de letras diferentes",
  description: "O alfabeto de A a Z em 29 estilos: cursivo, gótico, negrito, bolha e de cabeça para baixo. Toque na letra e copie.",
};

/** Every style/guide page, in menu order. */
export const navPages: NavPage[] = (() => {
  const pages = stylePages.map((p) => ({ slug: p.slug, navLabel: p.navLabel, description: p.metaDescription }));
  const afterGothic = pages.findIndex((p) => p.slug === "letras-goticas") + 1;
  pages.splice(afterGothic, 0, tattooPage);
  const afterSmall = pages.findIndex((p) => p.slug === "letras-pequenas") + 1;
  pages.splice(afterSmall, 0, alphabetPage);
  const afterInstagram = pages.findIndex((p) => p.slug === "letras-para-instagram") + 1;
  pages.splice(afterInstagram, 0, whatsappPage, tiktokPage);
  const afterFreeFire = pages.findIndex((p) => p.slug === "letras-para-free-fire") + 1;
  pages.splice(afterFreeFire, 0, nickPage, femNickPage, mascNickPage, discordPage, invisiblePage);
  return pages;
})();

export function getNavPage(slug: string): NavPage | undefined {
  return navPages.find((p) => p.slug === slug);
}
