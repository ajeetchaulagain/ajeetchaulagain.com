import styled, { DefaultTheme } from 'styled-components';
import { ml, mb, px, py, pt, pb } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Paragraph } from '../paragraph/Paragraph';
import Link from '../link/Link';

export const HeaderWrapper = styled.header`
  font-family: ${(props) => props.theme.fonts.secondaryHeading};
  width: 100%;
  position: absolute;
  z-index: 2;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${px(4)};
  ${py(6)};

  ${breakpoint('lg')`
     flex-direction:row;
     justify-content:space-between;
     margin:0 auto;
  `};

  ${breakpoint('xl')`
    width: 62rem;
  `};

  ${breakpoint('xxl')`
    width: 70rem;
  `};
`;

export const LogoWrapper = styled.div`
  svg {
    width: 1.75rem;
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${(props) => props.theme.fontWeights[3]};
    color: ${({ theme }) =>
      theme.name === 'lightTheme'
        ? theme.colors.secondaryText
        : theme.colors.primaryText};
    text-transform: uppercase;
    ${ml(4)}
  }
  ${mb({ xs: 5, lg: 0 })}
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.colors.lightGreen};
  }
`;

export const NavMenuWrapper = styled.nav``;

export const NavItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights[5]};
  color: ${({ theme }) =>
    theme.name === 'lightTheme'
      ? theme.colors.secondaryText
      : theme.colors.primaryText};

  & > a:hover {
    color: ${({ theme }) => theme.colors.brightLavender};
  }
  & > a.activeNavItem {
    color: ${({ theme }) => theme.colors.brightLavender};
    border-bottom: ${({ theme }) => theme.borders.thick};
  }
  & > a {
    ${breakpoint('xs', 'sm')`
      display:block;
      border: ${({ theme }: { theme: DefaultTheme }) => theme.borders.thin};
      ${px(2)};
      ${py(1)};
      ${mb(2)};
      &.activeNavItem {
        background-color: ${({ theme }: { theme: DefaultTheme }) =>
          theme.colors.primaryText};
        color:${({ theme }: { theme: DefaultTheme }) =>
          theme.colors.brightLavender};;
        border:${({ theme }: { theme: DefaultTheme }) => theme.borders.none};
      }
    `}
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  ${NavItem}:not(:first-child) {
    ${ml(4)};
  }
`;

export const FooterContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts.secondaryHeading};
  font-weight: ${(props) => props.theme.fontWeights[5]};
  width: 100%;
  background: url('../pattern-3.jpg') repeat fixed center;
  background-size: 1000px;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${pt(9)};
  ${pb(7)};
  ${px(4)};

  ${breakpoint('lg')`
  `};

  ${breakpoint('xl')`
    width: 62rem;
  `};

  ${breakpoint('xxl')`
    width: 70rem;
  `};
`;

export const SocialMediaLinksWrapper = styled.div`
  ${mb(5)};
`;

export const StyledParagraph = styled(Paragraph)`
  && {
    color: ${({ theme }) =>
      theme.name === 'lightTheme'
        ? theme.colors.secondaryText
        : theme.colors.primaryText};
    font-size: ${({ theme }) => theme.fontSizes.small};
    ${mb(1)};
  }
  text-align: center;
`;
