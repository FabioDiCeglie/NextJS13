import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://next-js-13.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
