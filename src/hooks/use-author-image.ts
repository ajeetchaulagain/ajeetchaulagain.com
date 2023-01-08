import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export const useAuthorImage = () => {
  const { file } = useStaticQuery(
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

  return file.childImageSharp as { gatsbyImageData: IGatsbyImageData };
};
