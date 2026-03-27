import React from 'react';
import styled from 'styled-components';
import AboutContent from '../data/markdown/about.md';
import { mb } from 'styled-components-spacing';
import {
  MasterLayout,
  MarkdownRenderer,
  SEO,
  StyledGatsbyImage,
  ContentRenderer,
  HeroBlank,
  GetInTouchSection,
} from 'components';
import { useAuthorImage, useAboutPageDetails } from 'hooks';

const ImageWrapper = styled.div`
  width: 150px;
  ${mb(5)}
  ${StyledGatsbyImage} {
    & > picture > img {
      border-radius: 100%;
    }
  }
`;

const AboutPage = () => {
  const {
    frontmatter: { title, description },
  } = useAboutPageDetails();
  const { gatsbyImageData } = useAuthorImage();

  return (
    <MasterLayout>
      <SEO title={title} description={description} />
      <HeroBlank />
      <ContentRenderer>
        <ImageWrapper>
          <StyledGatsbyImage image={gatsbyImageData} alt="about-image" />
        </ImageWrapper>
        <MarkdownRenderer>
          <AboutContent />
        </MarkdownRenderer>
      </ContentRenderer>
      <ContentRenderer>
        <GetInTouchSection />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default AboutPage;
