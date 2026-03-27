import React from 'react';
import {
  MasterLayout,
  ContentRenderer,
  SEO,
  Paragraph,
  ButtonLink,
  Tag,
  TableOfContents,
} from 'components';
import { lightThemeColor, darkThemeColor } from 'components/theme/colors';
import { lightBrand, darkBrand } from 'components/theme/brand';
import { ColorGrid, SwatchData } from '../components/design-system/ColorGrid';
import { SectionHeader } from '../components/design-system/SectionHeader';
import { CodeBlock } from '../components/design-system/CodeBlock';
import {
  HeroContainer,
  HeroInner,
  HeroEyebrow,
  HeroTitle,
  HeroDescription,
  HeroTagList,
  HeroTag,
  SectionDivider,
  SubSectionHeading,
  LeadParagraph,
  SpecimenRow,
  SpecimenMeta,
  FontScaleGrid,
  FontScaleItem,
  FontScaleExample,
  FontScaleMeta,
  SpacingTable,
  SpacingRowWrapper,
  SpacingKey,
  SpacingValue,
  SpacingBar,
  BreakpointTable,
  ComponentShowcase,
  ComponentRow,
  ComponentLabel,
  DarkSurface,
} from '../components/design-system/styles';
import { Heading } from '../components/heading/Heading';

// ─── Color data ───────────────────────────────────────────────────────────────

const lightBrandSwatches: SwatchData[] = [
  { token: 'base', hex: lightBrand.base, label: 'Hero / header / footer bg' },
  { token: 'accent', hex: lightBrand.accent, label: 'Links, accents, nav hover' },
  { token: 'heroText', hex: lightBrand.heroText, label: 'Headings on brand bg' },
  { token: 'heroParagraph', hex: lightBrand.heroParagraph, label: 'Body on brand bg' },
];

const darkBrandSwatches: SwatchData[] = [
  { token: 'base', hex: darkBrand.base, label: 'Hero / header / footer bg' },
  { token: 'accent', hex: darkBrand.accent, label: 'Links, hovers, borders' },
  { token: 'heroText', hex: darkBrand.heroText, label: 'Headings on brand bg' },
  { token: 'heroParagraph', hex: darkBrand.heroParagraph, label: 'Body on brand bg' },
];

const lightBackgrounds: SwatchData[] = [
  { token: 'primaryBackground', hex: lightThemeColor.primaryBackground, label: 'Page background' },
  { token: 'secondaryBackground', hex: lightThemeColor.secondaryBackground, label: 'Section / card fill' },
  { token: 'tertiaryBackground', hex: lightThemeColor.tertiaryBackground, label: 'Code title bar' },
  { token: 'quaternaryBackground', hex: lightThemeColor.quaternaryBackground, label: 'Hover states' },
];

const lightText: SwatchData[] = [
  { token: 'primaryText', hex: lightThemeColor.primaryText, label: 'Body text' },
  { token: 'tocText', hex: lightThemeColor.tocText, label: 'Muted / secondary text' },
  { token: 'heroText', hex: lightThemeColor.heroText, label: 'Heading on hero' },
  { token: 'heroParagraph', hex: lightThemeColor.heroParagraph, label: 'Body on hero' },
];

const lightBrandTokens: SwatchData[] = [
  { token: 'brandPrimary', hex: lightThemeColor.brandPrimary, label: 'Links, primary CTA' },
  { token: 'heroBackground', hex: lightThemeColor.heroBackground, label: 'Hero area background' },
  { token: 'codeHighlightBackground', hex: lightThemeColor.codeHighlightBackground, label: 'Highlighted line fill' },
  { token: 'codeHighlightBorderColor', hex: lightThemeColor.codeHighlightBorderColor, label: 'Highlight left border' },
];

const lightBorders: SwatchData[] = [
  { token: 'primaryBorder', hex: lightThemeColor.primaryBorder, label: 'Default border' },
  { token: 'cardBorder', hex: lightThemeColor.cardBorder, label: 'Card / code block border' },
  { token: 'secondaryBorder', hex: lightThemeColor.secondaryBorder, label: 'Accent border' },
];

