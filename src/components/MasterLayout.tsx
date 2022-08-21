import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

type MasterLayoutProps = {
  children?: ReactNode;
};
const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MasterLayout;
