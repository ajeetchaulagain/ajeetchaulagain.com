import React from 'react';
import { LandingPageHero } from '../components/landing-page-hero/LandingPageHero';
import { ProjectList } from '../components/project-list/ProjectList';
import Blog from '../components/blog-list/BlogList';
import { MasterLayout, ContentLayout } from '../components/layout';
import { Link } from 'gatsby';
import { FaBook } from 'react-icons/fa';

import { NewsLetter } from '../components/newsletter/NewsLetter';
import { useBlogPostList } from '../hooks/useBlogPostList';
import { useProjectList } from '../hooks/useProjectList';

export const indexHeadingStyle = {
  marginBottom: '.3rem',
  fontWeight: '800',
  // color: "rgba(92, 37, 127, 1)",
  color: '#5294d5',
};

export const indexSubHeadingStyle = {
  marginBottom: '1.5rem',
  lineHeight: '1.5',
};

export const contentBoxButton = {
  fontWeight: '400',
  fontSize: '1rem',
};

export const subscribeSectionStyle = {
  textAlign: 'center',
  backgroundColor: 'grey',
};

const IndexPage = () => {
  const blogPostList = useBlogPostList();
  const projectList = useProjectList();

  return (
    <MasterLayout>
      <LandingPageHero />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>
          <FaBook /> From my blog{' '}
        </h1>
        <p style={indexSubHeadingStyle}>See the recent on my article list</p>
        <Blog blogPostList={blogPostList} />
        <Link to="/blog" className="box-button" style={contentBoxButton}>
          View all Articles →
        </Link>
      </ContentLayout>
      <ContentLayout bgcolor="white">
        <h1 style={indexHeadingStyle}>Projects</h1>
        <p style={indexSubHeadingStyle}>
          Checkout some of my projects with case study
        </p>
        <ProjectList projectList={projectList} />
        <Link to="/projects" className="box-button" style={contentBoxButton}>
          View All Projects →
        </Link>
      </ContentLayout>

      <ContentLayout bgcolor="#fff">
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default IndexPage;