const darkBackgrounds: SwatchData[] = [
  { token: 'primaryBackground', hex: darkThemeColor.primaryBackground, label: 'Page background' },
  { token: 'secondaryBackground', hex: darkThemeColor.secondaryBackground, label: 'Section / card fill' },
  { token: 'tertiaryBackground', hex: darkThemeColor.tertiaryBackground, label: 'Code title bar' },
  { token: 'quaternaryBackground', hex: darkThemeColor.quaternaryBackground, label: 'Hover states' },
];

const darkText: SwatchData[] = [
  { token: 'primaryText', hex: darkThemeColor.primaryText, label: 'Body text' },
  { token: 'tocText', hex: darkThemeColor.tocText, label: 'Muted / secondary text' },
  { token: 'heroText', hex: darkThemeColor.heroText, label: 'Heading on hero' },
  { token: 'heroParagraph', hex: darkThemeColor.heroParagraph, label: 'Body on hero' },
];

const darkBrandTokens: SwatchData[] = [
  { token: 'brandPrimary', hex: darkThemeColor.brandPrimary, label: 'Links, primary CTA' },
  { token: 'heroBackground', hex: darkThemeColor.heroBackground, label: 'Hero area background' },
  { token: 'codeHighlightBackground', hex: darkThemeColor.codeHighlightBackground, label: 'Highlighted line fill' },
  { token: 'codeHighlightBorderColor', hex: darkThemeColor.codeHighlightBorderColor, label: 'Highlight left border' },
];

const darkBorders: SwatchData[] = [
  { token: 'primaryBorder', hex: darkThemeColor.primaryBorder, label: 'Default border' },
  { token: 'cardBorder', hex: darkThemeColor.cardBorder, label: 'Card / code block border' },
  { token: 'secondaryBorder', hex: darkThemeColor.secondaryBorder, label: 'Accent border' },
];

// ─── Spacing / breakpoint data ────────────────────────────────────────────────

const spacingScale = [
  { key: 0, value: '0' },
  { key: 1, value: '0.25rem' },
  { key: 2, value: '0.5rem' },
  { key: 3, value: '0.75rem' },
  { key: 4, value: '1rem' },
  { key: 5, value: '1.5rem' },
  { key: 6, value: '2rem' },
  { key: 7, value: '2.5rem' },
  { key: 8, value: '3rem' },
  { key: 9, value: '4rem' },
  { key: 10, value: '5rem' },
];

