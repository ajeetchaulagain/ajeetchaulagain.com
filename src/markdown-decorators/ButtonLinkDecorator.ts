import { ButtonProps } from 'components';

type MakePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type ButtonLinkMarkdownType = MakePartial<
  ButtonProps,
  'variant' | 'color' | 'size'
>;

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
