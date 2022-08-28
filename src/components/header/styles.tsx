import { Link } from 'gatsby';
import styled from 'styled-components';
import { ml, pt, px, mb } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';

export const HeaderWrapper = styled.header`
  color: ${(props) => props.theme.colors.light};
  width: 100%;
  position: absolute;
  z-index: 2;
`;

export const HeaderContent = styled.div`
  ${pt(5)};
  ${px(3)}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  ${breakpoint('xxl')`
    width: 70rem;
    margin: 0 auto;
  `}
  ${breakpoint('xs', 'md')`
    flex-direction: column;
  `}
`;

export const LogoWrapper = styled.div`
  svg {
    width: 1.75rem;
  }
  span {
    text-transform: uppercase;
    ${ml(3)};
    font-family: ${(props) => props.theme.fonts.heading.secondary}
    font-weight: ${(props) => props.theme.fontWeights.light};
  }
  ${mb({ xs: 3, md: 0 })}
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.colors.lightGreen};
  }
`;

export const NavMenuWrapper = styled.nav`
  font-weight: ${(props) => props.theme.fontWeights[5]};
`;

export const Nav = styled.ul`
  display: flex;
  text-transform: uppercase;
`;

export const NavItem = styled.li`
  ${ml(3)};
  & > a:hover {
    color: ${(props) => props.theme.colors.lightGreen};
  }
  & > a.activeNavItem {
    color: ${(props) => props.theme.colors.lightGreen};
    border-bottom: ${(props) => props.theme.borders.thick};
  }
`;
