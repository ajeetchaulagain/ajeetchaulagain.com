import React from 'react';

import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  NewsLetter,
  SEO,
} from 'components';
import { useBlogPostList } from 'hooks';
import { indexHeadingStyle } from '.';
import { BlogPostCardDecorator } from 'components/blog-post-card/Decorator';
import { BlogPostCardList } from 'components/blog-post-card-list/BlogPostCardList';
import { ContentRenderer } from 'components/layout/ContentWrapper';

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
        <h1 style={indexHeadingStyle}>Articles & Tutorials</h1>
        <BlogPostCardList blogs={blogs} />
      </ContentRenderer>
      <ContentLayout>
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};
export default BlogPage;
