import { GradientOverlay } from '../landing-page-hero/styles';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { py } from 'styled-components-spacing';

export const Container = styled.div`
  width: 100%;
  background: url('../pattern-3.jpg') repeat fixed center;
  background-size: 1000px;
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
