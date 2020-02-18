import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <MasterLayout>
      <IntroSection>Thankyou for stepping by to know me</IntroSection>

      <ContentLayout>
      <div>
        <h1>About Me</h1>
        <p>
          Hello. I'm Ajeet Chaulagain, full stack developer born in Nepal and
          currently living in Melbourne. As a IT graduate with the
          specialization in software development, I have been working with
          various tools and technologies for past few year. Currently, I am
          working on full stack javascript development with React, Node, Express
          and Mongo. <Link to="/contact">Contact Me</Link> for a project.
        </p>
        <p>
          Hello. I'm Ajeet Chaulagain, full stack developer born in Nepal and
          currently living in Melbourne. As a IT graduate with the <Link to="/contact">Contact Me</Link> for a project.
          specialization in software development, I have been working with
          various tools and technologies for past few year. Currently, I am
          working on full stack javascript development with React, Node, Express
          and Mongo
        </p>
        <p>
          Hello. I'm Ajeet Chaulagain, full stack developer born in Nepal and
          currently living in Melbourne. As a IT graduate with the
          specialization in software development, I have been working with
          various tools and technologies for past few year. Currently, I am
          working on full stack javascript development with React, Node, Express
          and Mongo Hello. I'm Ajeet Chaulagain, full stack developer born in
          Nepal and currently living in Melbourne. As a IT graduate with the
          specialization in software development, I have been working with
          various tools and technologies for past few year. Currently, I am
          working on full stack javascript development with React, Node, Express
          and Mongo
        </p>
      </div>
      </ContentLayout>
    </MasterLayout>
  )
}

export default AboutPage
