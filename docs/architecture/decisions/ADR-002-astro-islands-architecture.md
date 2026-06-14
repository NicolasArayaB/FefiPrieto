# ADR-002: Astro Islands Architecture

## Status

Accepted

## Date

2026-06-14

## Decision Makers

Nico Araya

## Context

The platform is:

* Content-driven
* Storytelling-focused
* SEO-sensitive
* Performance-sensitive
* Expected to include rich interactions and animations

The project requires excellent Core Web Vitals while allowing isolated interactive experiences.

## Decision

The application will use:

* Astro as the primary framework
* React islands for interactive components

Hydration should be limited to components that require client-side interactivity.

Most content should remain server-rendered.

## Consequences

Positive:

* Excellent performance
* Strong SEO foundation
* Minimal JavaScript delivery
* Flexible interactivity model
* Clear separation between static and interactive content

Negative:

* Requires understanding of islands architecture
* Potential complexity when deciding hydration boundaries

## Alternatives Considered

Full React SPA:

* Pros: Unified development model
* Cons: Increased JavaScript payload, worse initial performance, reduced SEO efficiency

Next.js:

* Pros: Large ecosystem, flexible rendering options
* Cons: More complexity than required, less aligned with content-first architecture

Pure Astro without React:

* Pros: Minimal JavaScript
* Cons: Reduced flexibility for complex interactions, harder implementation of advanced animations and interactive features

## Supersedes / Superseded By

* N/A

## References

* `ai/project-context.md`
* `docs/architecture/system-overview.md`
