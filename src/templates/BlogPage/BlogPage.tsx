import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  Heading,
  MarkdownRenderer,
  SEO,
  ContentRenderer,
  MasterLayout,
  AboutJumbotron,
  HeroBlank,
  Tag,
  StyledGatsbyImage,
  Comments,
  TableOfContents,
  GetInTouchSection,
} from 'components';
import { BlogPostType, BlogPostNode } from 'markdown-types';
import {
  PostHeaderContainer,
  PostHeaderLeftColumn,
  PostHeaderRightColumn,
  PageNavigationWrapper,
  PreviousNav,
  NextNav,
  StyledParagraph,
  StyledLink,
} from './styles';
import { DateAndTimeComponent, TagsWrapper } from '../styles';
import useCopyCode from 'hooks/useCopyCode';
import { useSiteMetadata } from 'hooks/useSiteMetaData';

export const query = graphql`
  query BlogPageQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        tags
        date(formatString: "MMMM DD, YYYY")
        author
        thumbnail {
          src {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          altText
        }
      }
      fields {
        timeToRead
      }
    }
  }
`;

type DataProps = {
  mdx: BlogPostType;
};

type PageContextProps = {
  next: BlogPostNode;
  prev: BlogPostNode;
};

const BlogTemplate: React.FC<PageProps<DataProps, PageContextProps>> = (
  props
): JSX.Element => {
  useCopyCode();
  const { siteUrl } = useSiteMetadata();

  const { next, prev } = props.pageContext;

  const {
    frontmatter: { title, description, date, tags, thumbnail },
    fields: { timeToRead },
  } = props.data.mdx;

  const imageAltText = thumbnail.altText;
  const image = getImage(thumbnail.src);
  const ogImageSrc = `${siteUrl}${thumbnail.src.publicURL}`;

  return (
    <MasterLayout>
      <SEO
        title={title}
        description={description}
        image={ogImageSrc}
        type="article"
        pathname={props.location.pathname}
      />
      <HeroBlank />
      <ContentRenderer>
        <PostHeaderContainer>
          <PostHeaderLeftColumn>
            <Heading size="xlarge">{title}</Heading>

            <DateAndTimeComponent>
              {date} / {timeToRead} min read
            </DateAndTimeComponent>

            <TagsWrapper>
              {tags.map((tag) => {
                return <Tag key={tag}>{tag}</Tag>;
              })}
            </TagsWrapper>
          </PostHeaderLeftColumn>
          <PostHeaderRightColumn>
            {image && <StyledGatsbyImage image={image} alt={imageAltText} />}
          </PostHeaderRightColumn>
        </PostHeaderContainer>

        <TableOfContents />
        <MarkdownRenderer>{props.children}</MarkdownRenderer>

        <PageNavigationWrapper>
          {prev && (
            <PreviousNav>
              <StyledParagraph>Previous</StyledParagraph>
              <StyledLink to={`/blog/${prev.fields.slug}`}>
                <FaArrowLeft />
                <span>{prev.frontmatter.title}</span>
              </StyledLink>
            </PreviousNav>
          )}

          {next && (
            <NextNav>
              <StyledParagraph>Next</StyledParagraph>
              <StyledLink to={`/blog/${next.fields.slug}`}>
                <span>{next.frontmatter.title}</span>
                <FaArrowRight />
              </StyledLink>
            </NextNav>
          )}
        </PageNavigationWrapper>

        <AboutJumbotron />
        <Comments />
        <GetInTouchSection />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default BlogTemplate;
