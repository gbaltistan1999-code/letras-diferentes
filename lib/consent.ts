import { siteConfig } from "@/lib/site-config";

/**
 * Cookie/storage consent stored in localStorage (necessary storage: it only
 * remembers this choice). Optional categories are off until accepted.
 */
export type OptionalCategory = "analytics" | "marketing";

export interface ConsentState {
  version: number;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

export const CONSENT_STORAGE_KEY = "ld-consentimento-cookies";
export const OPEN_SETTINGS_EVENT = "ld:abrir-configuracoes-cookies";
export const CONSENT_CHANGED_EVENT = "ld:consentimento-alterado";

export function readConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== siteConfig.cookieConsentVersion) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }): ConsentState {
  const state: ConsentState = {
    version: siteConfig.cookieConsentVersion,
    // Never store "true" for a category the site doesn't actually use.
    analytics: siteConfig.cookieCategories.analytics && choice.analytics,
    marketing: siteConfig.cookieCategories.marketing && choice.marketing,
    updatedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage blocked (private mode, etc.): the choice applies to this page view only.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: state }));
  return state;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
