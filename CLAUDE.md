# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A missionary-support page for my one-year missions trip to Japan. This gives information on a one-page scrolling home page (mission story, video, "why Japan", how to partner/give, prayer requests), a `/updates` blog fed from Sanity CMS, and a `/gallery` page. Content for updates is authored by a non-technical user through an embedded Sanity Studio at `/studio`.

Newsletters are designed externally in Canva and exported as a PDF; the site archives them (via Sanity) rather than composing them. Actually sending the newsletter happens through Mailchimp — visitors who subscribe on the site are synced into a Mailchimp audience, and a campaign is manually built/sent there each time (see "Newsletter subscriber pipeline" below). The website's job is capture + archive, not sending.

## Tech Stack

- **Next.js 15** (App Router, React 19), TypeScript, dev server runs on **Turbopack** (`next dev --turbopack`)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) + **shadcn/ui** (`new-york` style, see [components.json](components.json)) — components live in [components/ui/](components/ui/)
- **Sanity** (`sanity` v4 + `next-sanity`) as the CMS for `/updates` content, with Studio mounted at `/studio` ([app/studio/[[...tool]]/page.tsx](app/studio/[[...tool]]/page.tsx))
- **Postgres** (via the `postgres` package, [lib/db.ts](lib/db.ts)) for newsletter subscriber capture — a small `subscribers` table (see [db/schema.sql](db/schema.sql))
- **Mailchimp** (REST API via `fetch`, no SDK — see [lib/mailchimp.ts](lib/mailchimp.ts)) as the actual mailing list/send platform
- **zod** for request validation (currently just the subscribe route)
- Fonts: Inter (sans) + Playfair Display (serif, used for headings) loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx)
- `@vercel/analytics` (only mounted in production)

## Development Commands

```bash
npm run dev      # start dev server (Turbopack)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint
```

There is no test suite configured in this repo. Package manager is **npm** — a `pnpm-lock.yaml` exists but is an empty stub; use `package-lock.json`/npm for installs.

### Environment variables

