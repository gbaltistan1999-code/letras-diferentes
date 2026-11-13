import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

/** Visible breadcrumb trail + matching BreadcrumbList structured data. */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const trail = [{ name: "Início", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Trilha de navegação" className="mb-5 text-sm text-ink-soft">
        <ol className="flex flex-wrap items-center gap-1">
          {trail.map((item, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className="text-ink">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className="hover:text-ink hover:underline">
                      {item.name}
                    </Link>
                    <ChevronRight size={14} aria-hidden />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
