import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { stylePages } from "@/data/style-pages";
import { mainNav, siteConfig } from "@/lib/site-config";

export function Header() {
  const styleLinks = stylePages.map((p) => ({ href: `/${p.slug}`, label: p.navLabel }));
  return (
    <header className="relative border-b border-line bg-surface">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" aria-label={`${siteConfig.name} — página inicial`} className="shrink-0">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={2036}
            height={475}
            priority
            sizes="180px"
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <SiteNav links={mainNav} styleLinks={styleLinks} />
      </div>
    </header>
  );
}
