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
