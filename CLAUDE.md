# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn develop        # Start development server (hot reload)
yarn build          # Production build (required before playwright tests)
yarn serve          # Serve production build locally on :9000
yarn clean          # Clear Gatsby cache — run this when builds behave unexpectedly
yarn type-check     # TypeScript type checking without emitting
yarn format         # Format all files with Prettier
```

### Testing (Playwright visual regression)

Tests run against a served production build — always `yarn build && yarn serve` before running locally.

```bash
yarn playwright test                                        # Run all 30 tests
yarn playwright test visual-regression-dark-theme.spec.ts  # Run single spec
yarn playwright test --grep "Home Page"                     # Run by name
yarn playwright test --update-snapshots                     # Regenerate baselines
yarn playwright test --debug                                # Debug mode
```

The local base URL is set via `.env.local`:
```
PLAYWRIGHT_TEST_BASE_URL=http://localhost:9000/
```

In CI, `PLAYWRIGHT_TEST_BASE_URL` is set to the Netlify preview URL for the PR.

### Snapshot baselines

30 tests total: 5 pages × 2 themes (light/dark) × 3 viewports (mobile/tablet/desktop).

Snapshots are stored under `tests/__screenshots__/{platform}/` where platform is auto-detected via `process.platform` in `playwright.config.ts`. No env var needed — macOS and Linux CI each use their own folder automatically.

- **Local (macOS):** `tests/__screenshots__/darwin/`
- **CI (Linux):** `tests/__screenshots__/linux/`

**Updating baselines locally** (after a deliberate visual change):
```bash
yarn build && yarn serve
yarn playwright test --update-snapshots
git add tests/__screenshots__/darwin/
```

**Updating CI baselines:** Trigger a CI run with `--update-snapshots` and commit the updated `tests/__screenshots__/linux/` files. The darwin and linux folders are independent — updating one doesn't affect the other.

**If Gatsby caching causes a webpack error** after switching branches or reverting packages, run `yarn clean` before `yarn build`.

## Architecture

**Gatsby 5 static site** — personal portfolio/blog. Content is MDX files; Gatsby generates pages from them at build time.

### Content flow

- `src/posts/` — Blog posts as MDX → rendered via `src/templates/BlogPage/`
- `src/projects/` — Project entries as MDX → rendered via `src/templates/ProjectPage/`
- `gatsby-node.ts` — GraphQL queries all posts/projects and programmatically creates pages
- `gatsby-config.ts` — Plugin setup: MDX, Prism syntax highlighting, image optimization, sitemap, analytics

### Key patterns

- **Markdown decorators** (`src/markdown-decorators/`) — Custom React components injected into MDX (e.g. `BlogPostCardDecorator`, `ButtonLinkDecorator`). Registered in the MDX provider so MDX authors can use them as JSX tags directly in content.
- **MarkdownRenderer** (`src/components/markdown-renderer/`) — Wraps `MDXProvider`, maps HTML elements (h1–h4, ul, ol, a, p, etc.) to styled components. Add new MDX-injectable components here.
- **Global context** (`src/contexts/GlobalContextProvider.tsx`) — App-wide state (dark/light theme toggle). Wrapped in both `gatsby-browser.js` and `gatsby-ssr.js`.
- **Theme system** — `src/components/theme/colors.ts` defines light/dark color tokens; `src/components/theme/brand.ts` defines brand colors (primary, accent). Theme is injected via `ThemeProvider` from styled-components.
- **TypeScript path alias** — `baseUrl: ./src/` in `tsconfig.json`. Pages and templates import from `components/...`, `hooks/...` etc. (absolute). Components import siblings with relative paths (`../heading/Heading`).

### Import conventions

- `src/pages/` and `src/templates/` — use absolute barrel imports: `import { Foo } from 'components/foo/Foo'`
- `src/components/` — use relative imports for siblings: `import { Bar } from '../bar/Bar'`
- Do not re-export internal styled components from `src/components/index.ts` — only export public-facing React components

### Styling

Component styles are co-located in a `styles.tsx` file next to each component. Global styles live in `src/styles/` and are composed in `GlobalStyle` (CSS reset, base styles, Prism themes, scrollbar, code titles).

#### Styled-components utilities

```ts
import { mt, mb, p, mr } from 'styled-components-spacing'; // spacing scale 0–12
import breakpoint from 'styled-components-breakpoint';      // responsive helpers

