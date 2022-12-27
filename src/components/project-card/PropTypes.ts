import { ButtonProps } from 'components/button-link/PropTypes';

export type ProjectCardProps = {
  title: string;
  description?: string;
  actions?: ButtonProps[];
};
