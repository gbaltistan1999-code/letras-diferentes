import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { Logo } from "@/components/Logo";
import { navPages } from "@/data/style-pages";
import { legalNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <Logo sizes="150px" className="h-8 w-auto" />
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Gerador gratuito de letras diferentes para copiar e colar. O texto é convertido no
            seu navegador. Não somos afiliados a nenhuma rede social ou jogo.
          </p>
        </div>
        <nav aria-label="Estilos de letras">
          <p className="text-sm font-semibold">Estilos de letras</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-ink-soft underline-offset-4 hover:text-ink hover:underline">
                  {p.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Institucional">
          <p className="text-sm font-semibold">Institucional</p>
          <ul className="mt-3 space-y-2 text-sm">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-soft underline-offset-4 hover:text-ink hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="text-ink-soft underline-offset-4 hover:text-ink hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/perguntas-frequentes" className="text-ink-soft underline-offset-4 hover:text-ink hover:underline">
                Perguntas frequentes
              </Link>
            </li>
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} {siteConfig.name}. Instagram, Free Fire, TikTok, WhatsApp e
            Discord são marcas de seus respectivos donos.
          </p>
          {/* Directory badge. Self-hosted so no visitor data goes to a third party (see privacy policy). */}
          <a href="https://sellwithboost.com" target="_blank" rel="noopener noreferrer" className="shrink-0 self-start sm:self-auto">
            <Image src="/badges/sellwithboost.svg" alt="Listed on Sell With Boost" width={160} height={40} unoptimized className="h-10 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}
