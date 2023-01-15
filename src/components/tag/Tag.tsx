import React, { ReactNode } from 'react';
import { Container } from './styles';

export type TagType = 'light' | 'dark';
export type TagSize = 'small' | 'medium';

type TagProps = {
  children: ReactNode;
  type?: TagType;
  size?: TagSize;
};

export const Tag = ({ children, ...rest }: TagProps) => {
  return <Container {...rest}>{children}</Container>;
};

Tag.defaultProps = {
  type: 'light',
  size: 'small',
};
