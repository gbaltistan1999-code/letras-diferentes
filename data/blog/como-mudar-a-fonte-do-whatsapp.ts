import { getStyle } from "@/lib/fonts";
import type { BlogPost } from "@/types";

/** Styled examples built in code, so editors can't break the Unicode letters. */
const t = (id: string, text: string) => getStyle(id).transform(text, { accents: "plain" });

export const comoMudarAFonteDoWhatsapp: BlogPost = {
  slug: "como-mudar-a-fonte-do-whatsapp",
  title: "Como mudar a fonte do WhatsApp (passo a passo completo)",
  metaTitle: "Como Mudar a Fonte do WhatsApp: Negrito, Itálico e Mais",
  description:
    "Aprenda como mudar a fonte do WhatsApp com negrito, itálico, riscado e monoespaçado, e como usar letras diferentes no status, no nome e nas conversas.",
  excerpt:
    "Negrito, itálico, riscado, monoespaçado, listas e letras diferentes: todas as formas de mudar a fonte do WhatsApp no Android, no iPhone e no WhatsApp Web.",
  datePublished: "2026-11-21",
  cover: {
    src: "/blog/como-mudar-a-fonte-do-whatsapp.png",
    alt: "Capa do artigo Como mudar a fonte do WhatsApp, com a palavra Negrito em letras diferentes",
  },
  relatedTool: { href: "/letras-para-whatsapp", label: "Gerar letras diferentes para o WhatsApp" },
  body: `
Quer deixar suas mensagens no WhatsApp mais bonitas ou destacar uma palavra importante? O WhatsApp não deixa trocar a fonte do app em si. Mesmo assim, você pode mudar o estilo do texto de várias formas: com os formatos nativos (negrito, itálico, riscado e monoespaçado) e com letras diferentes que você copia e cola.

Neste guia, você aprende todas as formas de mudar a fonte do WhatsApp, no Android, no iPhone e no WhatsApp Web.

![Celular com uma conversa do WhatsApp mostrando mensagens em negrito, itálico, riscado e letra cursiva](/blog/como-mudar-a-fonte-do-whatsapp-formatos.webp "Negrito, itálico e riscado são formatos do próprio WhatsApp. A letra cursiva vem de um gerador de letras diferentes.")

## Formatos nativos do WhatsApp

O WhatsApp tem alguns estilos de texto próprios. Para usar, basta colocar símbolos antes e depois da palavra, sem espaço entre o símbolo e o texto:

| Estilo | Como digitar | Resultado |
|---|---|---|
| Negrito | *texto* | ${t("negrito-sem-serifa", "texto")} |
| Itálico | _texto_ | ${t("italico-sem-serifa", "texto")} |
| Riscado | ~texto~ | ${t("riscado", "texto")} |
| Monoespaçado | \`\`\`texto\`\`\` | ${t("monoespacada", "texto")} |

Exemplos:

- *Bom dia!* vira ${t("negrito-sem-serifa", "Bom dia!")}
- _Saudades_ vira ${t("italico-sem-serifa", "Saudades")}
- ~Hoje não~ vira ${t("riscado", "Hoje não")}

> **Dica:** você pode combinar estilos. Por exemplo, *_texto_* fica em negrito e itálico ao mesmo tempo.

## Outros formatos do WhatsApp: listas, citação e código

O WhatsApp também aceita formatos para organizar melhor as mensagens:

- **Lista com marcadores:** comece a linha com * ou - seguido de espaço.
- **Lista numerada:** comece a linha com 1. seguido de espaço.
- **Citação:** comece a linha com > seguido de espaço.
- **Código em linha:** coloque o texto entre crases simples, assim: \`texto\`.

Esses formatos são ótimos para listas de compras, avisos em grupos e recados organizados.

## Como formatar sem digitar símbolos

Não quer decorar os símbolos? Dá para formatar pelo menu do próprio WhatsApp.

### No Android

1. Digite sua mensagem.
2. Toque e segure na palavra que quer formatar.
3. Toque nos três pontinhos (⋮) do menu que aparece.
4. Escolha negrito, itálico, riscado ou monoespaçado.

### No iPhone

1. Digite sua mensagem.
2. Toque duas vezes na palavra para selecionar.
3. Toque em **Formatar** (ou no ícone **BIU**).
4. Escolha o estilo que quiser.

## Como usar letras diferentes no WhatsApp

Os formatos nativos são limitados. Se você quer letras cursivas, góticas, com bolhas ou estilos aesthetic, use letras diferentes. Elas são caracteres especiais (Unicode) que você copia e cola em qualquer lugar do WhatsApp.

Veja alguns exemplos:

- **Cursiva:** ${t("cursiva-negrito", "Bom dia")}
- **Negrito:** ${t("negrito-sem-serifa", "Bom dia")}
- **Gótica:** ${t("gotica-negrito", "Bom dia")}
- **Versalete:** ${t("versalete", "Bom dia")}
- **Bolhas:** ${t("bolhas", "Bom dia")}
- **Aesthetic:** ${t("largura-total", "Bom dia")}

Como fazer:

1. Abra o nosso [gerador de letras diferentes](/).
2. Digite seu texto.
3. Toque em **Copiar** no estilo que mais gostar.
4. Cole no WhatsApp: na conversa, no status, no nome ou no recado.

Diferente dos formatos nativos, as letras diferentes continuam com o mesmo estilo quando você cola o texto em outro app, como o Instagram ou o TikTok. E funcionam também no nome e no recado, onde os símbolos de negrito e itálico não funcionam.

## Onde usar letras diferentes no WhatsApp

- **Nome do perfil:** deixe seu nome mais estiloso, como ${t("cursiva-negrito", "Alex")} ♡.
- **Recado (Sobre):** use uma frase curta com letras bonitas.
- **Status:** destaque frases e legendas. Veja nossas [frases para status do WhatsApp](/blog/frases-para-status-do-whatsapp).
- **Nome de grupo:** crie nomes que chamam atenção. Veja nossas [ideias de nomes para grupo de WhatsApp](/blog/nomes-para-grupo-de-whatsapp).
- **Conversas:** destaque uma palavra ou mande um bom dia diferente.

## Como mudar o tamanho da fonte do WhatsApp

Se o que você quer é deixar as letras maiores ou menores, isso é outra configuração.

### No Android

1. Abra o WhatsApp.
2. Toque nos três pontinhos (⋮) e vá em **Configurações**.
3. Toque em **Conversas**.
4. Toque em **Tamanho da fonte** e escolha pequeno, médio ou grande.

### No iPhone

O WhatsApp segue o tamanho de texto do sistema. Vá em **Ajustes > Tela e Brilho > Tamanho do Texto** e arraste a barra.

## Dá para mudar a fonte do WhatsApp com aplicativo?

Existem apps de teclado e de fontes que prometem mudar a letra do WhatsApp. Na prática, quase todos fazem o mesmo que um gerador de letras: usam caracteres Unicode. A diferença é que muitos pedem permissões, mostram anúncios ou podem ler o que você digita.

Por isso, a opção mais simples e segura é usar um gerador online, que funciona no navegador, sem instalar nada.

## Perguntas frequentes

### É possível mudar a fonte do WhatsApp de verdade?

Não dá para trocar a fonte padrão do app. Mas você pode usar os formatos nativos (negrito, itálico, riscado e monoespaçado) e letras diferentes copiadas de um gerador.

### Por que as letras diferentes aparecem como quadradinhos?

Alguns celulares mais antigos não têm todos os caracteres Unicode. Se isso acontecer, use um estilo mais simples. Entenda melhor no nosso post: [por que as letras diferentes viram quadradinhos](/blog/letras-diferentes-quadradinhos-unicode).

### O negrito do WhatsApp funciona no Instagram?

Não. Os símbolos * e _ só funcionam no WhatsApp. Para usar negrito no Instagram, copie letras em negrito do nosso [gerador](/).

### Letras diferentes funcionam no WhatsApp Web?

Sim. Basta copiar e colar no WhatsApp Web ou no app para computador.

### Posso usar letras diferentes no nome do WhatsApp?

Sim. Vá em **Configurações**, toque no seu nome e cole o texto estilizado.

## Conclusão

Agora você sabe todas as formas de mudar a fonte do WhatsApp: os formatos nativos para destacar palavras rapidinho, o menu de formatação para quem não quer decorar símbolos, e as letras diferentes para deixar o nome, o status e as mensagens com outra cara.

👉 Experimente agora: [gerar letras diferentes para o WhatsApp](/letras-para-whatsapp).
`,
};
