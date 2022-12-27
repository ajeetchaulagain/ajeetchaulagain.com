import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

type ThemeProps = {
  children?: ReactNode;
};

export const colors = {
  light: '#e7deec',
  lightGreen: '#d0fd9b',
  purple: '#5c257f',
  darkGrey: '#333',
  background: '#fff',
  primary: '#783396',
  secondary: '#767676',
  accent: '#d396c3',
  muted: '#efefef',
  error: '#d0453e',
};

export const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const defaultTheme: DefaultTheme = {
  breakpoints: {
    xs: 0,
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
    3: '1rem',
    4: '1.5rem',
    5: '2rem',
    6: '2.5rem',
    7: '3rem',
  },
  colors: colors,
  fonts: {
    body: `Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif`,
    primaryHeading: `'Domine', serif`,
    secondaryHeading: `'Roboto', sans-serif`,
  },
  fontWeights: fontWeights,
  lineHeights: {
    body: 1.5,
    heading: 1.1,
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
  buttonColors: {
    primary: {
      dark: {
        background: colors.purple,
        text: colors.light,
      },
      light: {
        background: colors.light,
        text: colors.darkGrey,
      },
    },
    secondary: {
      dark: {
        background: 'transparent',
        text: colors.light,
        border: '1px solid grey',
      },
      light: {
        background: 'transparent',
        text: colors.darkGrey,
        border: '1px solid grey',
      },
    },
  },
};

export const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};