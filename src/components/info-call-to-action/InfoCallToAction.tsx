import React from 'react';
import styled from 'styled-components';
import { p, my } from 'styled-components-spacing';
import { Icon } from 'components/icon/Icon';
import { Paragraph } from 'components/paragraph/Paragraph';
import { mb } from 'styled-components-spacing';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiaryBackground};
  border-radius: ${(props) => props.theme.borderRadius.base};
  ${p(4)};
  ${my(5)};

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.brandPrimary};
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    :hover {
      text-decoration: none;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  ${mb(0)};
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  display: flex;
  color: ${({ theme }) => theme.colors.brandPrimary};
  svg {
    display: inline-block;
    margin-right: 1rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
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
      <ContentWrapper>
        <StyledParagraph dangerouslySetInnerHTML={{ __html: htmlString }} />
      </ContentWrapper>
    </Container>
  );
};
