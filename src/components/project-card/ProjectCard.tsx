import React from 'react';
import styled from 'styled-components';
import { p } from 'styled-components-spacing';
import { StyledButtonLink } from 'components/button-link/ButtonLink';
import { ButtonProps } from 'components/button-link/ButtonLink';

export type ProjectCardProps = {
  title: string;
  description?: string;
  actions?: ButtonProps[];
};

const Wrapper = styled.div`
  border: 1px solid #d7d4d4;
  border-radius: 10px;
  ${p(4)};
  max-width: 50rem;

  h2 {
    margin: 0 !important;
  }
`;

const ActionWrapper = styled.div``;

export const ProjectCard = ({
  title,
  description,
  actions,
}: ProjectCardProps) => {
  console.log('project card', description);
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{description}</p>
      <ActionWrapper>
        {actions &&
          actions.map((action) => {
            return <StyledButtonLink {...action} />;
          })}
      </ActionWrapper>
    </Wrapper>
  );
};
