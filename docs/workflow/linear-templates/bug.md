# Bug Template

## Purpose

Define a bug with enough precision to reproduce, diagnose, and verify a fix without bloating the ticket.

## Template

```md
# Summary

One-sentence description of the bug.

## Impact

Who is affected and how?

## Relevant Documentation

Link repository docs instead of duplicating context.

Required:

* `ai/project-context.md`
* `ai/AGENTS.md`

Add only what applies:

* `docs/product/*.md`
* `docs/business/*.md`
* `docs/architecture/*.md`
* `docs/design/*.md`

## Expected Behavior

What should happen?

## Actual Behavior

What happens instead?

## Reproduction

1. Step
2. Step
3. Step

## Scope

* Environment
* Route or feature area
* Device or viewport
* Frequency

## Suspected Area

Optional. Note likely files, modules, or systems if known.

## Acceptance Criteria

* Bug no longer reproduces under the documented steps
* Intended behavior matches repository documentation
* No unrelated behavior regresses

## ADR Check

Do not create an ADR for the bug fix itself unless the fix:

* Introduces a new dependency
* Introduces a new architectural pattern
* Defines a reusable convention
* Changes state management
* Changes project structure
* Affects future implementations
```

## Notes

Keep symptoms, reproduction, and expected behavior separate. Link design or product docs when the bug is a mismatch against documented behavior.
