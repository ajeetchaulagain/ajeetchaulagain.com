import React from 'react';
import { SocialMediaList, ListItem, StyledAnchorLink } from './styles';
import { socialMediaLinks } from './socialMediaLinks';

export const SocialMediaIcons = () => {
  return (
    <SocialMediaList>
      {socialMediaLinks.map(({ url, IconComponent }) => {
        return (
          <ListItem>
            <StyledAnchorLink to={url as string}>
              <IconComponent />
            </StyledAnchorLink>
          </ListItem>
        );
      })}
    </SocialMediaList>
  );
};
