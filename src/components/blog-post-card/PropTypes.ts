import { HeadingProps } from '../heading/Heading';
import { GatsbyImageProps } from 'gatsby-plugin-image';

export type BlogPostCardProps = {
  title: string;
  publishDate: string;
  timeToRead: number;
  tags?: string[];
  gatsbyImageProps?: GatsbyImageProps;
  blogPostRelativeUrl: string;
  headingProps?: HeadingProps;
};
