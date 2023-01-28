import { Paragraph, StyledGatsbyImage } from 'components';
import styled, { css } from 'styled-components';
import { py, pr, pl, mt, mr, ml, mb } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'components/link/Link';

export const PostHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  ${mb(6)};
  ${mb(6)};

  ${breakpoint('xs', 'md')`
    flex-direction:column-reverse;
    ${StyledGatsbyImage}{
      ${mb(4)};
    }
  `}
`;

export const PostHeaderLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostHeaderRightColumn = styled.div`
  ${StyledGatsbyImage} {
    max-width: 50px;
    border-radius: 100%;
  }
  ${mt(2)};
  ${ml(4)};
  ${breakpoint('xs', 'md')`
    ${ml(0)};
    ${mt(0)};
  `}
`;

export const StyledParagraph = styled(Paragraph)`
  text-transform: uppercase;
`;

export const PageNavigationWrapper = styled.div`
  display: flex;
  ${mt(9)};
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.buttonColors['primary'].background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes.small};
  :hover {
    text-decoration: none;
  }
  svg {
    width: 12px;
  }
`;

export const NavCommonStyles = css`
  ${py(3)};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${Paragraph} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const PreviousNav = styled.div`
  ${NavCommonStyles};
  ${pr(3)}
  ${StyledLink} {
    svg {
      ${mr(2)};
    }
  }
  border-left: none;
`;

export const NextNav = styled.div`
  ${NavCommonStyles};
  ${pl(3)};
  text-align: right;
  border-right: none;
  border-left: none;
  ${StyledLink} {
    svg {
      ${ml(2)};
    }
  }
`;
