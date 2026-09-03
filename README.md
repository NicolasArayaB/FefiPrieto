# Fernanda Prieto

Premium personal brand website for psychology-informed image consulting, executive presence, and personal transformation.

## Stack

- Astro
- TypeScript
- Static, content-driven Astro components
- PostHog analytics, loaded only after visitor consent
- pnpm

## AI-assisted development

This is also a small experiment in building with AI without turning the project into a black box. Product, business, architecture, design, and workflow notes live next to the code, so people and AI assistants can pick up the thread without starting from zero each time.
AI helps make the site, but it is not part of the visitor experience. It also supports project management: defining and reading Linear tasks, and documenting and updating the decisions that matter.
## Commands

```bash
pnpm install
pnpm dev
pnpm check
pnpm lint
pnpm build
pnpm format:check
```

## Repository Structure

```text
src/
  animations/
  components/
  constants/
  content/
  hooks/
  layouts/
  lib/
  pages/
  stores/
  styles/
  types/

public/
docs/
ai/
```

Architecture, product, business, design, workflow, and ADR documentation lives in `docs/` and `ai/`.
