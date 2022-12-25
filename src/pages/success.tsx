import React from 'react';
import { Link } from 'gatsby';

import { MasterLayout, ContentLayout, IntroSection, SEO } from 'components';

const FormSubmissionSuccess = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout minHeight="40rem">
        <div>
          <h1>Thankyou for getting in touch!</h1>
          <p>
            Hi there. I appreciate you contacting me. I will get back in touch
            with you soon!
          </p>
          <p>Have a great day!</p>
          <Link to="/">Back to Site</Link>
        </div>
      </ContentLayout>
    </MasterLayout>
  );
};

export default FormSubmissionSuccess;

export const Head = () => {
  return <SEO title="Thankyou for contacting me" />;
};
