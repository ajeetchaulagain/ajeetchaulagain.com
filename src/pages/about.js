import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
            <Layout>
            <h1>About Me</h1>
            <p>I am software engineer passionate about developing android applications lorem </p>
            <p>lorem</p>
            <p>Have a project idea? <Link to="/contact">Contact Me</Link></p> 
            </Layout>
    )
}

export default AboutPage