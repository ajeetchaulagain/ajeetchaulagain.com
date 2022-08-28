import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  NewsLetter,
  MarkdownRenderer,
} from 'components';
import { useAuthorImage } from 'hooks';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';

const AboutImage = styled(StyledGatsbyImage)`
  margin-bottom: 1rem;
  & > picture > img {
    border-radius: 100%;
  }
`;

const AboutPage = () => {
  const aboutPageData = useStaticQuery(graphql`
    query SiteAboutPage {
      mdx(fields: { slug: { eq: "about" } }) {
        frontmatter {
          title
        }
        body
      }
    }
  `);

  const { gatsbyImageData } = useAuthorImage();

  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <AboutImage image={gatsbyImageData} alt="about-image" />
        <MarkdownRenderer>{aboutPageData.mdx.body}</MarkdownRenderer>
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default AboutPage;
