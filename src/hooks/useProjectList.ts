import { graphql, useStaticQuery } from 'gatsby';
import { ProjectEdge } from 'markdown-types';
import { projects as staticProjectList } from 'data/projects';

type QueryTypes = {
  allMdx: {
    edges: ProjectEdge[];
  };
};

export const useProjectList = () => {
  const data = useStaticQuery<QueryTypes>(graphql`
    query {
      allMdx(
        filter: { fields: { contentType: { eq: "projects" } } }
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              technologies
              actions {
                text
                to
                iconName
              }
            }
          }
        }
      }
    }
  `);

  /* To get a  list of projects there is two data source - markdown and static array.
   For those project that have artcile published in markdown, details are fetched from markdown
   and for those not having markdown, details are maintained in static array.
   This will maintain just a single source of truth for each project data. */

  return [...data.allMdx.edges, ...staticProjectList];
};
