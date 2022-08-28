import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Logo from '../../images/logo.svg';
import {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  LogoLink,
  Nav,
  NavItem,
  NavMenuWrapper,
} from './styles';

export const Header = (): JSX.Element => {
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

  const navItems: Record<string, string>[] = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Projects', url: '/projects' },
    { title: 'Articles', url: '/blog' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <HeaderWrapper>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Parisienne&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <HeaderContent>
        <LogoWrapper>
          <LogoLink to="/">
            <Logo />
            <span>{data.site.siteMetadata.title}</span>
          </LogoLink>
        </LogoWrapper>
        <NavMenuWrapper>
          <Nav>
            {navItems.map(({ title, url }) => (
              <NavItem>
                <Link to={url} activeClassName="activeNavItem">
                  {title}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </NavMenuWrapper>
      </HeaderContent>
    </HeaderWrapper>
  );
};
