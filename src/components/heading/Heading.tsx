import { HeadingFontSize } from '../theme/Theme';
import React, { ReactNode } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type FontType = 'serif' | 'sans-serif';

export type HeadingProps = {
  size?: HeadingFontSize;
  type?: FontType;
  level: 'h1' | 'h2' | 'h3' | 'h4';
  children?: ReactNode;
};

const Heading1 = styled.h1<{ size?: HeadingFontSize; type?: FontType }>`
  font-size: ${({ size, theme: { headingFontSizes } }) =>
    size ? headingFontSizes[size] : headingFontSizes.xlarge};

  font-weight: ${({ theme }) => theme.fontWeights[9]};

  ${breakpoint('xs', 'lg')`
    ${({ size, theme }: { size: HeadingFontSize; theme: DefaultTheme }) => {
      if (size === 'xlarge') {
        return css`
          font-size: ${theme.headingFontSizes.large};
        `;
      }
    }}
  `};
`;

const Heading2 = styled.h2<{ size?: HeadingFontSize; type?: FontType }>`
  font-size: ${({ size, theme: { headingFontSizes } }) =>
    size ? headingFontSizes[size] : headingFontSizes.xlarge};

  font-weight: ${({ theme }) => theme.fontWeights[6]};

  ${breakpoint('xs', 'lg')`
    ${({ size, theme }: { size: HeadingFontSize; theme: DefaultTheme }) => {
      if (size === 'xlarge') {
        return css`
          font-size: ${theme.headingFontSizes.large};
        `;
      }
      if (size === 'large') {
        return css`
          font-size: ${theme.headingFontSizes.medium};
        `;
      }
    }}
  `};
`;

const Heading3 = styled.h3<{ size?: HeadingFontSize; type?: FontType }>`
  font-size: ${({ size, theme: { headingFontSizes } }) =>
    size ? headingFontSizes[size] : headingFontSizes.large};

  font-weight: ${({ theme }) => theme.fontWeights[6]};

  ${breakpoint('xs', 'lg')`
    ${({ size, theme }: { size: HeadingFontSize; theme: DefaultTheme }) => {
      if (size === 'medium') {
        return css`
          font-size: ${theme.headingFontSizes.small};
        `;
      }
      if (['xlarge', 'large'].includes(size)) {
        return css`
          font-size: ${theme.headingFontSizes.medium};
        `;
      }
    }}
  `};
`;

const Heading4 = styled.h3<{ size?: HeadingFontSize; type?: FontType }>`
  font-size: ${({ size, theme: { headingFontSizes } }) =>
    size ? headingFontSizes[size] : headingFontSizes.medium};

  font-weight: ${({ theme }) => theme.fontWeights[5]};
`;

export const Heading = ({ level, children, ...rest }: HeadingProps) => {
  let HeadingComponent;
  switch (level) {
    case 'h1':
      HeadingComponent = Heading1;
      break;
    case 'h2':
      HeadingComponent = Heading2;
      break;
    case 'h3':
      HeadingComponent = Heading3;
      break;
    case 'h4':
      HeadingComponent = Heading4;
    default:
      HeadingComponent = Heading1;
      break;
  }

  const StyledHeadingComponent = styled(HeadingComponent)`
    font-family: ${({ type, theme: { fonts } }) =>
      type === 'sans-serif' ? fonts.secondaryHeading : fonts.primaryHeading};
    line-height: ${({ theme }) => theme.lineHeights.extraCondensed};
    color: ${({ theme }) => theme.colors.primaryText};
  `;

  return <StyledHeadingComponent {...rest}>{children}</StyledHeadingComponent>;
};

Heading.defaultProps = {
  size: 'xlarge',
  type: 'serif',
  level: 'h1',
};
