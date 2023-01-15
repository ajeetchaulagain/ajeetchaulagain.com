import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type QueryTypes = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

export const useAuthorImage = () => {
  const { file } = useStaticQuery<QueryTypes>(
    graphql`
      query SiteAuthorImage {
        file(relativePath: { eq: "images/ajeet-profile.jpg" }) {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `
  );

  return file.childImageSharp;
};
