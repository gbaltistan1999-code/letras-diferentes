import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { stylePages } from "@/data/style-pages";
import { mainNav, siteConfig } from "@/lib/site-config";

export function Header() {
  const styleLinks = stylePages.map((p) => ({ href: `/${p.slug}`, label: p.navLabel }));
  return (
    <header className="relative border-b border-line bg-surface">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
          <span className="text-accent">.</span>
        </Link>
        <SiteNav links={mainNav} styleLinks={styleLinks} />
      </div>
    </header>
  );
}
