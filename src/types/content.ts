export interface ActionLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
}

export interface HomeContent {
  hero: HeroContent;
}
