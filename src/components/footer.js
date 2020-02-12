import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
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
    <footer class="flex-container main-footer">
    <div class="footer-content">
        <p>Developed by Ajeet Chaulagain, © 2020. Proudly built with React, Gatsby, Contentful, Github Pages</p>
    </div>
    </footer>

  )
}

export default Footer
