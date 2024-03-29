import styled, { DefaultTheme } from 'styled-components';
import { ml, mb, px, py, pt, pb, mr, mt } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Paragraph } from '../paragraph/Paragraph';
import { Link } from '../link/Link';

export const HeaderWrapper = styled.header`
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  ${px(4)};
  ${py(4)};

  ${breakpoint('xs', 'xsm')`
      flex-direction: column;
  `};

  ${breakpoint('xsm', 'lg')`
      flex-direction: row-reverse;
  `};

  ${breakpoint('lg')`
     flex-direction:row;
     justify-content:space-between;
     margin:0 auto;
  `};

  ${breakpoint('xl')`
    width: 62rem;
     ${pt(6)};
  `};

  ${breakpoint('xxl')`
    width: 70rem;
  `};
`;

export const LogoWrapper = styled.div`
  ${breakpoint('xs', 'lg')`
    display:none;
  `};

  svg {
    width: 1.5rem;
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
    font-weight: ${({ theme }) => theme.fontWeights[4]};
    color: ${({ theme }) =>
      theme.name === 'lightTheme'
        ? theme.colors.secondaryText
        : theme.colors.primaryText};
    ${ml(3)};
    ${breakpoint('xs', 'lg')`
      font-size: ${({ theme }: { theme: DefaultTheme }) =>
        theme.fontSizes.small};
    `};
  }

  ${mb({ xs: 3, lg: 0 })}
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export const NavMenuWrapper = styled.nav`
  ${breakpoint('xs', 'sm')`
      ${mr(4)};
  `}
`;

export const NavItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  color: ${({ theme }) =>
    theme.name === 'lightTheme'
      ? theme.colors.secondaryText
      : theme.colors.primaryText};

  ${breakpoint('xs', 'xsm')`
      ${mb(3)};
  `}
  ${breakpoint('xs', 'lg')`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes.small};
  `};

  & > a:hover {
    color: ${({ theme }) => theme.colors.brightLavender};
  }

  & > a {
    border-radius: 3px;
    &.activeNavItem {
      color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.brightLavender};
      text-decoration: underline;
      text-underline-offset: 0.3rem;
    }
  }
`;

export const HomeTextNavItem = styled(NavItem)`
  ${breakpoint('xs', 'lg')`
    && {
      display:none;
    }
  `};
`;

export const HomeIconNavItem = styled(NavItem)`
  ${breakpoint('lg')`
    && {
      display:none;
    }
  `};
`;

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  ${NavItem}:not(:first-child) {
    ${ml(4)};
    ${breakpoint('xs', 'lg')`
      ${ml(4)};
    `};
  }
`;

export const ThemeToggleSwitchWrapper = styled.div`
  ${breakpoint('xs', 'xsm')`
     ${mb(4)};
  `};
`;

// Footer and its component styles
export const FooterContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  width: 100%;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${pt(6)};
  ${pb(4)};
  ${px(4)};

  ${breakpoint('xl')`
    width: 62rem;
  `};

  ${breakpoint('xxl')`
    width: 70rem;
  `};

  ${NavMenuWrapper} {
    ${mr(0)}
  }
`;

export const SocialMediaLinksWrapper = styled.div`
  ${mb(4)};
  ${mt(6)};
  ${breakpoint('xs', 'lg')`
      ${mt(5)};
  `};
`;

export const StyledParagraph = styled(Paragraph)`
  && {
    color: ${({ theme }) =>
      theme.name === 'lightTheme'
        ? theme.colors.blueBell
        : theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSizes.small};
    ${mb(1)};
  }
  text-align: center;
`;
