import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { MasterLayout, ContentLayout } from '../components/layout';
import IntroSection from '../components/IntroSection';
import NewsLetter from '../components/NewsLetter';
import { useAuthorImage } from '../components/utilities/use-author-image';
import { MdxWrapper } from '../components/MdxWrapper';

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
        <MdxWrapper>
          <MDXRenderer>{aboutPageData.mdx.body}</MDXRenderer>
        </MdxWrapper>
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default AboutPage;
