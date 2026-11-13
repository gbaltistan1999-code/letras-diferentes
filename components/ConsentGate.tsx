"use client";

import { useEffect, useState, type ReactNode } from "react";
import { CONSENT_CHANGED_EVENT, readConsent, type OptionalCategory } from "@/lib/consent";
import { siteConfig } from "@/lib/site-config";

/**
 * Renders children (e.g. a <Script> for analytics) only after the visitor has
 * consented to the given category. Not used yet — the site loads no optional
 * scripts. Example:
 *
 *   <ConsentGate category="analytics"><Script src="..." /></ConsentGate>
 *
 * Also set siteConfig.cookieCategories.analytics = true and update the
 * privacy and cookie policies.
 */
export function ConsentGate({ category, children }: { category: OptionalCategory; children: ReactNode }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!siteConfig.cookieCategories[category]) return;
    const update = () => setAllowed(Boolean(readConsent()?.[category]));
    update();
    window.addEventListener(CONSENT_CHANGED_EVENT, update);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, update);
  }, [category]);

  return allowed ? <>{children}</> : null;
}
