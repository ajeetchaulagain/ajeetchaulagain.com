import styled, { DefaultTheme } from 'styled-components';
import { px, py, my } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border-left: 4px solid ${({ theme }) => theme.colors.brandPrimary};
  ${px(5)};
  ${py(4)};
  ${my(6)};

  ${breakpoint('xs', 'md')`
    ${px(3)};
    ${py(3)};
    gap:0.75rem
  `};

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.brandPrimary};
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    :hover {
      text-decoration: none;
    }
  }
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.brandPrimary};
  color: #ffffff;
  font-size: 1rem;
  margin-top: 0.1rem;

  ${breakpoint('xs', 'md')`
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.75rem;
    margin-top: 0.15rem;
  `};
`;

export const ContentWrapper = styled.div`
  width: 100%;

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights[4]};
    line-height: ${({ theme }) => theme.lineHeights.condensed};
    color: ${({ theme }) => theme.colors.primaryText};

    & + p {
      margin-top: 0.5rem;
    }

    ${breakpoint('xs', 'lg')`
      font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.xsmall};
    `};
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeights[6]};
  }

  code {
    font-size: 0.9em;
  }
`;
