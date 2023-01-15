import styled from 'styled-components';
import { mb } from 'styled-components-spacing';

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-family: ${({ theme }) => theme.fonts.body};
  ${mb(5)};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.colors.primaryText};
`;
