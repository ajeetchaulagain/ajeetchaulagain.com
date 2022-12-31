import { IconName } from 'components/icon/Icon';

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary';

export type ButtonProps = {
  text: string;
  to: string;
  variant: ButtonVariant;
  size: ButtonSize;
  color: ButtonColor;
  iconName?: IconName;
};
