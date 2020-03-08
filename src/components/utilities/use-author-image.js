import { useStaticQuery, graphql} from "gatsby"

export const useAuthorImage = () =>{

    const {file} = useStaticQuery(
        graphql`
        query SiteAuthorImage {
        file(relativePath: {eq: "images/ajeet.jpeg"}) {
            id
            childImageSharp {
            fixed(webpQuality: 100, toFormat: WEBP, width: 108) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        }
   `
    )

    return file.childImageSharp.fixed
}