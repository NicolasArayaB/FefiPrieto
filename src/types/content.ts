import type { ImageMetadata } from "astro";

export interface ActionLink {
  label: string;
  href: string;
}

export interface HomeMetadata {
  title: string;
  description: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: ActionLink;
  image: {
    src: ImageMetadata;
    alt: string;
  };
}

export interface MethodologyStage {
  title: string;
  description: string;
}

export interface MethodologyContent {
  eyebrow: string;
  title: string;
  description: string;
  stagesLabel: string;
  stages: MethodologyStage[];
}

export interface Service {
  title: string;
  description: string;
  href: string;
  entryLabel: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  description: string;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
  services: Service[];
}

export interface Testimonial {
  quote: string;
  name?: string;
  context?: string;
  relationship?: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  description: string;
  featured: Testimonial;
  supportingLabel: string;
  supporting: Testimonial[];
}

export interface AuthorityJourneyMoment {
  text: string;
}

export interface AuthorityContent {
  eyebrow: string;
  title: string;
  description: string;
  perspective: string;
  relationship: {
    eyebrow: string;
    title: string;
    description: string;
  };
  journey: {
    moments: AuthorityJourneyMoment[];
    conclusion: string;
  };
  portrait: {
    src: ImageMetadata;
    alt: string;
  };
}

export interface HomeContent {
  hero: HeroContent;
  methodology: MethodologyContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  authority: AuthorityContent;
}
