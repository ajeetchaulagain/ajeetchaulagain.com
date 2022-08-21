import React from 'react';
import * as blogStyles from './blog.module.scss';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const Blog = (): JSX.Element => {
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

  return (
    <div className={blogStyles.blogWrapper}>
      {data.allMdx.edges.map(
        (edge: {
          node: {
            fields: { slug: any };
            frontmatter: {
              thumbnail: {
                childImageSharp: { gatsbyImageData: IGatsbyImageData };
              };
              title:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              date: any;
              tags: any[];
            };
            timeToRead:
              | string
              | number
              | boolean
              | {}
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactNodeArray
              | React.ReactPortal
              | null
              | undefined;
          };
        }) => {
          return (
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <article className={blogStyles.blogItem}>
                <figure>
                  <GatsbyImage
                    image={
                      edge.node.frontmatter.thumbnail.childImageSharp
                        .gatsbyImageData
                    }
                    alt="blog-thumbnail"
                    className={blogStyles.image}
                  />
                </figure>

                <div className={blogStyles.content}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <div className={blogStyles.metaData}>
                    <span>
                      <>
                        <time>{edge.node.frontmatter.date}</time>&nbsp;/&nbsp;
                        {edge.node.timeToRead} min read
                      </>
                    </span>
                    <ul>
                      {edge.node.frontmatter.tags.map((tag) => {
                        return <li>{tag}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </article>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Blog;
