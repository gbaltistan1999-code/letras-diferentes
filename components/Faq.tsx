import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

/** Accessible FAQ list (native <details>) with optional FAQPage structured data. */
export function Faq({
  items,
  heading = "Perguntas frequentes",
  headingId = "perguntas-frequentes",
  withSchema = true,
}: {
  items: FaqItem[];
  heading?: string;
  headingId?: string;
  withSchema?: boolean;
}) {
  return (
    <section aria-labelledby={headingId} className="mt-14">
      <h2 id={headingId} className="text-2xl font-semibold tracking-tight">
        {heading}
      </h2>
      <div className="mt-5 divide-y divide-line rounded-2xl border border-line bg-surface">
        {items.map((item) => (
          <details key={item.question} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown size={18} aria-hidden className="shrink-0 text-ink-soft transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 leading-relaxed text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
      {withSchema && <JsonLd data={faqSchema(items)} />}
    </section>
  );
}
