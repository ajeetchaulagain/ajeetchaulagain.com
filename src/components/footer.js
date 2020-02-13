import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

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
    <footer className={footerStyles.mainFooter}>
      <div className={footerStyles.footerContent}>
        <p>
          Developed by Ajeet Chaulagain, © 2020. Proudly built with React,
          Gatsby, Contentful, Github Pages
        </p>
      </div>
    </footer>
  )
}

export default Footer
