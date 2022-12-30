import { GatsbyImageProps, getImage } from 'gatsby-plugin-image';
import { BlogPostEdge } from 'hooks';
import { BlogPostCardProps } from './PropTypes';

export const BlogPostCardDecorator = (
  blog: BlogPostEdge
): BlogPostCardProps => {
  const { timeToRead, frontmatter } = blog.node;

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

  return {
    title,
    gatsbyImageProps,
    publishDate: date,
    timeToRead,
    tags,
  };
};
