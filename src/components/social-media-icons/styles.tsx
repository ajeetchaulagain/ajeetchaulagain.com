import styled from 'styled-components';
import { ml } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Link } from '../link/Link';

export const Tooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.brandPrimary};
  color: ${({ theme }) => theme.colors.primaryBackground};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  white-space: nowrap;
  padding: 3px 8px;
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease;
`;

export const ListItem = styled.li`
  position: relative;

  &:hover ${Tooltip} {
    opacity: 1;
  }
`;

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
