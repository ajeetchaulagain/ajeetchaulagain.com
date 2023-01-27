import styled from 'styled-components';
import { mt, mr, mb } from 'styled-components-spacing';

export const DateAndTimeComponent = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  ${mt(4)};
`;

export const TagsWrapper = styled.div`
  ${mt(5)};
  span:not(:last-child) {
    ${mr(2)};
  }
  span {
    ${mb(3)};
  }
`;
