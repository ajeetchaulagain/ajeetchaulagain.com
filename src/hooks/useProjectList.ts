import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type ProjectListEdge = {
  node: {
    fields: { slug: string };
    frontmatter: {
      title: string;
      technologies: string[];
      thumbnail: {
        childImageSharp: { gatsbyImageData: IGatsbyImageData };
      };
    };
    timeToRead: string;
  };
};

export const useProjectList = () => {
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
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return data.allMdx.edges as ProjectListEdge[];
};
