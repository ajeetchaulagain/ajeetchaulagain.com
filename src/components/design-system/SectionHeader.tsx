import React from 'react';
import { SectionHeaderWrapper, SectionNumber, SectionTitle } from './styles';

type SectionHeaderProps = {
  num: string;
  title: string;
  id: string;
};

export const SectionHeader = ({ num, title, id }: SectionHeaderProps) => {
  return (
    <SectionHeaderWrapper>
      <SectionNumber>{num}</SectionNumber>
      <SectionTitle id={id}>{title}</SectionTitle>
    </SectionHeaderWrapper>
  );
};
