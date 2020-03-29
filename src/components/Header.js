import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa"

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

  const logoStyle = {
    height: "1.2rem",
    marginRight: "7px",
    marginTop: "3px"
  }

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
              <Logo style={logoStyle} />
              <span>{data.site.siteMetadata.title.split(" ")[0]} </span> <span className={headerStyles.titleLight}> {data.site.siteMetadata.title.split(" ")[1]}</span>
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
              <Link to="/about" activeClassName={headerStyles.activeList}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName={headerStyles.activeList}>
                Contact
              </Link>
            </li>
             { /* <li>
              <Link to="/resume" activeClassName={headerStyles.activeList}>
                Resume
              </Link>
            </li>
             */}
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
            </div> */}
      </div>
    </header>
  )
}

export default Header
