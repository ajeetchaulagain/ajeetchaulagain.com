import React from 'react';
import styled from 'styled-components';
import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  NewsLetter,
  MarkdownRenderer,
  SEO,
} from 'components';
import { useAuthorImage, useAboutPageDetails } from 'hooks';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';

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
      <IntroSection />
      <ContentLayout>
        <AboutImage image={gatsbyImageData} alt="about-image" />
        <MarkdownRenderer>{body}</MarkdownRenderer>
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default AboutPage;
