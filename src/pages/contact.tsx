import React from 'react';
import {
  MasterLayout,
  ContactForm,
  MarkdownRenderer,
  SocialMediaIcons,
  SEO,
  ContentRenderer,
  SocialMediaList,
  Heading,
} from 'components';
import { useContactPageDetails } from 'hooks/useContactPageDetails';
import { HeroBlank } from 'components/hero-blank/HeroBlank';
import styled from 'styled-components';
import { mt } from 'styled-components-spacing';

const SocialMediaContainer = styled.div`
  && {
    > ${SocialMediaList} {
      color: ${({ theme }) =>
        theme.name === 'lightTheme'
          ? theme.colors.brandPrimary
          : theme.colors.primaryText};
      ${mt(4)}
    }
  }
`;

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
        <Heading level="h2" size="small" type="sans-serif">
          Follow me on:
        </Heading>
        <SocialMediaContainer>
          <SocialMediaIcons />
        </SocialMediaContainer>
      </ContentRenderer>
    </MasterLayout>
  );
};

export default ContactPage;
