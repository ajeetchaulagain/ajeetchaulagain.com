import { css } from 'styled-components';
import { DarkTheme } from './PrismDarkTheme';
import { PrismOneLightTheme } from './PrismOneLightTheme';
import { my } from 'styled-components-spacing';

export const CodeBlockStyles = css`
  ${(props) =>
    props.theme.name === 'lightTheme' ? PrismOneLightTheme : DarkTheme};

  // Common Styles for dark and light theme
  .gatsby-highlight {
    ${my(6)};
  }
  .line-numbers.line-numbers .line-numbers-rows {
    padding: 1rem 0.1rem 1rem 0.5rem;
    border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`;
