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
import { ButtonLink } from 'components/button-link';

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
            © 2020–{new Date().getFullYear()} {author} ·{' '}
            <ButtonLink
              to="/design-system"
              text="Design System →"
              color="primary"
              size="small"
              variant="text"
            />
          </StyledParagraph>
        </FooterContentWrapper>
      </GradientOverlay>
    </FooterContainer>
  );
};
