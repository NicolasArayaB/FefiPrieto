# Fernanda Prieto — Design Reference

> Editorial psychology of image. Warm paper, precise indigo typography, botanical linework, and decisive fields of honey, sage, and orange create a visual language that is personal without becoming soft, and premium without becoming corporate.

**Theme:** light

Fernanda Prieto is a psychology-informed image-consulting brand. The interface makes image feel like a tool for identity, confidence, and presence—not an aesthetic product, a fashion catalogue, or generic self-help. It does this with a paper-like cream canvas, deep-indigo typographic authority, generous editorial compositions, natural portraiture, and a small family of organic SVG shapes. The tone is intentional, human, clear, and quietly assured.

This is the implementation reference for the current site. Its source of truth is the active design system in `src/styles/tokens.css`, the loaded fonts in `src/styles/fonts.css`, and the homepage sections. Use semantic tokens in code; do not copy literal values into components.

## Brand Intent

### Core idea

> La imagen no comienza en el clóset: comienza en la forma en que te entiendes y eliges estar presente.

The visual system should reinforce four ideas:

* Image begins with identity and self-perception.
* Confidence and presence can be developed with intention.
* Personal expression can be clear, considered, and authentic.
* Fernanda is a knowledgeable, approachable guide—not a distant luxury label or a trend authority.

### Experience qualities

The site should feel:

* Editorial, warm, and psychologically grounded.
* Premium through composition, typography, and restraint.
* Personal and reflective rather than clinical or corporate.
* Expressive in contained moments, never visually noisy.

It should not feel like:

* A fashion e-commerce storefront or retail catalogue.
* A generic coaching, wellness, or motivational site.
* A conventional corporate-consulting website.
* A beauty campaign, trend publication, or social-media template.

## Tokens — Color

The neutral paper-and-ink foundation does most of the work. Accent colors are vivid and physical: they belong to organic fields, editorial media framing, and testimonials—not scattered decoration.

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Indigo | `#234386` | `--color-deep-indigo` | Brand anchor: display type, navigation, primary actions, key rules, and line illustrations. It supplies authority and should be the dominant non-neutral color. |
| Honey Gold | `#ffc400` | `--color-honey-gold` | Optimistic editorial field behind portraiture, hero media, and selected testimonial states. It is warm energy, not a default UI fill. |
| Burnt Orange | `#ed7328` | `--color-burnt-orange` | High-energy section field, secondary-action border/text, and visible focus color. It distinguishes the individual-services chapter. |
| Sky Blue | `#6aa8dc` | `--color-sky-blue` | Atmospheric accent for fine botanical linework and restrained illustrative detail. |
| Warm Sand | `#d2b68c` | `--color-warm-sand` | Supporting warm accent, currently reserved for future compositional detail rather than routine UI. |
| Mint Sage | `#a2d3a6` | `--color-mint-sage` | Soft organic field in the hero and testimonials; carries calm, growth, and reflection. |
| Ink Black | `#000000` | `--color-ink-black` | Sustained reading text and quiet structural rules. |
| Pure White | `#ffffff` | `--color-pure-white` | Foreground on primary controls and rare light inset surfaces. |
| Cream Paper | `#fbf9f6` | `--color-cream-paper` | Page canvas and dominant section background; it must read as warm paper, never cold app gray. |

### Semantic mapping

| Semantic token | Current value | Use |
| --- | --- | --- |
| `--color-background` | Cream Paper | Page canvas. |
| `--color-surface` | Pure White | Rare inset foreground treatment. |
| `--color-text` / `--color-text-secondary` | Ink Black | Default readable copy. |
| `--color-text-muted` | Deep Indigo | Low-emphasis but meaningful editorial context. |
| `--color-brand` / `--color-brand-hover` | Deep Indigo | Brand emphasis and primary action. |
| `--color-border` / `--color-border-subtle` | Ink Black | Editorial and control rules; use only to show a real relationship. |
| `--color-focus` | Burnt Orange | Keyboard focus ring. |

### Color rules

* Let cream, ink, and indigo establish the baseline before adding an accent.
* Use one large accent field for a section or composition. Pair it with the paper canvas and enough empty space to preserve calm.
* Use deep indigo for primary buttons; use burnt orange only for the outlined secondary variant and focus.
* Keep honey and sage as shape, media, or testimonial fields—not default buttons, badges, or generic cards.
* Never introduce gradients, gray app surfaces, or arbitrary brand-color shades.
* Preserve contrast: use ink or indigo on light warm accents; use white on indigo.

## Tokens — Typography

Typography is the central hierarchy system. It combines a compressed, uppercase editorial display voice with an unforced sans-serif reading voice and a human handwritten accent. Type should feel declarative and spacious, not fashion-magazine precious.

### Typeface roles

