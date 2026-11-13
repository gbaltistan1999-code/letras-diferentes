import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { FaqItem } from "@/types";

export const absoluteUrl = (path = "/") => (path === "/" ? siteConfig.url : `${siteConfig.url}${path}`);

/** Shared metadata builder so every page gets title, canonical and OG tags. */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is (homepage) instead of appending the site name. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const fullTitle = opts.absoluteTitle ? opts.title : `${opts.title} | ${siteConfig.name}`;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: fullTitle,
      description: opts.description,
      url,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: opts.description,
    },
  };
}

/* ---------------------------- Structured data ---------------------------- */

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
});

export const webPageSchema = (opts: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: opts.name,
  description: opts.description,
  url: absoluteUrl(opts.path),
  inLanguage: siteConfig.language,
  isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
});

export const webApplicationSchema = (opts: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: opts.name,
  description: opts.description,
  url: absoluteUrl(opts.path),
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Qualquer navegador moderno",
  browserRequirements: "Requer JavaScript",
  inLanguage: siteConfig.language,
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: siteConfig.language,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});
