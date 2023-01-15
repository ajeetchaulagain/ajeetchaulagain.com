import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FooterContainer } from './styles';
import { GradientOverlay } from '../landing-page-hero/styles';
import { navItems } from './navItems';
import {
  NavMenuWrapper,
  Nav,
  NavItem,
  FooterContentWrapper,
  StyledParagraph,
  SocialMediaLinksWrapper,
} from './styles';
import { SocialMediaIcons } from '../social-media-icons/SocialMediaIcons';
import Link from '../link/Link';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <FooterContainer>
      <GradientOverlay>
        <FooterContentWrapper>
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
          <SocialMediaLinksWrapper>
            <SocialMediaIcons />
          </SocialMediaLinksWrapper>
          <StyledParagraph>
            <em>{data.site.siteMetadata.author} © 2020.</em> All rights
            reserved.
          </StyledParagraph>
          <StyledParagraph>
            Proudly built with
            <em>
              {' '}
              React, Gatsby, GraphQL, Typescript, Styled Components, Netlify and
              Nodejs
            </em>
          </StyledParagraph>
        </FooterContentWrapper>
      </GradientOverlay>
    </FooterContainer>
  );
};
