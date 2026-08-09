# Testimonials Prototype Notes

## Purpose

FEF-18 refines testimonials into a compact social-proof moment after Services. The component is content-driven and static: it presents a featured endorsement plus two supporting experiences, not a carousel, repeated rows, or a card collection.

## Content Condition

The initial set uses testimonials published by clients on Dress the City's public [testimonials page](https://dressthecity.cl/testimonios/). Fefi Prieto founded that previous project and provided client-facing advice there, so every attribution explicitly retains the original context: `Clienta de Dress the City`.

These testimonials must not be presented as feedback on a future Fefi Prieto service, or be supplemented with unverified professional context or outcomes. Before launch, confirm that this reuse and each public attribution have the required permission.

## Decisions Validated

* The section uses standard section spacing and a smaller heading scale than Methodology, reducing its vertical weight in the page narrative.
* The featured testimonial uses `type-quote` in a single `--color-brand` editorial block. This is a component-owned art-direction treatment, not a new global surface or expressive-color token.
* Two supporting testimonials sit as lighter typographic counterparts beneath the feature. Their small type scale and top rules preserve hierarchy without becoming cards.
* The feature uses the editorial grid. Supporting testimonials use the existing two-column grid, which becomes a quote-then-attribution sequence at the 48rem breakpoint.
* No carousel or motion is needed: approved content can replace the current entries without changing the composition.

## Design-System Feedback

* Existing typography, spacing, border, color, and grid primitives are sufficient for differentiated testimonial hierarchy.
* `--color-brand` can support one high-emphasis editorial block when it is tightly scoped and balanced by neutral supporting content.
* The reading-width token provides a useful maximum measure for the featured quotation.
* No new surface, elevation, radius, or expressive-color token is justified until a color role proves reusable beyond this module.

## Deferred Decisions

* Permission to reuse these published testimonials for Fefi Prieto and final claim-review guidance are required before production launch.
* Testimonial ordering and any future relationship to service detail pages should be decided when the final content set is available.

## Related Documents

* [services-prototype.md](services-prototype.md)
* [methodology-prototype.md](methodology-prototype.md)
* [grid.md](grid.md)
* [spacing-layout-system.md](spacing-layout-system.md)
* [typography-system.md](typography-system.md)
