import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';
import styled from 'styled-components';
import { p, mb, mt, ml } from 'styled-components-spacing';
import { Heading } from '../heading/Heading';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.whiteSmoke};
  border-radius: ${(props) => props.theme.borderRadius.base};
  ${p(4)};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 12%;
  ${StyledGatsbyImage} {
    border-radius: 100%;
  }
`;
export const TextContentWrapper = styled.div`
  width: 82%;
`;

export const StyledHeading = styled(Heading)`
  ${mb(3)};
`;

export const DateAndTimeComponent = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xmall};
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  display: inline-block;
  ${mb(0)};
`;

export const TagsWrapper = styled.div`
  ${mt(3)};
  span:not(:first-child) {
    ${ml(2)};
  }
`;
