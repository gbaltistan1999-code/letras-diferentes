"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  OPEN_SETTINGS_EVENT,
  readConsent,
  saveConsent,
  type OptionalCategory,
} from "@/lib/consent";
import { siteConfig } from "@/lib/site-config";

const OPTIONAL: { id: OptionalCategory; title: string; description: string }[] = [
  {
    id: "analytics",
    title: "Análise",
    description: "Ajudam a entender, de forma agregada, como as páginas são usadas.",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Usados para exibir anúncios e medir campanhas.",
  },
];

const enabledOptional = OPTIONAL.filter((c) => siteConfig.cookieCategories[c.id]);

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const saved = readConsent();
    // Reading localStorage must happen after hydration, so state is set in an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!saved) setShowBanner(true);
    else setPrefs({ analytics: saved.analytics, marketing: saved.marketing });

    const open = () => {
      const current = readConsent();
      if (current) setPrefs({ analytics: current.analytics, marketing: current.marketing });
      dialogRef.current?.showModal();
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  // While the banner is visible, reserve space under the page so the last
  // results and footer links can still be scrolled into view.
  const bannerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const banner = bannerRef.current;
    if (!showBanner || !banner) return;
    const sync = () => {
      document.body.style.paddingBottom = `${banner.offsetHeight}px`;
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(banner);
    return () => {
      observer.disconnect();
      document.body.style.paddingBottom = "";
    };
  }, [showBanner]);

  function decide(choice: { analytics: boolean; marketing: boolean }) {
    saveConsent(choice);
    setPrefs(choice);
    setShowBanner(false);
    if (dialogRef.current?.open) dialogRef.current.close();
  }

  const acceptAll = () => decide({ analytics: true, marketing: true });
  const rejectOptional = () => decide({ analytics: false, marketing: false });

  const buttonBase =
    "inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-semibold transition-colors";
  const primary = `${buttonBase} bg-ink text-paper hover:opacity-90`;
  const secondary = `${buttonBase} border border-line bg-surface text-ink hover:border-ink`;

  return (
    <>
      {showBanner && (
        <section
          ref={bannerRef}
          aria-labelledby="cookie-banner-title"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 shadow-[0_-4px_20px_rgb(0_0_0/0.08)] backdrop-blur"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:gap-6">
            <div className="flex-1 text-sm text-ink-soft">
              <h2 id="cookie-banner-title" className="mb-1 font-semibold text-ink">
                Cookies e armazenamento
              </h2>
              <p>
                Usamos apenas o armazenamento local do navegador para lembrar suas preferências,
                como esta escolha e o tema claro ou escuro.{" "}
                {enabledOptional.length === 0
                  ? "Não usamos cookies de análise nem de marketing."
                  : "Cookies opcionais só são ativados com a sua permissão."}{" "}
                <Link href="/politica-de-privacidade" className="text-accent underline underline-offset-2">
                  Política de privacidade
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={acceptAll} className={primary}>
                Aceitar todos
              </button>
              <button type="button" onClick={rejectOptional} className={primary}>
                Rejeitar opcionais
              </button>
              <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className={secondary}
              >
                Configurar
              </button>
            </div>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-settings-title"
        className="m-auto w-[min(32rem,calc(100%-2rem))] rounded-2xl border border-line bg-surface p-0 text-ink shadow-xl"
      >
        <form
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            decide(prefs);
          }}
          className="p-5 sm:p-6"
        >
          <h2 id="cookie-settings-title" className="text-lg font-semibold">
            Configurações de cookies
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Escolha quais categorias permitir. Você pode mudar de ideia quando quiser pelo link
            “Configurações de cookies” no rodapé.
          </p>

          <ul className="mt-5 space-y-3">
            <li className="rounded-xl border border-line p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">Necessários</h3>
                <span className="rounded-full bg-warm px-2.5 py-1 text-xs font-medium text-ink-soft">
                  Sempre ativos
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">
                Guardam apenas as suas preferências no armazenamento local do navegador: esta
                escolha sobre cookies e o tema (claro ou escuro), se você o alterar.
              </p>
            </li>

            {enabledOptional.map((cat) => (
              <li key={cat.id} className="rounded-xl border border-line p-4">
                <label className="flex cursor-pointer items-center justify-between gap-3">
                  <span className="font-semibold">{cat.title} (opcional)</span>
                  <input
                    type="checkbox"
                    role="switch"
                    checked={prefs[cat.id]}
                    onChange={(e) => setPrefs((p) => ({ ...p, [cat.id]: e.target.checked }))}
                    className="h-5 w-5 accent-[var(--color-accent)]"
                  />
                </label>
                <p className="mt-1 text-sm text-ink-soft">{cat.description}</p>
              </li>
            ))}

            {enabledOptional.length === 0 && (
              <li className="rounded-xl border border-dashed border-line p-4 text-sm text-ink-soft">
                <strong className="text-ink">Análise e marketing:</strong> este site não utiliza
                cookies nem scripts de análise ou de marketing no momento. Se isso mudar, esta
                janela mostrará as novas opções e pediremos sua permissão antes de ativá-las.
              </li>
            )}
          </ul>

          <div className="mt-6 flex flex-wrap justify-end gap-2">
            <button type="button" onClick={rejectOptional} className={secondary}>
              Rejeitar opcionais
            </button>
            <button type="submit" className={primary}>
              Salvar preferências
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
