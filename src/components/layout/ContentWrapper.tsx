import React, { ReactNode } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type ContentWrapperProps = {
  children: ReactNode;
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  background-blend-mode: darken;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border: ${({ theme }) =>
    `${theme.borders.thin} ${theme.colors.primaryBorder}`};

  ${breakpoint('md')`
     padding: 4rem 3rem;
  `};

  ${breakpoint('xl')`
    width: 62rem;
    margin-top: -6rem;
    margin-bottom:10rem;
    padding: 6rem 9rem;
  `};

  ${breakpoint('xxl')`
    width: 70rem;
    padding: 9rem 12rem;
  `};
`;

export const ContentRenderer = ({ children }: ContentWrapperProps) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
