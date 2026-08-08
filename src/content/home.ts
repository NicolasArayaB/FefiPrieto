import type { HomeContent, HomeMetadata } from "@app-types/content";

export const homeMetadata = {
  title: "Fernanda Prieto",
  description:
    "Psicología de la imagen, presencia ejecutiva y transformación personal.",
} satisfies HomeMetadata;

export const homeContent = {
  hero: {
    eyebrow: "Psicología de la imagen y presencia ejecutiva",
    title: "Fefi Prieto",
    description:
      "Acompañamiento estratégico para personas y equipos que buscan que su imagen exprese quiénes son, con claridad y propósito.",
    primaryCta: {
      label: "Hablemos de tu organización",
      href: "mailto:hello@example.com?subject=Consulta%20corporativa",
    },
    secondaryCta: {
      label: "Agendar una asesoría",
      href: "mailto:hello@example.com?subject=Asesoría%20individual",
    },
    actionsLabel: "Acciones principales",
    statement: {
      label: "Una convicción de partida",
      quote: "La imagen no es superficial. Es psicológica.",
    },
    image: {
      alt: "Una mujer con blazer oscuro en un estudio de tonos piedra.",
    },
  },
  methodology: {
    eyebrow: "Metodología",
    title: "Comprenderte es el primer paso para proyectarte.",
    description:
      "Un proceso que une identidad, percepción y expresión para que lo visible acompañe lo que ya eres y hacia dónde vas.",
    stagesLabel: "Etapas de la metodología",
    stages: [
      {
        title: "Psychology",
        description:
          "Comenzamos más allá de la apariencia: en las creencias, hábitos y formas de percibirte que influyen en cómo ocupas un espacio.",
      },
      {
        title: "Acompañamiento",
        description:
          "Convertimos esa comprensión en decisiones. Construimos la claridad y la confianza necesarias para elegir con intención y sostenerlo en el tiempo.",
      },
      {
        title: "Asesoría de imagen",
        description:
          "Traducimos esa coherencia en una expresión visible que acompañe tu presencia, tu trabajo y tu dirección, sin interpretar a alguien que no eres.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Una presencia que se siente propia.",
    description:
      "Dos formas de trabajar desde una misma convicción: la imagen puede expresar identidad, confianza y dirección de manera concreta.",
    groups: [
      {
        eyebrow: "Para organizaciones",
        title: "Corporativo",
        description:
          "Programas para equipos y liderazgos que quieren que su presencia fortalezca la confianza, la comunicación y la autoridad en el trabajo.",
        action: {
          label: "Conversemos sobre tu equipo",
          href: "mailto:hello@example.com?subject=Servicios%20corporativos",
        },
        services: [
          {
            title: "Presencia Ejecutiva",
            description:
              "Un programa para liderazgos que buscan que su presencia exterior esté a la altura de la claridad de su pensamiento y su rol.",
            href: "mailto:hello@example.com?subject=Presencia%20ejecutiva",
            entryLabel: "Conocer este servicio",
          },
          {
            title: "Psicología de la Autoridad",
            description:
              "Una exploración aplicada de las señales que construyen credibilidad, confianza y autoridad percibida en contextos profesionales.",
            href: "mailto:hello@example.com?subject=Psicolog%C3%ADa%20de%20la%20Autoridad",
            entryLabel: "Conocer este servicio",
          },
        ],
      },
      {
        eyebrow: "Para personas",
        title: "Individual",
        description:
          "Acompañamiento uno a uno para que tu estilo sea una expresión más útil, segura y coherente de la persona que estás construyendo.",
        action: {
          label: "Explorar servicios individuales",
          href: "mailto:hello@example.com?subject=Servicios%20individuales",
        },
        services: [
          {
            title: "Colorimetría",
            description:
              "Un punto de partida para comprender los colores que acompañan tu contraste natural, tu energía y tu intención.",
            href: "mailto:hello@example.com?subject=Colorimetr%C3%ADa",
            entryLabel: "Conocer este servicio",
          },
          {
            title: "Asesoría de imagen",
            description:
              "Un proceso práctico, informado por la psicología, para alinear la forma en que te presentas con tu vida diaria y tus objetivos.",
            href: "mailto:hello@example.com?subject=Asesor%C3%ADa%20de%20imagen",
            entryLabel: "Conocer este servicio",
          },
          {
            title: "Personal shopper",
            description:
              "Una selección acompañada que convierte la claridad personal en prendas que puedes usar con seguridad y sentido.",
            href: "mailto:hello@example.com?subject=Personal%20shopper",
            entryLabel: "Conocer este servicio",
          },
        ],
      },
    ],
  },
} satisfies HomeContent;
