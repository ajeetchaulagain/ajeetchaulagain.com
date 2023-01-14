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
  body: string;
  timeToRead: string;
};

export type BlogPostNode = BlogPostType & {
  fields: { slug: string };
};
export type BlogPostEdge = {
  node: BlogPostNode;
};
