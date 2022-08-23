import React from 'react';

import { Link } from 'gatsby';

import { MasterLayout, ContentLayout } from '../components/layout';
import IntroSection from '../components/IntroSection';

const DefaultNotFound = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <div>
          <h1>Page not found</h1>
          <p>
            Oops!. The page you are requesting doesn't exist. Sorry for the
            inconvenice.
          </p>
          <Link to="/">Go Home</Link>
        </div>
      </ContentLayout>
    </MasterLayout>
  );
};

export default DefaultNotFound;
