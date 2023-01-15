import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { mb } from 'styled-components-spacing';
import { ProjectCard, ProjectCardProps } from '../project-card';

type ProjectListProps = {
  projects: ProjectCardProps[];
};

const Container = styled.div`
  ${breakpoint('md')`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

const ProjectCardWrapper = styled.div`
  ${mb(5)};
  ${breakpoint('md')`
    width: 48.5%;
  `}
`;

export const ProjectList = ({ projects }: ProjectListProps): JSX.Element => {
  return (
    <Container>
      {projects &&
        projects.map((project) => {
          return (
            <ProjectCardWrapper>
              <ProjectCard {...project} />
            </ProjectCardWrapper>
          );
        })}
    </Container>
  );
};
