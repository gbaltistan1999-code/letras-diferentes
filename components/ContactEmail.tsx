import { MissingEmailNotice } from "@/components/TextPage";
import { siteConfig } from "@/lib/site-config";

/** The owner's email as a mailto link, or a visible notice if not configured. */
export function ContactEmail() {
  if (!siteConfig.contactEmail) return <MissingEmailNotice />;
  return <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>;
}
