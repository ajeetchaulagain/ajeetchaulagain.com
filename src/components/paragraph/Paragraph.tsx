import styled from 'styled-components';
import { mb } from 'styled-components-spacing';

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};
  ${mb(5)};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};
`;
