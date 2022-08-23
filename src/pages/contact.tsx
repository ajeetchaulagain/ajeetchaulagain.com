import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import ContactForm from '../components/ContactForm';
import SocialMediaIcons from '../components/utilities/social-media-icons';
import { MdxWrapper } from '../components/MdxWrapper';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ContactPage = () => {
  const contactPageData = useStaticQuery(graphql`
    query SiteContactPage {
      mdx(fields: { slug: { eq: "contact" } }) {
        frontmatter {
          title
        }
        body
      }
    }
  `);

  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <MdxWrapper>
          <MDXRenderer>{contactPageData.mdx.body}</MDXRenderer>
        </MdxWrapper>
        <ContactForm />
        <h2>Follow me on:</h2>
        <SocialMediaIcons />
      </ContentLayout>
    </MasterLayout>
  );
};

export default ContactPage;
