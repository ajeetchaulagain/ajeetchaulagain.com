import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"


import Logo from "../images/logo.svg"

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
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
      </Helmet>

      <div className={headerStyles.headerContent}>
        <div className={headerStyles.logoSection}>
          <h1>
          
            <Link to="/" className={headerStyles.title}>
            <Logo className={headerStyles.logoStyle} />
              <span>{data.site.siteMetadata.title}</span>
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
                Projects
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
          
          </ul>
        </nav>
    { /* 
        <div>
          <ul className={headerStyles.socialMediaLists}>
            <li>
              <a
                href="https://www.facebook.com/chaulagain.ajeet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ajeetsweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ajeet-chaulagain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ajeetchaulagain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/chaulagainajeet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
  </div> */ }
      </div>
    </header>
  )
}

export default Header
