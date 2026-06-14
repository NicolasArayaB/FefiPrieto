# ADR-001: Repository-Centric Documentation Strategy

## Status

Accepted

## Date

2026-06-14

## Decision Makers

Nico Araya

## Context

The project is being developed with heavy AI assistance using tools such as Codex CLI and potentially Claude Code.

The project goals include:

* Improve implementation consistency
* Reduce token consumption
* Preserve project knowledge across sessions
* Avoid repeatedly re-explaining business and architectural context

The project also aims to remain tool-agnostic and portable across future AI coding assistants.

## Decision

Project knowledge will be stored primarily inside repository documentation.

AI assistants and developers should load documentation by reference through:

* Linear tickets
* `AGENTS.md`
* `ai/workflow.md`

Documentation should be organized by concern:

* `docs/product/`
* `docs/business/`
* `docs/architecture/`
* `docs/design/`
* `ai/`

Documentation should be loaded incrementally and only when relevant to the task.

## Consequences

Positive:

* Lower token consumption
* Better onboarding
* Improved session continuity
* Tool-agnostic workflow
* Better institutional knowledge retention

Negative:

* Documentation requires maintenance
* Documentation may become stale if not updated

## Alternatives Considered

Prompt-only context:

* Pros: Minimal repository setup
* Cons: High token usage, poor continuity across sessions, repeated context loading

External wiki only:

* Pros: Centralized documentation
* Cons: Detached from code, harder for AI assistants to access consistently, additional maintenance overhead

External memory systems only:

* Pros: Persistent AI memory
* Cons: Vendor-dependent, not repository portable, lower transparency and discoverability

## Supersedes / Superseded By

* N/A

## References

* `ai/AGENTS.md`
* `ai/workflow.md`
* `docs/product/vision.md`
