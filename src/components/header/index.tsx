import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../../images/logo.svg';
import { ml, pl, pr, pt, pb } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Heading } from './heading';

const HeaderWrapper = styled.header`
  width: 100%;
  position: absolute;
  z-index: 2;
`;

const HeaderContainer = styled.div`
  ${pt(3)};
  ${pb(3)};
  color: ${(props) => props.theme.headerFontColor};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoint('xs', 'sm')`
    flex-direction:column;
  `}

  ${breakpoint('xs', 'xl')`
    ${pl(3)};
    ${pr(3)};
  `}

  ${breakpoint('xl')`
     width: 1120px;
  `}
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: blue;
    display: flex;
    height: 20px;
    margin-right: 5px;
    @media (max-width: 567px) {
      height: 25px;
    }
  }
  span {
    font-size: 2rem;
  }
`;

const NavWrapper = styled.ul`
  display: flex;
`;

const StyledLi = styled.li`
  ${ml(3)};
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  display: flex;
`;

export const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
      </Helmet>
      <HeaderContainer>
        <LogoWrapper>
          <StyledLink to="/">
            <Logo />
            <Heading size={2}>AJEET CHAULAGAIN</Heading>
          </StyledLink>
        </LogoWrapper>

        <NavWrapper>
          <StyledLi>
            <Link to="/">Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/about">About</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/projects">Projects</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/articles">Articles</Link>
          </StyledLi>
        </NavWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
