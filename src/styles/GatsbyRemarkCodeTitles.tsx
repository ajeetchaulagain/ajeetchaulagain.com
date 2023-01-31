import { css, DefaultTheme } from 'styled-components';
import { mb, mt, py, p } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';

export const GatsbyRemarkCodeTitles = css`
  .gatsby-remark-code-title-wrapper {
    ${py(2)};
    ${mt(6)};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.brandPrimary};
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    text-align: center;
    border-top-left-radius: ${({ theme }) => theme.borderRadius.base};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.base};
    background-color: ${({ theme }) => theme.colors.tertiaryBackground};
    line-height: ${({ theme }) => theme.lineHeights.extraCondensed};

    & + .gatsby-highlight {
      ${mb(6)};
      ${mt(0)};

      & > pre[class*='language-'] {
        border-top: none;
        border-top-left-radius: unset;
        border-top-right-radius: unset;
        ${p(5)};

        ${breakpoint('xs', 'md')`
          ${p(5)};
        `};
      }
    }

    ${breakpoint('xs', 'lg')`
       font-size: ${({ theme }: { theme: DefaultTheme }) =>
         theme.fontSizes.xsmall};
    `};

    ${breakpoint('xs', 'md')`
        margin-left:-1rem;
        margin-right:-1rem;
        border-left:none;
        border-right:none;
        border-radius:unset;
    `};
  }
`;
