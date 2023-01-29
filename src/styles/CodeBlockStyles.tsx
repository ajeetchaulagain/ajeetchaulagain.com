import { css } from 'styled-components';
import { DarkTheme } from './PrismDarkTheme';
import { PrismOneLightTheme } from './PrismOneLightTheme';
import { my } from 'styled-components-spacing';

export const CodeBlockStyles = css`
  ${(props) =>
    props.theme.name === 'lightTheme' ? PrismOneLightTheme : DarkTheme};
  .line-numbers.line-numbers .line-numbers-rows {
    padding: 1rem 0.1rem 1rem 0.5rem;
  }

  // Wrapper for code block - Common styles for dark and light theme
  .gatsby-highlight {
    ${my(6)};
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;
