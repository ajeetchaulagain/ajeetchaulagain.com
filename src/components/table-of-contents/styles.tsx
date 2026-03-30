import styled from 'styled-components';

// ─── Mobile inline collapsible ───────────────────────────────────────────────

export const MobileTocWrapper = styled.div`
  position: sticky;
  top: 3.6rem;
  z-index: 10;
  background: ${({ theme }) => theme.colors.primaryBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  margin-bottom: 2rem;
  @media (min-width: 1380px) {
    display: none;
  }
`;

export const MobileTocDetails = styled.details`
  padding: 0.8rem 0rem;
  summary {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.tocText};
    font-family: ${({ theme }) => theme.fonts.primaryHeading};
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    &::-webkit-details-marker {
      display: none;
    }

    &::before {
      content: '▶';
      font-size: 0.55rem;
      transition: transform 0.2s ease;
    }
  }

  &[open] summary::before {
    transform: rotate(90deg);
  }

  &[open] summary {
    margin-bottom: 0.75rem;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────

export const TocWrapper = styled.nav`
  position: fixed;
  right: 3rem;
  width: 220px;
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
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.brandPrimary};
    border-radius: 100vw;
    opacity: 0.6;
  }
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.brandPrimary} transparent;

  @media (min-width: 1380px) {
    display: block;
  }
`;

export const TocTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.tocText};
  font-family: ${({ theme }) => theme.fonts.primaryHeading};
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
    padding: 0.3rem 0;
    font-size: 0.8rem;
    font-family: ${({ theme }) => theme.fonts.primaryHeading};
    line-height: 1.5;
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.brandPrimary : theme.colors.tocText};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.brandPrimary};
    }
  }
`;
