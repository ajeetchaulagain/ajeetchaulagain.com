import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FooterContainer } from './styles';
import { GradientOverlay } from '../landing-page-hero/styles';
import { navItems } from './navItems';
import {
  Nav,
  NavItem,
  FooterContentWrapper,
  FooterRow,
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

  const { author } = data.site.siteMetadata;

  return (
    <FooterContainer>
      <GradientOverlay>
        <FooterContentWrapper>
          <FooterRow>
            <Nav>
              {navItems.map(({ title, url }) => (
                <NavItem key={url}>
                  <Link to={url} activeClassName="activeNavItem">
                    {title}
                  </Link>
                </NavItem>
              ))}
            </Nav>

            <SocialMediaLinksWrapper>
              <SocialMediaIcons />
            </SocialMediaLinksWrapper>
          </FooterRow>

          <StyledParagraph>
            © 2020–{new Date().getFullYear()} {author}
          </StyledParagraph>
        </FooterContentWrapper>
      </GradientOverlay>
    </FooterContainer>
  );
};
