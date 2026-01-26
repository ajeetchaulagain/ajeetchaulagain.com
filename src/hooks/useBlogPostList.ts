import { useStaticQuery, graphql } from 'gatsby';
import { BlogPostEdge } from 'markdown-types';

type QueryTypes = {
  allMdx: {
    edges: BlogPostEdge[];
  };
};

export const useBlogPostList = () => {
  const data = useStaticQuery<QueryTypes>(graphql`
    query {
      allMdx(
        filter: { fields: { contentType: { eq: "posts" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              title
              tags
              date(formatString: "MMMM DD, YYYY")
              author
              thumbnail {
                src {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
                altText
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
  return data.allMdx.edges;
};
