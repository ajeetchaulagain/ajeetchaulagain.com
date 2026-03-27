import React from 'react';
import { ColorSwatch } from './ColorSwatch';
import { SwatchGrid, ThemeLabel, ThemeSection } from './styles';

export type SwatchData = {
  token: string;
  hex: string;
  label: string;
};

type ColorGridProps = {
  title: string;
  swatches: SwatchData[];
};

export const ColorGrid = ({ title, swatches }: ColorGridProps) => {
  return (
    <ThemeSection>
      <ThemeLabel>{title}</ThemeLabel>
      <SwatchGrid>
        {swatches.map(({ token, hex, label }) => (
          <ColorSwatch key={token} token={token} hex={hex} label={label} />
        ))}
      </SwatchGrid>
    </ThemeSection>
  );
};
