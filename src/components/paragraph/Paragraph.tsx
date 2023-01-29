import styled, { DefaultTheme } from 'styled-components';
import { mb } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-family: ${({ theme }) => theme.fonts.body};
  ${mb(5)};
  line-height: ${({ theme }) => theme.lineHeights.regular};
  color: ${({ theme }) => theme.colors.primaryText};
  ${breakpoint('xs', 'lg')`
     font-size: ${({ theme }: { theme: DefaultTheme }) =>
       theme.fontSizes.small};
  `}
`;
