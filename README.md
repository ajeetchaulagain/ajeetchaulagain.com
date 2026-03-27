# ajeetchaulagain.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/01037ec1-a520-48f6-bb0f-c9197bcc96fe/deploy-status)](https://app.netlify.com/sites/ajeetchaulagain/deploys)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/91f81be871868cebd95a/maintainability)](https://codeclimate.com/github/ajeetchaulagain/ajeetchaulagain.com/maintainability)

My personal site — portfolio, blog, and a place to write about software. Built with Gatsby, React, TypeScript, and styled-components.

Started in 2019 as a hand-rolled static site. Over the years it has gone through several redesigns, a Gatsby upgrade, a full dark/light theming system, MDX-powered blog posts, and Playwright visual regression tests. Recently, day-to-day development has been assisted by [Claude Code](https://claude.ai/code).

**Live site:** [ajeetchaulagain.com](https://ajeetchaulagain.com)
**Design system:** [ajeetchaulagain.com/design-system](https://ajeetchaulagain.com/design-system)

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Gatsby 5](https://www.gatsbyjs.com/) |
| Language | TypeScript |
| UI | React 18 |
| Styling | styled-components 5, styled-components-breakpoint, styled-components-spacing |
| Content | MDX (blog posts and project pages) |
| Syntax highlighting | Prism.js (Laserwave dark · One Light) |
| Testing | Playwright (visual regression) |
| Deployment | Netlify |

---

## Running locally

```bash
# Install dependencies
yarn

# Start development server with hot reload
yarn develop

# Or build and serve the production version (required for visual regression tests)
yarn build && yarn serve
```

The dev server runs at `http://localhost:8000`. The production serve runs at `http://localhost:9000`.

---

## Testing

Visual regression tests use Playwright and run against a live URL. Locally they default to `http://localhost:9000/` — set this in `.env.local`:

```
PLAYWRIGHT_TEST_BASE_URL=http://localhost:9000/
```

```bash
# Run all 30 tests (5 pages × 2 themes × 3 viewports)
yarn playwright test

# Regenerate baselines after a deliberate visual change
yarn build && yarn serve
yarn playwright test --update-snapshots
```

Snapshot baselines are split by platform (`tests/__screenshots__/darwin/` for macOS, `tests/__screenshots__/linux/` for CI) so local and CI runs never conflict.

---

## Project structure

```
src/
├── pages/          # Gatsby pages (index, blog, about, design-system …)
├── posts/          # Blog posts as MDX files
├── projects/       # Project entries as MDX files
├── components/     # All React components, co-located with their styles
│   └── theme/      # Color tokens, brand values, theme config
├── styles/         # Global styles (CSS reset, Prism themes, scrollbar)
├── contexts/       # GlobalContextProvider (dark/light theme state)
├── hooks/          # Custom hooks
└── templates/      # BlogPage and ProjectPage templates
```

Content lives in `src/posts/` and `src/projects/` as MDX files. Gatsby reads them via `gatsby-node.ts` and programmatically creates pages at build time.

---

## Design system

The site has a living design system page at [/design-system](https://ajeetchaulagain.com/design-system) that documents:

- **Brand colors** — the four source-of-truth values per theme (`src/components/theme/brand.ts`)
- **Color tokens** — all `theme.colors` entries for both light and dark themes
- **Typography** — heading scale, body text, font size and weight reference
- **Spacing** — the 0–10 spacing scale used with `styled-components-spacing`
- **Breakpoints** — all 8 breakpoints (xs → xxxl)
- **Components** — ButtonLink and Tag variants
- **Styling guide** — code snippets for theme tokens, spacing, and breakpoints

If you're taking design inspiration from this site, the design system page is the best starting point.

---

## Contributing / taking inspiration

This site isn't a template, but the code is open and you're welcome to learn from or adapt any part of it.

**Before making changes**, read [`CLAUDE.md`](CLAUDE.md) — it documents the architecture, import conventions, styling patterns, package constraints, and testing workflow in detail.

**Key things to know:**

- Component styles live in a co-located `styles.tsx` next to each component
- `src/pages/` and `src/templates/` use absolute imports (`'components/...'`); components use relative imports (`'../sibling'`)
- The theme's brand colors live in `src/components/theme/brand.ts` — edit there to change the site's color scheme
- Several packages are pinned to specific major versions intentionally — check `CLAUDE.md` before upgrading
- Visual regression tests must pass before merging; run `yarn playwright test` after any styling change

**To submit a PR:**

1. Fork and branch from `master`
2. Make your changes and run `yarn type-check` + `yarn build`
3. Open a PR — Netlify will create a preview URL and CI will run Playwright against it

---

## License

Open source under the [MIT License](LICENSE).
