import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const MarkdownRenderer = styled(MDXRenderer)`
  margin-top: 1rem;
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
    margin-bottom: 0.6rem;
  }
`;
