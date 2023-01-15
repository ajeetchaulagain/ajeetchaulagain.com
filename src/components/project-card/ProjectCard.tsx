import React from 'react';
import { ButtonLink } from '../button-link/ButtonLink';
import { Container, Paragraph, ActionWrapper, StyledHeading } from './styles';
import { ProjectCardProps } from './PropTypes';

export const ProjectCard = ({
  title,
  description,
  actions,
  headingProps = {
    level: 'h2',
    size: 'small',
    type: 'sans-serif',
  },
}: ProjectCardProps) => {
  return (
    <Container>
      <StyledHeading {...headingProps}>{title}</StyledHeading>
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
