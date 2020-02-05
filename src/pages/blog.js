import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'


import Layout from '../components/layout'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
            }
          }
        }
      }
    `)
      console.log(data)
    return (
        <Layout>
        <h1>Stay tune!</h1>
        <p>This page is under construction</p>
        <ol>
          
        </ol>
        </Layout>
    )
}

export default BlogPage