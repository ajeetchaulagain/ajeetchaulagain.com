import { GradientOverlay } from '../landing-page-hero/styles';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { py } from 'styled-components-spacing';

export const Container = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  ${breakpoint('xl')`
    ${py(12)};
  `};
`;

export const HeroBlank = () => {
  return (
    <Container>
      <GradientOverlay>
        <ContentWrapper />
      </GradientOverlay>
    </Container>
  );
};
