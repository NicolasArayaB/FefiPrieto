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
  secondaryCta: ActionLink;
  actionsLabel: string;
  statement: {
    label: string;
    quote: string;
  };
  image: {
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

export interface ServiceGroup {
  eyebrow: string;
  title: string;
  description: string;
  action: ActionLink;
  services: Service[];
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  description: string;
  groups: ServiceGroup[];
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

export interface AuthorityDetail {
  label: string;
  value: string;
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
  details: AuthorityDetail[];
  portrait: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface HomeContent {
  hero: HeroContent;
  methodology: MethodologyContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  authority: AuthorityContent;
}
