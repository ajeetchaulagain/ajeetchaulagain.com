import React from 'react';
import { useAuthorImage } from '../../hooks/useAuthorImage';
import { SocialMediaIcons } from '../social-media-icons/SocialMediaIcons';
import { ButtonLink } from '../button-link';
import {
  Container,
  GradientOverlay,
  ContentWrapper,
  AboutWrapper,
  StyledHeading,
  AboutImage,
  StyledParagraph,
  SocialMediaLinksWrapper,
} from './styles';

export const LandingPageHero = (): JSX.Element => {
  const { gatsbyImageData } = useAuthorImage();

  return (
    <Container>
      <GradientOverlay>
        <ContentWrapper>
          <AboutImage
            image={gatsbyImageData}
            loading="eager"
            alt="author-profile-image"
          />

          <AboutWrapper>
            <StyledHeading type="sans-serif">
              <span style={{ fontWeight: 100 }}> Hello. I'm </span>Ajeet !
            </StyledHeading>

            <StyledParagraph>
              I am pragmatic software engineer, passionate and proficient
              building applications that are scalable, maintainable and well
              architected with beautifully crafted code.
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
          </AboutWrapper>
        </ContentWrapper>
      </GradientOverlay>
    </Container>
  );
};
