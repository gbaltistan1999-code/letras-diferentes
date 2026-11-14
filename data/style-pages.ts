import type { StylePage } from "@/types";

/**
 * Content for the dedicated style / use-case pages. Each page targets its own
 * search intent (see docs/keyword-map.md) — avoid copying text between pages.
 *
 * Note: "nick para Free Fire" is intentionally merged into
 * /letras-para-free-fire (same intent; two pages would compete).
 */
export const stylePages: StylePage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "letras-cursivas",
    navLabel: "Letras cursivas",
    metaTitle: "Letras Cursivas para Copiar e Colar (Gerador Online)",
    metaDescription:
      "Gere letras cursivas para copiar e colar: estilo manuscrito, cursiva em negrito e itálico. Funciona com acentos e ç. Grátis, sem cadastro.",
    h1: "Letras cursivas para copiar e colar",
    intro:
      "Digite seu texto e veja-o na hora em letra cursiva, cursiva em negrito e itálico. As letras cursivas lembram a escrita à mão e combinam com nomes, bios e mensagens mais delicadas.",
    generator: { categories: ["cursivas"], sampleText: "Letras cursivas" },
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
          "Diferente de uma fonte instalada no computador, esses caracteres viajam junto com o texto. Por isso, quando você cola em outro app, a aparência cursiva continua — desde que o aparelho de quem lê tenha símbolos para exibi-los.",
        ],
      },
      {
        heading: "Qual estilo cursivo escolher?",
        list: [
          "Cursiva: traço fino e elegante, bom para nomes e frases curtas.",
          "Cursiva em negrito: mais legível em telas pequenas e em fundos escuros, como nos stories.",
          "Itálico serifado e itálico sem serifa: inclinados, porém mais discretos — úteis para destacar uma palavra no meio de um texto normal.",
        ],
        paragraphs: [
          "Dica: a cursiva fina pode ficar difícil de ler em tamanhos pequenos. Para textos longos, prefira a versão em negrito ou use a cursiva só no nome ou na primeira linha.",
        ],
      },
      {
        heading: "Acentos e ç nas letras cursivas",
        paragraphs: [
          "O Unicode não tem versões cursivas de “ã”, “é” ou “ç”. Por padrão, o gerador deixa essas letras na forma normal e escreve o resto da palavra em cursiva — assim a acentuação aparece certa em qualquer aparelho. Se preferir a palavra inteira em cursiva, marque “Estilizar também as letras com acento”: o gerador usa a letra cursiva e encaixa o acento por cima, mas em algumas fontes (como as do Windows) ele pode aparecer ao lado da letra.",
        ],
      },
      {
        heading: "Onde a cursiva pode não funcionar?",
        paragraphs: [
          "Campos de usuário (o @ do Instagram ou do TikTok, por exemplo) aceitam apenas letras comuns, números e alguns sinais, então as cursivas não são aceitas ali. Também há aparelhos antigos que mostram quadradinhos no lugar de algumas letras. Teste antes de usar em algo importante.",
        ],
      },
    ],
    faqs: [
      {
        question: "As letras cursivas funcionam no WhatsApp?",
        answer:
          "Sim, na maioria dos celulares atuais. Você pode colar no nome, no recado e nas mensagens. Se a outra pessoa usar um aparelho muito antigo, ela pode ver quadradinhos no lugar de algumas letras.",
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
    related: ["letras-bonitas", "letras-para-instagram", "letras-goticas"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-bonitas",
    navLabel: "Letras bonitas",
    metaTitle: "Letras Bonitas e Estilosas para Copiar e Colar",
    metaDescription:
      "Letras bonitas e estilosas com molduras, corações e estrelas para bio, nome e mensagens. Copie e cole com um toque. Gratuito e funciona no celular.",
    h1: "Letras bonitas e estilosas para copiar",
    intro:
      "Uma seleção de estilos pensada para enfeitar: letras com molduras, corações, estrelas e combinações delicadas para usar em bios, legendas, nomes e mensagens especiais.",
    generator: {
      styleIds: [
        "moldura-classica", "coracoes", "estrelas", "japones", "flechas",
        "cursiva-negrito", "cursiva", "versalete", "estilo-grego", "bolhas", "contorno", "simbolo-oriental",
      ],
      sampleText: "Letras bonitas",
    },
    examples: [
      { styleId: "coracoes", text: "Te amo" },
      { styleId: "estrelas", text: "Brilhe sempre" },
      { styleId: "japones", text: "Bom dia" },
      { styleId: "moldura-classica", text: "Princesa" },
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
        heading: "Ideias de uso",
        list: [
          "Primeira linha da bio, com o seu nome ou apelido.",
          "Mensagens de aniversário, Dia dos Namorados ou bom dia.",
          "Títulos de destaques e legendas curtas.",
          "Nome em grupos de WhatsApp e servidores do Discord.",
        ],
      },
      {
        heading: "Como deixar o resultado mais legível?",
        steps: [
          "Use o estilo decorado em poucas palavras — o nome ou uma frase curta.",
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
        question: "Qual a diferença entre esta página e o gerador da página inicial?",
        answer:
          "A página inicial mostra todos os estilos disponíveis. Aqui ficam só as combinações decorativas — com molduras, corações e estrelas — para quem quer um resultado mais enfeitado sem procurar entre dezenas de opções.",
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
    related: ["letras-cursivas", "simbolos", "letras-para-instagram"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-goticas",
    navLabel: "Letras góticas",
    metaTitle: "Letras Góticas para Copiar e Colar (Fraktur)",
    metaDescription:
      "Gerador de letras góticas para copiar e colar, nas versões normal e em negrito. Ideal para nicks, tatuagens de referência e títulos. Grátis.",
    h1: "Letras góticas para copiar e colar",
    intro:
      "Transforme seu texto em letra gótica — também chamada de fraktur ou letra medieval — e copie com um toque. Há a versão tradicional e uma versão em negrito, mais marcante.",
    generator: {
      styleIds: ["gotica", "gotica-negrito", "simbolo-oriental", "contorno", "negrito"],
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
        heading: "Gótica normal ou em negrito?",
        list: [
          "Gótica: traço mais fino, parece mais clássica e fica bem em frases curtas.",
          "Gótica em negrito: mais pesada e legível em tamanhos pequenos, boa para nicks e títulos.",
        ],
      },
      {
        heading: "Letras que costumam confundir",
        paragraphs: [
          "Na fraktur, algumas maiúsculas são bem diferentes das letras atuais: o 𝔄 parece um “U”, o ℑ lembra um “J” e o ℭ, o ℌ, o ℜ e o ℨ vêm de um bloco Unicode mais antigo. Se a legibilidade for importante, use a gótica só em letras minúsculas ou em palavras curtas e conhecidas.",
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
        question: "Letra gótica é a mesma coisa que letra medieval?",
        answer:
          "No uso popular, sim. “Gótica”, “medieval”, “fraktur” e “blackletter” costumam se referir ao mesmo estilo de escrita com traços quebrados e angulosos.",
      },
      {
        question: "Posso usar letras góticas no nick do jogo?",
        answer:
          "Depende do jogo. Muitos aceitam símbolos Unicode no nome, mas alguns recusam certos caracteres ou contam cada símbolo como mais de um caractere. Teste no campo do jogo antes de confirmar uma troca paga.",
      },
      {
        question: "Por que as letras com acento não ficam góticas?",
        answer:
          "Não existem letras góticas acentuadas no Unicode. Por isso, por padrão, letras como “ã” e “é” ficam na forma normal, para aparecerem certas em qualquer aparelho. Se quiser, marque “Estilizar também as letras com acento”: a letra vira gótica e o acento é encaixado sobre ela, mas algumas fontes o posicionam fora do lugar.",
      },
    ],
    related: ["letras-para-free-fire", "simbolos", "letras-cursivas"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-pequenas",
    navLabel: "Letras pequenas",
    metaTitle: "Letras Pequenas para Copiar e Colar (ᴠᴇʀsᴀʟᴇᴛᴇ e ˢᵒᵇʳᵉˢᶜʳⁱᵗᵒ)",
    metaDescription:
      "Gere letras pequenas para copiar e colar: versalete (ᴀʙᴄ), sobrescrito (ᵃᵇᶜ) e subscrito. Ótimo para bios e nicks discretos. Grátis.",
    h1: "Letras pequenas para copiar e colar",
    intro:
      "Escreva com letras pequenas em três formatos: versalete (maiúsculas em tamanho reduzido), sobrescrito (letrinhas no alto da linha) e subscrito (letrinhas na parte de baixo).",
    generator: { categories: ["pequenas"], sampleText: "Letras pequenas" },
    examples: [
      { styleId: "versalete", text: "Menos é mais" },
      { styleId: "sobrescrito", text: "oi sumida" },
      { styleId: "estrelas", text: "Sonhadora" },
      { styleId: "versalete", text: "São Paulo, Brasil" },
    ],
    sections: [
      {
        heading: "Os três tipos de letras pequenas",
        list: [
          "Versalete (ᴀʙᴄ): letras com formato de maiúscula e altura de minúscula. É o estilo pequeno mais legível e o mais usado em bios.",
          "Sobrescrito (ᵃᵇᶜ): letrinhas elevadas, como as usadas em notas e expoentes. Bom para comentários curtos e “sussurros” no texto.",
          "Subscrito (ₐₑₒ): letrinhas abaixo da linha. O Unicode só tem algumas letras nesse formato, por isso as demais continuam normais.",
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
    related: ["letras-para-instagram", "letras-bonitas", "simbolos"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-para-instagram",
    navLabel: "Letras para Instagram",
    metaTitle: "Letras para Instagram: Bio, Nome e Legendas",
    metaDescription:
      "Letras diferentes para Instagram: copie e cole na bio, no nome e nas legendas. Veja onde funcionam, o passo a passo e os limites do app.",
    h1: "Letras para Instagram: bio, nome e legendas",
    intro:
      "Gere letras diferentes para deixar sua bio, seu nome de perfil e suas legendas com mais personalidade. Abaixo você também encontra o passo a passo para colar no Instagram e o que o app aceita ou não.",
    generator: {
      styleIds: [
        "negrito-sem-serifa", "cursiva-negrito", "cursiva", "versalete", "italico-sem-serifa",
        "contorno", "estrelas", "coracoes", "japones", "riscado", "monoespacada", "bolhas",
      ],
      sampleText: "Minha bio no Instagram",
    },
    examples: [
      { styleId: "negrito-sem-serifa", text: "Fotógrafa | Rio de Janeiro" },
      { styleId: "cursiva-negrito", text: "Juliana Souza" },
      { styleId: "versalete", text: "Link na bio" },
      { styleId: "estrelas", text: "Novidades toda semana" },
    ],
    sections: [
      {
        heading: "Onde as letras diferentes funcionam no Instagram?",
        list: [
          "Bio: aceita letras estilizadas e símbolos. É o lugar mais comum para usar.",
          "Nome (o nome exibido acima da bio): costuma aceitar letras estilizadas.",
          "Legendas, comentários, Direct e stories: aceitam normalmente.",
          "Nome de usuário (@): não aceita. O Instagram permite apenas letras comuns, números, ponto e sublinhado.",
        ],
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
          "A bio do Instagram tem limite de 150 caracteres. Alguns símbolos estilizados podem ocupar mais espaço do que uma letra comum na contagem, então uma frase que cabia em texto normal pode ficar grande demais depois de estilizada.",
          "Letras estilizadas não são reconhecidas pela busca como palavras normais. Se você quer ser encontrado pelo nome ou pela profissão, mantenha essas palavras também em texto comum.",
          "Leitores de tela podem ler letras estilizadas de forma confusa. Use os estilos como enfeite, não para a informação principal.",
        ],
      },
      {
        heading: "Combinações que costumam ficar boas",
        list: [
          "Nome em cursiva negrito e o restante da bio em texto normal.",
          "Títulos curtos em versalete, como “ᴄᴏɴᴛᴀᴛᴏ” ou “ʟɪɴᴋ ɴᴀ ʙɪᴏ”.",
          "Um símbolo simples (★, ♡, ➳) no início de cada linha para organizar a bio.",
        ],
      },
    ],
    faqs: [
      {
        question: "Por que não consigo colocar letras diferentes no meu @?",
        answer:
          "O nome de usuário do Instagram aceita apenas letras comuns, números, ponto e sublinhado. As letras estilizadas são outros caracteres Unicode, por isso são recusadas nesse campo. Use-as no nome exibido e na bio.",
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
    related: ["letras-bonitas", "letras-pequenas", "letras-cursivas"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-para-free-fire",
    navLabel: "Letras para Free Fire",
    metaTitle: "Letras para Free Fire: Nick com Letras Diferentes",
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
    related: ["simbolos", "letras-goticas", "letras-pequenas"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "letras-riscadas",
    navLabel: "Letras riscadas",
    metaTitle: "Letras Riscadas e Sublinhadas para Copiar",
    metaDescription:
      "Gere texto riscado (t̶a̶c̶h̶a̶d̶o̶), sublinhado, sublinhado duplo e com linha em cima para copiar e colar em qualquer app. Grátis.",
    h1: "Letras riscadas e sublinhadas para copiar",
    intro:
      "Escreva um texto riscado, cortado, sublinhado ou com linha em cima e cole onde quiser — inclusive em apps que não têm botão de formatação.",
    generator: { categories: ["riscadas"], sampleText: "Texto riscado" },
    examples: [
      { styleId: "riscado", text: "segunda-feira" },
      { styleId: "sublinhado", text: "importante" },
      { styleId: "riscado-barra", text: "dieta" },
      { styleId: "sublinhado-duplo", text: "Promoção" },
    ],
    sections: [
      {
        heading: "Como o texto riscado funciona?",
        paragraphs: [
          "Estes estilos não trocam as letras. Eles adicionam, depois de cada letra, um sinal combinável do Unicode: uma linha no meio (U+0336), uma barra (U+0338), uma linha embaixo (U+0332) ou em cima (U+0305). O aparelho desenha esse sinal sobre a letra anterior.",
          "Por isso o texto continua legível e os acentos são mantidos. A desvantagem é que a linha pode ficar com pequenas falhas entre as letras, dependendo da fonte.",
        ],
      },
      {
        heading: "Usos comuns",
        list: [
          "Humor: riscar uma palavra e escrever outra ao lado (“estou de d̶i̶e̶t̶a̶ férias”).",
          "Listas de tarefas: marcar o que já foi feito.",
          "Preços: mostrar o valor antigo riscado ao lado do novo.",
          "Destaque: sublinhar uma palavra em apps sem formatação.",
        ],
      },
      {
        heading: "Alternativa nativa no WhatsApp",
        paragraphs: [
          "No WhatsApp você também pode riscar texto sem o gerador: escreva a palavra entre tis, assim: ~texto~. A diferença é que essa formatação só funciona dentro do WhatsApp, enquanto o texto deste gerador mantém o risco quando é colado em outros apps.",
        ],
      },
    ],
    faqs: [
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
    related: ["letras-pequenas", "letras-para-instagram", "letras-bonitas"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "simbolos",
    navLabel: "Símbolos para copiar",
    metaTitle: "Símbolos para Copiar e Colar: ★ ♡ ꧁꧂ 亗 e mais",
    metaDescription:
      "Símbolos para copiar e colar em nicks, bios e mensagens: estrelas, corações, molduras ꧁꧂, 亗, flechas e divisores. Um toque copia.",
    h1: "Símbolos para copiar e colar",
    intro:
      "Toque em qualquer símbolo para copiá-lo. Use em nicks de jogos, bios e mensagens, sozinhos ou junto com as letras diferentes do gerador logo abaixo.",
    generator: { categories: ["decorativas"], sampleText: "Seu nome" },
    examples: [],
    symbolGroups: [
      { title: "Estrelas e brilhos", symbols: ["★", "☆", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "⋆", "✶", "✷", "✸", "✹", "彡"] },
      { title: "Corações", symbols: ["♡", "♥", "❤", "❥", "❣", "ღ", "❦", "❧", "ɞ"] },
      { title: "Molduras e colchetes", symbols: ["꧁", "꧂", "༺", "༻", "『", "』", "「", "」", "【", "】", "《", "》", "〖", "〗", "⟦", "⟧"] },
      { title: "Para nicks e jogos", symbols: ["亗", "乂", "ツ", "么", "〆", "♛", "♚", "♔", "☠", "⚔", "✞", "⚡", "☯", "⛧", "ᴳᴼᴰ", "ᴮᴼˢˢ"] },
      { title: "Flechas", symbols: ["➳", "➵", "➸", "➼", "➽", "➤", "➜", "⇢", "⇝", "↠", "↬", "⟶"] },
      { title: "Flores e natureza", symbols: ["✿", "❀", "❁", "✾", "❃", "❋", "☘", "☼", "☾", "☽", "☁", "❄"] },
      { title: "Divisores e pontos", symbols: ["•", "◦", "°", "·", "∘", "⊹", "⋅", "‧", "─", "━", "┈", "⸻", "︵", "︶"] },
    ],
    sections: [
      {
        heading: "De onde vêm esses símbolos?",
        paragraphs: [
          "Todos os símbolos desta página são caracteres do padrão Unicode, o mesmo que permite escrever em qualquer idioma no celular. Alguns vêm de blocos de símbolos gráficos (como ★ e ♡), outros de escritas de outros idiomas — o 亗 e o 乂 são caracteres chineses e o ꧁ ꧂ vem do alfabeto javanês.",
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
        heading: "Compatibilidade",
        paragraphs: [
          "Símbolos comuns como ★, ♡ e • aparecem em praticamente todos os aparelhos. Caracteres mais raros, como ꧁ ꧂ ou ⛧, podem virar quadradinhos em sistemas antigos. Alguns símbolos, como ❤ e ☁, podem aparecer coloridos como emoji, dependendo do app.",
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
    related: ["letras-para-free-fire", "letras-bonitas", "letras-goticas"],
  },
];

export function getStylePage(slug: string): StylePage | undefined {
  return stylePages.find((p) => p.slug === slug);
}
