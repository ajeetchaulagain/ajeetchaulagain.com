import { graphql, useStaticQuery } from 'gatsby';

type AboutPageDetails = {
  frontmatter: {
    title: string;
    description: string;
  };
  body: string;
};

type QueryTypes = {
  mdx: AboutPageDetails;
};

export const useAboutPageDetails = () => {
  const data = useStaticQuery<QueryTypes>(graphql`
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
