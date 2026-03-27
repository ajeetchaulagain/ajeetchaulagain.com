import styled from 'styled-components';
import { mb, mt, pl } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Link } from '../link/Link';

export const Container = styled.div``;

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;
  ${mt(1)};
  ${mb(6)};

  ${breakpoint('xs', 'md')`
    flex-direction: column;
  `}
`;

export const SocialLinkItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primaryText};
  width: fit-content;
  transition: border-color 0.15s ease, color 0.15s ease;

  svg {
    font-size: 1rem;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.brandPrimary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.brandPrimary};
    color: ${({ theme }) => theme.colors.brandPrimary};
  }
`;
