import React from 'react';
import { SocialMediaList, ListItem, StyledAnchorLink } from './styles';
import { socialMediaLinks } from './socialMediaLinks';

export const SocialMediaIcons = () => {
  return (
    <SocialMediaList>
      {socialMediaLinks.map(({ url, IconComponent }) => {
        return (
          <ListItem>
            <StyledAnchorLink
              href={url as string}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent />
            </StyledAnchorLink>
          </ListItem>
        );
      })}
    </SocialMediaList>
  );
};
