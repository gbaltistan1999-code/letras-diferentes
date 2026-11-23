import { hubGroups } from "@/data/hub";
import { getNavPage } from "@/data/style-pages";

export interface NavGroup {
  id: string;
  heading: string;
  links: { href: string; label: string }[];
}

const SHORT_HEADINGS: Record<string, string> = {
  "por-estilo": "Por estilo",
  "por-plataforma": "Redes sociais e jogos",
  "nome-e-nick": "Nomes e nicks",
};

/**
 * Style pages grouped like the /estilos-de-letras hub, for the header menu and
 * the footer. Every nav page is in a hub group (checked by data/hub.test.ts).
 */
export const navGroups: NavGroup[] = hubGroups.map((g) => ({
  id: g.id,
  heading: SHORT_HEADINGS[g.id] ?? g.heading,
  links: g.items.map((i) => ({ href: `/${i.slug}`, label: getNavPage(i.slug)?.navLabel ?? i.slug })),
}));
