import React from 'react';
import { Link } from 'gatsby';

import {
  MasterLayout,
  ContentLayout,
  IntroSection,
  NewsLetter,
  SEO,
} from 'components';

const NewsLetterPage = () => {
  return (
    <MasterLayout>
      <SEO title="Newsletter" description="Subscribe to my newsletter" />
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
