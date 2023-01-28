import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type QueryTypes = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

export const useCelebrationImage = () => {
  const { file } = useStaticQuery<QueryTypes>(
    graphql`
      query SiteCelebrationImage {
        file(relativePath: { eq: "images/celebration.png" }) {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    `
  );

  return file.childImageSharp;
};
