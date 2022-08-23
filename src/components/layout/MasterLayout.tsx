import React, { ReactNode } from 'react';

import { Header } from '../header';
import Footer from '../footer/Footer';

type MasterLayoutProps = {
  children?: ReactNode;
};

export const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MasterLayout;
