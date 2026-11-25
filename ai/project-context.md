# Project Context

## Purpose

This file gives AI coding assistants and human contributors a compact project briefing before they inspect the deeper documentation set. It should be read first, then supplemented by the product, business, architecture, and design documents linked below.

## Initial Content

Fernanda Prieto is a premium personal brand website for psychology-informed image consulting and personal transformation.

The platform exists to generate individual service inquiries and bookings while establishing the brand as an authority in image psychology. The primary audience is women around ages 30–50. Corporate services are not currently offered.

The product vision is documented in [docs/product/vision.md](../docs/product/vision.md). That file is the source of truth for the brand belief, positioning, long-term vision, relationship with Dress the City, non-goals, and foundational principle.

## Product Summary

The website should educate visitors, build trust, and guide them toward appropriate conversion actions.

Primary conversion paths:

* Individual inquiries and session arrangements for the services defined in [services.md](../docs/product/services.md).
* Brand discovery through educational content, social channels, and later return visits.

## Core Belief

> Image is not superficial. It is psychological.

All product, design, technical, and content decisions should reinforce this idea.

## Target Audiences

Individuals seeking personal image consulting, primarily women around ages 30–50. This describes the core audience rather than service eligibility restrictions.

Prioritize personal goals, self-awareness, confidence, and identity alignment. See [audience.md](../docs/product/audience.md) for audience guidance.

## Current Technical Direction

Planned stack:

* Astro
* React
* TypeScript
* Zustand
* GSAP
* ScrollTrigger
* Lenis
* Framer Motion

Core architectural direction:

* Astro Islands Architecture
* Component-driven development
* Content-driven sections
* Performance-first implementation
* Mobile-first development

## Decision Priorities

When tradeoffs arise, prioritize:

1. Lead generation
2. Trust
3. Authority
4. Performance

Implementation preference order:

1. Simplicity over abstraction.
2. Existing patterns over new patterns.
3. Maintainability over cleverness.
4. Business outcomes over technical elegance.
5. Composition over inheritance.
6. Content-driven solutions over hardcoded UI.
7. Explicit code over magic.

## Required Reading by Task Type

Product or positioning work:

* [docs/product/vision.md](../docs/product/vision.md)
* [docs/product/positioning.md](../docs/product/positioning.md)
* [docs/product/audience.md](../docs/product/audience.md)

Business or conversion work:

* [docs/business/goals.md](../docs/business/goals.md)
* [docs/business/success-metrics.md](../docs/business/success-metrics.md)
* [docs/business/business-rules.md](../docs/business/business-rules.md)

Frontend implementation work:

* [docs/architecture/system-overview.md](../docs/architecture/system-overview.md)
* [docs/architecture/frontend-architecture.md](../docs/architecture/frontend-architecture.md)
* [docs/architecture/content-strategy.md](../docs/architecture/content-strategy.md)
* [docs/design/principles.md](../docs/design/principles.md)
* [docs/design/visual-direction.md](../docs/design/visual-direction.md)

Planning or roadmap work:

* [docs/product/roadmap.md](../docs/product/roadmap.md)
* [docs/product/user-journeys.md](../docs/product/user-journeys.md)

AI workflow work:

* [ai/AGENTS.md](AGENTS.md)
* [ai/commands.md](commands.md)
* [ai/workflow.md](workflow.md)

## Bilingual Website

Spanish remains the default at existing URLs; English is available under `/en/`. Visitors can switch languages on the equivalent page. All site content, consent controls, contact messages, and metadata have Spanish and English versions. This scope was approved on 2026-11-23; see [ADR-006](../docs/architecture/decisions/ADR-006-native-bilingual-site.md).

## Out of MVP Scope

Do not introduce these capabilities during MVP implementation:

* CMS integrations
* Blog infrastructure
* CRM integrations
* User authentication
* User accounts
* Payment processing
* E-commerce
* Membership systems
* Online courses
* Dashboards
* Client portals
* Complex admin panels
* Webinar platforms
* AI-powered personalization
* Mobile applications

## Missing Information / Clarifications

* Deployment platform is not selected.
* Analytics provider is not selected.
* Form handling, Calendly integration details, and lead delivery process are not finalized.
* Brand assets, final visual identity, and copy deck are not documented.
