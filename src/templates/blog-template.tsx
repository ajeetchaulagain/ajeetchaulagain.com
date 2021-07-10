// Create and export the react component
import React from 'react';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import * as blogTemplateStyles from './blog-template.module.scss';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import AboutJumbotronBlog from '../components/AboutJumbotron';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import NewsLetter from '../components/NewsLetter';

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        author
        thumbnail {
          childImageSharp {
            fluid(quality: 30) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      timeToRead
      body
    }
  }
`;

const BlogTemplate = (props) => {
  const { next, prev } = props.pageContext;

  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <div className={blogTemplateStyles.postWrapper}>
          <header className={blogTemplateStyles.postHeader}>
            <div className={blogTemplateStyles.headerContent}>
              <h1>{props.data.mdx.frontmatter.title}</h1>
              <div className={blogTemplateStyles.postMeta}>
                <span>
                  <time>{props.data.mdx.frontmatter.date}</time>
                  &nbsp; / &nbsp;
                  {props.data.mdx.timeToRead} min read
                </span>
                <ul className={blogTemplateStyles.tagList}>
                  {props.data.mdx.frontmatter.tags.map((tag) => {
                    return <li>{tag}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className={blogTemplateStyles.featuredIcons}>
              <Img
                fluid={
                  props.data.mdx.frontmatter.thumbnail.childImageSharp.fluid
                }
                alt="blog-thumbnail"
              />
            </div>
          </header>
          <div className={blogTemplateStyles.mdxWrapper}>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
          </div>

          <div className={blogTemplateStyles.pageNavigation}>
            {prev && (
              <div className={blogTemplateStyles.prevNav}>
                <aside className={blogTemplateStyles.float}>
                  <p>Previous</p>
                  <Link to={`/blog/${prev.fields.slug}`}>
                    <FaArrowLeft />
                    <span>{prev.frontmatter.title}</span>
                  </Link>
                </aside>
              </div>
            )}

            {next && (
              <div className={blogTemplateStyles.nextNav}>
                <aside className={blogTemplateStyles.float}>
                  <p>Next</p>
                  <Link to={`/blog/${next.fields.slug}`}>
                    <span>{next.frontmatter.title}</span>
                    <FaArrowRight />
                  </Link>
                </aside>
              </div>
            )}
          </div>
        </div>

        <AboutJumbotronBlog />
        <br />
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default BlogTemplate;
