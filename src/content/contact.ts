export const individualInquiryEmail = "contacto@fernandaprieto.cl";
export const instagramUrl = "https://www.instagram.com/fernandaprieto.cl/";
const individualInquiryWhatsAppNumber = "56988098969";

export function individualInquiryHref(subject: string) {
  return `mailto:${individualInquiryEmail}?subject=${encodeURIComponent(subject)}`;
}

export function individualInquiryWhatsAppHref(message: string) {
  return `https://wa.me/${individualInquiryWhatsAppNumber}?text=${encodeURIComponent(message)}`;
}
