import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SiteNav } from "@/components/SiteNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { hubGroups } from "@/data/hub";
import { getNavPage } from "@/data/style-pages";
import { mainNav, siteConfig } from "@/lib/site-config";

export function Header() {
  // Same groups as the /estilos-de-letras hub, so the menu fits on screen in columns.
  const shortHeading: Record<string, string> = { "por-estilo": "Por estilo", "por-plataforma": "Redes sociais e jogos", "nome-e-nick": "Nomes e nicks" };
  const styleGroups = hubGroups.map((g) => ({
    heading: shortHeading[g.id] ?? g.heading,
    links: g.items.map((i) => ({ href: `/${i.slug}`, label: getNavPage(i.slug)?.navLabel ?? i.slug })),
  }));
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface/75">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between gap-2 px-4">
        <Link href="/" aria-label={`${siteConfig.name} — página inicial`} className="shrink-0">
          <Logo priority sizes="180px" className="h-9 w-auto sm:h-10" />
        </Link>
        <div className="flex items-center gap-1">
          <SiteNav links={mainNav} styleGroups={styleGroups} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
