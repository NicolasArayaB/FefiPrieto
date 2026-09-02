export const individualInquiryEmail = "contacto@fernandaprieto.cl";

export function individualInquiryHref(subject: string) {
  return `mailto:${individualInquiryEmail}?subject=${encodeURIComponent(subject)}`;
}
