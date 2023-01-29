import { Paragraph } from 'components/paragraph/Paragraph';
import styled, { DefaultTheme } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { mb, mt, ml, pb } from 'styled-components-spacing';
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
  ${breakpoint('xs', 'lg')`
     font-size: ${({ theme }: { theme: DefaultTheme }) =>
       theme.fontSizes.small};
  `}
`;

export const UnorderedList = styled.ul`
  ${ListItem} {
    list-style-type: disc;
    &::marker {
      color: ${({ theme }) => theme.colors.brandPrimary};
    }
  }
  & + ${Paragraph} {
    ${mt(5)};
  }
`;

export const OrderedList = styled.ol`
  ${ListItem} {
    &::marker {
      color: ${({ theme }) => theme.colors.brandPrimary};
      font-weight: 600;
    }
  }
`;

// Fixes for gatsby span wrapper
export const Span = styled.span`
  &.gatsby-resp-image-wrapper {
    margin: 0 !important;
  }
`;

export const StyledHeading = styled(Heading)`
  ${mb(1)};
  ${mt(7)};
  & + ${Paragraph} {
    ${mt(3)};
  }
`;

export const StyledHeading2 = styled(Heading)`
  ${mb(2)};
  ${mt(7)};
  ${pb(2)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  & + ${Paragraph} {
    ${mt(5)};
  }
`;

export const StyledHeading1 = styled(Heading)`
  ${mb(2)};
`;

export const StyledParagraph = styled(Paragraph)`
  ${mb(5)};
`;
