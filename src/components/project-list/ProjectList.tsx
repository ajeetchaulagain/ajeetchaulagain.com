import React from 'react';
import { Link } from 'gatsby';
import { ProjectCard } from '../project-card/ProjectCard';
import { ProjectListEdge } from '../../hooks/useProjectList';
import * as projectStyles from './projects.module.scss';
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';
import { ProjectCardDecorator } from 'components/project-card/Decorator';

type ProjectListProps = {
  projectList: ProjectListEdge[];
};

const sample = [
  {
    title: 'title',
    description: 'this is description',
    actions: [
      {
        text: 'View source code',
        to: 'ajeetchaulagain.com',
        size: 'small',
        color: 'light',
        type: 'secondary',
      },
    ],
  },
];

export const ProjectList = ({ projectList }: ProjectListProps): JSX.Element => {
  const projects = projectList.map((project) => ProjectCardDecorator(project));

  return (
    <div>
      {projects.map((project) => {
        // const {
        //   node: {
        //     fields: { slug },
        //     frontmatter,
        //   },
        // } = edge;

        // return (
        //   <Link to={`/projects/${slug}`} className={projectStyles.projectItem}>
        //     <div className={projectStyles.contentWrapper}>
        //       <h2>{edge.node.frontmatter.title}</h2>

        //       <ul className={projectStyles.toolsWrapper}>
        //         {frontmatter.technologies.map((technology) => {
        //           return <li>{technology}</li>;
        //         })}
        //       </ul>
        //     </div>
        //     {true && (
        //       <div className={projectStyles.linksWrapper}>
        //         View Case Study →{' '}
        //       </div>
        //     )}
        //   </Link>
        // );

        return <ProjectCard {...project} />;
      })}
    </div>
  );
};
