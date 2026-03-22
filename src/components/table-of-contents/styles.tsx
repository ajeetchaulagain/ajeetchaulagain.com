import styled from 'styled-components';

export const TocWrapper = styled.nav`
  position: fixed;
  right: 3rem;
  width: 200px;
  transition: top 0.15s ease;
  max-height: calc(100vh - 10rem);
  overflow-y: auto;
  overflow-x: hidden;
  display: none;
  z-index: 1;
  background: ${({ theme }) => theme.colors.primaryBackground};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  @media (min-width: 1380px) {
    display: block;
  }
`;

export const TocTitle = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #888;
  margin: 0 0 0.6rem 0;
`;

export const TocList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid ${({ theme }) => theme.colors.cardBorder};
`;

type TocItemProps = { isActive: boolean; level: 2 | 3 };

export const TocItem = styled.li<TocItemProps>`
  padding-left: ${({ level }) => (level === 3 ? '1.25rem' : '0.75rem')};
  border-left: 2px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.brandPrimary : 'transparent'};
  margin-left: -2px;
  transition: border-color 0.2s ease;

  a {
    display: block;
    padding: 0.2rem 0;
    font-size: 0.78rem;
    line-height: 1.4;
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.brandPrimary : theme.colors.lightGrey};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.brandPrimary};
    }
  }
`;
