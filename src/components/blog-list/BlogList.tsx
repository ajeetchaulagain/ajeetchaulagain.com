import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { BlogListEdge } from '../../hooks/useBlogPostList';
import * as blogStyles from './blog.module.scss';

type BlogListProps = {
  blogPostList: BlogListEdge[];
};

export const BlogList = ({ blogPostList }: BlogListProps): JSX.Element => {
  return (
    <div className={blogStyles.blogWrapper}>
      {blogPostList.map((edge) => {
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
          </Link>
        );
      })}
    </div>
  );
};
