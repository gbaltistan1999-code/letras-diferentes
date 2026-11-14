import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SiteNav } from "@/components/SiteNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { stylePages } from "@/data/style-pages";
import { mainNav, siteConfig } from "@/lib/site-config";

export function Header() {
  const styleLinks = stylePages.map((p) => ({ href: `/${p.slug}`, label: p.navLabel }));
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface/75">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between gap-2 px-4">
        <Link href="/" aria-label={`${siteConfig.name} — página inicial`} className="shrink-0">
          <Logo priority sizes="180px" className="h-9 w-auto sm:h-10" />
        </Link>
        <div className="flex items-center gap-1">
          <SiteNav links={mainNav} styleLinks={styleLinks} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
