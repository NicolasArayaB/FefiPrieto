# Frontend Conventions

## Purpose

This document defines implementation conventions for the Astro, React, and TypeScript frontend. It complements [frontend-architecture.md](frontend-architecture.md) by turning architecture direction into day-to-day rules.

## Core Rules

Frontend work should follow these defaults:

* Use Astro for pages, layouts, static sections, and content-first rendering.
* Use React islands only for components that require client-side interactivity.
* Keep business content in `src/content/` and reusable content types in `src/types/`.
* Keep UI components structural and presentational.
* Keep global CSS limited to tokens, reset/base styles, and low-level utilities.
* Keep feature-specific styles scoped to the component or page that owns them.

## Source Directory Responsibilities

```text
src/
  animations/  Motion lifecycle modules and reusable animation helpers.
  components/  Reusable UI and section components.
  constants/   Stable application constants and metadata.
  content/     Business copy, navigation labels, CTA definitions, and section content.
  hooks/       React hooks for interactive islands only.
  layouts/     Astro document and page layout shells.
  lib/         Framework-agnostic utilities and integration helpers.
  pages/       Astro routes.
  stores/      Zustand stores for justified shared state.
  styles/      Global tokens, base styles, and shared CSS utilities.
  types/       Shared TypeScript types and content contracts.
```

Use the matching path aliases from `tsconfig.json` instead of deep relative imports when crossing directories. Shared content types use `@app-types/*` because `@types/*` conflicts with TypeScript's package type resolution.

## Component Conventions

Astro components are the default for static UI. React components should be introduced only when browser-side state, lifecycle, or event handling is required.

Naming:

* Components use `PascalCase`.
* Content modules use `camelCase`.
* Shared type names use `PascalCase`.
* File names should match the exported component or concept.

Structure:

* Put primitive reusable UI in `src/components/ui/`.
* Put page or section-specific components in `src/components/sections/` once they exist.
* Put interactive React islands in `src/components/islands/` when a component needs browser-side state or lifecycle.
* Prefer explicit props over implicit global state.
* Use `<slot />` for reusable layout primitives such as sections, containers, and buttons.
* Do not put long business copy or service definitions inside components.

Island boundaries:

* Do not hydrate components by default.
* Use the narrowest `client:*` directive that supports the interaction.
* Keep static layout and copy in Astro wrappers when only a small child needs interactivity.
* Do not introduce a React island as an example before a real interaction exists.

## Content Conventions

Content modules should export typed objects using `satisfies` against shared contracts from `src/types/`.

Content modules own:

* Section copy.
* CTA labels and destinations.
* Display order.
* Service, methodology, testimonial, and navigation definitions.

Components own:

* Semantic markup.
* Layout.
* Responsive behavior.
* Accessible relationships.
* Visual hierarchy.

## Styling Conventions

Global styles are organized into layers:

* `tokens`: design tokens and CSS custom properties.
* `reset`: box sizing and browser normalization.
* `base`: document, typography, and element defaults.
* `utilities`: small reusable layout/accessibility helpers.

Component and page styles should stay close to their owner. Add global classes only when they are intentionally reusable.

## Accessibility Conventions

Every user-facing section should have a clear heading relationship. Use `aria-labelledby` when a section heading exists, and keep CTA groups labeled when multiple actions appear together.

Default requirements:

* Preserve semantic HTML before adding ARIA.
* Use links for navigation and buttons for in-page actions.
* Maintain visible focus states.
* Keep touch targets at least 44px tall.
* Avoid motion that is required to understand content.

## Animation Conventions

Animation modules belong in `src/animations/` and should be imported only where the related experience requires them.

Use:

* GSAP and ScrollTrigger for timeline and scroll-driven storytelling.
* Lenis for smooth scrolling only if the experience justifies it.
* Framer Motion for interactive React islands.

Do not add animation code to static content components unless the motion is trivial and component-local.

## State Conventions

Use Zustand only when state is shared across components or persisted across interactions.

Prefer:

* Astro props and content modules for static content.
* Local React state for island-local interaction.
* Zustand for navigation state, modal state, UI preferences, or future shared interactive experiences.

## Verification Conventions

Until a test runner is selected, frontend changes should be verified with the documented quality gates:

* `pnpm format:check`
* `pnpm lint`
* `pnpm check`
* `pnpm build`

Add automated tests when introducing logic whose behavior cannot be confidently covered by type checking, linting, build output, or a focused browser smoke check.

Do not add a test framework only as scaffolding. Select one when there is a concrete testing need and document the decision.

## Related Documents

* [frontend-architecture.md](frontend-architecture.md)
* [content-strategy.md](content-strategy.md)
* [../design/principles.md](../design/principles.md)
* [../business/business-rules.md](../business/business-rules.md)
