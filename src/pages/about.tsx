import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  NewsLetter,
  MarkdownRenderer,
} from 'components';
import { useAuthorImage } from 'hooks';

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
        <GatsbyImage image={gatsbyImageData} alt="about-image" />
        <MarkdownRenderer>{aboutPageData.mdx.body}</MarkdownRenderer>
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default AboutPage;
