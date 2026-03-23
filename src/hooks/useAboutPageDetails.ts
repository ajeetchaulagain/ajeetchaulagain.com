import { graphql, useStaticQuery } from 'gatsby';

type AboutPageDetails = {
  frontmatter: {
    title: string;
    description: string;
  };
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
      }
    }
  `);

  return data.mdx;
};
