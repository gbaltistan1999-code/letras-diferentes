import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { type NavGroup, navGroups } from "@/data/nav-groups";
import { legalNav, siteConfig } from "@/lib/site-config";

const linkClass = "text-ink-soft underline-offset-4 hover:text-ink hover:underline";

function FooterGroup({ group }: { group: NavGroup }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{group.heading}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {group.links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={linkClass}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [byStyle, ...others] = navGroups;
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <Logo sizes="150px" className="h-8 w-auto" />
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Gerador gratuito de letras diferentes para copiar e colar. O texto é convertido no
            seu navegador. Não somos afiliados a nenhuma rede social ou jogo.
          </p>
          <Link href="/estilos-de-letras" className="mt-4 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline">
            Ver todos os estilos de letras →
          </Link>
          <SocialLinks className="mt-5" />
        </div>

        <nav aria-label="Estilos de letras" className="contents">
          <FooterGroup group={byStyle} />
          <div className="space-y-8">
            {others.map((g) => (
              <FooterGroup key={g.id} group={g} />
            ))}
          </div>
        </nav>

        <nav aria-label="Institucional" className="col-span-2 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Institucional</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm lg:grid-cols-1">
            <li>
              <Link href="/blog" className={linkClass}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/perguntas-frequentes" className={linkClass}>
                Perguntas frequentes
              </Link>
            </li>
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
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
