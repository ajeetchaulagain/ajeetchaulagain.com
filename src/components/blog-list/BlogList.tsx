import React from 'react';
import { Link } from 'gatsby';
import * as blogStyles from './blog.module.scss';
import styled from 'styled-components';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';
import { BlogPostEdge } from 'hooks';

const StyledLink = styled(Link)`
  text-decoration: none !important;
  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
`;

export const BlogList = ({
  blogPostList,
}: {
  blogPostList: BlogPostEdge[];
}): JSX.Element => {
  return (
    <div className={blogStyles.blogWrapper}>
      {blogPostList.map((edge) => {
        return (
          <StyledLink to={`/blog/${edge.node.fields.slug}`}>
            <article className={blogStyles.blogItem}>
              <figure>
                <StyledGatsbyImage
                  image={
                    edge.node.frontmatter.thumbnail.childImageSharp
                      .gatsbyImageData
                  }
                  alt="blog-thumbnail"
                  className={blogStyles.image}
                  style={{ opacity: 1 }}
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
          </StyledLink>
        );
      })}
    </div>
  );
};
