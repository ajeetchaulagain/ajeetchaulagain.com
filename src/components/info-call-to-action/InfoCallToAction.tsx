import React, { ReactNode } from 'react';
import { Icon } from '../icon/Icon';
import { Container, IconWrapper, ContentWrapper } from './styles';

type InfoCallToActionProps = {
  children: ReactNode;
};

export const InfoCallToAction = ({ children }: InfoCallToActionProps) => {
  return (
    <Container>
      <IconWrapper>
        <Icon iconName="InfoCircle" />
      </IconWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};
