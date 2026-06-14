# Frontend Architecture

## Purpose

This document defines frontend implementation principles for the planned Astro, React, and TypeScript application.

## Initial Content

## Architecture Style

Use Astro as the page and content delivery foundation, with React islands for interactive sections that require client-side behavior.

The frontend should be:

* Component-driven.
* Content-driven.
* Mobile-first.
* Performance-conscious.
* Accessible by default.

## Component Principles

Components should describe structure and presentation.

Avoid embedding long business copy or service definitions directly inside components. Use content modules for business content so the offering can evolve without requiring structural rewrites.

## State Management

Use Zustand only where state is meaningfully shared or persistent across components.

Appropriate uses:

* Modal state.
* Navigation state.
* UI preferences.
* Future interactive features.

Avoid global state for local UI behavior that can stay inside a component.

## Animation Architecture

Animation logic should remain isolated from presentation components.

Expected structure:

```text
src/animations/
  hero.ts
  methodology.ts
  services.ts
  modal.ts
  navigation.ts
```

Components should define markup and layout. Animation modules should define behavior and lifecycle.

## Source Structure

The initialized application uses this source layout:

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
```

Path aliases are configured in `tsconfig.json` using the matching `@folder/*` convention, for example `@components/*`, `@layouts/*`, `@content/*`, and `@lib/*`.

## Environment Variables

Astro's environment convention is used:

* Public browser-safe values must use the `PUBLIC_` prefix.
* Local values belong in `.env`, which is ignored by git.
* Shared examples belong in `.env.example`.
* Typed access for project-level environment values lives in `src/env.d.ts`.

## Performance Requirements

Performance is a product requirement.

Frontend implementation should:

* Avoid unnecessary JavaScript.
* Use Astro islands intentionally.
* Keep animations efficient.
* Optimize image and media delivery.
* Preserve responsive interaction quality on mobile.

## Related Documents

* [system-overview.md](system-overview.md)
* [content-strategy.md](content-strategy.md)
* [../design/principles.md](../design/principles.md)
* [../business/business-rules.md](../business/business-rules.md)

## Missing Information / Clarifications

* CSS strategy is not selected.
* Component naming conventions are not defined.
* Testing strategy is not defined.
* Accessibility acceptance criteria are not documented.
* Animation library responsibilities between GSAP and Framer Motion need clarification.
