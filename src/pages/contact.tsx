import React from 'react';
import {
  MasterLayout,
  ContactForm,
  MarkdownRenderer,
  SocialMediaIcons,
  SEO,
  ContentRenderer,
} from 'components';
import { useContactPageDetails } from 'hooks/useContactPageDetails';
import { HeroBlank } from 'components/hero-blank/HeroBlank';

const ContactPage = () => {
  const {
    frontmatter: { title, description },
    body,
  } = useContactPageDetails();

  return (
    <MasterLayout>
      <SEO title={title} description={description} />
      <HeroBlank />
      <ContentRenderer>
        <MarkdownRenderer>{body}</MarkdownRenderer>
        <ContactForm />
        <h2>Follow me on:</h2>
        <SocialMediaIcons />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default ContactPage;
