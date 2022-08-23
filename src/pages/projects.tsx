import React from 'react';
import { ProjectList } from '../components/project-list/ProjectList';
import { MasterLayout, ContentLayout } from '../components/layout';
import IntroSection from '../components/IntroSection';
import { indexHeadingStyle, indexSubHeadingStyle } from '.';
import { useProjectList } from '../hooks/useProjectList';

const ProjectsPage = () => {
  const projectList = useProjectList();
  return (
    <MasterLayout>
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
