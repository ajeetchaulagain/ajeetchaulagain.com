import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Heading1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-family: ${(props) => props.theme.headingFontFamily};
  color: ${(props) => props.theme.headingFontColor};
`;

const Heading2 = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h2};
  font-family: ${(props) => props.theme.headingFontFamily};
  color: ${(props) => props.theme.headingFontColor};
`;

const Heading3 = styled.h3`
  font-size: ${(props) => props.theme.fontSize.h3};
  font-family: ${(props) => props.theme.headingFontFamily};
  color: ${(props) => props.theme.headingFontColor};
`;

const Heading4 = styled.h4`
  font-size: ${(props) => props.theme.fontSize.h4};
  font-family: ${(props) => props.theme.headingFontFamily};
  color: ${(props) => props.theme.headingFontColor};
`;
const Heading5 = styled.h5`
  font-size: ${(props) => props.theme.fontSize.h5};
  font-family: ${(props) => props.theme.headingFontFamily};
  color: ${(props) => props.theme.headingFontColor};
`;
const Heading6 = styled.h6`
  font-size: ${(props) => props.theme.fontSize.h6};
  font-family: ${(props) => props.theme.headingFontFamily};
  color: ${(props) => props.theme.headingFontColor};
`;

type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  size: HeadingSize;
  children: ReactNode;
};

export const Heading = ({ children, size }: HeadingProps) => {
  switch (size) {
    case 1:
      return <Heading1>{children}</Heading1>;
    case 2:
      return <Heading2>{children}</Heading2>;
    case 3:
      return <Heading3>{children}</Heading3>;
    case 4:
      return <Heading4>{children}</Heading4>;
    case 5:
      return <Heading5>{children}</Heading5>;
    case 6:
      return <Heading6>{children}</Heading6>;
    default:
      return <Heading1>{children}</Heading1>;
  }
};
