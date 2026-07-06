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

Detailed implementation conventions are defined in [frontend-conventions.md](frontend-conventions.md).

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

Path aliases are configured in `tsconfig.json` using the matching `@folder/*` convention, for example `@components/*`, `@layouts/*`, `@content/*`, `@lib/*`, and `@app-types/*`.

Reusable UI primitives live in `src/components/ui/`. Page or section-specific components should move into `src/components/sections/` once the section surface grows beyond a route file.

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

## Accessibility Requirements

Frontend implementation should:

* Use semantic HTML before ARIA.
* Connect section landmarks to visible headings.
* Preserve visible focus states.
* Keep interactive targets large enough for touch input.
* Ensure content remains understandable without animation.

## Related Documents

* [system-overview.md](system-overview.md)
* [frontend-conventions.md](frontend-conventions.md)
* [content-strategy.md](content-strategy.md)
* [../design/principles.md](../design/principles.md)
* [../business/business-rules.md](../business/business-rules.md)

## Missing Information / Clarifications

* Testing strategy is not defined.
