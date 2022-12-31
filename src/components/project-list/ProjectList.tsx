import React from 'react';
import { ProjectCard } from '../project-card/ProjectCard';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { mb } from 'styled-components-spacing';
import { ProjectCardProps } from '../project-card/PropTypes';

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
  ${mb(4)};
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
