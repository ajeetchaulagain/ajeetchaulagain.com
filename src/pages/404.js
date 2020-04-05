import React from 'react';

import {Link} from 'gatsby';

import MasterLayout from '../components/master-layout';
import IntroSection from '../components/intro-section';
import ContentLayout from '../components/content-layout';

const DefaultNotFound = () =>{

    return (
        <MasterLayout>
            <IntroSection/>
            <ContentLayout>
                <div>
                    <h1>Page not found</h1>
                    <p>Oops!. The page you are requesting doesn't exist</p>
                    <Link to="/">Go Home</Link>
                </div>
            </ContentLayout>
        </MasterLayout>

    );
}

export default DefaultNotFound;