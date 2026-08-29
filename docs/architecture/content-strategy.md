# Content Strategy

## Purpose

This document defines how business content should be structured so the site remains maintainable as positioning, services, and offers evolve.

## Initial Content

## Core Principle

Business content should not be hardcoded inside UI components.

The architecture should assume that service offerings, methodology language, testimonials, navigation labels, and calls to action will evolve.

## Expected Content Modules

Examples of content that should live in dedicated modules:

* Hero content.
* Methodology content.
* Service content.
* Testimonials content.
* Navigation content.
* CTA content.
* Footer content.

## Content Responsibilities

Content modules should define:

* Section copy.
* Service names and descriptions.
* CTA labels and destinations.
* Trust assets.
* Display ordering where appropriate.

UI components should define:

* Layout.
* Visual hierarchy.
* Responsive behavior.
* Accessible structure.
* Interaction hooks.

## Type Conventions

Content modules should use shared TypeScript contracts from `src/types/` and the `satisfies` operator where possible.

Example responsibilities:

* `src/types/content.ts` defines reusable content shapes such as CTA/action links, imported through `@app-types/*`.
* `src/content/*.ts` exports typed content objects.
* Astro and React components consume content through props or imports, but should not become the source of business definitions.

## Content Tone

Content should be:

* Psychology-informed.
* Premium.
* Clear.
* Educational.
* Transformational without becoming generic motivation.

Avoid:

* Trend-focused fashion language.
* Generic coaching language.
* Overstated leadership claims.
* Unclear cross-positioning with Dress the City.

## Future Content Evolution

Potential later content systems include educational articles, downloadable resources, newsletters, expanded testimonials, and CMS adoption if justified by business needs.

Do not add CMS infrastructure during MVP unless a documented decision changes the roadmap.

## Related Documents

* [../product/positioning.md](../product/positioning.md)
* [../product/services.md](../product/services.md)
* [../business/business-rules.md](../business/business-rules.md)
* [frontend-architecture.md](frontend-architecture.md)
* [frontend-conventions.md](frontend-conventions.md)
* [../product/roadmap.md](../product/roadmap.md)

## Missing Information / Clarifications

* Final copy deck is not available.
* Testimonials and credentials are not documented.
* Brand voice examples are not documented.
* CMS decision criteria are not defined.
