import React from 'react';
import { Link } from 'gatsby';

import { ProjectListEdge } from '../../hooks/useProjectList';
import * as projectStyles from './projects.module.scss';

type ProjectListProps = {
  projectList: ProjectListEdge[];
};

export const ProjectList = ({ projectList }: ProjectListProps): JSX.Element => {
  return (
    <div className={projectStyles.projects}>
      {projectList.map((edge) => {
        return (
          <Link
            to={`/projects/${edge.node.fields.slug}`}
            className={projectStyles.projectItem}
          >
            <div className={projectStyles.contentWrapper}>
              <h2>{edge.node.frontmatter.title}</h2>

              <ul className={projectStyles.toolsWrapper}>
                {edge.node.frontmatter.technologies.map(
                  (technology: string) => {
                    return <li>{technology}</li>;
                  }
                )}
              </ul>
            </div>
            {true && (
              <div className={projectStyles.linksWrapper}>
                View Case Study →{' '}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};
