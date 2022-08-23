import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MasterLayout, ContentLayout } from '../components/layout';
import IntroSection from '../components/IntroSection';
import { ContactForm } from '../components/contact-form/ContactForm';
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
