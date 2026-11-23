export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

// These keys are stable service identities, independent of translated URLs.
export const serviceSlugs = {
  colorimetria: { es: "colorimetria", en: "personal-color-analysis" },
  "colorimetria-morfologia": {
    es: "colorimetria-morfologia",
    en: "color-and-body-shape-analysis",
  },
  "asesoria-de-imagen-basica": {
    es: "asesoria-de-imagen-basica",
    en: "essential-image-consulting",
  },
  "asesoria-de-imagen-full": {
    es: "asesoria-de-imagen-full",
    en: "complete-image-consulting",
  },
  "personal-shopper": { es: "personal-shopper", en: "personal-shopper" },
  "closet-detox": { es: "closet-detox", en: "wardrobe-detox" },
} as const;
export type ServiceId = keyof typeof serviceSlugs;
export type PageId = "home" | "privacy" | "terms" | ServiceId;

export function getLocale(locale: string | undefined): Locale {
  return locale === "en" ? "en" : "es";
}

export function pagePath(page: PageId, locale: Locale): string {
  if (page === "home") return locale === "es" ? "/" : "/en/";
  if (page === "privacy")
    return locale === "es" ? "/politica-de-privacidad/" : "/en/privacy-policy/";
  if (page === "terms")
    return locale === "es"
      ? "/terminos-y-condiciones/"
      : "/en/terms-and-conditions/";
  return locale === "es"
    ? `/servicios/${serviceSlugs[page].es}/`
    : `/en/services/${serviceSlugs[page].en}/`;
}
