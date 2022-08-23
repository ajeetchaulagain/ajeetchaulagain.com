import React from 'react';
import MasterLayout from '../components/layout/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
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
