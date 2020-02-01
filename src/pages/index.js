import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {

    return (
        <Layout>
            <h1>Hello there.</h1>
            <h2>I am software engineer passionate about developing android and web applications. </h2>
            <p>Have a project idea? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default IndexPage
