import { graphql, useStaticQuery } from 'gatsby';

type QueryTypes = {
  mdx: {
    frontmatter: {
      title: string;
      description: string;
    };
    body: string;
  };
};

export const useAboutPageDetails = () => {
  const { mdx } = useStaticQuery<QueryTypes>(graphql`
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

  return mdx;
};
