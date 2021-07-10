import React from 'react';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import Resume from '../components/Resume';

const ResumePage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1>Resume</h1>
        <Resume />
      </ContentLayout>
    </MasterLayout>
  );
};

export default ResumePage;
