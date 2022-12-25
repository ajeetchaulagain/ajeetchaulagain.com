import React from 'react';

import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  ProjectList,
  SEO,
} from 'components';
import { useProjectList } from 'hooks';

import { indexHeadingStyle, indexSubHeadingStyle } from '.';

const ProjectsPage = () => {
  const projectList = useProjectList();
  return (
    <MasterLayout>
      <SEO title="Projects" description="List of projects" />
      <IntroSection />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Projects</h1>
        <p style={indexSubHeadingStyle}>List of all projects with case study</p>
        <ProjectList projectList={projectList} />
      </ContentLayout>
    </MasterLayout>
  );
};

export default ProjectsPage;
