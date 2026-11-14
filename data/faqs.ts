import type { FaqItem } from "@/types";

/** FAQs shown on the homepage (focused on the main tool). */
export const homeFaqs: FaqItem[] = [
  {
    question: "O que são letras diferentes?",
    answer:
      "Letras diferentes são caracteres especiais do padrão Unicode que imitam estilos como cursiva, negrito, gótica ou bolhas. Elas não são fontes: cada letra estilizada é um símbolo próprio, por isso essas diferentes letras mantêm o visual quando você copia e cola em outro app, desde que o aparelho consiga exibir os caracteres.",
  },
  {
    question: "Como usar o gerador de letras diferentes?",
    answer:
      "Digite seu texto na caixa no topo da página. Os estilos aparecem na hora logo abaixo. Toque em “Copiar” no estilo que quiser e cole no app de destino, como Instagram, WhatsApp ou o seu jogo.",
  },
  {
    question: "As letras diferentes são fontes?",
    answer:
      "Não. São caracteres Unicode que se parecem com letras estilizadas. Por isso dá para copiar e colar em outros apps sem instalar nada — e também por isso alguns aparelhos podem não exibir todos os estilos.",
  },
  {
    question: "O gerador é gratuito?",
    answer: "Sim. O gerador é gratuito, não exige cadastro e não tem limite de uso.",
  },
  {
    question: "Meu texto fica salvo ou é enviado para algum lugar?",
    answer:
      "Não. A conversão acontece no seu próprio navegador. O texto que você digita não é enviado para nenhum servidor e não fica salvo quando você fecha a página.",
  },
  {
    question: "Funciona com acentos e ç?",
    answer:
      "Sim, e os acentos nunca somem. Como o Unicode não tem versões estilizadas de letras acentuadas, por padrão “ã”, “é”, “ç” e similares ficam na forma normal, o que garante que apareçam certos em qualquer aparelho. Se quiser tudo estilizado, marque “Estilizar também as letras com acento”: a letra é estilizada e o acento é encaixado sobre ela, mas em alguns aparelhos (como no Windows) ele pode aparecer ao lado da letra.",
  },
  {
    question: "Por que aparecem quadradinhos ou pontos de interrogação?",
    answer:
      "Isso acontece quando o aparelho ou o app não tem desenho para aquele caractere. Tente outro estilo — negrito, versalete e cursiva costumam ser os mais compatíveis.",
  },
];

/** Additional questions only on /perguntas-frequentes. */
export const extraFaqs: { group: string; items: FaqItem[] }[] = [
  {
    group: "Compatibilidade",
    items: [
      {
        question: "Em quais apps posso colar as letras diferentes?",
        answer:
          "Na maioria dos apps que aceitam texto: Instagram (bio, nome, legendas), TikTok, WhatsApp, Facebook, X, Discord, Telegram e muitos jogos. Campos de nome de usuário (como o @) costumam aceitar só letras comuns, números e alguns sinais.",
      },
      {
        question: "Por que o estilo aparece em um celular e não em outro?",
        answer:
          "A aparência depende das fontes instaladas em cada aparelho. Sistemas mais novos têm desenho para mais caracteres Unicode; aparelhos antigos podem mostrar quadradinhos em estilos menos comuns.",
      },
      {
        question: "As letras diferentes funcionam no computador?",
        answer:
          "Sim. Funcionam em navegadores atuais no Windows, macOS e Linux. O botão “Copiar” copia o texto para a área de transferência e você cola com Ctrl+V (ou Cmd+V no Mac).",
      },
      {
        question: "Posso usar as letras em documentos do Word ou Google Docs?",
        answer:
          "Até pode, mas não é o ideal. Os caracteres são símbolos, então a correção ortográfica, a busca e os leitores de tela não os tratam como texto normal. Nesses editores, prefira mudar a fonte de verdade.",
      },
    ],
  },
  {
    group: "Acessibilidade e uso responsável",
    items: [
      {
        question: "Letras diferentes atrapalham pessoas com deficiência visual?",
        answer:
          "Podem atrapalhar. Leitores de tela costumam ler cada caractere estilizado pelo nome técnico (por exemplo, “letra matemática negrito A”) ou pular o texto. Use estilos como enfeite e mantenha as informações importantes em texto comum.",
      },
      {
        question: "As letras diferentes ajudam meu perfil a aparecer na busca?",
        answer:
          "Não. Buscas costumam reconhecer apenas letras comuns. Um nome escrito só com letras estilizadas pode ficar mais difícil de encontrar.",
      },
      {
        question: "Existe algum uso proibido?",
        answer:
          "Não use os caracteres para se passar por outra pessoa ou marca, enganar, enviar spam ou burlar regras de plataformas. Veja os nossos Termos de uso.",
      },
    ],
  },
  {
    group: "Sobre o site",
    items: [
      {
        question: "O site é ligado ao Instagram, Free Fire ou outra plataforma?",
        answer:
          "Não. O Letras Diferentes é independente e não tem vínculo com Instagram, Meta, Garena, Free Fire, TikTok, WhatsApp, Discord ou qualquer outra empresa.",
      },
      {
        question: "Preciso de internet para usar o gerador?",
        answer:
          "Só para abrir a página. Depois que ela carrega, a conversão funciona no seu navegador, mesmo que a conexão caia.",
      },
      {
        question: "Como sugerir um novo estilo ou relatar um erro?",
        answer: "Fale com a gente pela página de contato. Toda sugestão é bem-vinda.",
      },
    ],
  },
];
