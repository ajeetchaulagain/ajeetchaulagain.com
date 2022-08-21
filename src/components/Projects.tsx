import React from 'react';
import * as projectStyles from './projects.module.scss';
import { Link, graphql, useStaticQuery } from 'gatsby';

type EdgeType = {
  node: {
    frontmatter: {
      title:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
      technologies: any[];
    };
    fields: { slug: any };
  };
};

const Projects = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fields: { contentType: { eq: "projects" } } }
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              title
              technologies
              featuredImage {
                childImageSharp {
                  fluid(quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <div className={projectStyles.projects}>
      {data.allMdx.edges.map((edge: EdgeType) => {
        return (
          <div className={projectStyles.projectItem}>
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
                <Link to={`/projects/${edge.node.fields.slug}`}>
                  View Case Study →{' '}
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Projects;
