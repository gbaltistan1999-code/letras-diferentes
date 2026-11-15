import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { FaqItem } from "@/types";

export const absoluteUrl = (path = "/") => (path === "/" ? siteConfig.url : `${siteConfig.url}${path}`);

/** Shared metadata builder so every page gets title, canonical and OG tags. */
/** Shared social preview image (app/opengraph-image.png). */
const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — gerador de letras para copiar e colar`,
};

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is (homepage) instead of appending the site name. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
  /** Blog posts: marks the page as an article for social previews. */
  article?: { publishedTime: string; modifiedTime?: string; author: string };
  /** Page-specific 1200×630 share image (defaults to the site image). */
  image?: { src: string; alt: string };
}): Metadata {
  const url = absoluteUrl(opts.path);
  const fullTitle = opts.absoluteTitle ? opts.title : `${opts.title} | ${siteConfig.name}`;
  const image = opts.image ? { url: opts.image.src, width: 1200, height: 630, alt: opts.image.alt } : shareImage;
  const base = {
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: fullTitle,
    description: opts.description,
    url,
    images: [image],
  };
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: opts.article
      ? {
          ...base,
          type: "article",
          publishedTime: opts.article.publishedTime,
          modifiedTime: opts.article.modifiedTime ?? opts.article.publishedTime,
          authors: [opts.article.author],
        }
      : { ...base, type: "website" },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: [image.url],
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

export const blogPostingSchema = (opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: opts.title,
  description: opts.description,
  url: absoluteUrl(opts.path),
  mainEntityOfPage: absoluteUrl(opts.path),
  datePublished: opts.datePublished,
  dateModified: opts.dateModified ?? opts.datePublished,
  inLanguage: siteConfig.language,
  image: { "@type": "ImageObject", url: absoluteUrl(opts.image), width: 1200, height: 630 },
  author: { "@type": "Organization", name: opts.author, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
  },
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
