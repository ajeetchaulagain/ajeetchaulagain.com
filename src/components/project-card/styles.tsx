import styled from 'styled-components';
import { p, ml, mb } from 'styled-components-spacing';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.whiteSmoke};
  border-radius: ${(props) => props.theme.borderRadius.base};
  ${p(4)};
  max-width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.body};
  ${mb(5)};
`;

export const ActionWrapper = styled.div`
  margin-top: auto;
  a:not(:first-child) {
    ${ml(2)};
  }
`;
