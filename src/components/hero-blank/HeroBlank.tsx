import { GradientOverlay } from 'components/landing-page-hero/styles';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Container = styled.div`
  width: 100%;
  background: url('../pattern-3.jpg') repeat fixed center;
  background-size: 1000px;
`;

const ContentWrapper = styled.div`
  min-height: 13rem;
  ${breakpoint('sm')`
    min-height: 10rem;
  `};
  ${breakpoint('lg')`
    min-height: 5.5rem;
  `};

  ${breakpoint('xl')`
    min-height: 18rem;
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
