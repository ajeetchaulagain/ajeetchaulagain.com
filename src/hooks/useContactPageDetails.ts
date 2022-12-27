import { graphql, useStaticQuery } from 'gatsby';

type ContactPageDetails = {
  frontmatter: {
    title: string;
    description: string;
  };
  body: string;
};

export const useContactPageDetails = () => {
  const data = useStaticQuery<{ mdx: ContactPageDetails }>(graphql`
    query {
      mdx(fields: { slug: { eq: "contact" } }) {
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
