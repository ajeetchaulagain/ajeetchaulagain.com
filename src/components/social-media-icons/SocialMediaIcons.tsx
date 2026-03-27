import React from 'react';
import { SocialMediaList, ListItem, StyledAnchorLink, Tooltip } from './styles';
import { socialMediaLinks } from './socialMediaLinks';

export const SocialMediaIcons = () => {
  return (
    <SocialMediaList>
      {socialMediaLinks.map(({ url, IconComponent, ariaLabel }) => {
        return (
          <ListItem key={url as string}>
            <Tooltip>{ariaLabel as string}</Tooltip>
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
