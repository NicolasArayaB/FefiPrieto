# ADR-000 Template

## Purpose

Record technical decisions that shape the repository over time. ADRs are immutable records. Do not rewrite accepted ADRs; supersede them with a new ADR.

## When To Create An ADR

Create ADRs only when a decision:

* Introduces a new dependency
* Introduces a new architectural pattern
* Defines a reusable convention
* Changes state management
* Changes project structure
* Affects future implementations

Do not create ADRs for:

* Styling choices
* Minor refactors
* One-off implementation details
* Temporary workarounds

## Template

```md
# ADR-000: Title

## Status

Proposed | Accepted | Superseded

## Date

YYYY-MM-DD

## Context

What technical decision is needed?
What constraints, existing patterns, or documented rules apply?
Link repository documentation instead of duplicating context.

Relevant documentation:

* `ai/project-context.md`
* `docs/architecture/...`
* `docs/business/...`
* `docs/product/...`

## Decision

State the decision in concrete technical terms.

## Consequences

List durable effects:

* Benefits
* Tradeoffs
* Constraints
* Follow-up implications

## Alternatives Considered

* Alternative and reason rejected

## Supersedes / Superseded By

* `N/A` or ADR references
```

## Notes

Keep ADRs technical, link-first, and durable. They should explain why a lasting implementation direction exists, not narrate temporary execution details.
