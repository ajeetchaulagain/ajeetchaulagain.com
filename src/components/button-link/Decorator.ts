import { ButtonProps } from './PropTypes';

type MakePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type ButtonLinkMarkdownType = MakePartial<
  ButtonProps,
  'type' | 'color' | 'size'
>;

export const ButtonLinkDecorator = (
  buttonLink: ButtonLinkMarkdownType
): ButtonProps => {
  return {
    text: buttonLink.text,
    to: buttonLink.to,
    type: buttonLink.type || 'primary',
    color: buttonLink.color || 'light',
    size: buttonLink.size || 'large',
    iconName: buttonLink.iconName,
  };
};
