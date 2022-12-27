import React from 'react';
import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  ContactForm,
  MarkdownRenderer,
  SocialMediaIcons,
  SEO,
} from 'components';
import { useContactPageDetails } from 'hooks/useContactPageDetails';

const ContactPage = () => {
  const {
    frontmatter: { title, description },
    body,
  } = useContactPageDetails();

  return (
    <MasterLayout>
      <SEO title={title} description={description} />
      <IntroSection />
      <ContentLayout>
        <MarkdownRenderer>{body}</MarkdownRenderer>
        <ContactForm />
        <h2>Follow me on:</h2>
        <SocialMediaIcons />
      </ContentLayout>
    </MasterLayout>
  );
};

export default ContactPage;
