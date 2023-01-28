import styled from 'styled-components';
import { mb, mt, ml } from 'styled-components-spacing';
import { Heading } from '../heading/Heading';
import { Link } from '../link/Link';

export const AnchorLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.brandPrimary};
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  :hover {
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: ${({ theme }) => theme.lineHeights.regular};
  color: ${({ theme }) => theme.colors.primaryText};
  ${ml(5)};
`;

export const UnorderedList = styled.ul`
  ${ListItem} {
    list-style-type: disc;
    &::marker {
      color: ${({ theme }) => theme.colors.brightLavender};
    }
  }
  ${mb(5)};
`;

export const OrderedList = styled.ol`
  ${mb(5)};
`;

// Fixes for gatsby span wrapper
export const Span = styled.span`
  &.gatsby-resp-image-wrapper {
    margin: 0 !important;
  }
`;

export const StyledHeading = styled(Heading)`
  ${mb(2)};
  ${mt(7)};
`;

export const StyledHeading1 = styled(Heading)`
  ${mb(2)};
`;
