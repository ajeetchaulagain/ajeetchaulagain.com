import styled from 'styled-components';
import { mt, mb, px, py, pt, pb } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';

// ── Hero ───────────────────────────────────────────────────────────────────────

export const HeroContainer = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.heroBackground};
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${px(4)};
  ${pt(8)};
  ${pb(4)};

  ${breakpoint('xl')`
    width: 62rem;
    margin: 0 auto;
    ${pt(8)};
    ${pb(12)};
  `}

  ${breakpoint('xxl')`
    width: 70rem;
  `}
`;

export const HeroEyebrow = styled.span`
  display: block;
  font-family: 'Fira Code', monospace;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.primaryText};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.75;
  ${mb(3)};
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primaryHeading};
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeights[7]};
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: ${({ theme }) => theme.lineHeights.extraCondensed};
  ${mb(4)};

  ${breakpoint('xl')`
    font-size: 4rem;
  `}
`;

export const HeroDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: ${({ theme }) => theme.lineHeights.condensed};
  max-width: 38rem;
  ${mb(6)};
`;

export const HeroTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const HeroTag = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.primaryText};
  background: rgba(128, 128, 128, 0.15);
  border: 1px solid rgba(128, 128, 128, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 0.25rem 0.625rem;
`;

// ── Section headers ────────────────────────────────────────────────────────────

export const SectionHeaderWrapper = styled.div`
  ${mt(2)};
  ${mb(6)};
`;

export const SectionNumber = styled.span`
  display: block;
  font-family: 'Fira Code', monospace;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.brandPrimary};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${mb(2)};
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primaryHeading};
  font-size: ${({ theme }) => theme.headingFontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: ${({ theme }) => theme.lineHeights.extraCondensed};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 2.5rem;
    background: ${({ theme }) => theme.colors.brandPrimary};
    ${mt(3)};
  }
`;

export const SectionDivider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${mt(9)};
  ${mb(8)};
`;

export const SubSectionHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  color: ${({ theme }) => theme.colors.primaryText};
  ${mt(7)};
  ${mb(3)};
`;

export const LeadParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  color: ${({ theme }) => theme.colors.tocText};
  line-height: ${({ theme }) => theme.lineHeights.regular};
  max-width: 44rem;
  ${mb(6)};
`;

export const ThemeLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  color: ${({ theme }) => theme.colors.tocText};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  ${mb(3)};
`;

export const ThemeSection = styled.div`
  ${mb(7)};
`;

// ── Color swatches ─────────────────────────────────────────────────────────────

export const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  ${mt(4)};

  ${breakpoint('md')`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const SwatchCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 0.375rem;
  overflow: hidden;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const SwatchColor = styled.div<{ color: string }>`
  height: 120px;
  background-color: ${({ color }) => color};
  position: relative;
`;

export const HexBadge = styled.span`
  position: absolute;
  bottom: 0.625rem;
  left: 0.625rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 99px;
  padding: 0.2rem 0.5rem;
  letter-spacing: 0.04em;
  pointer-events: none;
`;

export const SwatchMeta = styled.div`
  padding: 0.75rem 0.875rem 0.875rem;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

export const TokenName = styled.code`
  display: block;
  font-family: 'Fira Code', monospace;
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.primaryText};
  word-break: break-all;
  line-height: 1.4;
  font-weight: 500;
`;

export const HexValue = styled.span`
  display: block;
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.brandPrimary};
  ${mt(1)};
`;

export const PurposeLabel = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.tocText};
  ${mt(1)};
  line-height: 1.4;
`;

// ── Typography specimens ───────────────────────────────────────────────────────

export const SpecimenRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};

  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`;

export const SpecimenMeta = styled.div`
  flex-shrink: 0;
  text-align: right;
  font-family: 'Fira Code', monospace;
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.tocText};
  line-height: 1.7;
`;

export const FontScaleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  ${mt(3)};

  ${breakpoint('md')`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const FontScaleItem = styled.div`
  padding: 1rem 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};

  &:nth-child(2n) {
    border-right: none;
  }

  ${breakpoint('md')`
    &:nth-child(2n) {
      border-right: 1px solid ${({ theme }: { theme: { colors: { cardBorder: string } } }) => theme.colors.cardBorder};
    }
    &:nth-child(3n) {
      border-right: none;
    }
  `}
`;

export const FontScaleExample = styled.span<{ size: string }>`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.3;
`;

export const FontScaleMeta = styled.span`
  display: block;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.brandPrimary};
  ${mt(2)};
`;

// ── Spacing ────────────────────────────────────────────────────────────────────

export const SpacingTable = styled.div`
  ${mt(3)};
`;

export const SpacingRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.5rem 5rem 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.625rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`;

export const SpacingKey = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.brandPrimary};
`;

export const SpacingValue = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.tocText};
`;

export const SpacingBar = styled.div<{ ratio: number }>`
  height: 0.75rem;
  width: ${({ ratio }) => `${ratio * 100}%`};
  min-width: ${({ ratio }) => (ratio > 0 ? '4px' : '0')};
  background: ${({ theme }) => theme.colors.brandPrimary};
  border-radius: 0 ${({ theme }) => theme.borderRadius.base}
    ${({ theme }) => theme.borderRadius.base} 0;
  opacity: 0.5;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

// ── Breakpoints ────────────────────────────────────────────────────────────────

export const BreakpointTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
  ${mt(3)};

  && tr {
    background: transparent;
    border: none;
  }

  && th {
    text-align: left;
    padding: 0.625rem 0.875rem;
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    font-family: ${({ theme }) => theme.fonts.secondaryHeading};
    color: ${({ theme }) => theme.colors.primaryText};
    text-transform: uppercase;
    letter-spacing: 0.07em;
    background: ${({ theme }) => theme.colors.quaternaryBackground};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  }

  && td {
    text-align: left;
    padding: 0.7rem 0.875rem;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.primaryText};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }

  && tr:last-child td {
    border-bottom: none;
  }

  && tbody tr:nth-child(even) td {
    background: ${({ theme }) => theme.colors.secondaryBackground};
  }

  && td:first-child {
    font-family: 'Fira Code', monospace;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.brandPrimary};
  }

  && td:nth-child(2) {
    font-family: 'Fira Code', monospace;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

// ── Components ─────────────────────────────────────────────────────────────────

export const ComponentShowcase = styled.div`
  ${mt(4)};
`;

export const ComponentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.875rem;
  ${mt(2)};
  ${mb(5)};
`;

export const ComponentLabel = styled.p`
  font-family: 'Fira Code', monospace;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.tocText};
  ${mb(2)};
`;

export const DarkSurface = styled.div`
  background: ${({ theme }) => theme.colors.quaternaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  ${px(5)};
  ${py(4)};
  ${mt(2)};
  ${mb(5)};

  ${ComponentRow} {
    margin-bottom: 0;
  }
`;

// ── Code block ─────────────────────────────────────────────────────────────────

export const CodeSnippet = styled.pre`
  ${mt(3)};
  ${mb(6)};
`;
