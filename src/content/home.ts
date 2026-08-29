import type { HomeContent, HomeMetadata } from "@app-types/content";
import authorityPortrait from "../assets/images/fefi-authority.webp";
import heroImage from "../assets/images/fefi-editorial.webp";
import individualServicesImage from "../assets/images/fefi-editorial-2.webp";
import { services } from "./services";

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
      src: heroImage,
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
    groupEyebrow: "Acompañamiento uno a uno",
    groupTitle: "Para ti",
    groupDescription:
      "Un proceso personal para que tu estilo sea una expresión más útil, segura y coherente de la persona que estás construyendo.",
    action: {
      label: "Conversemos sobre tu proceso",
      href: "mailto:hello@example.com?subject=Servicios%20individuales",
    },
    image: {
      src: individualServicesImage,
      alt: "Fotografía editorial de referencia de una persona de espaldas con vestuario naranja y tela rosa en un interior cálido, pendiente de reemplazo por fotografía final.",
    },
    services: services.map((service) => ({
      title: service.title,
      description: service.lead,
      href: `/servicios/${service.slug}`,
      entryLabel: "Conocer el servicio",
    })),
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
      "Soy Fernanda Prieto, psicóloga, asesora de imagen y coach. Abordo la imagen desde una mirada psicológica: entender quién eres, qué quieres expresar y la relación que quieres construir con tu propia imagen.",
    perspective:
      "La imagen no comienza en el clóset: comienza en la forma en que te entiendes y eliges estar presente.",
    relationship: {
      eyebrow: "Trayectoria",
      title: "Todo empezó por las personas.",
      description:
        "Mi recorrido profesional ha pasado por distintos mundos, pero siempre ha tenido un punto en común: el interés por las personas, su identidad y la manera en que se expresan en cada contexto.",
    },
    journey: {
      moments: [
        {
          text: "Mi formación en psicología es el punto de partida desde el que comprendo la identidad, la conducta y la relación que construimos con nosotras mismas y con los demás. La práctica clínica y el trabajo en procesos de selección me enseñaron que la confianza y la forma de presentarnos adquieren sentidos distintos según el contexto.",
        },
        {
          text: "Durante cinco años trabajé como tripulante de cabina en LATAM Airlines, en contacto permanente con personas, culturas y realidades diversas. Allí la presencia, la comunicación y la adaptación eran parte de lo cotidiano; también vi de cerca cómo la moda y las tendencias cambian alrededor del mundo.",
        },
        {
          text: "Más tarde, desde el emprendimiento, cofundé y desarrollé Tweens Dresses durante cuatro años. Esa experiencia me acercó al vestir desde la vida real de mujeres que buscan sentirse cómodas, seguras y representadas por lo que llevan puesto. Con Dress the City profundicé ese vínculo con la imagen y con la experiencia personal de elegir cómo habitarla.",
        },
      ],
      conclusion:
        "Hoy integro estas experiencias desde una misma mirada: la imagen no es solo lo que mostramos. También es una forma de expresar quiénes somos, cómo queremos sentirnos y cómo elegimos relacionarnos con el mundo.",
    },
    portrait: {
      src: authorityPortrait,
      alt: "Retrato editorial de referencia de una mujer de perfil, pendiente de reemplazo por una fotografía de Fernanda Prieto.",
    },
  },
} satisfies HomeContent;
