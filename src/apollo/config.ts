import { ApolloClient, InMemoryCache } from "@apollo/client";
const apolloClient = new ApolloClient({
  uri: process.env.APOLLO_API,
  cache: new InMemoryCache(),
});

export default apolloClient;
