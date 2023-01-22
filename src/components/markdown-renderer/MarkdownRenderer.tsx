import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { mb, mt, ml } from 'styled-components-spacing';
import { MDXProvider } from '@mdx-js/react';
import { Heading, HeadingProps } from 'components/heading/Heading';
import { Paragraph } from 'components/paragraph/Paragraph';
import Link from 'components/link/Link';

const AnchorLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.brandPrimary};
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  :hover {
    text-decoration: none;
  }
`;

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.colors.primaryText};
  ${ml(5)};
`;

const UnorderedList = styled.ul`
  ${ListItem} {
    list-style-type: disc;
    &::marker {
      color: ${({ theme }) => theme.colors.brightLavender};
    }
  }
  ${mb(5)};
`;

const OrderedList = styled.ol`
  ${mb(5)};
`;

// Fixes for gatsby span wrapper
const Span = styled.span`
  &.gatsby-resp-image-wrapper {
    margin: 0 !important;
  }
`;

type MarkdownRendererProps = {
  children: string;
};

const StyledHeading = styled(Heading)`
  ${mb(2)};
  ${mt(7)};
`;

const StyledHeading1 = styled(Heading)`
  ${mb(2)};
`;

export const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <MDXProvider
      components={{
        h1: ({ children }: HeadingProps) => (
          <StyledHeading1 level="h1" size="xlarge" type="serif">
            {children}
          </StyledHeading1>
        ),
        h2: ({ children }: HeadingProps) => (
          <StyledHeading level="h2" size="large" type="sans-serif">
            {children}
          </StyledHeading>
        ),
        h3: ({ children }: HeadingProps) => (
          <StyledHeading level="h3" size="medium" type="sans-serif">
            {children}
          </StyledHeading>
        ),
        h4: ({ children }: HeadingProps) => (
          <StyledHeading level="h4" size="small" type="sans-serif">
            {children}
          </StyledHeading>
        ),
        ul: UnorderedList,
        ol: OrderedList,
        li: ListItem,
        a: AnchorLink,
        p: Paragraph,
        span: Span,
      }}
    >
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};
