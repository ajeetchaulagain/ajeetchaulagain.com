import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { p, ml, mb } from 'styled-components-spacing';
import { Heading } from '../heading/Heading';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  ${p(5)};
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  ${breakpoint('xs', 'lg')`
    ${p(4)}
  `}
`;

export const StyledHeading = styled(Heading)`
  ${mb(2)};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-family: ${({ theme }) => theme.fonts.body};
  ${mb(3)};
  line-height: 1.5;
  color: ${({ theme }) =>
    theme.name === 'lightTheme'
      ? theme.colors.primaryText
      : theme.colors.lightGrey};
`;

export const ActionWrapper = styled.div`
  margin-top: auto;
  a:not(:first-child) {
    ${ml(4)};
  }
`;
