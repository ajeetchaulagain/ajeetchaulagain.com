import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import image from '../images/ajeet.jpeg'

const AboutPage = () => {
    return (
            <Layout>
            <img src={image}/>
            <h1>About Me</h1>
            <p>I am software engineer passionate about developing android and web applications.Currently, I am working on <strong>full stack javascript development </strong>with react, mongo, node and express.</p>
            <p>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h
        as
         been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also t</p>
    
         <p>Have a project idea? <Link to="/contact">Contact Me</Link></p> 
            </Layout>
    )
}

export default AboutPage