import React from 'react';
import { ButtonLink } from '../button-link/ButtonLink';
import { Container, Heading, Paragraph, ActionWrapper } from './styles';
import { ProjectCardProps } from './PropTypes';

export const ProjectCard = ({
  title,
  description,
  actions,
}: ProjectCardProps) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <ActionWrapper>
        {actions &&
          actions.map((action) => {
            return <ButtonLink {...action} />;
          })}
      </ActionWrapper>
    </Container>
  );
};
