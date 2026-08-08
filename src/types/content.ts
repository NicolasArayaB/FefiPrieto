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

export interface MethodologyStage {
  title: string;
  description: string;
}

export interface MethodologyContent {
  eyebrow: string;
  title: string;
  description: string;
  stages: MethodologyStage[];
}

export interface HomeContent {
  hero: HeroContent;
  methodology: MethodologyContent;
}
