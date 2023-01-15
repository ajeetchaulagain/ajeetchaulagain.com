import { ButtonProps, ProjectCardProps } from 'components';
import {
  ButtonLinkMarkdownType,
  ProjectEdge,
  ProjectMetaDetails,
} from 'markdown-types';
import { ProjectCardDecoratorOptions } from 'pages';
import { ButtonLinkDecorator } from './ButtonLinkDecorator';

export const ProjectCardDecorator = (
  project: ProjectEdge | ProjectMetaDetails,
  decoratorOptions?: ProjectCardDecoratorOptions
): ProjectCardProps => {
  let title;
  let description;
  let actions: ButtonLinkMarkdownType[] = [];

  const isProjectEdge = (
    project: ProjectEdge | ProjectMetaDetails
  ): project is ProjectEdge => {
    return !!(project as ProjectEdge).node;
  };

  if (isProjectEdge(project)) {
    title = project.node.frontmatter.title;
    description = project.node.frontmatter.description;
    actions = project.node.frontmatter.actions;
  }

  if (!isProjectEdge(project)) {
    title = project.title;
    description = project.description;
    actions = project.actions;
  }

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

  const headingProps = decoratorOptions?.headingProps;

  return {
    title,
    description,
    actions: decoratedActions,
    headingProps,
  } as ProjectCardProps;
};
