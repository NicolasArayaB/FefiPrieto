# Refactor Template

## Purpose

Define a refactor as a bounded structural improvement, not a vague cleanup task.

## Template

```md
# Summary

One-sentence description of the refactor.

## Motivation

Why is this refactor needed now?

## Relevant Documentation

Link repository docs instead of duplicating context.

Required:

* `ai/project-context.md`
* `ai/AGENTS.md`

Add only what applies:

* `docs/architecture/*.md`
* `docs/business/business-rules.md`
* `docs/product/roadmap.md`
* `docs/design/*.md`

## Current Problem

What maintainability, consistency, or implementation issue exists?

## Proposed Change

Describe the structural change in concrete terms.

## Scope

In scope:

* Item

Out of scope:

* Item

## Risks

* Regression risk
* Migration risk
* Documentation risk

## Acceptance Criteria

* The targeted structure is improved
* Behavior remains unchanged unless explicitly stated
* Documentation stays aligned if conventions change

## ADR Check

Create an ADR only if this refactor:

* Introduces a new dependency
* Introduces a new architectural pattern
* Defines a reusable convention
* Changes state management
* Changes project structure
* Affects future implementations
```

## Notes

Do not use this template for minor cleanup, styling adjustments, or one-off implementation details.
