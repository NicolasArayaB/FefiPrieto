# Commands

## Purpose

This file records the standard commands AI assistants and developers should use once the project is initialized. It avoids guessing package scripts before the repository has an implementation.

## Initial Content

## Current Status

The application is initialized as an Astro project using `pnpm`.

## Expected Command Categories

Development server:

```bash
pnpm dev
```

Starts the local Astro development server.

Type checking:

```bash
pnpm check
```

Runs Astro and TypeScript validation.

Linting:

```bash
pnpm lint
```

Runs ESLint across the repository.

Formatting:

```bash
pnpm format
pnpm format:check
```

Formats the repository or checks formatting without writing changes.

Production build:

```bash
pnpm build
```

Runs type checking and creates the production Astro build.

Preview build:

```bash
pnpm preview
```

Serves the production build locally after `pnpm build`.

Tests:

```bash
# No test runner is configured yet.
```

## Command Documentation Rules

When commands are added:

* Prefer the repository package scripts over raw tool commands.
* Document what each command verifies.
* Note commands that write generated files or snapshots.
* Keep commands copy-pasteable.
* Remove commands that no longer exist.

## Missing Information / Clarifications

* CI commands are not defined.
* Testing framework is not selected.
