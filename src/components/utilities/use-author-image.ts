import { useStaticQuery, graphql } from 'gatsby';

export const useAuthorImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query SiteAuthorImage {
        file(relativePath: { eq: "images/ajeet.png" }) {
          id
          childImageSharp {
            fixed(webpQuality: 100, width: 108) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  );

  return file.childImageSharp.fixed;
};
