# Spacing and Layout System

## Purpose

Spacing is a primary part of Fernanda Prieto's editorial voice. The system creates calm, hierarchy, and confidence through a small set of predictable relationships rather than component-specific values.

## Base Scale

`src/styles/tokens.css` provides nine ordered tokens, from `--space-2xs` to `--space-4xl`. The compact end of the scale is stable for controls and tightly related elements. From `--space-md` upward, values use `clamp()` to create more generous desktop pacing without making mobile layouts feel sparse.

Use the base scale for internal component relationships only when its meaning is self-evident. Prefer semantic tokens for page and content layout.

## Semantic Rhythm

| Token | Usage |
| --- | --- |
| `--space-page` | Responsive horizontal page gutter. |
| `--space-content-tight` / `--space-content` | Padding inside compact and standard content groups. |
| `--space-section-compact` | Closely related sections or dense supporting content. |
| `--space-section` | Standard narrative section transition. |
| `--space-section-editorial` | Major editorial pause or visual transition. |
| `--space-section-hero` | Hero entry spacing, independent of normal section pacing. |
| `--space-heading` | Eyebrow-to-heading relationship. |
| `--space-heading-to-body` | Heading-to-lead or body relationship. |
| `--space-body-to-action` | Copy-to-CTA relationship. |
| `--space-element-tight` / `--space-element` | Tightly related and standard component groups. |

Small spacing means elements belong together; larger spacing signals a new content group or narrative idea. Do not apply the same token between every element in a sequence.

## Content Widths

| Token | Intended content |
| --- | --- |
| `--layout-copy` | Compact supporting copy and asides. |
| `--layout-reading` | Long-form body copy and explanatory text. |
| `--layout-content` | General sections, cards, and service layouts. |
| `--layout-wide` | Hero compositions, imagery, and multi-column editorial layouts. |
| `--layout-full` | Full-bleed media and intentional edge-to-edge moments. |

`Container` exposes these as `reading`, `content` (the default), `wide`, and `full`. The first three preserve `--space-page`; `full` removes the gutter deliberately. A component may use a narrower measure inside a wider container to create editorial asymmetry.

## Section Primitives

`Section` exposes `compact`, `default`, `editorial`, and `hero` spacing variants. Choose the section type based on the narrative relationship with adjacent sections, not its visual density alone. Sections do not need to fill the viewport; a hero may set its own minimum block size when that composition requires it.

## Implementation Rules

* Use logical properties such as `padding-block` and `margin-inline` for layout spacing.
* Use `--space-page` for normal horizontal edges; do not introduce section-specific gutters.
* Keep body text within `--layout-reading` unless a deliberate composition calls for a different measure.
* Full-bleed elements are exceptions with a defined purpose, not a substitute for missing layout structure.
* Use one-off values only for a genuine composition decision that cannot be described by the system.

## Related Documents

* [principles.md](principles.md)
* [visual-direction.md](visual-direction.md)
* [typography-system.md](typography-system.md)
* [../architecture/frontend-conventions.md](../architecture/frontend-conventions.md)
