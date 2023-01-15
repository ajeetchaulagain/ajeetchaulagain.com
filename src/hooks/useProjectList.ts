import { graphql, useStaticQuery } from 'gatsby';
import { ProjectEdge } from 'markdown-types';

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
  return data.allMdx.edges;
};
