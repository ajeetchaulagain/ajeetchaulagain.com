import React from 'react';
import { MasterLayout, ContentLayout } from '../components/layout';
import { IntroSection } from '../components/intro-section/IntroSection';
import { Link } from 'gatsby';
import { NewsLetter } from '../components/newsletter/NewsLetter';

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
