import styled from 'styled-components';
import { p, ml, mb } from 'styled-components-spacing';

export const Container = styled.div`
  background-color: whitesmoke;
  border-radius: ${(props) => props.theme.borderRadius.base};
  ${p(4)};
  max-width: 25rem;
  h2 {
    margin: 0 !important;
  }
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Heading = styled.h2`
  font-size: 1rem !important;
  font-family: ${(props) => props.theme.fonts.primaryHeading} !important;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  ${mb(5)};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const ActionWrapper = styled.div`
  margin-top: auto;
  a:not(:first-child) {
    ${ml(2)};
  }
`;
