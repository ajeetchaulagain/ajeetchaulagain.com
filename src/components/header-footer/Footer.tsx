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
import { Link } from '../link/Link';

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
                <NavItem key={url}>
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
            © 2026 {data.site.siteMetadata.author}.
          </StyledParagraph>
        </FooterContentWrapper>
      </GradientOverlay>
    </FooterContainer>
  );
};