const Card = styled.div`
  ${p(5)};                              // padding: 1.5rem
  ${breakpoint('xs', 'lg')`            // applies between xs and lg
    ${p(4)};
  `}
`;
```

#### Accessing theme tokens

```ts
const El = styled.div`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-weight: ${({ theme }) => theme.fontWeights[5]};  // 500
`;
```

## Design system

### Breakpoints

| Name | px | Viewport |
|------|----|---------|
| `xs` | 0 | mobile |
| `xsm` | 370 | small mobile |
| `sm` | 480 | |
| `md` | 640 | tablet |
| `lg` | 800 | |
| `xl` | 992 | desktop |
| `xxl` | 1120 | |
| `xxxl` | 1200 | large desktop |

### Spacing scale

`styled-components-spacing` utilities (`mt`, `mb`, `p`, `mr`, etc.) take a scale key 0–12:

| Key | Value |
|-----|-------|
| 0 | 0 |
| 1 | 0.25rem |
| 2 | 0.5rem |
| 3 | 0.75rem |
| 4 | 1rem |
| 5 | 1.5rem |
| 6 | 2rem |
| 7 | 2.5rem |
| 8 | 3rem |
| 9 | 4rem |
| 10 | 5rem |

### Typography

**Fonts** (`theme.fonts`):
| Key | Family |
|-----|--------|
| `body` | Source Sans Pro, system fallbacks |
| `primaryHeading` | Domine (serif) |
| `secondaryHeading` | Roboto |

**Font sizes** (`theme.fontSizes`):
| Key | Value |
|-----|-------|
| `xsmall` | 0.975rem |
| `small` | 1.05rem |
| `xmedium` | 1.125rem |
| `medium` | 1.2rem |
| `large` | 1.3rem |
| `xlarge` | 1.4rem |

**Heading sizes** (`theme.headingFontSizes`): `small` 1.2rem → `medium` 1.5rem → `large` 1.8rem → `xlarge` 2.1rem

**Font weights** (`theme.fontWeights[n]`): index 0–9 maps to 0, 100, 200 … 900 — e.g. `fontWeights[4]` = 400, `fontWeights[7]` = 700

**Line heights** (`theme.lineHeights`): `regular` 1.8 · `condensed` 1.5 · `extraCondensed` 1.4

### Theming (light / dark)

Source of truth is `src/components/theme/brand.ts` — edit brand values there to shift the whole theme:

```ts
// light
lightBrand = { base: '#81A6C6', accent: '#3B6E9A', heroText: '#0f2035', heroParagraph: '#2a4a68' }
// dark
darkBrand  = { base: '#1f1f1f', accent: '#81A6C6', heroText: '#e7e7e7', heroParagraph: '#C8C8C8' }
```

Color tokens (`theme.colors`) derived from brand values:

| Token | Purpose |
|-------|---------|
| `primaryBackground` | Page background |
| `secondaryBackground` | Section / card background |
| `tertiaryBackground` | Code title bar, subtle fills |
| `quaternaryBackground` | Hover states |
| `primaryText` | Body text |
| `brandPrimary` | Links, accents, primary CTA — equals `accent` |
| `heroBackground` | Header / hero area background |
| `heroText` / `heroParagraph` | Text rendered on brand background |
| `cardBorder` | Card / code block borders |
| `codeHighlightBackground` | Highlighted line fill |
| `codeHighlightBorderColor` | Highlighted line left-border accent |

Theme is toggled via `useThemeToggle` hook → `GlobalContextProvider` → `GlobalStateContext`. Default is `lightTheme`. Wrapped in `gatsby-browser.js` and `gatsby-ssr.js` so it applies to all pages including SSR.

### Code syntax highlighting

Two Prism themes co-located in `src/styles/`:
- **Dark:** Laserwave — colourful on dark background
- **Light:** One Light (Atom) — subtle on white background

Theme is applied conditionally in `CodeBlockStyles.tsx`:
```ts
${({ theme }) => theme.name === 'lightTheme' ? PrismOneLightTheme : PrismDarkTheme}
```

Highlighted lines use `theme.colors.codeHighlightBackground` + `codeHighlightBorderColor` for the left accent border.

## Deployment

- **Host:** Netlify
- **Branch deploys:** Every PR to `master` gets a Netlify preview URL; CI runs Playwright against it
- **Production:** Merges to `master` auto-deploy to `https://ajeetchaulagain.com`

## Package upgrade constraints

These packages must **not** be upgraded to the next major version without careful testing:

| Package | Current | Reason to hold |
|---------|---------|----------------|
| `styled-components` | 5 | v6 may change CSS output and break visual regression baselines |
| `react` / `react-dom` | 18 | React 19 has breaking changes; Gatsby 5 compatibility unverified |
| `@mdx-js/react` | 2 | v3 breaks MDXProvider API used in MarkdownRenderer |
| `react-icons` | 4 | v5 restructured FA packages; some icons renamed/moved |
| `prism-react-renderer` | 1 | v2 has breaking API changes; used for code block rendering |
| `eslint` | 7 | v9 requires flat config migration |
| `@fontsource/*` | 4 | v5 changes font metrics causing pixel-level visual regression failures |

## yarn resolutions

The `resolutions` field in `package.json` pins transitive dependency versions. Do not remove without understanding why:

| Package | Reason |
|---------|--------|
| `@types/react` | `@reach/router` (Gatsby internal) ships its own older `@types/react`, causing duplicate type conflicts. Pinned to force a single version. |
| `webpack` | CVE-2025-68458 and CVE-2025-68157 (SSRF) via `gatsby@5`. Fixed in `webpack@5.104.1`. |
| `sharp` | Gatsby image plugins each install their own nested `sharp`, causing libvips integrity failures on Netlify CI. Pinned to force a single hoisted copy. |

## Code style

- ESLint with Airbnb config + TypeScript; Prettier: single quotes, 2-space indent, 80-char line width, trailing commas (es5)
- Strict TypeScript — no unused locals/parameters (`strict: true` in tsconfig)
- No default exports — use named exports throughout
