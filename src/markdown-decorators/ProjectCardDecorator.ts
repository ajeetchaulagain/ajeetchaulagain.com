import { ButtonProps, ProjectCardProps } from 'components';
import { ProjectListEdge } from 'hooks';
import { ButtonLinkDecorator } from './ButtonLinkDecorator';

export const ProjectCardDecorator = (
  project: ProjectListEdge
): ProjectCardProps => {
  const { title, description, actions } = project.node.frontmatter;

  const decoratedActions: ButtonProps[] =
    actions &&
    actions.map((action) => ({
      ...ButtonLinkDecorator({
        ...action,
        variant: 'text',
        size: 'medium',
        color: 'primary',
      }),
    }));

  return {
    title,
    description,
    actions: decoratedActions,
  };
};
