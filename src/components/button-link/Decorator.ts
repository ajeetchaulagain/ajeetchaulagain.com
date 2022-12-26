import { ActionType } from 'hooks';
import { ButtonProps } from './ButtonLink';

export const ButtonLinkDecorator = (link: any): ButtonProps => {
  return {
    text: link.title,
    to: link.url,
    type: link.type,
    color: link.color,
    size: link.size,
  };
};
