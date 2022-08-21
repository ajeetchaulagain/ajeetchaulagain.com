import { useStaticQuery, graphql } from 'gatsby';

export const useAuthorImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query SiteAuthorImage {
        file(relativePath: { eq: "images/ajeet.png" }) {
          id
          childImageSharp {
            gatsbyImageData(layout: FIXED, width:108)
          }
        }
      }
    `
  );

  return file.childImageSharp;
};
