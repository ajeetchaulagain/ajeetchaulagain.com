import { graphql, useStaticQuery } from 'gatsby';

type AboutPageDetails = {
  frontmatter: {
    title: string;
    description: string;
  };
  body: string;
};

export const useAboutPageDetails = () => {
  const data = useStaticQuery<{ mdx: AboutPageDetails }>(graphql`
    query {
      mdx(fields: { slug: { eq: "about" } }) {
        frontmatter {
          title
          description
        }
        body
      }
    }
  `);

  return data.mdx;
};
