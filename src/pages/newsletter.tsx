import React from 'react';
import { Link } from 'gatsby';
import { MasterLayout, ContentLayout, NewsLetter, SEO } from 'components';
import { HeroBlank } from 'components/hero-blank/HeroBlank';

const NewsLetterPage = () => {
  return (
    <MasterLayout>
      <SEO title="Newsletter" description="Subscribe to my newsletter" />
      <HeroBlank />
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
