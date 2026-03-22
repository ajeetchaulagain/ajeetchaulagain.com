# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn develop        # Start development server
yarn build          # Production build
yarn serve          # Serve built site locally
yarn clean          # Clear Gatsby cache (use when builds behave unexpectedly)
yarn type-check     # TypeScript type checking without emitting
yarn format         # Format code with Prettier
```

### Testing (Playwright visual regression)

```bash
yarn playwright test                              # Run all tests
yarn playwright test visual-regression.spec.ts   # Run single test file
yarn playwright test --debug                      # Debug mode
```

Tests run against a live URL. Locally defaults to `https://ajeetchaulagain.com`; override with `PLAYWRIGHT_TEST_BASE_URL`. In CI, they run against the Netlify preview deployment on PRs to master.

## Architecture

**Gatsby static site** — personal portfolio/blog. Content is authored in MDX files and Gatsby dynamically generates pages from them.

### Content flow

- `src/posts/` — Blog posts as MDX files → rendered via `src/templates/BlogPage/`
- `src/projects/` — Project entries as MDX files → rendered via `src/templates/ProjectPage/`
- `gatsby-node.ts` — Queries GraphQL for all posts/projects and programmatically creates pages
- `gatsby-config.ts` — Plugin setup: MDX processing, Prism syntax highlighting, image optimization, sitemap, analytics

### Key patterns

- **Markdown decorators** (`src/markdown-decorators/`) — Custom React components injected into MDX rendering (e.g., `ProjectCardDecorator`, `BlogPostCardDecorator`, `ButtonLinkDecorator`). These are passed as components to the MDX provider so MDX authors can use them directly.
- **Global context** (`src/contexts/GlobalContextProvider.tsx`) — App-wide state (e.g., dark/light theme). Wrapped in `gatsby-browser.js` and `gatsby-ssr.js` to apply to all pages.
- **Styled components** throughout — use `styled-components-breakpoint` for responsive styles and `styled-components-spacing` for spacing utilities.
- **TypeScript path alias** — `baseUrl: ./src/` in `tsconfig.json`, so imports can use `components/...`, `hooks/...`, etc. directly.

### Styling

Global styles live in `src/styles/` (CSS reset, base styles, Prism themes for light/dark mode). Component styles are co-located with components using styled-components.

## yarn resolutions

The `resolutions` field in `package.json` pins specific transitive dependency versions. Do not remove these without understanding why they were added:

| Package | Reason |
|---------|--------|
| `@types/react` | `@reach/router` (used internally by Gatsby) bundles its own older `@types/react`, causing duplicate React type conflicts. Pinned to force a single version. |
| `webpack` | CVE-2025-68458 and CVE-2025-68157 (SSRF, LOW) introduced via `gatsby@5`. Fixed in `webpack@5.104.1`. |
| `sharp` | Gatsby image plugins (gatsby-plugin-sharp, gatsby-transformer-sharp, gatsby-plugin-manifest, gatsby-sharp) each install their own nested copy of `sharp`, causing libvips integrity check failures on Netlify's Linux CI environment. Pinned to force a single hoisted installation. |

## Code style

- ESLint with Airbnb config + TypeScript; Prettier with single quotes, 2-space indent, 80-char line width, trailing commas (es5)
- Strict TypeScript — no unused locals/parameters