const breakpointRows = [
  { name: 'xs', px: 0, description: 'Mobile — default' },
  { name: 'xsm', px: 370, description: 'Small mobile' },
  { name: 'sm', px: 480, description: '' },
  { name: 'md', px: 640, description: 'Tablet start' },
  { name: 'lg', px: 800, description: 'Tablet end / desktop start' },
  { name: 'xl', px: 992, description: 'Content becomes card (62rem wide)' },
  { name: 'xxl', px: 1120, description: 'Content widens to 70rem' },
  { name: 'xxxl', px: 1200, description: 'Large desktop' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const DesignSystemPage = () => {
  return (
    <MasterLayout>
      <SEO
        title="Design System"
        description="Visual reference for the design tokens, typography, spacing, and components used on this site."
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <HeroContainer>
        <HeroInner>
          <HeroEyebrow>ajeetchaulagain.com</HeroEyebrow>
          <HeroTitle>Design System</HeroTitle>
          <HeroDescription>
            The visual language of this site — a living reference for colors,
            typography, spacing, breakpoints, and components.
          </HeroDescription>
          <HeroTagList>
            {['Colors', 'Typography', 'Spacing', 'Breakpoints', 'Components', 'Styling Guide'].map(
              (label) => (
                <HeroTag key={label}>{label}</HeroTag>
              )
            )}
          </HeroTagList>
        </HeroInner>
      </HeroContainer>

      <ContentRenderer>
        <TableOfContents />

        {/* ── 01 Brand Colors ───────────────────────────────────────── */}
        <SectionHeader num="01" title="Brand Colors" id="brand-colors" />
        <LeadParagraph>
          Four source-of-truth values per theme in{' '}
          <code>src/components/theme/brand.ts</code>. Edit only these to shift
          the entire site's look.
        </LeadParagraph>

        <ColorGrid title="Light theme" swatches={lightBrandSwatches} />
        <ColorGrid title="Dark theme" swatches={darkBrandSwatches} />

        {/* ── 02 Color Tokens ───────────────────────────────────────── */}
        <SectionDivider />
        <SectionHeader num="02" title="Color Tokens" id="color-tokens" />
        <LeadParagraph>
          All <code>theme.colors</code> tokens derived from brand values. Access
          via{' '}
          <code>{'${({ theme }) => theme.colors.tokenName}'}</code>.
        </LeadParagraph>

        <SubSectionHeading id="light-theme">Light theme</SubSectionHeading>
        <ColorGrid title="Backgrounds" swatches={lightBackgrounds} />
        <ColorGrid title="Text" swatches={lightText} />
        <ColorGrid title="Brand & Accents" swatches={lightBrandTokens} />
        <ColorGrid title="Borders" swatches={lightBorders} />

        <SubSectionHeading id="dark-theme">Dark theme</SubSectionHeading>
        <ColorGrid title="Backgrounds" swatches={darkBackgrounds} />
        <ColorGrid title="Text" swatches={darkText} />
        <ColorGrid title="Brand & Accents" swatches={darkBrandTokens} />
        <ColorGrid title="Borders" swatches={darkBorders} />

        {/* ── 03 Typography ─────────────────────────────────────────── */}
        <SectionDivider />
        <SectionHeader num="03" title="Typography" id="typography" />
        <LeadParagraph>
          Three typefaces — Domine (serif) for primary headings, Roboto for
          secondary headings, Source Sans Pro for body text, and Fira Code for
          monospace.
        </LeadParagraph>

        <SubSectionHeading id="heading-serif">Heading scale — Serif (Domine)</SubSectionHeading>
        <SpecimenRow>
          <Heading level="h1" size="xlarge" type="serif">
            The craft of clear thinking
          </Heading>
          <SpecimenMeta>
            xlarge · 2.1rem
            <br />
            weight 900
          </SpecimenMeta>
        </SpecimenRow>
        <SpecimenRow>
          <Heading level="h2" size="large" type="serif">
            Engineering simplicity
          </Heading>
          <SpecimenMeta>
            large · 1.8rem
            <br />
            weight 600
          </SpecimenMeta>
        </SpecimenRow>
        <SpecimenRow>
          <Heading level="h3" size="medium" type="serif">
            Notes from the stack
          </Heading>
          <SpecimenMeta>
            medium · 1.5rem
            <br />
            weight 600
          </SpecimenMeta>
        </SpecimenRow>
        <SpecimenRow>
          <Heading level="h4" size="small" type="serif">
            Shipping ideas, one commit at a time
          </Heading>
          <SpecimenMeta>
            small · 1.2rem
            <br />
            weight 500
          </SpecimenMeta>
        </SpecimenRow>

        <SubSectionHeading id="heading-sans">Heading scale — Sans-serif (Roboto)</SubSectionHeading>
        <SpecimenRow>
          <Heading level="h2" size="xlarge" type="sans-serif">
            The craft of clear thinking
          </Heading>
          <SpecimenMeta>
            xlarge · 2.1rem
            <br />
            weight 600
          </SpecimenMeta>
        </SpecimenRow>
        <SpecimenRow>
          <Heading level="h2" size="large" type="sans-serif">
            Engineering simplicity
          </Heading>
          <SpecimenMeta>
            large · 1.8rem
            <br />
            weight 600
          </SpecimenMeta>
        </SpecimenRow>
        <SpecimenRow>
          <Heading level="h3" size="medium" type="sans-serif">
            Notes from the stack
          </Heading>
          <SpecimenMeta>
            medium · 1.5rem
            <br />
            weight 600
          </SpecimenMeta>
        </SpecimenRow>

        <SubSectionHeading id="body-text">Body text (Source Sans Pro)</SubSectionHeading>
        <Paragraph>
          The quick brown fox jumps over the lazy dog. Body text uses Source
          Sans Pro at 1.125rem (xmedium) with a line height of 1.8 for
          comfortable reading on long-form content. Paragraphs carry a bottom
          margin of 1.5rem.
        </Paragraph>

        <SubSectionHeading id="font-sizes">Font size scale</SubSectionHeading>
        <FontScaleGrid>
          {[
            { key: 'xsmall', value: '0.975rem' },
            { key: 'small', value: '1.05rem' },
            { key: 'xmedium', value: '1.125rem' },
            { key: 'medium', value: '1.2rem' },
            { key: 'large', value: '1.3rem' },
            { key: 'xlarge', value: '1.4rem' },
          ].map(({ key, value }) => (
            <FontScaleItem key={key}>
              <FontScaleExample size={value}>
                The quick brown fox
              </FontScaleExample>
              <FontScaleMeta>
                {key} · {value}
              </FontScaleMeta>
            </FontScaleItem>
          ))}
        </FontScaleGrid>

        {/* ── 04 Spacing ────────────────────────────────────────────── */}
        <SectionDivider />
        <SectionHeader num="04" title="Spacing" id="spacing" />
        <LeadParagraph>
          Spacing utilities from <code>styled-components-spacing</code>. Use{' '}
          <code>mt(n)</code>, <code>mb(n)</code>, <code>p(n)</code>,{' '}
          <code>px(n)</code> etc. with keys 0–10.
        </LeadParagraph>

        <SpacingTable>
          {spacingScale.map(({ key, value }) => (
            <SpacingRowWrapper key={key}>
              <SpacingKey>{key}</SpacingKey>
              <SpacingValue>{value}</SpacingValue>
              <SpacingBar ratio={key / 10} />
            </SpacingRowWrapper>
          ))}
        </SpacingTable>

        {/* ── 05 Breakpoints ────────────────────────────────────────── */}
        <SectionDivider />
        <SectionHeader num="05" title="Breakpoints" id="breakpoints" />
        <LeadParagraph>
          All breakpoints available via{' '}
          <code>styled-components-breakpoint</code>. Use{' '}
          <code>{'breakpoint(\'lg\')'}</code> for min-width or{' '}
          <code>{'breakpoint(\'xs\', \'lg\')'}</code> for a range.
        </LeadParagraph>

        <BreakpointTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>px</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {breakpointRows.map(({ name, px, description }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{px}</td>
                <td>{description}</td>
              </tr>
            ))}
          </tbody>
        </BreakpointTable>

        {/* ── 06 Components ─────────────────────────────────────────── */}
        <SectionDivider />
        <SectionHeader num="06" title="Components" id="components" />

        <SubSectionHeading id="button-link">ButtonLink</SubSectionHeading>
        <LeadParagraph>
          Props: <code>variant</code> (text · contained · outlined) ·{' '}
          <code>color</code> (primary · secondary) ·{' '}
          <code>size</code> (small · medium · large)
        </LeadParagraph>

        <ComponentShowcase>
          <ComponentLabel>variant="contained"</ComponentLabel>
          <ComponentRow>
            <ButtonLink to="#" text="Primary" variant="contained" color="primary" size="large" />
            <ButtonLink to="#" text="Secondary" variant="contained" color="secondary" size="large" />
            <ButtonLink to="#" text="Medium" variant="contained" color="primary" size="medium" />
            <ButtonLink to="#" text="Small" variant="contained" color="primary" size="small" />
          </ComponentRow>

          <ComponentLabel>variant="outlined"</ComponentLabel>
          <ComponentRow>
            <ButtonLink to="#" text="Primary" variant="outlined" color="primary" size="large" />
            <ButtonLink to="#" text="Secondary" variant="outlined" color="secondary" size="large" />
            <ButtonLink to="#" text="Medium" variant="outlined" color="primary" size="medium" />
            <ButtonLink to="#" text="Small" variant="outlined" color="primary" size="small" />
          </ComponentRow>

          <ComponentLabel>variant="text"</ComponentLabel>
          <ComponentRow>
            <ButtonLink to="#" text="Primary →" variant="text" color="primary" size="large" />
            <ButtonLink to="#" text="Secondary →" variant="text" color="secondary" size="large" />
            <ButtonLink to="#" text="Medium →" variant="text" color="primary" size="medium" />
            <ButtonLink to="#" text="Small →" variant="text" color="primary" size="small" />
          </ComponentRow>

          <ComponentLabel>on muted background</ComponentLabel>
          <DarkSurface>
            <ComponentRow>
              <ButtonLink to="#" text="Contained" variant="contained" color="primary" size="large" />
              <ButtonLink to="#" text="Outlined" variant="outlined" color="primary" size="large" />
              <ButtonLink to="#" text="Text →" variant="text" color="primary" size="large" />
            </ComponentRow>
          </DarkSurface>
        </ComponentShowcase>

        <SubSectionHeading id="tag">Tag</SubSectionHeading>
        <LeadParagraph>
          Props: <code>type</code> (light · dark) · <code>size</code> (small · medium)
        </LeadParagraph>

        <ComponentShowcase>
          <ComponentLabel>type="light"</ComponentLabel>
          <ComponentRow>
            <Tag type="light" size="small">javascript</Tag>
            <Tag type="light" size="small">typescript</Tag>
            <Tag type="light" size="small">react</Tag>
            <Tag type="light" size="medium">medium size</Tag>
          </ComponentRow>

          <ComponentLabel>type="dark"</ComponentLabel>
          <ComponentRow>
            <Tag type="dark" size="small">javascript</Tag>
            <Tag type="dark" size="small">typescript</Tag>
            <Tag type="dark" size="small">react</Tag>
            <Tag type="dark" size="medium">medium size</Tag>
          </ComponentRow>
        </ComponentShowcase>

        {/* ── 07 Styling Guide ──────────────────────────────────────── */}
        <SectionDivider />
        <SectionHeader num="07" title="Styling Guide" id="styling-guide" />
        <LeadParagraph>
          Quick-reference patterns for working with the design system in this
          codebase.
        </LeadParagraph>

        <SubSectionHeading id="theme-tokens">Accessing theme tokens</SubSectionHeading>
        <CodeBlock code={`import styled from 'styled-components';

const Card = styled.div\`
  color: \${({ theme }) => theme.colors.primaryText};
  font-size: \${({ theme }) => theme.fontSizes.medium};
  font-family: \${({ theme }) => theme.fonts.body};
  border-radius: \${({ theme }) => theme.borderRadius.base};
  font-weight: \${({ theme }) => theme.fontWeights[5]}; // 500
  border: \${({ theme }) => theme.borders.thin}
    \${({ theme }) => theme.colors.cardBorder};
\`;`} />

        <SubSectionHeading id="spacing-utilities">Spacing utilities</SubSectionHeading>
        <CodeBlock code={`import { mt, mb, p, px, py, mr, ml } from 'styled-components-spacing';

const Section = styled.div\`
  \${p(5)};      // padding: 1.5rem (all sides)
  \${px(4)};     // padding-left + padding-right: 1rem
  \${mt(6)};     // margin-top: 2rem
  \${mb(3)};     // margin-bottom: 0.75rem
\`;`} />

        <SubSectionHeading id="responsive-breakpoints">Responsive breakpoints</SubSectionHeading>
        <CodeBlock code={`import breakpoint from 'styled-components-breakpoint';

const Box = styled.div\`
  font-size: 1rem;

  // min-width: 800px and above
  \${breakpoint('lg')\`
    font-size: 1.25rem;
  \`}

  // between xs (0) and lg (800px)
  \${breakpoint('xs', 'lg')\`
    padding: 1rem;
  \`}
\`;`} />

        <SubSectionHeading id="conditional-theming">Conditional theming</SubSectionHeading>
        <CodeBlock code={`const El = styled.div\`
  color: \${({ theme }) =>
    theme.name === 'lightTheme'
      ? theme.colors.secondaryText
      : theme.colors.primaryText};
\`;`} />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default DesignSystemPage;
