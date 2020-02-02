import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Action from '../components/callltoaction'

const IndexPage = () => {

    return (
        <Layout>
            <h1>Hello there.</h1>
            <p>I am software engineer passionate about developing android and web applications.</p>
            <p>Currently, I am working on <strong>full stack javascript development </strong>with react, mongo, node and express.</p>

            <Action title="Say Hello to me" desc=" Need a developer for your project." url="contact" />
               
            
        </Layout>
    )
}

export default IndexPage
