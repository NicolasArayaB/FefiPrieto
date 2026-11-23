# ADR-006: Native bilingual site

## Status

Accepted

## Date

2026-11-23

## Context

Visitors need Spanish and English versions of the entire site. The site is statically generated and already keeps business copy in typed modules. Moving the existing Spanish URLs would introduce unnecessary migration work. Astro’s [official i18n recipe](https://docs.astro.build/en/recipes/i18n/) demonstrates the routing and translation-map pattern.

## Decision

Use native Astro i18n with Spanish as the unprefixed default and English under `/en/`. Keep translated business copy in typed `src/content/*.en.ts` modules alongside Spanish modules, and shared interface strings in `src/content/ui.ts`. Thin routes reuse shared page templates.

`src/lib/i18n.ts` owns stable page/service identities and translated URL mappings. Service identities remain independent of public slugs. Use this map for navigation, same-page language links, canonicals, and reciprocal HTML `hreflang` alternates. Every page has its own canonical; Spanish is the `x-default` fallback. The sitemap lists all generated URLs; HTML alternates describe translation pairs, including translated slugs.

The URL determines the language. Visible language links work without JavaScript; no preference storage or automatic browser-language redirect is required. Language selection does not change the underlying services, currency, contact details, or legal conditions.

## Consequences

Both translations must be maintained and reviewed together. English must be present in built HTML, including metadata, accessible labels, consent UI, and contact messages. Run `pnpm build` then `python3 scripts/check-localized-build.py` when changing routing or localized content.

No translation dependency, client translation runtime, framework upgrade, or server adapter is needed. Plain i18next and Paraglide remain alternatives if advanced message formatting or translation workflows justify their configuration cost.
