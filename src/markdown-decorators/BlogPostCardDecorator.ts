import { BlogPostCardProps } from 'components';
import { GatsbyImageProps, getImage } from 'gatsby-plugin-image';
import { BlogPostEdge } from 'markdown-types';

export const BlogPostCardDecorator = (
  blog: BlogPostEdge
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

  return {
    title,
    gatsbyImageProps,
    publishDate: date,
    timeToRead,
    tags,
    blogPostRelativeUrl,
  };
};
