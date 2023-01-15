import React from 'react';
import styled from 'styled-components';
import {
  MasterLayout,
  NewsLetter,
  MarkdownRenderer,
  SEO,
  StyledGatsbyImage,
  ContentRenderer,
  HeroBlank,
} from 'components';
import { useAuthorImage, useAboutPageDetails } from 'hooks';
import { mb } from 'styled-components-spacing';

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
    body,
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
        <MarkdownRenderer>{body}</MarkdownRenderer>
        <NewsLetter />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default AboutPage;
