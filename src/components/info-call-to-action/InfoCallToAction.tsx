import React from 'react';
import { Icon } from '../icon/Icon';
import {
  Container,
  IconWrapper,
  ContentWrapper,
  StyledParagraph,
} from './styles';

type InfoCallToAction = {
  htmlString: string;
};

export const InfoCallToAction = ({ htmlString }: InfoCallToAction) => {
  return (
    <Container>
      <IconWrapper>
        <Icon iconName="InfoCircle" />
      </IconWrapper>
      <ContentWrapper>
        <StyledParagraph dangerouslySetInnerHTML={{ __html: htmlString }} />
      </ContentWrapper>
    </Container>
  );
};
