import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import { FaSmile } from "react-icons/fa"
import ContentLayout from "../components/content-layout"

const ContactPage = () => {
  return (
    <MasterLayout>
      <IntroSection>
        Say a friendly hello to me <FaSmile />
      </IntroSection>
      <ContentLayout>
        <h1>About Me</h1>
        <p>
          Hello. I'm Ajeet Chaulagain, full stack developer born in Nepal and
          currently living in Melbourne. As a IT graduate with the
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
      </ContentLayout>
    </MasterLayout>
  )
}

export default ContactPage
