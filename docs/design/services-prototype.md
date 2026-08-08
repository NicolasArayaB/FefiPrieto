# Services Prototype Notes

## Purpose

FEF-16 tests the design system against denser, more transactional service content. The working service definitions and mailto links are prototype-only; the section validates the relationship between grouping, conversion, and visual restraint.

## Decisions Validated

* Corporate and Individual services are distinguished through explicit editorial labels, headings, and separate ruled groups rather than different card treatments.
* Service rows use borders for scannability and remain direct links to a discussion entry point. This is sufficient for the prototype; a modal, drawer, or dedicated detail route is not required yet.
* The primary Corporate CTA and secondary Individual CTA establish intent hierarchy using the existing button primitive. Service rows remain text-led and do not become controls with their own surface or elevation.
* The section uses a neutral background, rules, and spacing to organize its densest content. No service-specific radius, shadow, or elevated surface is needed.

## DS005 Evidence

* Borders are useful for dense service lists and section transitions; they should be considered as a reusable separation pattern.
* A distinct surface is not necessary for service groups when labels, typography, and rules are present.
* No elevation is necessary for the list or group hierarchy. Existing CTA control elevation should be evaluated separately from section surfaces.
* No service-specific radius behavior is justified by this prototype.

## Deferred Decisions

* Final service language, conversion destinations, qualification rules, and booking flow remain outside scope.
* A service-detail modal, drawer, or dedicated route can be evaluated once service content is final. No motion is needed for the current exploration.

## Related Documents

* [methodology-prototype.md](methodology-prototype.md)
* [grid.md](grid.md)
* [spacing-layout-system.md](spacing-layout-system.md)
* [color-system.md](color-system.md)
