exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      wpgraphql {
        pages {
          nodes {
            id
            uri
          }
        }
        posts {
          nodes {
            id
            uri
          }
        }
      }
    }
  `)

  const pages = result.data.wpgraphql.pages.nodes
  const posts = result.data.wpgraphql.posts.nodes

  pages.forEach(page => {
    createPage({
      path: page.uri,
      component: require.resolve('./src/templates/page-template.js'),
      context: {
        id: page.id
      }
    })
  })

  posts.forEach(post => {
    createPage({
      path: `${post.uri}`,
      component: require.resolve('./src/templates/post-template.js'),
      context: {
        id: post.id
      }
    })
  })
}
