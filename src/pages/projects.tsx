import React from 'react';
import styled from 'styled-components';
import { mb } from 'styled-components-spacing';
import {
  MasterLayout,
  IntroSection,
  ProjectList,
  SEO,
  ContentRenderer,
  Heading,
} from 'components';
import { useProjectList } from 'hooks';
import { ProjectCardDecorator } from 'markdown-decorators';

const StyledHeading = styled(Heading)`
  ${mb(4)};
`;

const ProjectsPage = () => {
  const projectList = useProjectList();
  const projects = projectList.map((project) => ProjectCardDecorator(project));

  return (
    <MasterLayout>
      <SEO title="Projects" description="List of projects" />
      <IntroSection />
      <ContentRenderer>
        <StyledHeading>Projects</StyledHeading>
        <ProjectList projects={projects} />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default ProjectsPage;
