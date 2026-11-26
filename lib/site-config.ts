/**
 * Public site configuration. No secrets live here — this file is bundled
 * into the site. Edit these values before launch (see README → "Antes de
 * publicar").
 */
export const siteConfig = {
  name: "Letras Diferentes",
  /**
   * Canonical domain, without a trailing slash. In Vercel, add both
   * diferentesletras.com and www.diferentesletras.com and redirect www here.
   */
  url: "https://diferentesletras.com",
  /** Google Search Console ownership verification codes (public by design). Keep old ones: removing a code can unverify that property. */
  googleSiteVerification: ["sG3CUbiVbemCYQr_PXKtX8J7l2O7fILdFwayOLwdEpg", "6KFSSqow__XhhAAaVUt7R3odFtEDIk5uZ6EmzvY66kc"],
  locale: "pt_BR",
  language: "pt-BR",
  description:
    "Gerador de letras diferentes para copiar e colar: digite seu texto e copie em dezenas de estilos para Instagram, Free Fire, WhatsApp, TikTok e Discord.",
  /**
   * The site's social profiles: shown as icons in the footer and listed in the
   * Organization schema (sameAs). Leave a URL empty ("") to hide that icon.
   */
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/letrasdiferentes2026/",
    tiktok: "",
    pinterest: "https://www.pinterest.com/letrasdiferentes2026/",
    youtube: "",
    x: "",
  },
  /** Contact email shown on /contato, /sobre-nos and the legal pages. */
  contactEmail: "alyihemd1999@gmail.com",
  /**
   * Optional cookie categories. Keep both `false` unless a real service is
   * configured. When `true`, the category appears in the cookie settings and
   * scripts wrapped in <ConsentGate category="..."> load only after consent.
   */
  cookieCategories: {
    analytics: false,
    marketing: false,
  },
  /** Bump when the cookie policy changes to ask visitors for consent again. */
  cookieConsentVersion: 1,
} as const;

export const mainNav = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-nos", label: "Sobre nós" },
  { href: "/perguntas-frequentes", label: "Perguntas frequentes" },
] as const;

export const legalNav = [
  { href: "/sobre-nos", label: "Sobre nós" },
  { href: "/contato", label: "Contato" },
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/termos-de-uso", label: "Termos de uso" },
  { href: "/politica-de-cookies", label: "Política de cookies" },
  { href: "/aviso-legal", label: "Aviso legal" },
] as const;

/** Date shown on legal pages. Update when their content changes. */
export const legalLastUpdated = "23 de novembro de 2026";
