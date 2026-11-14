import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/**
 * Brand logo. Two versions are rendered and CSS shows the one matching the
 * theme (the dark version has light "Letras" lettering), so the right logo
 * shows even before JavaScript runs. Browsers fetch both; next/image keeps
 * each at about 16 KB.
 */
export function Logo({ className, priority = false, sizes }: { className: string; priority?: boolean; sizes: string }) {
  const common = { width: 2036, height: 475, priority, sizes };
  // Both images keep their real size (stacked, one faded out) instead of
  // display:none, so neither is ever measured as a distorted 0×0 image.
  return (
    <span className="relative inline-block align-middle">
      <Image src="/logo.png" alt={siteConfig.name} {...common} className={`${className} dark:opacity-0`} />
      {/* Same logo for dark theme; empty alt so screen readers don't announce it twice. */}
      <Image
        src="/logo-dark.png"
        alt=""
        {...common}
        className={`${className} pointer-events-none absolute inset-0 opacity-0 dark:opacity-100`}
      />
    </span>
  );
}
