import { ButtonLinkMarkdownType } from 'markdown-types';

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary';

type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type ButtonProps = MakeRequired<
  ButtonLinkMarkdownType,
  'size' | 'color' | 'variant'
>;
