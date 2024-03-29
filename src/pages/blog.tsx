import React from 'react';
import styled from 'styled-components';
import { mb } from 'styled-components-spacing';
import {
  MasterLayout,
  NewsLetter,
  SEO,
  BlogPostCardList,
  ContentRenderer,
  Heading,
  HeroBlank,
} from 'components';
import { useBlogPostList } from 'hooks';
import { BlogPostCardDecorator } from 'markdown-decorators';

const StyledHeading = styled(Heading)`
  ${mb(4)};
`;

const BlogPage = () => {
  const blogPostList = useBlogPostList();
  const blogs = blogPostList.map((blogPost) => BlogPostCardDecorator(blogPost));

  return (
    <MasterLayout>
      <SEO
        title="Articles"
        description="Recent articles and tutorials from me"
      />
      <HeroBlank />
      <ContentRenderer>
        <StyledHeading>Articles & Tutorials</StyledHeading>
        <BlogPostCardList blogs={blogs} />
      </ContentRenderer>
      <ContentRenderer>
        <NewsLetter />
      </ContentRenderer>
    </MasterLayout>
  );
};
export default BlogPage;
