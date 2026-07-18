# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A missionary-support page for my one-year missions trip to Japan. This gives information on a one-page scrolling home page (mission story, video, "why Japan", how to partner/give, prayer requests), a `/updates` blog fed from Sanity CMS, and a `/gallery` page. Content for updates is authored by a non-technical user through an embedded Sanity Studio at `/studio`.

## Tech Stack

- **Next.js 15** (App Router, React 19), TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) + **shadcn/ui** (`new-york` style, see [components.json](components.json)) — components live in [components/ui/](components/ui/)
- **Sanity** (`sanity` v4 + `next-sanity`) as the CMS for `/updates` content, with Studio mounted at `/studio` ([app/studio/[[...tool]]/page.tsx](app/studio/[[...tool]]/page.tsx))
- Fonts: Inter (sans) + Playfair Display (serif, used for headings) loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx)
- `@vercel/analytics` (only mounted in production)

## Development Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint
```

There is no test suite configured in this repo. Package manager is **npm** — a `pnpm-lock.yaml` exists but is an empty stub; use `package-lock.json`/npm for installs.

### Environment variables

Required in `.env.local` (see [sanity/env.ts](sanity/env.ts)):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NOTION_TOKEN` — `@notionhq/client` is a dependency but is not currently referenced anywhere in the codebase; treat any Notion integration as not-yet-wired-up rather than existing functionality.

## Architecture

**Two separate Sanity clients exist — know which one is in play:**
- [lib/sanity.ts](lib/sanity.ts) — hardcoded `projectId`/`dataset`, plus a hand-rolled `urlFor()` string builder. Used by the home page's [components/latest-updates.tsx](components/latest-updates.tsx) and [app/updates/page.tsx](app/updates/page.tsx).
- [sanity/lib/client.ts](sanity/lib/client.ts) — the standard `next-sanity` scaffold client, reads project id/dataset from env vars via [sanity/env.ts](sanity/env.ts). This is the one wired into the Studio config ([sanity.config.ts](sanity.config.ts)) and is the "official" client for anything touching the Studio/schema layer.

When adding new data-fetching for Sanity content, prefer `sanity/lib/client.ts` (env-driven) for consistency with the Studio setup, but be aware existing page components use the other one.

**Content model**: the only Sanity schema is `update` ([sanity/schemaTypes/update.ts](sanity/schemaTypes/update.ts)) — title, slug, date, excerpt, image, tag, featured (boolean, controls the highlighted card), body (Portable Text), prayerSnippet. Pages query it directly with inline GROQ (see `getUpdates`/`getUpdate` in [app/updates/page.tsx](app/updates/page.tsx) and [app/updates/[slug]/page.tsx](app/updates/[slug]/page.tsx)) — there's no shared query/types module.

**[lib/updates-data.ts](lib/updates-data.ts)** is a static mock `Update[]` array left over from before the Sanity migration. It's still imported by [components/updates-navigation.tsx](components/updates-navigation.tsx); everything else now reads live data from Sanity. Don't treat it as a source of truth for real content.

**Styling**: only [app/globals.css](app/globals.css) is imported (from `app/layout.tsx`) and defines the active OKLCH-based theme tokens/Tailwind config. [styles/globals.css](styles/globals.css) is an unused leftover from the v0 scaffold with different (default shadcn) color values — don't edit it expecting it to affect the site. [components/theme-provider.tsx](components/theme-provider.tsx) (next-themes) exists but is not mounted in `app/layout.tsx`, so dark mode isn't currently toggleable at runtime even though dark-mode CSS variables are defined.

**next.config.mjs**: TypeScript build errors are ignored (`ignoreBuildErrors: true`) and image optimization is disabled (`images.unoptimized: true`) — `next/image` is used purely for layout, not Vercel's image pipeline.

## Code Conventions

- Path alias `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)) — use `@/components/...`, `@/lib/...`, `@/hooks/...`.
- Page sections on the home page are plain function components under [components/](components/) (e.g. `HeroSection`, `WhyJapan`, `HowToPartner`), composed in [app/page.tsx](app/page.tsx); each section that needs an anchor link wraps itself in `<section id="...">` in the page rather than the component.
- Data-fetching components (`LatestUpdates`, the `/updates` pages) are `async` Server Components that call `client.fetch(...)` directly with an inline GROQ template string — no data-fetching abstraction layer.
- UI primitives come from shadcn/ui in `components/ui/` — extend/compose these rather than hand-rolling equivalents (buttons, cards, badges, etc. all already exist there).
- Class composition uses the `cn()` helper from [lib/utils.ts](lib/utils.ts) (`clsx` + `tailwind-merge`).

## What to Avoid

- Don't edit `styles/globals.css` expecting visual changes — it's dead code; the live stylesheet is `app/globals.css`.
- Don't add real content to `lib/updates-data.ts` — it's unused mock data; real updates go through the Sanity Studio at `/studio`.
- Don't assume a single Sanity client — check whether a page uses `lib/sanity.ts` or `sanity/lib/client.ts` before adding a query, and see the Architecture note above.
- Don't rely on `npm run build` to surface TypeScript errors — `ignoreBuildErrors` is set, so run `tsc`/check types separately if you need that signal.
