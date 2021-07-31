import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Logo from '../images/logo.svg';

import * as headerStyles from './header.module.scss';

const Header = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

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
                Articles
              </Link>
            </li>

            <li>
              <Link to="/contact" activeClassName={headerStyles.activeList}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
