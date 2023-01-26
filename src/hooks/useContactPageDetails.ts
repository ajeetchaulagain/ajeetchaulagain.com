import { graphql, useStaticQuery } from 'gatsby';

type ContactPageDetails = {
  frontmatter: {
    title: string;
    description: string;
  };
  body: string;
};

type QueryTypes = {
  mdx: ContactPageDetails;
};

export const useContactPageDetails = () => {
  const data = useStaticQuery<QueryTypes>(graphql`
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
