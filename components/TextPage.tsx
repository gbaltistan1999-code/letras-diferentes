import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema } from "@/lib/seo";

/** Layout for text pages (about, contact, legal): breadcrumb, H1, prose body. */
export function TextPage({
  title,
  description,
  path,
  updated,
  children,
}: {
  title: string;
  description: string;
  path: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: title, path }]} />
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {updated && <p className="mt-2 text-sm text-ink-soft">Última atualização: {updated}</p>}
      <div className="prose-content mt-6">{children}</div>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
    </div>
  );
}

/** Shown wherever the owner's email is required but not configured yet. */
export function MissingEmailNotice() {
  return (
    <span className="rounded bg-amber-50 px-1.5 py-0.5 text-amber-900 dark:bg-amber-950 dark:text-amber-200">
      [e-mail de contato ainda não configurado]
    </span>
  );
}
