import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


import { assertObjectType } from 'graphql'

import image from '../images/ajeet.jpeg'

const IndexPage = () => {

    return (
        <Layout>
            <img src={image} width="100"/>
            <h1>Hello there. Welcome to my site.!</h1>
            <h2>I am Ajeet Chaulagain, a Full Stack Software engineer living in Melbourne, Australia</h2>
        </Layout>
    )
}

export default IndexPage
