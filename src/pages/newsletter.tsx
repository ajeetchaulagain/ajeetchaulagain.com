import React from 'react';
import { ContentRenderer, MasterLayout, NewsLetter, SEO } from 'components';
import { HeroBlank } from 'components/hero-blank/HeroBlank';
import Link from 'components/link/Link';

const NewsLetterPage = () => {
  return (
    <MasterLayout>
      <SEO title="Newsletter" description="Subscribe to my newsletter" />
      <HeroBlank />
      <ContentRenderer>
        <div>
          <NewsLetter />
        </div>
        <br />
        <p>
          <Link to="/">Go back to Home</Link>
        </p>
      </ContentRenderer>
    </MasterLayout>
  );
};

export default NewsLetterPage;
