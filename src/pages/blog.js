import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from './../templates/Layout'

export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          uri
          id
          title
          excerpt
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      {data.wpgraphql.posts.nodes.map(post => {
        const { id, uri, title, excerpt } = post
        return (
          <div key={id}>
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
            <Link to={`blog${uri}`}>Read More This</Link>
          </div>
        )
      })}
    </Layout>
  )
}

export default Blog
