import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/components/theme/Theme';
import { createGlobalStyle } from 'styled-components';
import '../src/styles/GoogleFonts';
import { CSSReset } from '../src/styles/CSSReset';
import { BaseStyles } from '../src/styles/BaseStyles';

const GlobalStyle = createGlobalStyle`
  ${CSSReset};
  ${BaseStyles};
`;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
};

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions

window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

const themeDecorator = (storyFn) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(themeDecorator);