| Typeface | Token | Role |
| --- | --- | --- |
| Bebas Neue | `--font-display` | Primary display face for the largest, dense, uppercase editorial statements. |
| Oswald | `--font-display-loud` | Alternate display face for section headings and expressive hierarchy. |
| Inter | `--font-body` | Body copy, interface text, buttons, and sustained reading. |
| Jost | `--font-label` | Eyebrows, captions, and compact uppercase metadata with wide tracking. |
| Caveat | `--font-script` | Handwritten emotional counterpoint; a short reflective phrase only. |

All current font files are locally loaded at weight 400 with `font-display: swap`. Do not imply weights that have not been loaded; use size, case, spacing, and composition for hierarchy.

### Type scale

| Role | Size / line height | Tracking / case | Use |
| --- | --- | --- | --- |
| `type-display-xl` | `clamp(4rem, 9vw, 5.5rem)` / `0.82` | `0.043em`, uppercase | Hero brand name and strongest page-level statement. |
| `type-display-l` | `clamp(3.5rem, 7vw, 5.5rem)` / `0.86` | `0.043em`, uppercase | Major editorial statement. |
| `type-display-m` | `clamp(2.875rem, 5vw, 3.625rem)` / `0.9` | `0.031em`, uppercase | Section introduction. |
| `type-heading-xl` | `clamp(2.875rem, 5vw, 3.625rem)` / `0.86` | `0.031em`, uppercase | Major section title. |
| `type-heading-l` | `clamp(2rem, 4vw, 2.875rem)` / `0.9` | `0.043em`, uppercase | Stage, service, or supporting feature title. |
| `type-heading-m` | `2rem` / `0.9` | `0.043em`, uppercase | Compact service title. |
| `type-lead` / `type-body` | `1rem` / `1.7` | `0.02em` | Introductory and sustained reading copy. |
| `type-body-l` | `clamp(1.25rem, 1.8vw, 1.5rem)` / `1.45` | `0.02em` | Concise editorial introduction or value proposition. |
| `type-body-small` | `0.875rem` / `1.67` | `0.071em` | Supporting copy only. |
| `type-caption` | `0.75rem` / `1.6` | `0.133em`, uppercase | Attributions and compact metadata. |
| `type-eyebrow` / `type-label` | `0.75rem` / `1.6` | `0.2em`, uppercase | Short section context and labels. |
| `type-button` | `0.8125rem` / `1.2` | `0.1em`, uppercase | Control label. |
| `type-quote` | `clamp(2rem, 4vw, 2.875rem)` / `0.9` | `0.043em`, uppercase | Pull quote or reflection. |

### Typography rules

* Apply semantic `type-*` classes; component styles must not define new type scales.
* Use the display faces in uppercase for headings and statements only. They are not body-copy fonts.
* Keep reading copy at `1rem` or above and within the `65ch` reading measure when sustained.
* Use Jost’s tracking only for short labels; never set paragraphs in all caps.
* Use Caveat sparingly: one short, rotated line near a major heading. It is a human note, not UI chrome.
* Keep display headings in deep indigo unless an intentionally high-contrast composition requires another documented treatment.

## Tokens — Spacing, Shape, and Layout

**Base unit:** 4px  
**Density:** generous editorial spacing with compact internal groups.

### Spacing scale

| Token | Value |
| --- | --- |
| `--space-2xs` | 4px |
| `--space-xs` | 8px |
| `--space-sm` | 12px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 40px |
| `--space-3xl` | 48px |
| `--space-4xl` | 64px |
| `--space-5xl` | 80px |
| `--space-6xl` | 128px |

### Semantic layout values

| Role | Token | Current value / intent |
| --- | --- | --- |
| Page gutter | `--space-page` / `--layout-page` | `clamp(16px, 4vw, 40px)`; the only normal horizontal edge. |
| Content group | `--space-content-tight` / `--space-content` | 24px / 32px; related content and grid gaps. |
| Section rhythm | `--space-section-compact`, `--space-section`, `--space-section-editorial`, `--space-section-hero` | 48px, 64px, 80px, 128px; signal narrative weight. |
| Text relationships | `--space-heading`, `--space-heading-to-body`, `--space-body-to-action` | 16px, 16px, 32px; connect label, heading, copy, and action. |
| Reading measure | `--layout-reading` | 65ch. |
| Compact copy | `--layout-copy` | 32rem. |
| Content / wide max width | `--layout-content` / `--layout-wide` | 75rem. |
| Full bleed | `--layout-full` | `none`; remove the normal gutter only for intentional visual moments. |

### Shape, rule, and elevation

