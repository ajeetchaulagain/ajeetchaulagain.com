import React from 'react';
import { ButtonLink } from '../button-link/ButtonLink';
import { Container, Paragraph, ActionWrapper, StyledHeading } from './styles';
import { ProjectCardProps } from './PropTypes';

export const ProjectCard = ({
  title,
  description,
  actions,
}: ProjectCardProps) => {
  return (
    <Container>
      <StyledHeading level="h2" size="small" type="sans-serif">
        {title}
      </StyledHeading>
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
