import type { ServiceDetail } from "@app-types/services";
import { individualInquiryHref } from "./contact";

function contactAction(subject: string) {
  return {
    label: "Conversemos sobre tu proceso",
    href: individualInquiryHref(subject),
  };
}

export const services = [
  {
    slug: "colorimetria",
    eyebrow: "Acompañamiento uno a uno",
    title: "Colorimetría",
    duration: "1 hora",
    price: "$49.900",
    lead: "Colores que acompañan tu energía y tu forma de estar.",
    description:
      "Descubrimos la paleta que realza tu belleza natural y la convertimos en una herramienta concreta para elegir, combinar y expresarte con más seguridad.",
    deliverablesLabel: "Qué incluye",
    deliverables: [
      "Drapeado de telas para determinar qué colores te benefician.",
      "Psicología del color: cómo comunicar a través del color.",
      "Guía de maquillaje, accesorios y colores de cabello.",
      "Propuesta de combinaciones.",
      "Informe digital personalizado.",
    ],
    action: contactAction("Consulta sobre Colorimetría"),
    metadata: {
      title: "Colorimetría",
      description:
        "Descubre tu paleta personal y aprende a elegir colores, accesorios, maquillaje y cabello con intención y seguridad.",
    },
  },
  {
    slug: "colorimetria-morfologia",
    eyebrow: "Acompañamiento uno a uno",
    title: "Colorimetría + Morfología",
    duration: "1 hora 20 min",
    price: "$90.000",
    lead: "Color y forma para elegir con mayor claridad.",
    description:
      "Un encuentro para reconocer los colores que te benefician y los cortes que pueden acompañar mejor tu silueta.",
    deliverablesLabel: "Qué incluye",
    deliverables: ["Análisis de colorimetría.", "Estudio de morfología."],
    action: contactAction("Consulta sobre Colorimetría + Morfología"),
    metadata: {
      title: "Colorimetría + Morfología",
      description:
        "Un análisis de colorimetría y morfología para reconocer colores y cortes que acompañen tu imagen.",
    },
  },
  {
    slug: "asesoria-de-imagen-basica",
    eyebrow: "Acompañamiento uno a uno",
    title: "Asesoría de Imagen Básica",
    duration: "1 hora 30 min",
    price: "$130.000",
    lead: "Entender tu color y tu forma para elegir con más seguridad.",
    description:
      "Un análisis integral para reconocer los colores, cortes y proporciones que acompañan tu cuerpo, tu identidad y la manera en que quieres estar presente.",
    deliverablesLabel: "Qué recibirás",
    deliverables: [
      "Análisis de colorimetría a través del drapeado de telas para determinar qué colores te benefician.",
      "Estudio de morfología o tipo de cuerpo para definir los cortes que resaltarán tu silueta.",
      "Estudio de estilo personal y cómo potenciarlo.",
      "Informe personalizado digitalizado.",
      "Videollamada para revisar el informe.",
    ],
    action: contactAction("Consulta sobre Asesoría de Imagen Básica"),
    metadata: {
      title: "Asesoría de Imagen Básica",
      description:
        "Un análisis personal de color y morfología para elegir prendas, cortes y combinaciones con claridad y autenticidad.",
    },
  },
  {
    slug: "asesoria-de-imagen-full",
    eyebrow: "Acompañamiento uno a uno",
    title: "Asesoría de Imagen Full",
    duration: "2 sesiones de 1 hora 30 min",
    price: "$180.000",
    lead: "Un proceso para llevar tu imagen hacia donde quieres ir.",
    description:
      "Dos sesiones para profundizar en tu estilo personal y traducir lo que descubres de ti en elecciones que se sientan auténticas, prácticas y sostenibles.",
    deliverablesLabel: "Qué incluye tu proceso",
    deliverables: [
      "Análisis de colorimetría a través del drapeado de telas para determinar qué colores te benefician.",
      "Combinaciones de colores.",
      "Psicología del color: cómo comunicar a través del color.",
      "Estudio de morfología o tipo de cuerpo para definir los cortes que resaltarán tu silueta.",
      "Visagismo para estudiar la forma de tu rostro y potenciar tus facciones mediante la elección de accesorios.",
      "Estudio de estilo personal y cómo potenciarlo.",
      "Propuestas de looks.",
      "Informe personalizado digitalizado.",
      "Videollamada para revisar el informe.",
    ],
    action: contactAction("Consulta sobre Asesoría de Imagen Full"),
    metadata: {
      title: "Asesoría de Imagen Full",
      description:
        "Un proceso integral de asesoría de imagen con colorimetría, morfología, visagismo y recomendaciones personalizadas.",
    },
  },
  {
    slug: "personal-shopper",
    eyebrow: "Acompañamiento uno a uno",
    title: "Personal Shopper",
    duration: "Por hora",
    price: "$30.000 por hora",
    lead: "Compras inteligentes que aprovechan al máximo tu presupuesto.",
    description:
      "Te acompaño a hacer compras inteligentes y a potenciar al máximo tu presupuesto.",
    deliverablesLabel: "Qué incluye",
    deliverables: [
      "Acompañamiento para hacer compras inteligentes.",
      "Orientación para potenciar al máximo tu presupuesto.",
    ],
    requirement: {
      title: "Antes de comenzar",
      description:
        "Es requisito realizar una Colorimetría y Morfología Express antes de este servicio.",
    },
    action: contactAction("Consulta sobre Personal Shopper"),
    metadata: {
      title: "Personal Shopper",
      description:
        "Acompañamiento para hacer compras inteligentes y aprovechar al máximo tu presupuesto.",
    },
  },
  {
    slug: "closet-detox",
    eyebrow: "Acompañamiento uno a uno",
    title: "Clóset Detox",
    duration: "Por hora",
    price: "$30.000 por hora",
    lead: "Ordena tu clóset y sácale partido a lo que ya tienes.",
    description:
      "Te ayudo a ordenar, definir qué se queda y qué se va, y a sacarle partido a tu clóset.",
    deliverablesLabel: "Qué incluye",
    deliverables: [
      "Orden y revisión de tu clóset.",
      "Definición de las prendas que se quedan y las que se van.",
      "Orientación para sacarle partido a tu clóset.",
    ],
    requirement: {
      title: "Antes de comenzar",
      description:
        "Es requisito realizar una Colorimetría y Morfología Express antes de este servicio.",
    },
    action: contactAction("Consulta sobre Clóset Detox"),
    metadata: {
      title: "Clóset Detox",
      description:
        "Ordena tu clóset, define qué se queda y sácale partido a las prendas que ya tienes.",
    },
  },
] satisfies ServiceDetail[];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<(typeof services)[number]["slug"], (typeof services)[number]>;
