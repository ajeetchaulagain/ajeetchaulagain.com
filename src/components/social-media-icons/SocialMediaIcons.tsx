import React from 'react';
import { SocialMediaList, ListItem, StyledAnchorLink } from './styles';
import { socialMediaLinks } from './socialMediaLinks';

export const SocialMediaIcons = () => {
  return (
    <SocialMediaList>
      {socialMediaLinks.map(({ url, IconComponent, ariaLabel }) => {
        return (
          <ListItem key={url as string}>
            <StyledAnchorLink
              to={url as string}
              aria-label={ariaLabel as string}
            >
              <IconComponent />
            </StyledAnchorLink>
          </ListItem>
        );
      })}
    </SocialMediaList>
  );
};
