import React from 'react';
import Logo from '../../images/logo.svg';
import {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  LogoLink,
  Nav,
  NavItem,
  NavMenuWrapper,
  ThemeToggleSwitchWrapper,
  HomeTextNavItem,
  HomeIconNavItem,
} from './styles';
import { navItems } from './navItems';
import { ThemeToggleSwitch } from '../theme-toggle-switch/ThemeToggleSwitch';
import { Link } from '../link/Link';
import { GradientOverlay } from '../landing-page-hero/styles';
import { Icon } from '../icon/Icon';
import { useSiteMetadata } from 'hooks';

export const Header = (): JSX.Element => {
  const { title } = useSiteMetadata();
  const [{ url: homePageUrl }, ...navItemsWithoutHomePageLink] = navItems;

  return (
    <HeaderWrapper>
      <GradientOverlay>
        <HeaderContent>
          <LogoWrapper>
            <LogoLink to="/">
              <Logo />
              <span>{title}</span>
            </LogoLink>
          </LogoWrapper>

          <ThemeToggleSwitchWrapper>
            <ThemeToggleSwitch />
          </ThemeToggleSwitchWrapper>

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
