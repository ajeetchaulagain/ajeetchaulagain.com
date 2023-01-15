import Link from '../link/Link';
import styled from 'styled-components';
import { mt, ml } from 'styled-components-spacing';

export const ListItem = styled.li``;

export const SocialMediaList = styled.ul`
  display: flex;
  ${mt(6)};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) =>
    theme.name === 'lightTheme'
      ? theme.colors.secondaryText
      : theme.colors.primaryText};

  ${ListItem}:not(:first-child) {
    ${ml(4)};
  }
`;

export const StyledAnchorLink = styled(Link)`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brightLavender};
  }
`;
