import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';
import styled from 'styled-components';
import { p, mb, mt, mr } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Heading } from '../heading/Heading';

export const StyledHeading = styled(Heading)`
  ${mb(2)};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  ${p(5)};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 30px 60px rgba(46, 11, 68, 0.12);
    transition: box-shadow 0.5s ease, border 0.3s ease;
    ${StyledHeading} {
      text-decoration: underline;
    }
  }
  ${breakpoint('xs', 'lg')`
    ${p(4)}
  `}
`;

export const ImageWrapper = styled.div`
  ${StyledGatsbyImage} {
    max-width: 50px;
    border-radius: 100%;
  }
  ${mr(5)};
  ${mt(1)};
  ${breakpoint('xs', 'lg')`
      ${mr(4)};
  `}
`;
export const TextContentWrapper = styled.div`
  width: 100%;
`;

export const DateAndTimeComponent = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xmall};
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  display: inline-block;
  ${mb(0)};
`;

export const TagsWrapper = styled.div`
  ${mt(3)};
  span:not(:last-child) {
    ${mr(2)};
  }
  span {
    ${mb(2)};
  }
`;
