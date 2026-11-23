import type { HomeContent, HomeMetadata } from "@app-types/content";
import { homeContent as spanish } from "./home";
import { individualInquiryWhatsAppHref } from "./contact";
import { services } from "./services.en";
import { pagePath } from "@lib/i18n";

const inquiry = {
  label: "Let’s talk about your journey",
  href: individualInquiryWhatsAppHref(
    "Hi, Fernanda. I’d like to talk about my image consulting journey and find out how we can get started.",
  ),
};
export const homeMetadata = {
  title: "Fernanda Prieto",
  description:
    "Image psychology, executive presence, and personal transformation.",
} satisfies HomeMetadata;
export const homeContent = {
  hero: {
    eyebrow: "Psychology · Coaching · Image",
    title: "Fernanda Prieto",
    description:
      "A more conscious way to connect with your image, your identity, and your presence.",
    primaryCta: inquiry,
    image: {
      src: spanish.hero.image.src,
      alt: "A woman wearing a dark blazer in a stone-toned studio.",
    },
  },
  methodology: {
    eyebrow: "Methodology",
    title:
      "Understanding yourself is the first step to expressing who you are.",
    description:
      "A process that brings identity, perception, and expression together so that what others see reflects who you are and where you’re going.",
    stagesLabel: "Stages of the methodology",
    stages: [
      {
        title: "Psychology",
        description:
          "We begin beyond appearance: with the beliefs, habits, and ways of seeing yourself that influence how you inhabit a space.",
      },
      {
        title: "Guidance",
        description:
          "We turn that understanding into decisions. Together, we build the clarity and confidence you need to choose with intention and sustain those choices over time.",
      },
      {
        title: "Image consulting",
        description:
          "We translate that alignment into a visible expression that supports your presence, your work, and your direction, without pretending to be someone you’re not.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "A presence that feels like you.",
    description:
      "One-to-one guidance so your image clearly expresses who you are, how you want to feel, and where you’re going.",
    groupEyebrow: "One-to-one guidance",
    groupTitle: "For you",
    groupDescription:
      "A personal process to make your style a more useful, confident, and coherent expression of the person you’re becoming.",
    action: inquiry,
    image: {
      src: spanish.services.image!.src,
      alt: "Editorial reference photograph of a person seen from behind wearing orange with pink fabric in a warm interior, awaiting replacement with the final photograph.",
    },
    services: services.map((service) => ({
      title: service.title,
      description: service.lead,
      href: pagePath(service.id, "en"),
      entryLabel: "Explore this service",
    })),
  },
  testimonials: {
    eyebrow: "Client experiences",
    title: "Feeling good also changes how you show up.",
    description:
      "Testimonials shared by clients of Dress the City, the business founded by Fernanda Prieto, where they received personal attention and image advice.",
    featured: {
      quote:
        "I loved the personal attention and advice. I was so happy with my look.",
      name: "Dani",
      context: "@danihm",
      relationship: "Dress the City client",
    },
    supportingLabel: "More experiences from Dress the City clients",
    supporting: [
      {
        quote:
          "I received so many compliments. My dress was a hit, and so many people asked where it was from.",
        name: "Sofía",
        context: "@sofiafrancisca",
        relationship: "Dress the City client",
      },
      {
        quote:
          "Thank you for everything. I loved the experience of renting with you.",
        name: "Francisca",
        context: "@fran.decastro",
        relationship: "Dress the City client",
      },
    ],
  },
  authority: {
    eyebrow: "About Fernanda",
    title: "An approach that starts with the person.",
    description:
      "I’m Fernanda Prieto, a psychologist, image consultant, and coach. I approach image from a psychological perspective: understanding who you are, what you want to express, and the relationship you want to build with your own image.",
    perspective:
      "Your image doesn’t begin in your wardrobe: it begins in how you understand yourself and choose to show up.",
    relationship: {
      eyebrow: "My journey",
      title: "It all started with people.",
      descriptions: [
        "My professional journey has taken me through different worlds, but one thing has always connected them: an interest in people, their identities, and how they express themselves in each setting.",
        "That journey connects with my purpose: helping you develop your image, from who you are to how you choose to present yourself to the world.",
      ],
    },
    journey: {
      moments: [
        {
          text: "My training in psychology is the foundation for how I understand identity, behavior, and the relationships we build with ourselves and others. Clinical practice and work in recruitment taught me that confidence and the way we present ourselves take on different meanings depending on the context.",
        },
        {
          text: "For five years, I worked as cabin crew at LATAM Airlines, constantly meeting people from different cultures and backgrounds. Presence, communication, and adaptability were part of everyday life; I also saw firsthand how fashion and trends change around the world.",
        },
        {
          text: "Later, as an entrepreneur, I co-founded and developed Twins Dresses over four years. That experience brought me closer to clothing through the real lives of women who want to feel comfortable, confident, and represented by what they wear. With Dress the City, I deepened that connection with image and the personal experience of choosing how to express it.",
        },
      ],
      conclusion:
        "Today, I bring these experiences together through one perspective: image is more than what we show. It is also a way to express who we are, how we want to feel, and how we choose to relate to the world.",
    },
    portrait: {
      src: spanish.authority.portrait.src,
      alt: "Editorial reference portrait of a woman in profile, awaiting replacement with a photograph of Fernanda Prieto.",
    },
  },
} satisfies HomeContent;
