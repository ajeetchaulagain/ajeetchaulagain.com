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
    <footer className="main-footer">
      <p>
        Developed by <strong>{data.site.siteMetadata.author}</strong>. ©2020.
        Built with <strong>React</strong>
      </p>
      <p></p>
    </footer>
  )
}

export default Footer
