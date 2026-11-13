import type { Metadata } from "next";
import Link from "next/link";
import { stylePages } from "@/data/style-pages";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <p className="font-[family-name:var(--font-symbols)] text-5xl text-accent" aria-hidden="true">
        𝟒𝟎𝟒
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Página não encontrada</h1>
      <p className="mt-3 text-ink-soft">
        O endereço pode ter sido digitado errado ou a página mudou de lugar. Que tal voltar ao
        gerador ou escolher um estilo abaixo?
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-11 items-center rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-black"
      >
        Ir para o gerador de letras diferentes
      </Link>
      <ul className="mt-10 flex flex-wrap justify-center gap-2">
        {stylePages.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/${p.slug}`}
              className="inline-block rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink-soft hover:border-accent hover:text-ink"
            >
              {p.navLabel}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
