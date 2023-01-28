import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type QueryTypes = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

export const useBooksImage = () => {
  const { file } = useStaticQuery<QueryTypes>(
    graphql`
      query SiteBooksImage {
        file(relativePath: { eq: "images/books.png" }) {
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
