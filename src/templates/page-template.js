import React from 'react'
import { graphql } from 'gatsby'
import Layout from './Layout'

export const query = graphql`
query($id: ID!) {
    wpgraphql {
        page(id: $id) {
            title
            content
        }
    }
}
`

const PageTemplate = ({data}) => {
    const { title, content } = data.wpgraphql.page;
    return (
            <Layout>
            <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
            <p dangerouslySetInnerHTML={{__html: content}}></p>
            </Layout>

    )
}

export default PageTemplate;