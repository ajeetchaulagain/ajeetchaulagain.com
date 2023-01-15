import { ButtonProps } from 'components';
import { ButtonLinkMarkdownType } from 'markdown-types';

export const ButtonLinkDecorator = (
  buttonLink: ButtonLinkMarkdownType
): ButtonProps => {
  return {
    text: buttonLink.text,
    to: buttonLink.to,
    variant: buttonLink.variant || 'text',
    color: buttonLink.color || 'primary',
    size: buttonLink.size || 'large',
    iconName: buttonLink.iconName,
  };
};
