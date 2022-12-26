import { ButtonLinkDecorator } from 'components/button-link/Decorator';
import { ProjectListEdge } from 'hooks';
import { ProjectCardProps } from './ProjectCard';

export const ProjectCardDecorator = (
  project: ProjectListEdge
): ProjectCardProps => {
  const frontmatter = project.node.frontmatter;
  const title = frontmatter.title;
  const description = frontmatter.description;

  console.log('frontMater', frontmatter.actions, description);

  const decoratedActions =
    frontmatter.actions &&
    frontmatter.actions.map((action) =>
      ButtonLinkDecorator({
        type: 'primary',
        size: 'small',
        color: 'dark',
        ...action,
      })
    );

  return {
    title,
    description,
    actions: decoratedActions,
  };
};
