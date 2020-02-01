import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/Header'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I am software engineer passionate about developing android applications</p>
            <p>Have a project idea? <Link to="/contact">Contact Me</Link></p> 
            <Footer />
        </div>
    )
}

export default AboutPage