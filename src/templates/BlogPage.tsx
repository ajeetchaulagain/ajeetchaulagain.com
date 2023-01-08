import React from 'react';
import { ContentRenderer, MasterLayout } from '../components/layout';

import * as blogTemplateStyles from './blog-template.module.scss';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql, Link, PageProps } from 'gatsby';
import { AboutJumbotronBlog } from '../components/about-jumbotron/AboutJumbotron';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { NewsLetter } from '../components/newsletter/NewsLetter';
import { Heading, MarkdownRenderer, SEO } from 'components';
import { HeroBlank } from 'components/hero-blank/HeroBlank';
import styled from 'styled-components';
import { Tag } from 'components/tag/Tag';
import { mt, ml } from 'styled-components-spacing';

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

  const PostHeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brightLavender};
  `;

  const PostHeaderLeftColumn = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const PostHeaderRightColumn = styled.div`
    width: 20%;
  `;

  const DateAndTimeComponent = styled.span`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.xmall};
    color: ${({ theme }) => theme.colors.brandPrimary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    ${mt(4)};
  `;

  const TagsWrapper = styled.div`
    ${mt(5)};
    span:not(:first-child) {
      ${ml(2)};
    }
  `;

  return (
    <MasterLayout>
      <SEO title={title} description={description} />
      <HeroBlank />
      <ContentRenderer>
        <PostHeaderContainer>
          <PostHeaderLeftColumn>
            <Heading>{title}</Heading>

            <DateAndTimeComponent>
              {date} / {timeToRead} min read
            </DateAndTimeComponent>

            <TagsWrapper>
              {tags.map((tag, index) => {
                return <Tag key={index}>{tag}</Tag>;
              })}
            </TagsWrapper>
          </PostHeaderLeftColumn>
          <PostHeaderRightColumn>
            {image && <GatsbyImage image={image} alt={imageAltText} />}
          </PostHeaderRightColumn>
        </PostHeaderContainer>

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

        <AboutJumbotronBlog />
        <br />
        <NewsLetter />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default BlogTemplate;
