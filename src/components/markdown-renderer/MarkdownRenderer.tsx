import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { HeadingProps } from '../heading/Heading';
import {
  StyledHeading,
  StyledHeading1,
  UnorderedList,
  OrderedList,
  ListItem,
  AnchorLink,
  Span,
  StyledParagraph,
} from './styles';

type MarkdownRendererProps = {
  children: string;
};

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
        p: StyledParagraph,
        span: Span,
      }}
    >
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};
