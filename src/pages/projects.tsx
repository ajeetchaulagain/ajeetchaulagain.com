import React from 'react';
import Projects from '../components/Projects';
import { MasterLayout, ContentLayout } from '../components/layout';
import IntroSection from '../components/IntroSection';
import { indexHeadingStyle, indexSubHeadingStyle } from '.';

const ProjectsPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Projects</h1>
        <p style={indexSubHeadingStyle}>List of all projects with case study</p>
        <Projects />
      </ContentLayout>
    </MasterLayout>
  );
};

export default ProjectsPage;
