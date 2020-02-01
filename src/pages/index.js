import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/Header'

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>
                Hello there.
            </h1>
            <h2>
                I am software engineer passionate about developing android and web applications.
            </h2>
            <p>Have a project idea? <Link to="/contact">Contact Me</Link></p>
            <Footer/>
        </div>
    )
}

export default IndexPage
