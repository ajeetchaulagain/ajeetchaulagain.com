// Create and export the react component

import React from 'react'
import MasterLayout from '../components/master-layout'
import IntroSection from '../components/intro-section'
import ContentLayout from '../components/content-layout'

const Project = () => {
    return (
        <MasterLayout>
            <IntroSection>
                Some of my projects
            </IntroSection>
            <ContentLayout>
                This is blog template
            </ContentLayout>
        </MasterLayout>
        
    )
}

export default Project