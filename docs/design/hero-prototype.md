# Hero Prototype Notes

## Purpose

FEF-14 uses the Hero as a representative implementation of the current design-system foundations. It is an exploratory composition for visual review, not a final production section.

## Decisions Validated

* The `full` container and `editorial` Grid create the intended asymmetric text-and-media composition, allowing the media to reach the viewport edge without a Hero-specific layout abstraction.
* Display typography, lead copy, and a restrained quote establish hierarchy without relying on additional accent colors.
* The Hero uses the existing section, content, heading, and action rhythm tokens; no one-off spacing values were needed.
* A pair of subtle horizontal rules and a single statement rule create sufficient structure. The previous card background, blur, shadow, and rounded frame were removed.
* The layout preserves source order and becomes a sequential text, image, and statement composition at the 48rem grid breakpoint.

## Deferred Decisions

* The editorial portrait is an original placeholder only. Final photography, art direction, crop rules, and image-delivery strategy remain outside this prototype.
* The Hero deliberately does not establish a new surface or elevation pattern. Its border-led composition is input for DS005, not a new surface token or reusable card treatment.
* No motion behavior is included. Motion remains deferred to DS006.
* Visual review with the licensed Canela font is still required once that asset is available; the current display fallback is used in the interim.

## Related Documents

* [grid.md](grid.md)
* [spacing-layout-system.md](spacing-layout-system.md)
* [typography-system.md](typography-system.md)
* [color-system.md](color-system.md)
