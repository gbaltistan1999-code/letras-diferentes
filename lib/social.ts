import { siteConfig } from "@/lib/site-config";

const LABELS: Record<keyof typeof siteConfig.social, string> = {
  facebook: "Facebook",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  tiktok: "TikTok",
  pinterest: "Pinterest",
  youtube: "YouTube",
  x: "X (Twitter)",
};

/** Social profiles that have a URL set, in display order. */
export const socialLinks = (Object.keys(LABELS) as (keyof typeof LABELS)[])
  .filter((id) => siteConfig.social[id] !== "")
  .map((id) => ({ id, label: LABELS[id], href: siteConfig.social[id] as string }));
