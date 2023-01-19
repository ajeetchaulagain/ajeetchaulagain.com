import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
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
import { navItems } from './navItems';
import { ThemeToggleSwitch } from 'components/theme-toggle-switch/ThemeToggleSwitch';
import Link from '../link/Link';
import { GradientOverlay } from 'components/landing-page-hero/styles';
import { Icon } from 'components/icon/Icon';

const HomeTextNavItem = styled(NavItem)`
  ${breakpoint('xs', 'lg')`
    && {
      display:none;
    }
  `};
`;

const HomeIconNavItem = styled(NavItem)`
  ${breakpoint('lg')`
    && {
      display:none;
    }
  `};
`;

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

  const [{ url: homePageUrl }, ...navItemsWithoutHomePageLink] = navItems;
  return (
    <HeaderWrapper>
      <GradientOverlay>
        <HeaderContent>
          <LogoWrapper>
            <LogoLink to="/">
              <Logo />
              <span>{data.site.siteMetadata.title}</span>
            </LogoLink>
          </LogoWrapper>

          <ThemeToggleSwitch />

          <NavMenuWrapper>
            <Nav>
              <HomeIconNavItem>
                <Link to={homePageUrl} activeClassName="activeNavItem">
                  <Icon iconName="Home" />
                </Link>
              </HomeIconNavItem>
              <HomeTextNavItem>
                <Link to="/" activeClassName="activeNavItem">
                  Home
                </Link>
              </HomeTextNavItem>
              {navItemsWithoutHomePageLink.map(({ title, url }) => (
                <NavItem>
                  <Link to={url} activeClassName="activeNavItem">
                    {title}
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </NavMenuWrapper>
        </HeaderContent>
      </GradientOverlay>
    </HeaderWrapper>
  );
};
