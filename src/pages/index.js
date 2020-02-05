import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


import { assertObjectType } from 'graphql'

import image from '../images/ajeet.jpeg'


const IndexPage = () => {

    return (
        <Layout>
            <img src={image}/>
            <h1><span>Hello.I'm </span>Ajeet Chaulagain</h1>
            <p>Full Stack Developer . Recent IT Graduate</p>
            <Link to="/about" className="btn">More about Me </Link>
        </Layout>
    )
}

export default IndexPage
