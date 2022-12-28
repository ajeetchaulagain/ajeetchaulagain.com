import React from 'react';
import { ButtonLink } from '../button-link/ButtonLink';
import { Container, Paragraph, ActionWrapper } from './styles';
import { ProjectCardProps } from './PropTypes';
import { Heading } from 'components/heading/Heading';

export const ProjectCard = ({
  title,
  description,
  actions,
}: ProjectCardProps) => {
  return (
    <Container>
      <Heading level="h2" size="small" type="serif">
        {title}
      </Heading>
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
