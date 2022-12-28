import React, { ReactNode } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

type ContentWrapperProps = {
  children: ReactNode;
};

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.whiteCream};
  background-blend-mode: darken;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.borders.thin} #ebe9e9;

  ${breakpoint('md')`
     padding: 4rem 3rem;
  `}

  ${breakpoint('xl')`
    width: 992px;
    margin-top: -6rem;
    margin-bottom:10rem;
    padding: 6rem 9rem;
  `}

  ${breakpoint('xxl')`
    width: 1120px;
    padding: 9rem 12rem;
  `}
`;

export const ContentRenderer = ({ children }: ContentWrapperProps) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
