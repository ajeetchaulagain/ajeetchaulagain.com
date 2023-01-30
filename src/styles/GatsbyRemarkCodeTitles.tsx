import { css, DefaultTheme } from 'styled-components';
import { mb, mt, py } from 'styled-components-spacing';
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

    & + .gatsby-highlight {
      ${mb(6)};
      ${mt(0)}

      & > pre[class*='language-'] {
        border-top: unset;
        border-top-left-radius: unset;
        border-top-right-radius: unset;
      }
    }

    ${breakpoint('xs', 'lg')`
       font-size: ${({ theme }: { theme: DefaultTheme }) =>
         theme.fontSizes.xsmall};
    `};
  }
`;
