import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const MarkdownWrapper = styled.div`
  ul {
    li:last-child {
      margin-bottom: 1.4rem;
    }
  }
  ol {
    li:last-child {
      margin-bottom: 0.5rem;
    }
  }
  ul li {
    font-size: 1.1rem;
    list-style-type: disc;
    margin-left: 2rem;
    &::marker {
      color: #7b79f4;
    }
  }

  ol li {
    margin-left: 1.1rem;
    &::marker {
      font-weight: bolder;
    }
  }
  // Fix for gatsby remark image left align
  // Todo: revisit for a standard fixes
  .gatsby-resp-image-wrapper {
    // border: 2px solid gray;
    margin: 0 !important;
  }
`;

type MarkdownRendererProps = {
  children: string;
};

export const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <MarkdownWrapper>
      <MDXRenderer>{children}</MDXRenderer>
    </MarkdownWrapper>
  );
};
