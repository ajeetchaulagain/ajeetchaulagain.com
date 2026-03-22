import { css } from 'styled-components';
import { my } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { DarkTheme } from './PrismDarkTheme';
import { PrismOneLightTheme } from './PrismOneLightTheme';

export const CodeBlockStyles = css`
  ${(props) =>
    props.theme.name === 'lightTheme' ? PrismOneLightTheme : DarkTheme};

  // Common Styles for dark and light theme
  .gatsby-highlight {
    ${my(6)};
    position: relative;

    ${breakpoint('xs', 'md')`
        margin-left:-1rem;
        margin-right:-1rem;
    `};
  }

  .copy-code-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-radius: ${({ theme }) => theme.borderRadius.base};
    color: ${({ theme }) => theme.colors.primaryText};
    cursor: pointer;
    opacity: 0.5;
    transition: color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
    line-height: 0;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.brandPrimary};
      border-color: ${({ theme }) => theme.colors.brandPrimary};
    }

    &.copied {
      opacity: 1;
      color: ${({ theme }) => theme.colors.brandPrimary};
      border-color: ${({ theme }) => theme.colors.brandPrimary};
    }

    &--in-title {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .gatsby-highlight-code-line {
    background-color: ${({ theme }) => theme.colors.codeHighlightBackground};
    display: block;
    padding-left: calc(1.5rem - 5px);
    border-left: 5px solid
      ${({ theme }) => theme.colors.codeHighlightBorderColor};
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    ${breakpoint('xs', 'md')`
        margin-left:-1rem;
        margin-right:-1rem;
        padding-left: calc(1rem - 5px);
    `};
  }

  pre[class*='language-'].line-numbers {
    padding-left: 3.8em !important;
  }

  /* Extend highlighted lines to cover the full line-numbers gutter */
  pre[class*='language-'].line-numbers .gatsby-highlight-code-line {
    margin-left: -3.8em;
    padding-left: calc(3.8em - 5px);
  }

  .line-numbers.line-numbers .line-numbers-rows {
    top: 1.5rem;
    bottom: 1.5rem;
    padding: 0 0.5rem 0 1rem;
    border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};

    ${breakpoint('xs', 'md')`
      top: 1rem;
      bottom: 1rem;
    `};
  }
`;
