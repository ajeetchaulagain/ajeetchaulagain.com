import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { p, ml, mb } from 'styled-components-spacing';
import { Heading } from 'components/heading/Heading';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  ${p(5)};
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  ${breakpoint('xs', 'lg')`
    ${p(3)}
  `}
`;

export const StyledHeading = styled(Heading)`
  ${mb(2)};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.body};
  ${mb(5)};
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
