# ADR-003: Content-Driven Architecture

## Status

Accepted

## Date

2026-06-14

## Decision Makers

Nico Araya

## Context

Business definitions are expected to evolve:

* Services
* Messaging
* Positioning
* Workshops
* Future offerings

The platform should support content evolution without forcing UI refactors.

## Decision

Business content should remain separate from presentation components.

Examples:

* Hero content
* Methodology content
* Services
* Testimonials
* Navigation

Components should consume content rather than define it.

## Consequences

Positive:

* Easier content evolution
* Better maintainability
* Simpler future CMS migration
* Reduced UI refactor costs

Negative:

* Slightly more structure upfront
* Requires discipline in separating concerns

## Alternatives Considered

Hardcoded content in components:

* Pros: Faster initial development
* Cons: Difficult content evolution, tight coupling between business and presentation

CMS from day one:

* Pros: Flexible content management
* Cons: Premature complexity, additional infrastructure, outside MVP needs

Hybrid approach:

* Pros: Partial flexibility
* Cons: Inconsistent patterns, increased cognitive load

## Supersedes / Superseded By

* N/A

## References

* `ai/project-context.md`
* `docs/product/roadmap.md`
* `docs/architecture/content-strategy.md`
