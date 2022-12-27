import { ButtonLinkDecorator } from '../button-link/Decorator';
import { ButtonProps } from '../button-link/PropTypes';
import { ProjectListEdge } from 'hooks';
import { ProjectCardProps } from './PropTypes';

export const ProjectCardDecorator = (
  project: ProjectListEdge
): ProjectCardProps => {
  const { title, description, actions } = project.node.frontmatter;

  const decoratedActions: ButtonProps[] =
    actions &&
    actions.map((action) => ({
      ...ButtonLinkDecorator({
        ...action,
        type: 'secondary',
        size: 'small',
        color: 'dark',
      }),
    }));

  return {
    title,
    description,
    actions: decoratedActions,
  };
};
