import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'darkTheme' | 'lightTheme';
    breakpoints: {
      [name in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl']: number;
    };
    spacing: Record<number, string>;
    colors: Record<string, string>;
    fonts: Record<string, string>;
    fontSizes: Record<string, string>;
    headingFontSizes: Record<string, string>;
    fontWeights: number[];
    lineHeights: Record<string, number>;
    borders: Record<string, string>;
    borderRadius: Record<string, string>;
    buttonColors: Record<string, any>;
  }
}
