import React from 'react';
import { FaBook } from 'react-icons/fa';

import {
  LandingPageHero,
  ProjectList,
  BlogList,
  MasterLayout,
  ContentLayout,
  NewsLetter,
  SEO,
} from 'components';
import { useBlogPostList, useProjectList } from 'hooks';
import { PrimaryButtonLink } from 'components/button/Button';
import { ProjectCardDecorator } from 'components/project-card/Decorator';
import { ContentRenderer } from 'components/layout/ContentWrapper';
import { ButtonLink } from 'components/button-link/ButtonLink';
import { Heading } from 'components/heading/Heading';
import { Paragraph } from 'components/paragraph/Paragraph';

export const indexHeadingStyle = {
  fontWeight: '800',
  fontFamily: 'Domine',
  marginBottom: '1rem',
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

  const projects = projectList.map((project) => ProjectCardDecorator(project));

  return (
    <MasterLayout>
      <SEO />
      <LandingPageHero />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>
          <FaBook /> From my blog
        </h1>
        <p style={indexSubHeadingStyle}>See the recent on my article list</p>
        <BlogList blogPostList={blogPostList} />
        <PrimaryButtonLink to="/blog">View all Articles →</PrimaryButtonLink>
      </ContentLayout>
      <ContentRenderer>
        <Heading>Projects</Heading>
        <Paragraph>Checkout some of my projects with case study</Paragraph>
        <ProjectList projects={projects} />
        <ButtonLink
          to="/projects"
          text="View All Projects →"
          variant="contained"
          color="primary"
          size="large"
          style={{ marginBottom: '3rem' }}
        />
      </ContentRenderer>

      <ContentLayout bgcolor="#fff">
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default IndexPage;
