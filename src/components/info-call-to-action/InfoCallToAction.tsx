import React from 'react';
import styled from 'styled-components';
import { p, my } from 'styled-components-spacing';
import { Icon } from 'components/icon/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiaryBackground};
  border-radius: ${(props) => props.theme.borderRadius.base};
  ${p(4)};
  ${my(5)};
  && {
    p {
      margin-bottom: 0;
      line-height: 1.5;
    }
  }
`;

const IconWrapper = styled.div`
  width: 10%;
  font-size: 3rem;
  display: flex;
  color: ${({ theme }) => theme.colors.brandPrimary}; ;
`;

const ContentWrapper = styled.div`
  width: 90%;
`;

type InfoCallToAction = {
  htmlString: string;
};

export const InfoCallToAction = ({ htmlString }: InfoCallToAction) => {
  return (
    <Container>
      <IconWrapper>
        <Icon iconName="InfoCircle" />
      </IconWrapper>
      <ContentWrapper dangerouslySetInnerHTML={{ __html: htmlString }} />
    </Container>
  );
};
