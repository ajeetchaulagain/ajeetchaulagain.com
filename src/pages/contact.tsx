import React from 'react';
import styled from 'styled-components';
import { mt } from 'styled-components-spacing';
import {
  MasterLayout,
  ContactForm,
  MarkdownRenderer,
  SocialMediaIcons,
  SEO,
  ContentRenderer,
  SocialMediaList,
  Heading,
  HeroBlank,
} from 'components';
import { useContactPageDetails } from 'hooks';

const SocialMediaContainer = styled.div`
  && {
    > ${SocialMediaList} {
      color: ${({ theme }) =>
        theme.name === 'lightTheme'
          ? theme.colors.brandPrimary
          : theme.colors.primaryText};
      ${mt(4)};
      justify-content: flex-start;
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
