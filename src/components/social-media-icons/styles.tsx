import styled from 'styled-components';
import { ml } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Link } from '../link/Link';

export const ListItem = styled.li``;

export const SocialMediaList = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) =>
    theme.name === 'lightTheme'
      ? theme.colors.secondaryText
      : theme.colors.primaryText};

  ${ListItem}:not(:first-child) {
    ${ml(4)};
  }

  ${breakpoint('xs', 'lg')`
    justify-content:center;
  `};
`;

export const StyledAnchorLink = styled(Link)`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brightLavender};
  }
`;
