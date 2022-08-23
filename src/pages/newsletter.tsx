import React from 'react';
import { Link } from 'gatsby';

import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  NewsLetter,
} from 'components';

const NewsLetterPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <div>
          <NewsLetter />
        </div>
        <br />
        <p>
          <Link to="/">Go back to Home</Link>
        </p>
      </ContentLayout>
    </MasterLayout>
  );
};

export default NewsLetterPage;
