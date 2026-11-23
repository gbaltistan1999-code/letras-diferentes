"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  heading: string;
  links: NavLink[];
}

/** Desktop links + "Estilos de letras" menu (grouped in columns), and a compact mobile menu. */
export function SiteNav({ links, styleGroups }: { links: readonly NavLink[]; styleGroups: NavGroup[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stylesOpen, setStylesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setStylesOpen(false);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setStylesOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const close = () => {
    setMobileOpen(false);
    setStylesOpen(false);
  };
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const linkClass = (href: string) =>
    `rounded-md px-2.5 py-2 text-sm transition-colors hover:text-ink ${
      isActive(href) ? "font-semibold text-ink" : "text-ink-soft"
    }`;

  const [home, ...rest] = links;

  return (
    <nav aria-label="Navegação principal">
      {/* Desktop */}
      <ul className="hidden items-center gap-1 md:flex">
        <li>
          <Link href={home.href} className={linkClass(home.href)} aria-current={isActive(home.href) ? "page" : undefined}>
            {home.label}
          </Link>
        </li>
        <li ref={dropdownRef} className="flex items-center">
          {/* The label is a real link to the hub; the arrow opens the dropdown. */}
          <Link
            href="/estilos-de-letras"
            onClick={close}
            aria-current={isActive("/estilos-de-letras") ? "page" : undefined}
            className={`${linkClass("/estilos-de-letras")} !pr-1`}
          >
            Estilos de letras
          </Link>
          <button
            type="button"
            aria-expanded={stylesOpen}
            aria-controls="menu-estilos"
            aria-label={stylesOpen ? "Fechar lista de estilos" : "Abrir lista de estilos"}
            onClick={() => setStylesOpen((v) => !v)}
            className="inline-flex h-8 w-7 items-center justify-center rounded-md text-ink-soft hover:bg-warm hover:text-ink"
          >
            <ChevronDown size={15} aria-hidden className={stylesOpen ? "rotate-180" : ""} />
          </button>
          {stylesOpen && (
            // Full-width panel under the header (positioned against the header's inner container).
            <div
              id="menu-estilos"
              className="absolute inset-x-4 top-full z-50 mt-1 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-2xl border border-line bg-surface p-5 shadow-lg"
            >
              <div className="grid grid-cols-4 gap-x-4 gap-y-4">
                {styleGroups.map((g) => (
                  <div key={g.heading} className={g.links.length > 7 ? "col-span-2" : ""}>
                    <p className="px-3 text-xs font-semibold uppercase tracking-wide text-ink-soft">{g.heading}</p>
                    <ul className={`mt-2 grid gap-0.5 ${g.links.length > 7 ? "grid-cols-2" : ""}`}>
                      {g.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            onClick={close}
                            aria-current={isActive(l.href) ? "page" : undefined}
                            className={`block rounded-lg px-3 py-1.5 text-sm hover:bg-warm hover:text-ink ${
                              isActive(l.href) ? "font-semibold text-ink" : "text-ink-soft"
                            }`}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-line pt-3">
                <Link
                  href="/estilos-de-letras"
                  onClick={close}
                  aria-current={isActive("/estilos-de-letras") ? "page" : undefined}
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold text-accent hover:bg-warm"
                >
                  Ver todos os estilos →
                </Link>
              </div>
            </div>
          )}
        </li>
        {rest.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={linkClass(l.href)} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-warm md:hidden"
        aria-expanded={mobileOpen}
        aria-controls="menu-mobile"
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
      </button>
      {mobileOpen && (
        <div
          id="menu-mobile"
          className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-surface px-4 pb-5 pt-2 shadow-lg md:hidden"
        >
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="block rounded-lg px-3 py-2.5 font-medium hover:bg-warm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between px-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Estilos de letras</p>
            <Link href="/estilos-de-letras" onClick={close} className="text-sm font-semibold text-accent">
              Ver todos
            </Link>
          </div>
          {styleGroups.map((g) => (
            <div key={g.heading} className="mt-3">
              <p className="px-3 text-[11px] font-medium text-ink-soft">{g.heading}</p>
              <ul className="mt-1 grid grid-cols-2 gap-1">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={close}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-warm hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
