import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../Footer';
import { Header } from '../header';

type MasterLayoutProps = {
  children?: ReactNode;
};

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '3rem',
  },
  fontSize: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1rem',
    h5: '1rem',
    h6: '1rem',
    p: '1rem',
  },
  headingFontFamily: `"Roboto", sans-serif`,
  headingFontColor: '#333',
  headerFontColor: 'white',
};

const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MasterLayout;
