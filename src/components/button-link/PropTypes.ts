import { IconName } from 'components/icon/Icon';

export type ButtonType = 'primary' | 'secondary' | 'plain';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'light' | 'dark' | 'grey';

export type ButtonProps = {
  text: string;
  to: string;
  type: ButtonType;
  size: ButtonSize;
  color: ButtonColor;
  iconName?: IconName;
};
