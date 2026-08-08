import type { HomeContent } from "@app-types/content";

export const homeContent = {
  hero: {
    eyebrow: "Image psychology and executive presence",
    title: "Fefi Prieto",
    description:
      "A premium advisory experience for leaders, teams, and individuals who want their image to communicate with intention.",
    primaryCta: {
      label: "Corporate inquiry",
      href: "mailto:hello@example.com?subject=Corporate%20inquiry",
    },
    secondaryCta: {
      label: "Individual consultation",
      href: "mailto:hello@example.com?subject=Individual%20consultation",
    },
  },
  methodology: {
    eyebrow: "Methodology",
    title: "Psychology gives image its meaning.",
    description:
      "A considered process that connects inner identity with the way you choose to be seen—without reducing either to appearance.",
    stages: [
      {
        title: "Psychology",
        description:
          "We begin beneath appearance: with the beliefs, habits, and self-perception that shape how you inhabit a room.",
      },
      {
        title: "Coaching",
        description:
          "We turn insight into practice, building the clarity and confidence to make choices that feel intentional and sustainable.",
      },
      {
        title: "Image Consulting",
        description:
          "We translate that alignment into a visible expression—one that supports your presence, work, and direction without performing a version of someone else.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Support for the way you want to be seen.",
    description:
      "Two distinct paths, grounded in the same belief: image can be a practical expression of identity, confidence, and direction.",
    groups: [
      {
        eyebrow: "For organizations",
        title: "Corporate",
        description:
          "Programs for teams and leaders who want presence to support trust, communication, and authority at work.",
        action: {
          label: "Discuss corporate needs",
          href: "mailto:hello@example.com?subject=Corporate%20services",
        },
        services: [
          {
            title: "Presencia Ejecutiva",
            description:
              "A focused program for leaders who want their external presence to match the clarity of their thinking and role.",
            href: "mailto:hello@example.com?subject=Presencia%20Ejecutiva",
          },
          {
            title: "Psicología de la Autoridad",
            description:
              "An applied exploration of the cues that shape credibility, trust, and perceived authority in professional settings.",
            href: "mailto:hello@example.com?subject=Psicolog%C3%ADa%20de%20la%20Autoridad",
          },
        ],
      },
      {
        eyebrow: "For individuals",
        title: "Individual",
        description:
          "One-to-one guidance for making personal style a more useful, confident expression of who you are becoming.",
        action: {
          label: "Explore individual services",
          href: "mailto:hello@example.com?subject=Individual%20services",
        },
        services: [
          {
            title: "Colorimetría",
            description:
              "A considered starting point for understanding the colors that support your natural contrast, energy, and intention.",
            href: "mailto:hello@example.com?subject=Colorimetr%C3%ADa",
          },
          {
            title: "Asesoría de imagen",
            description:
              "A practical, psychology-informed process for aligning how you present yourself with your daily life and goals.",
            href: "mailto:hello@example.com?subject=Asesor%C3%ADa%20de%20imagen",
          },
          {
            title: "Personal shopper",
            description:
              "A guided selection experience that translates personal clarity into pieces you can use with confidence.",
            href: "mailto:hello@example.com?subject=Personal%20shopper",
          },
        ],
      },
    ],
  },
} satisfies HomeContent;
