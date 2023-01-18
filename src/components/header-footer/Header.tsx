import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
import styled from 'styled-components';

import { GradientOverlay } from 'components/landing-page-hero/styles';
import { Icon } from 'components/icon/Icon';

const ToggleWrapper = styled.div``;

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

          <ToggleWrapper>
            <ThemeToggleSwitch />
          </ToggleWrapper>
          <NavMenuWrapper>
            <Nav>
              <NavItem>
                <Link to="/" activeClassName="activeNavItem">
                  <Icon iconName="Home" />
                </Link>
              </NavItem>
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
      </GradientOverlay>
    </HeaderWrapper>
  );
};
