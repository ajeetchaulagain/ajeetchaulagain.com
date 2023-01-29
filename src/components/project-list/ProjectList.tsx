import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { mb } from 'styled-components-spacing';
import { ProjectCard, ProjectCardProps } from '../project-card';

type ProjectListProps = {
  projects: ProjectCardProps[];
};

const ProjectCardWrapper = styled.div`
  ${breakpoint('md')`
    width: 48.5%;
    ${mb(5)};
  `}
`;

const Container = styled.div`
  ${breakpoint('xs', 'md')`
    ${ProjectCardWrapper}:not(:last-child){
      ${mb(5)};
    }
  `}
  ${breakpoint('md')`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
