// ─── Light theme brand ────────────────────────────────────────────────────────
// Update only these four values to switch the entire light theme brand color.
const lightBrand = {
  base: '#EFD2B0', // hero / header / footer background
  accent: '#908f19', // links, accents, nav hover/active on white
  heroText: '#222831', // headings and CTAs rendered on the brand background
  heroParagraph: '#222831', // body text rendered on the brand background
};
// ─────────────────────────────────────────────────────────────────────────────

// ─── Dark theme brand ────────────────────────────────────────────────────────
// Update only these values to switch the entire dark theme brand color.
const darkBrand = {
  base: '#1f1f1f', // hero / header / footer background
  accent: '#81A6C6', // links, hovers, borders, buttons
  heroText: '#e7e7e7', // headings rendered on the brand background
  heroParagraph: '#C8C8C8', // body text rendered on the brand background
};
// ─────────────────────────────────────────────────────────────────────────────

const shared = {
  toggleBall: '#e7e7e7',
  toggleBackground: '#85858584',
};

export const darkThemeColor = {
  ...shared,

  // Backgrounds
  primaryBackground: '#181818',
  secondaryBackground: darkBrand.base,
  tertiaryBackground: darkBrand.base,
  quaternaryBackground: '#333333',

  // Text
  primaryText: '#e7e7e7',
  secondaryText: darkBrand.base,
  projectCardText: '#999',
  tocText: '#aaaaaa',

  // Brand & accents
  brandPrimary: darkBrand.accent,
  heroBackground: '#333333',
  heroText: darkBrand.heroText,
  heroParagraph: darkBrand.heroParagraph,

  // Borders
  primaryBorder: '#181818',
  secondaryBorder: darkBrand.base,
  cardBorder: '#2c2c2c',

  // Code blocks
  codeHighlightBackground: '#1d3526',
  codeHighlightBorderColor: '#316531',
};

export const lightThemeColor = {
  ...shared,
  // Backgrounds
  primaryBackground: '#ffffff',
  secondaryBackground: '#faf8f2',
  tertiaryBackground: '#f3f6f9',
  quaternaryBackground: '#e7e7e7',
  // Text
  primaryText: '#333333',
  secondaryText: '#333333',
  projectCardText: '#333333',
  tocText: '#555555',

  // Brand & accents
  brandPrimary: lightBrand.accent,
  heroBackground: lightBrand.base,
  heroText: lightBrand.heroText,
  heroParagraph: lightBrand.heroParagraph,

  // Borders
  primaryBorder: '#e7e7e7',
  secondaryBorder: lightBrand.base,
  cardBorder: '#e7e7e7',

  // Code blocks
  codeHighlightBackground: '#e6ffec',
  codeHighlightBorderColor: '#65be65',
};

export const lightThemeButtonColors = {
  primary: {
    background: lightBrand.accent,
    text: '#ffffff',
  },
  secondary: {
    background: lightBrand.heroText,
    text: '#ffffff',
  },
};

export const darkThemeButtonColors = {
  primary: {
    background: darkBrand.accent,
    text: '#333333',
  },
  secondary: {
    background: darkBrand.accent,
    text: '#333333',
  },
};
