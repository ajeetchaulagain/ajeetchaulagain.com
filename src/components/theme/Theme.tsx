import { GlobalStateContext } from 'contexts/GlobalContextProvider';
import React, { Dispatch, ReactNode, useContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import {
  lightThemeColor,
  darkThemeColor,
  lightThemeButtonColors,
  darkThemeButtonColors,
} from './colors';

type ThemeProps = {
  children?: ReactNode;
};

export type FontSize = keyof typeof fontSizes;
export type HeadingFontSize = keyof typeof headingFontSizes;

export const fontWeights = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const fontSizes = {
  xsmall: '0.975rem',
  small: '1.05rem',
  xmedium: '1.125rem',
  medium: '1.2rem',
  large: '1.3rem',
  xlarge: '1.4rem',
};

const headingFontSizes = {
  small: '1.2rem',
  medium: '1.5rem',
  large: '1.8rem',
  xlarge: '2.1rem',
};

const themeCommonProperties = {
  breakpoints: {
    xs: 0,
    xsm: 370,
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
    body: `Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif`,
    primaryHeading: `'Domine', serif`,
    secondaryHeading: `'Roboto', sans-serif`,
  },
  fontWeights: fontWeights,
  fontSizes: fontSizes,
  headingFontSizes: headingFontSizes,
  lineHeights: {
    regular: 1.8,
    condensed: 1.5,
    extraCondensed: 1.4,
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
