import { GatsbyImageProps, getImage } from 'gatsby-plugin-image';
import { BlogPostEdge } from 'markdown-types';
import { BlogPostCardDecoratorOptions } from 'pages';
import { BlogPostCardProps } from 'components';

export const BlogPostCardDecorator = (
  blog: BlogPostEdge,
  decoratorOptions?: BlogPostCardDecoratorOptions
): BlogPostCardProps => {
  const { timeToRead, frontmatter, fields } = blog.node;

  const {
    title,
    tags,
    date,
    thumbnail: { src, altText },
  } = frontmatter;

  const gatsbyImageData = getImage(src);
  const gatsbyImageProps: GatsbyImageProps | undefined = gatsbyImageData && {
    image: gatsbyImageData,
    alt: altText,
  };

  const blogPostRelativeUrl = `/blog/${fields.slug}`;

  const headingProps = decoratorOptions?.headingProps;

  return {
    title,
    gatsbyImageProps,
    publishDate: date,
    timeToRead,
    tags,
    blogPostRelativeUrl,
    headingProps,
  };
};
