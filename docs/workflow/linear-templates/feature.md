# Feature Template

## Purpose

Define a feature request with enough context to implement it while keeping repository documentation as the source of truth.

## Template

```md
# Summary

One-sentence description of the feature.

## Goal

What business or product outcome should this enable?

## Problem

What user, business, or implementation problem exists today?

## Scope

In scope:

* Item

Out of scope:

* Item

## Relevant Documentation

Link repository docs instead of duplicating context.

Required:

* `ai/project-context.md`
* `ai/AGENTS.md`

Add only what applies:

* `docs/product/vision.md`
* `docs/product/*.md`
* `docs/business/*.md`
* `docs/architecture/*.md`
* `docs/design/*.md`

## Affected Areas

* Pages or routes
* Components or modules
* Content modules
* State
* Animations
* Integrations
* Analytics

## Requirements

* Requirement
* Requirement

## Acceptance Criteria

* Observable outcome
* Observable outcome
* Observable outcome

## Constraints

* MVP limitations
* Performance requirements
* Accessibility requirements
* Architecture constraints

## Open Questions

* Question

## ADR Check

Create an ADR only if this decision:

* Introduces a new dependency
* Introduces a new architectural pattern
* Defines a reusable convention
* Changes state management
* Changes project structure
* Affects future implementations
```

## Notes

Prefer linking existing documentation over restating product, business, or architecture context in the ticket body.
