import React from 'react';
import styled, { css } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { mb, mt, ml } from 'styled-components-spacing';

const GlobalMarkdownStyles = css`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  color: ${({ theme }) => theme.colors.primaryText};
`;

const AnchorLinkStyles = css`
  a {
    color: ${({ theme }) => theme.colors.brandPrimary};
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    :hover {
      text-decoration: none;
    }
  }
`;

const HeadingStyles = css`
  h1 {
    font-weight: ${({ theme }) => theme.fontWeights[9]};
    font-family: ${({ theme }) => theme.fonts.primaryHeading};
    font-size: ${({ theme }) => theme.headingFontSizes.xlarge};
    line-height: ${({ theme }) => theme.lineHeights.heading};
    ${mb(2)};
  }

  h2 {
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    font-family: ${({ theme }) => theme.fonts.secondaryHeading};
    font-size: ${({ theme }) => theme.headingFontSizes.medium};
    line-height: ${({ theme }) => theme.lineHeights.heading};
    ${mb(2)};
    ${mt(7)};
  }

  h3 {
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    font-family: ${({ theme }) => theme.fonts.secondaryHeading};
    font-size: ${({ theme }) => theme.headingFontSizes.small} !important;
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: 1.4rem;
    font-weight: 700;
    ${mb(2)};
    ${mt(7)};
  }

  h4 {
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    font-family: ${({ theme }) => theme.fonts.secondaryHeading};
    font-size: ${({ theme }) => theme.headingFontSizes.small} !important;
    line-height: ${({ theme }) => theme.lineHeights.heading};
    ${mb(2)};
    ${mt(7)};
  }

  h5 {
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    font-family: ${({ theme }) => theme.fonts.secondaryHeading};
    font-size: ${({ theme }) => theme.headingFontSizes.small} !important;
    line-height: ${({ theme }) => theme.lineHeights.heading};
    ${mb(3)};
    ${mt(6)};
  }
`;

const UnorderListStyles = css`
  ul {
    li {
      list-style-type: disc;
      line-height: ${({ theme }) => theme.lineHeights.body};
      ${ml(5)};
      &::marker {
        color: ${({ theme }) => theme.colors.brightLavender};
      }
    }
    ${mb(5)};
  }
`;

const OrderedListStyles = css`
  ol {
    li {
      line-height: ${({ theme }) => theme.lineHeights.body};
      ${ml(5)};
    }
    ${mb(5)};
  }
`;

const ParagraphStyles = css`
  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
    ${mb(5)}
    line-height: ${({ theme }) => theme.lineHeights.body};
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

const MarkdownWrapper = styled.div`
  ${GlobalMarkdownStyles};
  ${AnchorLinkStyles};
  ${ParagraphStyles};
  ${HeadingStyles};
  ${UnorderListStyles};
  ${OrderedListStyles}
  // Fix for gatsby remark image left align
  // Todo: revisit for a standard fixes
  .gatsby-resp-image-wrapper {
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
