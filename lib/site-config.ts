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
  /** Google Search Console ownership verification (public by design). */
  googleSiteVerification: "sG3CUbiVbemCYQr_PXKtX8J7l2O7fILdFwayOLwdEpg",
  locale: "pt_BR",
  language: "pt-BR",
  description:
    "Gerador de letras diferentes para copiar e colar: digite seu texto e copie em dezenas de estilos para Instagram, Free Fire, WhatsApp, TikTok e Discord.",
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
export const legalLastUpdated = "14 de novembro de 2026";
