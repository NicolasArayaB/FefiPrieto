import type { HomeContent, HomeMetadata } from "@app-types/content";

export const homeMetadata = {
  title: "Fernanda Prieto",
  description:
    "Psicología de la imagen, presencia ejecutiva y transformación personal.",
} satisfies HomeMetadata;

export const homeContent = {
  hero: {
    eyebrow: "Psicología · Coaching · Imagen",
    title: "Fefi Prieto",
    description:
      "Una forma más consciente de habitar tu imagen, tu identidad y tu presencia.",
    primaryCta: {
      label: "Hablemos de tu proceso",
      href: "mailto:hello@example.com?subject=Consulta%20individual",
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
      "Un acompañamiento uno a uno para que tu imagen exprese con claridad quién eres, cómo quieres sentirte y hacia dónde vas.",
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
        image: {
          src: "/images/services-corporate-placeholder.webp",
          alt: "Fotografía editorial de referencia de una mujer con traje oscuro en un espacio arquitectónico, pendiente de reemplazo por fotografía final.",
          caption:
            "Imagen editorial de referencia. Pendiente de reemplazo por fotografía final.",
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
          {
            title: "Comunicación de Liderazgo",
            description:
              "Un taller para alinear presencia, señales no verbales y comunicación cotidiana en liderazgos que necesitan convocar con claridad.",
            href: "mailto:hello@example.com?subject=Comunicaci%C3%B3n%20de%20Liderazgo",
            entryLabel: "Conocer este servicio",
          },
        ],
      },
      {
        eyebrow: "Acompañamiento uno a uno",
        title: "Para ti",
        description:
          "Un proceso personal para que tu estilo sea una expresión más útil, segura y coherente de la persona que estás construyendo.",
        action: {
          label: "Conversemos sobre tu proceso",
          href: "mailto:hello@example.com?subject=Servicios%20individuales",
        },
        image: {
          src: "/images/fefi-editorial-2.webp",
          alt: "Fotografía editorial de referencia de una persona de espaldas con vestuario naranja y tela rosa en un interior cálido, pendiente de reemplazo por fotografía final.",
          caption:
            "Imagen editorial de referencia. Pendiente de reemplazo por fotografía final.",
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
  testimonials: {
    eyebrow: "Experiencias de clientas",
    title: "Sentirse bien también cambia la manera de estar.",
    description:
      "Testimonios publicados por clientas de Dress the City, proyecto fundado por Fefi Prieto, donde recibieron atención y asesoramiento de imagen.",
    featured: {
      quote:
        "Me encantó la atención y asesoramiento personalizado, quede feliz con mi look.",
      name: "Dani",
      context: "@danihm",
      relationship: "Clienta de Dress the City",
    },
    supportingLabel: "Más experiencias de clientas de Dress the City",
    supporting: [
      {
        quote:
          "Me llenaron de piropos, fui la sensación con mi vestido, me preguntaron mucho de donde era.",
        name: "Sofía",
        context: "@sofiafrancisca",
        relationship: "Clienta de Dress the City",
      },
      {
        quote:
          "Gracias por todo, me encantó la experiencia de arrendar con ustedes.",
        name: "Francisca",
        context: "@fran.decastro",
        relationship: "Clienta de Dress the City",
      },
    ],
  },
  authority: {
    eyebrow: "Sobre Fefi",
    title: "Una mirada que empieza por la persona.",
    description:
      "Soy Fernanda Prieto, psicóloga con experiencia clínica y organizacional. Mi trabajo con imagen comienza por entender qué sostiene tu identidad, antes de decidir cómo quieres expresarla.",
    perspective:
      "La imagen no comienza en el clóset: comienza en la forma en que te entiendes y eliges estar presente.",
    relationship: {
      eyebrow: "Una trayectoria relacionada",
      title: "Dress the City",
      description:
        "Fundé Dress the City como un proyecto independiente ligado a la experiencia de vestir. Ese recorrido con personas y su relación con la imagen acompaña, pero no reemplaza, el foco de Fefi Prieto: psicología, identidad y expresión externa.",
    },
    details: [
      {
        label: "Formación",
        value: "Psicología",
      },
      {
        label: "Experiencia",
        value: "Práctica clínica y organizacional",
      },
      {
        label: "Trayectoria",
        value: "Fundadora de Dress the City",
      },
    ],
    portrait: {
      src: "/images/fefi-authority.webp",
      alt: "Retrato editorial de referencia de una mujer de perfil, pendiente de reemplazo por una fotografía de Fernanda Prieto.",
      caption:
        "Imagen editorial de referencia. Pendiente de reemplazo por fotografía de Fernanda Prieto.",
    },
  },
} satisfies HomeContent;
