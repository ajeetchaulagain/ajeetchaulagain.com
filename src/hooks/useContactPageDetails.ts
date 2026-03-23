import { graphql, useStaticQuery } from 'gatsby';

type ContactPageDetails = {
  frontmatter: {
    title: string;
    description: string;
  };
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
      }
    }
  `);

  return data.mdx;
};
