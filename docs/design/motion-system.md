# Motion System

## Purpose

Motion supports hierarchy, pacing, and editorial storytelling without becoming the site's visual identity. These tokens describe timing and intent only; they do not prescribe a GSAP, Framer Motion, CSS, or View Transitions implementation.

## Tokens

### Duration

| Token | Role | Intended use |
| --- | --- | --- |
| `--motion-duration-instant` | No perceptible wait | Reduced motion, immediate state changes. |
| `--motion-duration-fast` | Responsive feedback | Hover, focus-adjacent visual feedback, compact controls. |
| `--motion-duration-standard` | Default transition | Small state changes and contained fades. |
| `--motion-duration-emphasized` | Deliberate entrance | A meaningful content or image reveal. |
| `--motion-duration-cinematic` | Rare editorial pacing | One hero or major page-transition moment. |

### Easing

| Token | Role | Intended use |
| --- | --- | --- |
| `--motion-easing-standard` | Neutral deceleration | Default interface transitions. |
| `--motion-easing-entrance` | Settling arrival | Content entering a viewport or composition. |
| `--motion-easing-exit` | Efficient departure | Content leaving without drawing attention. |
| `--motion-easing-editorial` | Soft, intentional arrival | Rare image or major editorial statement reveals. |

### Distance

| Token | Role | Intended use |
| --- | --- | --- |
| `--motion-distance-micro` | Barely perceptible movement | Small icon or detail adjustment. |
| `--motion-distance-small` | Compact shift | Hover feedback or short slide. |
| `--motion-distance-medium` | Content reveal offset | A section child entering a composition. |
| `--motion-distance-large` | Major editorial offset | Rare hero or image reveal only. |

Distances are directional-agnostic. The animation owner decides direction based on reading order and composition; it must not invent a new translate amount.

## Semantic Primitives

| Primitive | Intent |
| --- | --- |
| `reveal` | Controlled arrival of content that becomes relevant in the viewport. |
| `fade` | Gentle visibility change without spatial movement. |
| `slide` | Short directional movement that clarifies an adjacent relationship. |
| `imageReveal` | Deliberate introduction of editorial media, preserving the image as the focus. |
| `hover` | Fast feedback that confirms an interactive target; it never changes layout. |
| `pageTransition` | A restrained continuity cue between routes, never a blocking interstitial. |
| `modal` | A clear focus transition into or out of a temporary task. |
| `hero` | A single, paced opening moment that establishes hierarchy. |
| `sectionTransition` | A sparse handoff between narrative chapters, used only when spacing and composition are insufficient. |

## Usage Rules

* Start with no motion; add a primitive only when it clarifies hierarchy, state, or narrative sequence.
* Do not animate every section, repeated list item, or decorative element.
* Prefer opacity and transform. Avoid layout-affecting properties and scroll-jacking.
* Use `fast` for feedback, `standard` for contained state, `emphasized` for a meaningful entrance, and `cinematic` only once in a major page moment.
* Use `medium` and `large` distances sparingly. Large spatial movement must not compete with reading.
* Keep animation behavior in `src/animations/`; presentation components remain free of animation lifecycle code.

## Reduced Motion

When `prefers-reduced-motion: reduce` is active, all motion durations resolve to `instant` and movement distances resolve to `0px`. Smooth scrolling is disabled, and CSS animation and transition durations are also reduced globally.

Content, focus order, interaction targets, and conversion paths must remain fully available without animation. Do not use parallax, automatic motion, or a motion-dependent reveal as the only way to expose content.

## Implementation Notes

CSS consumers use the custom properties directly. GSAP, Framer Motion, and Astro View Transitions may map their timing values from these tokens at the animation boundary, but the tokens themselves do not encode library-specific APIs or lifecycle behavior.

No section animation is introduced by this system. Individual animation work should define its chosen primitive, token combination, trigger, and reduced-motion fallback before implementation.

### Current testimonial carousel

The testimonial section is the single scroll-driven editorial interaction on
the homepage. It advances one card at a time after a deliberate scroll
threshold: downward scrolling moves the paired cards right-to-left, and upward
scrolling reverses that direction. The transition is intentionally slow and
must never skip the middle pair, so adjacent cards always alternate mint,
honey, and mint. The implementation lives in
`src/animations/testimonials.ts` and must remain disabled for reduced-motion
preferences.
