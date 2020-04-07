import React from 'react';
import MasterLayout from '../components/master-layout';
import IntroSection from '../components/intro-section';
import ContentLayout from '../components/content-layout';
import {Link} from 'gatsby';

const FormSubmissionSuccess = () => {

    return(

        <MasterLayout>
        <IntroSection/>
        <ContentLayout minHeight="40rem">
            <div>
                <h1>Thankyou for getting in touch!</h1>
                <p>Hi there. I appreciate you contacting me. I will get back in touch with you soon!</p>
                <p>Have a great day!</p>
                <Link to = "/">Back to Site</Link>
            </div>
        </ContentLayout>
        </MasterLayout>
    )
}

export default FormSubmissionSuccess;