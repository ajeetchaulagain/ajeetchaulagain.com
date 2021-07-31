import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import * as footerStyles from './footer.module.scss';

import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaCoffee,
} from 'react-icons/fa';

const Footer = (): JSX.Element => {
  // Quering Graphql api with the tag template literals, allows that string to be processed by that function.
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={footerStyles.mainFooter}>
      <div className={footerStyles.footerContent}>
        <ul className={footerStyles.navList}>
          <li>
            <Link to="/" activeClassName={footerStyles.activeList}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" activeClassName={footerStyles.activeList}>
              About
            </Link>
          </li>

          <li>
            <Link to="/projects" activeClassName={footerStyles.activeList}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName={footerStyles.activeList}>
              Blog
            </Link>
          </li>

          <li>
            <Link to="/contact" activeClassName={footerStyles.activeList}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/newsletter" activeClassName={footerStyles.activeList}>
              Newsletter
            </Link>
          </li>
        </ul>

        <ul className={footerStyles.socialMediaLists}>
          <li>
            <a
              href="https://www.facebook.com/chaulagain.ajeet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
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
          <li>
            <a
              href="https://ko-fi.com/ajeetchaulagain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCoffee />
            </a>
          </li>
        </ul>

        <p>
          <em>{data.site.siteMetadata.author} © 2020.</em> All rights reserved.
        </p>
        <p>
          Proudly built with{' '}
          <em>React, Gatsby, GraphQL, Netlify, Nodejs, Webpack and Babel</em>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
