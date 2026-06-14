# ADR-004: Animation Isolation Pattern

## Status

Accepted

## Date

2026-06-14

## Decision Makers

Nico Araya

## Context

The platform relies heavily on storytelling and motion.

Animations are expected to grow in complexity and may involve:

* GSAP
* ScrollTrigger
* Lenis
* Framer Motion

Mixing animation logic inside UI components can increase coupling and reduce maintainability.

## Decision

Animation behavior will remain isolated from presentation components.

Recommended structure:

```text
src/animations/
  hero.ts
  methodology.ts
  services.ts
  navigation.ts
  modal.ts
```

Components describe structure.

Animation modules describe behavior.

## Consequences

Positive:

* Better separation of concerns
* Smaller components
* Easier maintenance
* Easier experimentation and refactoring

Negative:

* Slightly more project structure
* Additional files to maintain

## Alternatives Considered

Animation logic inside components:

* Pros: Faster implementation initially
* Cons: Large components, reduced maintainability, difficult testing and reuse

Global animation manager:

* Pros: Centralized animation handling
* Cons: Unnecessary complexity, reduced component independence

## Supersedes / Superseded By

* N/A

## References

* `ai/project-context.md`
* `docs/design/principles.md`
