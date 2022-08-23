import React from 'react';
import { MasterLayout, ContentLayout } from '../components/layout';
import IntroSection from '../components/IntroSection';
import { Link } from 'gatsby';

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
