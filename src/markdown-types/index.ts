import { ButtonColor, ButtonSize, ButtonVariant } from 'components';
import { IconName } from 'components/icon/Icon';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type BlogPostType = {
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
  fields: {
    timeToRead: number;
  };
};

export type BlogPostNode = BlogPostType & {
  fields: { slug: string; timeToRead: number };
};
export type BlogPostEdge = {
  node: BlogPostNode;
};

export type ProjectMetaDetails = {
  title: string;
  description: string;
  actions: ButtonLinkMarkdownType[];
};
export type ProjectEdge = {
  node: {
    frontmatter: ProjectMetaDetails;
  };
};

export type ButtonLinkMarkdownType = {
  text: string;
  to: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  iconName?: IconName;
};
