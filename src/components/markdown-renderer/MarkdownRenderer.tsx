import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { VideoPlayer } from '../video-player/VideoPlayer';

import { HeadingProps } from '../heading/Heading';
import {
  StyledHeading,
  StyledHeading1,
  StyledHeading2,
  UnorderedList,
  OrderedList,
  ListItem,
  AnchorLink,
  Span,
  StyledParagraph,
} from './styles';
import { slugify } from './slugify';
import { InfoCallToAction } from '../info-call-to-action/InfoCallToAction';

type MarkdownRendererProps = {
  children: React.ReactNode;
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
          <StyledHeading2
            id={slugify(children)}
            level="h2"
            size="large"
            type="serif"
          >
            {children}
          </StyledHeading2>
        ),
        h3: ({ children }: HeadingProps) => (
          <StyledHeading
            id={slugify(children)}
            level="h3"
            size="medium"
            type="serif"
          >
            {children}
          </StyledHeading>
        ),
        h4: ({ children }: HeadingProps) => (
          <StyledHeading level="h4" size="small" type="serif">
            {children}
          </StyledHeading>
        ),
        ul: UnorderedList,
        ol: OrderedList,
        li: ListItem,
        a: ({
          href,
          children,
          ...props
        }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
          <AnchorLink to={href ?? ''} {...(props as object)}>
            {children}
          </AnchorLink>
        ),
        p: StyledParagraph,
        span: Span,
        VideoPlayer,
        InfoCallToAction,
      }}
    >
      {children}
    </MDXProvider>
  );
};
