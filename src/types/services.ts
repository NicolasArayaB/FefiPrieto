import type { ActionLink } from "@app-types/content";

export interface ServiceMetadata {
  title: string;
  description: string;
}

export interface ServiceRecommendation {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  description: string;
  deliverablesLabel: string;
  deliverables: string[];
  recommendation?: ServiceRecommendation;
  action: ActionLink;
  metadata: ServiceMetadata;
}
