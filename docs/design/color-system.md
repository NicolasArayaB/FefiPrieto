# Color System

## Purpose

This document defines the reusable color primitives for the Fefi Prieto interface. The system supports a calm, premium editorial experience rooted in psychology, identity, and authority without relying on fashion or beauty-brand conventions.

## Principles

* Keep the interface neutral-first. Warm off-whites, stone tones, and charcoal create most of the hierarchy.
* Use `--color-brand` sparingly for intentional emphasis and interactions. It is not a decorative theme color.
* Let typography, spacing, composition, and imagery carry hierarchy before introducing color.
* Name colors by their interface role so future brand adjustments remain localized to `src/styles/tokens.css`.

## Semantic Tokens

| Token | Usage |
| --- | --- |
| `--color-background` | Primary page background. |
| `--color-background-alt` | Alternate page-level background treatment. |
| `--color-surface` | Standard content surface. |
| `--color-surface-elevated` | Raised or high-emphasis surface. |
| `--color-card` | Grouped content cards. |
| `--color-text` | Primary text. |
| `--color-text-secondary` | Supporting copy. |
| `--color-text-muted` | Low-emphasis labels and metadata. |
| `--color-brand` | Primary action and purposeful emphasis. |
| `--color-brand-hover` | Hover state for branded controls. |
| `--color-border` | Standard interactive or structural border. |
| `--color-border-subtle` | Low-contrast surface separation. |
| `--color-overlay` | Content-obscuring overlay treatment. |
| `--color-shadow` | Reusable shadow color. |
| `--color-focus` | Visible keyboard focus indicator. |

## Implementation Rules

Color literals belong only in `src/styles/tokens.css`. Components and global styles use semantic custom properties, including within `color-mix()` expressions for translucent treatments.

Gradients are not tokens unless they are reusable design primitives. Page-level background treatment belongs in global styles; a hero treatment belongs in the Hero component. This keeps the token layer concise while allowing components to own their visual composition.

When a future brand update changes a color role, update the semantic token instead of changing component styles. Add a new token only when its purpose is reusable across the interface.

## Related Documents

* [principles.md](principles.md)
* [visual-direction.md](visual-direction.md)
* [../architecture/frontend-conventions.md](../architecture/frontend-conventions.md)
