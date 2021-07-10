import React from 'react';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import Blog from '../components/Blog';
import { indexHeadingStyle, indexSubHeadingStyle } from './index.tsx';
import NewsLetter from '../components/NewsLetter';

const BlogPage = () => {
  const searchBoxStyle = {
    width: '100%',
    padding: '1rem',
    borderRadius: '5px',
    fontSize: '1rem',
    marginBottom: '3rem',
    fontFamily: 'Roboto',
    fontWeight: '500',
    letterSpacing: '1px',
    border: '1px solid rgb(230, 228, 228)',
  };

  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Articles & Tutorials</h1>
        {false && <p style={indexSubHeadingStyle}>Find the articles, I find</p>}
        <input
          type="text"
          placeholder="Type here to filter articles"
          style={searchBoxStyle}
        />
        <Blog />
      </ContentLayout>
      <ContentLayout bgcolor="#3D3D3D">
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};
export default BlogPage;
