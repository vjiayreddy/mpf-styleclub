import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  makeVar,
} from "@apollo/client";

export const cartItemsVar = makeVar<any>(null);
const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

export default apolloClient;
