import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  // Quering Graphql api with the tag template literals, allows that string to be processed by that function.
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.mainFooter}>
      <div className={footerStyles.footerContent}>
        <p>
          Developed by {data.site.siteMetadata.author} © 2020. All rights
          reserved.
        </p>
        <p>
          Proudly built with React, Gatsby, GraphQL, Netlify, NodeJS,
          Contentful, Webpack, Babel
        </p>
      </div>
    </footer>
  )
}

export default Footer
