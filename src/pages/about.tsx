import React from 'react';
import styled from 'styled-components';
import {
  MasterLayout,
  NewsLetter,
  MarkdownRenderer,
  SEO,
  StyledGatsbyImage,
  ContentRenderer,
} from 'components';
import { useAuthorImage, useAboutPageDetails } from 'hooks';
import { HeroBlank } from 'components/hero-blank/HeroBlank';

const AboutImage = styled(StyledGatsbyImage)`
  margin-bottom: 1rem;
  & > picture > img {
    border-radius: 100%;
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
        <AboutImage image={gatsbyImageData} alt="about-image" />
        <MarkdownRenderer>{body}</MarkdownRenderer>
        <NewsLetter />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default AboutPage;
