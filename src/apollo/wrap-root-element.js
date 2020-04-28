import React from 'react';
import { ApolloProvider } from '@apollo/client'
import Client from './index'

export const wrapRootElement = ({element}) => (
<ApolloProvider client={Client}>{element}</ApolloProvider>
)