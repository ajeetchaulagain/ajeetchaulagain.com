import React from 'react';

import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  BlogList,
  NewsLetter,
  SEO,
} from 'components';
import { useBlogPostList } from 'hooks';
import { indexHeadingStyle } from '.';

const BlogPage = () => {
  const blogPostList = useBlogPostList();

  return (
    <MasterLayout>
      <SEO
        title="Articles"
        description="Recent articles and tutorials from me"
      />
      <IntroSection />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Articles & Tutorials</h1>
        <BlogList blogPostList={blogPostList} />
      </ContentLayout>
      <ContentLayout>
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};
export default BlogPage;
