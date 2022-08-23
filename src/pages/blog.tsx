import React from 'react';
import { MasterLayout, ContentLayout } from '../components/layout';
import { IntroSection } from '../components/intro-section/IntroSection';
import BlogList from '../components/blog-list/BlogList';
import { indexHeadingStyle } from '.';
import { NewsLetter } from '../components/newsletter/NewsLetter';
import { useBlogPostList } from '../hooks/useBlogPostList';

const BlogPage = () => {
  const blogPostList = useBlogPostList();

  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Articles & Tutorials</h1>
        <BlogList blogPostList={blogPostList} />
      </ContentLayout>
      <ContentLayout bgcolor="#3D3D3D">
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};
export default BlogPage;