| Element | Value | Guidance |
| --- | --- | --- |
| Editorial image / inset card radius | `--radius-card`: 8px | Use only when media or a contained surface needs a soft edge. |
| Control radius | `--radius-control`: 32px | Buttons are generous pills. |
| Minimum interactive size | `--target-size`: 48px | Maintain for touch controls. |
| Fine rules | 1px ink or indigo | Establish real transitions: stages, attribution, or chapter changes. |
| Shadows | `--shadow-xl`, `--shadow-xl-2` | Available legacy tokens; do not make shadow a system-wide hierarchy device. Current compositions prefer rules, whitespace, and color fields. |

Organic shapes are SVG paths, not CSS border-radius experiments. Their irregular silhouettes should frame photography, mark a section transition, or soften an otherwise strong composition. Botanical drawings are thin, unfilled indigo, sky-blue, or sage lines; they bleed from the page edge and never obscure readable content.

## Components

### Primary Indigo CTA

The primary conversion action. Deep Indigo fill with Pure White `type-button` label, 2px indigo border, 32px radius, 48px minimum height, and generous `24px × 48px` padding. Its message should name the next human step, such as “Hablemos de tu proceso.” On hover it may make a subtle downward movement; it does not need a color change, shadow, or scale effect.

### Outlined Orange Secondary CTA

Exploratory or lower-priority action. Transparent background, 2px Burnt Orange border, Burnt Orange text, 32px radius, and the same accessible target size. Do not turn it into a filled orange button. On small screens, non-editorial buttons become full width.

### Eyebrow and Script Pair

An uppercase, tracked Jost eyebrow provides context above the display heading. A single Caveat phrase can sit beside or below the heading, set at roughly 32–40px and rotated about `-3deg`. This pair recurs in hero, methodology, services, and testimonials, connecting conceptual clarity with a personal note.

### Hero: Identity Before Appearance

The hero is a full-viewport editorial composition. The left copy column carries the brand name, conceptual triad, handwritten statement, one concise description, and the primary CTA. The right media column is a tall portrait framed by overlapping Honey Gold and Mint Sage organic SVG fields, with a small indigo leaf drawing at the lower edge. Mobile preserves the copy-first order, then shows the media as a tall composition.

### Methodology: Structured Transformation

The methodology turns the process into three numbered stages: Psicología, Acompañamiento, and Asesoría de imagen. On desktop they sit on a shared horizontal rule with intentionally staggered vertical positions. Each stage has an oversized number, a local top rule, label, display heading, and compact explanation. This is a sequence, not three cards. Sky-blue botanical line art stays peripheral and disappears on mobile.

### Individual Services Chapter

Services is a full-width Burnt Orange chapter introduced by a large indigo heading and supporting copy. The individual-services content rests in a Cream Paper inset with an editorial image, group introduction, secondary CTA, and a ruled typographic service list. Each service is a numbered, linked entry with title, supporting description, and “Conocer el servicio” cue. It must feel like a curated editorial index, never a pricing table or product grid.

### Testimonial Carousel

Testimonials combine a cream-paper introduction with a wide, horizontally advancing sequence of large Mint Sage and Honey Gold quote fields. Each field contains a prominent quote and an indigo ruled attribution. Wavy SVG dividers transition between color states. The scroll-driven motion advances one card at a time while retaining two adjacent cards in view, and reverses on upward scroll; it is disabled for reduced-motion preferences. Do not add autoplay, dots, cards, or small carousel controls.

### Authority Portrait and Trajectory

The authority section closes with Fernanda’s personal point of view. It pairs reflective copy and Caveat perspective text with a vertical editorial portrait, wrapped in a Honey Gold irregular shape and Sky Blue line drawing. The following trajectory uses one indigo rule, small botanical accents, readable prose, and a concluding display statement. This is a person-led narrative—not a résumé, bio card, or credential wall.

### Botanical Line Illustration

Thin `1.25–1.5px`, no-fill SVG botanical drawings act as connective tissue between chapters. Use Deep Indigo in assertive contexts, Sky Blue around methodology or media, and Mint Sage for quieter authority details. They should enter from an edge or overlap empty space, not be repeated as icons beside every label.

## Surfaces and Imagery

| Level | Surface | Purpose |
| --- | --- | --- |
| 1 | Cream Paper | Default page canvas, reflective and reading-heavy sections. |
| 2 | Honey / Sage organic fields | Hero and portrait framing, testimonial rhythm. |
| 3 | Burnt Orange chapter field | Individual-services section and its energetic transitional moment. |
| 4 | Deep Indigo | CTA fill, type anchor, and detailed linework; it should not become a heavy page background by default. |
| 5 | Pure White / Cream inset | Rare contained service composition or foreground control. |

Photography is editorial, natural, and psychologically legible. Favor composed posture, considered wardrobe, material texture, architectural or studio light, and a sense of self-recognition. Portraits should feel real and aspirational rather than posed for fashion retail. Use vertical 3:4–4:5 crops where the composition calls for a person-led visual.

