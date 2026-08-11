# Color System

## Purpose

This document defines the reusable color primitives for the Fefi Prieto interface. The system supports a calm, premium editorial experience rooted in psychology, identity, and authority without relying on fashion or beauty-brand conventions.

## Principles

* Keep the interface neutral-first. Warm off-whites, stone tones, and charcoal create most of the hierarchy.
* Use `--color-brand` sparingly for intentional emphasis and interactions. It is not a decorative theme color.
* Use expression tokens only for contained editorial moments. They create personality and contrast without replacing the neutral foundation.
* Let typography, spacing, composition, and imagery carry hierarchy before introducing color.
* Name colors by their interface role so future brand adjustments remain localized to `src/styles/tokens.css`.

## Semantic Tokens

| Token | Usage |
| --- | --- |
| `--color-background` | Primary page background. |
| `--color-background-alt` | Alternate page-level background treatment. |
| `--color-surface` | Standard content surface. |
| `--color-text` | Primary text. |
| `--color-text-secondary` | Supporting copy. |
| `--color-text-muted` | Low-emphasis labels and metadata. |
| `--color-brand` | Primary action and purposeful emphasis. |
| `--color-brand-hover` | Hover state for branded controls. |
| `--color-expression-blue` / `--color-on-expression-blue` | Electric cobalt for focused authority and its accessible light foreground. |
| `--color-expression-orange` / `--color-on-expression-orange` | Vivid orange for high-energy editorial moments and its accessible charcoal foreground. |
| `--color-expression-pink` / `--color-on-expression-pink` | Hot pink for controlled fashion-expression moments and its accessible dark foreground. |
| `--color-expression-lime` / `--color-on-expression-lime` | Acid lime for optimistic self-expression and its accessible charcoal foreground. |
| `--color-border` | Standard interactive or structural border. |
| `--color-border-subtle` | Low-contrast surface separation. |
| `--color-focus` | Visible keyboard focus indicator. |

## Surface and Visual Treatment

The homepage uses three neutral roles only: `--color-background` for the canvas, `--color-background-alt` for the page-level tonal transition, and `--color-surface` for the rare control or foreground treatment that needs a light neutral. Media owns its own art direction; there is no generic media, card, panel, or elevated-surface token.

`--color-border-subtle` is the default editorial rule for a quiet section or content transition. `--color-border` is reserved for controls and the few structural transitions that need more presence. Rules should identify a real relationship or boundary, not divide every repeated item.

The system intentionally has no shadow token. Hierarchy comes from typography, spacing, contrast, imagery, and section-owned expressive fields. `--radius-control` is the only radius token and applies to conventional controls; editorial actions use a square, underlined treatment instead.

## Implementation Rules

Color literals belong only in `src/styles/tokens.css`. Components and global styles use semantic custom properties, including within `color-mix()` expressions for translucent treatments.

Gradients are not tokens unless they are reusable design primitives. Page-level background treatment belongs in global styles; a hero treatment belongs in the Hero component. This keeps the token layer concise while allowing components to own their visual composition.

When a future brand update changes a color role, update the semantic token instead of changing component styles. Add a new token only when its purpose is reusable across the interface.

Expression tokens are reusable editorial roles, not a requirement to color every component. Current interface usage is intentionally limited to orange and cobalt in Hero, Services, and Testimonials; hot pink remains contained within the Individual Services art-direction placeholder, and acid lime is reserved for a future contained moment. The four accents must not appear together as interface fields on a single page state.

Use expression colors as one large, intentional field within a section, paired with the neutral foundation. Do not use them as generic card backgrounds, decorative gradients, or small scattered accents. Keep foreground text on the paired `--color-on-expression-*` token; each pair meets WCAG AA contrast for normal text.

## Related Documents

* [principles.md](principles.md)
* [visual-direction.md](visual-direction.md)
* [../architecture/frontend-conventions.md](../architecture/frontend-conventions.md)
