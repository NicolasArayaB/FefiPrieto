# Booking services with Calendly or Google Calendar

Researched 2026-11-25. Current scope: **booking only; Fernanda handles payment separately**. This replaces the earlier full-payment comparison. No provider selected, subscription purchased, account connected, or application code changed.

## Recommendation

Check Fernanda’s existing Google subscription first. If it already includes premium appointment schedules, Google booking pages can serve the site with **no additional booking subscription**. Otherwise, Calendly Standard is the clearer scheduling-only purchase: multiple service types, reminder workflows, explicit Spanish/English event-language settings, and selectable durations for hourly services. Do not build a custom scheduling backend for this first version unless a hosted trial fails a concrete requirement.

## Cost for one practitioner

| Option | Published or incremental cost | What it means here |
| --- | --- | --- |
| Calendly Free | US$0 | One event type and one calendar connection. Useful for testing one consultation, not a separately configured six-service catalog. |
| Calendly Standard, annual | US$10/seat/month billed yearly: **US$120/year** before applicable taxes | Unlimited event types, up to six calendar connections, and automatic reminders; one paid seat for Fernanda, not one seat per service or client. |
| Calendly Standard, monthly | **US$12/user/month**, per Calendly’s official staff community comparison; **US$144 over 12 months** before applicable taxes | Avoids an annual commitment. The live pricing page’s extracted view shows annual pricing; confirm the monthly checkout before purchase. |
| Existing eligible Google subscription | **US$0 extra** for booking features already included | Calendar’s comparison lists Google One Premium/Google AI Pro/Ultra, Workspace Individual, and Business Standard/Plus among eligible subscriptions. Check the exact account entitlement. |
| Google personal account or Business Starter only | One booking page included | Several separately configured service types need an eligible premium subscription. |
| New Google Workspace Business Standard | **US$14/user/month annual commitment**; **US$16.80/user/month flexible**: US$168/year or US$201.60 over 12 flexible months, before applicable taxes | Includes wider business/email/storage features; buying it only for booking may be unnecessary. |
| Google One / Workspace Individual in Chile | **Exact local checkout price not verified** | Individual is officially available in Chile. The current public One page and Calendar eligibility documentation use different plan names; do not buy based on a guessed CLP price or storage size alone. |

Sources: [Calendly pricing](https://calendly.com/pricing), [Calendly official staff monthly/annual comparison](https://community.calendly.com/featured-tips-tricks-32/how-do-i-know-which-paid-plan-is-right-for-me-my-team-112), [Calendly subscription currencies](https://calendly.com/help/currencies-and-your-calendly-subscription), [Google appointment feature eligibility](https://support.google.com/calendar/answer/16287038), [Google flexible/annual billing comparison](https://knowledge.workspace.google.com/admin/billing/compare-flexible-and-annual-fixed-term-payment-plans), [Workspace Individual country availability](https://support.google.com/google-workspace-individual/answer/10758004?hl=es-419).

### Google One pricing caveat

The public [Google One plans page](https://one.google.com/about/plans?hl=es_CL) currently renders **Google AI Plus (2 TB) at US$9.99/month** and **Google AI Pro (5 TB) at US$19.99/month**. This is not a verified Chile CLP quotation. Calendar’s premium-feature chart names **Google One Premium, Google AI Pro, and Google AI Ultra**, but does not explicitly name AI Plus. Therefore, the displayed US$9.99/2 TB plan cannot safely be presented as a verified premium-booking option. Confirm the subscription’s appointment-scheduling entitlement in Fernanda’s account or with Google before buying. A separate Workspace Individual checkout price was not established; its public landing page currently promotes Business Standard.

## Mapping the actual services

Use separate service-specific links, with translated versions where needed, all checking Fernanda’s shared availability. Creating more service types does not create more practitioner seats.

| Site service | Suggested booking configuration |
| --- | --- |
| Colorimetría | One 60-minute appointment. |
| Colorimetría + Morfología | One **80-minute custom-duration** appointment. |
| Asesoría de Imagen Básica | One 90-minute appointment. |
| Asesoría de Imagen Full | Two 90-minute sessions. Initially book session one publicly; arrange session two with Fernanda or a private follow-up link. Do not represent it as one three-hour appointment. |
| Personal Shopper | Approved hourly duration choices, plus prerequisite verification before releasing or confirming the booking. |
| Clóset Detox | Approved hourly duration choices, plus prerequisite verification before releasing or confirming the booking. |

The durations and prerequisites come from [the service catalog](../product/services.md). Full’s follow-up-link workflow is a proposal, not a user-approved business rule.

**Duration distinction:** Calendly paid plans support up to four preset or custom duration choices within one eligible event type, letting the invitee choose and recalculating available slots. This suits approved hourly options such as one/two/three hours. Google documents one configured duration per appointment schedule, including a custom value; separate duration-specific schedules/links are the documented configuration to evaluate for hourly choices. Both can represent the 80-minute service. [Calendly multiple durations](https://calendly.com/help/how-to-set-up-multiple-durations-for-an-event-type), [Google custom duration and schedule settings](https://support.google.com/calendar/answer/10729749).

## Shared capabilities and language handling

Google’s hosted appointment schedules create bookings directly in Calendar, block unavailable times, and can be linked or embedded in the website. Premium features include multiple schedules, automatic email reminders, and checking availability across multiple calendars. Custom schedules include lead time, date overrides, buffers, a daily cap, location, and intake fields. [Google overview](https://support.google.com/calendar/answer/11608416), [premium comparison](https://support.google.com/calendar/answer/16287038), [configuration](https://support.google.com/calendar/answer/10729749).

Calendly invitees need no account to book, cancel, or reschedule; confirmation links manage changes, and connected-calendar conflicts plus timezone display determine the available slots. Verify Chile’s `America/Santiago` timezone and daylight-saving boundaries in either provider. [Calendly scheduling FAQ](https://calendly.com/help/scheduling-faq).

Calendly explicitly provides event-language settings for Spanish as well as English, including standard page text and notifications. Custom service names, descriptions, and questions still need manual translation. Separate Spanish/English service links are a straightforward proposal; they must share conflict checking so both versions reserve the same practitioner’s time. [Calendly language settings](https://calendly.com/help/how-to-change-your-event-type-language).

For Google, the reviewed official configuration docs describe author-entered titles, descriptions, and form fields but do not establish an equivalent per-booking-page locale control. Do not assume a changed interface language translates those authored texts. Test the real booking page and notifications from both site languages; use deliberately authored bilingual text or separate localized schedules if necessary. Do not promise URL language parameters without verification. [Google booking settings](https://support.google.com/calendar/answer/10729749).

## First-version boundaries and trial checks

Payments stay outside the website. Keep the existing rule that marketing pages do not publish service prices unless the user changes that scope. Hosted booking links can replace service-specific WhatsApp inquiry CTAs without adding a server adapter or storing Google OAuth tokens in this Astro site.

Before committing to a provider, test a 60-, 80-, and 90-minute service; both language paths; busy-calendar conflicts; two clients attempting the same slot; cancellation and rescheduling; reminders; mobile booking; the Full follow-up process; hourly duration selection; and prerequisite approval. Decide physical locations, travel buffers, booking notice, cancellation policy, and the exact Google calendar to use. A provider’s intake question alone is not proof that a client completed a prerequisite.
