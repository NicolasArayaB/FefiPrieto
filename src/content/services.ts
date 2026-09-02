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
    lead: "Colores que acompañan tu energía y tu forma de estar.",
    description:
      "Descubrimos la paleta que realza tu belleza natural y la convertimos en una herramienta concreta para elegir, combinar y expresarte con más seguridad.",
    deliverablesLabel: "Qué recibirás",
    deliverables: [
      "Drapeado de telas para observar los colores que iluminan y acompañan tu armonía natural.",
      "Análisis de tu estación y subestación para identificar tu paleta personal con mayor precisión.",
      "Una mirada a la psicología del color para comprender qué comunican los tonos y cómo usarlos a tu favor.",
      "Propuestas de combinaciones que te ayuden a vestir con claridad en tu día a día.",
      "Guía personalizada para escoger accesorios, maquillaje y colores de cabello.",
      "Informe personalizado para que puedas volver a tu paleta y aplicarla con autonomía.",
    ],
    action: contactAction("Consulta sobre Colorimetría"),
    metadata: {
      title: "Colorimetría",
      description:
        "Descubre tu paleta personal y aprende a elegir colores, accesorios, maquillaje y cabello con intención y seguridad.",
    },
  },
  {
    slug: "closet-detox",
    eyebrow: "Acompañamiento uno a uno",
    title: "Closet Detox",
    lead: "Haz espacio para una imagen que sí te represente.",
    description:
      "Revisamos tu clóset prenda por prenda para reconocer qué te acompaña hoy, qué ya cumplió su ciclo y cómo volver a usar con intención lo que tienes.",
    deliverablesLabel: "Qué incluye tu proceso",
    deliverables: [
      "Revisión consciente de cada prenda para definir qué se queda, qué se va y qué puede tomar un nuevo lugar en tu vida.",
      "Criterios claros para optimizar tu clóset desde tu estilo, tus rutinas y la imagen que quieres construir.",
      "Orden del clóset para que elegir qué usar vuelva a sentirse simple.",
      "Armado de looks con prendas que ya tienes, para transformar claridad en decisiones cotidianas.",
    ],
    recommendation: {
      title: "Para profundizar aún más",
      description:
        "Este servicio se complementa especialmente bien con Colorimetría o Asesoría de Imagen Básica: dos herramientas para reconocer por qué ciertas elecciones te hacen sentir más tú.",
    },
    action: contactAction("Consulta sobre Closet Detox"),
    metadata: {
      title: "Closet Detox",
      description:
        "Revisa, ordena y vuelve a habitar tu clóset con intención a través de un proceso de asesoría de imagen personalizado.",
    },
  },
  {
    slug: "asesoria-de-imagen-basica",
    eyebrow: "Acompañamiento uno a uno",
    title: "Asesoría de Imagen Básica",
    lead: "Entender tu color y tu forma para elegir con más seguridad.",
    description:
      "Un análisis integral para reconocer los colores, cortes y proporciones que acompañan tu cuerpo, tu identidad y la manera en que quieres estar presente.",
    deliverablesLabel: "Qué recibirás",
    deliverables: [
      "Análisis de tu estación y subestación para conocer la paleta que mejor acompaña tu armonía natural.",
      "Propuesta de combinaciones para llevar esa paleta a decisiones reales de vestuario.",
      "Guía para escoger accesorios, maquillaje y colores de cabello desde tus propios rasgos.",
      "Estudio de morfología para comprender la forma de tu cuerpo y las prendas que pueden potenciarla.",
      "Recomendaciones de escotes, cortes y estilos que favorecen tu figura sin dejar de sentirse propios.",
      "Informe personalizado que reúne tus hallazgos y próximos pasos.",
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
    lead: "Un proceso para llevar tu imagen hacia donde quieres ir.",
    description:
      "Dos sesiones para profundizar en tu estilo personal y traducir lo que descubres de ti en elecciones que se sientan auténticas, prácticas y sostenibles.",
    deliverablesLabel: "Qué incluye tu proceso",
    deliverables: [
      "Dos sesiones de una hora y media para descubrir y potenciar tu estilo personal con tiempo y profundidad.",
      "Estudio de morfología para identificar los cortes y estilos que mejor acompañan tu cuerpo.",
      "Análisis profundo de colorimetría para reconocer tu paleta y aplicarla a tu vestuario.",
      "Guía para escoger accesorios, maquillaje y colores de cabello de manera coherente con tu imagen.",
      "Propuesta de combinaciones para que vestir bien se vuelva más simple y auténtico.",
      "Visagismo para analizar tu tipo de rostro y potenciar tus facciones.",
      "Informe digital personalizado con las recomendaciones de tu proceso.",
    ],
    action: contactAction("Consulta sobre Asesoría de Imagen Full"),
    metadata: {
      title: "Asesoría de Imagen Full",
      description:
        "Un proceso integral de asesoría de imagen con colorimetría, morfología, visagismo y recomendaciones personalizadas.",
    },
  },
] satisfies ServiceDetail[];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<(typeof services)[number]["slug"], (typeof services)[number]>;
