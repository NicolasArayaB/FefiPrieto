# Workflow

## Purpose

This file defines the preferred development workflow for humans and AI assistants working in the repository.

The goals are to:

* Improve implementation quality
* Standardize development practices
* Reduce unnecessary changes
* Preserve architectural consistency
* Optimize token usage through repository documentation

---

# Default Workflow

## 1. Read the Linear Ticket

Understand:

* Business objective
* Requirements
* Acceptance criteria
* Out-of-scope items
* Referenced documentation
* Related ADRs

---

## 2. Load Context

For new sessions and medium/large tasks:

- Read `ai/project-context.md`
- Read documentation referenced by the Linear ticket.

For small tasks:

- Read only the Linear ticket and its referenced documentation.
- Load additional context only if required.

---

## 3. Discovery

Before proposing changes:

* Identify the requested change.
* Understand the business objective.
* Identify affected files.
* Review existing patterns.
* Identify assumptions and risks.
* Determine the smallest coherent implementation scope.

Prefer understanding existing code before proposing changes.
Do not implement immediately when requirements, patterns, or constraints are unclear.

---

## 4. Planning

### Small Tasks (<1 hour)

Workflow:

Read docs
→ Implement
→ Verify
→ Report

### Medium Tasks (1–5 hours)

Workflow:

Read docs
→ Discovery
→ Implementation plan
→ Approval
→ Implement
→ Verify
→ Report

### Large Tasks (>1 day)

Workflow:

Read docs
→ Discovery report
→ Risks
→ Implementation plan
→ Approval
→ Implement
→ Verify
→ Self-review
→ Report

Implementation should not begin until approval is received for medium and large tasks.

---

## 5. Implementation

During implementation:

* Follow documented architecture and project conventions.
* Prefer small, focused changes over broad refactors.
* Reuse existing patterns before introducing new abstractions.
* Preserve performance, accessibility, and maintainability.
* Escalate significant architectural decisions through ADRs.

---

## 6. Verification

Run the relevant commands from `ai/commands.md`.

Examples:

* Linting
* Type checking
* Tests
* Build verification

If commands cannot be executed, explicitly explain why in few words.
Never claim code is working if it has not been verified.
Never assume commands.
Always prefer commands documented in `ai/commands.md`.

---

## 7. Reporting

At completion, provide:

### Summary

What was implemented.

### Files Changed

Modified files and purpose.

### Verification

Commands executed and results.

### Assumptions

Open assumptions or decisions made.

### Risks / Follow-ups

Known issues and recommended next steps.

---

# Documentation Workflow

When adding documentation:

* Put product intent in `docs/product/`.
* Put business rules, goals, and metrics in `docs/business/`.
* Put technical architecture in `docs/architecture/`.
* Put design direction in `docs/design/`.
* Put AI assistant operating context in `ai/`.
* Cross-reference existing documents instead of duplicating content.
* Prefer durable documentation over temporary notes.

---

# Decision Workflow

Create an ADR only when a decision has lasting technical impact.

Examples:

* Framework adoption
* Hosting
* Analytics
* Form handling
* Calendly integration approach
* Animation architecture
* Content management strategy
* Major third-party services
* Architectural patterns

Store ADRs in:

`docs/architecture/decisions/`

ADRs are immutable historical records and should be superseded rather than rewritten.
