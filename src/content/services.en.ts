import type { ServiceDetail } from "@app-types/services";
import type { ServiceId } from "@lib/i18n";
import { serviceSlugs } from "@lib/i18n";
import { services as spanishServices } from "./services";
import { individualInquiryWhatsAppHref } from "./contact";

type Translation = Omit<
  ServiceDetail,
  "id" | "slug" | "eyebrow" | "price" | "action"
>;
const translations = {
  colorimetria: {
    title: "Personal Color Analysis",
    duration: "1 hour",
    lead: "Colors that complement your energy and the way you express yourself.",
    description:
      "We discover the palette that enhances your natural beauty and turn it into a practical tool for choosing, combining, and expressing yourself with greater confidence.",
    deliverablesLabel: "What’s included",
    deliverables: [
      "Fabric draping to identify the colors that suit you.",
      "Color psychology: how to communicate through color.",
      "Guidance on makeup, accessories, and hair colors.",
      "Suggested color combinations.",
      "A personalized digital report.",
    ],
    metadata: {
      title: "Personal Color Analysis",
      description:
        "Discover your personal palette and learn to choose colors, accessories, makeup, and hair colors with intention and confidence.",
    },
  },
  "colorimetria-morfologia": {
    title: "Color & Body Shape Analysis",
    duration: "1 hour 20 minutes",
    lead: "Color and shape to help you choose with greater clarity.",
    description:
      "A session to discover the colors that suit you and the cuts that complement your silhouette.",
    deliverablesLabel: "What’s included",
    deliverables: ["Personal color analysis.", "Body shape analysis."],
    metadata: {
      title: "Color & Body Shape Analysis",
      description:
        "Discover colors and cuts that complement your image through personal color and body shape analysis.",
    },
  },
  "asesoria-de-imagen-basica": {
    title: "Essential Image Consulting",
    duration: "1 hour 30 minutes",
    lead: "Understand your colors and shape to choose with greater confidence.",
    description:
      "A comprehensive analysis to identify the colors, cuts, and proportions that complement your body, identity, and the way you want to present yourself.",
    deliverablesLabel: "What you’ll receive",
    deliverables: [
      "Personal color analysis through fabric draping to identify the colors that suit you.",
      "Body shape analysis to identify cuts that enhance your silhouette.",
      "An exploration of your personal style and how to develop it.",
      "A personalized digital report.",
      "A video call to review your report.",
    ],
    metadata: {
      title: "Essential Image Consulting",
      description:
        "Personal color and body shape analysis to help you choose clothes, cuts, and combinations with clarity and authenticity.",
    },
  },
  "asesoria-de-imagen-full": {
    title: "Complete Image Consulting",
    duration: "2 sessions of 1 hour 30 minutes",
    lead: "A process to take your image where you want to go.",
    description:
      "Two sessions to explore your personal style in depth and turn what you discover about yourself into choices that feel authentic, practical, and sustainable.",
    deliverablesLabel: "What your process includes",
    deliverables: [
      "Personal color analysis through fabric draping to identify the colors that suit you.",
      "Color combinations.",
      "Color psychology: how to communicate through color.",
      "Body shape analysis to identify cuts that enhance your silhouette.",
      "Face shape analysis to enhance your features through your choice of accessories.",
      "An exploration of your personal style and how to develop it.",
      "Outfit suggestions.",
      "A personalized digital report.",
    ],
    metadata: {
      title: "Complete Image Consulting",
      description:
        "A comprehensive image consulting process with personal color, body shape, and face shape analysis, plus personalized recommendations.",
    },
  },
  "personal-shopper": {
    title: "Personal Shopper",
    duration: "Hourly",
    lead: "Thoughtful shopping that makes the most of your budget.",
    description:
      "I help you make thoughtful purchases and get the most from your budget.",
    deliverablesLabel: "What’s included",
    deliverables: [
      "Personal support to make thoughtful purchases.",
      "Guidance to make the most of your budget.",
    ],
    requirement: {
      title: "Before we begin",
      description:
        "An Express Color & Body Shape Analysis is required before this service.",
    },
    metadata: {
      title: "Personal Shopper",
      description:
        "Personal support to shop thoughtfully and make the most of your budget.",
    },
  },
  "closet-detox": {
    title: "Wardrobe Detox",
    duration: "Hourly",
    lead: "Organize your wardrobe and make the most of what you already own.",
    description:
      "I help you organize your wardrobe, decide what to keep and what to let go, and make the most of your clothes.",
    deliverablesLabel: "What’s included",
    deliverables: [
      "Wardrobe organization and review.",
      "Help deciding which pieces to keep and which to let go.",
      "Guidance to make the most of your wardrobe.",
    ],
    requirement: {
      title: "Before we begin",
      description:
        "An Express Color & Body Shape Analysis is required before this service.",
    },
    metadata: {
      title: "Wardrobe Detox",
      description:
        "Organize your wardrobe, decide what to keep, and make the most of the clothes you already own.",
    },
  },
} satisfies Record<ServiceId, Translation>;

export const services: ServiceDetail[] = spanishServices.map((service) => ({
  id: service.id,
  ...translations[service.id],
  slug: serviceSlugs[service.id].en,
  eyebrow: "One-to-one guidance",
  price: `CLP ${service.contracting?.replaceAll(".", ",").replace(" por hora", " per hour")}`,
  action: {
    label: "Book here",
    href: individualInquiryWhatsAppHref(
      `Hi, I’d like to book ${translations[service.id].title}.`,
    ),
  },
}));
