import React from 'react'
import { graphql } from 'gatsby'
import Layout from './Layout'

export const query = graphql`
query($id: ID!) {
    wpgraphql {
        post(id: $id) {
            title
            content
        }
    }
}
`

const PostTemplate = ({data}) => {
    const { title, content } = data.wpgraphql.post;
    return (
            <Layout>
                Good
            <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
            <p dangerouslySetInnerHTML={{__html: content}}></p>
            </Layout>

    )
}

export default PostTemplate;