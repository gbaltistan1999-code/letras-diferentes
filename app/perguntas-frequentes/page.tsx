import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { extraFaqs, homeFaqs } from "@/data/faqs";
import { buildMetadata, faqSchema } from "@/lib/seo";

const title = "Perguntas frequentes sobre letras diferentes";
const description =
  "Respostas sobre o gerador de letras diferentes: como copiar e colar, compatibilidade com apps, acentos, privacidade e acessibilidade.";

export const metadata = buildMetadata({ title: "Perguntas frequentes", description, path: "/perguntas-frequentes" });

const groups = [{ group: "Sobre o gerador", items: homeFaqs }, ...extraFaqs];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <Breadcrumbs items={[{ name: "Perguntas frequentes", path: "/perguntas-frequentes" }]} />
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 text-ink-soft">
        Não encontrou sua dúvida? <Link href="/contato" className="text-accent underline underline-offset-2">Fale com a gente</Link>.
        Para dúvidas específicas de uma plataforma, veja também os guias de{" "}
        <Link href="/letras-para-instagram" className="text-accent underline underline-offset-2">Instagram</Link> e{" "}
        <Link href="/letras-para-free-fire" className="text-accent underline underline-offset-2">Free Fire</Link>.
      </p>

      {groups.map((g, i) => (
        <Faq key={g.group} items={g.items} heading={g.group} headingId={`grupo-${i}`} withSchema={false} />
      ))}

      {/* One FAQPage entity for the whole page. */}
      <JsonLd data={faqSchema(groups.flatMap((g) => g.items))} />
    </div>
  );
}
