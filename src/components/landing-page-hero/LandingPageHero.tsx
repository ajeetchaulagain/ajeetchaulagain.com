import React from 'react';
import { useAuthorImage } from '../../hooks/useAuthorImage';
import { SocialMediaIcons } from '../social-media-icons/SocialMediaIcons';
import { ButtonLink } from '../button-link';
import {
  Container,
  GradientOverlay,
  ContentWrapper,
  AboutContentWrapper,
  StyledHeading,
  AboutImageWrapper,
  StyledParagraph,
  SocialMediaLinksWrapper,
} from './styles';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';

export const LandingPageHero = (): JSX.Element => {
  const { gatsbyImageData } = useAuthorImage();

  return (
    <Container>
      <GradientOverlay>
        <ContentWrapper>
          <AboutImageWrapper>
            <StyledGatsbyImage
              image={gatsbyImageData}
              loading="eager"
              alt="author-profile-image"
            />
          </AboutImageWrapper>

          <AboutContentWrapper>
            <StyledHeading type="serif">
              <span style={{ fontWeight: 100 }}> Hi. I'm </span>Ajeet,
            </StyledHeading>

            <StyledParagraph>
              I am Software Engineer with 5+ years of commercial experience
              building production systems across fullstack. I work mainly with
              TypeScript, React, Node.js, and AWS, and enjoy taking ownership of
              software from design through to production.
            </StyledParagraph>

            <ButtonLink
              to="/about"
              text="More About Me →"
              variant="text"
              color="secondary"
              size="large"
            />

            <SocialMediaLinksWrapper>
              <SocialMediaIcons />
            </SocialMediaLinksWrapper>
          </AboutContentWrapper>
        </ContentWrapper>
      </GradientOverlay>
    </Container>
  );
};
