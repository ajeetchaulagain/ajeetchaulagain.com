import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { MasterLayout, ContentLayout } from '../components/layout';
import { IntroSection } from '../components/intro-section/IntroSection';
import { NewsLetter } from '../components/newsletter/NewsLetter';
import { useAuthorImage } from '../components/utilities/use-author-image';
import { MarkdownRenderer } from '../components/markdown-renderer/MarkdownRenderer';

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
