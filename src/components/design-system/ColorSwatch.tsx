import React from 'react';
import {
  SwatchCard,
  SwatchColor,
  HexBadge,
  SwatchMeta,
  TokenName,
  HexValue,
  PurposeLabel,
} from './styles';

type ColorSwatchProps = {
  token: string;
  hex: string;
  label: string;
};

export const ColorSwatch = ({ token, hex, label }: ColorSwatchProps) => {
  return (
    <SwatchCard>
      <SwatchColor color={hex}>
        <HexBadge>{hex}</HexBadge>
      </SwatchColor>
      <SwatchMeta>
        <TokenName>{token}</TokenName>
        <HexValue>{hex}</HexValue>
        <PurposeLabel>{label}</PurposeLabel>
      </SwatchMeta>
    </SwatchCard>
  );
};
