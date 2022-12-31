import { GatsbyImageProps } from 'gatsby-plugin-image';

export type BlogPostCardProps = {
  title: string;
  publishDate: string;
  timeToRead: string;
  tags?: string[];
  gatsbyImageProps?: GatsbyImageProps;
};