Avoid business-stock cues (laptops, handshakes, meeting-room smiles), e-commerce product displays, beauty-campaign posing, embedded copy, visible brand marks, and unapproved client photography. Existing editorial assets are placeholders where the content explicitly says so; replace only with approved Fernanda Prieto photography while retaining meaningful alt text.

## Layout and Responsive Behavior

Use `Container` and `Grid` before adding layout CSS:

* `Container size="content"` is the default, centered at 75rem plus responsive page gutters.
* `reading` constrains sustained copy to 65ch; `wide` supports image-led editorial layouts; `full` is reserved for deliberate edge-to-edge fields.
* `Grid` supports `single`, `two`, `three`, and asymmetric `editorial` compositions. Use it for repeatable relationships, not corrective positioning.
* At `48rem` and below, multi-column layouts become one intentional source-order sequence. Preserve the meaning: copy before media when copy introduces it, heading before the content it labels, and controls after the information they act on.
* Keep full-bleed fields full bleed, but never let decorative overlap hide text, controls, or focus rings.
* Mobile may simplify peripheral botanicals and fixed flourishes; it must preserve content, hierarchy, and conversion paths.

## Motion and Interaction

Motion is a cue for hierarchy and narrative pacing, not a decorative layer.

| Token | Value | Use |
| --- | --- | --- |
| `--motion-duration-instant` | 0ms | Reduced-motion state. |
| `--motion-duration-fast` | 180ms | Hover and compact interaction feedback. |
| `--motion-duration-standard` | 280ms | Small contained transitions. |
| `--motion-easing-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default calm deceleration. |

* Prefer opacity and transform; do not animate layout, create parallax, or scroll-jack.
* Existing hover feedback is a restrained `translateY(4px)` on buttons and the scroll indicator. Do not add bounce, scale, or color-flicker effects.
* Keep animation lifecycle code in `src/animations/`, not inside presentational components.
* Respect `prefers-reduced-motion`: smooth scrolling stops, durations collapse, and all content remains available without animation.
* The testimonial scroll interaction is the singular expressive motion pattern. Any additional motion needs a specific narrative reason and a reduced-motion fallback.

## Accessibility

* Use semantic landmarks, heading order, lists, and meaningful link labels; visual styling never replaces structure.
* Ensure keyboard focus uses the 3px Burnt Orange outline with a 3px offset and is never clipped.
* Keep touch targets at least 48px and preserve full-width button behavior on narrow screens.
* Give every meaningful image context-specific alt text; mark decorative SVGs `aria-hidden="true"`.
* Do not use accent color alone to convey category, status, or interaction.
* Maintain normal-text contrast when placing copy over Honey, Sage, Orange, or Indigo fields.

## Do’s and Don’ts

### Do

* Let the cream canvas, indigo type, and generous whitespace establish authority first.
* Use an asymmetric composition when it clarifies the relationship between a person, an idea, and a next step.
* Pair an editorial image with a single organic color field rather than filling a whole page with accent colors.
* Treat service navigation as a clear typographic index with direct, human CTAs.
* Use botanical lines and handwritten type as small, intentional moments of warmth.
* Keep copy in Spanish with a direct, reflective, non-prescriptive voice.

### Don’t

* Don’t turn the experience into a generic fashion, beauty, or retail presentation.
* Don’t use gradients, glossy glass panels, dashboard cards, badges, or ubiquitous shadow.
* Don’t add every accent color to one screen, make each section a colored block, or color every interactive element.
* Don’t use display type for paragraphs, Caveat for controls, or Jost all-caps for sustained reading.
* Don’t repeat identical two-column compositions section after section; vary rhythm while retaining system primitives.
* Don’t let decorative shapes, motion, or image treatments obscure the content or compete with the conversion action.

## Implementation Checklist

Before calling a new UI addition aligned with this reference, verify:

* It reinforces psychology, identity, confidence, presence, or personal transformation.
* It uses semantic tokens and existing primitives before adding a new value or component.
* Its accent color has a specific editorial role and is not merely decorative.
* Its responsive order, reading measure, focus state, and reduced-motion behavior work without relying on visual effects.
* It keeps Fernanda Prieto distinct from Dress the City: image as self-understanding and expression, not fashion consumption.

## Related Project Documentation

* `docs/product/vision.md` — brand belief, positioning, and relationship to Dress the City.
* `docs/product/services.md` — approved individual-service language and routes.
* `docs/design/principles.md` — product and experience principles.
* `docs/design/motion-system.md` — motion intent and accessibility rules.
* `docs/design/spacing-layout-system.md` and `docs/design/grid.md` — shared layout guidance.
* `src/styles/tokens.css` — current implementation token source of truth.
