import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa"

import headerStyles from "./header.module.scss"

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header className={headerStyles.mainHeader}>
      <div className={headerStyles.headerContent}>
        <div className={headerStyles.logoSection}>
          <h1>
            <Link to="/" className={headerStyles.title}>
              {data.site.siteMetadata.title}
            </Link>
          </h1>
        </div>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link to="/" activeClassName={headerStyles.activeList}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName={headerStyles.activeList}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" activeClassName={headerStyles.activeList}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blog" activeClassName={headerStyles.activeList}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName={headerStyles.activeList}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" activeClassName={headerStyles.activeList}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <ul className={headerStyles.socialMediaLists}>
            <li>
              <a href="https://www.facebook.com/chaulagain.ajeet" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ajeetsweb" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ajeet-chaulagain/" target="_blank">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://github.com/ajeetchaulagain" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/chaulagainajeet/" target="_blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
