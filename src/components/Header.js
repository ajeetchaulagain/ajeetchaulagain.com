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
        }
      }
    }
  `)

  return (
    <header className={headerStyles.mainHeader}>
      <div className={headerStyles.headerContent}>
        <div className={headerStyles.logoSection}>
          <h1>Ajeet Chaulagain</h1>
        </div>
        <nav>
          <ul className={headerStyles.navList}>
            <li className={headerStyles.list}>
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
              <Link to="/portfolio" activeClassName={headerStyles.activeList}>
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
              <Link to="/skills" activeClassName={headerStyles.activeList}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <ul className={headerStyles.socialMediaLists}>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#">
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
