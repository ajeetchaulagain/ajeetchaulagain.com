import React from 'react';
import { FaBook } from 'react-icons/fa';

import {
  LandingPageHero,
  ProjectList,
  BlogList,
  MasterLayout,
  ContentLayout,
  NewsLetter,
} from 'components';
import { useBlogPostList, useProjectList } from 'hooks';
import { PrimaryButtonLink } from 'components/button/Button';

export const indexHeadingStyle = {
  marginBottom: '.3rem',
  fontWeight: '800',
  // color: "rgba(92, 37, 127, 1)",
  fontFamily: 'Domine',
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
        <BlogList blogPostList={blogPostList} />
        <PrimaryButtonLink to="/blog">View all Articles →</PrimaryButtonLink>
      </ContentLayout>
      <ContentLayout bgcolor="white">
        <h1 style={indexHeadingStyle}>Projects</h1>
        <p style={indexSubHeadingStyle}>
          Checkout some of my projects with case study
        </p>
        <ProjectList projectList={projectList} />
        <PrimaryButtonLink to="/projects">
          View All Projects →
        </PrimaryButtonLink>
      </ContentLayout>

      <ContentLayout bgcolor="#fff">
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default IndexPage;
