import { HeadingFontSize } from '../theme/Theme';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

//TODO: Revisit this file to remove !important once overriding scss is cleaned up

type FontType = 'serif' | 'sans-serif';

type HeadingProps = {
  size?: HeadingFontSize;
  type?: FontType;
  level: 'h1' | 'h2' | 'h3';
  children: ReactNode;
};

const Heading1 = styled.h1<{ size?: HeadingFontSize; type?: FontType }>`
  font-size: ${({ size, theme: { headingFontSizes } }) =>
    size ? headingFontSizes[size] : headingFontSizes.xlarge};

  font-weight: ${(props) => props.theme.fontWeights[9]};
`;

const Heading2 = styled.h2<{ size?: HeadingFontSize; type?: FontType }>`
  font-size: ${({ size, theme: { headingFontSizes } }) =>
    size ? headingFontSizes[size] : headingFontSizes.xlarge};

  font-weight: ${({ theme }) => theme.fontWeights[6]};
`;

const Heading3 = styled.h3<{ size?: HeadingFontSize; type?: FontType }>`
  font-size: ${({ size, theme: { headingFontSizes } }) =>
    size ? headingFontSizes[size] : headingFontSizes.large};

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
    default:
      HeadingComponent = Heading1;
      break;
  }

  const StyledHeadingComponent = styled(HeadingComponent)`
    font-family: ${({ type, theme: { fonts } }) =>
      type === 'sans-serif' ? fonts.secondaryHeading : fonts.primaryHeading};
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.primaryText};
  `;

  return <StyledHeadingComponent {...rest}>{children}</StyledHeadingComponent>;
};

Heading.defaultProps = {
  size: 'xlarge',
  type: 'serif',
  level: 'h1',
};
