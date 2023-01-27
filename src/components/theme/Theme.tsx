import { GlobalStateContext } from 'contexts/GlobalContextProvider';
import React, { Dispatch, ReactNode, useContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

type ThemeProps = {
  children?: ReactNode;
};

export type FontSize = keyof typeof fontSizes;
export type HeadingFontSize = keyof typeof headingFontSizes;

export const colors = {
  white: '#ffffff',
  light: '#e7e7e7',
  eerieBlack: '#181818',
  darkCharcoal: '#333333',
  darkGrey: '#1f1f1f',
  lightPurple: '#e3e1fb',
  background: '#fff',
  primary: '#5c257f',
  whiteSmoke: '#f3f6f9',
  whiteCream: '#faf8f2',
  brightLavender: '#c995eb',
  primary90: '#5c257ff8',
  greenBlue90: '#1a75adf8',
  darkCharcoal90: '#333333f8',
  darkGrey90: '#1f1f1ff8',
  oldSilver50: '#85858584',
  lightGrey: '#999',
  darkGrey2: '#2c2c2c',
};

const darkThemeColor = {
  primaryBackground: colors.eerieBlack,
  secondaryBackground: colors.darkGrey,
  tertiaryBackground: colors.darkGrey,
  quaternaryBackground: colors.darkCharcoal,
  primaryText: colors.light,
  secondaryText: colors.darkGrey,
  brandPrimary: colors.brightLavender,
  primaryBorder: colors.eerieBlack,
  secondaryBorder: colors.brightLavender,
  heroGradientStop1: colors.darkCharcoal90,
  heroGradientStop2: colors.darkGrey90,
  brightLavender: colors.brightLavender,
  lightBackground: colors.light,
  oldSilver50: colors.oldSilver50,
  lightGrey: colors.lightGrey,
  cardBorder: colors.darkGrey2,
};

const lightThemeButtonColors = {
  primary: {
    background: colors.primary,
    text: colors.light,
  },
  secondary: {
    background: colors.brightLavender,
    text: colors.darkCharcoal,
  },
};

const darkThemeButtonColors = {
  primary: {
    background: colors.brightLavender,
    text: colors.darkCharcoal,
  },
  secondary: {
    background: colors.brightLavender,
    text: colors.darkCharcoal,
  },
};

const lightThemeColor = {
  primaryBackground: colors.white,
  secondaryBackground: colors.whiteCream,
  tertiaryBackground: colors.whiteSmoke,
  quaternaryBackground: colors.light,
  primaryText: colors.darkCharcoal,
  secondaryText: colors.light,
  brandPrimary: colors.primary,
  primaryBorder: colors.light,
  secondaryBorder: colors.primary,
  brightLavender: colors.brightLavender,
  heroGradientStop1: colors.primary90,
  heroGradientStop2: colors.greenBlue90,
  lightBackground: colors.light,
  oldSilver50: colors.oldSilver50,
  cardBorder: colors.light,
};

export const fontWeights = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const fontSizes = {
  xsmall: '0.9rem',
  small: '0.95rem',
  xmedium: '1.05rem',
  medium: '1.15rem',
  large: '1.3rem',
  xlarge: '1.4rem',
};

const headingFontSizes = {
  xsmall: '1.15rem',
  small: '1.2rem',
  medium: '1.5rem',
  large: '1.8rem',
  xlarge: '2.1rem',
};

const themeCommonProperties = {
  breakpoints: {
    xs: 0,
    xsm: 402,
    sm: 480,
    md: 640,
    lg: 800,
    xl: 992,
    xxl: 1120,
    xxxl: 1200,
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.5rem',
    6: '2rem',
    7: '2.5rem',
    8: '3rem',
    9: '4rem',
    10: '5rem',
    11: '6rem',
    12: '7rem',
  },
  fonts: {
    body: `Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif`,
    primaryHeading: `'Domine', serif`,
    secondaryHeading: `'Inter', sans-serif`,
  },
  fontWeights: fontWeights,
  fontSizes: fontSizes,
  headingFontSizes: headingFontSizes,
  lineHeights: {
    body: 1.8,
    bodyMediumCondensed: 1.7,
    bodyCondensed: 1.5,
    heading: 1.4,
  },
  borders: {
    none: '0',
    thin: '1px solid',
    thick: '2px solid',
  },
  borderRadius: {
    none: '0',
    base: '0.1875rem',
    round: '99999em',
  },
};

export const darkTheme: DefaultTheme = {
  ...themeCommonProperties,
  name: 'darkTheme',
  colors: darkThemeColor,
  buttonColors: darkThemeButtonColors,
};

export const lightTheme: DefaultTheme = {
  ...themeCommonProperties,
  name: 'lightTheme',
  colors: lightThemeColor,
  buttonColors: lightThemeButtonColors,
};

export type ThemeContextType = {
  theme: string;
  themeToggler: Dispatch<string>;
};

export const Theme = ({ children }: ThemeProps) => {
  const { theme } = useContext(GlobalStateContext);
  const themeProps = theme === 'lightTheme' ? lightTheme : darkTheme;
  return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>;
};
