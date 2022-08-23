import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type BlogListEdge = {
  node: {
    fields: { slug: any };
    frontmatter: {
      title: string;
      date: any;
      tags: any[];
      thumbnail: {
        childImageSharp: { gatsbyImageData: IGatsbyImageData };
      };
    };
    timeToRead: string;
  };
};

export const useBlogPostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { contentType: { eq: "posts" } } }, limit: 6) {
        edges {
          node {
            frontmatter {
              title
              tags
              date(formatString: "MMMM DD, YYYY")
              author
              thumbnail {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
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
  return data.allMdx.edges as BlogListEdge[];
};
