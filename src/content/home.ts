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
} satisfies HomeContent;
