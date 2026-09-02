# Typography System

## Purpose

Typography is the primary source of hierarchy in the Fernanda Prieto interface. It should feel editorial, calm, and authoritative, letting whitespace and composition do more work than decorative color or ornament.

## Typeface Roles

* **Canela** is the display face for hero titles, large editorial statements, section headlines, and pull quotes. Use it sparingly so its personality remains meaningful.
* **Inter** is the functional face for reading, navigation, controls, labels, and supporting content. Its neutral construction keeps longer content clear and calm.

Inter is loaded with `font-display: swap`. Canela is a licensed typeface and is intentionally referenced first in `--font-display`; add its licensed `@font-face` files before production launch. The serif fallback preserves the editorial hierarchy until then.

## Semantic Styles

| Style | Intended use |
| --- | --- |
| `type-display-xl` | Hero titles and the largest editorial statement on a page. |
| `type-display-l` | Section introductions and major editorial statements. |
| `type-display-m` | Prominent editorial moments below the display scale. |
| `type-heading-xl` | Primary section titles. |
| `type-heading-l` | Secondary section or modal titles. |
| `type-heading-m` | Card and compact subsection titles. |
| `type-lead` | Introductory paragraph immediately after a major heading. |
| `type-body-l` | Large reading copy when deliberate emphasis is needed. |
| `type-body` | Default reading copy. |
| `type-body-small` | Dense supporting content only. |
| `type-caption` | Secondary metadata and supplementary context. |
| `type-eyebrow` | Short contextual label above a major heading. |
| `type-button` | Button and link control labels. |
| `type-label` | Compact structural labels, such as a callout heading. |
| `type-quote` | Pull quotes and reflective brand statements. |

Each style is defined in `src/styles/tokens.css` with its own font shorthand, letter spacing, and text transformation. Global utility classes in `src/styles/global.css` apply those semantic tokens. Components must apply a semantic `type-*` class rather than declaring typography values locally.

## Reading Rhythm

* Keep long-form text to a maximum of `65ch` using `measure-reading`.
* Use `type-body` at a minimum of 16px with a 1.7 line height; use `type-body-small` only for secondary information.
* Separate paragraphs with at least `--space-md`; use larger spacing before a new heading or section.
* Keep headings close to the content they introduce and use whitespace, rather than color, to establish the next level of hierarchy.
* Set lists with the same line height as their body style and preserve at least `--space-xs` between items.
* Give `type-quote` generous surrounding space—at least `--space-xl`—so it reads as an editorial pause.

## Accessibility

* Use responsive `clamp()` sizes for display, heading, lead, and quote styles so hierarchy remains intact on small screens.
* Preserve a minimum 16px body text size and comfortable line height for sustained reading.
* Maintain the existing semantic heading order; typography classes never replace heading elements.
* Pair every text style with the semantic color tokens defined in [color-system.md](color-system.md) so text contrast remains readable.
* Avoid all-caps for paragraph content. It is limited to short eyebrows and labels with increased tracking.

## Related Documents

* [principles.md](principles.md)
* [visual-direction.md](visual-direction.md)
* [color-system.md](color-system.md)
* [../architecture/frontend-conventions.md](../architecture/frontend-conventions.md)