Required in `.env.local`:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` (see [sanity/env.ts](sanity/env.ts))
- `DATABASE_URL` — Postgres connection string (Neon), used by [lib/db.ts](lib/db.ts)
- `ADMIN_PASSWORD` — gates `/admin/*` via Basic Auth in [middleware.ts](middleware.ts); if unset, `/admin/*` fails closed (stays locked) rather than opening up
- `MAILCHIMP_API_KEY` — includes the datacenter suffix (e.g. `-us7`), which [lib/mailchimp.ts](lib/mailchimp.ts) parses out of the key itself rather than storing separately
- `MAILCHIMP_AUDIENCE_ID` — the Mailchimp list/audience subscribers get added to
- `NOTION_TOKEN` — `@notionhq/client` is a dependency but is not currently referenced anywhere in the codebase; treat any Notion integration as not-yet-wired-up rather than existing functionality.

## Architecture

**Two separate Sanity clients exist — know which one is in play:**
- [lib/sanity.ts](lib/sanity.ts) — hardcoded `projectId`/`dataset`, plus a hand-rolled `urlFor()` string builder. Used by the home page's [components/latest-updates.tsx](components/latest-updates.tsx), [app/updates/page.tsx](app/updates/page.tsx), and [app/updates/[slug]/page.tsx](app/updates/[slug]/page.tsx).
- [sanity/lib/client.ts](sanity/lib/client.ts) — the standard `next-sanity` scaffold client, reads project id/dataset from env vars via [sanity/env.ts](sanity/env.ts). This is the one wired into the Studio config ([sanity.config.ts](sanity.config.ts)) and is the "official" client for anything touching the Studio/schema layer.

When adding new data-fetching for Sanity content, prefer `sanity/lib/client.ts` (env-driven) for consistency with the Studio setup, but be aware existing page components use the other one.

**Content model**: the only Sanity schema is `update` ([sanity/schemaTypes/update.ts](sanity/schemaTypes/update.ts)) — title, slug, date, excerpt, image (cover photo), `newsletterFile` (the actual newsletter, a Canva-exported PDF), tag, featured (boolean, controls the highlighted card), body (optional Portable Text — secondary to the PDF, guard its rendering since most entries won't use it), prayerSnippet. Pages query it directly with inline GROQ (see `getUpdates`/`getUpdate` in [app/updates/page.tsx](app/updates/page.tsx) and [app/updates/[slug]/page.tsx](app/updates/[slug]/page.tsx)) — there's no shared query/types module.

**Newsletter subscriber pipeline**: [components/newsletter-form.tsx](components/newsletter-form.tsx) (a small client component with loading/success/error state) posts to [app/api/subscribe/route.ts](app/api/subscribe/route.ts), which dual-writes — inserts into the Postgres `subscribers` table (source of truth for your own records) and calls `addSubscriberToMailchimp` (adds them to the real audience that gets emailed). Mailchimp failures are logged but never fail the request, since the Postgres write is the one that must succeed. The form is surfaced sitewide via [components/subscribe-dialog.tsx](components/subscribe-dialog.tsx), triggered from a "Subscribe" button in [components/navigation.tsx](components/navigation.tsx) (desktop + mobile).

**Admin view**: [app/admin/subscribers/page.tsx](app/admin/subscribers/page.tsx) lists the Postgres subscriber table directly (this is a local mirror for your own visibility — the real send list lives in Mailchimp's own dashboard). `/admin` redirects to `/admin/subscribers`. Everything under `/admin/*` is gated by [middleware.ts](middleware.ts) via HTTP Basic Auth against `ADMIN_PASSWORD`.

**Navigation**: a single [components/navigation.tsx](components/navigation.tsx) is used on every page (home, `/updates`, `/updates/[slug]`, `/gallery`) — it's pathname-aware for active-link styling. There used to be three separate near-duplicate nav components; don't reintroduce per-page nav variants.

**Styling**: only [app/globals.css](app/globals.css) is imported (from `app/layout.tsx`) and defines the active OKLCH-based theme tokens/Tailwind config. [styles/globals.css](styles/globals.css) is an unused leftover from the v0 scaffold with different (default shadcn) color values — don't edit it expecting it to affect the site. [components/theme-provider.tsx](components/theme-provider.tsx) (next-themes) exists but is not mounted in `app/layout.tsx`, so dark mode isn't currently toggleable at runtime even though dark-mode CSS variables are defined.

**next.config.mjs**: TypeScript build errors are ignored (`ignoreBuildErrors: true`) and image optimization is disabled (`images.unoptimized: true`) — `next/image` is used purely for layout, not Vercel's image pipeline.

## Code Conventions

- Path alias `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)) — use `@/components/...`, `@/lib/...`, `@/hooks/...`.
- Page sections on the home page are plain function components under [components/](components/) (e.g. `HeroSection`, `WhyJapan`, `HowToPartner`), composed in [app/page.tsx](app/page.tsx); each section that needs an anchor link wraps itself in `<section id="...">` in the page rather than the component.
- Data-fetching components (`LatestUpdates`, the `/updates` pages) are `async` Server Components that call `client.fetch(...)` directly with an inline GROQ template string — no data-fetching abstraction layer.
- External services each get one small dedicated file in `lib/` ([lib/sanity.ts](lib/sanity.ts), [lib/db.ts](lib/db.ts), [lib/mailchimp.ts](lib/mailchimp.ts)) rather than scattering client setup across call sites.
- UI primitives come from shadcn/ui in `components/ui/` — extend/compose these rather than hand-rolling equivalents (buttons, cards, badges, dialogs, tables all already exist there).
- Class composition uses the `cn()` helper from [lib/utils.ts](lib/utils.ts) (`clsx` + `tailwind-merge`).

## What to Avoid

- Don't edit `styles/globals.css` expecting visual changes — it's dead code; the live stylesheet is `app/globals.css`.
- Don't assume a single Sanity client — check whether a page uses `lib/sanity.ts` or `sanity/lib/client.ts` before adding a query, and see the Architecture note above.
- Don't rely on `npm run build` to surface TypeScript errors — `ignoreBuildErrors` is set, so run `tsc`/check types separately if you need that signal.
- Don't reintroduce per-page nav components — use the single `components/navigation.tsx`.
- Don't treat `/admin/subscribers` as the real mailing list — it's a local backup view; Mailchimp's own audience is what actually gets sent to.
