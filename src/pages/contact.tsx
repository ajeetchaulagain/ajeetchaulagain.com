import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  ContactForm,
  MarkdownRenderer,
  SocialMediaIcons,
} from 'components';

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
        <MarkdownRenderer>{contactPageData.mdx.body}</MarkdownRenderer>
        <ContactForm />
        <h2>Follow me on:</h2>
        <SocialMediaIcons />
      </ContentLayout>
    </MasterLayout>
  );
};

export default ContactPage;
