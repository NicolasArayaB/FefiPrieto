import type { ActionLink } from "@app-types/content";

export interface ServiceMetadata {
  title: string;
  description: string;
}

export interface ServiceRequirement {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  eyebrow: string;
  title: string;
  duration: string;
  price: string;
  lead: string;
  description: string;
  deliverablesLabel: string;
  deliverables: string[];
  requirement?: ServiceRequirement;
  action: ActionLink;
  metadata: ServiceMetadata;
}
