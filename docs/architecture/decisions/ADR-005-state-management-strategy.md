# ADR-005: State Management Strategy

## Status

Accepted

## Date

2026-06-14

## Decision Makers

Nico Araya

## Context

The application is primarily content-driven.

Most state requirements are local and ephemeral.

Only a limited set of shared interactive experiences are expected.

Introducing global state prematurely would increase complexity.

## Decision

Use Zustand only for shared application state.

Examples:

* Modal state
* Navigation state
* UI preferences
* Future cross-component interactions

Prefer:

* Props
* Local component state
* Context when appropriate
* Zustand only when shared state is justified

## Consequences

Positive:

* Minimal complexity
* Predictable state boundaries
* Better maintainability
* Easier onboarding

Negative:

* Requires discipline when introducing shared state
* Possible future migration if application complexity grows significantly

## Alternatives Considered

Global Zustand usage:

* Pros: Unified state management
* Cons: Unnecessary complexity, risk of over-centralization

React Context everywhere:

* Pros: No additional dependency
* Cons: Provider nesting, less ergonomic for shared state

No state library:

* Pros: Minimal dependencies
* Cons: More difficult shared state management as interactions grow

## Supersedes / Superseded By

* N/A

## References

* `ai/project-context.md`
* `docs/architecture/system-overview.md`
