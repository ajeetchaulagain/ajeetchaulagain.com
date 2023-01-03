import styled from 'styled-components';
import { mb } from 'styled-components-spacing';

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts.body};
  ${mb(5)};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
