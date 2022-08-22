import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import NewsLetter from '../components/NewsLetter';
import { useAuthorImage } from '../components/utilities/use-author-image';
import styled from 'styled-components';

const MdxWrapper = styled.div`
  margin-top: 1rem;
  ul li {
    font-size: 1.1rem;
    list-style-type: disc;
    margin-left: 2rem;
  }
  ol li {
    margin-left: 1.1rem;
    margin-bottom: 0.6rem;
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
