import React from 'react';
import MasterLayout from '../components/MasterLayout';
import ContentLayout from '../components/ContentLayout';
import IntroSection from '../components/IntroSection';
import { Link } from 'gatsby';
import NewsLetter from '../components/NewsLetter';

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
