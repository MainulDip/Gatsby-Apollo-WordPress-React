import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'isomorphic-unfetch'

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost/wp/graphql',
    fetch
  })
})

export const Client_Second = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://graphqlzero.almansi.me/api',
      fetch
    })
  })

export default Client;