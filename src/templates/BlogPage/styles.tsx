import { Paragraph } from 'components';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { py, pr, pl, mt, ml } from 'styled-components-spacing';

export const PostHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.oldSilver50};
`;

export const PostHeaderLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostHeaderRightColumn = styled.div`
  width: 20%;
`;

export const DateAndTimeComponent = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xmall};
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  ${mt(4)};
`;

export const TagsWrapper = styled.div`
  ${mt(5)};
  span:not(:first-child) {
    ${ml(2)};
  }
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
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights[6]};
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
  border: 1px solid ${({ theme }) => theme.colors.oldSilver50};
  ${Paragraph} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const PreviousNav = styled.div`
  ${NavCommonStyles};
  ${pr(3)}
  ${StyledLink} {
    svg {
      margin-right: 0.5rem;
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
      margin-left: 0.5rem;
    }
  }
`;
