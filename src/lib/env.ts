const fallbackSiteUrl = "http://localhost:4321";

export const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? fallbackSiteUrl;
