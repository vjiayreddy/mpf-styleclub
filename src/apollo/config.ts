import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.APOLLO_API,
  cache: new InMemoryCache(),
});

export default apolloClient;
