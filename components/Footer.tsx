import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { stylePages } from "@/data/style-pages";
import { legalNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={2036}
            height={475}
            sizes="150px"
            className="h-8 w-auto"
          />
          <p className="mt-2 text-sm text-ink-soft">
            Gerador gratuito de letras diferentes para copiar e colar. O texto é convertido no
            seu navegador. Não somos afiliados a nenhuma rede social ou jogo.
          </p>
        </div>
        <nav aria-label="Estilos de letras">
          <p className="text-sm font-semibold">Estilos de letras</p>
          <ul className="mt-3 space-y-2 text-sm">
            {stylePages.map((p) => (
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
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-ink-soft">
          © {new Date().getFullYear()} {siteConfig.name}. Instagram, Free Fire, TikTok, WhatsApp e
          Discord são marcas de seus respectivos donos.
        </p>
      </div>
    </footer>
  );
}
