# Expressive Visual Direction

## Purpose

DS007 evolves the site from a uniformly neutral editorial experience into a more memorable rhythm of quiet and expressive moments. The visual foundation remains warm, neutral, and typography-led; color and media now create controlled points of personality.

## Rhythm

The homepage alternates visual density rather than giving every section the same treatment:

1. **Hero — expressive:** a single vivid-orange field frames editorial photography and a concise positioning statement.
2. **Methodology — quiet:** three compact stages keep the conceptual model clear and structured.
3. **Services — two chapters:** cobalt and architectural photography give Corporate a structured, authoritative presence; orange and intimate pink-orange imagery make Individual more personal and expressive.
4. **Testimonials — expressive evidence:** a warm feature carries the primary customer voice; supporting voices remain lighter.
5. **Authority — intimate:** portraiture and neutral space return the focus to Fernanda as a person.

## Expressive Color

`--color-expression-blue`, `--color-expression-orange`, `--color-expression-pink`, and `--color-expression-lime` are reusable semantic roles for contained art-direction moments. Each has a corresponding on-color token for accessible text. They are not general page backgrounds, new brand colors, or a replacement for the neutral palette.

The current compositions use orange in Hero, Testimonials, and the Individual Services identifier; cobalt frames the Corporate Services image. Hot pink appears only inside the Individual art-direction placeholder, not as an additional interface field, while acid lime is intentionally not used. The accents therefore remain contained rather than competing in a single page state. No burgundy-centered palette, decorative gradients, or color-everywhere system is introduced.

## Media

Editorial photography is a first-class compositional element in Hero and Authority. Image sources and alt text remain in `src/content/home.ts`, so temporary assets can be replaced without changing component layout. Video can later use the same section-owned composition when it meaningfully communicates a concept; DS007 does not introduce a video player or a new motion pattern.

## Coaching Dimension

The Hero labels the conceptual triad **Psicología · Coaching · Imagen**. This communicates the breadth of the point of view without defining a new coaching offer or adding unsupported claims.

## Implementation Rules

* Apply only semantic color tokens in components, including `color-mix()` treatments.
* Keep expressive fields section-owned; do not turn them into generic card variants.
* Preserve Canela for hierarchy and Inter for supporting information.
* Keep Methodology structured and restrained so expressive sections retain contrast.
* No new animation is introduced; motion remains the responsibility of DS006.

## Related Documents

* [color-system.md](color-system.md)
* [visual-direction.md](visual-direction.md)
* [grid.md](grid.md)
* [authority-prototype.md](authority-prototype.md)
* [testimonials-prototype.md](testimonials-prototype.md)
