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
import { mb } from 'styled-components-spacing';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mb({ xs: 3, lg: 0 })}
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

  return (
    <HeaderWrapper>
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
