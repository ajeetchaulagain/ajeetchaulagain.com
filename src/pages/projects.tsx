import React from 'react';
import Projects from '../components/Projects';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import { indexHeadingStyle, indexSubHeadingStyle } from '.';

const ProjectsPage = () => {
  // console.log(data);
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
