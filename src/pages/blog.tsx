import React from 'react';
import styled from 'styled-components';
import { mb } from 'styled-components-spacing';

import { MasterLayout, IntroSection, NewsLetter, SEO } from 'components';
import { useBlogPostList } from 'hooks';
import { BlogPostCardDecorator } from 'components/blog-post-card/Decorator';
import { BlogPostCardList } from 'components/blog-post-card-list/BlogPostCardList';
import { ContentRenderer } from 'components/layout/ContentWrapper';
import { Heading } from 'components/heading/Heading';

const StyledHeading = styled(Heading)`
  ${mb(3)};
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
      <IntroSection />
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
