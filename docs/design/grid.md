# Editorial Grid

## Purpose

The editorial grid provides a shared grammar for positioning content while preserving the asymmetry, variable measure, and visual pauses that give Fernanda Prieto its calm, premium character. It is structural rather than decorative: spacing continues to come from the system in [spacing-layout-system.md](spacing-layout-system.md).

## Page Container and Widths

`Container` establishes the default page boundary. It centers content, applies the responsive `--layout-page` gutter, and remains bounded on large displays. Its size options are:

| Size | Layout token | Intended use |
| --- | --- | --- |
| `reading` | `--layout-reading` | Long-form copy and methodology explanations. |
| `content` | `--layout-content` | Default sections, service content, and card groups. |
| `wide` | `--layout-wide` | Editorial compositions, larger imagery, and multi-column sections. |
| `full` | `--layout-full` | Intentional edge-to-edge visual moments. |

The hero uses the `full` container and the standard editorial grid so its media can reach the viewport edge without requiring a separate layout primitive.

## Columns and Alignment

`Grid` is the reusable column primitive. It supports `single`, `two`, `three`, and `editorial` variants. The editorial variant gives the main content more visual weight than its companion column, enabling text-and-image or text-and-statement compositions without a page-specific grid.

`Grid` accepts `align="start"`, `center`, `end`, or `stretch` for vertical alignment. Keep text and visual edges intentional: use the container edge as the default anchor, a reading inset for sustained copy, and an offset only to establish a clear relationship with another element.

| Alignment | Implementation |
| --- | --- |
| Start / left edge | Default flow within `Container`; text and controls begin at the container edge. |
| Centered / inset | `layout-inset` centers a reading-width child inside a broader parent. |
| End / right edge | `layout-offset` places compact supporting content at the inline end. |
| Edge aligned | `Container` consistently applies the page gutter at either viewport edge. |
| Full bleed | `Container size="full"` or `layout-bleed` removes the normal edge constraint deliberately. |

## Compositional Utilities

The following low-level classes are available when a full component would add no value:

| Utility | Use |
| --- | --- |
| `layout-stack` | Vertically groups related elements with standard internal rhythm. |
| `layout-cluster` | Wraps compact horizontal groups such as metadata or actions. |
| `layout-inset` | Narrows a child to the reading measure while retaining its parent grid. |
| `layout-offset` | Moves compact supporting content to the far inline edge. |
| `layout-bleed` | Lets a selected child reach both viewport edges from inside a normal container. |

Utilities compose with containers and grids; they do not create new spacing values or use component-specific pixel offsets.

## Full Bleed and Nested Layouts

Prefer `<Container size="full">` when an entire section is edge-to-edge. Use `layout-bleed` only when a single child—such as media inside a narrative section—must escape its parent container. It uses a reusable viewport calculation and width cap, avoiding per-section negative pixel margins and horizontal overflow.

Nested composition is expected: a `wide` container can host an editorial `Grid`, whose text child uses `layout-inset` or `measure-reading`. This separates the visual field from the reading measure.

## Responsive Composition

At 48rem and below, multi-column grids become a deliberate sequential composition: source order is preserved, offsets return to the main flow, and full-bleed visuals remain full bleed. The grid retains its semantic spacing, which is already fluid through the DS003 rhythm system. No JavaScript, viewport listeners, or animation code participates in base layout.

## Implementation Rules

* Start with `Container size="content"`; choose another width only when the content's role requires it.
* Use `Grid` for repeatable column relationships instead of declaring ad-hoc component grids.
* Use `layout-offset` for a compact, intentional secondary block—not as a corrective positioning tool.
* Preserve DOM order when responsive grids become sequential so reading and keyboard order remain logical.
* Keep decorative overlap optional and ensure it never obscures content or controls at smaller widths.

## Related Documents

* [principles.md](principles.md)
* [visual-direction.md](visual-direction.md)
* [spacing-layout-system.md](spacing-layout-system.md)
* [../architecture/frontend-conventions.md](../architecture/frontend-conventions.md)
