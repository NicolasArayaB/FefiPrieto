export const individualInquiryEmail = "contacto@fernandaprieto.cl";
export const instagramUrl = "https://www.instagram.com/fernandaprieto.cl/";

export function individualInquiryHref(subject: string) {
  return `mailto:${individualInquiryEmail}?subject=${encodeURIComponent(subject)}`;
}
