import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  Heading,
  MarkdownRenderer,
  SEO,
  ContentRenderer,
  MasterLayout,
  AboutJumbotronBlog,
  NewsLetter,
  HeroBlank,
  Tag,
} from 'components';
import { BlogPostType, BlogPostNode } from 'markdown-types';
import {
  PostHeaderContainer,
  PostHeaderLeftColumn,
  PostHeaderRightColumn,
  DateAndTimeComponent,
  TagsWrapper,
  PageNavigationWrapper,
  PreviousNav,
  NextNav,
  StyledParagraph,
  StyledLink,
} from './styles';

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
  mdx: BlogPostType;
};

type PageContextProps = {
  next: BlogPostNode;
  prev: BlogPostNode;
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

        <AboutJumbotronBlog />
        <NewsLetter />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default BlogTemplate;
