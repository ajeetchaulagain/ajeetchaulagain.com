import React from 'react';
import { MasterLayout, HeroBlank, ContentRenderer, Link } from 'components';

const DefaultNotFound = () => {
  return (
    <MasterLayout>
      <HeroBlank />
      <ContentRenderer>
        <div>
          <h1>Page not found</h1>
          <p>
            Oops!. The page you are requesting doesn't exist. Sorry for the
            inconvenice.
          </p>
          <Link to="/">Go Home</Link>
        </div>
      </ContentRenderer>
    </MasterLayout>
  );
};

export default DefaultNotFound;
