/**
 * Groups for the /estilos-de-letras hub. Every page in `navPages` must be in
 * exactly one group (checked by data/hub.test.ts), so new pages can't be left
 * off the hub. `example` is a style id from lib/fonts used for the preview.
 */
export interface HubItem {
  slug: string;
  example: string;
  sample: string;
}

export interface HubGroup {
  id: string;
  heading: string;
  intro: string;
  items: HubItem[];
}

export const HUB_SLUG = "estilos-de-letras";

export const hubGroups: HubGroup[] = [
  {
    id: "por-estilo",
    heading: "Estilos de letras por tipo",
    intro: "Cada página mostra só os estilos daquele tipo, com exemplos prontos para copiar e dicas de onde usar.",
    items: [
      { slug: "letras-cursivas", example: "cursiva-negrito", sample: "Letras cursivas" },
      { slug: "letras-bonitas", example: "coracoes", sample: "Letras bonitas" },
      { slug: "fontes-de-letras-estilosas", example: "moldura-estrelas", sample: "Estilosas" },
      { slug: "letras-goticas", example: "gotica-negrito", sample: "Letras góticas" },
      { slug: "letras-pequenas", example: "versalete", sample: "Letras pequenas" },
      { slug: "letras-riscadas", example: "riscado", sample: "Letras riscadas" },
      { slug: "letras-para-tatuagem", example: "cursiva", sample: "Tatuagem" },
      { slug: "simbolos", example: "estrelas", sample: "Símbolos" },
    ],
  },
  {
    id: "por-plataforma",
    heading: "Letras para redes sociais e jogos",
    intro: "Cada app tem suas regras: limite de caracteres, campos que aceitam letras diferentes e campos que não aceitam. Estas páginas explicam tudo.",
    items: [
      { slug: "letras-para-instagram", example: "cursiva", sample: "Instagram" },
      { slug: "letras-para-whatsapp", example: "negrito", sample: "WhatsApp" },
      { slug: "letras-para-tiktok", example: "negrito-sem-serifa", sample: "TikTok" },
      { slug: "letras-para-free-fire", example: "simbolo-oriental", sample: "Free Fire" },
    ],
  },
  {
    id: "nome-e-nick",
    heading: "Ferramentas para nome e nick",
    intro: "Para montar um nome inteiro, não só trocar a letra: com símbolos, espaços invisíveis e ideias prontas.",
    items: [
      { slug: "nome-personalizado", example: "moldura-classica", sample: "Seu nome" },
      { slug: "gerador-de-nick", example: "japones", sample: "Nick" },
      { slug: "nomes-para-free-fire-feminino", example: "coracoes", sample: "Luna" },
      { slug: "nomes-para-free-fire-masculino", example: "gotica-negrito", sample: "Lobo" },
      { slug: "nome-invisivel", example: "espacado", sample: "invisível" },
    ],
  },
];
