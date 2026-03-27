import React from 'react';
import { Paragraph } from '../paragraph/Paragraph';
import { socialMediaLinks } from '../social-media-icons/socialMediaLinks';
import { Container, SocialLinksList, SocialLinkItem } from './styles';
import { Heading } from '../heading/Heading';
import { ButtonLink } from '../button-link';

export const GetInTouchSection = () => {
  return (
    <Container>
      <Heading level="h2" size="xlarge" type="serif">
        Get in touch
      </Heading>
      <Paragraph>
        Follow along for updates, what I’m building, and new posts, or just say
        hello — I’m always open to a good conversation about software.
      </Paragraph>

      <SocialLinksList>
        {socialMediaLinks.map(({ url, ariaLabel, IconComponent }) => (
          <li key={url as string}>
            <SocialLinkItem to={url as string}>
              <IconComponent />
              {ariaLabel as string}
            </SocialLinkItem>
          </li>
        ))}
      </SocialLinksList>

      <Paragraph>Want new articles straight to your inbox?</Paragraph>
      <ButtonLink
        to="/newsletter"
        text="Subscribe to my newsletter →"
        variant="text"
        color="primary"
        size="large"
      />
    </Container>
  );
};
