import React from 'react';
import { MasterLayout } from '../components/layout';
import { IntroSection } from '../components/intro-section/IntroSection';
import ContentLayout from '../components/layout/ContentLayout';
import * as blogTemplateStyles from './blog-template.module.scss';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql, Link, PageProps } from 'gatsby';
import { AboutJumbotronBlog } from '../components/about-jumbotron/AboutJumbotron';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { NewsLetter } from '../components/newsletter/NewsLetter';
import { MarkdownRenderer, SEO } from 'components';

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
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
      timeToRead
      body
    }
  }
`;

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      thumbnail: {
        src: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
        altText: string;
      };
    };
    body: string;
    timeToRead: string;
  };
};

type PageContextProps = {
  next: {
    frontmatter: {
      title: string;
    };
    fields: {
      slug: string;
    };
  };
  prev: {
    frontmatter: {
      title: string;
    };
    fields: {
      slug: string;
    };
  };
};

const BlogTemplate: React.FC<PageProps<DataProps, PageContextProps>> = (
  props
): JSX.Element => {
  const { next, prev } = props.pageContext;

  const {
    frontmatter: { title, description, date, tags, thumbnail },
    timeToRead,
    body,
  } = props.data.mdx;

  const imageAltText = thumbnail.altText;
  const image = getImage(thumbnail.src);

  return (
    <MasterLayout>
      <SEO title={title} description={description} />
      <IntroSection />
      <ContentLayout>
        <div className={blogTemplateStyles.postWrapper}>
          <header className={blogTemplateStyles.postHeader}>
            <div className={blogTemplateStyles.headerContent}>
              <h1>{title}</h1>
              <div className={blogTemplateStyles.postMeta}>
                <span>
                  <time>{date}</time>
                  &nbsp; / &nbsp;
                  {timeToRead} min read
                </span>
                <ul className={blogTemplateStyles.tagList}>
                  {tags.map((tag) => {
                    return <li>{tag}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className={blogTemplateStyles.featuredIcons}>
              {image && <GatsbyImage image={image} alt={imageAltText} />}
            </div>
          </header>

          <MarkdownRenderer>{body}</MarkdownRenderer>

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
