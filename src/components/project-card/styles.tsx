import styled from 'styled-components';
import { p, ml, mb } from 'styled-components-spacing';
import { Heading } from 'components/heading/Heading';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.whiteSmoke};
  border-radius: ${(props) => props.theme.borderRadius.base};
  ${p(5)};
  max-width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledHeading = styled(Heading)`
  ${mb(2)};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.body};
  ${mb(5)};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ActionWrapper = styled.div`
  margin-top: auto;
  a:not(:first-child) {
    ${ml(4)};
  }
`;
