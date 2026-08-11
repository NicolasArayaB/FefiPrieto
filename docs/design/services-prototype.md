# Services Prototype Notes

## Purpose

The refined Services prototype tests a vertically sequenced editorial composition for transactional content. The working service definitions and mailto links are prototype-only; the section validates the relationship between hierarchy, imagery, conversion, and visual restraint.

## Decisions Validated

* Corporate and Individual services are distinct editorial chapters: Corporate is architectural, structured, and authority-led; Individual is intimate, color-led, and oriented around self-expression.
* Corporate uses one large, replaceable editorial image and `Presencia Ejecutiva` as the featured service. `Psicología de la Autoridad` remains a lower-weight text entry point.
* Cobalt frames the Corporate photograph, making the media itself the expressive editorial moment without turning the group into a colored panel.
* Orange identifies the Individual path as a large typographic field, while the Individual image carries orange and hot-pink material as an expressive, personal counterpoint. Neither treatment is a card or a replacement for the brand CTA.
* Individual services are a typographic discovery list beside a more intimate group introduction and image; there is no repeated row divider or surface.
* The primary Corporate CTA and secondary Individual CTA establish intent hierarchy using the existing button primitive. Service links remain direct routes to a discussion entry point.

## Post-redesign Review

The composition deliberately avoids cards, elevated surfaces, rounded service containers, repeated service rules, and dashboard-like grouping. The two horizontal rules mark actual audience transitions only. Corporate and Individual each use the editorial grid differently, so the section does not read as a repeated two-column template.

Service conversion uses the `ButtonLink` primitive's `editorial` appearance: underlined actions rather than pill buttons or shadows. Individual service titles themselves carry the link affordance, avoiding a repeated generic action label beneath every entry. Canela is limited to chapter, featured-service, and service-title hierarchy; supporting copy, labels, and links use Inter.

Expressive cobalt and orange remain attached to media and chapter identity. They do not decorate borders, controls, or repeated list items. Large white-space areas remain only where they separate chapters or give a dominant image room to establish the hierarchy.

## DS005 Evidence

* A single rule can communicate the transition into a service audience. Repeating rules between every service creates unnecessary interface density.
* A dominant image can establish offer hierarchy without a colored panel, surface, elevation, or radius.
* Cobalt establishes the Corporate chapter; orange and hot pink are contained in the Individual chapter's typographic and photographic treatment. Acid lime is deliberately not used in this section.
* The existing editorial grid supports asymmetric feature-plus-companion compositions without a new layout primitive.

## Responsive Composition

At desktop widths, the editorial grid gives photography the dominant column and lets the Corporate feature and Individual discovery list act as compact companions. At tablet width and below, those grids become a deliberate sequence in source order rather than a reduced card layout: chapter label, image, featured service, supporting route; then Individual label, image, context, CTA, and services.

Mobile preserves the chapter transition rules, edge-aligned media, expressive cobalt and orange moments, and generous content pauses. The responsive rules only tighten relationships that belong together (image to featured service, copy to CTA) while retaining the larger pause between Corporate and Individual. No surface, border, radius, or repeated row treatment is introduced when columns collapse.

## Photography Direction

The current assets at `public/images/services-corporate-placeholder.webp` and `public/images/services-individual-placeholder.webp` are art-direction placeholders, not final client images. Their source, alt text, and visible captions live in `src/content/home.ts`, so final photography can replace each `image` object without changing `ServicesSection.astro`.

The approved Corporate image should be a large vertical editorial photograph (at least a 4:5 crop) that communicates executive presence through posture, wardrobe, architecture, and light. It should feel human, aspirational, contemporary, and psychologically grounded: a composed person in refined clothing within an intentional environment.

Avoid business-stock cues such as laptops, meeting rooms, smiling teams, handshakes, or direct corporate headshots. Avoid e-commerce styling, embedded text, logos, and decorative product framing. The image should function as part of the editorial narrative, not as a service thumbnail.

The approved Individual image should be equally large and vertical, but closer, warmer, and more expressive: personal style, material, color, and a moment of self-recognition rather than organizational context. Orange and hot-pink tonal moments can belong to the photograph without turning the interface into a saturated palette. Avoid beauty-campaign posing, retail styling, product display, embedded text, logos, and identifiable client photography unless approved.

## Deferred Decisions

* Final service language, conversion destinations, qualification rules, and booking flow remain outside scope.
* Both photographs must be replaced with approved final photography.
* A service-detail modal, drawer, or dedicated route can be evaluated once service content is final. No motion is needed for the current exploration.

## Related Documents

* [methodology-prototype.md](methodology-prototype.md)
* [grid.md](grid.md)
* [spacing-layout-system.md](spacing-layout-system.md)
* [color-system.md](color-system.md)
