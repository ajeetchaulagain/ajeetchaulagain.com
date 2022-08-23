import React from 'react';
import { MasterLayout, ContentLayout } from '../components/layout';
import IntroSection from '../components/IntroSection';
import Blog from '../components/Blog';
import { indexHeadingStyle } from '.';
import NewsLetter from '../components/NewsLetter';

const BlogPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Articles & Tutorials</h1>
        <Blog />
      </ContentLayout>
      <ContentLayout bgcolor="#3D3D3D">
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};
export default BlogPage;
